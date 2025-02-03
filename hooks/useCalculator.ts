import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "x",
  devide = "%",
}
export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    //setprevius number
  }, [number]);

  const clean = () => {
    setFormula("0");
    setNumber("0");
    setFormula("0");
    lastOperation.current = undefined;
  };

  const toggleSign = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }

    setNumber("-" + number);
  };

  const deleteLast = () => {
    let currentSign = "";
    let temporalNumber = number;

    if (number.includes("-")) {
      currentSign = "-";
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }
    setNumber("0");
  };

  const setLastNumber = () => {
    //TODO: Calcalute result
    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0, -1));
    }

    setPrevNumber(number);
    setNumber("0");
  };

  const devideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.devide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

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
    clean,
    toggleSign,
    deleteLast,
    devideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
  };
};
