// Make Scroll To Top Button

let scrollToTop = document.querySelector(".scroll-to-top");
let header = document.querySelector("header"); //?

window.onscroll = function () {
  if (window.scrollY >= 444) {
    scrollToTop.classList.add("active");
  } else {
    scrollToTop.classList.remove("active");
  }
};

scrollToTop.addEventListener("click", function () {
  header.scrollIntoView(true);
});

// increament the width and rate on scroll

let targetSection = document.querySelector(".our-skills");
let rateEs = document.querySelectorAll(".our-skills .skill .info .rate");
let fillEs = document.querySelectorAll(".our-skills .skill .prog-bar .fill");

function increamentWidth(el, started) {
  if (started) {
    return false;
  }
  el.style.width = el.parentElement.dataset.rate;
}

// increament rate on scroll

function increamentRate(el, started) {
  if (started) {
    return false;
  }
  let increamenter = setInterval(() => {
    el.innerHTML = `${parseInt(el.innerHTML) + 1}%`;
    if (el.innerHTML === el.parentElement.dataset.rate) {
      clearInterval(increamenter);
    }
  }, 600 / parseInt(el.parentElement.dataset.rate));
}

let started;
window.onscroll = function () {
  if (targetSection.getBoundingClientRect().top <= 0) {
    Array.from(fillEs).forEach((fill) => {
      increamentWidth(fill, started);
    });
    Array.from(rateEs).forEach((rate) => {
      increamentRate(rate, started);
    });
    started = true;
  }
};

// // Countdon Timer

// let timer = document.querySelector(".events .timer");
// let [timerDays, timerHours, timerMins, timerSecs] = timer.children;

// let nowDay = Date.now();

// let targetDay = new Date("2023-05-27T23:50:00Z");

// setInterval(() => {
//   timerDays.firstChild.textContent = nowDay
// } ,1000)

