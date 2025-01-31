import { Text, TextProps } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";

interface Props extends TextProps {
  variant?: "h1" | "h2";
}

const ThemeText = ({ children, variant = "h1", ...restProps }: Props) => {
  return (
    <Text
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variant === "h1" ? globalStyles.mainResult : globalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...restProps}
    >
      {children}
    </Text>
  );
};

export default ThemeText;

// restProps is a way to pass all the props that are not destructured in the component.
// In this case, we are passing all the props that are not children to the Text component.
//Extend the TextProps interface to include the children prop.
