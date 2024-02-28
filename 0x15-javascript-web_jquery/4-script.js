$("toggle_header").on("click",function(){
	if($("header").currentClass === "green"){
	$("header").addClass("red");
	}else{
	$("header").addClass("green");
	}
});
