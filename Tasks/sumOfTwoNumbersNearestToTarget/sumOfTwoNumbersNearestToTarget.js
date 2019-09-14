module.exports = solver = (arr1, arr2, target) => {
    let len1 = arr1.length;
    let len2 = arr2.length;
    let nearestToTarget = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i<len1; i++) {
        for(let j = 0; j<len2; j++) {
            let currentSum = arr1[i] + arr2[j];
            
            if((target - currentSum) < nearestToTarget) {
                nearestToTarget = currentSum;
            }
        }
    }

    return nearestToTarget;
};