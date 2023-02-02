//===== EXECUTE =====//

function creatingPagination() {
  let listSlug = document.querySelector(".list-slug");
  let slugs;
  // let result;
  if (listSlug) {
    arrayList = listSlug.innerHTML.split(" ");
    slugs = arrayList.filter((e) => e.length);
    // console.log(result);
    listSlug.innerHTML = "";
  }
  if (slugs) {
    let i = 1;
    slugs.forEach((e) => {
      jQuery(".list-slug").append(
        '<a class="nav-' + i + '" href="/' + e + '"> ' + i + " </a>",
      );
      i++;
      // console.log(e);
    });
  }
}
creatingPagination();

let elem = document.querySelector(".psy-post-infinite-wrapper");
let count = 1;
function getPath() {
  let nextLink = document.querySelector(".nav-" + count).href;
  return nextLink;
}
if (elem) {
  let infScroll = new InfiniteScroll(elem, {
    path: getPath,
    // append: '.psy-post-infinite-wrapper',
    append: ".infinite-wrapper",
    history: "replace",
  });

  infScroll.on("append", function () {
    count = infScroll.loadCount + 1;
    console.log(count);
    getPath();
  });
}

//Menu scrolling
const headerHomepage = document.querySelector(".home header");
const header = document.querySelector("header");
const headerHeight = document.querySelector("header").offsetHeight;
let lastScroll = 0;

function scrollFn() {
  let currentScroll = window.pageYOffset;
  // console.log(currentScroll-lastScroll);
  if (window.pageYOffset < 1) {
    if (headerHomepage) {
      headerHomepage.classList.add("header-on-top");
    }
  } else if (currentScroll - lastScroll > 0) {
    header.classList.add("scroll-down");
    header.classList.remove("scroll-up");
    header.classList.remove("header-on-top");
  } else {
    // scrolled up -- header show
    header.classList.add("scroll-up");
    header.classList.remove("scroll-down");
    header.classList.remove("header-on-top");
  }
  lastScroll = currentScroll;
}

//Glossary Alphabet nav
const alphabetnav = document.querySelector(".psy-piotnet-alphabet-facet");
const alphabetFilter = document.querySelector(
  "#gspb_container-id-gsbp-b89d1de0-598a",
);

function stickyAlphabetNav() {
  if (alphabetnav) {
    if (window.pageYOffset >= alphabetFilter.offsetTop) {
      alphabetnav.classList.add("sticky");
    } else {
      alphabetnav.classList.remove("sticky");
    }
  }
}

stickyAlphabetNav();
scrollFn();

//Post template
const postTemplate = document.querySelectorAll(
  ".psy-post-template .gspb_meta_value",
);
function addLayoutTemplate() {
  const postWrapper = document.querySelectorAll(".psy-post-wrapper");
  if (postWrapper) {
    postWrapper.forEach((n) => {
      // const postTemplate = document.querySelectorAll(".psy-post-template .gspb_meta_value");
      //
      let layout = n.querySelector(
        ".psy-post-template .gspb_meta_value",
      ).innerHTML;
      // console.log(layout);
      if (layout == "right") {
        n.classList.add("psy-right-top-layout");
      } else if (layout == "left") {
        n.classList.add("psy-left-top-layout");
      } else if (layout == "rb") {
        n.classList.add("psy-right-bottom-layout");
      } else if (layout == "lb") {
        n.classList.add("psy-left-bottom-layout");
      } else {
        n.classList.add("psy-left-top-layout");
      }
    });
  }
}
addLayoutTemplate();

//Adding color mode on article page
function addColormode() {
  const postMode = document.querySelectorAll(".infinite-wrapper");
  if (postMode) {
    postMode.forEach((n) => {
      let colormode = n.querySelector(".indicate-mode-1").innerHTML;
      switch (colormode) {
        case "dark":
          n.classList.add("psy-post-darkmode");
          break;
        case "light":
          n.classList.add("psy-post-lightmode");
          break;
        case "purple":
          n.classList.add("psy-post-color-set-1");
          break;
        case "blue":
          n.classList.add("psy-post-color-set-2");
          break;
        case "yellow":
          n.classList.add("psy-post-color-set-3");
          break;
        case "plum":
          n.classList.add("psy-post-color-set-4");
          break;
        case "pink":
          n.classList.add("psy-post-color-set-5");
          break;
        case "red":
          n.classList.add("psy-post-color-set-6");
          break;
        default:
          n.classList.add("psy-post-darkmode");
      }
    });
  }
}
addColormode();

