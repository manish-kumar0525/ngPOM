"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const JuliemrPage_1 = require("../PageObjects/JuliemrPage");
// import env from '../PageLibrary/env.json' ;
describe('Open Juliemr WebSite', function () {
    it('Parctice1', function () {
        return __awaiter(this, void 0, void 0, function* () {
            // debugger;
            // let juliemrPgObj=require('../PageObjects/JuliemrPage');
            let juliemrPgObj = new JuliemrPage_1.JuliemrPage();
            // let en1=require('../PageLibrary/env.json');
            // await browser.get('http://juliemr.github.io/protractor-demo/');
            // await browser.get(en1.homeURL);
            yield juliemrPgObj.getHomePage();
            yield juliemrPgObj.getfirstIPbox().sendKeys('5');
            // element(by.model("first")).sendKeys('5').then(function(){
            //     browser.sleep(500);
            // });
            yield juliemrPgObj.getsecndIpBox().sendKeys('5');
            yield juliemrPgObj.getGOButton().click();
            let result = yield juliemrPgObj.getresltTxt().getText();
            console.log(result);
            // element(by.id('gobutton')).click();
            // element(by.model("second")).sendKeys('5');
            // element(by.className('ng-binding')).getText().then(function(text){
            // console.log(text);
            // })
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TcGVjcy90ZXN0MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsNERBQXlEO0FBQ3pELDhDQUE4QztBQUU5QyxRQUFRLENBQUMsc0JBQXNCLEVBQUU7SUFDN0IsRUFBRSxDQUFDLFdBQVcsRUFBRTs7WUFDWixZQUFZO1lBQ1osMERBQTBEO1lBQzFELElBQUksWUFBWSxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1lBQ3JDLDhDQUE4QztZQUM5QyxrRUFBa0U7WUFDbEUsa0NBQWtDO1lBQ2xDLE1BQU0sWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRWpDLE1BQU0sWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqRCw0REFBNEQ7WUFDNUQsMEJBQTBCO1lBQzFCLE1BQU07WUFFTixNQUFNLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakQsTUFBTSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekMsSUFBSSxNQUFNLEdBQUcsTUFBTSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVwQixzQ0FBc0M7WUFDdEMsNkNBQTZDO1lBQzdDLHFFQUFxRTtZQUNyRSxxQkFBcUI7WUFDckIsS0FBSztRQUNULENBQUM7S0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyJ9