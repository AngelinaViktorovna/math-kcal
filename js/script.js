const calories = document.getElementById("n1");
const gram = document.getElementById("n2");
const totalElement = document.getElementById("out");

const totalKcal = () => {
  if (!calories.value || !gram.value) {
    totalElement.textContent = "***";
    return;
  }
  const total = (calories.value / 100) * gram.value;
  totalElement.textContent = Math.round(total);
  console.log(Math.round(total));
};

calories.addEventListener("input", totalKcal);
gram.addEventListener("input", totalKcal);
