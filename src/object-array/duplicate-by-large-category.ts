// 概要: オブジェクトの配列を`largeCategory`の値に応じて複製する
;(() => {
  const objects = [
    { name: 'Alice', largeCategory: 1, smallCategory: 1 },
    { name: 'Bob', largeCategory: 2, smallCategory: 1 },
    { name: 'Charlie', largeCategory: 1, smallCategory: 1 },
  ]

  const updatedObjects = objects.flatMap((obj) => {
    if (obj.largeCategory === 1) {
      // `largeCategory`が1の場合、オブジェクトを3つに複製し、`smallCategory`を1, 2, 3に設定
      return [
        { ...obj, smallCategory: 1 },
        { ...obj, smallCategory: 2 },
        { ...obj, smallCategory: 3 },
      ]
    }
    // `largeCategory`が1でない場合はそのまま返す
    return obj
  })

  console.log(updatedObjects)
  // 出力:
  // [
  //   { name: 'Alice', largeCategory: 1, smallCategory: 1 },
  //   { name: 'Alice', largeCategory: 1, smallCategory: 2 },
  //   { name: 'Alice', largeCategory: 1, smallCategory: 3 },
  //   { name: 'Bob', largeCategory: 2, smallCategory: 1 },
  //   { name: 'Charlie', largeCategory: 1, smallCategory: 1 },
  //   { name: 'Charlie', largeCategory: 1, smallCategory: 2 },
  //   { name: 'Charlie', largeCategory: 1, smallCategory: 3 }
  // ]
})()
