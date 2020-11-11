window.onload = function () {
  // gets all elements
  const ctx = document.getElementById("myChart");
  const billNames = document.querySelectorAll(".bill-name");
  const billAmounts = document.querySelectorAll(".bill-amount");

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
    ydata.push(billAmounts[i].textContent);
  }

  console.log(xlabel, ydata);

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
    options: {
      responsive: true,
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
