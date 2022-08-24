module.exports = {
    'Prueba Suma Calculadora'(browser) {
        const mainQueryInputSelector = 'input[id="query"]';
	const mainQueryButton = 'input[id="test"]';
	const mainQuery = '2+2'
	var firstPageUrl = "";
        browser
		.url(function(result) {
  						// return the current url
  						firstPageUrl = result.value;
  						//module.exports.firstPageUrl;
		});
		browser.setValue(mainQueryInputSelector,mainQuery)
	    	browser.click(mainQueryButton)
		browser.saveScreenshot('test_output/archivo.png')
		browser.assert.containsText(mainQueryInputSelector, '4')
    }
};
