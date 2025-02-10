// 概要: オブジェクトの配列から特定のキーの値をカウントする
;(() => {
  interface Item {
    name: string
    category: string
  }

  const items: Item[] = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Banana', category: 'Fruit' },
    { name: 'Carrot', category: 'Vegetable' },
    { name: 'Lettuce', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' },
  ]

  const categoryCount = items.reduce<{ [key: string]: number }>((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1
    return acc
  }, {})

  console.log(categoryCount)
  // 出力: { Fruit: 3, Vegetable: 2 }
})()
