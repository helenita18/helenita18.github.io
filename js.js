function seleciona(aba){
    let lista = document.getElementsByClassName("wrapper");
    for ( let i = 0; i < lista.length; i++ ) {
        document.getElementById("wrapper-" +i).style.display="none";
        //document.getElementById("btn-" + i).style.background="transparent";
        document.getElementById("btn-" + i).classList.remove("ativa");
    }
    document.getElementById("wrapper-" + aba).style.display="grid";
    //document.getElementById("btn-" + aba).style.background="#e5e5e5";
    document.getElementById("btn-" + aba).classList.add("ativa");
}
function area(){
    let b1 =document.getElementById("entrada-BB").value;
    let b2 =document.getElementById("entrada-BC").value;
    let alt =document.getElementById("entrada-alt").value;
    let lad =document.getElementById("entrada-lad").value;
    let lad2 =document.getElementById("entrada-lad1").value;
    let are = ((b1*alt + b2*alt) /2);
    let pe=(b1*1 + b2*1 + lad*1 + lad2*1);

    document.getElementById("result-P").value = pe;
    document.getElementById("result-A").value=are;
}

document.getElementById("entrada-lad1").addEventListener('change', area);

function peri(){
    let b1 =document.getElementById("entrada-BB").value;
    let b2 =document.getElementById("entrada-BC").value;
    

    let pe=(b1+b2+lad+lad);
    
    document.getElementById("result-P").value = pe;

}
document.getElementById("entrada-lad").addEventListener('change', peri);


function ctore(){
    let tempc = document.getElementById("entrada-ctore").value;
    if (tempc < 0){
        document.getElementById("result-ctore").value="Valor inexistente abaixo de 0 °Re!";
    } else {
        let tempre = (tempc * 4/5);
        document.getElementById("result-ctore").value=tempre.toFixed(1);
    }
}

document.getElementById("entrada-ctore").addEventListener('change', ctore);

function tib(){
    let tib = document.getElementById("entrada-tib").value;
    let ter = (tib * 1.1);
    let gig = (tib * 1100);
    let meg = (gig * 1000);
    let kil = (meg * 1000);
    let bte = (kil * 1000);

    document.getElementById("result-tb").value = ter.toFixed(2);
    document.getElementById("result-gb").value = gig;
    document.getElementById("result-mb").value = meg;
    document.getElementById("result-kb").value = kil;
    document.getElementById("result-b").value = bte;
   
    
}
document.getElementById("entrada-tib").addEventListener('change', tib);

window.onload = seleciona(0);

document.getElementById("btn-0").addEventListener("click", function(){seleciona(0)} );
document.getElementById("btn-1").addEventListener("click", function(){seleciona(1)} );
document.getElementById("btn-2").addEventListener("click", function(){seleciona(2)} );
