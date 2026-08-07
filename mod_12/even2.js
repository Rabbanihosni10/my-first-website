function even(arr){
    console.log("Our given array is:", arr);

    let arr1=[];
    let arr2=[];
    for(const num of arr){
        if(num%2===0){
            console.log("It's even",num);
            arr1.push(num);
        }
        else{
            console.log("It's odd",num);
            arr2.push(num);
        }
    }
    if (arr1.length===0){
        return arr2;
    }
    else{
        return arr1;
    }
}

const result=even([12,34,56,76,123,45,231,12332]);
console.log(result);