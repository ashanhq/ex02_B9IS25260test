function euler1() {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    document.getElementById("result").innerText =
        "Sum of multiples of 3 or 5 below 1000 is: " + sum;
}
