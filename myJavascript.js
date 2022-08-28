function inform() {
    var apigClient = apigClientFactory.newClient();
    var cuerpo = document.getElementById("query").value;
    var salida = cuerpo.split('+');
    let text='{"op1":"'+salida[0]+'","op2":"'+salida[1]+'"}';
    const obj = JSON.parse(text);
    apigClient.calcProdHelloPost({},obj,{})
    .then(function(result){
        var resultado=JSON.stringify(result);
        console.log(resultado);
        document.getElementById("query").value= parseInt(result.data.body,10);
        //alert("Holi")
    }).catch(function(result){
        alert("ERROR")
    });
}
