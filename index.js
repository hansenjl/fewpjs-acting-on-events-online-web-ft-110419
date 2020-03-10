let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    console.log("left")
    moveDodgerLeft()
  } else if (e.key === "ArrowRight"){
    console.log("right")
    moveDodgerRight()
  }
});


function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
 let rightNumbers = dodger.style.left.replace("px", "");
 
  let right = parseInt(rightNumbers, 10);
 console.log(right)
   if (right > 0) {
    dodger.style.left = `${right + 1}px`;
  }
  console.log(right)
   
}