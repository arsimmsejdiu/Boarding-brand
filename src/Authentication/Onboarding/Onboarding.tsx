import { View, StyleSheet, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import { onScrollEvent, useValue, interpolateColor } from 'react-native-redash'
import Slide, {SLIDE_HIGHT} from "./Slide";

const { width} = Dimensions.get("window");

const Onboarding = () => {
  const x = useValue(0)
  // TODO: useScrollEvent ?
  const onScroll = onScrollEvent({ x })
  const backgroundColor = interpolateColor(x, {
    inputRange: [0, width, width * 2, width * 3],
    outputRange: ["#bfeaf5", "#beecc4", "#ffe4d9", "#ffdddd"],
  })

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...{ onScroll }}
        >
          <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Excentric" />
          <Slide label="Funky" right />
        </Animated.ScrollView>
      </View>
      <View style={styles.footer}>
        <View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "cyan" }}
        />
        <View style={styles.overlay} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HIGHT,
    backgroundColor: "cyan",
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 75,
  },
});

export default Onboarding;
