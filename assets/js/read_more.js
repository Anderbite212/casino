var other_photos = document.querySelector(".other_photo");
other_photo.addEventListener("click", function(event){
	var target = event.target;
	if(target.className.includes("read_more")){
		var buttonReadMore = target.parentNode.querySelector("other_photo_more");
		buttonReadMore.classlist.toggle("other_photo_more--open");
		if(target.textContent =="Читати повністю") {
			target.textContent = "Згорнути";
		} else {
			target.textContent = "Читати поаністю"
		}
	}
})