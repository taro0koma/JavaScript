/**
 1～ｎの数値配列において、隣り合う数値同士をビット演算する
 ｋのつぎに一番大きい解を求める
*/

function getMaxLessThanK(n, k) {
    let max_anb = 0;
    for (let b = n; b > 0; b--) {
        for (let a = b-1; a > 0; a--) {
            if ((a & b) < k && (a & b) > max_anb){
                max_anb = (a&b);
            }
        }
    }
    return max_anb;
}
