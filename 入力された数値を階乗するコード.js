function factorial(n) {
    // A variable that holds the running value of factorial during calculation
    let factorial = n;
    
    // Note that this loop decrements the value of n during each iteration
    while(n-- > 1) {
        factorial = factorial * n;
    }

    return factorial;
}

functtion factorial(n) {
    let factorial = n

    while(n-- > 1) {
        factorial=factorial*n
    }

    return factorial
}