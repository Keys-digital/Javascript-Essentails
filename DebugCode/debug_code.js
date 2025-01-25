function performOperations() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // Introduce a debugger statement to pause execution and check the flow
    debugger;

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        
        let addResult = add(num1, num2);
        let multiplyResult = multiply(num1, num2);
        let divideResult = divide(num1, num2);

        // Display all results
        displayResults(addResult, multiplyResult, divideResult);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Division by zero error';
    }
    return a / b;
}

function displayResults(addResult, multiplyResult, divideResult) {
    // Display the results in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Addition Result: ${addResult}, Multiplication Result: ${multiplyResult}, Division Result: ${divideResult}`;
}
