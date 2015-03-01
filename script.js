$(document).ready(function(){

	$(".coffee").click(function(){	
		//show coffee stout and hide all others
		$("#coffee").slideDown();
		$("#rye, #pumpkin").hide();
	});


	$(".rye").click(function(){	
		//show coffee stout and hide all others
		$("#rye").slideDown();
		$("#coffee, #pumpkin").hide();
	});

	$(".pumpkin").click(function(){	
		//show coffee stout and hide all others
		$("#pumpkin").slideDown();
		$("#coffee, #rye").hide();
	});

	// $("#univ").click(function(){
	// 	$("#univ-info").slideToggle();
	// 	$("#deering-info, #mudd-info, .hidden1, .hidden2, .hidden3").hide();

	// });

	// $("#mudd").click(function(){	
	// 	$("#mudd-info").slideToggle();
	// 	$("#deering-info, #univ-info").hide();
	// });

});