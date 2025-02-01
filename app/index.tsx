import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";
import CalculatorButton from "@/components/CalculatorButton";
import { Colors } from "@/constants/Colors";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Main Result */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText>50 X 50</ThemeText>
        <ThemeText variant="h2">500</ThemeText>
      </View>
      {/* Buttons */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          blackText
          color={Colors.lightGray}
          onPress={() => {}}
        />

        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={() => {}}
        />

        <CalculatorButton
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={() => {}}
        />

        <CalculatorButton label="+" color={Colors.orange} onPress={() => {}} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => {}} />
        <CalculatorButton label="8" onPress={() => {}} />
        <CalculatorButton label="9" onPress={() => {}} />
        <CalculatorButton label="x" color={Colors.orange} onPress={() => {}} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => {}} />
        <CalculatorButton label="5" onPress={() => {}} />
        <CalculatorButton label="6" onPress={() => {}} />
        <CalculatorButton label="-" color={Colors.orange} onPress={() => {}} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => {}} />
        <CalculatorButton label="2" onPress={() => {}} />
        <CalculatorButton label="3" onPress={() => {}} />
        <CalculatorButton label="+" color={Colors.orange} onPress={() => {}} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="0" doubleSize onPress={() => {}} />
        <CalculatorButton label="." onPress={() => {}} />
        <CalculatorButton label="=" color={Colors.orange} onPress={() => {}} />
      </View>
    </View>
  );
};

export default CalculatorApp;
