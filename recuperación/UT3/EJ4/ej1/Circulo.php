<?php 
/**1.- Diseñar una clase llamada Círculo que contenga:
• Un atributo privado llamado radio.
• Un constructor que permita declarar objetos de tipo circulo inicializado (con el valor
del radio)
• Un método llamado setRadio que permita dar valor al Radio y un método llamado
getRadio que permita ver el contenido del Radio.
• Comentar los métodos set y get anteriores y crear los métodos mágicos set y get.
Crear otra página index.php desde la  */

require_once __DIR__ . '\CalcularArea.php' ;

class Circulo{
    private $radio; 

    public function __construct($radio)       
    {
        $this->radio = $radio;  
    }

    
    public function setRadio($radio){
        $this->radio = $radio; 
    }
    public function getRadio(){
        return $this->radio; 
    }
    public function calcularArea(){
        //llamar a otro archivo
        return calcularArea($this->radio); 
    }
}





?>