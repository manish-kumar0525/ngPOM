import { element, ElementFinder,by } from "protractor"
export class juliemrObjRepo {
    public static homeURL: string = "http://juliemr.github.io/protractor-demo/";
    public static testEnv: string = "SIT1";
    public static firstIpBox: ElementFinder = element(by.model("first"));
    public static secndIpBox: ElementFinder = element(by.model("second"));
    public static goButton: ElementFinder = element(by.id('gobutton'));
    public static resltTxt: ElementFinder = element(by.className('ng-binding'));
}