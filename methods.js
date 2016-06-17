//takes a 2d array and turns it into object
function arrayToObj(arr){
	var retObj={};
	for(var i=0;i<arr.length;i++){
		retObj[arr[i][1]]=arr[i][0];
	}
	return retObj;
}

//arrayToObj([[2, "Hair Pin"],[3, "Half-Eaten Apple"],[67, "Bowling Ball"],[7, "Toothpaste"]]);