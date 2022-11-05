const redis = require('redis');
const r = redis.createClient({
    port    : 6379,
    host    : 'redis.zitf.fr',
})

const puppeteer = require('puppeteer');

async function browse(url){

    console.log(`Browsing -> ${url}`);
    const browser = await (await puppeteer.launch({
        headless: true,
        executablePath: process.env.CHROME_BIN || null,
        args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-dev-shm-usage']
    })).createIncognitoBrowserContext();

    const page = await browser.newPage();
    await page.setCookie({
        name: 'flag',
        value: process.env.CHALL_COOKIE,
        domain: process.env.CHALL_HOST,
        secure: false,
    });

    try {
        const resp = await page.goto(url, {
            waitUntil: 'load',
            timeout: 20 * 1000,
        });
    } catch (err){
        console.log(err);
    }

    await page.close();
    await browser.close();

    console.log(`Done visiting -> ${url}`)

}

function main() {
    r.blpop(['payloads', 0], async (_, submit_url) => {
        let url = submit_url[1];
        await browse(url);
        main();
    }); 
}


console.log("XSS Bot ready");
main()
