const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const arrowElement = document.getElementsByClassName('arrow');
const imageElement = document.querySelector("#banner img");
const tagElement = document.querySelector("#banner p");
const dotsElement = document.querySelector("#banner .dots")
const displayDots =(position)=> {
	dotsElement.innerHTML = ""
	let dot;
	slides.forEach ((element,key)=>{
		dot = document.createElement('div')
		dot.classList.add('dot')
		if (position==key){
			dot.classList.add ('dot_selected')
		}
		// si la condition est acquise alors je rajoute dot_selected
		dotsElement.appendChild (dot)	
	})
}
// si je clique a droite l'icone suivante seras selectionnée
const displayBanner =(direction)=> {
	if('right'== direction) {
		position = position +1 
	if (position >=slides.length ) {
		position = 0
	}	
// si je clique a gauche l'icone précedente seras selectionnée
	}
	if('left'== direction) {
		position = position -1
		if (position <=-1 ) {
			position = slides.length -1
		}
	}
	displayDots (position)
	tagElement.innerHTML = slides[position].tagLine
	imageElement.src="./assets/images/slideshow/"+slides[position].image
}
let position = 0;

displayBanner()

for (element of arrowElement) { 
 	element.addEventListener('click', (event)=>{
		let arrow = event.currentTarget
		if(arrow.classList.contains('arrow_right')){
			displayBanner('right')
			
		// Si l'element contient  la classe arrow_right 
		// alors je vais a droite	
		}
		if(arrow.classList.contains('arrow_left')){

			displayBanner('left')
		// Si l'element contient  la classe arrow_left
		// alors je vais a gauche	
		}	
	})
};