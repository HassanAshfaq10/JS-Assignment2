// CHAPTER 21-25

// task 1

// var first = prompt('Enter first name:')
// var last = prompt('Enter second name:')
// alert(first + ' ' + last + '! Welcome')


// task 2

// var mb = prompt('Favourite mobile model?')
// document.write('My favourite phone is: '+ mb+'<br>'+
//                'Length of string: ' + mb.length)

// task 3

// var arr = 'Pakistani'
// document.write('String :  '+arr+'<br>')
// for(var a = 0 ; a < arr.length ; a++){
//     if(arr[a] === 'n'){
//         document.write('Index of \'n\' : '+a)
//     }
// }

// task 4

// var a = 'Hello World'
// document.write('String : ' + a + 
// '<br>Last index of \'l\' : ' + a.lastIndexOf('l'))

// task 5

// var a = 'Pakistani'
// document.write('String : '+a+ '<br>Characer at index 3: ' + a[3])

// task 6

// var first = prompt('Enter first name:')
// var last = prompt('Enter second name:')
// alert(first.concat(' '+last)+ '! Welcome')

// task 7

// var text = "Hyderabad"
// for (var i = 0 ; i<text.length ; i++)
// {
//     if (text.slice(i , i+5) === 'Hyder'){
//         text = text.slice(0,i) + 'Islam' + text.slice(i+5);
//         alert(text);
//     }
// }

// task 8

// var text = "Ali and Sami are best friends. They play cricket and football together."

// for (var i = 0 ; i<text.length ; i++)
// {
//     if (text.slice(i , i+3) === 'and'){
//         text = text.slice(0,i) + '&' + text.slice(i+3);
//     }
// }
// document.write(text)

// task 9

// var str = '472'
// var num = +(str)
// document.write('Value : '+ str + '<br>Type : ' + typeof(str)
//               + '<br><br>Value : ' + num + '<br>Type : ' + typeof(num))

// task 10

// var str = prompt('Enter in lowercase : ')
// var toU = str.toUpperCase()
// document.write('User input: '+str+ '<br>Upper case: '+toU)

// task 11

// var str = prompt('Enter string : ')
// var toU = str.split('')
// var a = toU[0]
// var a = a.toUpperCase()
// var f = str.length
// var b = toU.slice(1,f)
// var d = b.join('')
// document.write('User input: '+str+ '<br>Title case: '+a+d)

// task 12

// var num = 35.36 
// var str = num.toString()
// for (var i = 0 ; i<str.length ; i++)
// {
//     if (str.slice(i , i+1) === '.'){
//         str = str.slice(0,i) + '' + str.slice(i+1);
//         }
// }

// task 13

// var u = prompt('Enter username : ')
// for(var i = 0 ; i < u.length ; i++){
//     if (u[i] === '!' || u[i] === '@' || u[i] === '.' || u[i] === ','){
//         alert('Invalid Username.')
//         break
//     }
// }

// task 14

// var a = ['cake','apple pie','cookie','chips','patties']
// var u = prompt('Enter item : ')
// var u = u.toLowerCase()
// var b = a.indexOf(u)
// if(b === -1){
//     document.write('We are sorry. '+u + ' is <b>not available</b> at index in our bakery.')    
// }
// else{
//     document.write(u + ' is <b>available</b> at index '+b+' in our bakery.')
// }

// task 15

//did not understand

// task 16

// var uni = 'University of Karachi'
// uni = uni.split('')
// for(var i = 0 ; i<uni.length ; i++){
//     document.write(uni[i]+'<br>')
// }

// task 17

// var u = prompt('Enter any string: ')
// var len = u.length
// var last = u[len-1]
// document.write('Last character of input : '+ last)

// task 18

// var str = 'The quick brown fox jumps over the lazy dog'
// document.write('Text : '+str+'<br>')
// sum = 0
// str = str.toLowerCase()
// for(var i = 0 ; i < str.length ; i++){
//     if(str.slice(i,i+3) === 'the'){
//        sum = sum + 1 
//     }
// }
// document.write('There are '+sum+' occurence(s) of word '+'\''+'the'+'\'.')


// CHAPTER 26-30

// task 1

// var num = 3.45214
// var b = Math.round(num)
// var c = Math.floor(num)
// var d = Math.ceil(num)
// document.write('Number: '+num+'<br>')
// document.write('Round off value: '+b+'<br>')
// document.write('Floor value: '+c+'<br>')
// document.write('Ceil value: '+d+'<br>')

//task 2

// var num = -2.673
// var a = Math.round(num)
// var b = Math.floor(num)
// var c = Math.ceil(num)
// document.write('Number: '+num+'<br>')
// document.write('Round off value: '+a+'<br>')
// document.write('Floor value: '+b+'<br>')
// document.write('Ceil value: '+c+'<br>')

