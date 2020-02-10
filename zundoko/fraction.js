for(;;){
  const molecule1 = Math.floor( Math.random() * 8 ) + 1;
  const molecule2 = Math.floor( Math.random() * 8 ) + 1;
  const molecule3 = Math.floor( Math.random() * 8 ) + 1;
  const denominator1 = Math.floor( Math.random() * 88 ) + 10;
  const denominator2 = Math.floor( Math.random() * 88 ) + 10;
  const denominator3 = Math.floor( Math.random() * 88 ) + 10;
  
  // 関数を定義する。通分のアルゴリズム。
  let moleculeCalculator = (molecule1,molecule2,molecule3,denominator1,denominator2,denominator3) => {
    return ((molecule1 * denominator2 * denominator3) +
    (molecule2 * denominator1 * denominator3)
    +(molecule3 * denominator1 * denominator2));
  }
  
  let denominatorCalculator = (denominator1,denominator2,denominator3) => {
    return (denominator1 * denominator2 * denominator3);
  }
  
  if(moleculeCalculator(molecule1,molecule2,molecule3,denominator1,denominator2,denominator3) - denominatorCalculator(denominator1,denominator2,denominator3) == 0){
    console.log("正解！" + denominator1 + "分の" + molecule1 + "たす"
    + denominator2 + "分の" + molecule2 + "たす"
    + denominator3 + "分の" + molecule3 + "は「1」です！");
    break;
  }
  }