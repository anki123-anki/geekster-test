       // program for printing prime number  in range 1 to n(taking input from user)

 higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${1} to ${"n"} are:`);

for (i = 1; i <= higherNumber; i++) {
    flag = 0;
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}