import { Center, Icon } from "native-base";
import Svg, {
  G,
  Path,
  Defs,
  Stop,
  LinearGradient,
  Text,
} from "react-native-svg";
//linear-gradient(135deg, #8AD4EC 0%, #EF96FF 21.74%, #FF56A9 54.03%, #FFAA6C 85.28%)
export const SwapIcon = ({ fill, text }) => {
  return (
    <Center>
      <Icon size="5xl" viewBox="0 0 35 35">
        <Defs>
          <LinearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor={"#8AD4EC"} stopOpacity={1} />
            <Stop offset="22%" stopColor={"#EF96FF"} stopOpacity={1} />
            <Stop offset="54%" stopColor={"#FF56A9"} stopOpacity={1} />
            <Stop offset="85%" stopColor={"#FFAA6C"} stopOpacity={1} />
          </LinearGradient>
        </Defs>
        <G fill={fill && "url(#grad1)"}>
          <Path d="M19.75 16c0 .41-.34.75-.75.75H6.81l1.22 1.22c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.5-2.5a.776.776 0 0 1-.16-.24.707.707 0 0 1 0-.57c.04-.09.09-.17.16-.24l2.5-2.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.22 1.22H19c.41 0 .75.34.75.75V16ZM5 8.75h12.19l-1.22 1.22c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.5-2.5c.07-.07.12-.15.16-.24.08-.18.08-.39 0-.57a.776.776 0 0 0-.16-.24l-2.5-2.5a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.22 1.22H5c-.41 0-.75.34-.75.75s.34.75.75.75v-.01Z" />
        </G>
        <Text
          x="0"
          y="32"
          fontWeight="bold"
          fontSize={10}
          fill={fill && "url(#grad1)"}
        >
          {text}
        </Text>
      </Icon>
    </Center>
  );
};
