import { cameraPage } from "../../pages/cameraPage";
const cameraPageObj=new cameraPage();
import cameraData from '../../fixtures/cameraData.json'
import { before, describe } from "mocha";
describe("camera suite",()=>{
    before(()=>{
        cy.visit(cameraData.cameraURL)
    })
    it("camera addTocart Test",()=>{
        cameraPageObj.openNikonPage()
        cameraPageObj.enterQuanity(cameraData.quanitity)
        cameraPageObj.addToCart()
    })



})