const usuarios = ["Ana", "Carlos", "Beatriz"];

function listarUsuarios() {
    return usuarios;
}

function agregarUsuario(nombre) {
    usuarios.push(nombre);
}

module.exports = { listarUsuarios, agregarUsuario };
