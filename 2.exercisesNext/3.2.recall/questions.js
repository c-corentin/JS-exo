let selectElementsStartingWithA = (array) => {
    return array.filter(el => el.charAt(0) == "a")
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(el => /[aeiou]/i.test(el[0]))
}

let removeNullElements = (array) => {
    return array.filter(el => el != null)
}

let removeNullAndFalseElements = (array) => {
    return array.filter(el => el !== false && el !== null)
}

let reverseWordsInArray = (array) => {
    return array.map(word => word.split("").reverse().join(''))
}

let everyPossiblePair = (array) => {
    return array.sort().map((elm, i, arr) => arr.filter(el => el !== elm)).reverse()
}

let allElementsExceptFirstThree = (array) => {
    return array.splice(3, array.length - 3)
}

let addElementToBeginning = (array, element) => {
    array.unshift(element)
    return array
}

let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}

let getFirstHalf = (string) => {
    return string.split('').splice(0, Math.ceil(string.length / 2)).join('')
}

let makeNegative = (number) => {
    return -Math.abs(number)
}

let numberOfPalindromes = (array) => {
    return array.filter(word => word === word.split('').reverse().join('')).length
}

let shortestWord = (array) => {
    return [...array.sort((a, b) => a.length - b.length)][0]
}

let longestWord = (array) => {
    return [...array.sort((a, b) => b.length - a.length)][0]
}

let sumNumbers = (array) => {
    return array.reduce((a, b) => a + b)
      
}

let repeatElements = (array) => {
    return array.concat(array)
}

let stringToNumber = (string) => {
    return parseInt(string)
}

let calculateAverage = (array) => {
    return sumNumbers(array)/array.length
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.splice(array.filter(num => num <= 5), 6)
}

let convertArrayToObject = (array) => {
    return Object.fromEntries(array.map((el, i, arr) => (i % 2 == 1) ? [arr[i - 1], arr[i]] : null).filter(el => el !== null))
    
    /* let entries = []
    let i
    for(i=0; i<=4; i+=2) {
          let entry = [array[i], array[i+1]]
          entries.push(entry)
    }
    let obj = Object.fromEntries(entries)
    return obj */
}

let getAllLetters = (array) => {
    let letters = array.join("")
    letters = new Set(Array.from(letters).sort())
    return Array.from(letters)

    // [...new Set(array.join().split("").filter(val => val != ",").sort())] plus court
}

let swapKeysAndValues = (object) => {
    return Object.fromEntries(Object.entries(object).map(([key, value]) => [value, key]))
}

let sumKeysAndValues = (object) => {
    return Object.entries(object).join(',').split(',').reduce((a, b) => Number(a) + Number(b)) //plus court
}

let removeCapitals = (string) => {
    return string.replace(/[A-Z]/g, "")
}

let roundUp = (number) => {
    return Math.ceil(number)
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString()
}

let getDomainName = (string) => {
    return string.slice(string.indexOf("@") + 1, string.lastIndexOf("."))
        /*let dom;
        if (/www/.test(string)) {
          dom = string.split('.')
          return dom[1]
        } else if (/http/.test(string)) {
          dom = string.split('//')
          dom = dom[1].split('.')
          return dom[0]
        } else {
          dom = string.split('.')
          return dom[0]
        }
     bien essayé, email pas url*/
}

let titleize = (string) => {
    return string.replace(/(^[^ ])|(?<= )([^ at])|(?<=\. )([^ ])/g, (elm) => elm.toUpperCase())
}

let checkForSpecialCharacters = (string) => {
    return /\W/g.test(string)
}

let squareRoot = (number) => {
    return Math.sqrt(number)
}

let factorial = (number) => {
    return number <= 1 ? 1 : (number * factorial(number - 1))
}

let findAnagrams = (string) => {
    let anagrams = []
    const ANAGRAMS = (word, anagram = '') => {
          if (!word) {
                anagrams.push(anagram)
          }

          for(let i=0; i<word.length; i++) {
                anagram += word[i]
                ANAGRAMS(word.slice(0, i) + word.slice(i+1), anagram)
                anagram = anagram.slice(0, anagram.length -1)
          }
    }

    ANAGRAMS(string, anagram = '')
    return anagrams
 }


let convertToCelsius = (number) => {
    return Math.round((5/9) * (number - 32))
}

let letterPosition = (array) => {
    return array.map(e=>{
        return e.toLowerCase().charCodeAt(0)-96;
      })
}
