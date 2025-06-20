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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0V1MGNaeGRQdndHWFZZUmZRTW53VmJSZ2Fzc1JVV1dNTms3azhMMDhFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2orVmpObEk2ME12SWxaY0t4bWh2K21JVjh5eHh5QktsYUxPUVFWN05sbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SnJSYmcyNFFCVUI2bGJGNlVSN3lBZ2xrUzlGT084YVptVnQxRCsvb2t3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVeEJXanp6cnJucVZ2S1hkVy9mbUJnMGJIaFpmbnhzNlFuNm8wU2VZWnhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVMM2hHa1pVNWM3eDRVYWNYdk1jZ05RVis2M3U2bGtaR2dUejlINkJqRUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml6TFZLU3VFVUdnY3F1OWRVQnIvTkE5dXkzQVlMOUsyMlRZYkIxNkZkQVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0tnSUJrWjl4ZE1td21MQzk4TEUxRTNlV3AzUUE0K3JCRU43bUg3WXZsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoick03OHFrMURiUkNXYlgvbHZtNCtCZ0JuRnI0TTVwc3lZaGhzc1RheEdHRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBKRzEzbG9EdU9rMmNvZ1VjNkdWbmFYdnhURzdpM0wxS1VsTkNURGlDeDdGK0hBZE1ZNGxuTnFQNEQ3VU05M09aYnUzdXdyY0oyeTBkTTcrYURnY2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiJkYm56ZmRDd2lFa0VPaE5VMnpZTUxJNVBveHp2bEM2UVp6cGZDL3lVN2ZNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5cHNweXJPbVR3dTRPbFJMV09PdDV3IiwicGhvbmVJZCI6ImJiZGIyZmNkLWI2NzMtNGVhYy1iNmY5LTAwOTM2MzBjNGMxMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SVI1MTJRdVJJT05pS1QwRmhHYTFzbmdNZDQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDFwVHZIQ0RQRWIrK3hHYzB6eENleVF5cDlrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlY5TkpOSjdOIiwibWUiOnsiaWQiOiI5NDc4NTkyOTU1NzoyOUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjY4MjQzMzU2MTI3MzY0OjI5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2JzaWEwSEVKT1owOElHR0JnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT0E5NXNlYlgxVWxvSjdSQjdyTm9STkdwaS9NWHNDRWl3blh3cEc3Ujh6UT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidTNBVlhYcjZ0bHdINGJJbTFsTllYTmNuYS82SzJvNlRrNjRiZkFQdzVZMkJoVENGVmdMZ0I1eWI5d0hZMDlUM3AxWlErdDB5MitkOXErMnFueEpNREE9PSIsImRldmljZVNpZ25hdHVyZSI6IkU0SUFna3pxM1BacnNlWmhwMVJnVHZrZkpTZ1g4QzMyK25WdW40SXpUWDlJZDI0RHEzZUdjeC9DdkJTUHhBZmYyNXorRGtDU2syL2YvTHRQbVl4ZWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODU5Mjk1NTc6MjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGdQZWJIbTE5VkphQ2UwUWU2emFFVFJxWXZ6RjdBaElzSjE4S1J1MGZNMCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FrSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwMzg3ODcyLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkifQ==",
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
