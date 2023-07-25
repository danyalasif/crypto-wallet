import { Center, Icon } from "native-base";
import Svg, {
  G,
  Path,
  Defs,
  Stop,
  LinearGradient,
  Text,
} from "react-native-svg";

export const EyeIcon = ({ fill = "none", size = "5xl", ...props }) => {
  return (
    <Center>
      <Icon size={size} viewBox="0 0 24 24">
        <G fill={fill}>
          <Path
            d="M3.118 12.467a.987.987 0 010-.935C5.01 8.033 8.505 5 12 5s6.99 3.033 8.882 6.533a.987.987 0 010 .935C18.99 15.967 15.495 19 12 19s-6.99-3.033-8.882-6.533v0z"
            stroke="#3D8DFF"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
          />
          <Path
            d="M14.046 9.804a3 3 0 11-4.24 4.241 3 3 0 014.24-4.24"
            stroke="#3D8DFF"
            strokeWidth={1.429}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
          />
        </G>
      </Icon>
    </Center>
  );
};
