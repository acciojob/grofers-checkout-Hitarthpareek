// Create "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

// Select the table
const tablee = document.getElementById("table");

// Function to calculate and display total
const getSum = () => {
  // Calculate total price
  const prices = tablee.querySelectorAll(".price");
  let totalPrice = 0;
  prices.forEach(p => {
    totalPrice += Number(p.textContent);
  });

  // Check if a previous total row exists, remove it
  const prevTotalRow = document.getElementById("total-row");
  if (prevTotalRow) prevTotalRow.remove();

  // Create a new row for total
  const totalRow = document.createElement("tr");
  totalRow.id = "total-row"; // Assign an ID so we can replace it next time

  const labelCell = document.createElement("td");
  labelCell.textContent = "Total";

  const totalCell = document.createElement("td");
  totalCell.textContent = totalPrice;

  totalRow.appendChild(labelCell);
  totalRow.appendChild(totalCell);

  // Append the total row at the end of the table
  tablee.appendChild(totalRow);
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);
