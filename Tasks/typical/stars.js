const stars = (n) => {
    let str = '';

    for(let i = n; i>=0; i--) {

        let j = 0;

        while(j<i) {
            str+='*'
            j++;
        }

        str+='\n';
    }

    return str;
};


const stars2 = (n) => {
    let stars = '';
    for(let i = 0; i<n; i++) {
        for(let j = 0; j<n; j++) {
            if (j<=i) {
                stars+='*';
            } else {
                stars+=' ';
            }
        }
        stars+='\n';
    }
    return stars;
};

console.log(stars2(5));