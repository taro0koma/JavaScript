// Dateクラスのインスタンスを生成する
let today = new Date()

// Dateクラスのメソッドをインスタンス内で使う
// 注意！getMonth()は0始まりなので出力するときは+1を忘れない
// 　　　ただし文字列なので＋１するときはparseInt()やNumber()、+()を行う
// 曜日はgetDay() これは日曜０始まり["日","月","火","水","木","金","土"][0]

console.log("今日は"+ ( parseInt( today.getMonth()) + 1) +"月" +
                    today.getDate() +"日" +
                    today.getHours() +"時" +
                    today.getMinutes() + "分" +
                    today.getSeconds() + "秒" +
                    today.getMilliseconds() + "ミリ秒です。"
                    )
