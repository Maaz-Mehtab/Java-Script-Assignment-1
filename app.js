// let number = 9;
// let array = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// function question1(n, a) {
//     let counts = {}
//     let temp = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (counts[a[i]]) {
//             counts[a[i]] += 1
//         } else {
//             counts[a[i]] = 1
//         }
//     }
//     let val = Object.entries(counts);
//     for (var j = 0; j < val.length; j++) {
//         if (val[j][1] / 2) {
//             let a = Math.floor(val[j][1] / 2);
//             temp += a;;
//         }
//     }
//     return temp
// }

// var answer1 = question(number, array)
// console.log("answer", answer1)





// Question 2
// let arr = [
//     [1, 1, 1, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0],
//     [0, 0, 2, 4, 4, 0],
//     [0, 0, 0, 2, 0, 0],
//     [0, 0, 1, 2, 4, 0]
// ]
// function question2(arr) {
//     let count = -63;
//     for (let i = 0; i <= 3; i++) {
//         for (let j = 0; j <= 3; j++) {
//             let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1]+ arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
//             console.log("sum",sum)
//             console.log("count",count)
//             if (sum > count) {
//                 count = sum
//             }
//         }
//     }
//     return count;
// }
// var answer2 = question2(arr);
// console.log("answer2", answer2)





// question 3
// let a = [1, 2, 3, 4, 5];
// let d = 4;
// function question3(a, d) {
//     console.log("a", a)
//     console.log("d", d)
//    let arr = a;
//     for (let i = 0; i < a.length; i++) {
//         if (i < d) {
//             let b=arr.splice(0,1);
//             arr.push(b[0])

//         }
//     }
//     return arr
// }
// var answer3 = question3(a, d);
// console.log("answer3", answer3)







//Question 4 Start 

// let steps = 8;
// let path = ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U'];
// function question4(st, pa) {
//     let a = Array.from(pa);
//     let valleys = 0;
//     let pos = 0;
//     let prevpos = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === 'U') {
//             prevpos = pos++;
//             if (pos === 0) {
//                 valleys++;
//             }
//         }
//         else {
//             prevpos = pos--;
//         }
//     }

//     return valleys;
// }
// var answer4 = question4(steps, path);
// console.log("answer4", answer4);







//Question 5 //

// let c = [0, 0, 1, 0, 0, 1, 0];
// function question5(c) {
//     let jumps = 0;
//     let pos = 0;
//     for (var i = 0; i < c.length; i++) {
//         if (c[pos + 2] == 0) {
//             pos = pos + 2
//             jumps++
//         }
//         else if (c[pos + 1] == 0) {
//             pos = pos + 1;
//             jumps++
//         }
//         else {
//             break;
//         }
//     }
//     return jumps

// }
// var answer5 = question5(c);
// console.log("answer5", answer5);







// let s = 'aba'
// let n = 10;
// function question6(s, n) {

//     const as = s.split("").filter(c => c === "a").length;
//     const times = parseInt(n / s.length);
//     const rest = n % s.length;

//     const totalAs = times * as
//         + s.slice(0, rest).split("").filter(c => c === "a").length

//     return totalAs;

// }
// var answer6 = question6(s, n);
// console.log("answer6", answer6)







// Array Manipulation
// let n = 10;
// let arr = [
//     [1, 5, 3],
//     [4, 8, 7],
//     [6, 9, 1],
// ]

// function question7(n, queries) {
//     let arr = new Array(n + 1).fill(0);
//     queries.forEach(([a, b, k]) => {
//         arr[a - 1] += k;
//         arr[b] -= k;
//     })
//     let sum = 0;
//     let max = 0;
//     arr.forEach(val => {
//         sum += val;
//         max = Math.max(sum, max)
//     })
//     return max;
// }
// var answer7 = question7(n, arr);
// console.log("answer7", answer7);








//Minimum Swaps 2
// let arr = [2, 3, 4, 1, 5];
// function question8(arr) {
//     let swaps = 0;

//     const tmp = {};
//     arr.forEach((v, i) => tmp[v] = i);;
//     arr.forEach((v, i) => {
//         if (arr[i] !== i + 1) {
//             swaps += 1
//             const t = arr[i]
//             arr[i] = i + 1
//             arr[tmp[i + 1]] = t

//             tmp[t] = tmp[i + 1]
//         }
//     });

//     return swaps
// }
// var answer8 = question8(arr);
// console.log("answer8", answer8);








// Maximum Toys 
// let k = 50;
// let prices = [1, 12, 5, 111, 200, 1000, 10]

// function question9(k, prices) {
//     let temp = prices.sort((a, b) => a - b);
//     console.log("temp", temp)
//     let count = 0;
//     temp.forEach(price => {

//         if (k > price) { // if true
//             k = k - price;
//             count++;
//         }
//     });

//     // returning the number of toys that I can buy
//     return count;
// }
// let answer9 = question9(k, prices);
// console.log("answer9", answer9);