//Adding color mode on articles of the homepage
function addColormodeHP() {
  const postWrapper = document.querySelectorAll(".psy-post-wrapper");
  if (postWrapper) {
    postWrapper.forEach((n) => {
      let colorset = n.querySelector(".psy-post-color-set .gspb_meta_value",).innerHTML;
      switch (colorset) {
        case "dark":
          n.classList.add("psy-post-darkmode");
          break;
        case "light":
          n.classList.add("psy-post-lightmode");
          break;
        case "purple":
          n.classList.add("psy-post-color-set-1");
          break;
        case "blue":
          n.classList.add("psy-post-color-set-2");
          break;
        case "yellow":
          n.classList.add("psy-post-color-set-3");
          break;
        case "plum":
          n.classList.add("psy-post-color-set-4");
          break;
        case "pink":
          n.classList.add("psy-post-color-set-5");
          break;
        case "red":
          n.classList.add("psy-post-color-set-6");
          break;
        default:
          n.classList.add("psy-post-darkmode");
      }

    });
  }
}
addColormodeHP();

//Glossary dark and light mode
function glossarymode() {
  const glossarypage = document.querySelector(".page-id-1299");
  if (glossarypage) {
    let darkmode = glossarypage.querySelector(".indicate-mode").innerHTML;
    if (darkmode == "dark") {
      glossarypage.classList.add("darkmode");
    } else {
      glossarypage.classList.add("lightmode");
    }
  }
}
glossarymode();

//Podcast mode
function pageMode() {
  const pageMode = document.querySelector(".page-id-1609");

  if (pageMode) {
    let darkmode = pageMode.querySelector(".indicate-mode").innerHTML;
    if (darkmode == "dark") {
      pageMode.classList.add("darkmode");
    } else {
      pageMode.classList.add("lightmode");
    }
  }
}
pageMode();

//Glossary card explan function
function glossaryExpandFn() {
  let glossaryCards = document.querySelectorAll(
    ".piotnetgrid article.glossary",
  );
  if (glossaryCards) {
    glossaryCards.forEach((el) => {
      let glossaryContent = el.querySelector(".psy-glossary-card-content");
      el.addEventListener("click", () => {
        if (!el.classList.contains("active")) {
          el.classList.add("active");
          glossaryContent.classList.add("card-open");
        } else {
          glossaryContent.classList.remove("card-open");
          el.classList.remove("active");
        }
      });
    });
  }
}
glossaryExpandFn();

//Audio function
function audioFn() {
  let audioContainer = document.querySelectorAll(".psy-text-to-speed");
  let audioBtn;
  if (audioContainer) {
    audioContainer.forEach((n) => {
      audioBtn = n.querySelector(".psy-audio-button");
      audioPlaybtn = n.querySelector(".psy-audio-play-button");
      audioPausebtn = n.querySelector(".psy-audio-pause-button");
      audioWrapper = n.querySelector(".mdp-speaker-wrapper");
      audioBtn.addEventListener("click", () => {
        if (audioWrapper.classList.contains("audioShow")) {
          n.querySelector(".mejs-controls .mejs-button button").click();
          audioWrapper.classList.remove("audioShow");
          audioPlaybtn.style.display = "block";
          audioPausebtn.style.display = "none";
        } else {
          n.querySelector(".mejs-controls .mejs-button button").click();
          audioWrapper.classList.add("audioShow");
          audioPlaybtn.style.display = "none";
          audioPausebtn.style.display = "block";
        }
      });
    });
  }
}
audioFn();

function addingMenuClass () {
  let headerWraper = document.querySelector(".psy-header-wrapper");
  let headerContainer;
  if (headerWraper) {
    headerContainer = headerWraper.querySelector(".gs-gsap-wrap");
    if (headerContainer) {
      if (headerContainer.classList.contains('gsap-click-active')) {
        headerWraper.classList.add('headerActive');
      } else {
        headerWraper.classList.remove('headerActive')
      }
    }
  }
}
let menuButton = document.querySelector('.psy-menu-animated-button');
if (menuButton) {
  menuButton.addEventListener("click", addingMenuClass());
}


addingMenuClass();

