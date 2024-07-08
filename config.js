
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "254783212995","";
global.owner = process.env.OWNER_NUMBER || "254783212995","254102074064";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0xpWTYvV3B2UU8wK1lwUk16WDZrSG1qOEs5QWxhcnVXNWJwRHhBMFNtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnlUVExCNkphNnJzWWRCV21VdXBUNW9TKzVrMkx2Y2hPTDk2bTBUM1ZVYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnT0t6OGsvVm5od0cvUnJmbkozcVpKd0pxQTZqWlFKWW1wRWtuZlFYQ2tzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxa1ROdHkwSUpxRzg4Z1FrZm4ycjU0RUdCalprWTFRbU5ZY1hRUCtsanlFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFLWnZxcWVuMW9VSWlPaVA3ejFsUTVGajNmeDBGSzhyRk5zN1dNUEpSVW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBKZ2dDT2VQbWp0ZFdGK1hsRHp1dEsya0M4RG9KOWV6UGYvUVZuRzlXWDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUo3M0ROdXlxbFlvQnBxWkowcmxYRDRmZzNKaTlMK2xZNks3SlBYTU9rRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjRqMHhiR0RNQkJ3eVZyUFhVN2o0akx6QytoVTFDcVZzS2thM3dhSXIzcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhORk5IUTJxYTlHeTVEWDJUdDZ5YlRreUp2Zzh0NnFlYlozRXhkenZDeVhPV1VldTIzODFVc0d0cVhxYzZFMW94ZjRvVUxrSDdzRUVFTEgxRXIvS2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6Ikc0bm5VUjM2RHE0VWVuUGxMOGpER3FDSFZxRDlTekgxYS8vdUxKRGYrMTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjlFVzY0ODhzUkN1WndfWU1lb2ZkWVEiLCJwaG9uZUlkIjoiZjAzZTgyNjktZDZhMS00MDQ3LWIwYjAtYmE5MmI0ZWUyOGYwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Img3aGpSNVhUWXlWRXRRRUdpTDVFU0FlRERoaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrUkExTVJsazBmalJ3RzlUUG9uemRrOXpCNUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSzcyQTFYWUwiLCJtZSI6eyJpZCI6IjI1NDc4MzIxMjk5NTo4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPZVRsZkFFRU5Qb3E3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6Z2tRYkQrQWlOTU5TYlBGZ0htdXVqTHh5YS9NK1FOODlsZlV1NUhrZkFBPSIsImFjY291bnRTaWduYXR1cmUiOiI1M2hobFIxOFprNFB5eFBjcmozUUswQUNacmd5QkR4ZnBsdnpCWEpUMExKZHo1SzJBZEQxWEZ3LzNwVWVQendNdUQ0K1Z6emtDbVdDNHI0WTNPUExEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicTgrdzlZSEhZZlBCaHRXcVdaTWxwUG5QRGgxY3dWdEluRjRGWHdsWVdmSCt2eVN3QmcweTlnTFFCSi9LYzEyYW1HSW93bU1Ob1pwU20yYXJtSzZuaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3ODMyMTI5OTU6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjNEpFR3cvZ0lqVERVbXp4WUI1cnJveThjbXZ6UGtEZlBaWDFMdVI1SHdBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMzgyNTYxfQ==" //Make sure session id starts with Byte;;;
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "𝐃𝐑𝐄𝐗 ⧼𝕲⧽",
  packname: process.env.PACK_NAME || "⟠ 𝐃𝐑𝚺𝐗 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々. ᵍʳᵉʸ",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "Rozzette",
  errorChat: process.env.ERROR_CHAT || "254102074064",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
