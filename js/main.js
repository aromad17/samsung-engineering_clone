window.addEventListener("load", function () {


  function activation(i, value) {
    for (let el of value) {
      el.style.display = "none";
    }
    value[i].style.display = "block";
  }

  function activationOn(i, value) {
    for (let el of value) {
      el.classList.remove("on");
    }
    value[i].classList.add("on");
  }

  function noneAll(value) {
    for (let el of value) {
      el.style.display = "none";
    }
  }

  //---------------------------------------------------------------------------business

  const businessMenu = document.querySelectorAll(".business_title_wrap>ul>li");
  let businessBox = document.querySelector(".business_content_box");
  const businessPic = document.querySelectorAll(".business_content_info>li");
  let boxWid = businessBox.children[0].clientWidth;
  const prevBusiness = document.querySelectorAll(".prevBusiness");
  const nextBusiness = document.querySelectorAll(".nextBusiness");
  let nowIdx = 0;

  businessMenu.forEach((item, idx) => {
    item.addEventListener("click", e => {
      e.preventDefault();
      businessBox.style.left = -(boxWid * idx) + "px";
      nowIdx = idx;
      noneAll(businessPic);
      businessPic[idx].style.display = "block";
      activationOn(idx, businessMenu);
    })

  })

  prevBusiness.forEach((item, idx) => {
    item.addEventListener("click", e => {
      e.preventDefault();
      boxWid = businessBox.children[0].clientWidth;
      if (idx <= 0) {
        idx = 7;
      }
      businessBox.style.left = -((idx - 1) * boxWid) + "px";
      noneAll(businessPic);
      for (let el of businessMenu) {
        el.classList.remove("on");
      }
      businessMenu[idx - 1].classList.add("on");
      businessPic[(idx - 1)].style.display = "block";
    })
  })
  nextBusiness.forEach((item, idx) => {
    item.addEventListener("click", e => {
      e.preventDefault();
      boxWid = businessBox.children[0].clientWidth;
      if (idx == 6) {
        idx = -1;
      }
      businessBox.style.left = -((idx + 1) * boxWid) + "px";
      noneAll(businessPic);
      for (let el of businessMenu) {
        el.classList.remove("on");
      }
      businessMenu[idx + 1].classList.add("on");
      businessPic[idx + 1].style.display = "block";
    })
  })

  // --------------------------------------------------------------------counting

  const countNum = document.querySelectorAll(".counting_num");
  const endNum = [46, "1,572", "17.9", "10.1"];

  let autoNum = () => {

    const counting0 = Math.floor((Math.random() * 9) + 0) //1자리 0~9
    const counting1 = Math.floor((Math.random() * 89) + 10) //2자리 10~99
    const counting2 = Math.floor((Math.random() * 899) + 100) //3자리 100~999

    countNum[0].innerHTML = counting1;
    countNum[1].innerHTML = counting0 + "," + counting2;
    countNum[2].innerHTML = counting1 + "." + counting0;
    countNum[3].innerHTML = counting1 + "." + counting0;

    ranNum = setTimeout(autoNum, 20)
  };

  let ranNum = setTimeout(autoNum, 800)

  function finalNum() {
    clearInterval(ranNum);
    countNum[0].innerHTML = endNum[0];
    countNum[1].innerHTML = endNum[1];
    countNum[2].innerHTML = endNum[2];
    countNum[3].innerHTML = endNum[3];
  }


  // --------------------------------------------------------------------innovation
  const innoCont = document.querySelectorAll(".innovation_content>div");
  const innoSummary = document.querySelectorAll(".innovation_content>div.on>a>ul");


  innoCont.forEach((item, idx) => {
    item.addEventListener("click", e => {
      e.preventDefault();
      activationOn(idx, innoCont);
    })
  })


  const toTop = document.querySelector(".footer_inner>button")
  const businessConWrap = document.querySelector(".business_content_wrap");
  const innoContWrap = document.querySelector(".innovation_content");
  const delivery = document.querySelector(".delivery");
  const windowWid = window.innerWidth;


  window.addEventListener("scroll", () => {
    let windowHeight = document.querySelector("html").scrollTop;
    console.log(windowHeight);
    // 숫자 따르르
    if (windowHeight >= 500) {
      setTimeout(finalNum, 800);

      if (windowHeight >= 1200) {
        businessConWrap.classList.add("on");

        if (windowHeight >= 1900) {
          innoContWrap.style.opacity = 1;
          setTimeout(() => {
            delivery.classList.add("on");
          }, 1000);
        }


      }


    }


    // footer
    if (windowWid > 1300) {
      if (windowHeight < 70) {
        toTop.style.display = "none";
      } else if (windowHeight >= 70 && windowHeight < 4000) {
        toTop.style.display = "block";
        toTop.classList.remove("on");
      } else if (windowHeight >= 4000) {
        toTop.classList.add("on");
      }
    } else if (windowWid <= 1300 && windowWid > 768) {
      if (windowHeight < 70) {
        toTop.style.display = "none";
      } else if (windowHeight >= 70 && windowHeight < 4300) {
        toTop.style.display = "block";
        toTop.style.bottom = "3" + "%";
        toTop.classList.remove("on");
      } else if (windowHeight >= 4300) {
        toTop.classList.add("on");
        toTop.style.bottom = "15" + "%";
      }
    } else if (windowWid <= 768) {
      if (windowHeight < 70) {
        toTop.style.display = "none";
      } else if (windowHeight >= 70 && windowHeight < 5100) {
        toTop.style.display = "block";
        toTop.style.bottom = "3" + "%";
        toTop.classList.remove("on");
      } else if (windowHeight >= 5100) {
        toTop.classList.add("on");
        toTop.style.bottom = "70" + "%";
      }
    }
  })

  toTop.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })


})