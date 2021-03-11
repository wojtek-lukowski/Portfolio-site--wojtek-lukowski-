console.log("Hi, welcome to my portfolio.");

function underConstruction() {
  alert("Sorry, this case study is still under construction.");
}

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += 'responsive';
  } else {
    x.className = 'navtoggle';
  }
}
