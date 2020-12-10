$(document).ready(() => {
  loadCharts();
});

function loadCharts() {
  let ids = ["#bitcoin", "#litecoin", "#tether", "#ethereum"];
  for (let i in ids) {
    let context = $(`${ids[i]}`)[0].getContext("2d");
    var myChart = new Chart(context, {
      type: "line",
      data: {
        labels: [
          "12/4/2020",
          "12/5/2020",
          "12/6/2020",
          "12/7/2020",
          "12/8/2020",
          "12/9/2020",
        ],
        datasets: [
          {
            label: "Close Price",
            data: [
              18916.4431459177,
              19206.0698078268,
              19269.790748152,
              19201.292291308,
              18238.9062986907,
              18480.5750787456,
            ],
            options: {
              legend: {
                display: true,
                labels: {
                  fontColor: "rgb(255, 99, 132)",
                },
              },
            },
          },
        ],
      },
    });
  }
}
