# Aula 1 | Curso Lógica de Programação
Youtube: [LDP](https://www.youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV)
Udemy: [LDP](https://www.udemy.com/course/algoritmos-e-logica-de-programacao-essencial/)

## Youtube: aula 1 - Teórico
A parte prática da aula 1:
    
    { Rotina / Algoritmo (1)
        Algoritmo AtravessarRua
            Olhar para a direita
            Olhar para a esquerda
            Se estiver vindo carro
                Não Atravesse
            Senão
                Atravesse
            FimSe
        FimAlgoritmo
    }

    { Rotina / Algoritmo (2)
        Algoritmo AtravessarRua
            Olhar para a esquerda
            Olhar para a direita
            Se não estiver vindo carro
                Atravesse
            Senão
                Não Atravesse
            FimSe
        FimAlgoritmo
    }

    { Rotina / Algoritmo que soluciona a equação de segundo grau
        algoritmo "equacao"
        var
            a, b, c: inteiro
            delta: real
            x1, x2: real
        inicio
            Escreval ("Equacao do Segundo Grau")
            Escreval ("-----------------------")
            Escreval ("Informe o valor de A: ")
            Leia(a)
            Escreval ("Informe o valor de B: ")
            Leia(b)
            Escreval ("Informe o valor de C: ")
            Leia(c)
            Escreval ("-----------------------")
            Escreval ("Sua equacao e: ", a, "x2 +", b, "x +", c, " = 0")
            delta := (b*b) - 4*a*c
            Escreval ("Valor de Delta: ", delta:4:2)
            Escreval ("-----------------------")
            Se (delta < 0) entao
                Escreval ("Para Delta negativo, nao existem raizes Reais")
                senao
                    Se (delta = 0)
                    x1 := (-b + raizQ(delta)) /(2*a)
                    x2 := (-b - raizQ(delta)) /(2*a)
                    Escreval ("Para Delta positivo. Raizes diferentes: ")
                    Escreval ("x' = ", x1:4:2)
                    Escreval ("x' = ", x2:4:2)
                FimSe
            FimSe
        fimalgoritmo
    }

## Udemy: aula 1 - Teórico
A parte prática da aula 1:

    {
      sem nenhum codigo na aula 1
    }