const calculator = (random) => {
    return random;
    };

const zundoko = ["ずん" , "どこ"];
var random1 = Math.floor( Math.random() * 2 );
var randomZundoko1 = calculator (zundoko[random1]);

var random2 = Math.floor( Math.random() * 2 );
var randomZundoko2 = calculator (zundoko[random2]);

var random3 = Math.floor( Math.random() * 2 );
var randomZundoko3 = calculator (zundoko[random3]);

var random4 = Math.floor( Math.random() * 2 );
var randomZundoko4 = calculator (zundoko[random4]);

var random5 = Math.floor( Math.random() * 2 );
var randomZundoko5 = calculator (zundoko[random5]);

var containerZundoko = (answerCheck) =>{
    console.log(answerCheck);
    if (answerCheck == "ずんずんずんずんどこ"){
        console.log("きよし！");
    };
};

containerZundoko(randomZundoko1+randomZundoko2+randomZundoko3+randomZundoko4+randomZundoko5);
