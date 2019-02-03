import { browser, element, by } from 'protractor'
import { protractor } from "protractor/built/ptor";
import { JuliemrPage } from '../PageObjects/JuliemrPage';
// import env from '../PageLibrary/env.json' ;

describe('Open Juliemr WebSite', function () {
    it('Parctice1', async function () {
        // debugger;
        // let juliemrPgObj=require('../PageObjects/JuliemrPage');
        let juliemrPgObj = new JuliemrPage();
        // let en1=require('../PageLibrary/env.json');
        // await browser.get('http://juliemr.github.io/protractor-demo/');
        // await browser.get(en1.homeURL);
        await juliemrPgObj.getHomePage();

        await juliemrPgObj.getfirstIPbox().sendKeys('5');
        // element(by.model("first")).sendKeys('5').then(function(){
        //     browser.sleep(500);
        // });

        await juliemrPgObj.getsecndIpBox().sendKeys('5');
        await juliemrPgObj.getGOButton().click();
        let result = await juliemrPgObj.getresltTxt().getText();
        console.log(result);

        // element(by.id('gobutton')).click();
        // element(by.model("second")).sendKeys('5');
        // element(by.className('ng-binding')).getText().then(function(text){
        // console.log(text);
        // })
    })
}); 