//setup date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const toToggle = document.getElementById("title-toggle");
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

// const sections = document.querySelectorAll("section-title");
// const options = {
//   root: null,
//   threshold: 0,
//   rootMargin: "-150px"
// };
// const observer = new IntersectionObserver(function (entries, observer) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       return;
//     }
//     entry.target.classList.toggle("sectionAnim");
//   });
// }, options);

// sections.forEach(section-title => { observer.observe(section-title)});

/* 
  Pablo code of sorting arrays of string with the highest leanth according to the value of inter
  */

// function longestConsec(strarr, k) {
//   let result = "";
//   if (k < 0 || k > strarr.length) {
//     return "";
//   } else {
//     for (let i = 0; i <= strarr.length - k; i++) {
//       let tempArr = strarr.slice(i, i + k);
//       console.log(tempArr);
//       let tempStr = tempArr.join("");
//       if (tempStr.length > result.length) {
//         result = tempStr;
//       }
//     }
//     return console.log(result);
//   }
// }

// longestConsec(["Onyebuchi", "Pablo", "Victor", "Ken", "Manchi", "Nnamdi"], 3);
