// for(const a in b){ 処理} の記述

function getCount(objects) {
    let c = 0;
    
    for (const o in objects) {
        if (objects[o].x == objects[o].y) {
            c++;
        }
    }
    
    return c;
}


// b.foreach(function(a){ 処理})　の記述
function getCount(objects) {
    let count = 0;
    objects.forEach(function (o) {
        if (o.x == o.y) {
            count++;
        }
    });

    return count;
}