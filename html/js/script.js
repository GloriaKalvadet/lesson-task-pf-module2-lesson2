// * Question 1 *//
var winningNumbers = [1, 76, 2, 78, 16, 7];
var thirdItem = winningNumbers[2];
console.log (thirdItem);

//* Question 2 *//
var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];
vegetables.push ("carrots");
console.log(vegetables);

//* Question 3 *//
var randomThings = ["pumpkin", false, 23, true, "tomato"];
for (var i = 0; i < randomThings.length; i++){
console.log(randomThings[i]);}

//* Question 4 *//
var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];
for (var i = 0; i < moreThings.length; i++) {
  var typeOfItem = typeof moreThings[i];
if (typeOfItem === "number"){
  console.log(moreThings [i]);
}
}

//* Question 5 *//
var ingredients = ["water", "flour", "toothpaste", "fish lips"];
var result = ingredients.sort();
console.log (result);

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

//* Question 6 *//
var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];
for (var i = 0; i < characters.length; i++){
  if (i % 2 ===1) {
    console.log(characters[i]);
  }
}