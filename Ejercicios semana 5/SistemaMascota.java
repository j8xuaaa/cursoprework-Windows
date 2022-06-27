package org.joshuarealiquez.sistema;
import java.util.Scanner;
import org.joshuarealiquez.mascota.Mascota;

/**
 * SistemaMascota
 */
public class SistemaMascota {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int patas = -1;
    
        Mascota [] mascotas = Mascota.values();
        System.out.println("Ingrese una cantidad de patas: ");
        patas = sc.nextInt();
        //int auxiliar = mascotas[0].getNumeroDePatas();
        if (patas == mascotas[0].getNumeroDePatas()) {
            System.out.println(mascotas[0].texto());
        }   
    }
    

    
}