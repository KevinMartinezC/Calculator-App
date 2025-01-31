import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemeText>50 X 50</ThemeText>
      <ThemeText variant="h2">500</ThemeText>
    </View>
  );
};

export default CalculatorApp;
