// let array=[]
// const length=5

// メモリ領域を確保して配列を生成する new Array(int)
let array=new Array(5)
for(let i=0;i<array.length;i++){
    array[i]=array.length-i
}
for(let j=0;j<array.length;j++){
    console.log("array["+j+"] = "+array[j])
}