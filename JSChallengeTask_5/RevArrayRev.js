function reverseArr(myNumber) {

    var myArrayNew = new Array;    
   
   for (myNumCount= myNumber.length-1; myNumCount >= 0; myNumCount--){
   
    myArrayNew.push(myNumber[myNumCount]);

   }

return myArrayNew;
   
}

var myNum1=[1,2,3,4,5,6,7,8,9];

var myRev = reverseArr(myNum1);

console.log('This is my Original No' + ' ' + myNum1);

console.log('This is my Reverse No' + ' ' + myRev);