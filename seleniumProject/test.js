
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

    

async function runTest() {
    let options = new chrome.Options();
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {

        
        // Open a webpage
        await driver.get('https://www.google.com');

        // Find the search box using its name attribute
        let searchBox = await driver.findElement(By.name('q'));

        // Type 'Selenium' and press Enter
        await searchBox.sendKeys(searchWord.value, Key.RETURN);

        // Wait for the results to show up
        await driver.wait(until.titleContains(searchWord.value), 10000);

        // Log the title of the page
        let title = await driver.getTitle();
        console.log('Page title is:', title);
    } finally {
        // Close the browser
        //await driver.quit();
    }
}

runTest();