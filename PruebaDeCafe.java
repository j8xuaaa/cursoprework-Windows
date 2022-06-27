import java.util.Scanner;

class Cafe{
    enum TamanioDeCafe {PEQUENIO, MEDIANO, GRANDE, INMENSO};
    TamanioDeCafe tamanio;
}
class FiguraGeometrica{
    enum Figuras {CIRCULO, CUADRADO, TRIANGULO, PENTAGONO};//Son constantes
    Figuras nombre;
}
public class PruebaDeCafe{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Cafe bebida = new Cafe();
        FiguraGeometrica figura = new FiguraGeometrica();
        bebida.tamanio = Cafe.TamanioDeCafe.MEDIANO;
        figura.nombre = FiguraGeometrica.Figuras.CIRCULO;
        int valor = -1;
        System.out.println("Programa para Enum");
        System.out.println("Ingrese un valor");
        valor = sc.nextInt();

        /*if (bebida.tamanio == Cafe.TamanioDeCafe.MEDIANO) {
            System.out.println("El cafe es mediano");
        }
        if (figura.nombre == FiguraGeometrica.Figuras.CIRCULO) {
            System.out.println("La figura es un circulo");
        }*/

        switch (bebida.tamanio) {
            case PEQUENIO:
                System.out.println("El cafe es pequenio.");
                break;
            case MEDIANO:
                System.out.println("El cafe es mediano.");
                break;
            case GRANDE:
                System.out.println("El cafe es grande");
                break;
            default:
                System.out.println("El cafe es inmenso");
                break;
        }

        switch(figura.nombre){
            case CIRCULO:
                System.out.println("La figura es un circulo.");
                break;
            case CUADRADO:
                System.out.println("La figura es un cuadrado.");
                break;
            case TRIANGULO:
                System.out.println("La figura es un triangulo.");
                break;
            case PENTAGONO:
                System.out.println("La figura es un pentagono.");
                break;
        }
    }
}