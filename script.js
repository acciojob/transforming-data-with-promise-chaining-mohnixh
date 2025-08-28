const output = document.getElementById("output");
const ip = document.getElementById("ip");
const btn = document.getElementById("btn");

// promise functions - now accept a value parameter for chaining
function firstInput(value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), 2000);
  });
}

function secondInput(value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value * 2), 1000);
  });
}

function thirdInput(value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value - 3), 1000);
  });
}

function fourthInput(value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value / 2), 1000);
  });
}

function fifthInput(value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value + 10), 1000);
  });
}

// consumption - now properly chains the promises
btn.addEventListener("click", async () => {
  output.innerText = ""; // clear
  const inputVal = Number(ip.value);
  
  // Chain the promises properly, passing results from one to the next
  const res1 = await firstInput(inputVal);
  output.innerText += `Result: ${res1}`;
  
  const res2 = await secondInput(res1);
  output.innerText += `Result: ${res2}`;
  
  const res3 = await thirdInput(res2);
  output.innerText += `Result: ${res3}`;
  
  const res4 = await fourthInput(res3);
  output.innerText += `Result: ${res4}`;
  
  const res5 = await fifthInput(res4);
  output.innerText += `Final Result: ${res5}`;
});