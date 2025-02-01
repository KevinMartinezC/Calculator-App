import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    devide = '%'

}
export const useCalculator = () => {
    const [formula, setFormula] = useState('')
    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')

    useEffect(() => {
        //Todo calcular subresultado
        setFormula(number)
    }, [number] )
    
    const buildNumber = (numberString: string) =>{
        console.log(numberString)
    }

    const lastOperation = useRef<Operator>()

    return {
        //props
        formula,
        number,
        prevNumber,

        //methods
        buildNumber
    }
}