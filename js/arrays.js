var numbers = new Array(
	new Array(2, 45, 91),
	new Array(90, 47, 82),
	new Array(10, 5, 32),
	new Array(8, 78, 30),
	new Array(25, 1, 27),
	new Array(38, 82, 8)
);

var string = ""; // Сюда будем помещать каждый ряд массива
for (var i = 0; i < numbers.length; i++) {
	string = ""; // Каждый раз очищаем строку
	for (var j = 0; j < numbers[i].length; j++) {
		string += numbers[i][j] + " "; // Помещаем поочереди целый ряд
	}
	
	console.log(string + "\n"); // Выводим один ряд массива
}