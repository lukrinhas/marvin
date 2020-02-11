function maiusculo(palavra) {
const palavras = palavra;
return palavras.substring(3,0).toUpperCase().concat(palavra.substring(3))
}
