module.exports = {
    'Prueba Suma Calculadora'(browser) {
        const mainQueryInputSelector = 'input[name="query"]';
	//const mainQueryInputSelector = 'input[name="test"]';
	const mainQueryButton = 'input[name="test"]';
	const mainQuery = '2+2'
	var firstPageUrl = "";
        browser
		.url('https://serverless-unsj.s3.sa-east-1.amazonaws.com/index.html/');
		//.url('https://google.com');
		//.url(function(result) {
  						// return the current url
						//console.log(result);}
		    				
  						//firstPageUrl = result.value;
  						//module.exports.firstPageUrl;
		//});
	    	browser.saveScreenshot('./tests/archivo.png')
	    	//browser.waitForElementPresent('input[name="resultado"]',20000)
		browser.setValue(mainQueryInputSelector,mainQuery)
	    	browser.click(mainQueryButton)
		browser.assert.containsText(mainQueryInputSelector, '4')
    }
};
