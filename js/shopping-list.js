	$(document).ready(function(){
		console.log("jQuery ready!")
		$(".done").click(function(){
			console.log("done event fired.")
			alert("Handler for the done button called.");
		});
		$(".delete").click(function(){
			console.log("delete event fired.")
			alert("Handler for the delete button called.");
		});
	});