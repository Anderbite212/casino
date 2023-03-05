 function photoOnClick(event) {
      if(event.target.classList.contains("other_photo")){
        let photos = document.getElementsByClassName("other_photo");
        for(let i = 0; i < photos.length; i++){
          photos[i].classList.remove("active");
        }
        event.target.classList.add("active");
      }
    }
    var otherPhotos = document.getElementsByClassName("other_photo");
    for(let i = 0; i < otherPhotos.length; i++) {
      otherPhotos[i].addEventListener("click", photoOnClick);
    }