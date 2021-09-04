var cont = 1;
setInterval(function(){
    document.getElementById('radio' + cont).checked = true;
    cont++;
    if(cont > 4){
        cont = 1;
    }
}, 5000);