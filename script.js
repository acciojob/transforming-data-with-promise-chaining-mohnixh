const output = document.getElementById("output");
    const ip = document.getElementById("ip");
    const btn = document.getElementById("btn");

    // promise functions
    function firstInput() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(Number(ip.value)), 2000);
      });
    }
    function secondInput() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(Number(ip.value) * 2), 1000);
      });
    }
    function thirdInput() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(Number(ip.value) - 3), 1000);
      });
    }
    function fourthInput() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(Number(ip.value) / 2), 1000);
      });
    }
    function fifthInput() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(Number(ip.value) + 10), 1000);
      });
    }

    // consumption
    btn.addEventListener("click", async () => {
      output.innerText = ""; // clear
      const inputVal = Number(ip.value);

      output.innerText += `Test Case 1: Input ${inputVal}\n\n`;
      output.innerText += `Before any transformations: The output div is empty.\n`;

      const res1 = await firstInput();
      output.innerText += `After 2 seconds: Result: ${res1}\n`;

      const res2 = await secondInput();
      output.innerText += `After 3 seconds: Result: ${res2}\n`;

      const res3 = await thirdInput();
      output.innerText += `After 4 seconds: Result: ${res3}\n`;

      const res4 = await fourthInput();
      output.innerText += `After 5 seconds: Result: ${res4}\n`;

      const res5 = await fifthInput();
      output.innerText += `After 6 seconds: Final Result: ${res5}\n`;
    });