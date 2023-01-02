console.log("helloo");

const stickyElem = document.querySelector(".main-forecast");

console.log(stickyElem);

const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries[0]);

    console.log(entries[0].boundingClientRect.y);

    //   stickyElem.classList.add("stuck");
    //   //   stickyElem.toggleAttribute("stuck");
    // } else stickyElem.classList.remove("stuck");

    entries[0].target.classList.toggle(
      "pinned",
      entries[0].intersectionRatio < 1
    );
  },
  { threshold: [0, 1] }
);

// stickyElem.addEventListener("sticky", (event) => {
//   console.log(event);
// });

observer.observe(stickyElem);
//
