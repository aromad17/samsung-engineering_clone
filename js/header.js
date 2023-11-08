window.addEventListener("load", () => {
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  // gnb
  const gnbMenu = document.querySelectorAll(".gnb>li");
  const gnbMenuWrap = document.querySelectorAll(".gnb>li>div");
  const gnbMenuWrapUl = document.querySelectorAll(".gnb>li>div>ul");
  const headerInner = document.querySelector(".header_inner");
  const bpLi = document.querySelectorAll(".business_project>ul>li");
  const lang = document.querySelector(".lang");
  const langAll = document.querySelector(".lang>ul");
  const searchOn = document.querySelector(".search_btn");
  const searchOff = document.querySelector(".search>a")
  let langStatus = 0;
  // ham menu
  const hamBtn = document.querySelector(".ham_menu>a");
  const hamWrap = document.querySelector(".ham_menu_wrap");
  const hamClose = document.querySelector(".ham_close");
  const hamMenu = document.querySelectorAll(".ham_gnb>li");
  const hamMenuA = document.querySelectorAll(".ham_gnb>li>a");
  const hamSubMenu = document.querySelectorAll(".ham_gnb>li>div");
  const hamFold = document.querySelectorAll("ul.ham_gnb>li>div>ul>li");
  const hamFoldMenu = document.querySelectorAll("ul.ham_gnb>li>div>ul>li>ul");
  const hamMore = document.querySelectorAll(".ham_more");
  let windowHeight = document.documentElement.clientHeight;

  function langOut() {
    langAll.style.display = "none";
  }

  function noneAll(value) {
    for (let el of value) {
      el.style.display = "none";
    }
  }

  window.addEventListener("resize", () => {
    windowHeight = document.documentElement.clientHeight;
    hamWrap.style.height = windowHeight + "px";
  })



  // 햄버거 버튼 여닫이
  hamBtn.addEventListener("click", (e) => {
    e.preventDefault();
    hamWrap.classList.add("on");
    hamWrap.style.height = windowHeight + "px";
  })

  hamClose.addEventListener("click", (e) => {
    e.preventDefault();
    hamWrap.classList.remove("on");
    hamWrap.style.height = windowHeight + "px";
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1300) {
      hamWrap.style.display = 'none';
    } else {
      hamWrap.style.display = 'block';
    }
  })
  // 햄버거 메뉴 누르면 하위 메뉴 나오게

  hamMenuA.forEach((item, idx) => {

    item.addEventListener("click", e => {
      e.preventDefault();

      if (item.closest("li").classList.contains("on")) {
        item.closest("li").classList.remove("on");
      } else {
        for (let el of hamMenu) {
          el.classList.remove("on");
        }
        item.closest("li").classList.add("on");
      }
    })

  })

  // 햄버거 소메뉴
  hamFold.forEach((item, idx) => {

    item.addEventListener("click", e => {

      e.preventDefault();
      if (item.children[1].classList.contains("on")) {
        item.children[1].classList.remove("on");
      } else {
        item.children[1].classList.add("on");
      }

    })

  })


  hamMore.forEach((item, idx) => {

    item.addEventListener("click", e => {

      item.classList.toggle("on");

    })

  })


  // 헤더사이즈
  gnbMenu.forEach((item, idx) => {

    let headerHeight = gnbMenuWrap[idx].clientHeight;

    item.addEventListener("mouseover", e => {
      let screenWid = window.innerWidth;

      if (screenWid > 1300) {
        // 헤더호버시
        noneAll(gnbMenuWrap);
        gnbMenuWrap[idx].style.display = "block";
        headerInner.style.height = 90 + headerHeight + "px";


        setTimeout(() => {

          // ul에 on 붙이기
          gnbMenuWrapUl[idx].classList.add("on");
          const gnbMenuList = item.children[1].children[0].children;

          for (let i = 0; i < gnbMenuList.length; i++) {
            gnbMenuList[i].style.transitionDelay = `${0.2 * i}s`;
          }
        }, 10);
      }
    })

    // 헤더에서 나갔을때
    item.addEventListener("mouseout", e => {

      headerInner.style.height = 90 + "px";
      noneAll(gnbMenuWrap);
      // ul에 on 지우기
      setTimeout(() => {
        gnbMenuWrapUl[idx].classList.remove("on");
      }, 10);


    })

    item.addEventListener("focusin", e => {
      let screenWid = window.innerWidth;

      if (screenWid > 1300) {
        // 헤더호버시
        noneAll(gnbMenuWrap);
        gnbMenuWrap[idx].style.display = "block";
        headerInner.style.height = 90 + headerHeight + "px";

        setTimeout(() => {
          // ul에 on 붙이기
          gnbMenuWrapUl[idx].classList.add("on");
          const gnbMenuList = item.children[1].children[0].children;

          for (let i = 0; i < gnbMenuList.length; i++) {
            gnbMenuList[i].style.transitionDelay = `${0.2 * i}s`;
          }
        }, 10);
      }
    });

    // 메뉴 항목에서 포커스가 해제될 때
    item.addEventListener("focusout", e => {
      headerInner.style.height = 90 + "px";
      noneAll(gnbMenuWrap);
      // ul에 on 지우기
      setTimeout(() => {
        gnbMenuWrapUl[idx].classList.remove("on");
      }, 10);
    });





  })




  // 헤더에 프로젝트부분 배경이미지
  bpLi.forEach((item, idx) => {
    item.style.backgroundImage = `url(images/BP_bg_${idx + 1}.jpg)`;

  })


  // lang부분
  lang.addEventListener("mouseenter", e => {
    langAll.style.display = "flex";
    langStatus = 1;
  })
  lang.addEventListener("mouseleave", e => {
    if (langStatus == 0) {
      langOut();
    }
  })

  langAll.addEventListener("mouseenter", () => {
    langStatus = 0;
  })

  langAll.addEventListener("mouseleave", () => {
    langStatus = 0;
  })

  window.addEventListener("scroll", () => {

    let scrollHeight = document.querySelector("html").scrollTop;

    if (scrollHeight > 100) {
      header.style.display = "none";
    } else {
      header.style.display = "block";
    }

  })

  searchOn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".search").style.display = "block";
  })

  searchOff.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".search").style.display = "none";
  })




});