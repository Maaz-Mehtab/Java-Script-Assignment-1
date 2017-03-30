//..........................Q1...................//
// var i=prompt("Enter your name ");
// alert("hi ," +i);

//.........................Q2........................//

// var table=prompt("Enter your Table");
// var t=1;
// document.write(table+'x 1 = '+table *t++ +'<br></br>' );
// document.write(table+'x 2 = '+table *t++ +'<br></br>');
// document.write(table+'x 3 = '+table *t++ +'<br></br>');
// document.write(table+'x 4 = '+table *t++ +'<br></br>');
// document.write(table+'x 5 = '+table *t++ +'<br></br>');
// document.write(table+'x 6 = '+table *t++ +'<br></br>');
// document.write(table+'x 7 = '+table *t++ +'<br></br>');
// document.write(table+'x 8 = '+table *t++ +'<br></br>');
// document.write(table+'x 9 = '+table *t++ +'<br></br>');
// document.write(table+'x 10 = '+table *t++ +'<br></br>');



//....................Q3........................./
// var i=prompt("please enter your city");
// if(i=="karachi"){
//     alert("welcome to the city of light");
// }
//....................Q4.................//

// var i=prompt("please enter your gender");
// if(i=="male"){
//     alert("Good Morning sir");
// }
// else{
//     alert("Good Morning Mam")
// }
//.....................Q5....................//

// var i=prompt("please enter your gender");
// if(i=="red"){
//     alert("vehicles must stop");
// }
// else if (i=="yellow"){
//     alert("vehicles should get ready to move")
// }
// else if (i=="green"){
//     alert("vehicles can move now")
// }
// else{
//     alert("invalid input")
// }

//................................Q6................//
// var age=prompt("Enter your age current age")
// var maxage=72;
// if(age<maxage){
// alert("the current age is less then max age and you are well Come")
// }
// else if(age>maxage){
//     alert("The current age is grater then max age")
// }
// else{
//     alert("invalid age")
// }

//...............................Q7......................//

// var i=prompt( "input remaining fuel in car ");
// if (i<=0.25)
// {
//     alert("Please refill the fuel in your car")
// }

//.........................Q8...................//

//  var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");                   //True//
// }

// var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");                //False//
// }

// var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// if (c === 13){
//  alert("condition 2 is true");                 //False//
// }
// if (++c < 14){
//  alert("condition 3 is true");
// }
// if(c === 14){
//  alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;               //True//
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }

// if (true){
//  alert("True");
// }                                    //True//
// if (false){
//  alert("False");
// }

// if("car" < "cat"){
//  alert("car is smaller than cat");                    //True//
// }
//........................Q9...............//

// var totalMarks = 300;
// var HTML5Marks = +prompt("HTML5 Marks");
// var Css3Marks = +prompt("Css Marks");
// var JSMarks = +prompt("Javascript Marks");

// var obtMarks = HTML5Marks + Css3Marks + JSMarks;

// var percentage = (obtMarks * 100) / totalMarks;

// var remarks;
// var grade;

// if (percentage >= 80) {

//     remarks = "Excellent";
//     grade = "A-One";
// } else if (percentage >= 70) {

//     remarks = "Good";
//     grade = "A";
// } else if (percentage >= 60) {
//     remarks = "You Need To Improve";
//     grade = "B";
// } else if (percentage < 60) {

//     remarks = "Sorry";
//     grade = "Fail";
// } else {
//     console.log("Invalid Input");
// }

// document.write("<h1> Marks Sheet </h1> <br><br>Total Marks : " + totalMarks +
//     "<br>  Obtained Marks : " + obtMarks +
//     "<br> Percentage : " + percentage +
//     "<br> Grade : " + grade +
//     "<br> Remarks : " + remarks);

//............................Q10..........................
// var NameofItem1 = prompt("Name of Item 1");
// var Item1Price = +prompt("Item 1 Price");
// var QuantityofItem1 = +prompt("Quantity of Item 1");
// var NameofItem2 = prompt("Name of Item 2");
// var Item2Price = +prompt("Item 2 Price");
// var QuantityofItem2 = +prompt("Quantity of Item 2");

// var ShippingChareges = 25

// var totalcost = (Item1Price * QuantityofItem1) + (Item2Price * QuantityofItem2);
// var discount;

// if (totalcost > 2000) {
//     discount = (totalcost * 10) / 100;


// }
// document.write("<h1> Shopping Cart <br><br></h1>" +
//     "Name of Item 1 : " + NameofItem1 +
//     "<br>Price of Item 1 : " + Item1Price +
//     "<br>Name of Item 2 : " + NameofItem2 +
//     "<br>Price of Item 2 :" + Item2Price +
//     "<br> Shipping Charges :" + ShippingChareges +
//     "<br>Total Cost of your Order is : " + totalcost +
//     "PKR<br> discount Price : " + discount + "PKR");

//.................................Q11........................

