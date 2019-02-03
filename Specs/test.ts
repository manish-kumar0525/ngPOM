import { JuliemrPage } from '../PageObjects/JuliemrPage';

describe('Open Juliemr WebSite', function () {
    xit('Parctice1', async function () {
        // debugger;
        let juliemrPgObj = await new JuliemrPage();
        await juliemrPgObj.getHomePage();

        await juliemrPgObj.getfirstIPbox().sendKeys('5');

        await juliemrPgObj.getsecndIpBox().sendKeys('5');
        await juliemrPgObj.getGOButton().click();
        let result = await juliemrPgObj.getresltTxt().getText();
        await console.log(result);

    })
    it('Parctice2', async function () {
        // debugger;
        let juliemrPgObj = await new JuliemrPage();
        await juliemrPgObj.getHomePage();

        await juliemrPgObj.setfirstIPbox('5');
        await juliemrPgObj.setsecndIpBox('5');
        
        await juliemrPgObj.getGOButton().click();
        
        let result = await juliemrPgObj.getresltTxt().getText();
        await console.log(result);

    })
}); 