/*Description:
Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.*/

//Solution:
function combine(...objects) {
    const result = {};

    for (const obj of objects) {
        for (const key of Object.keys(obj)) {
            if (result[key]) {
                result[key] += obj[key]; // Если ключ уже есть, добавляем значение
            } else {
                result[key] = obj[key]; // Если ключа нет, создаем его
            }
        }
    }

    return result;
}

// Пример использования:
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const combined = combine(objA, objB);
console.log(combined); // { a: 13, b: 20, c: 36, d: 3 }