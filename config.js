
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
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUdlOFU1eERWNXZ0VTVvSXNlRHZ4OFlEcTBkK0l2UFFXcmhmZXR2U0RXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlZ2NnhJc1VmYW9lNVgvR1pyNXBLWFJNNUhZWDVhb2JBMHQ5bnNMZ05Ydz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RFJydG9KVFYwZlltdkZEc2Irc2Q4RlFnRnFxbEpoeTE1bWlWamU2OGw0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsdU1qRTBTLzZpZ0hXOEcvTUxUL3hOMUh6N0tyWndKbmpsUlFFS1dlckFvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZCRkhzRXdVcTFJVmNFWTh0MGREL1J6WVNQYW9nRXltWlo3N3lUcjkyMzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldQMHJ3bU5SN3Znck5NVGRRUU1hV2x0NGJiV3RVUTc5Z0ZkczBUL0IxbFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0w4aDFnR0pVdmwrc0hkMFBFRi9rTXlLTEI4OUFMZml4bTREdmhYVkozdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkhtZitNOWNTdEt6MlA0ZDZGVkJRdU1Kc0tOTU0rUE1YSmk0MlVpMkhVZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdPUkMrRE5IV243b3ZCK2YwckNyUnRGRzZ4MmRlS3RvSFNpZ0phc0VaTTY5OVNQUWdha2Z1b2RyakhOaTQ0SVBpWDZkcjZ2eXRqYWQvMW55dGJvTGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6InFFTzc0UzJiRnc3enRTSXNJMVgvU3lVQ1FscTdXRmhDcFF6RytIR1R1T1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImcxSU0tZUVtU1ZTR2JxRWd2R2ZtMWciLCJwaG9uZUlkIjoiOGE1YTk3MGQtOTgyZC00ODE4LThkMzAtMDVlYTU0YzJjOTRjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh2NTBBWEUxUGc0Z01ubnE5NGx5SUNuUHdBdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrbG9BYzJ5TWtFMjJQbnROTWhYSDZsd2JmNUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSzVDOUdZR1YiLCJtZSI6eyJpZCI6IjI1NDc4MzIxMjk5NTo5QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNObk1oNElHRU4rcnI3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJsRW5lQy9NdDBCZ1MwbVVBVWhZMTUrcTM5ZGFsd3paOTlhdUQ1dFM5aWxBPSIsImFjY291bnRTaWduYXR1cmUiOiJYbDloMmxXUGJkcEIxZml5WWFNbzBzUWVjNWZqQk9LT2F4MndwcUU1NlBUcXlWMTJEcjUvQzlMcGIrczJxTHlPSDBRT01QNmhnbEtqZnRmcXNuQWFEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOVNUbHdwWEdxWXROSnJ1NXd6eUFoa3hlbkZnQ2YwR0FrQTQyanNYZ3hXZUJReVp2TFdHNHhPYWxzS0U2b1B2MFRjUVlhOHg5WXkyN1Fic1IxRjU5aUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3ODMyMTI5OTU6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaUkozZ3Z6TGRBWUV0SmxBRklXTmVmcXQvWFdwY00yZmZXcmcrYlV2WXBRIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNDQwMzAwfQ==" //Make sure session id starts with Byte;;;
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
