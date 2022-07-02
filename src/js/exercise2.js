
    let array = [10,20,30,40];
    // let previous;
    let biggerNum;
    let minorNum;
    array.map((current, item, numb) => { 

        if(item !== 0){

          let previous = numb[item-1]
          if(current === previous) {
            alert('No puede ingresar valores iguales');
          }

          if(current > previous) {
            biggerNum = current;
          } else {
            biggerNum = previous;
          }

          if(current < previous) {
            minorNum = current;
          } else {
            minorNum = previous;
          }

        } else {
            biggerNum = current;
            minorNum = current;
        }      
    });
    
    let mayor = biggerNum;
    let menor = minorNum;
