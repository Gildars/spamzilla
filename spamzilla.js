const puppeteer = require('puppeteer');

async function openPageWithProxy() {
    const browser = await puppeteer.launch({
        args: [
        '--disable-web-security',
        ],
        devtools: true,
        headless: false
    });

    const page = await browser.newPage();

    await page.authenticate({
        username: 'Selkseniiaf',
        password: 'J9c5IhV'
    });

    await page.emulate({
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
        viewport: {
            width: 1280,
            height: 800,
            deviceScaleFactor: 2,
            isMobile: false,
            hasTouch: false,
            isLandscape: false
        }
    });

    await page.goto('https://www.spamzilla.io/account/login/', {waitUntil: 'domcontentloaded'});

    if (await page.$('#loginform-email') !== null) {
        console.log('looool')
        await page.type('#loginform-email', 'kseniia.f@futurragroup.com',  {delay: 100});
        await page.type('#loginform-password', '7Xm1_r3N6M',  {delay: 100});
        const search_form = await page.$('#login-form');
        await page.click('.custom-submit-btn');

        await Promise.all([
            //search_form.evaluate(search_form => search_form.submit()),
            page.waitForNavigation(),
        ]);
        console.log('login page')
    }

    await page.click('.custom-submit-btn');

    await Promise.all([
        //search_form.evaluate(search_form => search_form.submit()),
        page.waitForNavigation(),
    ]);
    await page.click('.custom-submit-btn');

    await Promise.all([
        //search_form.evaluate(search_form => search_form.submit()),
        page.waitForNavigation(),
    ]);
    await page.click('.custom-submit-btn');

    await Promise.all([
        //search_form.evaluate(search_form => search_form.submit()),
        page.waitForNavigation(),
    ]);

    console.log('currrent url : ' + page.url());
    //await page.goto('https://www.spamzilla.io/domains/', {waitUntil: 'load'});

    const helpBlockData = await page.$$eval('.help-block', elements => {
        return elements.map(element => element.textContent.trim());
    });

    console.log(helpBlockData)
    // Дальнейший код для работы со страницей
    await new Promise(() => {});

    await browser.close();
}

openPageWithProxy();