// Merge Sort: Counting Inversions
// let arr = [2, 1, 3, 1, 2]
// function question10(arr) {
//     return sortAndCount(arr);
// }

// let sortAndCount = arr => {
//     if (arr.length < 2) {
//         return 0;
//     }

//     var mid = Math.floor(arr.length / 2);
//     var left = arr.slice(0, mid);
//     var right = arr.slice(mid);

//     return sortAndCount(left) + sortAndCount(right) + mergeSortAndCount(arr, left, right);
// }

// let mergeSortAndCount = (arr, left, right) => {
//     var i = 0, leftIndex = 0, rightIndex = 0, inversions = 0;

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] <= right[rightIndex]) {
//             arr[i] = left[leftIndex];
//             leftIndex++;
//         } else {
//             arr[i] = right[rightIndex];
//             rightIndex++;
//             inversions += (left.length - leftIndex);
//         }

//         i++;
//     }

//     while (leftIndex < left.length) {
//         arr[i] = left[leftIndex];
//         leftIndex++;
//         i++;
//     }

//     while (rightIndex < right.length) {
//         arr[i] = right[rightIndex];
//         rightIndex++;
//         i++;
//     }

//     return inversions;
// }
// let answer10 = question10(arr);
// console.log("answer10", answer10);




// let expenditures = [2, 3, 4, 2, 3, 6, 8, 4, 5]
// let d = 5;

// function question11(expenditure, d) {
//     // Write your code here
//     let map = {}
//     let count = 0
//     let list = []
//     const p = d % 2 === 0 ? d / 2 + 1 : (d + 1) / 2

//     expenditure.slice(0, d).forEach((i) => {
//         if (!map[i]) map[i] = 0
//         map[i]++
//     })

//     for (let i = 0; expenditure.length - d > i; i++) {
//         if (i !== 0) {
//             map = updateMap(map, expenditure[i - 1], expenditure[i + d - 1])
//         }
//         const m = getMedian(map, d, p)
//         const s = expenditure[i + d]

//         if (s >= m * 2) count++
//     }

//     return count
// }
// function updateMap(map, l, n) {
//     map[l]--
//     if (!map[l]) delete map[l]

//     if (!map[n]) map[n] = 0
//     map[n]++

//     return map
// }

// function getMedian(map, d, p) {
//     let index = 0
//     const keys = Object.keys(map)
//     let a = 0
//     let b = 0
//     while (p > 0) {
//         const key = keys[index]
//         p -= map[key]
//         if (1 > p) {
//             a = key
//         }
//         if (!b && 2 > p) {
//             b = key
//         }
//         index += 1
//     }

//     if (d % 2 === 0) {
//         return (Number(a) + Number(b)) / 2
//     } else {
//         return a
//     }
// }
// let answer11 = question11(expenditures, d);
// console.log("answer11", answer11);








// Alternating Characters
// let s = "BABABA"
// function question12(s) {
//     let count = 0;
//     for (let i = 0; i < s.length - 1; i++) {
//         if (s.charAt(i) == s.charAt(i + 1)) {
//             count++;
//         }

//     }

//     return count
// }
// let answer12 = question12(s);
// console.log("asnwer12", answer12);







// Sherlock and the Valid String

// let s = "aabbcd";
// function question13(s) {
//     let hash = {};
//   let max, min;
//   let minCount = 0;
//   let maxCount = 0;
//   for (let i = 0; i < s.length; i++) {
//     let key = s[i];
//     if (hash[key]) {
//       hash[key]++;
//     } else {
//       hash[key] = 1;
//     }
//   }
//   let frequencies = [];
//   for (let key in hash) {
//     frequencies.push (hash[key]);
//   }
//   frequencies.sort ();
//   min = frequencies[0];
//   max = frequencies[frequencies.length - 1];
//   for (let i = 0; i < frequencies.length; i++) {
//     if (frequencies[i] === max) {
//       maxCount++;
//     }
//     if (frequencies[i] === min) {
//       minCount++;
//     }
//   }
//   if (min === max) {
//     return 'YES';
//   }
//   if (max - (min - 1) == max && minCount === 1 && maxCount !== 1) {
//     return 'YES';
//   }
//   if (max - min !== 1) {
//     return 'NO';
//   }
//   if (maxCount === minCount) {
//     return 'NO';
//   }
//   if (maxCount === 1 || minCount === 1) {
//     return 'YES';
//   }

//   return 'NO';
// }
// let answer13 = question13(13);
// console.log("answer13", answer13);







// let n = 5;
// let s = "asasd"
// function question15(n, s) {
//     let count = 0
//     let temp = ''

//     for (let i = 0; i < n; ++i) {
//         if (!temp || temp[0] === s[i]) {
//             temp += s[i]
//         } else {
//             let j = 1
//             while (j <= temp.length && s[i + j] === temp[0]) {
//                 ++j
//                 ++count
//             }
//             temp = s[i]
//         }
//         count += temp.length
//     }

//     return count
// }
// let answer15 = question15(n, s);
// console.log("asnwer", answer15);