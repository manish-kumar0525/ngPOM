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
const protractor_1 = require("protractor");
const juliemrObjRepo_1 = require("./juliemrObjRepo");
class JuliemrPage {
    getHomePage() {
        return __awaiter(this, void 0, void 0, function* () {
            // this.env1=require('../PageLibrary/env.json');
            yield protractor_1.browser.get(juliemrObjRepo_1.juliemrObjRepo.homeURL);
        });
    }
    getfirstIPbox() {
        return juliemrObjRepo_1.juliemrObjRepo.firstIpBox;
    }
    setfirstIPbox(setvalue) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getfirstIPbox().sendKeys(setvalue);
        });
    }
    getsecndIpBox() {
        return juliemrObjRepo_1.juliemrObjRepo.secndIpBox;
    }
    setsecndIpBox(setValue) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getsecndIpBox().sendKeys(setValue);
        });
    }
    getGOButton() {
        return juliemrObjRepo_1.juliemrObjRepo.goButton;
    }
    clickGOButton() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.clickGOButton();
        });
    }
    getresltTxt() {
        return juliemrObjRepo_1.juliemrObjRepo.resltTxt;
    }
}
exports.JuliemrPage = JuliemrPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSnVsaWVtclBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9KdWxpZW1yUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWdFO0FBQ2hFLHFEQUFrRDtBQUVsRCxNQUFhLFdBQVc7SUFFUCxXQUFXOztZQUNwQixnREFBZ0Q7WUFDaEQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywrQkFBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLENBQUM7S0FBQTtJQUNNLGFBQWE7UUFDaEIsT0FBTywrQkFBYyxDQUFDLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBRVksYUFBYSxDQUFDLFFBQWU7O1lBQ3RDLE9BQU8sTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELENBQUM7S0FBQTtJQUVNLGFBQWE7UUFDaEIsT0FBTywrQkFBYyxDQUFDLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBRVksYUFBYSxDQUFDLFFBQWU7O1lBQ3RDLE9BQU8sTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELENBQUM7S0FBQTtJQUVNLFdBQVc7UUFDZCxPQUFPLCtCQUFjLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUFFWSxhQUFhOztZQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUNNLFdBQVc7UUFDZCxPQUFPLCtCQUFjLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUM7Q0FFSjtBQWpDRCxrQ0FpQ0MifQ==