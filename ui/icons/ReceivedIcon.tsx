import { Center, Icon } from "native-base";
import Svg, {
  G,
  Path,
  Defs,
  Stop,
  LinearGradient,
  Text,
} from "react-native-svg";

export const ReceivedIcon = ({ fill = "none", size = "5xl", ...props }) => {
  return (
    <Center>
      <Icon size={size} viewBox="0 0 24 24">
        <Path
          d="M13 14H7m6 0l-2.5-2.5M13 14l-2.5 2.5M21 12v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C19.48 8 18.92 8 17.8 8H3m18 4v4m0-4h-2a2 2 0 100 4h2m0 0v.8c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C19.48 20 18.92 20 17.8 20H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C3 18.48 3 17.92 3 16.8V8m15 0v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C16.48 4 15.92 4 14.8 4H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C3 5.52 3 6.08 3 7.2V8"
          stroke={"#000"}
          fill={fill}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        />
      </Icon>
    </Center>
  );
};
