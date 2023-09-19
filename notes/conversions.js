// num str (1)
// num bigint (2)
// num bool (3)
// num null (4)
// num undef (5)
// str bigint (6)
// str bool (7)
// str null (8)
// str undef (9)
// bigint bool (10)
// bigint null (11)
// bigint undef (12)
// bool null (13)
// bool undef (14)
// null undef (15)

// 1
let n1 = 123 + "123";

// 2
let n2 = 123 + 123n;

// 3
let n3 = 123 + true;

// 4
let n4 = 123 + null;

// 5
let n5 = 123 + undefined;

// 6
let s1 = "123" + 123n;

// 7
let s2 = "123" + true;

// 8
let s3 = "123" + null;

// 9
let s4 = "123" + undefined;

// 10
let bi1 = 123n + true;

// 11
let bi2 = 123n + null;

// 12
let bi3 = 123n + undefined;

// 13
let b1 = true + null;

// 14
let b2 = true + undefined;

// 15
let u1 = null + undefined;

function n() {
    console.log(`${n1} : ${typeof n1}`);
    console.log(`${n2} : ${typeof n2}`);
    console.log(`${n3} : ${typeof n3}`);
    console.log(`${n4} : ${typeof n4}`);
    console.log(`${n5} : ${typeof n5}`);
}

function s() {
    console.log(`${s1} : ${typeof s1}`);
    console.log(`${s2} : ${typeof s2}`);
    console.log(`${s3} : ${typeof s3}`);
    console.log(`${s4} : ${typeof s4}`);
}

function bi() {
    console.log(`${bi1} : ${typeof bi1}`);
    console.log(`${bi2} : ${typeof bi2}`);
    console.log(`${bi3} : ${typeof bi3}`);
}

function b() {
    console.log(`${b1} : ${typeof b1}`);
    console.log(`${b2} : ${typeof b2}`);
}

function u() {
    console.log(`${u1} : ${typeof u1}`);
}

n()
s()
bi()
b()
u()
