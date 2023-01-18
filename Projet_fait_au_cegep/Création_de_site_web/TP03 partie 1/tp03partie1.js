/** Achraf Groiez */
const abc = 'abcdefghijklmnopqrstuvwxyz';
const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const cara = '!@#$%^&*(){}[]=<>/,.';
const num = '0123456789';
var i = 1;

while (i < 12){ 
    var i = i + 1;
    var cara1 = cara[Math.floor(Math.random()*cara.length)];
    var minuscule = abc[Math.floor(Math.random()*abc.length)];
    var majuscule = ABC[Math.floor(Math.random()*ABC.length)];
    var number = num[Math.floor(Math.random()*num.length)];

    var karo = [minuscule, majuscule, cara1, number];
    var karo1 = karo[Math.floor(Math.random()*karo.length)];
    var karo2 = karo1;
    var karo3 = karo2;
    var karo4 = karo1;

    while (karo2 == karo1 || karo4 == karo1 || karo4 == karo2 || karo4 == karo3 || karo3 == karo1 || karo3 == karo2){
        if(i < 12){
            var karo3 = karo[Math.floor(Math.random()*karo.length)];
            var karo2 = karo[Math.floor(Math.random()*karo.length)];
            
            var karo4 = karo[Math.floor(Math.random()*karo.length)];
    }
    var cara2 = cara[Math.floor(Math.random()*cara.length)];
    var minuscule2 = abc[Math.floor(Math.random()*abc.length)];
    var majuscule2 = ABC[Math.floor(Math.random()*ABC.length)];
    var number2 = num[Math.floor(Math.random()*num.length)];

    var karo45 = [minuscule2, cara2, majuscule2, number2];
    var karo5 = karo45[Math.floor(Math.random()*karo45.length)];
    var karo6 = karo45[Math.floor(Math.random()*karo45.length)];
    var karo7 = karo5;
    var karo8 = karo7;        
    
    while (karo6 == karo5 || karo7 == karo5 || karo7 == karo6 || karo8 == karo5 || karo8 == karo6 || karo8 == karo7){
    if(i < 12){
            var karo6 = karo[Math.floor(Math.random()*karo.length)];
            var karo7 = karo[Math.floor(Math.random()*karo.length)];
            
            var karo8 = karo[Math.floor(Math.random()*karo.length)];
        }
        }
    }   
    {
        console.log(karo2 + karo1 + karo3 + karo4 + karo8 + karo7 + karo6 + karo5);
    }
}