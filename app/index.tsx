import { View } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";
import CalculatorButton from "@/components/CalculatorButton";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";

const CalculatorApp = () => {
  const {
    formula,
    prevNumber,
    number,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    devideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Main Result */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText>{formula}</ThemeText>
        {formula === prevNumber ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>
      {/* Buttons */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          blackText
          color={Colors.lightGray}
          onPress={clean}
        />

        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={toggleSign}
        />

        <CalculatorButton
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={deleteLast}
        />

        <CalculatorButton
          label="%"
          color={Colors.orange}
          onPress={devideOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="7"
          onPress={() => {
            buildNumber("7");
          }}
        />
        <CalculatorButton
          label="8"
          onPress={() => {
            buildNumber("8");
          }}
        />
        <CalculatorButton
          label="9"
          onPress={() => {
            buildNumber("9");
          }}
        />
        <CalculatorButton
          label="x"
          color={Colors.orange}
          onPress={multiplyOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="4"
          onPress={() => {
            buildNumber("4");
          }}
        />
        <CalculatorButton
          label="5"
          onPress={() => {
            buildNumber("5");
          }}
        />
        <CalculatorButton
          label="6"
          onPress={() => {
            buildNumber("6");
          }}
        />
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={subtractOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          onPress={() => {
            buildNumber("1");
          }}
        />
        <CalculatorButton
          label="2"
          onPress={() => {
            buildNumber("2");
          }}
        />
        <CalculatorButton
          label="3"
          onPress={() => {
            buildNumber("3");
          }}
        />
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={addOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          doubleSize
          onPress={() => {
            buildNumber("0");
          }}
        />
        <CalculatorButton
          label="."
          onPress={() => {
            buildNumber(".");
          }}
        />
        <CalculatorButton label="=" color={Colors.orange} onPress={() => {}} />
      </View>
    </View>
  );
};

export default CalculatorApp;
