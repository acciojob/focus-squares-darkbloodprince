const squares = document.querySelectorAll(".square");

squares.forEach((square) => {

  // When mouse enters a square
  square.addEventListener("mouseover", () => {
    squares.forEach((s) => {
      if (s !== square) {
        s.style.backgroundColor = "#6F4E37"; // coffee
      }
    });
  });

  // When mouse leaves a square
  square.addEventListener("mouseout", () => {
    squares.forEach((s) => {
      s.style.backgroundColor = "#E6E6FA"; // lavender
    });
  });

});