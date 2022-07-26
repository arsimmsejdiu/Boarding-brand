import Animated, { interpolateNode, Extrapolate } from "react-native-reanimated";

interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
}

const Dot = ({ index, currentIndex }: DotProps) => {
  const opacity = interpolateNode(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolateRight: Extrapolate.CLAMP,
  })
  const scale = interpolateNode(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolateRight: Extrapolate.CLAMP,
  })

  return (
    <Animated.View
      style={{
        opacity,
        transform: [{ scale }],
        backgroundColor: "#2cb9b0",
        width: 6,
        height: 6,
        borderRadius: 4,
        marginHorizontal: 4,
      }}
    />
  );
};

export default Dot;
// https://stackoverflow.com/questions/67188575/react-native-reanimated-argument-of-type-animatednodenumber-is-not-assignab