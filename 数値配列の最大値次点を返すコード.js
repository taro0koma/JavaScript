
// --- part1 ---//
//　0　を起点に大小比較を繰り返す
// 最大値より小さく、かつ比較値より大きい数値を返す
function getSecondLargest(nums) {
    let max1 = 0;
    // for-of 文で1要素ずつ比較を繰り返す
    for (const e of nums) {
        // より大きい数値と比較し続ける
        if (max1 < e) {
            max1 = e;
        }
    }
    
    let max2 = 0;
    for (const e of nums) {
        // 既に取得したmax1の次点になる条件設定にする
        if (max2 < e && e < max1) {
            max2 = e;
        }
    }
    
    return max2;
}

// --- part2 ---//
// 比較関数comparatorを定義し昇順にsortする。
// 最後尾になった要素より一つ前を比較
// 一致するならもう一つ前のインデックス、異なるならその要素を返す


function comparator(a, b) {
    return a - b;
}

function getSecondLargest(nums) {

    nums.sort(comparator); // 大きい順にsortするfunction(a,b){return a-b}
    
    // 注意したいのは最大値と同値の要素が複数存在すること
    // 降順にmax値と比較、max値と異なった瞬間にwhile分を脱出する
    const max = nums[nums.length - 1];
    let index = nums.length - 1;
    while (index--) {  // index値が正の数の範囲の間繰り返す
        if (nums[index] != max) {
            return nums[index];
        }
    }
    // 全部max値なら諦めてmax値を返す
    return max;
}
