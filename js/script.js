// ityped.min.js
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.ityped={})}(this,function(e){"use strict";e.init=function(e,t){var n=0,o=void 0,r=void 0,i=function(e,t){n===o&&t.loop&&(n=0),setTimeout(function(){a(e[n],t)},t.startDelay)},a=function(t,n){var o=0,r=t.length,i=setInterval(function(){if(n.placeholder?e.placeholder+=t[o]:e.textContent+=t[o],++o===r)return d(i,n)},n.typeSpeed)},d=function(e,t){return clearInterval(e),t.disableBackTyping&&n===o-1?t.onFinished():t.loop||n!==o-1?void setTimeout(function(){return c(t)},t.backDelay):t.onFinished()},c=function(t){var n=t.placeholder?e.placeholder:e.textContent,o=n.length,r=setInterval(function(){if(t.placeholder?e.placeholder=e.placeholder.substr(0,--o):e.textContent=n.substr(0,--o),0===o)return s(r,t)},t.backSpeed)},s=function(e,t){clearInterval(e),++n,i(r,t)};return function(t){var n=function(e){var t=e.strings,n=void 0===t?["Put your strings here...","and Enjoy!"]:t,o=e.typeSpeed,r=void 0===o?100:o,i=e.backSpeed,a=void 0===i?50:i,d=e.backDelay,c=void 0===d?500:d,s=e.startDelay,l=void 0===s?500:s,u=e.cursorChar,p=void 0===u?"|":u,f=e.placeholder,v=void 0!==f&&f,h=e.showCursor,y=void 0===h||h,b=e.disableBackTyping,g=void 0!==b&&b,C=e.onFinished,k=void 0===C?function(){}:C,m=e.loop;return{strings:n,typeSpeed:r,backSpeed:a,cursorChar:p,backDelay:c,placeholder:v,startDelay:l,showCursor:y,loop:void 0===m||m,disableBackTyping:g,onFinished:k}}(t||{}),a=n.strings;r=a,o=a.length,"string"==typeof e&&(e=document.querySelector(e)),n.showCursor&&function(e,t){var n=document.createElement("span");n.classList.add("ityped-cursor"),n.textContent="|",n.textContent=t.cursorChar,e.insertAdjacentElement("afterend",n)}(e,n),i(a,n)}(t)},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.min.js.map


// Preloader

window.addEventListener("load", function () {
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
});

// iTyped

window.ityped.init(document.querySelector(".iTyped"), {
  strings: [
    "Dedicated Self Learner",
    "Front End Developer",
    "WordPress Expert",
    "Graphic Designer",
    "Content Writer",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
});

// Portfolio Item Filter

const filterContainer = document.querySelector(".portfolio-filter"),
  filterBtns = filterContainer.children,
  totalFilterBtn = filterBtns.length,
  portfolioItems = document.querySelectorAll(".portfolio-item"),
  totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");
    for (let k = 0; k < totalPortfolioItem; k++) {
      if (filterValue === portfolioItems[k].getAttribute("data-category")) {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      } else {
        portfolioItems[k].classList.remove("show");
        portfolioItems[k].classList.add("hide");
      }
      if (filterValue === "all") {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
    }
  });
}

// Portfolio Lighbox

const lightbox = document.querySelector(".lightbox"),
  lightboxImg = lightbox.querySelector(".lightbox-img"),
  lightboxText = lightbox.querySelector(".caption-text"),
  lightboxClose = lightbox.querySelector(".lightbox-close"),
  lightboxCounter = lightbox.querySelector(".caption-counter");

let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
  portfolioItems[i].addEventListener("click", function () {
    itemIndex = i;
    changeItem();
    toggleLightbox();
  });
}

function toggleLightbox() {
  lightbox.classList.toggle("open");
}

function changeItem() {
  let imgSrc = portfolioItems[itemIndex]
    .querySelector(".portfolio-img img")
    .getAttribute("src");
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML = portfolioItems[itemIndex].querySelector(
    "h4"
  ).innerHTML;
  lightboxCounter.innerHTML = itemIndex + 1 + " of " + totalPortfolioItem;
}

function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalPortfolioItem - 1;
  } else {
    itemIndex--;
  }
  changeItem();
}

function nextItem() {
  if (itemIndex === totalPortfolioItem - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
}

// close lightbox

lightbox.addEventListener("click", function (event) {
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
});

// Aside Navbar

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    // remove back section class
    removeBackSectionClass();

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // add back section class
        addBackSectionClass(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");

    showSection(this);

    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function addBackSectionClass(num) {
  allSection[num].classList.add("back-section");
}

function removeBackSectionClass() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  addBackSectionClass(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSectionClass();
});

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];

  document.querySelector("#" + target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}


// Dark Mode Toggle Button
var isDark = true;
const toggleSwitch = document.querySelector(".toggle-style-switcher");
toggleSwitch.addEventListener("click", function () {
  if (isDark) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    // Add Light Theme in LocalStorage
    localStorage.setItem("theme", "dark")
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.removeItem("theme");
  }
  isDark = !isDark;
})


// Get Theme From Local Storage while Toggle Switch is Clicked
function latestTheme() {
  if (localStorage.getItem("theme")) {
    document.body.classList.add('dark');
    toggleSwitch.checked = true;
  }
}
// Initialize the localstorage
latestTheme();

// Lunch The Notifiaction
  function lunchNotifiaction() {
    // Get the snackbar DIV
    var x = document.getElementById("notification");

    // Add the "show" class to DIV
    x.className = "show";

    // After 30 seconds, remove the show class from DIV
    setTimeout(function () {
      x.className = x.className.replace("show", "hide");
    }, 30000);
  }
// Initialize theNotification
document.body.onload = lunchNotifiaction();
