const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// Autoplay attempt
window.addEventListener("load", () => {
    music.play().catch(() => {
        console.log("Autoplay blocked");
    });
});

// Toggle music
musicBtn.addEventListener("click", () => {

if (music.paused) {
    music.play();
    musicBtn.classList.remove("muted");

} else {
    music.pause();
    musicBtn.classList.add("muted");
}

});

// date footer
const startDate = new Date(2022, 4, 20);
//January is 0, not 1
//So May = 4

const today = new Date();

let years = today.getFullYear() - startDate.getFullYear();
let months = today.getMonth() - startDate.getMonth();
let days = today.getDate() - startDate.getDate();

console.log(`${years} years, ${months} months, ${days} days`)

// Adjust days if negative
if (days < 0) {
months -= 1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
}
console.log(`${years} years, ${months} months, ${days} days`)

// Adjust months if negative
if (months < 0) {
    years -= 1;
    months += 12;
}

console.log(`${years} years, ${months} months, ${days} days`)

document.getElementById("result").innerText = `${years} years, ${months} months, ${days} days`;

// Anni overlay

// CHECK IF TODAY IS ANNIVERSARY

const sameMonth =
  today.getMonth() === startDate.getMonth();

const sameDay =
  today.getDate() === startDate.getDate();


// IF ANNIVERSARY

if (sameMonth && sameDay) {

  const anniversaryYears =
    today.getFullYear() - startDate.getFullYear();

  document.getElementById("anniversaryOverlay")
    .style.display = "flex";

  document.getElementById("anniversaryTitle")
    .textContent =
    `Happy ${anniversaryYears} Year Anniversary! ❤️`;

}


// CLOSE BUTTON

document.getElementById("closeAnniversary")
  .addEventListener("click", () => {

    document.getElementById("anniversaryOverlay")
      .style.display = "none";

});