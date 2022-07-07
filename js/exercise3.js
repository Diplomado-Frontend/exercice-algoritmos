
const functionParams =(stringParam) => {

    let arrayString = stringParam.split(' ');

    console.log('Array with string params: ' + JSON.stringify(arrayString, null, 2));
    console.log('Count words ' + arrayString.length);
    console.log('Firts word: ' + arrayString.shift());
    console.log('Last word: ' + arrayString.pop());
    arrayString = stringParam.split(' ');
    // console.log('Reverse word: ' + arrayString.reverse());
    console.log('Reverse word: ' + arrayString.reverse());
    arrayString = stringParam.split(' ');
    console.log('From A to Z: ' + arrayString.sort(((a, b) =>
                        a.toLowerCase() > b.toLowerCase() ? 1 :
                        a.toLowerCase() < b.toLowerCase() ? -1:
                        0
    )));

    // console.log('From Z to A: ' + descOrder(arrayString));

}

const descOrder = (array) => {
   return array.sort(function (a, b) {
        if (a > b) {
            return -1;
        }
        if (b > a) {
            return 1;
        }
        return 0;
    });
}

(function(){
    functionParams('Hola compañeros de diplomado frontend');
})();

