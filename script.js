const day = new Date().getDay();
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
console.log(`
✧･ﾟ: *✧･ﾟ*･ﾟ✧*:･ﾟ✧･ﾟ: *✧･ﾟ･ﾟ✧*:･ﾟ✧✧･ﾟ: *✧･ﾟ･ﾟ✧*:･ﾟ✧

why hello there curious creature ʕ ˵• ₒ •˵ ʔ
			 
ʕ •ᴥ•ʔゝ how do you do on this fine ${days[day]}? 

nothing to see here	ʕ•ᴥ•ʔﾉ ♡ ┬┴┬┴┤•ᴥ•ʔ├┬┴┬┴

✧･ﾟ: *✧･ﾟ*･ﾟ✧*:･ﾟ✧･ﾟ: *✧･ﾟ･ﾟ✧*:･ﾟ✧✧･ﾟ: *✧･ﾟ･ﾟ✧*:･ﾟ✧`);

/**
 *
 * phone redirect drag
 *
 */

const phone = document.querySelector("#redirect");

// position phone in the center of the screen to start
phone.style.left = "50%";
phone.style.top = "50%";
phone.style.transform = "translate(-50%, -50%)";

phone.addEventListener("pointerdown", grabPhone);

function grabPhone(event) {
  event.preventDefault();
  phone.style.left = phone.getBoundingClientRect().x + "px";
  phone.style.top = phone.getBoundingClientRect().y + "px";
  phone.style.transform = "translate(0px, 0px) scale(1.05)";
  drag(event.clientX, event.clientY);
}

function drag(startX, startY) {
  function movePhone(event) {
    event.preventDefault();
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    phone.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.05)`;
  }

  function stopDrag() {
    phone.style.left = phone.getBoundingClientRect().x + "px";
    phone.style.top = phone.getBoundingClientRect().y + "px";
    phone.style.transform = "translate(0px, 0px)";
    phone.removeEventListener("pointermove", movePhone);
    phone.removeEventListener("pointerup", stopDrag);
    document.removeEventListener("pointerup", stopDrag);
    phone.removeEventListener("pointercancel", stopDrag);
    document.removeEventListener("pointercancel", stopDrag);
  }

  phone.addEventListener("pointermove", movePhone);
  phone.addEventListener("pointerup", stopDrag);
  document.addEventListener("pointerup", stopDrag);
  phone.addEventListener("pointercancel", stopDrag);
  document.addEventListener("pointercancel", stopDrag);
  phone.addEventListener("contextmenu", (e) => e.preventDefault());
}
