	$(document).ready(function(){
		console.log("jQuery ready!")
		deleteAction();
		doneAction();
		inputValue();
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

	function inputValue() {
		$(".input-form").keypress(function(event){
			console.log("keys are being pressed");
			var value = $(".input-form").val();
			if (event.which === 13) {
				console.log("enter key has been pressed");
				$(".item-name").text(value);
			}

		});
	}