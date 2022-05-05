import { Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  label: string;
  variant?: "default" | "primary";
  onPress?: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const backgroundColor =
    variant === "primary" ? "#2cb0b0" : "rgba(12, 13, 52, 0.05)";
  const color = variant === "primary" ? "white" : "#0c0d34";
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontFamily: "SFProText-Regular",
    fontSize: 15,
    textAlign: "center",
  },
});

export default Button;
