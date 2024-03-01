// в object можн писати також і функції

// const user = {
//     Name: "Anderson",
//     Surname: "Smith",

//     GetName: function() {
//         return this.Name;
//     },
//     PrintInfo: function() {
//         console.log(this.Name + " " + this.Surname);
//     }
// };

// console.log(user.GetName());
// user.PrintInfo();


// Math - математична бібліотека

// заукрулення дробових чисел до цілого
// console.log(Math.floor(1.9));   // до меншого
// console.log(Math.ceil(5.1));    // до більшого
// console.log(Math.round(10.5));  // 0.5 і більше до більше, все інше до меншого0
// console.log(Math.round(10.49)); // - 10

// console.log(Math.ceil(Math.random() * 100));

class Fraction {
    #numerator;
    #denumerator;
    integer;
    constructor(numerator, denumerator) {
        this.#numerator = numerator;
        this.#denumerator = denumerator;
        this.integer = 0;
    }

    Info() {
        console.log(this.integer + " " + this.#numerator + "/" + this.#denumerator);
    }

    GetNumerator() {
        return this.#numerator;
    }

    GetDenumerator() {
        return this.#denumerator;
    }

    SetNumerator(numerator) {
        this.#numerator = numerator;
    }

    SetDenumerator(denumerator) {
        this.#denumerator = denumerator;
    }
}

function FractionSum(fract1, fract2) {
    const res = new Fraction(0,0);

    if(fract2.GetDenumerator() != fract1.GetDenumerator()) {
        res.SetDenumerator(fract1.GetDenumerator() * fract2.GetDenumerator()); 
        const numerator1 = fract1.GetNumerator() * fract2.GetDenumerator();
        const numerator2 = fract2.GetNumerator() * fract1.GetDenumerator();
        res.SetNumerator(numerator1 + numerator2);
    }

    return res;
}

function Rounding(fraction) {
    let min = fraction.GetNumerator();
    if(fraction.GetDenumerator() < min) {
        min = fraction.GetDenumerator();
    }

    for(let i = min; i >= 2; i--) {
        if(fraction.GetDenumerator() % i == 0 && fraction.GetNumerator() % i == 0) {
            res = new Fraction(fraction.GetNumerator() / i, fraction.GetDenumerator() / i); 
            return Rounding(res);
        }
    }
    return fraction;
}

function Ceil(fraction) {
    const num = fraction.GetNumerator();
    const den = fraction.GetDenumerator();

    if(num < den) {
        return fraction;
    }
    if(num === den) {
        fraction.integer = 1;
        fraction.SetNumerator(0);
        return fraction;
    }

    const int = Math.floor(num / den);
    fraction.SetNumerator(num - int * den);
    fraction.integer = int;
    return fraction;
}

const fract1 = new Fraction(27, 3);
fract1.Info();
const fract2 = new Fraction(4, 7);
fract2.Info();


const fractRes = FractionSum(fract1, fract2);
fractRes.Info();

let roundFract = Rounding(fractRes);
roundFract.Info();
roundFract = Ceil(roundFract);
roundFract.Info();