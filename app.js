setInterval(() => {
  let time = new Date();

  let gethour = document.querySelector('#hour');
  let getmin = document.querySelector('#min');
  let getsec = document.querySelector('#sec');
  let getformat = document.querySelector('#format');

  let hours = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  if (hours >= 12) {
    hours = hours - 12;
    getformat.innerHTML = 'Pm';
  } else {
    getformat.innerHTML = 'Am';
  }

  gethour.innerHTML = hours;
  getmin.innerHTML = min;
  getsec.innerHTML = sec;
});
