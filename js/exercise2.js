    
    const checkIsNumber = (value) => {

      var reg = new RegExp('^[0-9]*$');

      if (reg.test(value)==false) {
        alert(`${value} no es un número válido`);
        throw new TypeError(`${value} no es un número válido`);
      } 

    }

    const calculateNumbers = () => {

      let valueA = getValueFromInput('numberA');
      let valueB = getValueFromInput('numberB');
      let valueC = getValueFromInput('numberC');
      let valueD = getValueFromInput('numberD');

      let arrayNumbers = [valueA, valueB, valueC, valueD];

      checkDuplicateItemsIntoArray(arrayNumbers);

      arrayNumbers.map((number) => {
        checkIsNumber(number);
      })
      
      // let previous;
      let biggerNum;
      let minorNum;

      arrayNumbers.map((current, item, numb) => { 
  
          if(item !== 0) {
  
            let previous = numb[item-1]
  
            if(current > previous) 
              biggerNum = current > biggerNum ? current : biggerNum;
            else 
              biggerNum = previous > biggerNum ? previous : biggerNum;
            
  
            if(current < previous) 
                minorNum = current < minorNum ? current : minorNum;
            else 
                minorNum = previous < minorNum ? previous : minorNum;
            
  
          } else {
              biggerNum = current;
              minorNum = current;
          }      
      });
      
      let mayor = biggerNum;
      let menor = minorNum;

      alert('mayor: ' + mayor);
      alert('menor: ' + menor);
  
    }

    const getValueFromInput = (inputId) => {
      let number = document.getElementById(inputId).value;

      if(number === '') {
        alert('Por favor complete todos los campos.');
        throw new TypeError('Por favor complete todos los campos.');
      }

      number = !isNaN(number) ? Number(number) : number;
        
      return number;
    }

    const checkDuplicateItemsIntoArray = (array) => {

      const tempArray = [...array].sort()

      for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i + 1] === tempArray[i]) {
          alert('No puede ingresar valores iguales');
          throw new TypeError('No puede ingresar valores iguales');
        }
      }

    }

