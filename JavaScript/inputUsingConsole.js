// Import the readline module for console input
const readline = require('readline');

function showMenu() {
    const num1 = 10;
    const num2 = 2;

    console.log(`\n1. Addition`);
    console.log(`2. Subtraction`);
    console.log(`3. Multiplication`);
    console.log(`4. Division`);
    console.log(`5. Modulo`);
    console.log(`0. Exit`);
    
    // Create readline interface
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Arithmetic operation choice: ', function (userInput) {
        switch (userInput) {
            case "1":
                console.log(`Result: ${num1 + num2}`);
                break;
            case "2":
                console.log(`Result: ${num1 - num2}`);
                break;
            case "3":
                console.log(`Result: ${num1 * num2}`);
                break;
            case "4":
                console.log(`Result: ${num1 / num2}`);
                break;
            case "5":
                console.log(`Result: ${num1 % num2}`);
                break;
            case "0":
                console.log("Exiting...");
                rl.close();
                return; // exit the function and end loop
            default:
                console.log('Wrong choice');
        }

        rl.close();

        // Loop again after a small delay
        setTimeout(showMenu, 100);
    });
}

// Start the loop
showMenu();
