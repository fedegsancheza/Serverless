module.exports = {
    'Prueba Suma Calculadora'(browser) {
        const mainQueryInputSelector = 'input[id="query"]';
	const mainQueryButton = 'input[id="test"]';
	const mainQuery = '2+2'
	var firstPageUrl = "";
        browser
		.url(function(result) {
  						// return the current url
						console.log(result);
  						//firstPageUrl = result.value;
  						//module.exports.firstPageUrl;
		});
	    	browser.saveScreenshot('/test_output/archivo.png')
	    	browser.waitForElementVisible('input[id="resultado"]',20000)
		browser.setValue(mainQueryInputSelector,mainQuery)
	    	browser.click(mainQueryButton)
		browser.assert.containsText(mainQueryInputSelector, '4')
    }
};
