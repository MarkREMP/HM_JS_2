//1
function MovieTicket(movieName, cinema, time, price, seatNumber){
    this.movieName = movieName;
    this.cinema = cinema;
    this.time = time;
    this.price = price;
    this.seatNumber = seatNumber;
}
let myTicket = new MovieTicket("Шрек 4", "Cinema", "17:00", 200, "5 ряд, місце 3");

console.log(myTicket);
//2
let project = {
    name: "Facebook",
    developer: {
        firstname: "Mark",
        lastname: "Velko",
        address: {
            country: "Ukraine",
            city: "Odessa",
        },
    },
}

console.log(project);
//3
function copyUser(user){
    let copiedUser = {};
    for(let key in user){
        if(user.hasOwnProperty(key)){
            copiedUser[key] = user[key];
        }
    }
    return copiedUser;
}

let user = {
    firstname: "Mark",
    lastname: "Velko",
}

copyU = copyUser(user);
console.log(copyU);
//4

function checkProperties(obj, properties){
    for(let i = 0; i < properties.length; i++){
        if(!obj.hasOwnProperty(properties[i])){
            return false;
        }
    }
    return true;
}

let Object = {
    name: "Mark",
    age: 17,
    city: "Odessa",
}

let propCheck = ["name", "age", "city"];
console.log(checkProperties(Object, propCheck));

propCheck.push("Time");
console.log(checkProperties(Object, propCheck));
//5

function ConstructorUser(name, age, sex, email, country, salary, position, departament){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.email = email;
    this.country = country;
    this.salary = salary;
    this.position = position;
    this.departament = departament;
}

let UserInfo = new ConstructorUser("Mark", 18, "Male", "vm@gmail.com", "Ukraine", 45000, "Senior", "Full-stack developer");
console.log(UserInfo);

//6
function getUserWithGmail(users){
    return users.filter(user => user.email.endsWith("@gmail.com"));
}

let users = [
    {email: "jfsk@gmail.com"},
    {email: "iaorn@mail.com"},
    {email: "ministersto.osvitu@ua"},
    {email: "myHome@gmail.com"},
];

let gmailUsers = getUserWithGmail(users);
console.log(gmailUsers);
//7

function getWomen(users){
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return users.filter(user => {
        return user.gender === 'female' &&
               user.age >= 18 &&
               user.age < 30 &&
               user.country === 'Україна';
    }).map(user => `${user.name} (${currentYear - user.age} року народження)`); 
}

users7 = [
    { name: 'Ірина', gender: 'female', age: 25, country: 'Україна' },
    { name: 'Олена', gender: 'female', age: 32, country: 'Україна' },
    { name: 'Анна', gender: 'female', age: 28, country: 'Україна' },
    { name: 'Марія', gender: 'female', age: 20, country: 'Україна' },
    { name: 'Юлія', gender: 'female', age: 29, country: 'Україна' },
    { name: 'Наталія', gender: 'female', age: 31, country: 'Україна' },
    { name: 'Вікторія', gender: 'female', age: 27, country: 'Україна' }
];

let Women = getWomen(users7);
console.log(Women);

//8
function getAdultMaleAge(users){
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return users.filter(user => {
        return user.gender === "male" && user.age >= 18;
    }).map(user =>`${user.name}, рік народження: ${currentYear - user.age}`);
}
let user8 = [
    { name: 'Іван', gender: 'male', age: 25 },
    { name: 'Петро', gender: 'male', age: 17 },
    { name: 'Олександр', gender: 'male', age: 30 },
    { name: 'Михайло', gender: 'male', age: 21 }
];

let adultMaleAges = getAdultMaleAge(user8);
console.log(adultMaleAges);

//9
function getOldestUserAge(users) {
    let oldestAge = -Infinity;

    for (let i = 0; i < users.length; i++) {
        if (users[i].age > oldestAge) {
            oldestAge = users[i].age;
        }
    }

    return oldestAge;
}
let users9 = [
    { name: 'Іван', age: 25 },
    { name: 'Марія', age: 32 },
    { name: 'Петро', age: 21 },
    { name: 'Анна', age: 40 }
];

let oldestUserAge = getOldestUserAge(users9);
console.log(oldestUserAge)





