document.addEventListener("DOMContentLoaded", function () { 
    // Seleccionar el botón por su ID correcto
    const btnMaquinados = document.getElementById("btn_maquinados"); 

    if (btnMaquinados) {
        btnMaquinados.addEventListener("click", function () {
            window.location.href = "tipoMaquinados.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Selectores del DOM
    const selectorTipoMaterial = document.getElementById("selector1");
    const selectorProveedor = document.getElementById("selector2");
    const selectorSubtipoMaterial = document.getElementById("selector3");

    // Datos de la tabla (estructurados como objetos)
    const datosMateriales = {
        "Aceros para trabajo en frio": {
            proveedores: ["UDDEHOLM", "BOHLER", "AISI"],
            subtipos: {
                UDDEHOLM: ["ARNE", "RIGOR", "SVERKER21", "CALMAX", "CALDIE", "VANADIS 4 EXTRA"],
                BOHLER: ["K 460", "K 305", "K 110", "K 353", "K 340 ISODUR", "K 360 ISODUR", "K 294", "K 390 MICROCLEAN", "K 490 MICROCLEAN", "K 890 MICROCLEAN"],
                AISI: ["O1", "A2", "D2", "A11"]
            }
        },
        "Aceros para moldes plasticos": {
            proveedores: ["UDDEHOLM", "BOHLER", "AISI"],
            subtipos: {
                UDDEHOLM: ["HOLDAX / HOLDER", "IMPAX SUPREME", "NIMAX", "STAVAX", "RAMAX HH", "CORRAX", "MIRRAX", "MIRRAX 40", "UDDEHOLM ROYALLOY", "MOLDMAXHH", "P - 20", "ALUMEC89"],
                BOHLER: ["M 200", "M238", "M315"],
                AISI: ["4140M", "P20M", "420ESR", "420 M"]
            }
        },
        "Aceros para trabajo en caliente": {
            proveedores: ["UDDEHOLM", "BOHLER", "AISI"],
            subtipos: {
                UDDEHOLM: ["ORVAR-2M", "ORVAR SUPREME", "DIEVAR", "QRO-90 SUPREME", "VEX"],
                BOHLER: ["W302", "W302 ISOBLOC", "W360 ISOBLOC", "W400"],
                AISI: ["H13", "H13 PREMIUM", "H11"]
            }
        },
        "Aceros a alta velocidad": {
            proveedores: ["UDDEHOLM", "BOHLER", "AISI"],
            subtipos: {
                UDDEHOLM: ["VANADIS 23"],
                BOHLER: ["S 600", "S 500", "S 705", "S 290 MICROCLEAN", "S 390 MICROCLEAN", "S 692 MICROCLEAN", "S 790 MICROCLEAN"],
                AISI: ["M2", "M-42", "M-35", "M3:2"]
            }
        },
        "Aceros para construccion mecanica": {
            proveedores: ["BOHLER", "AISI"],
            subtipos: {
                BOHLER: ["4140 TRATADO", "4140 RECOCIDO", "1045", "ALUMINIO 5083"],
                AISI: ["4140", "1045"]
            }
        },
        "Aceros inoxidables": {
            proveedores: ["SIN_PROVEEDOR"],
            subtipos: {
                SIN_PROVEEDOR: ["410", "416", "440C", "304/310", "316/321"]
            }
        },
        "Cobre": {
            proveedores: ["SIN_PROVEEDOR"],
            subtipos: {
                SIN_PROVEEDOR: ["ELECTROLITICO", "PURO", "SIN OXIGENO"]
            }
        },
        "Bronce": {
            proveedores: ["SIN_PROVEEDOR"],
            subtipos: {
                SIN_PROVEEDOR: ["SA2 G2", "SAE 64", "SA2 65", "SAE 660", "SA2 68B"]
            }
        },
        "Laton": {
            proveedores: ["SIN_PROVEEDOR"],
            subtipos: {
                SIN_PROVEEDOR: ["ALFA", "BETA", "ROJO", "AMARILLO", "MANGANESO"]
            }
        },
        "Aluminio": {
            proveedores: ["SIN_PROVEEDOR"],
            subtipos: {
                SIN_PROVEEDOR: ["3003", "7075", "1050", "SERIES", "1000", "2000", "3004", "4000", "5000", "6000", "7000"]
            }
        },
        "Plasticos de ingenieria": {
            proveedores: ["SIN_PROVEEDOR"],
            subtipos: {
                SIN_PROVEEDOR: ["POLICARBONATOS", "ACETAL NYLAMID", "SANALITE", "PVC", "PTFE"]
            }
        },
        "Placa comercial": {
            proveedores: ["SIN_PROVEEDOR"],
            subtipos: {
                SIN_PROVEEDOR: ["A36"]
            }
        },
        "Acero estructural": {
            proveedores: ["SIN_PROVEEDOR"],
            subtipos: {
                SIN_PROVEEDOR: ["PTR", "IPR", "HSS", "CPS", "POLIN O MONTEN", "LAMINA"]
            }
        }
    };

    // Evento para actualizar los proveedores según el tipo de material seleccionado
    selectorTipoMaterial.addEventListener("change", function () {
        const tipoMaterial = selectorTipoMaterial.value;
        const proveedores = datosMateriales[tipoMaterial]?.proveedores || [];

        // Limpiar y actualizar el selector de proveedores
        selectorProveedor.innerHTML = '<option selected>Elige una opción...</option>';
        proveedores.forEach((proveedor) => {
            const option = document.createElement("option");
            option.value = proveedor;
            option.textContent = proveedor;
            selectorProveedor.appendChild(option);
        });

        // Limpiar el selector de subtipos de material
        selectorSubtipoMaterial.innerHTML = '<option selected>Elige una opción...</option>';
    });

    // Evento para actualizar los subtipos de material según el proveedor seleccionado
    selectorProveedor.addEventListener("change", function () {
        const tipoMaterial = selectorTipoMaterial.value;
        const proveedor = selectorProveedor.value;
        const subtipos = datosMateriales[tipoMaterial]?.subtipos[proveedor] || [];

        // Limpiar y actualizar el selector de subtipos de material
        selectorSubtipoMaterial.innerHTML = '<option selected>Elige una opción...</option>';
        subtipos.forEach((subtipo) => {
            const option = document.createElement("option");
            option.value = subtipo;
            option.textContent = subtipo;
            selectorSubtipoMaterial.appendChild(option);
        });
    });
});
        
        
//dimenciones Acero
document.addEventListener("DOMContentLoaded", function () {  //Funcion que sirve para la seleccion de la figura en "dimencionesAcero"
    // Elementos del DOM
    const selecFigura = document.getElementById("selec_figura");
    const imgFigura = document.getElementById("img_figura");
    const btnAceptar = document.getElementById("btn_aceptar");
    const btnLimpiar = document.getElementById("btn_limpiar");
    const btnDiametro = document.getElementById("btn_diametro");
    const btnLongitud = document.getElementById("btn_longitud");
    const btnCantidad = document.getElementById("btn_cantidad");
    const btnPrecio = document.getElementById("btn_precio");
    const resultados = document.getElementById("resultados").querySelectorAll("input");

    // Imágenes correspondientes a cada figura
    const imagenesFiguras = {
        1: "../img/hexagono.png",
        2: "../img/cilindro.jpeg",
        3: "../img/tubo_redondo.jpg",
        4: "../img/cuadrado.png",
        5: "../img/tubo_cuadrado.jpg",
        6: "../img/perfil_t.png",
        7: "../img/perfil_doble_t.png",
        8: "../img/perfil_u.png",
        9: "../img/angulo.png",
        10: "../img/pletina.avif",
        11: "../img/chapa.jpg",
    };

    // Evento para cambiar la imagen según la figura seleccionada
    selecFigura.addEventListener("change", function () {
        const valor = selecFigura.value;
        if (imagenesFiguras[valor]) {
            imgFigura.src = imagenesFiguras[valor];
        } else {
            imgFigura.src = ""; // Si no hay imagen, dejar vacío
        }
    });

    // Evento para calcular el peso
    btnAceptar.addEventListener("click", function () {
        // Obtener valores de los inputs
        const diametro = parseFloat(btnDiametro.value) || 0;
        const longitud = parseFloat(btnLongitud.value) || 0;
        const cantidad = parseFloat(btnCantidad.value) || 0;
        const precio = parseFloat(btnPrecio.value) || 0;

        // Calcular el peso (fórmula básica para redondos: π * (diámetro/2)^2 * longitud * densidad)
        const densidad = 7.85; // Densidad del acero en g/cm³
        const radio = diametro / 2;
        const volumen = Math.PI * Math.pow(radio, 2) * longitud; // Volumen en cm³
        const peso = (volumen * densidad) / 1000; // Peso en kg

        // Calcular peso total y precio total
        const pesoTotal = peso * cantidad;
        const precioTotal = pesoTotal * precio;

        // Mostrar resultados
        resultados[0].value = peso.toFixed(2); // Peso individual
        resultados[1].value = pesoTotal.toFixed(2); // Peso total
        resultados[2].value = precioTotal.toFixed(2); // Precio total
    });

    // Evento para limpiar los campos
    btnLimpiar.addEventListener("click", function () {
        // Limpiar inputs
        btnDiametro.value = "";
        btnLongitud.value = "";
        btnCantidad.value = "";
        btnPrecio.value = "";

        // Limpiar resultados
        resultados.forEach((input) => (input.value = ""));
    });
});