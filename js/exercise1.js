const calculateTotal = () => {

    //When the input values has change, remove the previous final message with the total calculate.
    const divTotalCourse = document.getElementById('totalCourse');
    divTotalCourse.innerHTML='';

    let totalCourseValue = getValuesFromInputs('courseQuantityClass', 'Debe ingresar un valor para cada materia', true);
    let stainerValue = getValuesFromInputs('StainerClass', 'Debe ingresar un valor para costo de papelería', true);
    let studentCardValue = getValuesFromInputs('StudentCardClass', 'Debe ingresar un valor para carné', true);
    let discountValue = getValuesFromInputs('DiscountClass', 'Debe ingresar un valor de descuento', true);
    let userNameValue = getValuesFromInputs('studentNameClass', 'Debe ingresar su nombre', false);

    //Calculate total result to display 
    discountValue = (totalCourseValue * discountValue) / 100;
    totalCourseValue -= discountValue;
    totalCourseValue += stainerValue + studentCardValue;

    //Validations.
    if (totalCourseValue == 0 || stainerValue == 0 || studentCardValue == 0)
        alert("Te falta ingresar un valor. Intenta nuevamente");
     else if (totalCourseValue && stainerValue && studentCardValue && userNameValue)
    {   
        //Into div parent to display the calculated total value to pay.
        let label = document.createElement("label");
        label.innerHTML = `Señor ${userNameValue} el valor total a pagar por las materias matriculadas es de: ${totalCourseValue} `;
        divTotalCourse.appendChild(label);
    } else {
        alert("Por favor valida la información ingresada e intenta nuevamente");
    }        
}

window.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.code === 'Enter') {        
         const inputValue = document.getElementById("courseQuantity").value;
         processCourseQuantity(inputValue);

    }
});

const getValuesFromInputs = (inputClassName, alertMessaje, isNumber) => {
    let returnValue = 0;
    const formDomElem = document.getElementsByClassName(inputClassName);

    //Get each input element to get is value and sum to return the total course calculate.
    for (let index = 0; index < formDomElem.length; index++) {
        const element = formDomElem[index];

        if(element.localName === 'input') {
            let inputId = element.attributes[1].nodeValue;
            let inputValue = document.getElementById(inputId).value;
            var reg = new RegExp('^[0-9]*$');

            if (inputValue === '') 
            {
                alert(alertMessaje);
                return;
            } else if (isNumber && reg.test(inputValue)==false){
                alert(`${inputValue} no es un número válido`);
                return;
            } else {                  
                if(isNumber)
                    returnValue += parseFloat(inputValue);
                else
                    returnValue = inputValue;    
            } 
        }        
    }

    return returnValue;
}

const createCourseQuantity = () => {
    const inputValue = document.getElementById("courseQuantity").value;
    processCourseQuantity(inputValue);
}

const processCourseQuantity = (inputValue) => {

    if(inputValue <= 0 || inputValue > 1000) alert("Ingrese un valor correcto para la cantidad de materias.");
    else {

        //check each input when his value was change, to update the input quantity displayed in the dom.
        clearDomElement('courseQuantityClass');
        clearDomElement('StainerClass');
        clearDomElement('StudentCardClass');
        clearDomElement('DiscountClass');              
       
        /*Acording with the course quantity added for the user, create in the dom his asociate section: label + input
        for each course. */
        for (let index = 1; index <= inputValue; index++) {  

            let element = index;              
            createElement({ labelMessage: `Ingrese el costo de la materia: ${element} `, 
                        classNameAttr: "courseQuantityClass", 
                        nameParentCont: "containerCourseQuantity", 
                        value: undefined, 
                        idElement: `course${element}`
                      });                  
        }

        createElement({ labelMessage:"Costo de papelería: ", 
                        classNameAttr: "StainerClass", 
                        nameParentCont: "containerStainer", 
                        value: "20000", 
                        idElement: "stainerId"
                      });

        createElement({ labelMessage:"Costo de Carné: ", 
                        classNameAttr: "StudentCardClass", 
                        nameParentCont: "containerStudentCard", 
                        value: "8000", 
                        idElement: "studentCardId"
                      });  
        
        createElement({ labelMessage:"Descuento: ", 
                        classNameAttr: "DiscountClass", 
                        nameParentCont: "containerDiscount", 
                        value: "20", 
                        idElement: "discountId"
                      });                                             
    }

}

const createElement = ({labelMessage, classNameAttr, nameParentCont, value, idElement}) => {

    //Create Stainer elements to set into dom.
    let input = document.createElement("input");
    let label = document.createElement("label");
    let br = document.createElement("br");

    setAttributes({input: input, 
                   label: label, 
                   br: br, 
                   idElement: idElement, 
                   labelMessage: labelMessage, 
                   classAttribute: classNameAttr, 
                   value: value});

    //Into div parent, add the label + input + br. 
    setChildsToParent(nameParentCont, label, input, br);
}

const setAttributes = ({input, label, br, idElement, labelMessage, classAttribute, value}) => {

    //Set attributes for each element.
    input.setAttribute('type', 'text');
    input.setAttribute('id',  idElement);
    label.setAttribute("for", idElement);
    label.innerHTML = labelMessage;
    input.setAttribute('class', classAttribute);
    label.setAttribute('class', classAttribute);

    if(value !== undefined) 
        input.setAttribute('value', value);

    br.setAttribute('class', classAttribute); 

}

const setChildsToParent = (parentId, label, input, br) => {
    let parent = document.getElementById(parentId);
    parent.appendChild(label);
    parent.appendChild(input);
    parent.appendChild(br);
}

const clearDomElement = (classNameElement) => {

    const formDomElem = document.getElementsByClassName(classNameElement);

    //check each input when his value was change, to update the input quantity displayed in the dom.
    if(formDomElem.length > 0) 
    {
        while (formDomElem[0] !== undefined) {
            formDomElem[0].remove()
        }
    } 
}