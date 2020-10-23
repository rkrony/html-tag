
console.log("hellow world!!!");
/***********
variable and data type
*/
/*
//string variable
var firstName='Rezaul Karim';
var lastName='Rony';
console.log(firstName,lastName);
//number variable
var age=28;
console.log(age);
//undefined variable
var job;
job='student';
console.log(job);
//boolean variable
var fullAge=true;
console.log(fullAge);
*/

/**********
*variable mutation and type coercion
*/
//type coercion
var firstName='Rony';
var age=24;
console.log(firstName+' '+age);
var job,isMarried;
job='Student';
isMarried=false;
console.log(firstName+' is '+age+' years old and also a '+job+' but is he married? '+isMarried);

//variable mutation

age='twenty four';
job='player';
alert(firstName+' is '+age+' years old and also a '+job+' but is he married? '+isMarried);
var lastName=prompt('what is his last name?');
console.log(firstName+' '+lastName);

/********
*Basic operators
*/
var now,ageRony,ageRana;
now=2020;
ageRony=24;
ageRana=20;

//Math operators
console.log(now - ageRony);
yearRana=now - ageRana;
yearRony=now - ageRony;
console.log('Birthday='+yearRana);
console.log(now * 2);

//logical operators
var olderRony=ageRony > ageRana;
console.log(olderRony);

//types of operators
var x;
console.log(typeof yearRana+' '+typeof olderRony+' '+typeof "rk"+' '+typeof x);












