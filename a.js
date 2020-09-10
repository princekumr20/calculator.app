     $(document).ready(function() {

     	let fisrtNumber;
     	let secondNumber;

     	$('.number').click( function (){

     		let result =$('#result').text();
     	    let currentNumber = $(this).text();

     	 let newResult =Number(result + currentNumber);

     	    $('#result').text(newResult);  


     	});

     	$('.operator').click(function ()  {


     		fisrtNumber = Number($('#result').text());

     		operator = $(this).text();

     		$('#result').text(0);

     	})


     	$('#clear').click(function  () {

     		$('#result').text(0);


})
     	$('#equal').click(function  ()  {


     		secondNumber = Number($('#result').text());

     		if(operator==="+"){
     			$('#result').text(fisrtNumber + secondNumber);
     		
     	}
     	 else if(operator==="-"){

     	$('#result').text(fisrtNumber - secondNumber);
     }else if(operator ==="*"){
     	$('#result').text(fisrtNumber * secondNumber);
}else if (operator ==="Math.sin"){



}else if (operator ==="Math.cos"){
}else if (operator ==="Math.log"){
}else if (operator ==="Math.tanx"){
}else if (operator ==="Math.ln"){

}else if (operator ==="Math.exp"){
}else if (operator ==="Math.1/2"){
}else if (operator ==="Math.const"){
}else if (operator ==="Math.yx"){







}else{
	$('#result').text(fisrtNumber / secondNumber);




     }

});

  });



         
       
