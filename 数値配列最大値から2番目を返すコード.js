
//　0　を起点に比較を繰り返し最大値より小さく、かつ比較値より大きい数値を返す
function getSecondLargest(nums) {
    let max1 = 0;
    for (const e of nums) {
        if (max1 < e) {
            max1 = e;
        }
    }
    
    let max2 = 0;
    for (const e of nums) {
        if (max2 < e && e < max1) {
            max2 = e;
        }
    }
    
    return max2;
}

// sort基準メソッドを定義して、最後尾になった要素より一つ前を比較
// 一致するならもう一つ前のインデックス、異なるならその要素を返す


function comparator(a, b) {
    return a - b;
}

function getSecondLargest(nums) {

    nums.sort(comparator);
    const max = nums[nums.length - 1];

    let index = nums.length - 1;
    while (index--) {
        if (nums[index] != max) {
            return nums[index];
        }
    }
    
    return max;
}