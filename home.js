// Hero Image rotation

const heroImages = [

    "./images/hero1.jpeg",
    "./images/hero2.jpeg",
    "./images/hero3.jpg",
    "./images/hero4.jpeg",
    "./images/hero5.jpg",
    "./images/hero6.jpg",
    "./images/hero7.jpg",
    "./images/hero8.jpg"
];

const heroImage = document.getElementById("heroImage");

let currentImage = 0;

    /*
        Change image every 4 seconds
    */

setInterval(() => {

        /*
            Fade out
        */
    heroImage.style.opacity = 0;

    setTimeout(() => {
                /*
                    Next image
                */
        currentImage++;
                    /*
                        Loop back
                    */
        if(currentImage >= heroImages.length){

            currentImage = 0;

    }
                /*
                    Change image source
                */
    heroImage.src = heroImages[currentImage];
            /*
                Fade back in
            */
    heroImage.style.opacity = 1;

    }, 1000);

}, 4000);

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

// Quote
const quoteBtn = document.getElementById("quoteBtn");
const overlay = document.getElementById("quoteOverlay");
const closeBtn = document.getElementById("closeBtn");

quoteBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});