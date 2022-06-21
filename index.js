import fs from "fs";
import fetch from "node-fetch";

async function getData(url, country){
    const dir = `./Blacklist/${country}`;

    const data = await fetch(url)
    .then((r) => r.json())
    .catch((e) => console.log(e));
    
    const chatBlacklist = data.chat;
    const hashtagBlacklist = data.hashtag_blacklist;
    const searchBlacklist = data.search_blacklist;
    
    let chatData = "";
    let hashtagData = "";
    let searchData = "";
    
    chatBlacklist?.forEach(chat => {
        chatData += `${chat}\n`;
    });
    
    hashtagBlacklist?.forEach(hashtag => {
        hashtagData += `${hashtag}\n`;
    });
    
    searchBlacklist?.forEach(search => {
        searchData += `${search}\n`;
    });

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    fs.writeFileSync(
        `${dir}/chat_blacklist.txt`,
        chatData
    );
    
    fs.writeFileSync(
        `${dir}/hashtag_blacklist.txt`,
        hashtagData
    );
    
    fs.writeFileSync(
        `${dir}/search_blacklist.txt`,
        searchData
    );
}

const shopeeIndonesia = "https://shopee.co.id/backend/CMS/blw.json";
const shopeeSingapore = "https://shopee.sg/backend/CMS/blw.json";
const shopeeTaiwan = "https://shopee.tw/backend/CMS/blw.json";
const shopeeThailand = "https://shopee.co.th/backend/CMS/blw.json";
const shopeeMalaysia = "https://shopee.com.my/backend/CMS/blw.json";
const shopeeVietnam = "https://shopee.vn/backend/CMS/blw.json";
const shopeePhilippines = "https://shopee.ph/backend/CMS/blw.json";
const shopeeBrazil = "https://shopee.com.br/backend/CMS/blw.json";
const shopeeMexico = "https://shopee.com.mx/backend/CMS/blw.json";
const shopeeColombia = "https://shopee.com.co/backend/CMS/blw.json";
const shopeeChile = "https://shopee.cl/backend/CMS/blw.json";
const shopeePoland = "https://shopee.pl/backend/CMS/blw.json";
const shopeeSpain = "https://shopee.es/backend/CMS/blw.json";
const shopeeArgentina = "https://shopee.sg/backend/CMS/blw.json";

getData(shopeeIndonesia, "Indonesia")
getData(shopeeSingapore, "Singapore")
getData(shopeeTaiwan, "Taiwan")
getData(shopeeThailand, "Thailand")
getData(shopeeMalaysia, "Malaysia")
getData(shopeeVietnam, "Vietnam")
getData(shopeePhilippines, "Philippines")
getData(shopeeBrazil, "Brazil")
getData(shopeeMexico, "Mexico")
getData(shopeeColombia, "Colombia")
getData(shopeeChile, "Chile")
getData(shopeePoland, "Poland")
getData(shopeeSpain, "Spain")
getData(shopeeArgentina, "Argentina")