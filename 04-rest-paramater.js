function print_numbers(...numbers) {
    console.log(numbers)
}

print_numbers()
print_numbers(1, 2)
print_numbers(1, 2, 3)
print_numbers(1, 2, 3, 4)

// rest-параметр обязан быть последним
// в функции не может быть два rest-параметра
