const usuarios = ["Ana", "Carlos", "Beatriz"];

function listarUsuarios() {
    return usuarios;
}

function agregarUsuario(nombre) {
    if (!nombre) return;
    usuarios.push(nombre.toUpperCase());
}