var cl = console.log;
// function return type 
// when we tell in advance that what type of value should be return.
// the return type of function.
function add(n1, n2) {
    return n1 + n2;
}
function add2(n1, n2) {
    return n1 + n2 + '';
}
function add3(n1, n2) {
    cl(n1 + n2);
}
function combine2(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
cl(combine2(100, 700));
cl(combine2('20', 40));
var I13 = {
    id: "abc",
    price: 70000,
    tags: ['most popular'],
    details: {
        title: 'iphone13',
        specifications: ['16gb']
    }
};
var I14 = {
    id: "pqr",
    price: 100000,
    tags: ['most popular'],
    details: {
        title: 'iphone14',
        specifications: ['18gb']
    }
};
var product = [I13, I14];
cl(product);
// =================== Ex. 1) ====================
function sum(n1, n2) {
    return n1 + n2;
}
cl(sum(20, 30));
function str(n1, n2) {
    return n1.toString() + n2.toString();
}
cl(str('10', '10'));
function mul1(n1, n2) {
    cl(n1 * n2);
}
mul1(20, 40);
var creata = {
    color: 'white',
    price: '12lac',
    features: ['advanced connectivity', 'electric parking brake'],
    engineDetails: {
        engineType: 'Two stroke',
        fuel: 'Diesel',
        engineCylinder: 'straight engine'
    }
};
var ford = {
    color: 'grey',
    price: '5lac',
    features: ['electronic stability control', 'hill launch assist'],
    engineDetails: {
        engineType: 'Four stroke',
        fuel: 'Diesel',
        engineCylinder: 'straight engine'
    }
};
var car = [creata, ford];
cl(car);
// =================== Ex. 2) ====================
function sub(n1, n2) {
    return n1 - n2;
}
cl(sub(50, 20));
function sum2(n1, n2) {
    return n1.toString() + n2.toString();
}
cl(sum2('20', '30'));
function div(n1, n2) {
    cl(n1 / n2);
}
div(500, 10);
var std1 = {
    fname: 'Tony',
    lname: 'Stark',
    email: 'tony@gmail.com',
    contact: 1234567890,
    Address: {
        city: 'pune',
        street: '43 VC road',
        pincode: 431805
    }
};
var std2 = {
    fname: 'John',
    lname: 'Doe',
    email: 'john@gmail.com',
    contact: 7750028721,
    Address: {
        city: 'London',
        street: '55 ',
        pincode: 431910
    }
};
var stdArr = [std1, std2];
cl(stdArr);
// =================== Ex. 3) ====================
function sum3(n1, n2) {
    return n1.toString() + n2.toString();
}
cl(sum3('50', '70'));
function sub1(n1, n2) {
    return n1 + n2;
}
cl(sub1(100, 100));
function mul3(n1, n2) {
    cl(n1 * n2);
}
mul3(10, 30);
var emp1 = {
    fname: 'Smith',
    lname: 'David',
    empId: 505,
    skills: ['HTML', 'CSS', 'javaScript', 'Angular'],
    personalInfo: {
        contact: 1234567890,
        Address: '43 vc road, Latur'
    }
};
var emp2 = {
    fname: 'Marvel',
    lname: 'Stark',
    empId: 707,
    skills: ['node.js', 'mongoDB', 'express.js'],
    personalInfo: {
        contact: 9751316340,
        Address: 'pune, maharashtra'
    }
};
var empArr = [emp1, emp2];
cl(empArr);
// =================== Ex. 4) ====================
function add4(n1, n2) {
    return n1 + n2;
}
cl(add4(200, 300));
function div1(n1, n2) {
    cl(n1 / n2);
}
div1(250, 50);
function addition(n1, n2) {
    return n1 + n2.toString();
}
cl(addition('25', 20));
// =================== Ex. 5) ====================
function mul(n1, n2) {
    return n1 * n2;
}
cl(mul(10, 50));
function sum4(n1, n2) {
    return n1.toString() + n2.toString();
}
cl(sum4('50', '30'));
function sub2(n1, n2) {
    cl("The substraction is ".concat(n1 - n2));
}
sub2(500, 200);
function showRes(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
cl(showRes(10, 40));
cl(showRes('20', '50'));
