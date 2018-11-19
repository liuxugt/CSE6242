cuisineList = ["Pizza", "Chinese", "Indian"];

d3.select("#cuisines").selectAll("option")
	.data(cuisineList).enter()
	.append("option")
	.attr("id", function(d,i){return i})
	.attr("value", function(d){return d})
	.text(function(d){return d});

d3.select("#submit")
	.on("click", getData);


var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function getData(){
	var cuisines = $('#cuisines').val();

	
	$.ajax({
		url: '/zip',
		dataType: "json",
		data: JSON.stringify({
			"data": cuisines
		}),
		contentType: 'application/json;charset=UTF-8',
		type: 'POST',
		success: function(response){
			updateData(response);
		},
		error: function(error){
			console.log(error);
		}
	});
	
}