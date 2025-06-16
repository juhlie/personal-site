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

let target; // used for cursor grab indicator

phone.addEventListener("pointerdown", grabPhone);

function grabPhone(event) {
  event.preventDefault();
  phone.style.left = phone.getBoundingClientRect().x + "px";
  phone.style.top = phone.getBoundingClientRect().y + "px";
  phone.style.transform = "translate(0px, 0px) scale(1.02)";

  target = event.target;
  target.style.setProperty("cursor", "grabbing");
  phone.addEventListener("pointerup", () =>
    target.style.removeProperty("cursor")
  );

  drag(event.clientX, event.clientY);
}

function drag(startX, startY) {
  function movePhone(event) {
    event.preventDefault();
    target.style.setProperty("cursor", "grabbing");

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    phone.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.02)`;
  }

  function stopDrag() {
    phone.style.left = phone.getBoundingClientRect().x + "px";
    phone.style.top = phone.getBoundingClientRect().y + "px";
    phone.style.transform = "translate(0px, 0px)";

    target.style.removeProperty("cursor");
    document.removeEventListener("pointermove", movePhone);
    document.removeEventListener("pointerup", stopDrag);
    document.removeEventListener("pointercancel", stopDrag);
  }

  document.addEventListener("pointermove", movePhone);
  document.addEventListener("pointerup", stopDrag);
  document.addEventListener("pointercancel", stopDrag);
  document.addEventListener("contextmenu", (e) => e.preventDefault());
}
