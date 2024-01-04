function printName(name) {
  console.log(name);
}

const sobrenome = "Marques";

module.exports = { printName, sobrenome };

// Também é possível exportar diretamente:

// exports.sobrenome2 = 'Marques'
