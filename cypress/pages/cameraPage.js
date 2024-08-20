export class cameraPage{

    weblocators = {
        product:"img[title='Nikon D300']",
        quanitiyTextbox:"input#input-quantity",
        addToCartButton:"button#button-cart",
        
    }

     openNikonPage(){
        cy.get(this.weblocators.product).click()
    }
    enterQuanity(number){
        cy.get(this.weblocators.quanitiyTextbox).clear().type(number)
    }
    addToCart(){
        cy.get(this.weblocators.addToCartButton).click()
    }
    

}