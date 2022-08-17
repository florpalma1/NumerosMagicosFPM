let numero;

function numeroAleatorio() {
  numero = Math.floor(Math.random() * 11);
  console.log(numero);
}
function adivinarNumero() {
  var botonAdivinar = parseInt(document.getElementById("numero").value);
  console.log(botonAdivinar);

  if (numero == botonAdivinar){
      alert("adivinaste")
  }else {
      alert("vuelva a intentar")
  }
}