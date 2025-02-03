import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "x",
  devide = "%",
}
export const useCalculator = () => {
  const [formula, setFormula] = useState("");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  useEffect(() => {
    //Todo calcular subresultado
    setFormula(number);
  }, [number]);

  const buildNumber = (numberString: string) => {
    //Verificar si ya existe el . decimal
    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      //Evaluar si es otro cero y no hay punto

      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      //Evaluar si es diferente de cero, no hay punto y es el primer numero

      if (numberString != "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      // Evitar el 0000.0
      if (numberString === "0" && !number.includes(".")) {
        return;
      }
    }

    setNumber(number + numberString);
  };

  const lastOperation = useRef<Operator>();

  return {
    //props
    formula,
    number,
    prevNumber,

    //methods
    buildNumber,
  };
};
