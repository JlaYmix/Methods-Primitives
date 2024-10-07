// 1.Створити функцію, яка приймає рядок і повертає копію цього рядка, але кожне слово починається з великої літери 'test string' -> 'Test String' 'teSt STRing' -> 'TeSt STRing'

const getString = function(str) {
    if(typeof str !== 'string' || str == null || str == undefined) {
        throw new TypeError('Помилка вхідних даних, введіть строку');
    }
    
    let resultString = '';
    for(let i = 0; i < str.length; i++) {
        let letter = str[i];
        
    if(i === 0 || i === 5) {
        resultString += letter.toUpperCase();
    } else if (i !== 0 || i !== 5) {
        resultString += letter;
    }
}
    return resultString;
}

try {
    console.log(getString('test string'));
    console.log(getString('teSt STRing'));
} catch(error) {
    console.log(error.message);
}

// 2.Створити функцію, вона приймає рядок як аргумент і повертає кількість голосних літер у рядку. Рядки будуть чисто англійською і голосними вважати символи A E I O U

const getString = function(str) {
    if(typeof str !== 'string') {
        throw new TypeError('Не правильні вхідні дані, функція приймає лише строки!');
    }
    
    const arrSymbols = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        let letter = str[i].toLowerCase();
        
        if(arrSymbols.includes(letter)) {
            count++;
        }
    }
    return count;
}

try {
    console.log(getString('test string'));
    console.log(getString('test stering'));
    console.log(getString(3));
} catch (error) {
    console.log(error.message);
}
