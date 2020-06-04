// старый синтаксис
var a = 1;

// новый синтаксис
let name = 'Joe'
name = 'Bob'

const pi = 3.1415;
// pi = 4; изменение значение константы не может быть изменено

const names = ['Peter', 'Bob']
names.push('Ivan')
console.log(names)
// names = [] вызовет ошибку

const person = {
    'name': 'Alice',
    'age': 22,
}
person.name = 'Bob'
// person = 'Alice' вызовет ошибку

// Область видимость let - блок кода
