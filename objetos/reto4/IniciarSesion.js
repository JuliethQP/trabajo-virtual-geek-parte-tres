// rol 1:admin
// rol 2:cliente

function obtenerListaUsuario() {
    var listaUsuarios = JSON.parse(localStorage.getItem('ListaUsuariosLs'));

    
    if (listaUsuarios == null) {
    listaUsuarios = [
        ['1', 'Pabs', 'Monestel', 'juli@gmail.com', '1234'],
        ['2', 'olman', 'santamaria', 'olaman@gmail.com', '3456']
    ]
    }
    return listaUsuarios;
};
function validarCredenciales(pCorreo, pContrasena) {
    var listaUsuarios = obtenerListaUsuario();
    var bAcceso = false;
    for (var i = 0; i < listaUsuarios.length; i++) {
        if (pCorreo == listaUsuarios[i][3] && pContrasena == listaUsuarios[i][4]) {
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + '' + listaUsuarios[i][2])
        }
    }
    return bAcceso;
}