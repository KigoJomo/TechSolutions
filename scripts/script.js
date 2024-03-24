//access all section links
const sectionLinks = document.querySelectorAll("nav a");
//get the open and close menu buttons
const openMenuButton = document.getElementById("menuButton");
const closeMenuButton = document.getElementById("closeMenu");

const menu = document.getElementById("menu");

//function to show the menu once the open menu button is clicked
function openMenu() {
  menu.classList.add("openMenu");
}

//function to close the menu once the closeMenu or any sectioLink is clicked
function closeMenu() {
  menu.classList.remove("openMenu");
}

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
sectionLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const servicesContainer = document.getElementById("servicesContainer");
function scrollServices() {
  const scrollWidth = servicesContainer.scrollWidth;
  const clientWidth = servicesContainer.clientWidth;
  const maxScrollLeft = scrollWidth - clientWidth;
  let currentScrollLeft = servicesContainer.scrollLeft;

  // Calculate the next scroll position
  let newScrollLeft = currentScrollLeft + clientWidth;
  if (newScrollLeft >= maxScrollLeft) {
    newScrollLeft = 0; // Reset to the beginning if reaching the end
  }

  // Scroll to the next position with smooth behavior
  servicesContainer.scrollTo({
    left: newScrollLeft,
    behavior: "smooth",
  });
}

const sectionContainer = document.getElementById("container");
function scrollHandler() {
  const containerHeight = sectionContainer.clientHeight;
  const scrollableHeight = sectionContainer.scrollHeight;
  const scrollTop = Math.round(sectionContainer.scrollTop);
  const scrollPercentage =
    (scrollTop / (scrollableHeight - containerHeight)) * 100;
  console.log(
    `Container Height = ${containerHeight} Scrollable height = ${scrollableHeight} ___ ${scrollPercentage.toFixed(
      2
    )}%`
  );
  const linkIndexRaw = Math.floor(scrollPercentage / 33.33);
  const linkIndex = linkIndexRaw.toFixed(0);
  console.log(`Link to style: ${linkIndex}`);
  sectionLinks.forEach((link) => {
    link.classList.remove("activeLink");
  });
  sectionLinks[linkIndex].classList.add("activeLink");
}
scrollHandler();
sectionContainer.addEventListener("scroll", scrollHandler);

// Auto-scroll every 3 seconds
const scrollInterval = setInterval(scrollServices, 3000);
