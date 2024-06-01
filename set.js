const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'FLASH-MD-WA-BOT;;;=>',
    PREFIXE: process.env.PREFIX || "+",
    OWNER_NAME: process.env.OWNER_NAME || "France King",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "254757835036", 
             
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
AUTOREAD_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
CHATBOT: process.env.CHAT_BOT || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'FLASH-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://static.animecorner.me/2023/08/op2.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    PRESENCE : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBOUG5zMDE3cnFLY1NBVktCbUUvdkRrVVhxK3cyanByZklpTDl6eWdGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0VzZW54b1FwWGlES2s0cGFqbFBHY2h6akMvNGJ4dnRCdmpQQVpuNkhBQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTE1aRTc0b2JsM1I5THZPUGcrUjhZb2pSL210Um5Jb29taFhtMkszd1VnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1N05JRDl1VVJ4R3pUdkpZWHB6ZW9FalZTS0NlUTZQYUU4SnVRTWhKdUZFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJOL3VGejhFT3N3aW5rdVIyWWhJWHpDajE4ekpYQkQ3SEdwZCtvRERFRWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1XNmlsek15a3JmZVBoQ2MxOGROQkVLWFY5enlzUHVZQlFpZlFHMlVpSGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JFUDVuMjdRQ01aclZYWEFsR3dYb0xRYmoyQ25NMFdvR2gwSFpvUkYyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjFZWVZ2eVo1V3VueFF1L1JqVm1vdVJPWDIvQndQV1BZU1htN3VRcExuVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMrRnpjbkJwbmhIUVUvQTd4elVoQThDNlZBaTdDMkxUZkc3V1ZubVBDcERHY3NlYVlOWFhtMWJBOHUyMitkK2twSDFiT0dybmNkVkd4TGdHMUtlTmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDEsImFkdlNlY3JldEtleSI6IjBIamNzZ3Jndnp4VFZoSjVPWHRzZm05dGNraVlyTGRYazNKTi9nVittWUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTI1NDUzNDY0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY3ODA0QzkyMUQ4QzU0NkJDNzg4QkFBRTc4OEQzNDUwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTcyMzExMjB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEyNTQ1MzQ2NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGNkYxQUVGN0M1REM1Mjc4MjdEQTE3Q0EyRDI0OTY0OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE3MjMxMTIxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMjU0NTM0NjRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkFDQzEzMDkyMkRGNUY4RUNCM0Y1MDFDQjI3ODVBMjAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNzIzMTEyMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTI1NDUzNDY0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI4RDlBQ0E4MkE1MTNFQjRDMTZCMThFQ0MxQzIzREY0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTcyMzExMjJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlI4ZWI4OHV3UXRXM1U4dTdPRkhFdnciLCJwaG9uZUlkIjoiM2Q3NWNiNDEtMWM2MS00MTUyLTg4NDAtY2E4NzNhNDU2ZjFjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhjU3RRUWRjQVZwQXpNUlRtRTJTY2lhNzJsND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDeE5JTDlqMS9rWnNPNmJ5OUVWY2dMU2xQTjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQVg2QkdCUkEiLCJtZSI6eyJpZCI6IjkyMzEyNTQ1MzQ2NDoyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOUDFoc2dHRUlDODY3SUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMbkozV1JyQ2htRjNVVlpBQ2pnRWI1SVJnTFlCL3ZIY1ExQnF2WkNKdVRZPSIsImFjY291bnRTaWduYXR1cmUiOiJkbG1QQjlwZU1kT3NTYzcrMDdmaUdrMElQekhnckt2Tm54N0FGdTRtaXNxSUtiRm5rWmppZWs4U3BvYUxxclNKNEh3dFd5bVRZUGc4MVZkUGFWSVpCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSlYyYzhVWlIzcFkxTDRSVVMzb1NuWlU0K2ZYNTg5UjFrbWVCWDRvLzVITHNBdFFsN0prUHdOdkJuRG1FVURRNXFBYTBMK0Y1TTFhTjRsbGp6SkVGaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMjU0NTM0NjQ6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTNXlkMWthd29aaGQxRldRQW80QkcrU0VZQzJBZjd4M0VOUWFyMlFpYmsyIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE3MjMxMTE4fQ==
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
