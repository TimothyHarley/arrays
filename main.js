const cats = ['fluffy', 'spike', 'killer'];
console.log('1st cat is',cats[0]);

const favoriteAnimal = 'cow, bear, dog, cat';
favoriteAnimalArray = favoriteAnimal.split(','); // ['c', 'o', 'w']
console.log ('favoriteAnimalArray', favoriteAnimalArray);

const numArray = [1 ,2 ,3 ,4 ,5];
const newNum = numArray.join('');
console.log('newNum is', newNum);


//mini chalenge

const palindromeChecker = (word) => {
    //yes if it's a palindrome
    //no if it is not a palindrome 
   const wordArray = word.split('');
   const reverseArray = wordArray.reverse().join('');
   if (word===reverseArray) {
    console.log ('yes')
   } else {
    console.log ('no')
   }; 
};

palindromeChecker('mom'); //yes
palindromeChecker('monkeybutt'); //no
palindromeChecker('racecar'); //yes

//adding or taking away from arrays

let animals = ['spiders','snakes','moles','gophers','big spiders'];
const lastItem = animals.pop(); //big spiders 
const firstItem = animals.shift(); //spiders
animals.push('bats');
animals.unshift('baby hippos');

/////////////////////////////////
//       for loops            //
///////////////////////////////

//1. what is your starting value?  0
//2. what is your stopping value?  something.length
//3. how are you incrementing?  +1

//for(starting; stopping; increment){
//    do something here
//}

for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}