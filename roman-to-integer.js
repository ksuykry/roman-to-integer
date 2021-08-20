var romanToInt = function(s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
    let sum = 0;
    for(let i = 0; i < s.length; i++){

        if(s[i]+s[i+1] in roman){
            sum += roman[s[i]+s[i+1]];
            i++;
        }
        else{
            sum += roman[s[i]];
    }
    }
    return sum;
}
