
const mean = (arr)=>{
    let sum = 0;
    if (arr.length === 0){
        return 0;
    }
    for(let i=0; i<arr.length;i++){
        sum +=arr[i];
    }
    return sum / arr.length;
};

module.exports.pi = 3.14;
module.exports.mean = (arr)=>{
    let sum = 0;
    if (arr.length === 0){
        return 0;
    }
    for(let i=0; i<arr.length;i++){
        sum +=arr[i];
    }
    return sum / arr.length;
};