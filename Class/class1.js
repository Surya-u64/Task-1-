// Part 1: Primitive Data Types

// 1
let StudentName = "Surya";

console.log(typeof StudentName);

//2
let employeeAge = 24;

console.log(typeof employeeAge);

//3

var isWorking = true;
console.log(typeof isWorking);

//4

let name;
console.log(name);

//5
let Name = "surya";
let age = 24;
let value = true;
let point = null;
let place;

console.log(Name);
console.log(age);
console.log(value);
console.log(point);
console.log(place);

//6
console.log(typeof Name);
console.log(typeof age);
console.log(typeof value);
console.log(typeof point);
console.log(typeof place);

//7

let courseName = "JavaScript";
console.log(courseName);

//8

let batchNumber = 42;
console.log(typeof batchNumber);

// Part 2: Arrays
//9

let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

// 10
console.log(fruits[0]);

//11

console.log(fruits[2]);

// 12
console.log(fruits[fruits.length - 1]);

//13

let Details = ["Surya", 24, "Salem", "Java Developer"];

//14
console.log(Details[0]);
console.log(Details[1]);
console.log(Details[2]);
console.log(Details[3]);

//15

let Emp = ["Surya", 24, true];

//16
console.log(Emp.length);

//17

let MobileBrands = ["Oppo", "Apple", "Nokia", "Samsung", "Blackberry"];

console.log(MobileBrands[1]);

//18
let Courses = ["Java", "Python", "C++", "CSharp", "React", "MongoDb"];

console.log(Courses[Courses.length - 1]);

//Part 3: Objects

//19

let students = { name: "Surya", age: 24, city: "Salem" };

//20
console.log(students.name);

//21
console.log(students.age);

//22
let employee = {
  name: "Surya",
  salary: 20000,
  designation: "Java Full Stack Developer",
};

//23
let skills = {
  skills: ["java", "python", "c++", "React", "JavaScript"],
};

console.log(skills.skills[2]);

//24

let obj = {
  fruit: ["apple", "orange"],
  number: [7, 18, 33, 1],
  boolean: [true, false],
  toys: ["luffy", "zoro"],
};

//25
console.log(obj.toys);
console.log(obj.toys[1]);

//26

let Company = {
  name: "Amazon",
  location: "Bangalore",
  count: 20000,
};
console.log(Company.count);

//Part 4: Arithmetic Operators

//27
let a = 2;
let b = 3;
console.log(a + b);

//28
let c = 21;
let d = 20;

console.log(c - d);

//29
let e = 2;
let f = 3;
let g = 4;
console.log(e * f * g);

//30

let h = 100;
let i = 5;

console.log(h / i);

//31
let j = 25;
let k = 4;

console.log(j % k);

//32

let l = 3;
let m = 4;

console.log(l ** m);

//33

let n = 12;
let o = 23;

console.log(n + o);
console.log(n - o);
console.log(n / o);
console.log(n % o);
console.log(n ** o);
console.log(n * o);

//Part 5: Increment and Decrement

//34

let p = 10;
let q = ++p;

console.log(p);
console.log(q);

//35

let r = 20;
let s = r++;

console.log(r);
console.log(s);

//36

let t = 30;
let u = --t;

console.log(t);
console.log(u);

//37

let v = 40;
let w = v--;

console.log(v);
console.log(w);

//38 a=11 b=10
//39 x=16 y=16
//40 num1=24 num2=24  num3=25   num4=25
