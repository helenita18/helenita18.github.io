const senha1 = document.getElementById("senha1");
const pwd = document.getElementById("senha");
const name = document.getElementById("name");
const mor = document.getElementById("mor");
const idade = document.getElementById("idade");
const ing = document.getElementById("ing");
const an = document.getElementById("an");

function validate(coisa){
    coisa.setCustomValidity('');
    coisa.checkValidity();

    if(coisa == senha1){
        if(coisa.value == senha.value){
            coisa.setCustomValidity('');
            coisa.checkValidity();
            console.log("Senha Correta");
        }else{
            coisa.setCustomValidity('Assim, corrija ou não entre aqui.');
            console.log("Senha Incorreta.");
        }
    }


    if(coisa == mor){
        let hoje = new Date();
        let dmor = new Date(mor.value);
        let idade = hoje.getFullYear() - dmor.getFullYear();
        let dm = hoje.getMonth() - dmor.getMonth();
        if(dm < 0 || (dm == 0 && hoje.getDate() < dmor.getDate())){ 
        idade --;
        }
        if(idade >= 0){document.getElementById("idade").value = idade +" anos"}
        else {document.getElementById("idade").value = "Você ainda nem nasceu."}

        if(idade < 13){
            coisa.setCustomValidity("Aqui tem violência ficticia, menores de 13 anos não são permitidos.");
        }
        else if (idade > 150){
            coisa.setCustomValidity("Exagerou na mentira, maiores de 150 anos não são permitidos.");
        }
        else{
            coisa.setCustomValidity('');
        }
    }
    if(coisa == ing){
        let hoje = new Date();
        let ding = new Date(ing.value);
        let tempo = hoje.getFullYear() - ding.getFullYear();
        let dm = hoje.getMonth() - ding.getMonth();
        if(dm < 0 || (dm == 0 && hoje.getDate() < ding.getDate())){ 
        tempo --;
        }
        if(tempo >= 0){document.getElementById("an").value = tempo +" anos"}
    }
}

senha1.addEventListener('input' , function(){validate(senha1); });
senha.addEventListener('input' , function(){validate(senha); });
name.addEventListener('input' , function(){validate(name); });
mor.addEventListener('input' , function(){validate(mor); });
idade.addEventListener('input' , function(){validate(idade); });
ing.addEventListener('input' , function(){validate(ing); });
an.addEventListener('input' , function(){validate(an); });
