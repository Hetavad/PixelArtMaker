// Select color input

// Select size input

// When size is submitted by the user, call makeGrid()
var color="#000000";
function makeGrid() {

// Your code goes here!
var height = $("#height").val();
var width = $("#width").val();
color = $("#colorPicker").val();
 console.log("height: " + height +" Weight: "+ width+ " Color: "+ color);
 makeRowCol(height,width);
}

/*
 @rows numbers of column
 @cols numbers of rows
 @ returns a rows and column 
*/
function makeRowCol(rows,cols){

    for (var i = 0; i < rows; i++) {
		var row = $('<tr></tr>').appendTo("table");
		for (var j = 0; j < cols; j++) {
			$('<td></td>').appendTo(row);
		}
}
}
function clearGrid(){
$("table").html("");
}

//dom manipulations
$("#btnClick").click(function(event){
event.preventDefault();
clearGrid();
makeGrid();

});

$("table").on("click","td",function(event){
event.preventDefault();
color = $("#colorPicker").val();
$(this).css("background-color", color);
console.log(color);
})