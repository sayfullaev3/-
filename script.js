let dec = +prompt("Введите дату")
if (dec >= 1 && dec <= 10) {
    alert("Это 1 декада")
} else if (dec >= 11 && dec <= 20) {
    alert("Это 2 декада")
} else if (dec >= 21 && dec <= 31) {
    alert("Это 3 декада")
} else {
    alert("Вы не правильно ввели дату")
}