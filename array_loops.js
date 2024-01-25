// while loop
// var a=1;
// while(a<=10)
// {
//     console.log(a**3);
//     a++;
// }

// var a=12;
// do
// {
//     console.log(a);
//     a++;
// }
// while(a<=10);

// var num;
// for(num=1;num<=10;num+=2)
// {
//     console.log(num +" is odd number");
// }

// ARRAYS

// var names=["raj","rani","rajani","ragini","ramani"];
// console.log(names[0],names[2]);
// for(var num=0;num<=4;num++)
// {
//     console.log(names[num]);
// }

var names=["raj","rani","rajani","ragini","ramani"];
var num=0;
while(num<=4)
{
    console.log(names[num]);
    num++;
}


var abc=[1,2,3,4,5];
var bcd=abc;
abc[2]=37;
console.log(bcd);
