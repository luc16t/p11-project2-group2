        // Obtener el elemento del botón y el campo de texto
        const botonAgregar = document.getElementById("agregarNombre");
        const nombreInput = document.getElementById("nombreInput");
        const listaNombres = document.getElementById("listaNombres");
        const botonReiniciar = document.getElementById("reiniciar");
        const botonStart = document.getElementById("start");
        const elementosElegidos = document.getElementById("elementosElegidos");
        const botonBorrarTodo = document.getElementById("borrarTodo");

        // Lista para almacenar los nombres ingresados (no se repetirán)
        const nombres = [];

        // Lista para almacenar elementos elegidos
        const elementosElegidosLista = [];

        // Agregar un evento click al botón "Agregar Nombre"
        botonAgregar.addEventListener("click", function() {
            // Obtener el valor del campo de texto
            const nombre = nombreInput.value;

            // Verificar si el nombre ya existe en la lista
            if (nombre.trim() !== "" && !nombres.includes(nombre)) {
                // Agregar el nombre a la lista
                nombres.push(nombre);

                // Limpiar el campo de texto
                nombreInput.value = "";

                // Mostrar la lista de nombres en pantalla
                mostrarNombres();
            } else if (nombres.includes(nombre)) {
                alert("El nombre ya existe en la lista.");
            } else {
                alert("Por favor, ingresa un nombre válido.");
            }
        });

        // Agregar un evento click al botón "Reinicio"
        botonReiniciar.addEventListener("click", function() {
            // Mover todos los elementos elegidos a la lista superior
            elementosElegidosLista.forEach(function(elemento) {
                nombres.push(elemento);
            });
            elementosElegidosLista.length = 0;

            // Limpiar la lista de nombres en pantalla
            mostrarNombres();
            mostrarElementosElegidos();
        });

        // Agregar un evento click al botón "Start"
        botonStart.addEventListener("click", function() {
            // Verificar si hay nombres en la lista
            if (nombres.length > 0) {
                // Elegir un nombre aleatorio de la lista
                const nombreAleatorioIndex = Math.floor(Math.random() * nombres.length);
                const nombreAleatorioElegido = nombres[nombreAleatorioIndex];

                // Mover el nombre aleatorio a la lista de elementos elegidos
                elementosElegidosLista.push(nombreAleatorioElegido);
                mostrarElementosElegidos();

                // Eliminar el nombre aleatorio de la lista principal
                nombres.splice(nombreAleatorioIndex, 1);

                // Limpiar la lista de nombres en pantalla
                mostrarNombres();
            } else {
                alert("La lista de nombres está vacía.");
            }
        });

        // Agregar un evento click al botón "Borrar Todo"
        botonBorrarTodo.addEventListener("click", function() {
            // Limpiar todas las listas
            nombres.length = 0;
            elementosElegidosLista.length = 0;

            // Limpiar la lista de nombres en pantalla
            mostrarNombres();
            mostrarElementosElegidos();
        });

        // Función para mostrar los nombres en pantalla
        function mostrarNombres() {
            // Limpiar la lista de nombres actual
            listaNombres.innerHTML = "";

            // Recorrer la lista de nombres y agregar cada uno como un elemento de lista con un botón "X"
            nombres.forEach(function(nombre) {
                const listItem = document.createElement("li");
                listItem.textContent = nombre;

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "X";
                deleteButton.addEventListener("click", function() {
                    // Al hacer clic en la "X", eliminar el nombre de la lista
                    const nombreIndex = nombres.indexOf(nombre);
                    nombres.splice(nombreIndex, 1);
                    mostrarNombres(); // Actualizar la lista
                });

                listItem.appendChild(deleteButton);
                listaNombres.appendChild(listItem);
            });
        }

        // Función para mostrar los elementos elegidos
        function mostrarElementosElegidos() {
            // Limpiar la lista de elementos elegidos actual
            elementosElegidos.innerHTML = "";

            // Recorrer la lista de elementos elegidos y agregar cada uno como un elemento de lista
            elementosElegidosLista.forEach(function(elemento) {
                const listItem = document.createElement("li");
                listItem.textContent = elemento;
                elementosElegidos.appendChild(listItem);
            });
        }