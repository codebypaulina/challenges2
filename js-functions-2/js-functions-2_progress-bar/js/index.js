console.clear();
/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:
    - window.scrollY: the Y position of the window on the total webpage
    - window.innerHeight: height of the window
    - document.body.clientHeight: height of the webpage

 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  // current scroll position
  const scrollPosition = window.scrollY;
  // height of window
  const windowHeight = window.innerHeight;
  // height of whole webpage
  const documentHeight = document.body.clientHeight;

  // max scroll height
  const maxScrollHeight = documentHeight - windowHeight;

  // scroll percentage
  const scrollPercentage = (scrollPosition / maxScrollHeight) * 100;

  return scrollPercentage;
}

// "scroll" event listener
document.addEventListener("scroll", () => {
  console.log("scrolling");
  console.log(window.scrollY, document.body.clientHeight, window.innerHeight);

  // scroll percentage
  const scrollPercentage = calculateScrollPercentage();
  console.log(scrollPercentage);

  // change width of progress bar
  progressBar.style.width = scrollPercentage + "%";
});
