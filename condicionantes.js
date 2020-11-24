// Investigar diferencia entre =, ==, ===

// Ejemplo1 con =
var num1 = "1"
var num2 = 1

if (num1 = 5)
{
    console.log("Elemplo 1 - Entra al if: num1 = "+ num1 + " num2 = " + num2)
}
else
{
    console.log("Ejemplo 1 - Entra al else: num1 = "+ num1 + " num2 = " + num2)
}

var num1 = "6"
var num2 = 6

// Ejemplo2 con ==
if (num1 == num2)
{
    console.log("Elemplo 2 - Entra al if: num1 = "+ num1 + " num2 = " + num2)
}
else
{
    console.log("Elemplo 2 - Entra al else: num1 = "+ num1 + " num2 = " + num2)
}

var num1 = "9"
var num2 = 9
// Ejemplo3 con ===
if (num1 === num2)
{
    console.log("Elemplo 3 - Entra al if: num1 = "+ num1 + " num2 = " + num2)
}
else
{
    console.log("Elemplo 3 - Entra al else: num1 = "+ num1 + " num2 = " + num2)
}

console.log(Math.floor(Math.random() * 11))

// TAREA: Swith con numeros

switch(Math.floor(Math.random() * 11)) {
    case 1:
        console.log("Numbero 1")
      break;
    case 2:
        console.log("Numbero 2")
      break;
      case 3:
        console.log("Numbero 3")
      break;
      case 4:
        console.log("Numbero 4")
      break;
      case 5:
        console.log("Numbero 5")
      break;
      case 6:
        console.log("Numbero 6")
      break;
      case 7:
        console.log("Numbero 7")
      break;
      case 8:
        console.log("Numbero 8")
      break;
      case 9:
        console.log("Numbero 9")
      break;
      case 10:
        console.log("Numbero 10")
      break;
    default:
        console.log("Numero mayor a 10")
  }

  //TAREA: Crear funcion con un if, si el numero es 42 escribir correcto, sino incorrecto
  function numero(num)
  {
    if (num == 42)
    {
        return "Correcto"
    }
    else
    {
        return "Incorrecto"
    }
  }
  console.log(numero(41))