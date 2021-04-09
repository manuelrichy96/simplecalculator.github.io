	function addInput(){	
	 		var i1 = parseInt(document.getElementById('I1').value);
		 	var i2 = parseInt(document.getElementById('I2').value);
 			if(document.getElementById('I1').value.length == 0 && document.getElementById('I2').value.length == 0){
 				alert('Empty Input');
 			}
	 		alert(i1 + i2);
	 	}


	 	function subInput(){	
	 		var i1 = parseInt(document.getElementById('I1').value);
		 	var i2 = parseInt(document.getElementById('I2').value);
 			if(document.getElementById('I1').value.length == 0 && document.getElementById('I2').value.length == 0){
 				alert('Empty Input');
 			}
	 		alert(i1 - i2);
	 	}


	 	function divInput(){	
	 		var i1 = parseInt(document.getElementById('I1').value);
		 	var i2 = parseInt(document.getElementById('I2').value);
	 		if(document.getElementById('I1').value.length == 0 && document.getElementById('I2').value.length == 0){
 				alert('Empty Input');
 			}
	 		alert(i1 / i2);
	 	}


	 	function mulInput(){	
	 		var i1 = parseInt(document.getElementById('I1').value);
		 	var i2 = parseInt(document.getElementById('I2').value);
 			if(document.getElementById('I1').value.length == 0 && document.getElementById('I2').value.length == 0){
 				alert('Empty Input');
 			}
	 		alert(i1 * i2);
	 	}
