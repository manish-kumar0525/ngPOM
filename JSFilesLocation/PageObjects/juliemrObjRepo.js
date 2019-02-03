"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class juliemrObjRepo {
}
juliemrObjRepo.homeURL = "http://juliemr.github.io/protractor-demo/";
juliemrObjRepo.testEnv = "SIT1";
juliemrObjRepo.firstIpBox = protractor_1.element(protractor_1.by.model("first"));
juliemrObjRepo.secndIpBox = protractor_1.element(protractor_1.by.model("second"));
juliemrObjRepo.goButton = protractor_1.element(protractor_1.by.id('gobutton'));
juliemrObjRepo.resltTxt = protractor_1.element(protractor_1.by.className('ng-binding'));
exports.juliemrObjRepo = juliemrObjRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVsaWVtck9ialJlcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9qdWxpZW1yT2JqUmVwby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFzRDtBQUN0RCxNQUFhLGNBQWM7O0FBQ1Qsc0JBQU8sR0FBVywyQ0FBMkMsQ0FBQztBQUM5RCxzQkFBTyxHQUFXLE1BQU0sQ0FBQztBQUN6Qix5QkFBVSxHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN2RCx5QkFBVSxHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUN4RCx1QkFBUSxHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNyRCx1QkFBUSxHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQU5oRix3Q0FPQyJ9