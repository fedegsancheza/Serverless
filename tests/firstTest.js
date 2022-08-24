module.exports = {
    'Prueba Suma Calculadora'(browser) {
        const mainQueryInputSelector = 'input[id="query"]';
	const mainQueryButton = 'input[id="test"]';
	const mainQuery = '2+2'
	var firstPageUrl = "";
        browser
		.url(function(result) {
  						// return the current url
						console.log(result);console.log("Hola");}
		    				
  						//firstPageUrl = result.value;
  						//module.exports.firstPageUrl;
		});
	    	console.log(
	    	browser.saveScreenshot('./tests/archivo.png')
	    	browser.waitForElementVisible('input[id="resultado"]',20000)
		browser.setValue(mainQueryInputSelector,mainQuery)
	    	browser.click(mainQueryButton)
		browser.assert.containsText(mainQueryInputSelector, '4')
    }
};
