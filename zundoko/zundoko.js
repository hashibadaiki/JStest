//ズンとドコをランダムに生成してズン*4になったらドコ+キ・ヨ・シ！で終了
const [zun,doko] = ['ズン','ドコ']
let zunCount = 0
const kiyoshi = () => {
  while (zunCount < 4) {
    const randomNumber = Math.random() * 2 | 0
    if (randomNumber === 0) zunCount++
    else zunCount = 0
    console.log([zun,doko][randomNumber])
  }
  console.log(doko)
  console.log('キ・ヨ・シ！')
}
kiyoshi()