function fibonacciGenerator(num) {
    var fib = [0, 1];
    for (var i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib);
}

fibonacciGenerator(10);