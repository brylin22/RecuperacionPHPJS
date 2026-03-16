<?php 

    class Coche{
        private $matricula; 
        private $velocidad; 
        
        public function __construct($matricula, $velocidad)
        {
            $this->matricula = $matricula; 
            $this->velocidad = $velocidad; 
        }
        public function acelera($plus){
            if(!is_int($plus)){
                return "El valor intrducido no es un número"; 

            }
            if($plus < 0){
                return "No se puede aumentar la velocidad con un número negativo. "; 
            }
            $velocidadFinal  = $this->velocidad + $plus; 
            if($velocidadFinal > 120){
                $this->velocidad = 120; 
                return "La velocidad ha pasado el límete, se limita a 120"; 
            }else{
                 $aux = $this->velocidad; 
                $this->velocidad = $velocidadFinal; 
                return "La velocidad se ha incrementado de ". $aux . " a ". $velocidadFinal; 
            }

        }
        public function frena($plus){
            if(!is_int($plus)){
                return "El valor intrducido no es un número"; 

            }
            if($plus < 0){
                return "No se puede frenar la velocidad con un número negativo. "; 
            }
            $velocidadFinal  = $this->velocidad - $plus; 
            if($velocidadFinal < 0){
                $this->velocidad = 0; 
                return "Has frenado a fondo, lo más lento que se puede ir a es 0 km por hora. "; 
            }else{
                 $aux = $this->velocidad; 
                $this->velocidad = $velocidadFinal; 
                return "La velocidad se ha disminuido de ". $aux . " a ". $velocidadFinal; 
            }

        }
        public function getMatricula(){
            return $this->matricula; 
        }
        public function getVelocidad(){
            return $this->velocidad; 
        }
    
    
    
    }








?>