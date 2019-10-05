const jumpingOnTheClouds = (n, arr) => {
    let d = [];
    d[0] = Number.MAX_SAFE_INTEGER; d[1] = 1;

    for(let i = 2; i<=n; i++) {
        d[i] = Math.min(d[i-1], d[i-2])+1;
    }

    return d[n];
};

const length = 7;
const sample = [0, 0, 1, 0, 0, 1, 0];
const sample2 = [0,0,1,0, 0, 0, 0, 1, 0, 0]
const outcom = [1, 1, 2, 1, 1, 2];

console.log(jumpingOnTheClouds(10, sample2));

// all possible steps - Sum(...locked clouds);
// min(all possible steps - Sum(...locked clouds));
// d[0] = 1; { count of possibilities to come }
// d[1] = 1;
// d[2] = 2;
// d[n] = d[n-1] + d[n-2];