$(document).ready(function(){
	var user='BLACK';
	var blackBoxes =[];
	var whiteBoxes = [];

	$('#gamearea div').on('click',function(){
		if($(this).attr('data-flag')=='0'){
			if(user=='BLACK'){
				$(this).css('background-color','BLACK');
				blackBoxes.push($(this).attr('data-box'));
				console.log(blackBoxes);
				if(isWinner(blackBoxes)){
					alert("winner is black");
					reset();
					return;
				}
				user='WHITE';
			}else{
				$(this).css('background-color','WHITE');
				whiteBoxes.push($(this).attr('data-box'));
				user='BLACK';
				console.log(whiteBoxes);
				if(isWinner(whiteBoxes)){
					alert("winner is white");
					reset();
					return;
				}
			}
			$(this).attr('data-flag','1');
			$('input:radio').attr('disabled','disabled');
		}
		
		
	});

	$('input:radio').on('click',function(e){
		if($(this).val()==user){
			e.preventDefault();	
		}else{
			user = $(this).val();
		}
		$(this).val()==this.user ? e.preventDefault() : this.user = $(this).val();
	});

	$('#reset').on('click',reset);

	function reset(){
		$('#gamearea div').css('background-color','FFC');
		$('#gamearea div').attr('data-flag','0');
		$('input:radio').removeAttr('disabled');
		blackBoxes = [];
		whiteBoxes = [];
		user='BLACK';
	}

	function isWinner(boxSet){

		if(boxSet.indexOf("5")>-1){
			if((boxSet.indexOf("1")>-1 && boxSet.indexOf("9")>-1) 
				|| (boxSet.indexOf("2")>-1 && boxSet.indexOf("8")>-1)
				|| (boxSet.indexOf("3")>-1 && boxSet.indexOf("7")>-1)
				|| (boxSet.indexOf("4")>-1 && boxSet.indexOf("6")>-1)){
					return true;
			}

		}

		if(boxSet.indexOf("1")>-1){
			if((boxSet.indexOf("2")>-1 && boxSet.indexOf("3")>-1) 
				|| (boxSet.indexOf("4")>-1 && boxSet.indexOf("7")>-1)){
				return true;
			}
		}

		if(boxSet.indexOf("9")>-1){
			if((boxSet.indexOf("3")>-1 && boxSet.indexOf("6")>-1) 
				|| (boxSet.indexOf("7")>-1 && boxSet.indexOf("8")>-1)){
				return true;
			}
		}
		return false;
	}
});