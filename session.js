//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEl1SmFEU05lUmoyN25DZS95L0VnNXdLU2dHOUdSTkRmVnBFUC91NWxXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVY2T2ZxSEx1RkQ4MmpVeXFHK2U5TCs1SkRZUGxUc3FLMHIrWnY4ZzBGMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSEhuanJqdUYwUDBVVExWSjg2QnlMU2w2UitPQTBleld3ZTVjWDJvem5rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxUEc3anNGWUlsMGV1bTBlOFR6NzNEVkZ1VTJGd2VXWlJlSG15Y2JBQ0FzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVMZWx2aTJnNmJsa3dvc1VNMHVpNEQ0bjZDSHBtSUhmMXBzWkhuT0F5MmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVaMkkrUXk5bGpVQXRXZEVON3hVRjA3T1FobW8wVzZWS0RJMGovYUJuRU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0UvU1Q2RDBHSDcySFhkbXF4Z2cxOGFhekxKRVpyS3NLYlFxTDVGbFFsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWdQN05YMThjSWVBUjc1aFM0ZEhRR3o3M2tsT1RHaDgwQ0M1bUtSaFhUVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNFM0VqYW40MmFIekYvWVQ3MzA3WU1wcXQ5SjdHQ3hMRlA2TTFLLzB4M3dRVWhiaFgzVkRjeDMwQkpTczdNTUpCcENSQlRuRmtBRWtkOG1Fem1WOUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6ImJRK3h6d1dabjBEZmlDaFk4VHpycnNzQW1ybEwzZzVBTnp2U1ZBV05pbG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImhlaUJmYTRJUTVxSzJ2SVlubUg5aFEiLCJwaG9uZUlkIjoiMTBjMzc0YjAtMmViYy00MmM4LWEwNDgtN2UyYjMzMjRjM2RkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdMbEZHT2F2QW42V0I0ZDU5R3g1eHV6cnpERT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjVGIzNkd2Yk5SOFdZYWRLOGE4QkVrVm53Yms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVlMQ0E2QTgiLCJtZSI6eyJpZCI6Ijk0Nzg1OTI5NTU3OjI4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjgyNDMzNTYxMjczNjQ6MjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYnNpYTBIRVAzZTBzSUdHQmNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPQTk1c2ViWDFVbG9KN1JCN3JOb1JOR3BpL01Yc0NFaXduWHdwRzdSOHpRPSIsImFjY291bnRTaWduYXR1cmUiOiJhMzBwdjl3cExWSGJQYkNQdkd4eTdXeC9iQmZ6c0FOaisydThIaEY1QW5kWDExVlJKS2JPRzM3SFFSWFlmQlMxeEkwUFRWSGt1MlhIeGpSYVRlckpEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiemlmbEN1aXBSL3E4RWhHeE01dnJoZStyV2tudjRQTnkwbFpjdS9zS1YyODkzRUxXVXhBTHB1N3ZOQlpPNVovR21IclZkVEhaZnJhNVdjdC9BdEpDQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4NTkyOTU1NzoyOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUZ1BlYkhtMTlWSmFDZTBRZTZ6YUVUUnFZdnpGN0FoSXNKMThLUnUwZk0wIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTAzODA0MjcsImxhc3RQcm9wSGFzaCI6IjNSOVozOSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
