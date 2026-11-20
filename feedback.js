   document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  
  });

  const stars = document.querySelectorAll(".fa-star");
  const ratingValue = document.getElementById("star-rating");

  stars.forEach(star => {
    star.addEventListener("click", function () {
      let rating = this.getAttribute("data-rating");
      rating.value = rating;

      stars.forEach(s => s.classList.remove("checked"));
      for (let i = 0; i < rating; i++) {
        stars[i].classList.add("checked");
      }
    });
  });
   
