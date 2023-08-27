
//Função para Exibir a senha

  function mouseoverPass(obj) {
    var obj = document.getElementById('myPassword');
    obj.type = "text";
  }
  function mouseoutPass(obj) {
    var obj = document.getElementById('myPassword');
    obj.type = "password";
  }
      
//função para desmarcar o checkbox
function Desmarcar(){
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener('blur', () => {
checkbox.checked = false; // Desmarca o checkbox
});
}
