const _0x2bd386=_0xdf0c;(function(_0x323903,_0x124055){const _0x575b63=_0xdf0c,_0x586c53=_0x323903();while(!![]){try{const _0x1b5333=-parseInt(_0x575b63(0x1fc))/0x1+-parseInt(_0x575b63(0x1f7))/0x2+-parseInt(_0x575b63(0x1f6))/0x3+-parseInt(_0x575b63(0x1e7))/0x4+-parseInt(_0x575b63(0x21c))/0x5+-parseInt(_0x575b63(0x1f0))/0x6*(-parseInt(_0x575b63(0x1e3))/0x7)+-parseInt(_0x575b63(0x22a))/0x8*(-parseInt(_0x575b63(0x233))/0x9);if(_0x1b5333===_0x124055)break;else _0x586c53['push'](_0x586c53['shift']());}catch(_0x1ceabe){_0x586c53['push'](_0x586c53['shift']());}}}(_0x37d5,0x2fee6));const {Client,GatewayIntentBits}=require(_0x2bd386(0x1e5)),axios=require(_0x2bd386(0x20a));require('dotenv')[_0x2bd386(0x239)]();const express=require(_0x2bd386(0x227)),path=require(_0x2bd386(0x235)),client=new Client({'intents':[GatewayIntentBits[_0x2bd386(0x1eb)],GatewayIntentBits['GuildMessages'],GatewayIntentBits[_0x2bd386(0x22b)]]}),app=express(),port=0xbb8;app[_0x2bd386(0x1ff)](express[_0x2bd386(0x23b)](path['join'](__dirname,_0x2bd386(0x217)))),app[_0x2bd386(0x206)]('/',(_0x14c39b,_0x5714c6)=>{const _0x524b52=_0x2bd386;_0x5714c6[_0x524b52(0x22f)](path[_0x524b52(0x222)](__dirname,_0x524b52(0x210)));}),app[_0x2bd386(0x231)](port,()=>{console['log']('Server\x20running\x20at\x20http://localhost:'+port);});function _0x37d5(){const _0x137f22=['axios','once','TOKEN','Please\x20provide\x20a\x20Roblox\x20username.','Logged\x20in\x20as:','You\x20do\x20not\x20have\x20the\x20required\x20role\x20to\x20use\x20this\x20command.','index.html','replace','messageCreate','from','toString','channel','map','public','data','Old\x20username\x20is\x20not\x20in\x20the\x20whitelist.','members','utf-8','107325lYGpqh','response','sha','You\x20can\x20only\x20whitelist\x20once\x20every\x2024\x20hours.\x20Use\x20:replace\x20to\x20update.','https://users.roblox.com/v1/usernames/users','1284181335103115429','join','split','roles','exec','local\x20premium\x20=\x20{\x0a','express','An\x20error\x20occurred:\x20','User\x20is\x20already\x20whitelisted.','8Caxyvm','MessageContent','Replace\x20Roblox\x20username\x20in\x20premium\x20list',',\x0a\x20\x20\x20\x20','ADMINISTRATOR','sendFile','has','listen','Error\x20handling\x20the\x20check\x20command:','7045587QDjQnR','Error\x20retrieving\x20whitelist\x20information.','path','post','GITHUB_API_URL','author','config','whitelistCooldowns','static','startsWith','**\x20is\x20not\x20on\x20the\x20whitelist.','local\x20premium\x20=\x20{\x0a\x20\x20\x20\x20','trim','application/json','length','token\x20','now','257775DTXNRf','\x20has\x20been\x20added\x20to\x20the\x20whitelist.','discord.js','guild','1099188VIksuU','log','includes','env','Guilds','put','**\x20has\x20been\x20replaced\x20with\x20**','permissions','Add\x20Roblox\x20username\x20to\x20premium\x20list','60CJZnOF','login','content','**.','bot','send','988836haKNVU','551152nXRnDQ','GITHUB_TOKEN',':replace','user','message','53317ufHjYs','base64','error','use','cache','ready','Error\x20handling\x20the\x20whitelist\x20command:','Error\x20handling\x20the\x20replace\x20command:','Please\x20provide\x20both\x20the\x20old\x20and\x20new\x20Roblox\x20usernames.',',\x0a}','get','Username\x20does\x20not\x20exist.','Bot\x20is\x20ready!','exit'];_0x37d5=function(){return _0x137f22;};return _0x37d5();}const GITHUB_API_URL=process[_0x2bd386(0x1ea)][_0x2bd386(0x237)],GITHUB_TOKEN=process[_0x2bd386(0x1ea)][_0x2bd386(0x1f8)],PREMIUM_ROLE_ID=_0x2bd386(0x221);client[_0x2bd386(0x20b)](_0x2bd386(0x201),()=>{const _0x399c7a=_0x2bd386;console[_0x399c7a(0x1e8)](_0x399c7a(0x208));}),client['on'](_0x2bd386(0x212),async _0x96f338=>{const _0x1714ae=_0x2bd386;if(_0x96f338[_0x1714ae(0x238)][_0x1714ae(0x1f4)])return;const _0x2dd8d8=(_0x125194,_0x54df01)=>_0x125194[_0x1714ae(0x224)][_0x1714ae(0x200)][_0x1714ae(0x230)](_0x54df01),_0x3fc798=_0x26e7d9=>{const _0x300453=_0x1714ae,_0x4b0f43=Date[_0x300453(0x1e2)](),_0x503a0e=global[_0x300453(0x23a)][_0x26e7d9]||0x0;return _0x4b0f43-_0x503a0e>0x18*0x3c*0x3c*0x3e8;},_0x22ab8a=_0x437583=>{const _0x14e137=_0x1714ae;global[_0x14e137(0x23a)][_0x437583]=Date['now']();};if(_0x96f338[_0x1714ae(0x1f2)][_0x1714ae(0x23c)](':whitelist')){const _0xaa228f=_0x96f338[_0x1714ae(0x1f2)]['split']('\x20')[0x1];if(!_0xaa228f)return _0x96f338[_0x1714ae(0x215)]['send'](_0x1714ae(0x20d));try{const _0x5123f0=await axios[_0x1714ae(0x236)](_0x1714ae(0x220),{'usernames':[_0xaa228f],'excludeBannedUsers':![]});if(_0x5123f0[_0x1714ae(0x218)]&&_0x5123f0[_0x1714ae(0x218)]['data']&&_0x5123f0[_0x1714ae(0x218)][_0x1714ae(0x218)][_0x1714ae(0x241)]>0x0){const _0x45a9ba=_0x96f338[_0x1714ae(0x1e6)][_0x1714ae(0x21a)][_0x1714ae(0x200)][_0x1714ae(0x206)](_0x96f338[_0x1714ae(0x238)]['id']);if(!_0x45a9ba[_0x1714ae(0x1ee)][_0x1714ae(0x230)](_0x1714ae(0x22e))&&!_0x2dd8d8(_0x45a9ba,PREMIUM_ROLE_ID))return _0x96f338[_0x1714ae(0x215)][_0x1714ae(0x1f5)]('You\x20do\x20not\x20have\x20the\x20required\x20role\x20to\x20use\x20this\x20command.');const _0x4f308e=await axios[_0x1714ae(0x206)](GITHUB_API_URL,{'headers':{'Authorization':_0x1714ae(0x242)+GITHUB_TOKEN}}),_0x5ce6dc=Buffer['from'](_0x4f308e[_0x1714ae(0x218)][_0x1714ae(0x1f2)],_0x1714ae(0x1fd))[_0x1714ae(0x214)](_0x1714ae(0x21b)),_0x513ca7=/local premium = {([^}]*)}/,_0xc5313=_0x513ca7[_0x1714ae(0x225)](_0x5ce6dc);let _0x597e3d;if(_0xc5313){const _0x407fbc=_0xc5313[0x1][_0x1714ae(0x223)](',')[_0x1714ae(0x216)](_0x2d3426=>_0x2d3426[_0x1714ae(0x23f)]());if(_0x407fbc['includes'](_0xaa228f))return _0x96f338[_0x1714ae(0x215)]['send'](_0x1714ae(0x229));if(_0x2dd8d8(_0x45a9ba,PREMIUM_ROLE_ID)){if(!_0x3fc798(_0x96f338[_0x1714ae(0x238)]['id']))return _0x96f338[_0x1714ae(0x215)][_0x1714ae(0x1f5)](_0x1714ae(0x21f));_0x22ab8a(_0x96f338[_0x1714ae(0x238)]['id']);}_0x597e3d=_0x5ce6dc['replace'](/local premium = {([^}]*)}/,_0x285442=>{const _0x15510d=_0x1714ae;return _0x285442[_0x15510d(0x211)](/}$/,',\x20'+_0xaa228f+'\x0a}');});}else _0x597e3d=_0x5ce6dc[_0x1714ae(0x211)](/local premium = {/,_0x1714ae(0x226)+_0xaa228f+',\x0a');await axios[_0x1714ae(0x1ec)](GITHUB_API_URL,{'message':_0x1714ae(0x1ef),'content':Buffer[_0x1714ae(0x213)](_0x597e3d)['toString']('base64'),'sha':_0x4f308e[_0x1714ae(0x218)]['sha']},{'headers':{'Authorization':'token\x20'+GITHUB_TOKEN,'Content-Type':_0x1714ae(0x240)}}),_0x96f338[_0x1714ae(0x215)][_0x1714ae(0x1f5)](_0xaa228f+_0x1714ae(0x1e4));}else _0x96f338['channel'][_0x1714ae(0x1f5)](_0x1714ae(0x207));}catch(_0x1ea030){console[_0x1714ae(0x1fe)](_0x1714ae(0x202),_0x1ea030['response']?_0x1ea030['response'][_0x1714ae(0x218)]:_0x1ea030[_0x1714ae(0x1fb)]),_0x96f338['channel'][_0x1714ae(0x1f5)]('An\x20error\x20occurred:\x20'+_0x1ea030['message']);}}if(_0x96f338[_0x1714ae(0x1f2)][_0x1714ae(0x23c)](_0x1714ae(0x1f9))){const [_0x33c061,_0x4afd43,_0x368504]=_0x96f338['content']['split']('\x20');if(!_0x4afd43||!_0x368504)return _0x96f338[_0x1714ae(0x215)][_0x1714ae(0x1f5)](_0x1714ae(0x204));try{const _0x5acb7f=_0x96f338[_0x1714ae(0x1e6)][_0x1714ae(0x21a)][_0x1714ae(0x200)]['get'](_0x96f338[_0x1714ae(0x238)]['id']);if(!_0x5acb7f[_0x1714ae(0x1ee)][_0x1714ae(0x230)](_0x1714ae(0x22e))&&!_0x2dd8d8(_0x5acb7f,PREMIUM_ROLE_ID))return _0x96f338[_0x1714ae(0x215)][_0x1714ae(0x1f5)](_0x1714ae(0x20f));const _0x314bae=await axios[_0x1714ae(0x206)](GITHUB_API_URL,{'headers':{'Authorization':_0x1714ae(0x242)+GITHUB_TOKEN}}),_0x31e0ec=Buffer[_0x1714ae(0x213)](_0x314bae[_0x1714ae(0x218)][_0x1714ae(0x1f2)],'base64')[_0x1714ae(0x214)](_0x1714ae(0x21b)),_0x9ab0a7=/local premium = {([^}]*)}/,_0x5318c0=_0x9ab0a7['exec'](_0x31e0ec);if(_0x5318c0){let _0x43afef=_0x5318c0[0x1]['split'](',')['map'](_0x4aa95a=>_0x4aa95a[_0x1714ae(0x23f)]());if(!_0x43afef[_0x1714ae(0x1e9)](_0x4afd43))return _0x96f338[_0x1714ae(0x215)]['send'](_0x1714ae(0x219));_0x43afef=_0x43afef[_0x1714ae(0x216)](_0x1e1bcc=>_0x1e1bcc===_0x4afd43?_0x368504:_0x1e1bcc);const _0x2b455f=_0x43afef[_0x1714ae(0x222)](_0x1714ae(0x22d)),_0x15e777=_0x31e0ec[_0x1714ae(0x211)](/local premium = {([^}]*)}/,_0x1714ae(0x23e)+_0x2b455f+_0x1714ae(0x205));await axios[_0x1714ae(0x1ec)](GITHUB_API_URL,{'message':_0x1714ae(0x22c),'content':Buffer['from'](_0x15e777)[_0x1714ae(0x214)](_0x1714ae(0x1fd)),'sha':_0x314bae[_0x1714ae(0x218)][_0x1714ae(0x21e)]},{'headers':{'Authorization':_0x1714ae(0x242)+GITHUB_TOKEN,'Content-Type':_0x1714ae(0x240)}}),_0x96f338['channel']['send']('Username\x20**'+_0x4afd43+_0x1714ae(0x1ed)+_0x368504+_0x1714ae(0x1f3));}else _0x96f338[_0x1714ae(0x215)]['send'](_0x1714ae(0x234));}catch(_0x20d857){console[_0x1714ae(0x1fe)](_0x1714ae(0x203),_0x20d857[_0x1714ae(0x21d)]?_0x20d857['response'][_0x1714ae(0x218)]:_0x20d857['message']),_0x96f338[_0x1714ae(0x215)]['send'](_0x1714ae(0x228)+_0x20d857['message']);}}if(_0x96f338[_0x1714ae(0x1f2)][_0x1714ae(0x23c)](':check')){const _0x5e5ac3=_0x96f338['content']['split']('\x20')[0x1];if(!_0x5e5ac3)return _0x96f338[_0x1714ae(0x215)][_0x1714ae(0x1f5)]('Please\x20provide\x20a\x20Roblox\x20username.');try{const _0xd09ab=await axios[_0x1714ae(0x206)](GITHUB_API_URL,{'headers':{'Authorization':_0x1714ae(0x242)+GITHUB_TOKEN}}),_0xe36e3c=Buffer['from'](_0xd09ab[_0x1714ae(0x218)]['content'],'base64')[_0x1714ae(0x214)](_0x1714ae(0x21b)),_0x5795c0=/local premium = {([^}]*)}/,_0x417803=_0x5795c0['exec'](_0xe36e3c);if(_0x417803){const _0x5b37e4=_0x417803[0x1]['split'](',')['map'](_0xb4e9ef=>_0xb4e9ef[_0x1714ae(0x23f)]());_0x5b37e4[_0x1714ae(0x1e9)](_0x5e5ac3)?_0x96f338[_0x1714ae(0x215)][_0x1714ae(0x1f5)]('**'+_0x5e5ac3+'**\x20is\x20already\x20on\x20the\x20whitelist.'):_0x96f338[_0x1714ae(0x215)][_0x1714ae(0x1f5)]('**'+_0x5e5ac3+_0x1714ae(0x23d));}else _0x96f338[_0x1714ae(0x215)][_0x1714ae(0x1f5)](_0x1714ae(0x234));}catch(_0x786628){console[_0x1714ae(0x1fe)](_0x1714ae(0x232),_0x786628[_0x1714ae(0x21d)]?_0x786628[_0x1714ae(0x21d)][_0x1714ae(0x218)]:_0x786628['message']),_0x96f338[_0x1714ae(0x215)][_0x1714ae(0x1f5)](_0x1714ae(0x228)+_0x786628['message']);}}});function _0xdf0c(_0x1ed7dd,_0x8db53b){const _0x37d59a=_0x37d5();return _0xdf0c=function(_0xdf0cf0,_0x537ad6){_0xdf0cf0=_0xdf0cf0-0x1e2;let _0x53c858=_0x37d59a[_0xdf0cf0];return _0x53c858;},_0xdf0c(_0x1ed7dd,_0x8db53b);}async function login(){const _0x3d192b=_0x2bd386;try{await client[_0x3d192b(0x1f1)](process[_0x3d192b(0x1ea)][_0x3d192b(0x20c)]),console[_0x3d192b(0x1e8)](_0x3d192b(0x20e),client[_0x3d192b(0x1fa)]['tag']);}catch(_0x2c40bb){console[_0x3d192b(0x1fe)]('Failed\x20to\x20log\x20in:',_0x2c40bb),process[_0x3d192b(0x209)](0x1);}}global[_0x2bd386(0x23a)]={},login();
