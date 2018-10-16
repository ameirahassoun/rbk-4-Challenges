function gcd(input){
	var max = 0
	var gcd
	for (var i=0; i<input.length; i++){
		if (array[i]> max){
			max = array[i]
		}
	}

	for (var k=0; k<max; k++){
		var flag = 0
		for(var z=0; z<input.length; z++){
			
			if (input[z]%k !== 0){
				flag =1
			}
		}

		if (flag === 0 ){
			gcd = k
		}
	}

	return gcd
}