const hamburgerBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("close-btn");
const overlay = document.querySelector(".overlay");
const navDropdown = document.querySelector(".nav-mobile-dropdown");
const tab1 = document.querySelector(".tab-1");
const tab2 = document.querySelector(".tab-2");
const tab3 = document.querySelector(".tab-3");
const featuresTabs = [...document.querySelectorAll(".features-tab")];
const tabBtns = [...document.querySelectorAll(".tab-btn")];
const errorImg = document.querySelector(".email-btn-container img");
const errorMsg = document.querySelector(".error-msg");
const contactUsBtn = document.querySelector(".contact-us-btn");
const emailBtnContainer = document.querySelector(".email-btn-container");
const input = document.querySelector("input");
const paths = [...document.querySelectorAll(".path")];
const arrowBtns = [...document.querySelectorAll(".arrow-container")];
//we get the arrow-container and not just the arrow so that there is a bigger area for the user to click on
const tabMainBg = document.querySelector(".tab-main-img-bg");
const singleQandAContainers = document.querySelectorAll(
  ".single-q-a-container "
);

//!  FUNCTIONS
/*  BUT THIS WAY I COULD NOT FIGURE OUT HOW TO HIDE ANY ANSWERS WHICH MIGHT ALREADY BE SHOWING
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const thisBtn = e.target;
    thisBtn.parentElement.parentElement.parentElement.classList.toggle(
      "show-text"
    );
  });
});*/

singleQandAContainers.forEach((singleContainer) => {
  console.log(singleContainer);
  //! and we look for the btn through the singleContainer and NOT the entire document because we just want the btn that is in this exact singleQandAContainer
  const btn = singleContainer.querySelector(".arrow-container");
  console.log(btn);
  btn.addEventListener("click", () => {
    singleQandAContainers.forEach((item) => {
      console.log(item);
      if (item !== singleContainer) {
        //! so if the btn I click on's parent is NOT the same as the one that is showing - hide it
        item.classList.remove("show-text");
      }
    });
    singleContainer.classList.toggle("show-text");
  });
});

tabBtns.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    //console.log(e.target);
    //console.log(tabBtns.indexOf(tab)); //!  YES I GOT THE INDEX
    const indexOfThisTabBtn = tabBtns.indexOf(tab);

    if (tabBtns.indexOf(e.target) === 0) {
      featuresTabs[indexOfThisTabBtn].style.display = "block";
      tab2.style.display = "none";
      tab3.style.display = "none";
    }
    if (tabBtns.indexOf(e.target) === 1) {
      featuresTabs[indexOfThisTabBtn].style.display = "block";
      tab1.style.display = "none";
      tab3.style.display = "none";
      //tabMainBg.style.width = "30.5rem";
    }

    if (tabBtns.indexOf(e.target) === 2) {
      tab1.style.display = "none";
      tab2.style.display = "none";
      featuresTabs[indexOfThisTabBtn].style.display = "block";
      //tabMainBg.style.width = "32rem";
    }
  });
});

//!  EVENT LISTENERS
hamburgerBtn.addEventListener("click", () => {
  navDropdown.style.visibility = "visible";
  overlay.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  navDropdown.style.visibility = "hidden";
  overlay.style.display = "none";
});

contactUsBtn.addEventListener("click", () => {
  const email = input.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = emailPattern.test(email);
  //console.log(isValid);
  //console.log(input.value);
  //if no email is input
  if (input.value === "") {
    errorMsg.style.display = "block";
    errorMsg.textContent = "The input field is empty";
    emailBtnContainer.classList.add("error");
    errorImg.style.display = "block";
    //I would not have done these next 2 lines of code to make the contact us btn red again but in the design: mobile-active-states it was
    contactUsBtn.style.backgroundColor = "hsl(0, 94%, 66%)";
    contactUsBtn.style.color = "#fff";
  }
  //if email address in not correct - do this...
  else if (!isValid) {
    emailBtnContainer.classList.add("error");
    errorMsg.style.display = "block";
    errorMsg.textContent = "The email address is not formatted correctly";
    errorImg.style.display = "block";

    contactUsBtn.style.backgroundColor = "hsl(0, 94%, 66%)";
    contactUsBtn.style.color = "#fff";
  } else if (isValid) {
    emailBtnContainer.classList.remove("error");
    errorMsg.style.display = "none";
    errorImg.style.display = "none";

    contactUsBtn.style.backgroundColor = "hsl(0, 94%, 66%)";
    contactUsBtn.style.color = "#fff";
  }
});