//Adding spotify Api

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  let podcastwrapper = document.querySelector(".podcast_mainLink dynamictext");
  let podcastLink;
  let element;
  let options;
  if (podcastwrapper) {
    podcastLink = podcastwrapper.innerHTML;
     element = document.getElementById("embed-iframe");
     options = {
      width: "30%",
      height: "300",
      uri: "spotify:episode:" + podcastLink ,
    };
    let callback = (EmbedController) => {
      document.querySelectorAll("#episodes > a").forEach((episode) => {
          episode.addEventListener("click", () => {
            EmbedController.loadUri(episode.dataset.spotifyId);
            EmbedController.play();
          });
        });
    };
  }

  if (element) {
    IFrameAPI.createController(element, options, callback);
  }
};


//Changing body class base on color mode
let myElements;
let bounding;
let myElementHeight;
let myElementWidth;
let isViewport;
let elInViewport;
let articleBody = document.querySelector('body.single-post');
let articleHomeBody = document.querySelector('body.gspb-bodyfront');

function elementInViewport(el) {
  var bounding = el.getBoundingClientRect();
  if (bounding.top >= -myElementHeight
      && bounding.left >= -myElementWidth
      && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
      && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
      return true;
  } else {
      return false;
  }
}

function whichElementInViewport () {
  myElements = document.querySelectorAll('.infinite-wrapper');
  if (articleBody) {
    myElements.forEach((el) => {
      bounding = el.getBoundingClientRect();
      myElementHeight = el.offsetHeight;
      myElementWidth = el.offsetWidth;
      isViewport = elementInViewport(el);
      articleBody.classList.remove(el.classList[4]);
      if (isViewport == true) {
        elInViewport = el.classList[4];
      } 
    })
    articleBody.classList.add(elInViewport);
  }
}

// let shouldSkip = false;
function whichElinViewportHomepage () {

  myElements = document.querySelectorAll(".psy-post-wrapper");
  if (articleHomeBody) {
    myElements.forEach((el) => {
      bounding = el.getBoundingClientRect();
      myElementHeight = el.offsetHeight;
      myElementWidth = el.offsetWidth;
      isViewport = elementInViewport(el);
      articleHomeBody.classList.remove(el.classList[6]);
      if (isViewport == true) {
        elInViewport = el.classList[6];
      } 
    })
    articleHomeBody.classList.add(elInViewport);
  }
}

// Top people header

let headerFilter = document.querySelector('.psy-top-people-header-filter');
let headerListWrapper = document.querySelector('.psy-top-people-header-wrapper');
let listPageHeader = document.querySelector('header');

function stickyFilterTopPeople () {
  let scroll = window.scrollY;
  if (scroll > headerFilter.offsetTop - 70) {
    // headerFilter.classList.add("active");
    headerListWrapper.classList.add("active");
    listPageHeader.classList.add('active');
  } else if (scroll == 0) {
    if (headerListWrapper.classList.contains("active")) {
      headerListWrapper.classList.remove("active");
      listPageHeader.classList.remove('active');
    }
  }
}
stickyFilterTopPeople ();

let peopleBlock = document.querySelectorAll('.psy-top-people-block');
let extraContent;


function removeExtraContent () {
if (peopleBlock) {
  peopleBlock.forEach((el) => {
    extraContent = el.querySelector('.psy-top-people-extra-content');
    if (extraContent.classList.contains('active')) {
      extraContent.classList.remove('active');

    }
  })
}
}
function topPeopleExtraContent () {
  let peopleExtraContent;
  if (peopleBlock) {
    peopleBlock.forEach(el => {

      peopleExtraBlock = el.querySelector('.psy-top-people-extra-content')
      peopleExtraBlock.style.left = -el.offsetLeft + 'px';
      el.addEventListener('click', ()=> {
        peopleExtraContent = el.querySelector('.psy-top-people-extra-content');
        
        // console.log(peopleExtraContent);
        if (peopleExtraContent.classList.contains('active')) {
          peopleExtraContent.classList.remove('active');
        } else {
          removeExtraContent();
          peopleExtraContent.classList.add('active');
        }
      })
    });
  }
}
topPeopleExtraContent();

window.addEventListener("load", () => {
  console.log("Supermind scripts is running");
  whichElementInViewport();
  whichElinViewportHomepage ();
});

window.addEventListener("scroll", () => {
  // headerOntop()
  scrollFn();
  addLayoutTemplate();
  addColormodeHP();
  addColormode();
  // addDarkmode();
  stickyAlphabetNav();
  audioFn();
  glossaryExpandFn();
  whichElementInViewport();
  whichElinViewportHomepage () ;

  stickyFilterTopPeople ();
});