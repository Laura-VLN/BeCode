let selectElementsStartingWithA = (array) => {
    return array.filter((word) => word.startsWith("a"));
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(str => /^[aeiouy]/i.test(str));
}

let removeNullElements = (array) => {
    return array.filter(function(val) { return val !== null; });
}

let removeNullAndFalseElements = (array) => {
    return array.filter((el) => el != null && el !== false);
}

let reverseWordsInArray = (array) => {
    return array.map((el) => el.split("").reverse().join(''));
}

let everyPossiblePair = (array) => {
    return array.sort().map((el, i) => {
        if (i === array.length - 1) { 
            return [array[i], array[0]]; 
        } 
        else { 
            return [array[i], array[i + 1]]; 
        }
    }).map((el) => el.sort()).sort();
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3, array.lenght);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

let getFirstHalf = (string) => {
    return string.slice(0, Math.round(string.length / 2));
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    return array.filter((el) => el == el.split("").reverse().join('')).length;
}

let shortestWord = (array) => {
    return array.reduce((a, b) => a.length <= b.length ? a : b)
}

let longestWord = (array) => {
    return array.reduce((a, b) => a.length < b.length ? b : a, "");
}

let sumNumbers = (array) => {
    return array.reduce((a, b) => a + b, 0);
}

let repeatElements = (array) => {
    return array.concat(array);
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    return array.reduce((a,b) => a + b, 0) / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    return  array.slice(0, array.find((el) => el > 5));
}

let convertArrayToObject = (array) => {
    return array.reduce((word, value, index) => {
        if (index % 2 === 0) { 
            word[value] = array[index + 1]; 
        }
        return word;
    }, {});
}

let getAllLetters = (array) => {
    return [...new Set(array)].join('').split('').sort();
}

let swapKeysAndValues = (object) => {
    return Object.assign({}, ...Object.entries(object).map(([a,b]) => ({ [b]: a })));
}

let sumKeysAndValues = (object) => {
    return Object.keys(object).reduce((element, key) => {
        return (element = element + parseInt(object[key]) + parseInt(key));
    }, 0);
}

let removeCapitals = (string) => {
    return string.replace( /[A-Z]/g, '' );
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString();
}

let getDomainName = (string) => {
    return string.split('@').pop().split('.com').shift();
}

let titleize = (string) => {
    let array = string.split(" ")
    let arr = [];
    let str;
    for (let i = 0; i < array.length; i++)
    {
        if (i === 0 || array[i].length > 3 || array[i -1].endsWith("."))
        {
            array[i] = array[i].charAt(0).toUpperCase() + array[i].substr(1);
            arr.push(array[i]);
        }
        else
            arr.push(array[i]);
    }
    str = arr.join(" ");
    return str;
}

let checkForSpecialCharacters = (string) => {
    return string.match(/^[a-zA-Z0-9 ]*$/) === null;
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    return number ? (number * factorial(number-1)) : 1;
}

let findAnagrams = (string) => {
    let anagram = [string];
    for (let x = 0; x < anagram.length; x++) {
        const base = anagram[x].split('');
        for (let i = 0; i < base.length; i++) {
            let ana = base[i];
            for (let j = 0; j < base.length; j++) {
                if (i != j) ana += base[j];
            }
            anagram.push(ana);
            anagram.push(reverseWordsInArray([ana])[0]);
        }
        anagram = [...new Set(anagram)];
    }
    return anagram;
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * 5/9);
}

let letterPosition = (array) => {
    return array.map((el) => el.toUpperCase().charCodeAt(0) - 64);
}
