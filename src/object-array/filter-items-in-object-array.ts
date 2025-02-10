// 概要: オブジェクトの配列から条件に合う要素だけを抽出する
;(() => {
  interface Person {
    name: string
    age: number
  }

  const people: Person[] = [
    { name: 'Alice', age: 10 },
    { name: 'Bob', age: 19 },
    { name: 'Charlie', age: 25 },
  ]

  // 30歳以上の人だけをフィルタリング
  const adults = people.filter((person) => person.age >= 20)

  console.log(adults)
  // 出力:
  // [ { name: 'Charlie', age: 25 } ]
})()
