/* function additionWithoutCarrying(param1, param2) {
 let num1_arr = Array.from(String(param1), Number);
 let num2_arr = Array.from(String(param2), Number);
 let result_arr = [];
 
 if(num1_arr.length>num2_arr.length)
 {
     let unshiftCount = num1_arr.length-num2_arr.length;
     for(let i=0; i<unshiftCount; i++)
     {
         num2_arr.unshift(0);
     }
 }
 else if(num2_arr.length>num1_arr.length)
 {
     let unshiftCount = num2_arr.length-num1_arr.length;
     for(let i=0; i<unshiftCount; i++)
     {
         num1_arr.unshift(0);
     }
 }
 
 for(let i=num1_arr.length-1; i>=0; i++)
 {
     let addition = num1_arr[i]+num2_arr[i];
     if(addition>9)
     {
         let temp_arr = Array.from(String(addition), Number);
         temp_arr.shift();
         addition = temp_arr[0];
     }
     result_arr.unshift(addition);
 }
 let result = parseInt(result_arr.join(""));
 return result;
}

additionWithoutCarrying(456, 1734) */

/* function add_two_int_without_carrying(n1, n2) {
    let result = 0;
    let x = 1;
    while (n1 > 0 || n2 > 0) {
        result += x * ((n1 + n2) % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
        x*= 10;
    }
    return result;
} */
/* console.log(add_two_int_without_carrying(456, 1734))
console.log(add_two_int_without_carrying(200, 900)) */


/* var bar = 5;
function foo(bar) {
    if (bar >= 5){
        bar = 'zzz';
    } else {
        let bar = "qux"
    }
    console.log(bar)
}

foo(2);
foo(6)
console.log(bar) */

/* class Screen {

    constructor(width, height) {
      this.width= width;
      this.heigth = height;   
    }
  
    diagonal() {
        console.log(this.height);
      return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
    }
    
    dimensions(definition) {
      var dimensions = definition.split('x')
      this.width = parseInt(dimensions[0]);
      this.height = parseInt(dimensions[1]);
    }
  }
  
  let width = 500;
  let height = 600;
  let screen = new Screen(width, height);
  screen.width = 800;
  screen.height = 600;
  console.log(screen);
  console.log(screen.diagonal());
  screen.dimensions = '400x300';
  console.log(screen.diagonal());  */

 /*  function roman_to_Int(str1) {
    if(str1 == null) return -1;
    var num = char_to_int(str1.charAt(0));
    console.log(num);
    var pre, curr;
    
    for(var i = 1; i < str1.length; i++){
    curr = char_to_int(str1.charAt(i));
    console.log("IN LOOP Current", curr);
    pre = char_to_int(str1.charAt(i-1));
    console.log("IN LOOP previous", pre);
    console.log(curr <= pre);
    if(curr <= pre){
    num += curr;
    } else {
        console.log(num, pre*2, curr);
    num = num - pre*2 + curr;
    }
    }
    
    return num;
    }
    
    function char_to_int(c){
    switch (c){
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
    }
    }

    console.log(roman_to_Int('IX')); */

    /* let array = [1, 3 , -3]
    const result = array.map((x, i) => {
        if(i !== array.length - 1) {
           return x - array[i + 1]
        } else {
            return null
        }
    });
    console.log(result);
    console.log(Math.max(...result));

    console.log(Math.random() < 0.5 ? -1 : 1); */

    const first = "balloon";
    const second = "baoollnnololgbax";
    const removeAll = (first, second) => {
    const newArr = second.split("").find(el => {
        return !first.includes(el);
    });
    console.log(newArr)
    // return newArr.join("");
    };
    console.log(removeAll(first, second));
