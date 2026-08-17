/* 手机状态栏 - 侧边栏版本 */

/* ===== 配置项 - 换角色时修改这里 ===== */
const CONFIG = {
  characterName: '江寒屿',
  lockScreenBg: 'https://pic1.imgdb.cn/item/698088cda030e93d66a0b9a2.jpg',
  homeBg: 'https://pic1.imgdb.cn/i/0342JhI1nbK3dMhO09kMx8.jpg',
  musicCover: 'https://pic1.imgdb.cn/item/6a1336acfe89374d20942b42.png',
  petImg: 'https://pic1.imgdb.cn/item/698078dda030e93d66a0b48b.png',
  wechatGroupName: '再输就解散(6)',
  icons: {
    wechat: 'https://pic1.imgdb.cn/i/0342LFvqsttRooJPqMFpQS.png',
    weibo: 'https://pic1.imgdb.cn/i/0342LFvcMXVGFf2p9tXq3c.png',
    browser: 'https://pic1.imgdb.cn/i/0342LFw09Ax4mBe2XpJ31D.png',
    notes: 'https://pic1.imgdb.cn/i/0342LFvdQfMUh3RJFOc5qT.png',
    x: 'https://pic1.imgdb.cn/i/0342LFvwXLMRySw3QgTpLb.png',
    pet: 'https://pic1.imgdb.cn/item/698078dda030e93d66a0b48b.png'
  }
};

/* ===== 变量路径映射 ===== */
const VAR_MAP = {
  homeName: 'stat_data.phone.home_name',
  time: 'stat_data.phone.time',
  date: 'stat_data.phone.date',
  notifications: 'stat_data.phone.notifications',
  weatherLoc: 'stat_data.phone.weather.location',
  weatherCond: 'stat_data.phone.weather.condition',
  weatherTemp: 'stat_data.phone.weather.temperature',
  weatherSub: 'stat_data.phone.weather.sub_info',
  musicName: 'stat_data.phone.music.name',
  musicArtist: 'stat_data.phone.music.artist',
  remindDate: 'stat_data.phone.remind.date',
  remindItems: 'stat_data.phone.remind.items',
  wechatContent: 'stat_data.phone.apps.wechat',
  weiboContent: 'stat_data.phone.apps.weibo',
  browserContent: 'stat_data.phone.apps.browser',
  notesContent: 'stat_data.phone.apps.notes',
  xContent: 'stat_data.phone.apps.x',
  petContent: 'stat_data.phone.apps.pet'
};

/* ===== 工具函数 ===== */
function getVal(path, fallback) {
  fallback = fallback || '';
  try {
    var all = getAllVariables();
    return _.get(all, path, fallback);
  } catch (e) {
    return fallback;
  }
}

function getAllVarValues() {
  var v = {};
  var keys = Object.keys(VAR_MAP);
  for (var i = 0; i < keys.length; i++) {
    v[keys[i]] = getVal(VAR_MAP[keys[i]], '');
  }
  return v;
}

