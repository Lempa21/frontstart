document.addEventListener("DOMContentLoaded", () => {
  const counterButton = document.getElementById("counter");
  let count = 0;

  counterButton.addEventListener("click", () => {
    count++;
    counterButton.textContent = `count is ${count}`;
  });
});
