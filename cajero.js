var cuentas = [
  { nombre: "Mali", saldo: 200, NIP: 1234 },
  { nombre: "Gera", saldo: 290, NIP: 2341 },
  { nombre: "Maui", saldo: 67, NIP: 3412 }
];
/*alert("Nip Mali: 1234");
alert("Nip Gera: 2341");
alert("Nip Maui: 3412");*/
document.getElementById('pantalla2').style.visibility='hidden';
var cuentaSeleccionada;

function seleccionarCuenta() {
  var selectedAccount = document.getElementById("cuentas").value;
  cuentaSeleccionada = cuentas.find(function (cuenta) {
    return cuenta.nombre === selectedAccount;
  });
  mostrarSaldo();
}

function mostrarSaldo() {
  if (cuentaSeleccionada) {
    document.getElementById("saldo").innerText = "Saldo: $" + cuentaSeleccionada.saldo;
  }
}

function autenticarYRetirar() {
  var nipIngresado = document.getElementById("nip").value;
  autenticar(nipIngresado, function () {
    retirar();
  });
}

function autenticarYDepositar() {
  var nipIngresado = document.getElementById("nip").value;
  autenticar(nipIngresado, function () {
    depositar();
  });
}

function autenticar(nipIngresado, callback) {
  if (cuentaSeleccionada && nipIngresado && cuentaSeleccionada.NIP == nipIngresado) {
    callback();
  } else {
    alert("NIP incorrecto. No se puede realizar la operación.");
  }
}

function validarSaldoMinimo(saldo) {
  return saldo >= 10;
}

function validarSaldoMaximo(saldo) {
  return saldo <= 990;
}

function retirar() {
  var cantidad = parseFloat(document.getElementById("cantidad").value);

  if (cuentaSeleccionada && cantidad && validarSaldoMinimo(cuentaSeleccionada.saldo - cantidad)) {
    cuentaSeleccionada.saldo -= cantidad;
    mostrarSaldo();
    alert("Retiro exitoso. Nuevo saldo: $" + cuentaSeleccionada.saldo);
  } else {
    alert("Cantidad inválida o saldo insuficiente para el retiro.");
  }
}

function depositar() {
  var cantidad = parseFloat(document.getElementById("cantidad").value);

  if (cuentaSeleccionada && cantidad && validarSaldoMaximo(cuentaSeleccionada.saldo + cantidad)) {
    cuentaSeleccionada.saldo += cantidad;
    mostrarSaldo();
    alert("Depósito exitoso. Nuevo saldo: $" + cuentaSeleccionada.saldo);
  } else {
    alert("Cantidad inválida o saldo máximo excedido para el depósito.");
  }
}

seleccionarCuenta();

function cerrarPantalla2() {
}

// Función para mostrar la pantalla2 en el centro
function mostrarPantalla2() {
document.getElementById('pantalla2').style.visibility='visible';
document.getElementById('Ingreso').style.visibility='hidden';

  /*var pantalla2 = document.getElementById('pantalla2');
  pantalla2.style.display = 'flex';
  pantalla2.style.alignItems = 'center';
  pantalla2.style.justifyContent = 'center';
  var botonIngreso = document.getElementById('Ingreso');
  botonIngreso.style.display = 'none';*/
}