
// en cas de success on viens ici
var success = function(data){
	// je recupere les info de l'objet de l'api et l'affiche en console
	console.log("donnees api",data);
	// je gere mon medi	
		getMedia(data);
		// j'affiche la description de mon img
		var desc = document.getElementById("explanation");
			desc.innerHTML = "" + data.explanation;
		
}




//je commence ma requete
function getReq(){
	// dans une variable date je recup la valeur
	var date = document.getElementById("date").value;
	
//	console.log(date);
	//si mon url n'est pas bonne on retourne sur l'image du jour
	if(date)
		var url ="https://api.nasa.gov/planetary/apod?api_key="+"ZS8ZP2zX8JSDiMsKIVR9Jz2H45w4vY4qGCTJrUsu&date="+date;
	else
		var url ="https://api.nasa.gov/planetary/apod?api_key="+"ZS8ZP2zX8JSDiMsKIVR9Jz2H45w4vY4qGCTJrUsu"
	//en cas de success
	$.get(url,success).done(function(){


	})
	//en cas d'erreur
	.fail(function(){
		alert("error");	
	})
	.always(function(){

	});

}

// recuperer l'img ou video
function getMedia(data){

	if(data.media_type === "image")
	{	

		// je recupere ma balise img dans laquel je met mon url pour avoir mon im
		var content = document.querySelector("img");
                content.setAttribute("src", data.url);
                document.getElementById("frame").style.display = "none";
                document.getElementById("apodImg").style.display = "block";
			
	}
	else if(data.media_type === "video")
	{	// je recupere ma balise iframe dans laquel je met mon url pour avoir ma video
		var content = document.querySelector("iframe");
		content.setAttribute("src", data.url);
                document.getElementById("frame").style.display = "block";
                document.getElementById("apodImg").style.display = "none";
	}
	else
	{ //si ce n'est ni une img ni une video(iframe) alors on renvoi une erreur
		console.log("error");
		alert("Ce format ne peu etre chargé");
	}
}
