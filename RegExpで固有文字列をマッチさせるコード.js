function regexVar() {
    const re= new RegExp(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)\s?[a-z|A-Z]+$/)
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(!!s.match(re));
}