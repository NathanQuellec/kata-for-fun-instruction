package com.kata.kataforfun.services

import org.springframework.stereotype.Component
import kotlin.math.abs

@Component
class KataForFunService {

   /*   Création de deux dictionnaires, chacun correspondant à un type de règles.
        Cela nous permettra d'étendre ces règles de manière indépendante à l'avenir.
   */ 

    private val divisorRulesMap = mapOf(
        3 to "Kata",
        5 to "For",
    )

    private val containRulesMap = mapOf(
        3 to "Kata",
        5 to "For",
        7 to "Fun",
    )

    private val resultBuilder  = StringBuilder()

    public fun convertNumber(inputNumber: Int): String {
        resultBuilder.setLength(0)
    
        applyDivisorRules(abs(inputNumber))     
        applyContainRules(abs(inputNumber))

        if(resultBuilder.isEmpty()){
            resultBuilder.append(inputNumber.toString())
        }

        return resultBuilder.toString()
    }

    private fun applyDivisorRules(inputNumber: Int) {
        for( (key, value) in divisorRulesMap){
            if (inputNumber % key == 0){
                resultBuilder.append(value)
            }
        }
    }

    /*  On itère sur chaque chiffre de l'input. Si celui-ci est une clé 
        du dictionnaire "containRulesMap", on ajoute la valeur
        associée du dictionnaire au ResultBuilder.
    */
    private fun applyContainRules(inputNumber: Int) {
        for(digit in inputNumber.toString()){
            if(containRulesMap.containsKey(digit.toString().toInt())){
                resultBuilder.append(containRulesMap.get(digit.toString().toInt()))
            }
        }
    }
}
