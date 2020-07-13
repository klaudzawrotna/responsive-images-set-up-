const IMAGES = document.querySelectorAll("img");
const SIZES = {
	showcase: "100vw",
	reason: "(max-width: 799px) 100 vw, 372px",
	feature: "(max-width: 799px) 100 vw, 558px",
	story: "(max-width: 799px) 100 vw, 670px",
}

function makeSrcSet(imgSrc) {
	let markup = [];
	let width = 400;


	for (let i = 0; i<5; i++) {
		markup[i] = imgSrc + "-" + width + ".jpg" + width + "w";
		width+=400;
	}
	

	return markup.join();

}



for ( let i =0; i<IMAGES.length; i++) {
	let imgSrc = IMAGES[i].getAttribute("src");
	imageSrc = imageSrc.slice(0, -8);
	let srcset = makeSrcSet(imgSrc);
	IMAGES[i].setAttribute("srcset", srcset);
	IMAGES[i].setAttribute("sizes", sizes);


	let type = IMAGES[i].getAttribute("data-type");
	let sizes = SIZES[type];

	console.logs(sizes);


}


