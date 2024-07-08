function generateFibonacci() {
    const numInput = document.getElementById('numInput').value;
    const resultElement = document.getElementById('result');
    const num = parseInt(numInput);

    if (isNaN(num) || num <= 0) {
        resultElement.textContent = 'Please enter a positive integer.';
        return;
    }

    const fibonacciSeries = [];
    let a = 0, b = 1, temp;

    for (let i = 0; i < num; i++) {
        fibonacciSeries.push(a);
        temp = a + b;
        a = b;
        b = temp;
    }

    resultElement.textContent = 'Fibonacci Series: ' + fibonacciSeries.join(', ');
}
