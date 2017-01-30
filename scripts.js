var brush = d3.brush();
var svg = d3.select("svg");

var group = svg.append("g")
  .attr("class", "brush")
  .call(brush)
  .select(".selection")
  .attr("id", "brush-selection")
  .attr('fill-opacity', 0);

var clipPath = svg.append("clipPath")
  .attr("id", "brush-clip")
  .append("use")
  .attr("xlink:href", "#brush-selection");

var area = svg.select("#area")
  .attr("clip-path", "url(#brush-clip)");


function changeValue(value) {
  d3.select('#selected-area > feColorMatrix').attr('values', value);
}