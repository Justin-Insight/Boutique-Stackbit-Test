import { gsap } from "gsap";

function pageTransitionOut({ container }) {
    const mobileNav = document.querySelector(".nav-list");
    const hamburger = document.querySelector(".hamburger");

    if (mobileNav.classList.contains("nav-open")) {
        mobileNav.classList.remove("nav-open");
        hamburger.classList.remove("is-active");
    }

    return gsap.to(".site-main", {
        autoAlpha: 0,
        duration: .2,
        ease: "Expo.easeInOut",
    });
}

export default pageTransitionOut;