/* ===== 构建手机HTML ===== */
function buildPhoneHTML() {
  var v = getAllVarValues();
  var time = v.time || '00:00';
  var date = v.date || '';
  var homeName = v.homeName || CONFIG.characterName;

  return '<div class="jhy-wrap"><div class="jhy-body"><div class="jhy-scr">' +
    '<div class="jhy-isl"></div>' +
    '<div class="jhy-status"><div class="jhy-status-l">' + time + '</div><div class="jhy-status-r"><svg width="15" height="10" viewBox="0 0 14 10"><path d="M1 7h2v3H1zM4.5 5h2v5h-2zM8 3h2v7H8zM11.5 1h2v9h-2z" fill="#fff"/></svg><div class="jhy-batt-box"><div class="jhy-batt-in"></div></div></div></div>' +
    '<details class="jhy-device">' +
      '<summary>' +
        '<div class="jhy-lock-clock"><div class="jhy-lock-date">' + date + '</div><div class="jhy-lock-time">' + time + '</div></div>' +
        '<div class="jhy-lock-notis">' + (v.notifications || '') + '</div>' +
        '<div class="jhy-lock-fp"><div class="jhy-fp-ring"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="1.4" stroke-linecap="round"><path d="M12 4c-3.5 0-6 2.5-6 6v3M12 4c3.5 0 6 2.5 6 6v4c0 2-.5 4-1 5.5M9 20c-1-2-1.5-4-1.5-6.5V11M12 8c-1.5 0-2.5 1-2.5 2.5V14c0 1.5-.3 3-.8 4.5M14.5 10.5V14c0 2-.3 4-1 6M12 11.5V14"/></svg></div><div class="jhy-fp-tip">轻触指纹解锁</div></div>' +
      '</summary>' +
      '<div class="jhy-home">' +
        '<div class="jhy-home-scroll">' +
          '<div class="jhy-home-hdr"><div class="jhy-home-name">' + homeName + '</div></div>' +
          '<div class="jhy-widgets">' +
            '<div class="jhy-wgt"><div class="jhy-wgt-loc">' + (v.weatherLoc || '') + '</div><div class="jhy-wgt-cond">' + (v.weatherCond || '') + '</div><div class="jhy-wgt-temp">' + (v.weatherTemp || '') + '</div><div class="jhy-wgt-sub">' + (v.weatherSub || '') + '</div></div>' +
            '<div class="jhy-wgt jhy-music"><img class="jhy-music-cover" src="' + CONFIG.musicCover + '"><div class="jhy-music-name">' + (v.musicName || '') + '</div><div class="jhy-music-artist">' + (v.musicArtist || '') + '</div><div class="jhy-music-ctrl"><span>♡</span><span>▶</span><span>⏭</span></div></div>' +
          '</div>' +
          '<div class="jhy-remind"><div class="jhy-remind-hd"><div class="jhy-remind-title">提醒事项</div><div class="jhy-remind-date">' + (v.remindDate || '') + '</div></div>' + (v.remindItems || '') + '</div>' +
          '<div class="jhy-apps">' +
            '<details class="jhy-app wx"><summary><div class="ic-view"><div class="jhy-appic"><img src="' + CONFIG.icons.wechat + '"></div><div class="jhy-app-lbl">微信</div></div><div class="bar-view"><span class="jhy-bk">‹</span><span class="jhy-appbar-title">' + CONFIG.wechatGroupName + '</span></div></summary><div class="jhy-appbody">' + (v.wechatContent || '') + '</div></details>' +
            '<details class="jhy-app wb"><summary><div class="ic-view"><div class="jhy-appic"><img src="' + CONFIG.icons.weibo + '"></div><div class="jhy-app-lbl">微博</div></div><div class="bar-view"><span class="jhy-bk">‹</span><span class="jhy-appbar-title">微博</span></div></summary><div class="jhy-appbody">' + (v.weiboContent || '') + '</div></details>' +
            '<details class="jhy-app sf"><summary><div class="ic-view"><div class="jhy-appic"><img src="' + CONFIG.icons.browser + '"></div><div class="jhy-app-lbl">浏览器</div></div><div class="bar-view"><span class="jhy-bk">‹</span><span class="jhy-appbar-title">搜索记录</span></div></summary><div class="jhy-appbody">' + (v.browserContent || '') + '</div></details>' +
            '<details class="jhy-app note"><summary><div class="ic-view"><div class="jhy-appic"><img src="' + CONFIG.icons.notes + '"></div><div class="jhy-app-lbl">备忘录</div></div><div class="bar-view"><span class="jhy-bk">‹</span><span class="jhy-appbar-title">私人日记</span></div></summary><div class="jhy-appbody">' + (v.notesContent || '') + '</div></details>' +
            '<details class="jhy-app xx"><summary><div class="ic-view"><div class="jhy-appic"><img src="' + CONFIG.icons.x + '"></div><div class="jhy-app-lbl">X</div></div><div class="bar-view"><span class="jhy-bk">‹</span><span class="jhy-appbar-title">主页</span></div></summary><div class="jhy-appbody">' + (v.xContent || '') + '</div></details>' +
            '<details class="jhy-app pet"><summary><div class="ic-view"><div class="jhy-appic plain"><img src="' + CONFIG.icons.pet + '"></div><div class="jhy-app-lbl">桌宠</div></div><div class="bar-view"><span class="jhy-bk">‹</span><span class="jhy-appbar-title">迷你' + CONFIG.characterName + '</span></div></summary><div class="jhy-appbody"><div class="jhy-pet-top"><img class="jhy-pet-img" src="' + CONFIG.petImg + '"><div class="jhy-pet-name">' + CONFIG.characterName + '</div><div class="jhy-pet-tag">♡ 现在只有巴掌那么大</div></div>' + (v.petContent || '') + '</div></details>' +
          '</div>' +
        '</div>' +
        '<div class="jhy-home-bar"><span></span></div>' +
      '</div>' +
    '</details>' +
  '</div></div></div>';
}

