const OPERATIONS = {
    sum: '+',
    substract: '-',
    multiply: '*',
    divide: '/',
    exponentiation: '^',
    square: 'Sq'
}

function calculate({ a, b, operation }) {
    let result;

    switch(operation) {
        case OPERATIONS.sum:
            result = sum(a, b);
            break;
        
        case OPERATIONS.substract:
            result = substract(a, b);
            break;

        case OPERATIONS.multiply:
            result = multiply(a, b);
            break;

        case OPERATIONS.divide:
            result = divide(a, b);
            break;

        case OPERATIONS.exponentiation:
            result = exponentiation(a, b);
            break;

        case OPERATIONS.square:
            result = square(a);
            break;

        default:
            break;
    }

    return result;
}