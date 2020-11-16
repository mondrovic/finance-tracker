const ctx = document.getElementById("myChart");
const ctx2 = document.getElementById("debtChart");
let billNames = document.querySelectorAll(".bill-name");
let billAmounts = document.querySelectorAll(".bill-amount");
let income;
let debt;

window.onload = function () {
  let billNames = document.querySelectorAll(".bill-name");
  let billAmounts = document.querySelectorAll(".bill-amount");
  income = document.querySelector("#income").dataset.income;

  // declares variables
  let xlabel = [];
  let ydata = [];
  let colors = [];

  // adds all bill names to array named xlabel. Generates random color
  for (i = 0; i < billNames.length; i++) {
    xlabel.push(billNames[i].textContent);
    getRandomColor(colors);
  }
  //adds all bill amounts to array named ydata
  for (i = 0; i < billAmounts.length; i++) {
    ydata.push(parseInt(billAmounts[i].textContent));
  }

  // gets total value from first chart (ydata)
  debt = ydata.reduce((a, b) => {
    return a + b;
  }, 0);

  // initializes chart
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: xlabel, // bill names
      datasets: [
        {
          label: "Bills", // table name
          data: ydata, // bill amounts
          backgroundColor: colors, // passes in randomly generated color array
          borderWidth: 1,
        },
      ],
    },
  });

  // adds second chart to show total income vs debt
  const debtChart = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["Income", "Expenses"], // label names
      datasets: [
        {
          label: "Income vs Expenses", // table name
          data: [income, debt], // bill amounts
          backgroundColor: colors, // passes in randomly generated color array
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
};

// random color generator for chart. Passes in empty color array
function getRandomColor(array) {
  var hue =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ",0.7)";
  array.push(hue);
}

// removes charts
function removeChild(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
