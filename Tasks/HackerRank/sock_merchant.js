const sockMerchant = (n, ar) => {
    const hashMap = {};
    
    for(let i = 0; i<n; i++) {
        if (!hashMap[ar[i]]) {
            hashMap[String(ar[i])] = 1;
        } else {
            hashMap[String(ar[i])]++;
        }
    }

    let result = 0;

    for(let key in hashMap) {
        if (hashMap[key]%2===0) {
            result+=hashMap[key]/2;
        } else {
            if (hashMap[key]>2) {
                result+=(hashMap[key]-1)/2;
            }
        }
    }

    return {result, hashMap};
}

const arr = [10,20,20,10,10,30,50,10,20];
const arr2 = [1,2,1,2,1,3,2];
let length = arr.length;

console.log(sockMerchant(length, arr));
console.log(sockMerchant(arr2.length, arr2));