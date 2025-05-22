// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || "EF-PRIME;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkFZSVVSR1J2SW1DWXhuSWROblg3WjlOelpEOUxsKzN5RUY3LzRxcDEyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmRSOUl6V3BsYWpVZk9KbGo1SE82YjFvMCtJSDdNRVU0MFJITDhpNHAybz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSk9qMFNpd1hiNVNhTDRrUWpoV211ZzBPdStUOFpCaVc1SVpYZGxqUjAwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEcVdJcVlsOWh3NU9zYVhjTlo1Uk5vNVBlaFE4VE9wV20xaTZJZnRUMndrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNPak45TWR3a1g4ZkZLemtxMXdGbWIrdlpmOU5UY0REYXFMaW55TWpNMW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE2RURQei9kaHQwNm9jWU5iT2FYd0MyM2EvQ2lpc044eUdXVGpLeUlQRDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUN3L0NRSkx3Qlk4bzlGWEdJZHhuVzgwSlVLYndkdHc4NnZOcmw4VFJHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibThxSGdhbVNLRDN6Zmo4MzBKUTFKTVhVS282ajVHMVBHOEM5WEFubDlnVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhPbEkzcm93TnFGbDZCSi9QUlZPRjlvUndxb0YrdWFzZ3hoRndDMGJXWlhkbVZRbk5BSnhBd2F5VHlEaWQrWUdkL1BEMUp5QS9JaXZlOGtEcmJzVENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ5LCJhZHZTZWNyZXRLZXkiOiJKUjNkN1N3a3owcGdVU2V4Rlk2U0JhUzFYZWxnYVlJQy94MDVVZ2xXSVYwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxOTgyMzA5OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFNDA3RTY3RENEREVGNTIyN0RBNUZGMDdCQkNDRDQ1MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ3MDYxMDUyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTk4MjMwOThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTNGNzA1Nzk5RTE0OTgzRTY0ODQ1QjJFN0ZBRkRDOTgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NzA2MTA1Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOFNrSWRIeGRTQi13MWczOGg5SEhKZyIsInBob25lSWQiOiIxMjAxN2RiZS00ZWIxLTQzNGMtYTFjOS03NjM3ZGZiNTAwZGYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0dRMHlCeSs2TXcrRFkrSVFlbFNDMFovSEJ3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVWcWNtdzN0WDdwRzBmRDV3dmdOdUpmTW43cz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1UVFCTjRIWSIsIm1lIjp7ImlkIjoiMjYzNzE5ODIzMDk4OjM2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Imx4bGFtYWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tIVnNvNEVFSjJTaU1FR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik56Rmorb1ZEUDF1QTRCNWlYUVZqV21rOHl6QXk0S3ppcmQ0ci9nclJzaVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjRFT0QxQmtKVTh1dGJLTTNpcWthTzd2a3VKdHRMRVFaUmJvaUVhTEN4SWUzMG9LSkJrZlh3dzFQdkswRmU3TnU2TGtJS3EvMUVvWUk2WUQzWW9vSERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSSGZiclhKeGRmQW9RRFpkcGlMZ3MvK1d6YktZSXdJUHZJVzlpQnlXL0hnTlhVRWxlakp0TzFhemhJVGlweS9Ga1VROU9lanhMdnJIZk5sUzFieGZEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxOTgyMzA5ODozNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUY3hZL3FGUXo5YmdPQWVZbDBGWTFwcFBNc3dNdUNzNHEzZUsvNEswYklsIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ3MDYxMDM1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxzWSJ9",
  PREFIX: process.env.PREFIX || '.',
  
  // Message Protection
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : false, 
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : false, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  
  // Communication Protocols
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  
  // Defensive Systems
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  
  // Command Mode
  MODE: process.env.MODE || "public",
  
  // Alliance Info
  OWNER_NAME: process.env.OWNER_NAME || "Frank kaumba",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "265993702468",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};

module.exports = config;
