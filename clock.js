const firstSpan = document.querySelectorAll("span:first-of-type");
// console.log(firstSpan)
function updateClock() {
    const hourSpan = document.querySelector("span:first-of-type");
    const date = new Date();
    const hours = date.getHours();
    hourSpan.textContent = String(hours).padStart(2, "0")

    const minSpan = document.querySelector("div:nth-of-type(2) span:first-of-type");
    const date2 = new Date();
    const mins = date2.getMinutes();
    minSpan.textContent = String(mins).padStart(2, "0")

    const secSpan = document.querySelector("div:nth-of-type(3) span:first-of-type");
    const date3 = new Date();
    const secs = date3.getSeconds();
    secSpan.textContent = String(secs).padStart(2, "0")

    const msecSpan = document.querySelector("div:last-of-type span:first-of-type");
    const date4 = new Date();
    const msec = date4.getMilliseconds();
    msecSpan.textContent = msec

}

updateClock();
setInterval(updateClock, 1)

const dateLabel = document.querySelector(".date-label");
const dateValue = document.querySelector(".date-value");

function updateDate() {
  const today = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const monthName = months[today.getMonth()];

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  dateLabel.textContent = monthName;
  dateValue.textContent = `${day}-${month}-${year}`;
}

updateDate();

