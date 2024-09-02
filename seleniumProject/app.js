const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function runTest() {
    let options = new chrome.Options();
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {

        await driver.get('https://convertermp3.vercel.app/');
        
        let searcBox= await driver.findElement(By.id("web"));
        await searcBox.click();
        let downloadBox= await driver.findElement(By.id("convert-input-web"));
        await downloadBox.sendKeys('https://www.youtube.com/watch?v=YLslsZuEaNE');
        let downloadBtn= await driver.findElement(By.id("convert-button-web"));
        await downloadBtn.click();
        // // Open a webpage
        // await driver.get('https://www.google.com');

        // // Find the search box using its name attribute
        // let searchBox = await driver.findElement(By.name('q'));

        // // Type 'Selenium' and press Enter
        // await searchBox.sendKeys('Selenium', Key.RETURN);

        // // Wait for the results to show up
        // await driver.wait(until.titleContains('Selenium'), 10000);

        // // Log the title of the page
        // let title = await driver.getTitle();
        // console.log('Page title is:', title);
    } finally {
        // Close the browser
        //await driver.quit();
    }
}

runTest();