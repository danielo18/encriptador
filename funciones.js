var textoa="ai";
var textoe="enter";
var textoi="imes";
var textoo="ober";
var textou="ufat";

function encriptarTexto(){
    let text = document.getElementById('textoTrabajar').value;
    let encriptado="";
    let letra="";
    let verificar=0;
     for(var con=0; con<text.length;con++){
         letra=text.charAt(con);
         if(letra==letra.toUpperCase() || !isNaN(letra)){
               verificar=1;
         } 
         if(text.charAt(con)=='a'){
            letra=textoa;
         }
         if(text.charAt(con)=='e'){
            letra=textoe;
         }
         if(text.charAt(con)=='i'){
            letra=textoi;
         }
         if(text.charAt(con)=='o'){
            letra=textoo;
         }
         if(text.charAt(con)=='u'){
            letra=textou;
          } 
         encriptado+=letra;
    }
    alert(verificar);
    if(verificar==0){
     document.getElementById('resultadoCopiar').value=encriptado;
     document.getElementById('copio').removeAttribute('disabled');
    }
    else{
     document.getElementById('mensaje').style.color="red";
    }
}

function desencriptarTexto(){
    let text = document.getElementById('textoTrabajar').value;
    let desencriptado="";
    let letra="";
    for(var con=0; con<text.length;con++){
        letra=text.charAt(con);
        if(text.charAt(con)=='a'&& text.slice(con,con+2)==textoa ){
           letra="a";
           con++;
       }
       if(text.charAt(con)=='e' && text.slice(con,con+5)==textoe){
            letra="e";
            con=con+4;
       }
       if(text.charAt(con)=='i'&& text.slice(con,con+4)==textoi){
            letra="i";
            con=con+3;
       }
       if(text.charAt(con)=='o'&& text.slice(con,con+4)==textoo){
            letra="o";
            con=con+3;
       }
       if(text.charAt(con)=='u'&& text.slice(con,con+4)==textou){
            letra="u";
            con=con+3;  
       } 
       desencriptado+=letra;
    }

    document.getElementById('resultadoCopiar').value=desencriptado;
    document.getElementById('copio').removeAttribute('disabled');
}

function copiarTexto(){
    let texto = document.getElementById('resultadoCopiar').value;
    navigator.clipboard.writeText(texto).then(
        () => {
          alert("Texto copiado");
        },
        () => {
          alert("Error al copiar texto");
        },
      );
}
