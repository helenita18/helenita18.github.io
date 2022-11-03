let item = 0 //contador de imagens;
const max = 6 //número da última imagem+1;

function proxImagem( img ){
	fetch("img/"+img+".jpg")
		.then(resp => resp.blob())
		.then(blob => {	 //https://stackoverflow.com/questions/50248329/fetch-image-from-api
			const imageObjectURL = URL.createObjectURL(blob);	
			console.log(imageObjectURL);
			const proxImg = document.createElement("img");
			proxImg.src = imageObjectURL;
			document.getElementById("placeholder").appendChild(proxImg);
		})
}




/** Atualização temporizada: */
window.onload = setInterval(function(){ 
	proxImagem( item++ %max );
    let scrollPoint = window.scrollX + window.innerWidth;
	window.scrollTo({ left: scrollPoint, behavior: 'smooth' })
}, 2000);



window.onload = function(){
	for(item = 0; item <5; item++){
		proxImagem( item );
	}
}
