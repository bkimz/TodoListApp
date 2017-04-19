//check off todo on click

$("ul").on("click","li", function(){
	$(this).toggleClass("done");
})

//click on X to delete todo

$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	
	event.stopPropagation();

})

$("input[type ='text']").keypress(function(e){

	if(e.which == 13){
		

		//grab the value of the todo inputed
		let todoInput = $(this).val();

		$(this).val("");

		//create a new li and add to ul

		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoInput +"</li>");
	}
})

$(".fa-pencil-square-o").click(function(){
	$("input[type ='text']").fadeToggle();

})