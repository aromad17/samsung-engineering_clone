window.addEventListener("load", () => {

  const country = document.querySelector(".job_country");
  const category = document.querySelector(".job_category");

  country.addEventListener("click", () => {
    country.classList.toggle("on");
  })

  category.addEventListener("click", () => {
    category.classList.toggle("on");
  })

});