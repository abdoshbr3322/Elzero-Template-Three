// Make Scroll To Top Button

let scrollToTop = document.querySelector(".scroll-to-top");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 444) {
    scrollToTop.classList.add("active");
  } else {
    scrollToTop.classList.remove("active");
  }
});

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

let rateStarted;
window.addEventListener("scroll", function () {
  if (targetSection.getBoundingClientRect().top <= 0) {
    Array.from(fillEs).forEach((fill) => {
      increamentWidth(fill, rateStarted);
    });
    Array.from(rateEs).forEach((rate) => {
      increamentRate(rate, rateStarted);
    });
    rateStarted = true;
  }
});

// Countdon Timer

let timer = document.querySelector(".events .timer");
let [timerDays, timerHours, timerMins, timerSecs] = timer.children;

const targetDay = new Date("2022-07-18T00:00:00Z");

countDownTimer(targetDay);

let counter = setInterval(countDownTimer, 1000, targetDay);

function countDownTimer(targetDay) {
  let dateNow = new Date().getTime();

  let timeRemained = targetDay - dateNow;

  timerDays.firstElementChild.textContent = Math.floor(
    timeRemained / (1000 * 60 * 60 * 24)
  );

  timerHours.firstElementChild.textContent = Math.floor(
    getAfterPoint(timeRemained / (1000 * 60 * 60 * 24)) * 24
  );

  timerMins.firstElementChild.textContent = Math.floor(
    getAfterPoint(getAfterPoint(timeRemained / (1000 * 60 * 60 * 24)) * 24) * 60
  );
  timerSecs.firstElementChild.textContent = Math.floor(
    getAfterPoint(
      getAfterPoint(getAfterPoint(timeRemained / (1000 * 60 * 60 * 24)) * 24) *
        60
    ) * 60
  );
}

function getAfterPoint(num) {
  let newNum = num.toString();
  let decimal;
  for (let i = 0; i < newNum.length; i++) {
    if (newNum[i] === ".") {
      decimal = true;
    }
    if (decimal) {
      newNum = newNum.slice(i, newNum.length);
      break;
    }
  }
  return parseFloat(newNum);
}

// Increament Stats On Scroll

let statsSection = document.querySelector(".stats");
let statsNums = document.querySelectorAll(".number");

let statsStarted = false;

window.addEventListener("scroll", () => {
  if (statsSection.getBoundingClientRect().top <= 0 && !statsStarted) {
    Array.from(statsNums).forEach((Num) => {
      let increament = setInterval(() => {
        Num.textContent++;
        if (Num.textContent == Num.dataset.tar) {
          clearInterval(increament);
        }
        console.log(Num.dataset.tar);
      }, 2000 / Num.dataset.tar);
    });
    statsStarted = true;
  }
});
