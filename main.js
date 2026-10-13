//1

class Marker {
    constructor(color, inkPercentage) {
        this.color = color;
        this.ink = Math.max(0, Math.min(100, inkPercentage)); // Обмеження від 0 до 100
    }

    print(text) {
        let printedText = "";
        for (let char of text) {
            if (this.ink >= 0.5) {
                printedText += char;
                // Зменшуємо чорнило, якщо символ не є пробілом
                if (char.trim() !== "") {
                    this.ink -= 0.5;
                }
            } else {
                console.log("Чорнило закінчилося!");
                break;
            }
        }
        document.write(`<p style="color: ${this.color}; font-weight: bold;">${printedText}</p>`);
        console.log(`Залишок чорнила: ${this.ink}%`);
    }
}

class RefillableMarker extends Marker {
    refill(amount = 100) {
        this.ink = Math.min(100, this.ink + amount);
        console.log(`Маркер заправлено. Поточний рівень чорнила: ${this.ink}%`);
    }
}

const myMarker = new RefillableMarker("blue", 5); 


//2
myMarker.print("Hello World! Це тестовий рядок."); 
myMarker.refill();
myMarker.print("Після заправки маркер знову пише повністю: Hello World!");

class ExtendedDate extends Date {
    getTextDate() {
        const days = [
            'перше', 'друге', 'третє', 'четверте', 'п\'яте', 'шосте', 'сьоме', 'восьме', 'дев\'яте', 'десяте',
            'одинадцяте', 'дванадцяте', 'тринадцяте', 'чотирнадцяте', 'п\'ятнадцяте', 'шістнадцяте', 'сімнадцяте', 'вісімнадцяте', 'дев\'ятнадцяте', 'двадцяте',
            'двадцять перше', 'двадцять друге', 'двадцять третє', 'двадцять четверте', 'двадцять п\'яте', 'двадцять шосте', 'двадцять сьоме', 'двадцять восьме', 'двадцять дев\'яте', 'тридцяте',
            'тридцять перше'
        ];
        const months = [
            'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
            'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
        ];
        
        const dayWord = days[this.getDate() - 1];
        const monthWord = months[this.getMonth()];
        return `${dayWord} ${monthWord}`;
    }

    isFuture() {
        const now = new Date();
        now.setHours(0, 0, 0, 0); 
        const checkDate = new Date(this.getTime());
        checkDate.setHours(0, 0, 0, 0);
        
        return checkDate >= now;
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    getNextDate() {
        const next = new ExtendedDate(this.getTime());
        next.setDate(this.getDate() + 1);
        return next;
    }
}

const myDate = new ExtendedDate(2026, 9, 13); 

console.log(`Дата текстом: ${myDate.getTextDate()}`);
console.log(`Це майбутня або поточна дата? ${myDate.isFuture()}`);
console.log(`Рік високосний? ${myDate.isLeapYear()}`);
console.log(`Наступна дата: ${myDate.getNextDate().toLocaleDateString()}`);



//3
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

class EmpTable {
    constructor(employeesArray) {
        this.employees = employeesArray;
    }

    getHtml() {
        let html = '<table>';
        html += '<thead><tr><th>Ім\'я</th><th>Посада</th><th>Зарплата (USD)</th></tr></thead>';
        html += '<tbody>';
        for (let emp of this.employees) {
            html += `<tr><td>${emp.name}</td><td>${emp.position}</td><td>${emp.salary}</td></tr>`;
        }
        html += '</tbody></table>';
        return html;
    }
}

const bankEmployees = [
    new Employee("Олександр Іванов", "Менеджер", 1500),
    new Employee("Марія Петренко", "Касир", 900),
    new Employee("Василь Сидорчук", "Аналітик", 2200),
    new Employee("Анна Бойко", "Керівник відділу", 3500)
];

const simpleTable = new EmpTable(bankEmployees);
document.write('<h3>Завдання 3: Проста таблиця</h3>');
document.write(simpleTable.getHtml());


//4 
class StyledEmpTable extends EmpTable {
    getStyles() {
        return `
        <style>
            table {
                width: 100%;
                border-collapse: collapse;
                font-family: Arial, sans-serif;
                margin: 20px 0;
            }
            th, td {
                border: 1px solid #dddddd;
                padding: 12px;
                text-align: left;
            }
            th {
                background-color: #0056b3;
                color: white;
            }
            tr:nth-child(even) {
                background-color: #f9f9f9;
            }
            tr:hover {
                background-color: #f1f1f1;git
            }
        </style>
        `;
    }

    getHtml() {
        const baseTableHtml = super.getHtml(); 
        return this.getStyles() + baseTableHtml; 
    }
}

const styledTable = new StyledEmpTable(bankEmployees);
document.write('<h3>Завдання 4: Стилізована таблиця</h3>');
document.write(styledTable.getHtml());


