module.exports.bruteForce = solver = (arr1, arr2, target) => {
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

module.exports.optimal = (a1, a2, target) => {
    const len1 = a1.length;
    const len2 = a2 ? a2.length : undefined; 
    const set = new Set();

    set.add(a1);

    return set;
};

console.log(this.optimal([1, 2, 3, 4]));