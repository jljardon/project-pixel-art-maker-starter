// Select color input
// Select size input

var gridHeight, gridWidth, cellColor;
var table = $('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  gridHeight = $('#inputHeight').val();
  gridWidth = $('#inputWeight').val();
  makeGrid(gridHeight, gridWidth);
})



function makeGrid(height, width) {

  table.html("");

  for (var r = 1; r <= height; r++) {
    table.append('<tr id=row' + r + '></tr>');
    for (var d = 1; d <= width; d++) {
      $('#row' + r).append('<td></td>');
    }
  }

  $('td').click(function addColor() {
    cellColor = $('#colorPicker').val();
    $(this).attr('style', 'background-color:' + cellColor);
  })

}
