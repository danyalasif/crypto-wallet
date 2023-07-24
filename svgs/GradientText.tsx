import Svg, {
  LinearGradient,
  Text,
  Defs,
  Stop,
  TSpan,
  Path,
} from "react-native-svg";

export const GradientText = ({ text, fontSize }) => {
  return (
    <Svg viewBox="0 0 300 32" height={fontSize} width="300">
      <Path
        fill="url(#a)"
        d="M-30.291-93.121h238.242v238.242H-30.291z"
        style={{
          mixBlendMode: "multiply",
        }}
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={-30.291}
          x2={213.063}
          y1={-93.121}
          y2={-87.78}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#8AD4EC" />
          <Stop offset={0.217} stopColor="#EF96FF" />
          <Stop offset={0.54} stopColor="#FF56A9" />
          <Stop offset={0.853} stopColor="#FFAA6C" />
        </LinearGradient>
      </Defs>
      <Text fill="url(#rainbow)">
        <TSpan fontSize={fontSize} x="0" y={fontSize}>
          {text}
        </TSpan>
      </Text>
    </Svg>
  );
};
