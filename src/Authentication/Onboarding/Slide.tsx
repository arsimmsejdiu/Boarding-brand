import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import { ImageRequireSource } from "react-native";

interface SlideProps {
  title: string;
  right?: boolean;
  picture: {
    src: ImageRequireSource;
    width: number;
    height: number;
  };
}

const { width, height } = Dimensions.get("window");
export const SLIDE_HIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;

const Slide = ({ title, right, picture }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image
          source={picture.src}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: width - BORDER_RADIUS,
            height: (width - BORDER_RADIUS) * picture.height / picture.width
          }}
        />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: "SFProText-Bold",
    color: "white",
    textAlign: "center",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Slide;
