$('.filters-hide').hide();

$('.filters-panel').attr('id', function(i) {
  			return 'filter_'+i;
		});
$('.filters-btn').attr('id', function(i) {
  			return 'button_'+i;
});
$("#button_0").click(function(){
		$("#filter_0").slideToggle("slow");
	});
$("#button_1").click(function(){
		$("#filter_1").slideToggle("slow");
	});
$("#button_2").click(function(){
		$("#filter_2").slideToggle("slow");
	});

////////////////////////////////////////////////////
// in a production environment may want to write a 
// function to dynamically assign the ids for the 
// button and the corresponding summary panel.
///////////////////////////////////////////////////