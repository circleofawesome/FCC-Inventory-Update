function arrayToObj(arr){
	var retObj={};
	for(var i=0;i<arr.length;i++){
		retObj[arr[i][1]]=arr[i][0];
	}
	return retObj;
}

function updateInventory(arr1, arr2) {
    var arr1Obj=arrayToObj(arr1);
    var arr2Obj=arrayToObj(arr2);

    var arr1Keys=Object.keys(arr1Obj);
    var arr2Keys=Object.keys(arr2Obj);

    var retObj={};

    for(var i=0;i<arr1Keys.length;i++){
    	retObj[arr1Keys[i]]=0;
    }
    for(var i=0;i<arr2Keys.length;i++){
    	retObj[arr2Keys[i]]=0;
    }

    var retObjKeys=Object.keys(retObj).sort();
    var retArr=[];

    for(var i=0;i<retObjKeys.length;i++){
    	var sum=arr1Obj[retObjKeys[i]]+arr2Obj[retObjKeys[i]];
    	if(isNaN(sum)){
    		if(arr1Keys.includes(retObjKeys[i])){
    			sum=arr1Obj[retObjKeys[i]];
    		}
    		else{
    			sum=arr2Obj[retObjKeys[i]];
    		}
    	}
    	retArr.push([sum,retObjKeys[i]]);
    }
    return retArr;
}
