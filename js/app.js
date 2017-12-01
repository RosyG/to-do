var account = 1;
// IDEA: para ir contando las tareas
var container = document.getElementById('tasks');
var submitButton = document.getElementById('submit-button');




var remove = function() {
    console.log(this);
    this.parentNode.remove();
    //this.parentElement.remove();
}

var taskAdd = function(event) {
  // IDEA: Agrega la tarea
    event.preventDefault();

    var task = document.getElementById('mesagge');
    // IDEA: TextArea, el contenido del mensaje que el user introducira

    var article = document.createElement('article');
    var label = document.createElement('label');
    var input = document.createElement('input');
    var button = document.createElement('button');

    var id = 'check' + account;

// IDEA: Se agraga un atributo tipo checkbox (casillas con palimas) concatenamos con acount para que no solo sean numeros
    input.type = 'checkbox';
    //input.setAttribute("type", "checkbox"), es otra manera de escribir la línea anterior
    input.addEventListener('click', throughTask);
    input.id = id;

    label.setAttribute('for', id);
    // IDEA: se relaciona el id la casilla
    label.textContent = task.value;
// IDEA: label debe tener el texto de la tarea, por eso sele dice que contenga el texto y se le asigna por que el TextArea tiene el valor message (el texto que se ingreso en la barra)
    button.type = 'button';
    button.innerText = 'x';
    /*Se le agrega x como texto pero visualmente se ve un botón con tache*/
    button.addEventListener('click', remove);
    // IDEA: Dentro de la funcion añadir tarea, esta el boton con el tache pero para que se ejecute la funcion borrar o remove, se invoca por medio de un evento para que ya este al tanto  de algun click

// IDEA: Agregando los elementos creados a elementos existentes en HTML Y A DEFINIR A SU PARENTENSCO
    article.appendChild(input);
    article.appendChild(label);
    article.appendChild(button);

    container.appendChild(article);
/*Aumenta el contador si la tarea ya fue agregada*/
    account++;
/*Limpiando el textArea o donde se contiene el texto anterior*/
    task.value = " ";
};
// IDEA: Tachando tareas
var throughTask = function() {
    var checked = this.checked;/*Verifica si una tarea esta en check(palomeadda),si esta en check es TRUE sino es FALSE. Sirve para saber cuando tachar el texto cuando se palomee*/
    console.log(checked);
    var text = this.nextSibling;/*Muestra al hermano del boton que se usar para palomear la tarea */
    console.log(text);
    if (checked) {/*si es true se tacha si no, sigue sin decoración*/
        text.style.textDecoration = 'line-through';/*Tachael texto de la tarea que ya fue agregada*/
    } else {
        text.style.textDecoration = 'none';
    }
};

submitButton.addEventListener('click', taskAdd);
