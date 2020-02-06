function firstComment(greeting){
  console.log(greeting);
}

firstComment("hello world");

const fruit = ["apple" , "banana" , "orange"];
console.log(fruit[0]);

// calculatorという関数を定義しています。randomという引数を返します
const calculator = (random) => {
  return random;
  }

// zundokoという変数に「ずん」「どこ」というデータを格納しています（配列）
const zundoko = ["ずん" , "どこ"];
// 0か1をランダムで出力します。この値はcalculatorに引き渡されます
var random = Math.floor( Math.random() * 2 );
// 0＝ずん、1＝どこなのでこれで「ずん」「どこ」のどちらかが出力されます
console.log(zundoko[random]);