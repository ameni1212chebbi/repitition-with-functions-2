 //Q1
 function sum(number) {
    if(number===0){
        return 0;
    }
return number + sum(number-1);
    
    }
undefined
sum(3)
6
//Q2
function factorial(number) {
    if(number===0){
    return 1;
     }
 return number*factorial(number-1);
 }
 undefined
 factorial(3)
 6
 //Q3
 function repeatString(string, number) {
    if(number===0){ 
    return "" ;
    }
    if(number===1){
        return string 
    }
    return string.concat(string);
}
undefined
repeatString("dog", 1)
"dog"
repeatString("dog", 2)
"dogdog"
//Q4
function fibonacci(number) {
    if(number<=1){
        return 1;

    }
    return fibonacci(number-1)+fibonacci(number-2)
    }
undefined
fibonacci(5)
8
fibonacci(6)
13
//Q5
function multiplyBy10(firstNumber, secondNumber) {
    if(secondNumber===0){
       return 1 
    }
    return firstNumber * Math.pow(10,secondNumber)
     }
 
 undefined
 multiplyBy10(4, 3)
 4000
 multiplyBy10(5, 2)
 500
 //Q6
 
    function sumBetween(start, end) {
     if(end === start){
         return 0 
     }
      return end + sumBetween(start , end-1)
 }
     sumBetween(4,7)
     7 +  sumBetween(4,6)  
     7 +  6+  sumBetween(4,5)  
     7 + 6 + 5 + sumBetween(4,4)
     7 + 6 + 5 + 0
     18

//Q7
     function inc(x) {
        return x + 1
        }
        function dec(x) {
        return x - 1
        }
     function add(number1, number2) {
        if(number2===0){
            number1
        }
        return add(inc(number1),dec(number2))
        }
    
    //Q8
    function isEven(number) {
        if ( number === 0 ){ return true } 
      else if (number === 1 ) {return false } 
        else  { return isEven(number - 2 ) ;} } 

      //Q9

        function multiply(number1,number2){
            if(number2===0){
          return 0}
            return(number1+multiply(number1,number2-1))
            }
            undefined
          multiply(3, 2)
          6
        
        //Q10
        
        function range(start, end) {
            if(end===0){
                start
            }
            return range(inc(start),dec(end))
            } //does not work
            
            function range(start,end){
                if(end===start+1){
                    return ''
                }
                return start+1 +','+range(start+1,end)
            }
            undefined
              range(1,9)
            "2,3,4,5,6,7,8,"
            //Q11
            function stringLength(string) {
                return string.slice(string)
                }
                //Q12
                function modulo(number1, number2) {
                    if ( number1 < number2)
                    { 
                        return number1
                     }

                     var n = number1 - number2
                     return   modulo(n, number2)
                 } 
                 modulo(7,3)
                 modulo(4,3)
                 modulo(1,3)
                 1

    //Q13             
function countChars(string , char){
    if(string.length === 0){
        return 0;
    }
    if(string[0]===char){
        return 1 + countChars(string.slice(1) , char )
    }
    return 0 +  countChars(string.slice(1) , char )
}
countChars("hit","i") 0
countChars("it","i") 1
countChars("t","i") 0 
countChars("","i") 0 
1

 

                



                    //Q14
                    function indexOf(string, char) {
                        if(string.length === 0){
                            return 0;
                        }
                        if(string[0]===char){
                            return 1 + indexOf(string.slice(1) , char )
                        }
                        return 0 + indexOf(string.slice(1) , char )
                    
                        }

                //Q15
                   
                function power(base, exponent) {
                    if (exponent===0)
                    {return 1}
                    return base*power(base, exponent-1)} 
                   undefined
                     power(2, 3)
                          8
                      power(3, 4)
                         81

                //Q16
                function reverseString(string) {
                    return (string === '') ? '' : reverse(string.substr(1)) + string.charAt(0);
                  }
                  undefined
                  reverseString("Fatima")
                  "amitaF"
                
                  //Q17
                  function greatestCommonDivisor(n1, n2){
                    if(n2 === 0){
                      return n1;
                    }
                    return greatestCommonDivisor(n2, n1 % n2);
                  }
                  undefined
                  greatestCommonDivisor(50, 120)
                  10
                  //Q18

                  

        