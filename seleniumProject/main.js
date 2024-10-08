const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function runTest() {
    let options = new chrome.Options();
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('https://www.linkedin.com/search/results/people/?keywords=back%20end%20developer&origin=SWITCH_SEARCH_VERTICAL');
        let emailInput= await driver.findElement(By.name('session_key'));
        let passwordInput= await driver.findElement(By.name('session_password'));
        await emailInput.click();
        await emailInput.sendKeys('mustafamehmed1251@gmail.com');
        await passwordInput.click();
        await passwordInput.sendKeys('A1251n?mz');
        let signInBtn= await driver.findElement(By.className('btn__primary--large from__button--floating'));
        await signInBtn.click();

        let peopleData= await driver.executeScript(`
            const people = [...document.querySelectorAll('button')].filter(button => 
                button.textContent.trim() === 'Connect'
            ).slice(0, 5).map(button => {
                const personElement = button.closest('.entity-result__item');
                const name = personElement.querySelector('.entity-result__title-text').textContent.trim();
                const title = personElement.querySelector('.entity-result__primary-subtitle').textContent.trim();
                const location = personElement.querySelector('.entity-result__secondary-subtitle').textContent.trim();
                
                return {
                    name,
                    title,
                    location
                };
            });
            return people;
            `);
        peopleData.forEach(person=>{

        });


        // await driver.get('https://www.linkedin.com/');
        // let popupBtn=await driver.findElement(By.className('cta-modal__dismiss-btn absolute h-4 w-4 p-1 top-2 right-2 hover:cursor-pointer focus:outline focus:outline-2 focus:outline-color-action'));
        // await popupBtn.click();
        // let signIn= await driver.findElement(By.className('nav__button-secondary btn-secondary-emphasis btn-sm ml-3'));
        // await signIn.click();
        // let emailInput= await driver.findElement(By.name('session_key'));
        // let passwordInput= await driver.findElement(By.name('session_password'));
        // await emailInput.click();
        // await emailInput.sendKeys('mustafamehmed1251@gmail.com');
        // await passwordInput.click();
        // await passwordInput.sendKeys('A1251n?mz');
        // let signInBtn= await driver.findElement(By.className('btn__primary--large from__button--floating'));
        // await signInBtn.click();

        // let searchInput= await driver.findElement(By.css('[data-view-name="search-global-typeahead-input"]'));
        // await searchInput.click();
        // await searchInput.sendKeys('back end developer',Key.ENTER);

        // let peopleBtn= await driver.findElement(By.css('button[aria-pressed="false"]'));
        // await peopleBtn.click();
        // let test= "https://www.linkedin.com/search/results/people/?keywords=back%20end%20developer&origin=SWITCH_SEARCH_VERTICAL";

        // await driver.get(test);
       
        // let searcBox= await driver.findElement(By.id("web"));
        // await searcBox.click();
        // let downloadBox= await driver.findElement(By.id("convert-input-web"));
        // await downloadBox.sendKeys('https://www.youtube.com/watch?v=YLslsZuEaNE');
        // let downloadBtn= await driver.findElement(By.id("convert-button-web"));
        // await downloadBtn.click();
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