//task 3

// var a = -4
// var b = Math.abs(a)
// document.write('The absolute value of '+a+' is '+b)

//task 4

// a = Math.floor((Math.random()*6)+1)
// b = Math.floor((Math.random()*6)+1)
// document.write('Random Dice value : '+a+'<br>')
// document.write('Random Dice value : '+b+'<br>')

//task 5

// var a = Math.floor((Math.random()*2)+1)
// if (a === 1){
//     document.write(a + '<br>'+'random coin value : Tails')
// }
// else{
//     document.write(a + '<br>'+'random coin value : Heads')
// }

//task 6

// var a = Math.floor((Math.random()*100)+1)
// document.write('Random number between 1 and 100: '+a)

//task 7

// var weight = prompt('Enter your weigth in kilograms : ')
// document.write('The weigth of user is '+ weight)

//task 8

// var a = Math.floor((Math.random()*10)+1)
// var input = +prompt('Enter a number between 1 and 10 : ')
// if(a === input){
//     document.write('Congratulation, you guessed the rigth number.')
// }
// else{
//     alert('Try again!')
// }


//CHAPTERS 31-34


//task 1

// var a = new Date()
// document.write(a)

//task 2

// var a = new Date()
// var month = a.getMonth()
// var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
// document.write('Current month: '+months[month])

//task 3

// var a = new Date()
// var day = a.getDay()
// var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
// document.write('Today is '+days[day])

//task 4

// var a = new Date()
// var day = a.getDay()
// if (day ===  0 ){
//     document.write('Its Fun day')
// }
// else if (day ===  6 ){
//     document.write('Its Fun day')
// }
// else{
//     document.write('Its not sunday neither saturday.')
// }

//task 5

// var a = new Date()
// var day = a.getDate()
// if (day < 16){
//     document.write('First fifteen days of the month')
// }
// else{
//     document.write('Last days of the month')
// }

//task 6

// var a = new Date()
// var tm = a.getTime()
// var m = (tm) / (1000*60)
// document.write('Current Date: '+a+'<br>Elapsed milliseconds since January 1, 1970: '+tm+
// '<br>Elapsed minutes since January 1, 1970: '+m)

//task 7

// var a = new Date()
// var h = a.getHours()
// if(h >= 12){
//     document.write('Its PM')
// }
// else{
//     document.write('Its AM')
// }

//task 8

// var a = new Date('Dec 31, 2020')
// document.write('Later date : '+a)

// task 9
// var a = new Date()
// var b = new Date('June 18, 2015')
// var c = a.getTime()
// var d = b.getTime()
// var e = c - d;
// var days = e / (1000*60*60*24)
// document.write(Math.floor(days)+' days have passed since 1st Ramadan, 2015.')

//task 10

// var gd = new Date('Jan 1, 2015')
// var rd = new Date('10 Dec, 2017')
// var sgd = gd.getTime()
// var srd = rd.getTime()
// var diff = (srd - sgd)/(1000*60)
// document.write('On reference date '+rd+', '+ diff +' seconds had passed since beginning of 2015.')

//task 11

// var a = new Date()
// var b = a.setHours(a.getHours()+1)
// document.write('Current date : '+a)
// var b = a.setHours(a.getHours()-1)
// var c = new Date()
// document.write('<br>1 hour ago, it was '+c)

//task 12

// var a = new Date()
// var b = a.getFullYear()-100
// var c = a.setFullYear(b)
// var d = new Date()
// alert('Current date : '+d+'\n100 years back, it was '+a)

//task 13

// var dob = prompt('Enter your Date of Birth : ','Dec 10, 2001')
// var d = new Date(dob)
// var t = d.getTime()
// var y = d.getFullYear()
// var cr = new Date ()
// var crt = cr.getTime()
// var crMs = crt / (1000 * 60 * 60 * 30 * 24 *12)
// var dobMs = crt - t
// var age = (dobMs) / (1000 * 60 * 60 * 30 * 24 * 12)
// document.write('Your age is '+ Math.floor(age) + '<br>Your birth year is '+y)

//task 14

// var name = prompt('Enter your name : ')
// var month = prompt('Enter the Month : ')
// var noUnits = +prompt('Number of Units : ')
// var ChPUnits = +prompt('Charges per unit : ')

// document.write('<h1>K-Electric Bill</h1>'+'Customer Name : <b>'+name+'</b><br>Month : <b>'+month
//                 +'</b><br>Number of units : <b>'+ noUnits+ '</b><br>Charges per unit : <b>'+ChPUnits+ '</b><br><br>')