/* ===== 注入CSS ===== */
function injectStyles() {
  if (document.getElementById('jhy-phone-styles')) return;
  var style = document.createElement('style');
  style.id = 'jhy-phone-styles';
  style.textContent = `
#jhy-phone-drawer{margin:10px}
#jhy-phone-drawer .inline-drawer-content{max-height:700px;overflow:hidden}
.jhy-wrap{display:flex;justify-content:center;padding:12px;font-family:'PingFang SC','Microsoft YaHei',system-ui,sans-serif}
.jhy-wrap,.jhy-wrap *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
.jhy-body{width:100%;max-width:320px;height:600px;background:#0a0a0a;border-radius:46px;padding:9px;box-shadow:0 16px 50px rgba(0,0,0,0.55);flex-shrink:0}
.jhy-scr{width:100%;height:100%;border-radius:38px;overflow:hidden;position:relative;background:#1a1f2e;transform:translateZ(0)}
.jhy-isl{position:absolute;top:11px;left:50%;transform:translateX(-50%);width:92px;height:24px;background:#000;border-radius:14px;z-index:80}
.jhy-status{position:absolute;top:0;left:0;right:0;height:44px;display:flex;justify-content:space-between;align-items:center;padding:14px 24px 0;font-size:11px;color:#fff;z-index:90;pointer-events:none}
.jhy-status-l{font-weight:600}.jhy-status-r{display:flex;align-items:center;gap:5px}
.jhy-batt-box{width:20px;height:10px;border:1.2px solid rgba(255,255,255,0.85);border-radius:2.5px;padding:1px;position:relative}
.jhy-batt-box::after{content:'';position:absolute;right:-3px;top:50%;transform:translateY(-50%);width:1.5px;height:5px;background:rgba(255,255,255,0.85)}
.jhy-batt-in{height:100%;background:#fff;border-radius:1px;width:82%}
.jhy-bk{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;font-size:19px;line-height:1;flex-shrink:0;background:rgba(255,255,255,0.18)}
.jhy-device{position:absolute;inset:0}
.jhy-device>summary{list-style:none;cursor:pointer;position:absolute;inset:0;z-index:40;display:flex;flex-direction:column;align-items:center;background:#000 center/cover no-repeat;background-image:url('${CONFIG.lockScreenBg}');transition:0.55s cubic-bezier(0.7,0,0.2,1)}
.jhy-device>summary::-webkit-details-marker{display:none}
.jhy-device>summary::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.05) 30%,rgba(0,0,0,0.15) 60%,rgba(0,0,0,0.6))}
.jhy-device[open]>summary{top:50px;right:14px;left:auto;bottom:auto;width:30px;height:30px;border-radius:50%;background-image:none;background:rgba(255,255,255,0.15);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;z-index:95}
.jhy-device[open]>summary::before{display:none}
.jhy-device[open]>summary>*{display:none}
.jhy-device[open]>summary::after{content:'⏻';color:#fff;font-size:15px}
.jhy-lock-clock{position:relative;text-align:center;margin-top:56px;color:#fff;text-shadow:0 2px 12px rgba(0,0,0,0.4)}
.jhy-lock-date{font-size:15px;font-weight:500;opacity:0.95}
.jhy-lock-time{font-size:62px;font-weight:250;line-height:1;margin-top:2px}
.jhy-lock-notis{position:absolute;top:44%;left:50%;transform:translateX(-50%);width:84%;display:flex;flex-direction:column;gap:6px}
.jhy-lnoti{display:flex;align-items:center;gap:10px;background:rgba(30,40,55,0.42);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:9px 12px}
.jhy-lnoti img{width:30px;height:30px;border-radius:8px;object-fit:cover;flex-shrink:0}
.jhy-lnoti-txt{flex:1;min-width:0}
.jhy-lnoti-top{display:flex;justify-content:space-between;font-size:9px;color:rgba(255,255,255,0.6)}
.jhy-lnoti-msg{font-size:12px;color:#fff;margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.jhy-lock-fp{position:relative;margin-top:auto;margin-bottom:32px;display:flex;flex-direction:column;align-items:center;gap:9px}
.jhy-fp-ring{width:52px;height:52px;border-radius:50%;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.25);display:flex;align-items:center;justify-content:center;animation:jhyFp 2.2s ease-in-out infinite}
@keyframes jhyFp{0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,0.18)}50%{box-shadow:0 0 0 8px rgba(255,255,255,0)}}
.jhy-fp-tip{font-size:11px;color:rgba(255,255,255,0.75);letter-spacing:1px}
.jhy-home{position:absolute;inset:0;background:#2a3550 center/cover no-repeat;background-image:url('${CONFIG.homeBg}');display:flex;flex-direction:column}
.jhy-home-scroll{flex:1;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:52px 16px 8px;scrollbar-width:none}
.jhy-home-scroll::-webkit-scrollbar{display:none}
.jhy-home-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.jhy-home-name{font-size:13px;font-weight:600;color:#fff;text-shadow:0 1px 6px rgba(0,0,0,0.4)}
.jhy-widgets{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}
.jhy-wgt{background:rgba(255,255,255,0.16);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.18);border-radius:20px;padding:13px;height:132px;display:flex;flex-direction:column;color:#fff}
.jhy-wgt-loc{font-size:13px;font-weight:600}.jhy-wgt-cond{font-size:10px;opacity:0.85;margin-top:1px}
.jhy-wgt-temp{font-size:38px;font-weight:300;line-height:1;margin-top:auto}.jhy-wgt-sub{font-size:9px;opacity:0.8;margin-top:4px}
.jhy-music{align-items:center;text-align:center;padding:9px;justify-content:center}
.jhy-music-cover{width:44px;height:44px;border-radius:50%;object-fit:cover;border:3px solid rgba(255,255,255,0.35);animation:jhySpin 6s linear infinite}
@keyframes jhySpin{to{transform:rotate(360deg)}}
.jhy-music-name{font-size:10.5px;font-weight:600;margin-top:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.jhy-music-artist{font-size:8.5px;opacity:0.75}
.jhy-music-ctrl{display:flex;gap:14px;margin-top:5px;font-size:13px}.jhy-music-ctrl span{opacity:0.9}
.jhy-remind{background:rgba(255,255,255,0.14);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.16);border-radius:18px;padding:11px 13px;margin-bottom:14px;color:#fff}
.jhy-remind-hd{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:7px}
.jhy-remind-title{font-size:11px;font-weight:600}.jhy-remind-date{font-size:9px;opacity:0.7}
.jhy-remind-item{font-size:10.5px;opacity:0.92;line-height:1.85;display:flex;gap:7px;align-items:center}
.jhy-remind-item::before{content:'○';font-size:9px;opacity:0.7}
.jhy-apps{display:grid;grid-template-columns:repeat(3,1fr);gap:16px 8px;padding:4px 6px 0}
.jhy-app{position:relative}
.jhy-app>summary{list-style:none;cursor:pointer}
.jhy-app>summary::-webkit-details-marker{display:none}
.jhy-app .ic-view{display:flex;flex-direction:column;align-items:center;gap:6px}
.jhy-app .bar-view{display:none}
.jhy-appic{width:56px;height:56px;border-radius:16px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.25)}
.jhy-appic img{width:100%;height:100%;object-fit:cover;display:block}
.jhy-appic.plain{box-shadow:none;background:transparent}
.jhy-app-lbl{font-size:10px;color:#fff;text-shadow:0 1px 4px rgba(0,0,0,0.5)}
.jhy-app[open]{position:absolute;inset:0;z-index:500;background:#eef4fb;display:block}
.jhy-app[open]>summary{position:absolute;top:0;left:0;right:0;z-index:5;padding:44px 14px 12px;color:#fff;background:linear-gradient(135deg,#4a7a9a,#2a5a7a)}
.jhy-app[open] .ic-view{display:none}
.jhy-app[open] .bar-view{display:flex;align-items:center;gap:8px}
.jhy-appbar-title{font-size:15px;font-weight:600}
.jhy-app:not([open])>.jhy-appbody{display:none}
.jhy-app[open]>.jhy-appbody{position:absolute;top:0;left:0;right:0;bottom:0;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;padding:88px 16px 24px;font-size:12.5px;color:#2a4a5a;line-height:1.85;text-align:left}
.jhy-app[open]>.jhy-appbody::-webkit-scrollbar{width:3px}
.jhy-app[open]>.jhy-appbody::-webkit-scrollbar-thumb{background:rgba(74,122,154,0.3);border-radius:3px}
.jhy-app.wx[open]>summary{background:#ededed;color:#111}
.jhy-app.wx .jhy-bk{background:rgba(0,0,0,0.08)}
.jhy-app.wb[open]>summary{background:linear-gradient(135deg,#ff8a3d,#ff5252)}
.jhy-app.note[open]>summary{background:linear-gradient(135deg,#f5e6a8,#e8c95a);color:#5a4a00}
.jhy-app.note .jhy-bk{background:rgba(0,0,0,0.08)}
.jhy-app.xx[open]>summary{background:#000}
.jhy-app.pet[open]>summary{background:linear-gradient(135deg,#ffb3d9,#ff8ac4)}
.jhy-app.wx[open]{background:#ededed}
.jhy-app.wx[open]>.jhy-appbody{background:#ededed;padding:88px 12px 24px}
.jhy-app.wb[open]{background:#f4f4f4}
.jhy-app.wb[open]>.jhy-appbody{background:#f4f4f4}
.jhy-app.sf[open]{background:#f2f5f8}
.jhy-app.sf[open]>.jhy-appbody{background:#f2f5f8}
.jhy-app.note[open]{background:#faf6ea}
.jhy-app.note[open]>.jhy-appbody{background:#faf6ea}
.jhy-app.xx[open]{background:#000}
.jhy-app.xx[open]>.jhy-appbody{background:#000;padding:88px 0 24px}
.jhy-app.pet[open]{background:#fff0f6}
.jhy-app.pet[open]>.jhy-appbody{background:linear-gradient(160deg,#fff0f6,#ffe0ef);padding:88px 0 24px}
.jhy-home-bar{display:flex;justify-content:center;padding:8px 0 10px;flex-shrink:0}
.jhy-home-bar span{width:110px;height:5px;background:rgba(255,255,255,0.55);border-radius:3px}
.jhy-grp-r{display:flex;flex-direction:row-reverse;gap:7px;margin-bottom:12px}
.jhy-grp-l{display:flex;gap:7px;margin-bottom:12px}
.jhy-grp-av{width:36px;height:36px;border-radius:6px;object-fit:cover;flex-shrink:0}
.jhy-grp-bub{max-width:180px;border-radius:6px;padding:8px 11px;font-size:13px;line-height:1.5;word-break:break-word}
.jhy-grp-r .jhy-grp-bub{background:#95ec69}.jhy-grp-l .jhy-grp-bub{background:#fff}
.jhy-grp-name{font-size:10px;color:#9a9a9a;margin-bottom:3px}.jhy-grp-r .jhy-grp-name{text-align:right}
.jhy-wb-hot{background:#fff;border-radius:10px;padding:4px 12px;margin-bottom:12px}
.jhy-wb-hot-t{font-size:11px;color:#ff8200;font-weight:700;padding:8px 0 4px}
.jhy-wb-hot-i{font-size:12px;color:#333;padding:7px 0;border-top:1px solid #f0f0f0;display:flex;gap:8px}
.jhy-wb-hot-i b{color:#ff5252}
.jhy-wb-post{background:#fff;border-radius:10px;padding:12px;margin-bottom:10px}
.jhy-wb-uh{display:flex;gap:8px;align-items:center;margin-bottom:8px}
.jhy-wb-uh img{width:36px;height:36px;border-radius:50%;object-fit:cover}
.jhy-wb-un{font-size:12.5px;font-weight:600;color:#ff8200}.jhy-wb-ut{font-size:9px;color:#aaa}
.jhy-wb-txt{font-size:13px;color:#222;line-height:1.7}
.jhy-wb-cmts{border-top:1px solid #f0f0f0;margin-top:10px;padding-top:8px}
.jhy-wb-c{display:flex;gap:7px;margin-bottom:9px}
.jhy-wb-c img{width:26px;height:26px;border-radius:50%;object-fit:cover;flex-shrink:0}
.jhy-wb-cn{font-size:11px;color:#8a9bb5;font-weight:600}.jhy-wb-ct{font-size:12px;color:#333;line-height:1.5}
.jhy-wb-sub{background:#f7f7f7;border-radius:8px;padding:6px 9px;margin-top:4px;font-size:11.5px}
.jhy-list-item{position:relative;background:#fff;border-radius:10px;margin-bottom:10px;box-shadow:0 1px 3px rgba(0,0,0,0.05)}
.jhy-list-item>summary{list-style:none;cursor:pointer;padding:11px 13px}
.jhy-list-item>summary::-webkit-details-marker{display:none}
.jhy-brow-q{font-size:13px;color:#1a5a8a;font-weight:600;display:flex;gap:4px;align-items:center}
.jhy-brow-q::before{content:'⌕';color:#4a8aaa}
.jhy-brow-prev{font-size:11px;color:#8a9aa5;margin-top:5px;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.jhy-bk2{display:none;font-size:18px;color:#fff}
.jhy-list-item[open]{position:absolute;inset:0;z-index:600;background:#fff;display:block;margin:0;border-radius:0}
.jhy-list-item[open]>summary{position:absolute;top:0;left:0;right:0;z-index:5;padding:44px 14px 12px;background:linear-gradient(135deg,#5a9ac0,#3a7aa0)}
.jhy-list-item[open] .jhy-brow-q{color:#fff}
.jhy-list-item[open] .jhy-brow-q::before{display:none}
.jhy-list-item[open] .jhy-brow-prev{display:none}
.jhy-list-item[open] .jhy-bk2{display:inline}
.jhy-list-item:not([open])>.jhy-dbody{display:none}
.jhy-list-item[open]>.jhy-dbody{position:absolute;top:0;left:0;right:0;bottom:0;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;padding:96px 16px 24px;font-size:12.5px;color:#333;line-height:2;text-align:left}
.jhy-tweet{background:transparent;border:0;border-bottom:1px solid #2f3336;border-radius:0;box-shadow:none;margin:0}
.jhy-tweet>summary{padding:12px 15px}
.jhy-tw-hd{display:flex;align-items:center;gap:5px;font-size:12px}
.jhy-tw-name{color:#e7e9ea;font-weight:700}.jhy-tw-handle{color:#71767b}
.jhy-tw-prev{color:#e7e9ea;font-size:13px;line-height:1.6;margin-top:5px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.jhy-tw-act{display:flex;justify-content:space-between;max-width:220px;margin-top:9px;font-size:11px;color:#71767b}
.jhy-tweet[open]{position:absolute;inset:0;z-index:600;background:#000;display:block;margin:0}
.jhy-tweet[open]>summary{position:absolute;top:0;left:0;right:0;z-index:5;padding:44px 15px 12px;background:#000}
.jhy-tweet[open] .jhy-tw-prev,.jhy-tweet[open] .jhy-tw-act{display:none}
.jhy-tweet[open] .jhy-bk2{display:inline;margin-right:6px}
.jhy-tweet:not([open])>.jhy-dbody{display:none}
.jhy-tweet[open]>.jhy-dbody{position:absolute;top:0;left:0;right:0;bottom:0;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;padding:96px 16px 24px;background:#000;color:#e7e9ea;font-size:14px;line-height:1.7;text-align:left}
.jhy-xc{display:flex;gap:8px;padding:10px 0;border-top:1px solid #2f3336}
.jhy-xc img{width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0}
.jhy-xc-n{font-size:12px;color:#e7e9ea;font-weight:600}
.jhy-xc-h{font-size:11px;color:#71767b;margin-left:4px;font-weight:400}
.jhy-xc-t{font-size:12.5px;color:#e7e9ea;line-height:1.5;margin-top:2px}
.jhy-diary-date{font-weight:700;color:#a56a5a;border-bottom:1px dashed #cbb;padding-bottom:2px;margin:14px 0 6px}
.jhy-diary-date:first-child{margin-top:0}
.jhy-diary-strike{text-decoration:line-through;color:#a99}
.jhy-diary-txt{color:#4a3f2a;font-size:13px;line-height:2}
.jhy-pet-top{text-align:center;padding:8px 16px 12px}
.jhy-pet-img{width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 6px 10px rgba(200,120,160,0.4));animation:jhyBob 2.4s ease-in-out infinite}
@keyframes jhyBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.jhy-pet-name{font-size:15px;font-weight:700;color:#d95a9a;margin-top:6px}
.jhy-pet-tag{display:inline-block;font-size:10px;background:#ffd1e6;color:#c04a84;border-radius:10px;padding:2px 10px;margin-top:5px}
.jhy-pet-bubble{background:#fff;border-radius:16px;padding:13px 15px;margin:0 16px 14px;font-size:12.5px;line-height:1.9;color:#7a4a64;box-shadow:0 3px 10px rgba(220,150,180,0.25)}
.jhy-pet-stat{display:flex;gap:8px;padding:0 16px 24px}
.jhy-pet-chip{flex:1;background:#fff;border-radius:12px;padding:9px;text-align:center;box-shadow:0 2px 6px rgba(220,150,180,0.2)}
.jhy-pet-chip-v{font-size:16px}.jhy-pet-chip-l{font-size:9px;color:#c07aa0;margin-top:2px}
.jhy-scr em,.jhy-scr i{font-style:normal!important;color:inherit!important}
.jhy-dbody{color:#333!important}
`;
  document.head.appendChild(style);
}

