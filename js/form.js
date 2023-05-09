window.addEventListener("load", () => {

  const askUl = document.querySelector(".ask_form>div");

  askUl.addEventListener("click", (e) => {
    e.preventDefault();
    askUl.classList.toggle("on");
  })

})