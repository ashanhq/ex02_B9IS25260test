// Standard Project Euler problem (sum of multiples of 3 or 5 below 1000)
function euler1() {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
    document.getElementById("result").textContent = "Euler 1 Result: " + sum;
}

// Custom version using user input from HTML
function eulerCustom() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let n = parseInt(document.getElementById("n").value);
    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) sum += i;
    }

    document.getElementById("result").textContent = `Sum of multiples of ${a} or ${b} below ${n} = ${sum}`;
}

