import { GooCursor } from "./cursor.js";

const signupForm = document.getElementById("signUP_form");

const loginform = document.getElementById("login_form");

try {
  loginform.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const body = {
      username: email,
      password: password,
    };

    const res = await fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
      },
    });
    const { success } = await res.json(); // { success: true, result:null }
    if (!success) {
      alert("wrong username or password");
      return;
    } else {
      await loginSound.play();
      setTimeout(() => window.location = "/user", 500);
    }
  });
} catch (error) {
  console.error(error);
}

try {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const repassword = e.target.repassword.value;

    const body = {
      username: email,
      password: password,
      confirmPassword: repassword,
    };
    const res = await fetch("/auth/signup", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json(); // { success: true, result:null }
    if (!data.success) {
      alert(data.result);
      return;
    } else {
      await loginSound.play();
      setTimeout(() => window.location = "/user", 500);
    }
  });
} catch (error) {
  console.error(error);
}

const cursorEl = document.querySelector(".cursor");
// Initialize cursor
const goo = new GooCursor(cursorEl);

// Easter egg: click anywhere

const formBody = document.querySelector(".form-body");
let clickHandlerEnabled = true;

const clickHandler = () => {
  gsap
    .timeline()
    .addLabel("start", 0)
    .to(
      goo.DOM.cells,
      {
        duration: 1,
        ease: "power4",
        opacity: 1,
        stagger: {
          from: [...goo.DOM.cells].indexOf(goo.getCellAtCursor()),
          each: 0.02,
          grid: [goo.rows, goo.columns],
        },
      },
      "start"
    )
    .to(
      goo.DOM.cells,
      {
        duration: 1,
        ease: "power1",
        opacity: 0,
        stagger: {
          from: [...goo.DOM.cells].indexOf(goo.getCellAtCursor()),
          each: 0.03,
          grid: [goo.rows, goo.columns],
        },
      },
      "start+=0.3"
    );
};

const handleMouseEnter = () => {
  clickHandlerEnabled = false;
};

const handleMouseLeave = () => {
  clickHandlerEnabled = true;
};

formBody.addEventListener("mouseenter", handleMouseEnter);
formBody.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("click", (event) => {
  if (clickHandlerEnabled && !formBody.contains(event.target)) {
    clickHandler();
  }
});

const leftSlime = document.querySelector(".slime-wrapper-left .slime");
const rightSlime = document.querySelector(".slime-wrapper-right .slime");
const containerHeight = document.querySelector(".slime-container").offsetHeight;

gsap.fromTo(
  leftSlime,
  { y: -leftSlime.offsetHeight },
  { y: containerHeight - 100, duration: 5, ease: "power4.out" }
  // { x: -800, y: containerHeight - 300 },
  // { x: 300, duration: 5, ease: 'power4.out' }
);

gsap.delayedCall(1, () => {
  gsap.fromTo(
    rightSlime,
    { y: 0 },
    { y: containerHeight / 2, duration: 5, ease: "power4.out" }
    // { x: 500, y: containerHeight - 600 },
    // { x: -300, duration: 5, ease: 'power4.out' }
  );
});

let loginSound = new Audio("./mp3/login.mp3")

function playSound() {
  loginSound.play();
}