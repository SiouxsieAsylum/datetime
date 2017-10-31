// ````````````````````````calendar population```````````````````````

let month;
let year;
let monthLength = 31;
let date = new Date();
// console.log(date.getMonth());

let calendar = document.getElementById('calendar');
console.log(calendar);

function populate() {
  for (let i = 1; i <= 42; i++){
    let aLink = document.createElement('a');
    aLink.className = "dateLinks";
    let newDiv = document.createElement('div');
    newDiv.className = "square";
    newDiv.id = `box${i}`;
    newDiv.style.border = "2px solid rgb(0, 22, 0)";
    newDiv.style.height = "5vh";
    newDiv.style.width = "11.4vw";
    newDiv.style.backgroundColor = "rgb(143, 175, 142)";
    newDiv.style.color = "rgb(143, 175, 142)";
      aLink.appendChild(newDiv);
      calendar.appendChild(aLink);

  }
}

 function setDate(){
  month = date.getMonth();
   console.log(month);
  year = date.getFullYear();
  console.log(calendar);
}

function calendarNums(){
  // console.log(month)
  const boxes = Array.from(document.getElementsByClassName("square"));
const links = Array.from(document.getElementsByClassName("dateLinks"));
  // console.log(links);

  let dayToDates = {};

for (let i = 1; i <= monthLength; i++){
  dayOfMonth = new Date(year,month,i);
  if (dayOfMonth.getMonth() == month && dayOfMonth.getFullYear() == year){
    dayToDates[dayOfMonth.getDate()] = dayOfMonth.getDay();
  }
}

let start = dayToDates[1] - 1 > 0 ? dayToDates[1] - 1 : dayToDates[1];

for(let key in dayToDates){

  boxes[(start + parseInt(key))-1].style.backgroundColor = "white";
  boxes[(start + parseInt(key))-1].style.color = "black";
  boxes[(start + parseInt(key))-1].innerHTML = key;


  links[(start + parseInt(key))-1].setAttribute("href",`events/day/${year}-${month + 1}-${key}`);
  console.log(links[(start + parseInt(key))-1])
  }
}

function monthUp(){
  const boxes = Array.from(document.getElementsByClassName("square"));

  for(let b in boxes){
    boxes[b].style.color = "rgb(143, 175, 142)";
    boxes[b].style.backgroundColor = "rgb(143, 175, 142)";
  }

    if (month > 10) {
    month = 0;
    year++;
  } else {
    month++;
  }
  monthSet();
  calendarNums();
}

function monthDown(){
   const boxes = Array.from(document.getElementsByClassName("square"));

  for(let b in boxes){
    boxes[b].style.color = "rgb(143, 175, 142)";
    boxes[b].style.backgroundColor = "rgb(143, 175, 142)";
  }
  if (month < 1) {
    month = 11;
    year--;
  } else {
    month--;
  }
  monthSet();
  calendarNums();
}

const monthHeading = document.getElementById("month");
const yearHeading = document.getElementById("year");

function monthSet(){
 yearHeading.innerHTML = year;
  switch(month){
    case 0:
      monthHeading.innerHTML = "January";
      monthLength = 31;
      break;
    case 1:
      monthHeading.innerHTML = "February";
      monthLength = 28;
      break;
    case 2:
      monthHeading.innerHTML = "March";
      monthLength = 31;
      break;
    case 3:
      monthHeading.innerHTML = "April";
      monthLength = 30;
      break;
    case 4:
      monthHeading.innerHTML = "May";
      monthLength = 31;
      break;
    case 5:
      monthHeading.innerHTML = "June";
      monthLength = 30;
      break;
    case 6:
      monthHeading.innerHTML = "July";
      monthLength = 31;
      break;
    case 7:
      monthHeading.innerHTML = "August";
      mmonthLength = 31;
      break;
    case 8:
      monthHeading.innerHTML = "September";
      monthLength = 30;
      break;
    case 9:
      monthHeading.innerHTML = "October";
      monthLength = 31;
      break;
    case 10:
      monthHeading.innerHTML = "November";
      monthLength = 30;
      break;
    case 11:
      monthHeading.innerHTML = "December";
      monthLength = 31;
      break;
  }
}

function executeCal(){
  populate();
  setDate();
  monthSet();
  calendarNums();
}
