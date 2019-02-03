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
describe('Open Juliemr WebSite', function () {
    xit('Parctice1', function () {
        return __awaiter(this, void 0, void 0, function* () {
            // debugger;
            let juliemrPgObj = yield new JuliemrPage_1.JuliemrPage();
            yield juliemrPgObj.getHomePage();
            yield juliemrPgObj.getfirstIPbox().sendKeys('5');
            yield juliemrPgObj.getsecndIpBox().sendKeys('5');
            yield juliemrPgObj.getGOButton().click();
            let result = yield juliemrPgObj.getresltTxt().getText();
            yield console.log(result);
        });
    });
    it('Parctice2', function () {
        return __awaiter(this, void 0, void 0, function* () {
            // debugger;
            let juliemrPgObj = yield new JuliemrPage_1.JuliemrPage();
            yield juliemrPgObj.getHomePage();
            yield juliemrPgObj.setfirstIPbox('5');
            yield juliemrPgObj.setsecndIpBox('5');
            yield juliemrPgObj.getGOButton().click();
            let result = yield juliemrPgObj.getresltTxt().getText();
            yield console.log(result);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1NwZWNzL3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDREQUF5RDtBQUV6RCxRQUFRLENBQUMsc0JBQXNCLEVBQUU7SUFDN0IsR0FBRyxDQUFDLFdBQVcsRUFBRTs7WUFDYixZQUFZO1lBQ1osSUFBSSxZQUFZLEdBQUcsTUFBTSxJQUFJLHlCQUFXLEVBQUUsQ0FBQztZQUMzQyxNQUFNLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVqQyxNQUFNLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFakQsTUFBTSxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3pDLElBQUksTUFBTSxHQUFHLE1BQU0sWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5QixDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLFdBQVcsRUFBRTs7WUFDWixZQUFZO1lBQ1osSUFBSSxZQUFZLEdBQUcsTUFBTSxJQUFJLHlCQUFXLEVBQUUsQ0FBQztZQUMzQyxNQUFNLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVqQyxNQUFNLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsTUFBTSxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXRDLE1BQU0sWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXpDLElBQUksTUFBTSxHQUFHLE1BQU0sWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5QixDQUFDO0tBQUEsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMifQ==