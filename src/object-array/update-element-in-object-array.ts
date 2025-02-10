// 概要: オブジェクトの配列の特定の要素を更新する
;(() => {
  interface Person {
    name: string
    age: number
  }

  const people: Person[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
  ]

  // `age` を1年増やした新しい配列を作成
  const updatedPeople = people.map((person) => ({
    ...person,
    age: person.age + 1,
  }))

  console.log(updatedPeople)
  // 出力:
  // [
  //   { name: 'Alice', age: 31 },
  //   { name: 'Bob', age: 26 },
  //   { name: 'Charlie', age: 36 }
  // ]
})()
