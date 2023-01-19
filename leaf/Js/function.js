// // function declaration:

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(5,6));

// // function expression:

// const count = function (array){
//     return array.length;
// } 

// const method = {
//     number:[1,5,8],
//     sum:function[
//         return this.number.
//     ]
// }

// shot();

// function shot() {
//   console.log("I am created using function declaration");
// }


// // call back using function declaration:

// function isSmaller(num) {
//     return num < 5;
//   }
//   const arr = [1, 8, 7, 4 ,3, 10];
//   console.log(arr.filter(isSmaller));


  // call back using function expression:

  //const arr = [1, 8, 7, 4 ,3, 10];
//console.log(arr.filter(num => num < 5));

// Generate Function generates three 
    // different numbers in three calls
    // function * fun()
    // {
    //     yield 10;
    //     yield 20;
    //     yield 30;    
    // }
      
    // // Calling the Generate Function
    // var gen = fun();
    // console.log(gen.next().value);
    // //console.log(gen.next().value);
    // //console.log(gen.next().value);


    // Generate Function generates an 
    // infinite series of Natural Numbers 
    // function * nextNatural()
    // {
    //     //yield 10;
    //     console.log("hi sandy");
    //     //yield 10;
    //     console.log("hi candy");
          
    // }
      
    // // Calling the Generate Function
    // var gen = nextNatural();
    // console.log(gen.next());
    // console.log(gen.next());
    // //console.log(gen.next());



//     let map = new Map();

// map.set('1', 'str1');   // a string key
// map.set(1, 'num1');     // a numeric key
// map.set(true, 'bool1'); // a boolean key

// // remember the regular Object? it would convert keys to string
// // Map keeps the type, so these two are different:
// alert( map.get(1)   ); // 'num1'
// alert( map.get('1') ); // 'str1'

// alert( map.size ); // 3


// let a={true:"sandy",2:"candy"};
// console.log(a[true])


// let john = { name: "John" };

// // for every user, let's store their visits count
// let visitsCountMap = new Map();

// // john is the key for the map
// visitsCountMap.set(john, "sandy");

// alert( visitsCountMap.get(john) ); // 23


// let john = { name: "John" };
// let ben = { name: "Ben" };

// let visitsCountObj = {}; // try to use an object

// visitsCountObj[ben] = 234; // try to use ben object as the key
// visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// // That's what got written!
// // alert( visitsCountObj["[object Object]"] ); // 123
// // alert( visitsCountObj["[object Object]"] ); // 123

// console.log(ben,john);
// console.log(visitsCountObj)
// console.log(typeof john)




// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set keeps only unique values
// //alert( set.size ); // 3


// //  for (let user of set) {
// //   alert(user.name); // John (then Pete and Mary)
 


// console.log(set.);



// let arr=[1,2,3,4,5];

// let s = new Set(arr);

// s.add(10);
// s.add(2);
// s.delete(2);
// s.add(2);
// s.clear();
// console.log(s);


// let arr1=[1,2,3,4,5,5,6,6,7,7];

// let s=new Set([1,12,3,4,4,5,5,6]);
// // console.log(s);

// let newArray=[s];
// console.log(newArray);


obj1={
    name:"abc"
}

obj2={
    name:"pqr"
}

weakset=new WeakSet(obj1);
console.log(weakset);