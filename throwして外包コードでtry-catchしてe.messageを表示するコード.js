function isPositive(a) {
    let answer = "YES"

    if(a<0){
        throw({message:"Negative Error"})
        // throw new Error("Negative Error")

    } else if(a===0){
        throw({message:"Zero Error"})
        // throw new Error("Zero Error")
    } else {
        //a>0
        return answer
    }
}


function main() {
    const n = +(readLine());
    
    for (let i = 0; i < n; i++) {
        const a = +(readLine());
      
        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}