module.exports = {
    'Prueba Suma Calculadora'(browser) {
        const mainQueryInputSelector = 'name="query"';
	const mainQueryButton = 'name="test"';
	const mainQuery = '2+2'
	var firstPageUrl = "";
        browser
		.url(function(result) {
  						// return the current url
  						firstPageUrl = result.value;
  						module.exports.firstPageUrl;
		});
		.setValue(mainQueryInputSelector,mainQuery);
	    	.click(mainQueryButton);
		.saveScreenshot('test_output/archivo.png');
		.assert.containsText(mainQueryInputSelector, '4');
    }
};
