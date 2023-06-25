package main

import (
	"fmt"
)

/*
  https://go.dev/ref/spec ;
  https://go.dev/doc/effective_go ;
  https://metanit.com/go/tutorial/2.11.php <-- топовые сайты
*/

/*
  Ключевые слова
  Следующие ключевые слова зарезервированы и не могут использоваться в качестве идентификаторов.

    break        default      func         interface    select
    case         defer        go           map          struct
    chan         else         goto         package      switch
    const        fallthrough  if           range        type
    continue     for          import       return       var

  Операторы и знаки препинания
  Следующие последовательности символов представляют операторы (включая операторы присваивания) и знаки препинания:

    +    &     +=    &=     &&    ==    !=    (    )
    -    |     -=    |=     ||    <     <=    [    ]
    *    ^     *=    ^=     <-    >     >=    {    }
    /    <<    /=    <<=    ++    =     :=    ,    ;
    %    >>    %=    >>=    --    !     ...   .    :
        &^          &^=          ~

  Types:
    any bool byte comparable
    complex64 complex128 error float32 float64
    int int8 int16 int32 int64 rune string
    uint uint8 uint16 uint32 uint64 uintptr

  Constants:
    true false iota

  Zero value:
    nil

  Functions:
    append cap close complex copy delete imag len
    make new panic print println real recover
*/

type Bool struct { Bool bool }
type Int = int

type person struct {
  name string
  sex Bool
  age int
}

func main() {

  /* 
    создание константы и ее типизация в Go :

    const myInt int = 1

    альтернатива подобному коду ->>
  */

  const myName string = "Tailer Derden" // константа типа string

  myInt := 10 + 4 // изменяемая переменная, которая требует ее применения

  /* 
    fmt - модуль Go для ввода, вывода и методов со строковыми данными
  */

  fmt.Print("Hello ") // вывод данных, не касаемых определенной перемены (не являющихся ею)
  fmt.Println("Wor"+"ld", myInt) // вывад данных, не влючающий форматирование
  fmt.Printf("i`m %s\n", myName) // вывод любыч данных, например, отформатированной строки Printf -> PrintFormat (включает в себя форматирование)

  /* 
    основные типы Go ->
  */

  /* 
    data :
      - Arrays;
      - Maps;
  */

  users := []int{1, 2, 3, 4, 5}
  myCheckList := map[string]int{"boy" : 1, "girl" : 4}

  myCheckList["boy"] = 10

  users = append(users, 4, 5)

  p := new([]int)
  *p = []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

  fmt.Println(*p)
  
  /* 
    указатели ->>
  */

  myPointer := new(int)

  *myPointer = 10234454

  fmt.Println(*myPointer)

  /* 
    операторы :
      - условные : if/else;
      - циклы : for/break/continue
      - конструкция switch/switch-type/select
  */

  switch myInt {
    case 14 : // myInt == 14
      for {
        if myInt > 10 {
          myInt--
        } else {
          break
        }
      }
      fmt.Println("Your stupid age :", myInt)
    default :
      return // не выполнится можно использовать break
  }

  /* 
    функции :
      - замыкания;
      - рекурсивные;
      - анонимные;
      - defer/panic/go/goto
  */
  sum := Sum 

  ourSum, result := sum(users...)

  defer fmt.Println(fmt.Sprintf("%s : %d", result, ourSum)) // выполнится после завершения остального кода (начиная с конца)

  /* 
    расширенные (производные) типы и пользовательские интерфейсы :
      -type;
      -interface;
      -struct;
  */
  	
  tom := person{name : "Tom", age : 23, sex : Bool{ Bool : false}}

  fmt.Println(tom)

}

func Sum(variables ...Int) ( s Int, res string) {

  s = 0 

  for _, num := range variables {
    s += num
  }

  switch {
    case s == 0 :
      panic("Уж лучше 0 нежели отрицательные значения/")
    case s < 0 :
      res = "М-да.."
    default :
      res = "Отлично!"
  }

  res = fmt.Sprintf("%s Ваше значение", res)

  return
}
