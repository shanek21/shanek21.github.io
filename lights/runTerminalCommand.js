$(document).ready(function(){
	$('.on').click(function(){
                $.post('sendTerminalCommand.php',{data: "1"},function(response){
                });
	});
	
	$('.off').click(function(){
                $.post('sendTerminalCommand.php',{data: "0"},function(response){
                });
	});
});