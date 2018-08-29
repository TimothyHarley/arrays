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