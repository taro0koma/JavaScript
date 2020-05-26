function regexVar(){
    const re = new RegExp(/[0-9]+/gm);
    // もしくは\d+
    return re
}

function main() {
    const re = regexVar();
    const s = readLine();
    
    const r = s.match(re);
    
    for (const e of r) {
        console.log(e);
    }
}