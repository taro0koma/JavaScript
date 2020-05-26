
// for of 構文で加算を繰り返す
// prototype記法でメソッドを追加する
class Polygon {
    constructor(sides) {
        this.s = sides;
    }
}

Polygon.prototype.perimeter = function() {
    var peri = 0;
    
    for (let e of this.s) {
        peri += e;
    }
    
    return peri;
}

// prototype記法を使わない
class Polygon {
    constructor(sides) {
        this.s = sides;
    }
    
    perimeter() {
        var peri = 0;
    
        for (let e of this.s) {
            peri += e;
        }
    
        return peri;
    }
}

// reduceメソッドで配列加算を完成させる
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    
    perimeter() {
        return this.sides.reduce( (a, b) => a + b );
    }
}