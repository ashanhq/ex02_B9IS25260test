// Compute the sum of numbers in list l that are multiples of a or b
let listEuler1 = (a, b, l) => {
    let sum = 0;
    for (let num of l) {
        if (num % a === 0 || num % b === 0) {
            sum += num;
        }
    }
    return sum;
};

// Compute the sum of numbers in list l that are multiples of any element in list a
let listEuler2 = (a, l) => {
    let sum = 0;
    for (let num of l) {
        for (let div of a) {
            if (num % div === 0) {
                sum += num;
                break; // prevent counting the same number twice
            }
        }
    }
    return sum;
};

// Same as listEuler2 but supports any length of list a (generalized)
let listEuler3 = (a, l) => {
    let sum = 0;
    for (let num of l) {
        for (let div of a) {
            if (num % div === 0) {
                sum += num;
                break;
            }
        }
    }
    return sum;
};

// ---- Event Functions ----

// Exercise 3 - fixed and working
let eulerlist = () => {
    let a = 2;
    let b = 3;
    let l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
    let result = listEuler1(a, b, l);
    alert(`Sum of multiples of ${a} or ${b} in list l = ${result}`);
};

// Part 1: list a of length 2
let euler2Lists = () => {
    let a = [2, 3];
    let l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
    let result = listEuler2(a, l);
    alert(`Sum of multiples of [${a}] in list l = ${result}`);
};

// Part 2: list a of any length
let euler2Lists1 = () => {
    let a = [2, 3, 5];
    let l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
    let result = listEuler3(a, l);
    alert(`Sum of multiples of [${a}] in list l = ${result}`);
};
