	$(document).ready(function(){
		console.log("jQuery ready!")
		deleteAction();
		doneAction();
	});

	function deleteAction () {
		$(".delete").click(function(){
			console.log("delete event fired.")
			alert("Handler for the delete button called.");
		});		
	}

	function doneAction() {
		$(".done").click(function(){
			console.log("done event fired.")
			alert("Handler for the done button called.");
		});		
	}