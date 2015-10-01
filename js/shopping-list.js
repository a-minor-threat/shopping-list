	$(document).ready(function(){
		console.log("jQuery ready!");
		$(".buttons").hide();
		$(".item").hide();
		inputValue();		
		deleteAction();
		doneAction();

	});

	function inputValue() {
		$(".input-form").keypress(function(event){
			console.log("keys are being pressed");
			var value = $(".input-form").val();
		
			if (event.which === 13) {
				console.log("enter key has been pressed");
				$(".buttons").fadeIn("slow");
				$(".item").fadeIn("slow");					
				$(".item-name").text(value);
				$(".input-form").val('');
			}
		});
	}

	function deleteAction () {
		$(".delete").click(function(){
			console.log("delete event fired.")
			$(".item-name").remove();
			$(".buttons").fadeOut("slow");
			$(".item").fadeOut("slow");
		});		
	}

	function doneAction() {
		$(".done").click(function(){
			console.log("done event fired.")
			$(".item-name").toggleClass("strike");
		});		
	}