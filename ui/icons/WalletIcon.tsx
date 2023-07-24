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
export const WalletIcon = ({ fill, text }) => {
  return (
    <Center>
      <Icon size="5xl" viewBox="0 0 35 35">
        <Defs>
          <LinearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor={"#8AD4EC"} stopOpacity={1} />
            <Stop offset="21.74%" stopColor={"#EF96FF"} stopOpacity={1} />
            <Stop offset="54.03%" stopColor={"#FF56A9"} stopOpacity={1} />
            <Stop offset="85.28%" stopColor={"#FFAA6C"} stopOpacity={1} />
          </LinearGradient>
        </Defs>
        <G fill={fill && "url(#grad1)"}>
          <Path d="M19 7.25h-.25V5A1.76 1.76 0 0 0 17 3.25a.67.67 0 0 0-.24 0l-11.9 4h-.27l-.17.06h-.14l-.16.09-.12.17-.14.12-.11.1-.12.15a.39.39 0 0 0-.08.1 1.62 1.62 0 0 0-.1.18l-.06.11a1.87 1.87 0 0 0-.07.22.45.45 0 0 1 0 .11c-.01.113-.01.227 0 .34v10A1.76 1.76 0 0 0 5 20.75h14A1.76 1.76 0 0 0 20.75 19V9A1.76 1.76 0 0 0 19 7.25Zm-1.92-2.49a.26.26 0 0 1 .17.24v2.25H9.62l7.46-2.49ZM19.25 19a.25.25 0 0 1-.25.25H5a.25.25 0 0 1-.25-.25V9A.25.25 0 0 1 5 8.75h14a.25.25 0 0 1 .25.25v10Z" />
          <Path d="M16.5 15.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
          <Text x="0" y="32" fontWeight="bold" fontSize={10}>
            {text}
          </Text>
        </G>
      </Icon>
    </Center>
  );
};