// var Amount = noUnits * ChPUnits
// var lAm = 350
// var gross = lAm + Amount
// document.write('Net Amount Payable (within Due Date) : <b>'+Amount+'</b><br>Late payment surcharge : <b>'
//                 +lAm+'</b><br>Gross Amount Payable (after Due Date) : <b>'+gross+'</b>')


//CHAPTERS 35-38

//task 1

// function Time(){
//     var a = new Date()
//     return a;
// }

// document.write(Time())

//task 2

// function greet(first , last){
//     alert(first+' '+last+'! Welcome to the page.')
// }

// var fr = 'Hassan'
// var ls = 'Ashfaq'
// greet(fr , ls)

//task 3

// function sum(num1  , num2){
//     return num1+num2
// }
// var n1 = +prompt('Enter Number 1 : ')
// var n2 = +prompt('Enter Number 2 : ')
// var res = sum(n1 , n2)
// document.write('The sum of two numbers : '+n1+' + '+n2+' = '+res)

//task 4

// function Calc(num1 , num2 , op){
//     if (op === '+'){
//         return num1+num2
//     }
//     else if (op === '-'){
//         return num1 - num2
//     }
    
//     else if (op === '/'){
//         return num1 / num2
//     }
    
//     else if (op === '*'){
//         return num1 * num2
//     }
//     else{
//         return 'Invalid Operator'
//     }
// }

// var n1 = +prompt('Enter Number 1 : ')
// var n2 = +prompt('Enter Number 2 : ')
// var o = prompt('Enter Operator : ')
// var res = Calc(n1 , n2 , o)
// document.write('The result : '+n1+' '+o+' '+n2 + ' = '+res)

//task 5

// function sq(num){
//     return Math.pow(num , 2)
// }
// var a = +prompt('Enter Value to square : ')
// var square = sq(a)
// document.write('The square of the number '+a+' is '+square)

//task 6

// function factorial(num){
//     var fact = 1;
//     if(num === 1){
//         return 1 
//     }
//     else if(num === 0){
//         return 1
//     }
//     else {
//         for (var i = 1 ; i <= num ; i++){
//                 fact = fact * i
//             }
//     return fact
//         }
// }

// var n = +prompt('Enter number to calculate its factorial : ')
// document.write('The factorial of the number '+n+' is '+factorial(n))

//task 7

// function count(fr , ls){
//     for (var i = fr ; i <=ls ; i++){
//         document.write(i + '<br>')
//     }
// }
// var a = +prompt('Enter the upper limit :') 
// var b = +prompt('Enter the lower limit :')
// count(a , b)

//task 8

//did not understand

//task 9

// function area(w , h){
//     return w * h
// }
// var W = +prompt('Enter Width:')
// var H = +prompt('Enter height:')
// document.write('Height = '+H+'<br>Width = '+W+'<br>Area = '+area(W , H))

// function Area(Width , Height){
//     return Width * Height
// }
// document.write('<br>Area = '+Area(23 , 2))

//task 10

// var a = prompt('Enter any string to check for Palindrome?')
// c = a.toLowerCase()
// var b = c.split('').reverse().join('')
// if (c === b){
//     document.write(a + ' is a Palindrome.')
// }
// else{
//     document.write(a + ' is not a Palindrome.')
// }

//task 11

// function titleCase(string){
//     var sentence = string.toLowerCase().split(' ')
//     for (var i = 0 ; i < sentence.length ; i++){
//         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
//     }
//     document.write(sentence.join(' '))

// }

// var str = prompt('Enter string to convert into TITLE CASE : ')
// titleCase(str)

//task 12

// function longest(str)
// {
//   var array1 = str.split(' ');
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// alert(longest('Web Development Tutorial.'))

//task 13

// function occ(str , letter){
//     var count = 0
//     b = str.toLowerCase()
//     for (var i = 0 ; i < b.length ; i++){
//         if (b[i] === letter){
//             count++
//         }
//     }
//     return count
// }

// var lettr = 'a'
// var string = 'My name is hassan'
// document.write('The occurence of the letter \''+lettr+'\' in  '
//              + '\''+string+ '\' '+' is '+occ(string , lettr) + ' times')

//task 14

// function calcCircumference(r){
//     const pi = 3.142
//     var cr = 2 * pi * r
//     return cr 
// }

// function calcArea(r){
//     const pi = 3.142
//     var ar = pi * r * r
//     return ar
// }
// var radius = +prompt('The radius of given circle is :')
// document.write('Radius = '+radius+'<br>Circumference of Circle = '+calcCircumference(radius)+'<br>Area of circle = '+calcArea(radius))