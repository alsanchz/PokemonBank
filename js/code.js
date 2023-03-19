function check() {
  let x = document.forms["credenciales"]["userid"].value;
  let y = document.forms["credenciales"]["pwd"].value;
    if (x == "admin" && y == "1234"){
        form.action = "action_page.html";
        return true;
    } 
    if (x == ""){
      swal("Por favor ingrese su usuario.")
      return false;
    }
    if (x != "" && y == ""){
      swal("Por favor ingrese su contraseña.")
      return false;
    }
    else {
      swal("Usuario y contraseña incorrectos, intente nuevamente.")
      return false;
    }
}

function passvalues() {
  var user_id = document.getElementById("floatingInput").value;
  localStorage.setItem("usuario",user_id);
  return true;
}
