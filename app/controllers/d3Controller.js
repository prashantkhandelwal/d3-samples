angular.module('d3csvjsonApp')
  .controller('d3Ctrl', ['$scope', function ($scope) {


    var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25];


    var histogram = function () {
      d3.select(".data").selectAll("div")
        .data(dataset)
        .enter()
        .append("div")
        .attr("class", "bar")
        .style("height", function (d) {
          var barHeight = d * 5;
          return barHeight + "px";
        });
    }

    var sparkLines = function () {


      var spark = d3.select('#spark').append("svg:svg").attr("width", "450px").attr("height", "120px");

      var x = d3.scale.linear().domain([0, 100]).range([0, 450]);
      var y = d3.scale.linear().domain([0, 100]).range([120, 0]);


      var line = d3.svg.line().interpolate("basis")
        .x(function (d, i) {
          console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
          return x(i);
        })
        .y(function (d) {
          console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
          return y(d);
        });

      spark.append("svg:path").attr("d", line(dataset));

    }

    histogram();
    sparkLines();

}]);
