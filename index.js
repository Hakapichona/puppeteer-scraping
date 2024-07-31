import puppeteer from 'puppeteer';
import 'dotenv/config'

console.log('Environment:', process.env.URL_TARGET)
const exampleFunction = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 400,
    })

    const page = await browser.newPage();

    await page.goto(process.env.URL_TARGET);
    await browser.close()
}

await exampleFunction()
