const contador={
    valor_inicial:0,
    valor_maximo:10,
    valor_actual:0,
    valor_mínimo:0,
    aumentar_valor:+1 ,
    disminuir_valor:-1,

}
contador.aumentar = function() {
    this.valor_actual = this.valor_actual+this.aumentar_valor;
    return this.valor_actual;
}
console.log(contador.aumentar());

contador.disminuir = function() {
    
    this.valor_actual= this.valor_actual+this.disminuir_valor;

    return this.valor_actual;
}
console.log(contador.disminuir());

contador.restablecer = function() {
       this.valor_actual= 0;
    return this.valor_actual;
}
console.log(contador.restablecer());









