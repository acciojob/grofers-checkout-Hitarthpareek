// Get button
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

// Select the table
const tablee = document.getElementById("table");

// Function to calculate total price
const getSum = () => {
  const prices = tablee.querySelectorAll(".price");
  let totalPrice = 0;

  prices.forEach(p => {
    totalPrice += Number(p.textContent);
  });

  // Update the answer span with id="ans"
  const ansSpan = document.getElementById("ans");
  ansSpan.textContent = totalPrice;
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);
