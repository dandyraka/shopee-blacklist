import fs from "fs";
import fetch from "node-fetch";

const data = await fetch(
    "https://shopee.co.id/backend/CMS/blw.json"
).then((r) => r.json());

const chatBlacklist = data.chat;
const hashtagBlacklist = data.hashtag_blacklist;
const searchBlacklist = data.search_blacklist;

let chatData = "";
let hashtagData = "";
let searchData = "";

chatBlacklist.forEach(chat => {
    chatData += `${chat}\n`;
});

hashtagBlacklist.forEach(hashtag => {
    hashtagData += `${hashtag}\n`;
});

searchBlacklist.forEach(search => {
    searchData += `${search}\n`;
});

fs.writeFileSync(
    "chat_blacklist.txt",
    chatData
);

fs.writeFileSync(
    "hashtag_blacklist.txt",
    hashtagData
);

fs.writeFileSync(
    "search_blacklist.txt",
    searchData
);