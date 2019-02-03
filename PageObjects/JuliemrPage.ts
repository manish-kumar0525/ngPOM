import { element, by, browser, ElementFinder } from 'protractor'
import { juliemrObjRepo } from './juliemrObjRepo';

export class JuliemrPage {
    
    public async getHomePage():Promise<void> {
        // this.env1=require('../PageLibrary/env.json');
        await browser.get(juliemrObjRepo.homeURL);
    }
    public getfirstIPbox(): ElementFinder {
        return juliemrObjRepo.firstIpBox;
    }

    public async setfirstIPbox(setvalue:string): Promise<void> {
        return await this.getfirstIPbox().sendKeys(setvalue);
    }
    
    public getsecndIpBox():ElementFinder {
        return juliemrObjRepo.secndIpBox;
    }
    
    public async setsecndIpBox(setValue:string): Promise<void> {
        return await this.getsecndIpBox().sendKeys(setValue);
    }

    public getGOButton(): ElementFinder {
        return juliemrObjRepo.goButton;
    }
    
    public async clickGOButton(): Promise<boolean> {
        return await this.clickGOButton();
    }
    public getresltTxt(): ElementFinder {
        return juliemrObjRepo.resltTxt;
    }

}