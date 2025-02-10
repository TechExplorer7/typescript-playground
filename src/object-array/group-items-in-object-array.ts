// 概要: オブジェクトの配列を指定のキーでグループ化する
;(() => {
  interface Person {
    name: string
    age: number
  }

  const people: Person[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 25 },
  ]

  const groupedByAge = people.reduce<{ [key: number]: Person[] }>(
    (acc, person) => {
      const age = person.age
      if (!acc[age]) {
        acc[age] = []
      }
      acc[age].push(person)
      return acc
    },
    {},
  )

  console.log(groupedByAge)
  // 出力:
  // {
  //   '25': [ { name: 'Bob', age: 25 }, { name: 'David', age: 25 } ],
  //   '30': [ { name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 } ]
  // }
})()
