// 2. Simple Array Sum
function simpleArraySum(ar) {
    return ar.reduce((a, b) => a + b)
}

// 3. A Very Big Sum
function aVeryBigSum(ar) {
    return ar.reduce((c, i) => c + i, 0);
}
// 4. Compare the Triplets
function compareTriplets(a, b) {
    let res = [0,0];
    for (let i = 0; i < a.length; i++) {
        if (a[i]!== b[i]) {
            a[i] > b[i] ? res[0]++ : res[1]++;
        }
    }
    return res;
}
// 5. Diagonal Difference
function diagonalDifference(arr) {
    let primDiag = 0
    let secDiag = 0
    let n = arr.length

    for (let i = 0, j = n - 1; i < n; i++, j--) {
        primDiag += arr[i][i]
        secDiag += arr[i][j]
    }
    return Math.abs(primDiag - secDiag)
}
// 6. Plus Minus
function plusMinus(arr) {
    let pos = 0, neg = 0 , zero = 0 , length = arr.length
    arr.forEach( n => {
        if( n > 0 )
            pos++
        else if( n < 0 )
            neg++
        else
            zero++
    } )
    console.log( (pos / length).toFixed(6) )
    console.log( (neg / length).toFixed(6) )
    console.log( (zero / length).toFixed(6) )
}

// 7. Staircase
function staircase(n) {
    const s = "#";
    for (let i = 1; i <= n; i += 1) {
        const line = " ".repeat(n - i) + s.repeat(i);
        console.log(line);
    }
}
// 8. Mini-Max Sum
function miniMaxSum(arr) {
    arr.sort();
    let minSum = arr[0] + arr[1] + arr[2] + arr[3];
    let maxSum = arr[1] + arr[2] + arr[3] + arr[4];

    console.log(minSum, maxSum);
}
// 9. Birthday Cake Candles
function birthdayCakeCandles(ar) {
    let tallestCandle = Math.max(...ar);
    let filteredAr = ar.filter(x => x == tallestCandle);

    return filteredAr.length
}
// 10. Time Conversion
function timeConversion(s) {
    const arr = s.slice(0, 8).split(':');
    arr[0] = (s.indexOf('PM') > -1) ?
        (arr[0] == 12) ? arr[0] = '12' : Number(arr[0]) + 12 :
        (arr[0] == 12) ? '00' : arr[0];
    return(arr.join(':'));
}
// 11. Divisible Numbers

// 11. Grading Students
function gradingStudents(grades) {
    let finalGrades = new Array(grades.length);
    for (let x = 0; x <= grades.length - 1; x++) {
        if (grades[x] >= 38 && (grades[x] + 2) % 5 === 0) {
            finalGrades[x] = grades[x] + 2;
        } else if (grades[x] === 99 || (grades[x] >= 38 && (grades[x] + 1) % 5 === 0)) {
            finalGrades[x] = grades[x] + 1;
        } else {
            finalGrades[x] = grades[x];
        }
    }
    return finalGrades;
}
// 12. Apple and Orange
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let totalApples = 0;
    let totalOranges = 0;
    for (let i = 0; i <= apples.length; i++) {
        if (a + apples[i] >= s && a + apples[i] <= t) {
            totalApples += 1;
        }
    }
    for (let i = 0; i <= oranges.length; i++) {
        if (b + oranges[i] >= s && b + oranges[i] <= t) {
            totalOranges += 1;
        }
    }
    console.log(totalApples);
    console.log(totalOranges);
}

// 13. Kangaroo
function kangaroo(x1, v1, x2, v2) {
    if (v1 < v2) return 'NO' // impossible catch up
    if (((x2 - x1) % (v1 - v2)) == 0) return 'YES'
    return 'NO'

    if ((x1 < x2) && (v1 < v2))
        return "NO"
    else {
        if ((v1 != v2) && ((x2 - x1) % (v1 - v2)) == 0)
            return "YES"
        else
            return "NO"
    }
    // 14. Between Two Sets
    function breakingRecords(scores) {

        let countMax = 0, countMin = 0;
        let min = scores[0], max = scores[0];
        for(let i = 0; i< scores.length; i++){
            if(scores[i] > max){
                max = scores[i];
                countMax += 1;
            }
            if( scores[i] < min){
                min = scores[i];
                countMin += 1;
            }
        }
        return [countMax, countMin];
    }
    // 15. Birthday Chocolate
    function birthday(s, d, m) {
        let count = 0;
        for (let i = 0; i < s.length - m + 1; i++){
            let sum = 0;
            for (let j = 0; j < m; j++){
                sum = sum + s[i + j];
            }
            if (sum == d) {
                count++;
            }
        }
        return count;
    }
    // 16. Divisible Sum Pairs
    function divisibleSumPairs(n, k, ar) {
        let count = 0;
        for(let i = 0; i < n; i++) {
            for(let j = (i+1); j < n; j++) {
                if((ar[i] + ar[j]) % k === 0) {
                    count++;
                }
            }
        }
        return count;
    }
    // 17. Migratory Birds
    let c = new Array(arr.length).fill(0);
    for (let i = 0;i<arr.length;i++) {
        c[arr[i]] += 1;
    }
    return c.indexOf(c.reduce((a,b)=>Math.max(a,b)));

    // 18. Day of the Programmer
    if (year < 1918) {
        let days = year % 4 === 0 ? 244 : 243;
        return 256 - days + '.09.' + year;
    } else if (year > 1918) {
        let days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 244 : 243;
        return 256 - days + '.09.' + year;
    } else {
        return '26.09.1918';
    }
    // 19. Bon Appétit
    function bonAppetit(bill, k, b) {
        let sum = 0;
        let paid = 0;
        for(let item of bill){
            sum += item;
        }
        paid = (sum - bill[k]) / 2;
        if(b==paid){
            console.log("Bon Appetit")
        } else {
            console.log(b-paid);
        }
    }
    // 20. Sock Merchant
    const colors = {};
    let matches = 0;
    for (let i = 0; i < n; i++) {
        if (colors[ar[i]]) {
            matches++;
            colors[ar[i]] = 0;
        } else {
            colors[ar[i]] = 1;
        }
    }
    return matches;

    // 21. Drawing Book
    function pageCount(n, p) {
        const pageTurns = Math.floor(p / 2);
        const totalTurns = Math.floor(n / 2);
        return Math.min(pageTurns, totalTurns - pageTurns);
    }
