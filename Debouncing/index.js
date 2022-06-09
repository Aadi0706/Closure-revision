var button = document.getElementById("button");

function deboounce(func, delay) {
  let deboounce;

  return function () {
    if (deboounce) {
      clearTimeout(deboounce);
    }

    deboounce = setTimeout(() => {
      func();
    }, delay);
  };
}

button.addEventListener("click", deboounce(function(){
    alert("debouncing in 4 seconds")
},4000)
);
