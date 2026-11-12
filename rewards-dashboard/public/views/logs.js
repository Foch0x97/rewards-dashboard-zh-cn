import * as U from "../util.js";
import {logSearchText,exportLogText,renderLogEntry,preferredLogDisplay} from '../logDisplay.js';

const MAX_LINES = 3000;
const LEVEL_RANK = { debug: 0, info: 1, warn: 2, error: 3 };
let rootEl = null;
let entries = []; // sorted by id
let seen = new Set();
let paused = false;
let pendingWhilePaused = 0;
let filterLevel = "all";
let filterText = "";
let autoscroll = true;
let displayMode = 'original';
const DISPLAY_KEY='rewards-dashboard-log-display';
const chineseUi=()=>globalThis.document?.documentElement?.lang==='zh-CN';

const matches = (e) => {
  if (
    filterLevel !== "all" &&
    (LEVEL_RANK[e.level] ?? 1) < LEVEL_RANK[filterLevel]
  )
    return false;
  if (!filterText) return true;
  const hay = logSearchText(e);
  return hay.includes(filterText);
};

function lineHtml(e) {
  return renderLogEntry(e,displayMode,chineseUi());
}

function atBottom(box) {
  return box.scrollHeight - box.scrollTop - box.clientHeight < 60;
}

function renderAll() {
  const box = U.$("#logBox", rootEl);
  const visible = entries.filter(matches);
  box.innerHTML = visible.length
    ? visible.slice(-MAX_LINES).map(lineHtml).join("")
    : '<p class="empty-note">No log lines match the current filter.</p>';
  if (autoscroll) box.scrollTop = box.scrollHeight;
  updateMeta();
}

function updateMeta() {
  U.$("#logCount", rootEl).textContent =
    `${entries.length.toLocaleString()} line${entries.length === 1 ? "" : "s"} buffered`;
  const btn = U.$("#logPause", rootEl);
  btn.textContent = paused
    ? pendingWhilePaused
      ? `Resume (${pendingWhilePaused} new)`
      : "Resume"
    : "Pause";
  btn.classList.toggle("btn-primary", paused);
}

function addEntry(entry, live) {
  if (!entry || entry.id == null || seen.has(entry.id)) return false;
  seen.add(entry.id);

  const inOrder = !entries.length || entry.id > entries[entries.length - 1].id;
  if (inOrder) entries.push(entry);
  else {
    entries.push(entry);
    entries.sort((a, b) => a.id - b.id);
  }

  if (entries.length > MAX_LINES * 2) {
    const dropped = entries.splice(0, entries.length - MAX_LINES);
    for (const d of dropped) seen.delete(d.id);
  }

  if (!live) return true;

  if (paused) {
    pendingWhilePaused++;
    updateMeta();
    return true;
  }

  if (!inOrder) {
    renderAll();
    return true;
  }

  if (matches(entry)) {
    const box = U.$("#logBox", rootEl);
    const wasAtBottom = atBottom(box);
    if (box.querySelector(".empty-note")) box.innerHTML = "";
    box.insertAdjacentHTML("beforeend", lineHtml(entry));
    while (box.childElementCount > MAX_LINES) box.firstElementChild.remove();
    if (autoscroll && wasAtBottom) box.scrollTop = box.scrollHeight;
  }
  updateMeta();
  return true;
}

