// Start The Project

// Start Settings Box

// Set Options
let statue = true;
let backgroundInterval;

// Color Settings Box Selecting Elements
let gear = document.querySelector(".setting-box .toggle-setting");

let settingBox = document.querySelector(".setting-box");

let colorLis = Array.from(
  document.querySelectorAll(".setting-content .option-box .colors-list li")
);

let randomButtons = document.querySelectorAll(
  ".setting-box .setting-content .option-box .random-background button"
);
let showBulletsButtons = document.querySelectorAll(
  ".setting-box .setting-content .option-box .showBullet button"
);

// Local Storage

// Check If There Is A Color In Local Storage
if (window.localStorage.getItem("color-option") !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.getItem("color-option")
  );

  // Check For Active Class
  colorLis.forEach((li) => {
    // Remove Active Class
    li.classList.remove("active");

    // Add Class Active With Data-color === Local Storage Value
    if (li.dataset.color === window.localStorage.getItem("color-option")) {
      // Add Active Class
      li.classList.add("active");
    }
  });
}

// Check In Local Storage Value If There Is Color In The About Img
if (window.localStorage.getItem("img-color") !== null) {
  if (window.localStorage.getItem("img-color") === "#e91e63") {
    document.querySelector(".about .image-box img").src =
      "./imgs/Website Red Creator-rafiki.png";
  } else if (window.localStorage.getItem("img-color") === "#1791ff") {
    document.querySelector(".about .image-box img").src =
      "./imgs/Website Blue Creator-rafiki.png";
  } else if (window.localStorage.getItem("img-color") === "#00bcd4") {
    document.querySelector(".about .image-box img").src =
      "./imgs/Website Light Blue Creator-rafiki.png";
  } else if (window.localStorage.getItem("img-color") === "#009688") {
    document.querySelector(".about .image-box img").src =
      "./imgs/Website Green Creator-rafiki.png";
  } else if (window.localStorage.getItem("img-color") === "#3f51b5") {
    document.querySelector(".about .image-box img").src =
      "./imgs/Website Purple Creator-rafiki.png";
  }
}

// Check  If There Is An Random Background Option In Local Storage
if (window.localStorage.getItem("randomBackground") !== null) {
  randomButtons.forEach((button) => {
    // Remove Active Class
    button.classList.remove("active");

    if (window.localStorage.getItem("randomBackground") === "true") {
      statue = true;

      // Add CLass Active To Yes Button
      document.querySelector("button.yes").classList.add("active");
    } else {
      statue = false;
      // Add CLass Active To No Button
      document.querySelector("button.no").classList.add("active");
    }
  });
}

// Check  If There Is An Bullet Option In Local Storage
if (window.localStorage.getItem("showBulletsButtons") !== null) {
  showBulletsButtons.forEach((btn) => {
    btn.classList.remove("active");
  });
  if (window.localStorage.getItem("showBulletsButtons") === "block") {
    // Add Display Block Property To Display Buttons
    document.querySelector(".nav-bullets").style.display = "block";

    // Add Active Class To Yes Button
    document.querySelector(".showBullet .yes").classList.add("active");
  } else {
    // Add Display None Property To Display Buttons
    document.querySelector(".nav-bullets").style.display = "none";

    // Add Active Class To No Button
    document.querySelector(".showBullet .no").classList.add("active");
  }
}

// On Clicking Gear
gear.addEventListener("click", (e) => {
  // Toggle CLass Spin To Gear
  document
    .querySelector(".setting-box .toggle-setting i")
    .classList.toggle("fa-spin");

  // Toggle Class Opened From Setting Box
  settingBox.classList.toggle("opened");
});

// Loop On Colors List
colorLis.forEach((li) => {
  // Create An Background Color For Li Depending On Dataset Color
  li.style.backgroundColor = li.dataset.color;

  // On Clicking Lis
  li.onclick = (e) => {
    // Select Root Element And Change It's Color
    document.documentElement.style.setProperty(
      "--main-color",
      li.dataset.color
    );

    // Change About Image According To Color
    if (li.dataset.color === "#e91e63") {
      document.querySelector(".about .image-box img").src =
        "./imgs/Website Red Creator-rafiki.png";
    } else if (li.dataset.color === "#1791ff") {
      document.querySelector(".about .image-box img").src =
        "./imgs/Website Blue Creator-rafiki.png";
    } else if (li.dataset.color === "#00bcd4") {
      document.querySelector(".about .image-box img").src =
        "./imgs/Website Light Blue Creator-rafiki.png";
    } else if (li.dataset.color === "#009688") {
      document.querySelector(".about .image-box img").src =
        "./imgs/Website Green Creator-rafiki.png";
    } else if (li.dataset.color === "#3f51b5") {
      document.querySelector(".about .image-box img").src =
        "./imgs/Website Purple Creator-rafiki.png";
    }

    // Set Color On Local Storage
    window.localStorage.setItem("color-option", li.dataset.color);

    // Set Img Color On Local Storage
    window.localStorage.setItem("img-color", li.dataset.color);

    // Handle Active Function
    handleActive(e);
  };
});

