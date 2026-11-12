// Display names for unambiguous offer families, not eligibility/reward claims.
// Unknown IDs remain intact. The original entries are never rewritten.
const months={Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12};
export function activityLabel(id){
 const value=String(id??'');let match;
 if(/^(?:WW|ENWW)_pcparent_FY\d+_Duolingo\d+M_punchcard$/.test(value))return '多邻国推广任务卡';
 if((match=/^(?:WW|ENWW)_pcparent_RewardsApp_weekly_Exclusive_([A-Z][a-z]{2})w(\d+)_(\d{4})_punchcard$/.exec(value))&&months[match[1]])return '积分应用每周专属任务卡';
 if((match=/^(?:WW|ENWW)_pcparent_FY\d+_BingMonthlyPC_([A-Z][a-z]{2})_punchcard$/.exec(value))&&months[match[1]])return '必应每月电脑端任务卡';
 return value;
}
export function originalActivityIds(text){
 return [...new Set([...String(text).matchAll(/(?:offerId=|活动标识[：:]\s*)([A-Za-z0-9_:-]+)/g)].map(m=>m[1]))];
}