function download(chinese=false) {
  const text = exportLogText(entries,chinese);
  const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = `rewards-log-${chinese?'chinese-':'english-'}${new Date().toISOString().replace(/[:.]/g, "-")}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

export default {
  id: "logs",
  label: "Logs",
  interval: 0, // live — nothing to poll

  mount(root, ctx) {
    rootEl = root;
    try { displayMode=preferredLogDisplay(globalThis.localStorage,chineseUi()); }
    catch { displayMode=preferredLogDisplay(null,chineseUi()); }
    root.innerHTML = `
            <section class="panel" aria-labelledby="logs-heading">
                <div class="panel-head">
                    <h2 id="logs-heading">Live logs</h2>
                    <span class="panel-sub" id="logCount">0 lines buffered</span>
                </div>

                <div class="toolbar">
                    <label class="field field--inline"><span>Log display</span>
                      <select id="logDisplay" class="input">
                        <option value="zh">Chinese logs</option>
                        <option value="original">English logs</option>
                      </select>
                    </label>
                    <label class="field field--inline">
                        <span>Level</span>
                        <select id="logLevel" class="input">
                            <option value="all">All</option>
                            <option value="info">Info and up</option>
                            <option value="warn">Warnings and up</option>
                            <option value="error">Errors only</option>
                        </select>
                    </label>
                    <label class="field field--grow">
                        <span class="visually-hidden">Search</span>
                        <input id="logSearch" class="input" type="search" placeholder="Filter lines\u2026" autocomplete="off">
                    </label>
                    <label class="check">
                        <input type="checkbox" id="logAutoscroll" checked>
                        <span>Autoscroll</span>
                    </label>
                    <button type="button" id="logPause" class="btn">Pause</button>
                    <button type="button" id="logMore" class="btn">Load 2000</button>
                    <button type="button" id="logDownload" class="btn">Export English logs</button>
                    <button type="button" id="logDownloadChinese" class="btn">Export Chinese logs</button>
                    <button type="button" id="logClear" class="btn">Clear</button>
                </div>

                <p class="hint">Chinese logs translate task messages, states and diagnostics, including structured data and stack locations. English logs keep the original. Bot notification filters still use the original logs.</p>
                <div class="log-box" id="logBox" tabindex="0" aria-live="off">
                    <p class="empty-note">Waiting for log lines\u2026</p>
                </div>
            </section>`;

    const display=U.$('#logDisplay',root);display.value=displayMode;
    display.addEventListener('change',e=>{
      displayMode=e.target.value;
      try{localStorage.setItem(DISPLAY_KEY,displayMode);}catch{}
      renderAll();
    });
    U.$("#logLevel", root).addEventListener("change", (e) => {
      filterLevel = e.target.value;
      renderAll();
    });
    U.$("#logSearch", root).addEventListener(
      "input",
      U.debounce((e) => {
        filterText = e.target.value.trim().toLowerCase();
        renderAll();
      }, 200),
    );
    U.$("#logAutoscroll", root).addEventListener("change", (e) => {
      autoscroll = e.target.checked;
      if (autoscroll) {
        const box = U.$("#logBox", rootEl);
        box.scrollTop = box.scrollHeight;
      }
    });
    U.$("#logPause", root).addEventListener("click", () => {
      paused = !paused;
      if (!paused) {
        pendingWhilePaused = 0;
        renderAll();
      }
      updateMeta();
    });
    U.$("#logClear", root).addEventListener("click", () => {
      entries = [];
      seen = new Set();
      pendingWhilePaused = 0;
      renderAll();
    });
    U.$("#logDownload", root).addEventListener("click", () => download(false));
    U.$("#logDownloadChinese", root).addEventListener("click", () => download(true));
    U.$("#logMore", root).addEventListener("click", async () => {
      try {
        const res = await ctx.api.logs(2000);
        for (const e of res.logs || []) addEntry(e, false);
        renderAll();
        U.toast(
          `Buffer filled to ${entries.length.toLocaleString()} lines.`,
          "success",
        );
      } catch (e) {
        U.toast(e.message, "error");
      }
    });
  },

  async refresh(ctx) {
    if (entries.length) return;
    try {
      const res = await ctx.api.logs(500);
      for (const e of res.logs || []) addEntry(e, false);
    } catch {
    }
    renderAll();
  },

  onLog(entry) {
    if (!rootEl) return;
    addEntry(entry, true);
  },

  onReset() {
    entries = [];
    seen = new Set();
    pendingWhilePaused = 0;
    if (rootEl) renderAll();
  },

  redraw() {
    if (rootEl) renderAll();
  },
};