// Loop On Random Background Buttons

// Loop On All Buttons
randomButtons.forEach((btn) => {
  // on Clicking Button
  btn.addEventListener("click", (e) => {
    // Handle Active Function
    handleActive(e);
    if (e.currentTarget.classList.contains("yes")) {
      statue = true;
      ChangeImage();
      window.localStorage.setItem("randomBackground", true);
    } else {
      statue = false;
      clearInterval(backgroundInterval);
      window.localStorage.setItem("randomBackground", false);
    }
  });
});

// End Settings Box

// Start Generate Random Background Images

// Select Landing Element
let landingElement = document.querySelector(".landing-page");

// Create Landing Imgs Array
let imgsList = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.png",
  "09.jpg",
];

// Start Generate Random Background Images

function ChangeImage() {
  if (statue === true) {
    backgroundInterval = setInterval(() => {
      // Generate Random Background Indexs
      let randomIndex = Math.round(Math.random() * imgsList.length);

      // Generate Random Index
      landingElement.style.backgroundImage = `url(./imgs/${imgsList[randomIndex]})`;
    }, 8000);
  }
}
ChangeImage();

// End Generate Random Background Images

// Start Skills Animation

// Select Skills
let ourSkills = document.querySelector(".our-skills");

window.onscroll = () => {
  if (window.scrollY >= ourSkills.offsetTop - 100) {
    let allSkills = Array.from(
      document.querySelectorAll(".our-skills .skill-box .progress span")
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
// End Skills Animation

// Start Switcher Gallery Imgs

let gallerySwitcherLis = Array.from(
  document.querySelectorAll(".gallery ul.switcher li")
);
let galleryImgs = Array.from(
  document.querySelectorAll(".gallery .img-box img")
);

gallerySwitcherLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // Handle Switcher Active
    handleActive(e);
    galleryImgs.forEach((img) => {
      img.style.display = "none";
      let dataset = document.querySelectorAll(e.currentTarget.dataset.mix);
      dataset.forEach((data) => {
        data.style.display = "block";
        document.querySelector(".gallery .img-box").classList.add("shuffle");
      });
    });
  });
});

// Create Popup Images

galleryImgs.forEach((img) => {
  img.onclick = () => {
    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class Name to Overlay Element
    overlay.className = "popup-overlay";

    // Append Overlay Element To Body
    document.body.appendChild(overlay);

    // Create Popup Element
    let popupBox = document.createElement("div");

    // Add Class Name to Popup Element
    popupBox.className = "popup-box";

    // Create Img Element
    let popupImg = document.createElement("img");

    // Set Img Src
    popupImg.src = img.src;

    // Set Alt Text
    popupImg.alt = img.alt;

    // Add Img To Popup Box
    popupBox.appendChild(popupImg);

    // Check If Image Alt Not Equals To Space
    if (popupImg.alt !== "" && popupImg.alt !== " ") {
      // Create Popup Title Element
      popupTitle = document.createElement("span");

      // Change Title InnerHTML Accrording To Img Alt
      popupTitle.innerHTML = popupImg.alt;

      // Add ClassName To Popup Title
      popupTitle.className = "popup-title";

      // Append Popup Title To Popup Box
      popupBox.prepend(popupTitle);
    }

    // Append Popup Box To Body
    document.body.appendChild(popupBox);

    // Create Exit Icon
    let exitIcon = document.createElement("i");

    // Add ClassName To Exit Icon
    exitIcon.className = "fa-solid fa-xmark";

    // On Clicking Exit Icon
    exitIcon.addEventListener("click", () => {
      // Remove Overlay From DOM
      overlay.remove();

      // Remove Popup Box From DOM
      popupBox.remove();
    });

    // On Clicking Escape Button
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        // Remove Overlay From DOM
        overlay.remove();

        // Remove Popup Box From DOM
        popupBox.remove();
      }
    });

    // Append Exit Icon To Popup Box
    popupBox.appendChild(exitIcon);

    // On Clcking Anywhere The Page
    document.addEventListener("click", (e) => {
      // if clicked area is equal to overlay
      if (e.target == overlay) {
        // Remove Overlay From DOM
        overlay.remove();

        // Remove Popup Box From DOM
        popupBox.remove();
      }
    });
  };
});
// Start Bullets

