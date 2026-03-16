<?php 

class Monedero{
    static $numero_monederos; 
    private $dinero; 

    public function __construct($dinero)
    {
    
    $this::$numero_monederos++; 
    $this->dinero = $dinero; 
    

    }

    public function __destruct() {
        $this::$numero_monederos--; 
    }
    public function meter($dinero){
        if($dinero < 0 ){
            return "Como vas a meter dinero negativo"; 
        }

        $this->dinero += $dinero; 
        return " <br> Dinero incrementado con éxito: ". $this->dinero ." <br>" ;
    }
    public function sacar($dinero){
        if(!is_int($dinero)){
            return "<br>Introduzca un número válido la próxima vez<br>"; 
        }
        if($dinero < 0 ){
            return "<br>Como vas a sacar dinero negativo<br>"; 
        }
        if($dinero > $this->getDinero()){
            return "<br>Estas sacando más dinero del disponible en esta cartera.<br>"; 
        }


        $this->dinero -=$dinero; 
        return $dinero; 
    }
    public function getDinero(){
        return $this->dinero; 
    }
}