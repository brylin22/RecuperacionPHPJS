<?php 
/**17. Crea una función que realice la suma de 3 números enteros y se
asegure de que no se le puede pasar otro tipo de dato
*/

function suma(int $a, int $b, int $c){
    if(!is_int($a)){
        echo "No puedes serguir. "; 
        return; 
    }
    return ( $a + $b + $c); 

}