/* ===== 创建侧边栏面板 ===== */
function createPanel() {
  if (document.getElementById('jhy-phone-drawer')) return;

  /* 找到酒馆右侧面板的容器 */
  var container = document.getElementById('extensionsMenu');
  if (!container) {
    container = document.getElementById('extensions_settings2');
  }
  if (!container) {
    /* 最后的fallback: 找右侧导航面板 */
    container = document.querySelector('#right-nav-panel .right-nav-panel-tabs-content');
  }
  if (!container) {
    console.warn('[JHY Phone] 未找到侧边栏容器，尝试备用位置');
    container = document.querySelector('#form_sheld');
  }
  if (!container) return;

  var drawer = document.createElement('div');
  drawer.id = 'jhy-phone-drawer';
  drawer.className = 'inline-drawer';
  drawer.innerHTML = '<div class="inline-drawer-toggle inline-drawer-header">' +
    '<b>📱 ' + CONFIG.characterName + '的手机</b>' +
    '<div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>' +
    '</div>' +
    '<div class="inline-drawer-content" style="display:none;">' +
    '<div id="jhy-phone-content"></div>' +
    '</div>';

  container.prepend(drawer);

  /* 绑定折叠事件 */
  var toggle = drawer.querySelector('.inline-drawer-toggle');
  toggle.addEventListener('click', function() {
    var content = drawer.querySelector('.inline-drawer-content');
    var icon = drawer.querySelector('.inline-drawer-icon');
    if (content.style.display === 'none') {
      content.style.display = 'block';
      icon.classList.remove('down');
      icon.classList.add('up');
    } else {
      content.style.display = 'none';
      icon.classList.remove('up');
      icon.classList.add('down');
    }
  });
}

/* ===== 刷新内容 ===== */
function refreshPhone() {
  var contentEl = document.getElementById('jhy-phone-content');
  if (!contentEl) return;
  contentEl.innerHTML = buildPhoneHTML();
}

/* ===== 初始化 ===== */
function init() {
  injectStyles();
  createPanel();
  refreshPhone();

  /* 监听事件来自动刷新 */
  var eventSource = window.eventSource;
  if (eventSource) {
    var event_types = window.event_types;
    if (event_types) {
      eventSource.on(event_types.MESSAGE_RECEIVED, function() {
        setTimeout(refreshPhone, 600);
      });
      eventSource.on(event_types.CHAT_CHANGED, function() {
        setTimeout(refreshPhone, 600);
      });
    }
  }

  /* 定时轮询刷新（兜底方案，每30秒刷一次） */
  setInterval(refreshPhone, 30000);

  console.log('[JHY Phone] 手机状态栏已加载');
}

/* 延迟执行，确保DOM就绪 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(init, 2000);
  });
} else {
  setTimeout(init, 2000);
}
