document.addEventListener("DOMContentLoaded", () => {
  const heartIcons = document.querySelectorAll("#heart-icon");
  const heartCountnav = document.getElementById("counterlove");

  let heartCount = 0;

  heartIcons.forEach(icon => {
    icon.addEventListener("click", () => {

      icon.classList.toggle("fa-regular");
      icon.classList.toggle("fa-solid");
      icon.classList.toggle("text-red-500");

      if (icon.classList.contains("fa-solid")) {
        heartCount++;
      } else {
        heartCount--;
      }
      heartCountnav.textContent = heartCount;
    });
  });
});



// call button feature
const callButtons = document.querySelectorAll(".call-btn");
const coinCountEl = document.getElementById("coin-count");
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history");

let coins = parseInt(coinCountEl.textContent);

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {

    const card = this.closest(".single-card");
    const serviceName = card.querySelector("h1").textContent;
    const serviceNumber = card.querySelector("h1 + p + h1").textContent;

    if (coins < 20) {
      alert("Not enough coins! Need 20 coins to make a call.");
      return;
    }

    //coins calculation
    coins -= 20;
    coinCountEl.textContent = coins;

    // Show alert
    alert("Calling " + serviceName + " (" + serviceNumber + ")...");

    // Add to call history
    const li = document.createElement("li");
    li.innerHTML=`<div class="flex justify-between items-center bg-gray-200 p-2 rounded-md sm:flex-col sm:items-start lg:flex-row lg:items-center">
              <div>
              <h1 class="text-[12px] font-semibold xl:text-[14px]">${serviceName} :</h1>
              <p>${serviceNumber}</p>
            </div>
            <div><h1>${now = new Date(),
                time = now.toLocaleTimeString()}</h1></div>
            </div>`;
    // li.textContent = serviceName + " - " + serviceNumber;
    historyList.appendChild(li);
  });
}

clearHistoryBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});




// copy funtionality and copy count-----------------------
  let copyButtons = document.querySelectorAll(".copy-btn");
  let copyCountEl = document.getElementById("copy-count");
  let copyCount = 0;

  function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    } else {
      let ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        document.execCommand("copy");
        document.body.removeChild(ta);
        return Promise.resolve();
      } catch (err) {
        document.body.removeChild(ta);
        return Promise.reject(err);
      }
    }
  }

  for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function () {
      let card = this.closest(".single-card");
      let numberEl = card.querySelector(".service-number");
      let hotline = numberEl ? numberEl.textContent.trim() : "";

      copyTextToClipboard(hotline).then(function () {

        alert("Hotline " + hotline + " copied!");

        copyCount++;
        copyCountEl.textContent = copyCount;
      });
    });
  }