// Select All Bullets
let bullets = Array.from(document.querySelectorAll(".nav-bullets .bullet"));

// Loop On Bullets
bullets.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    // Go To Section Smothly
    document.querySelector(e.currentTarget.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Bullets Option Box

// Loop On Show Bullets Buttons

// Loop On All Buttons
showBulletsButtons.forEach((btn) => {
  // on Clicking Button
  btn.addEventListener("click", (e) => {
    // Handle Active Function
    handleActive(e);
    if (e.currentTarget.classList.contains("yes")) {
      document.querySelector(".nav-bullets").style.display = "block";
      window.localStorage.setItem("showBulletsButtons", "block");
    } else {
      document.querySelector(".nav-bullets").style.display = "none";
      window.localStorage.setItem("showBulletsButtons", "none");
    }
  });
});

// Apply Active Class To Current Bullet

let sections = document.querySelectorAll("[data-service]");
let activeSection = null; // keep track of the currently active section

window.addEventListener("scroll", (e) => {
  sections.forEach((section) => {
    bullets.forEach((bullet) => {
      // When Reaching Before Section By 80
      if (window.scrollY >= section.offsetTop - 80) {
        // If the section Data Service is Equal To The Bullet Data Section
        if (section.dataset.service === bullet.dataset.section) {
          // remove active class from the previous section
          if (activeSection && activeSection !== section) {
            let activeBullet = document.querySelector(
              `[data-section="${activeSection.dataset.service}"]`
            );
            activeBullet.classList.remove("active");
          }

          // add active class to the current section
          bullet.classList.add("active");
          activeSection = section;
        }
      }
    });
  });
});

// End Bullets

// Loop On Links And Active Class
let lis = document.querySelectorAll("ul.list li a");

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

//  Handle Active Functionality
function handleActive(ev) {
  ev.currentTarget.parentElement.querySelectorAll(".active").forEach((e) => {
    // Remove Active Class From All Buttons
    e.classList.remove("active");
  });

  // Add Active Class To Clicked Button
  ev.currentTarget.classList.add("active");
}

// Reset Options Button

let resetButton = document.querySelector(".resetBtn");

resetButton.addEventListener("click", (e) => {
  // Clear Local Storage
  localStorage.clear();

  // Reload Page
  location.reload();
});

// Toggle Menu Small Screen Option

let toggleMenu = document.querySelector(".toggle-menu");
let list = document.querySelector("ul.list");

toggleMenu.addEventListener("click", (e) => {
  // Stop Propagation
  e.stopPropagation();

  // toggle class menu-active on button click
  toggleMenu.classList.toggle("menu-active");

  // toggle class open on ul
  list.classList.toggle("opened");
});

list.onclick = (e) => {
  // Stop Propagation
  e.stopPropagation();
};

// On Clcking Anywhere The Page
document.addEventListener("click", (e) => {
  // if clicked area is not equal to toggle menu and menu
  if (e.target !== toggleMenu && e.target !== list) {
    // if menu is open
    if (list.classList.contains("opened")) {
      // remove class opened from menu
      list.classList.remove("opened");

      // remove arrow from toggle menu
      toggleMenu.classList.remove("menu-active");
    }
  }
});

let footerSpan = document.querySelector(".footer div span");
let footerInsta = document.querySelectorAll("ul.social li")[0];
let footerfacebook = document.querySelectorAll("ul.social li")[1];
let footergithub = document.querySelectorAll("ul.social li")[2];

footerInsta.onclick = (e) => {
  window.open("https://www.instagram.com/ur_mosalah/");
};
footerfacebook.onclick = (e) => {
  window.open("https://www.facebook.com/profile.php?id=100055763689148");
};
footergithub.onclick = (e) => {
  window.open("https://github.com/Mohamed-salah14?tab=repositories");
};
footerSpan.addEventListener("click", (e) => {
  window.open("https://github.com/Mohamed-salah14?tab=repositories");
});

// Scroll To Top Button
window.addEventListener("scroll", () => {
  if (window.scrollY >= window.outerWidth) {
    document.querySelector(".scroll-btn").style.display = "block";
  } else {
    document.querySelector(".scroll-btn").style.display = "none";
  }
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  window.scrollTo({
    top: "0",
    behavior: "smooth",
  });
});
 