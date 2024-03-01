function init(fractionalNum){
    fractionalNum.numerator=Number(prompt("Enter numerator: "));
    fractionalNum.denominator=Number(prompt("Enter denominator: "));
}
fractionalNum1 = new Object();
init(fractionalNum1);
fractionalNum1.numb=null;
fractionalNum2 = new Object();
init(fractionalNum2);
fractionalNum2.numb=null;

function print(fractional){
    if(fractional.numb==null){
        alert(String(fractional.numerator)+"/"+String(fractional.denominator));}
    else if(fractional.numerator==null){
        alert(String(fractional.numb))
    }
    else{
        alert(String(fractional.numb)+" "+String(fractional.numerator)+"/"+String(fractional.denominator));}
}

//  Скорочення
function reduction(fractional){
    let numer=fractional.numerator;
    let den=fractional.denominator;
    if(numer<den){
        for(let i=2;i<numer;i++){
            if(numer%i==0 && den%i==0){
                numer/=i;
                den/=i;
            }
        }
    }
    else{
        for(let i=2;i<den;i++){
            if(numer%i==0 && den%i==0){
                numer/=i;
                den/=i;
            }
        }
    }
    fractional.numerator=numer;
    fractional.denominator=den;
    if(fractional.numerator==fractional.denominator){
        fractional.numb=1;
        fractional.numerator=null;
        fractional.denominator=null;
    }
    else if(fractional.numerator%fractional.denominator==0){
        fractional.numb=fractional.numerator/fractional.denominator;
        fractional.numerator=null;
        fractional.denominator=null;}
    else if(fractional.numerator>fractional.denominator){
        fractional.numb=Math.floor(fractional.numerator/fractional.denominator);
        fractional.numerator=fractional.numerator%fractional.denominator;
    }
}


//      Додавання 
function add(fractionalNum1,fractionalNum2){
    let numer1=fractionalNum1.numerator;
    let numer2=fractionalNum2.numerator;
    let den1=fractionalNum1.denominator;
    let den2=fractionalNum2.denominator;
    let sumDen;
    if(den1==den2){   
        sumDen=den1;}
    else{
        let tmp;
        if(den1<den2){
            tmp=den1;
        }
        else{
            tmp=den2;
        }
        let i=tmp;
        let ind1;
        let ind2;
        while(i!=0){
            if(i%den1==0 && i%den2==0){
                sumDen=i;
                ind1=i/den1;
                ind2=i/den2;
                break;
            }
            i++;
        }
        numer1*=ind1;
        numer2*=ind2;
    }
    let sumNum=numer1+numer2;
    let fractionalSum= new Object();
    fractionalSum.numerator=sumNum;
    fractionalSum.denominator=sumDen;
    fractionalSum.numb=null;
    return fractionalSum;
}
//fractionalSum=add(fractionalNum1,fractionalNum2);
//reduction(fractionalSum);
//print(fractionalSum);

//      Віднімання
function subtraction(fractionalNum1,fractionalNum2){
    let numer1=fractionalNum1.numerator;
    let numer2=fractionalNum2.numerator;
    let den1=fractionalNum1.denominator;
    let den2=fractionalNum2.denominator;
    let subDen;
    if(den1==den2){   
        subDen=den1;}
    else{
        let tmp;
        if(den1<den2){
            tmp=den1;
        }
        else{
            tmp=den2;
        }
        let i=tmp;
        let ind1;
        let ind2;
        while(i!=0){
            if(i%den1==0 && i%den2==0){
                subDen=i;
                ind1=i/den1;
                ind2=i/den2;
                break;
            }
            i++;
        }
        numer1*=ind1;
        numer2*=ind2;
    }
    let subNum=numer1-numer2;
    let fractionalSub= new Object();
    fractionalSub.numerator=subNum;
    fractionalSub.denominator=subDen;
    fractionalSub.numb=null;
    return fractionalSub;
}
//fractionalSub=subtraction(fractionalNum1,fractionalNum2);
//reduction(fractionalSub);
//print(fractionalSub);

function multip(fractionalNum1,fractionalNum2){
    let fractionalMult= new Object();
    fractionalMult.numerator=fractionalNum1.numerator*fractionalNum2.numerator;
    fractionalMult.denominator=fractionalNum1.denominator*fractionalNum2.denominator;
    fractionalMult.numb=null;
    return fractionalMult;
}
//fractionalMult=multip(fractionalNum1,fractionalNum2);
//reduction(fractionalMult);
//print(fractionalMult);

function division(fractionalNum1,fractionalNum2){
    let fractionalDiv= new Object();
    fractionalDiv.numerator=fractionalNum1.numerator*fractionalNum2.denominator;
    fractionalDiv.denominator=fractionalNum1.denominator*fractionalNum2.numerator;
    fractionalDiv.numb=null;
    return fractionalDiv;
}
fractionalDiv=division(fractionalNum1,fractionalNum2);
reduction(fractionalDiv);
print(fractionalDiv);
