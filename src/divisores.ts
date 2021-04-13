export class Divisores {

    static division() {
        let multiplos = [3,5,[3,5]];

        multiplos.forEach(function (value) {
            for (let i = 1; i <= 100; i++) {
                multiplicador({divisors: value}, {number: i});
            }
        });

        return 'Multiplos';

    }
}

const multiplicador = (divisors: any, number:any) => {
    let esArray = Array.isArray(divisors.divisors);
    let imprimo;
    let total;
    switch (esArray) {
        case false:
            switch (divisors.divisors) {
                case 3:
                    total = number.number%3;
                    imprimo = "Falabella";
                    break
                case 5:
                    total = number.number%5;
                    imprimo = "IT";
                    break;
            }
            break;
        case true:
            let total1 = number.number%3;
            let total2 = number.number%5;
            total = total1+total2;
            imprimo = "Integraciones";
            break
    }

    if (total == 0) {
        console.log("$$$$$RESULTADO")
        console.log(imprimo)
        console.log("FIN$$$$$$$$$$$")
    }
}
