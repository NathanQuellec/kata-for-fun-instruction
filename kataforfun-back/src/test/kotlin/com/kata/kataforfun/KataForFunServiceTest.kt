package com.kata.kataforfun

import org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.ValueSource
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

import com.kata.kataforfun.services.KataForFunService

@SpringBootTest
class KataForFunServiceTest {

    @Autowired
    private lateinit var kataForFunService : KataForFunService

    @ParameterizedTest
    @ValueSource(ints = [1, 3, -3, 5, 7, 9, 51, 53, 33, 27, 15])
    fun testConvertNumber(number: Int) {
        val result = kataForFunService.convertNumber(number)
        when (number) {
            1 -> assertEquals("1", result)
            3, -3 -> assertEquals("KataKata", result)
            5 -> assertEquals("ForFor", result)
            7 -> assertEquals("Fun", result)
            9 -> assertEquals("Kata", result)
            51 -> assertEquals("KataFor", result)
            53 -> assertEquals("ForKata", result)
            33 -> assertEquals("KataKataKata", result)
            27 -> assertEquals("KataFun", result)
            15 -> assertEquals("KataForFor", result)
            else -> error("Unexpected number: $number")
        }
    }
}