// var secretnumber = 5;
// var guessnumber = +prompt("Guess the Number");
// if (guessnumber === secretnumber) {
//     document.write("yes your answese is correct<br>" +
//         "secretnumber is :5<br>" +
//         "guess number is : " + guessnumber);
// } else if (guessnumber === --secretnumber || guessnumber === 6) {
//     document.write("Close Enough To The Correct Answer");
// } else {
//     document.write("Try Again");
// }


//.........................Q12.....................

// var number = +prompt("Enter Your Number");
// if (number % 3 === 0) {
//     document.write("Your Number is : " + number +
//         "<br> and is  Divisible by 3");
// } else {
//     document.write("No your number is not Divisible by 3");
// }



//.........................Q13.............................

// var team1 = prompt("Enter Team1 Name ");
// var scoreTeam1 = +prompt("Enter Score Of Team " + team1);
// var team2 = prompt("Enter Team2 Name ");
// var scoreTeam2 = +prompt("Enter Score Of Team " + team2);

// if (scoreTeam1 > scoreTeam2) {
//     alert(team1 + " Has Won The Match");
// } else if (scoreTeam1 < scoreTeam2) {
//     alert(team2 + " Has Won The Match");
// } else if (scoreTeam1 === scoreTeam2) {
//     alert("Match Has Been Tied Between " + team1 + " And " + team2);
// }

//.........................Q14..........................

// var String = "Pakistan";
// var integer = 12;
// var boolean = true;

// alert("pakitan has string");
// alert(" 12 is Integer");
// alert("ture is Boolean");


//............................Q15.............................

// var number = +prompt("Enter number");
// if (number % 2 == 0) {
//     alert("The given number of : " + number + " is even");
// } else {
//     alert("The given number of : " + number + " is odd");
// }


//.........................Q16...........................

// var Temperature = +prompt("Enter Temperature");

// if (Temperature > 40) {
//     alert("It is too hot outside")
// } else if (Temperature > 30) {
//     alert("The Weather today is Normal");
// } else if (Temperature > 20) {
//     alert("Today’s Weather is cool.");

// } else {
//     alert("OMG! Today’s weather is so Cool.");
// }



//.........................Q17......................
// var num1 = +prompt("enter First number ")
// var num2 = +prompt("enter Second Number ");
// var operation = prompt("Enter Operation i.e + , - , * , / , %");
// var add = (num1 + num2);
// var sub = (num1 - num2);
// var mul = (num1 * num2);
// var div = (num1 / num2);
// var per = (num1 * num2 / 100);

// if (operation === "+") {
//     alert("addition of two number is " + add);
// } else if (operation === "-") {
//     alert("Subtraction of two number is : " + sub);
// } else if (operation === "*") {
//     alert("Multiply of two number is : " + mul);
// } else if (operation === "-") {
//     alert("Division of two number is : " + div);
// } else if (operation === "%") {
//     alert("Percentage of two number is : " + per);
// }



//..............................Q18.................................

// var days = prompt("Enter day")

// if (days === "Monday" || days === "Tuesday" || days === "Wednesday" || days === "Thrusday" || days === "Friday") {
//     alert("It's A Week Day");
// } else if (days === "Saturday") {
//     alert("It’s weekend");
// } else if (days === "sunday") {
//     alert("it's a holiday");
// }

//..........................Q19..........................

// var score = +prompt("Enter Score ");

// if (score > 50) {
//     alert("You Are Passed");
// } else {
//     alert("Sorry you are failed");
// }


//...........................Q20..........................

// var Num1 = +prompt("Enter First Number To Compare");
// var Num2 = +prompt("Enter Second Number To Compare");

// if (Num1 > Num2) {
//     alert(" Ther Greater Of " + Num1 + " And " + Num2 + " Is " + Num1 + " is Greater");
// } else if (Num1 < Num2) {
//     alert(" Ther Greater Of " + Num1 + " And " + Num2 + " Is " + Num2 + " is Greater");
// } else if (Num1 === Num2) {
//     alert(Num1 + " Is Equal To " + Num2);
// }


//.....................Q21.......................

// var lang = prompt("Enter Language Code i.e en , ur , fr . To print HELLO WORLD in the desired language");

// if (lang === "en") {
//     alert("Hello World");
// } else if (lang === "ur") {
//     alert("ہیلو دنیا");
// } else if (lang === "fr") {
//     alert("Bonjour le monde");
// } else {
//     alert("Invalid Input");
// }

//.............................Q22....................


// var num = +prompt("Enter Number")
// if (num < 0) {
//     alert("your number is negative")
// } else if (num > 0) {
//     alert("your number is positive");
// }


//...............................Q23........................


// var noun = prompt("Enter Noun");
// var nounNumber = +prompt("Enter Noun's Quantity/Number");

// if (nounNumber === 1) {
//     alert(nounNumber + " " + noun);
// } else if (nounNumber > 1) {
//     alert(nounNumber + " " + noun + "s")
// } else {
//     alert("Invalid Input");
// }