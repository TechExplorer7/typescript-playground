// 概要: CSVから読み取ったようなデータを行から列に変換してオブジェクト形式にする
;(() => {
  // CSVデータ
  // 1行目はヘッダー、2行目以降はデータ
  const csvData: string[][] = [
    ['name', 'age', 'city'],
    ['Alice', '30', 'New York'],
    ['Bob', '25', 'Los Angeles'],
    ['Charlie', '35', 'San Francisco'],
  ]

  // `reduce` を使って行をオブジェクト形式に変換
  const transposedData = csvData.reduce(
    (acc, row, rowIndex) => {
      if (rowIndex === 0) {
        // 最初の行（ヘッダー）はオブジェクトのキーとして使用
        row.forEach((header) => {
          acc[header] = [] // ヘッダーをキーとして空の配列を作成
        })
      } else {
        // それ以降の行のデータを対応するキーに追加
        row.forEach((cell, columnIndex) => {
          const key = csvData[0][columnIndex] // ヘッダーの値をキーとして使用
          acc[key].push(cell) // セルの値を対応する配列に追加
        })
      }
      return acc
    },
    {} as { [key: string]: string[] },
  ) // 初期値は空のオブジェクト

  // 結果を出力
  console.log(transposedData)
  // 出力例:
  // {
  //   name: [ 'Alice', 'Bob', 'Charlie' ],
  //   age: [ '30', '25', '35' ],
  //   city: [ 'New York', 'Los Angeles', 'San Francisco' ]
  // }
})()
