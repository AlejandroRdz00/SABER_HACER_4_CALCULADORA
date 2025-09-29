 function getValues() {
      let n1 = parseFloat(document.getElementById("num1").value);
      let n2 = parseFloat(document.getElementById("num2").value);
      return [n1, n2];
    }

    function sumar() {
      let [n1, n2] = getValues();
      alert("Resultado: " + (n1 + n2));
    }

    function restar() {
      let [n1, n2] = getValues();
      alert("Resultado: " + (n1 - n2));
    }

    function multiplicar() {
      let [n1, n2] = getValues();
     document.getElementById("subtotal").value = (n1 * n2);
    }

    function dividir() {
      let [n1, n2] = getValues();
      if (n2 === 0) {
        alert("Error: No se puede dividir entre 0");
      } else {
        alert("Resultado: " + (n1 / n2));
      }
    }