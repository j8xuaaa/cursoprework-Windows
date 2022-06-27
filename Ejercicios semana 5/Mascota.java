package org.joshuarealiquez.mascota;
public enum Mascota{
    CANARIO(1,2),
    GATO(2,4),
    PERRO(3,4),
    PEZ(4,0);
    /*(numeroDelElemento, patas del animal) */
    private int orden;
    private int numeroDePatas;
    private Mascota(int orden, int numeroDePatas){
        this.orden = orden;
        this.numeroDePatas = numeroDePatas;
    }

    public int getOrden(){
        return orden;
    }
    public int getNumeroDePatas(){
        return numeroDePatas;
    }

    public String texto(){
        return "La mascota de " + this.name().toLowerCase()+" es la mascota " + orden + " y tiene " + numeroDePatas + " patas.";
    }
}
