// arquivo para usar o JSON em + informações
// declarando para uma variável o arquivo JSON
// e atribuindo a um elemento

let textinformacao = '{"infovideos":[' +
'{"idvideo":"00","nome":"nomevideo0","info":"Texto sobre o video0okokokokokokokooko" },' +
'{"idvideo":"01","nome":"nomevideo1","info":"Texto sobre o video1" },' +
'{"idvideo":"02","nome":"nomevideo2","info":"Texto sobre o video2" }]}';

const obj = JSON.parse(textinformacao);

let elemento ="Info";
document.getElementById(elemento).innerHTML =obj.infovideos[1].nome + " " + obj.infovideos[1].info;

// arquivo para utilizar o JSON em legenda
// utlizando o getJSON do JQUERY para ler o arquivo;
// ler o arquivo e ler todos os array e publicar na tela.

$.getJSON("js/infolegendas.json",function (response){
    if (response!=null|| response!=undefined){
        var dadoslegenda=response;
        
        for (i=0;i<6;i++){
          var elementoS ="show"+i;
          var elementoA ="ano"+i;
          var elementoC ="critica"+i;

          elementoVS=dadoslegenda.infolegenda[i].show
          elementoVA=dadoslegenda.infolegenda[i].ano
          elementoVC="";
          for (e=0;e<dadoslegenda.infolegenda[i].critica;e++){
            elementoVC="*"+elementoVC;
          } 
          
          document.getElementById(elementoS).innerHTML=elementoVS;
          document.getElementById(elementoA).innerHTML=elementoVA;
          document.getElementById(elementoC).innerHTML=elementoVC;
        }
        
           

    }
    
})




