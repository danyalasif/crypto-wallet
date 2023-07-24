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
      <Icon size="3xl" viewBox="0 0 512 512">
        <Defs>
          <LinearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor={"#8AD4EC"} stopOpacity={1} />
            <Stop offset="21.74%" stopColor={"#EF96FF"} stopOpacity={1} />
            <Stop offset="54.03%" stopColor={"#FF56A9"} stopOpacity={1} />
            <Stop offset="85.28%" stopColor={"#FFAA6C"} stopOpacity={1} />
          </LinearGradient>
        </Defs>
        <G fill={fill && "url(#grad1)"}>
          <Path d="M230.781 256c0-63.719-51.672-115.391-115.406-115.391C51.656 140.609 0 192.281 0 256s51.656 115.375 115.375 115.375c63.734 0 115.406-51.656 115.406-115.375zm-88.125-32.656-2.781-1.156c-4.578-1.938-9.344-2.906-14.156-2.906-13.938 0-26.719 8.078-32.875 20.438h46.469l-2.875 13.891h-47.36a29.734 29.734 0 0 0-.094 2.391c0 1.984.172 4 .516 6.031h45.219l-2.844 13.875H94.906c6.734 10.484 18.219 16.844 30.813 16.844 4.281 0 8.563-.813 12.734-2.359l3.328-1.234v19.531l-1.828.469a54.4 54.4 0 0 1-14.234 1.906c-22.672 0-43.063-14.063-51.281-35.156H62.719v-13.875h8.313a51.38 51.38 0 0 1-.375-6.031c0-.797.016-1.609.063-2.391h-8v-13.891h10.469c7.094-22.938 28.438-38.781 52.531-38.781a54.523 54.523 0 0 1 18.703 3.313l2 .734-3.767 18.357zM155.938 121.688c27.281-21.375 61.531-34.125 98.906-34.141.469 0 .922.047 1.406.047L244.203 124l119.828-29.281-82.453-83.688-14.703 44.453c-4-.234-8-.391-12.031-.391-53.219 0-101.563 21.609-136.422 56.5-1.234 1.234-2.406 2.531-3.609 3.797.188 0 .375-.016.563-.016 14.14.001 27.78 2.22 40.562 6.314zM356.063 390.297c-27.281 21.391-61.531 34.141-98.906 34.141-.469 0-.938-.031-1.406-.031l12.047-36.422-119.828 29.297 82.438 83.688 14.719-44.469c3.984.25 8 .406 12.031.406 53.219 0 101.563-21.625 136.422-56.5 1.234-1.234 2.406-2.531 3.609-3.797-.188 0-.375.016-.563.016a132.772 132.772 0 0 1-40.563-6.329zM396.625 140.609c-63.734 0-115.406 51.672-115.406 115.391s51.672 115.375 115.406 115.375C460.344 371.375 512 319.719 512 256s-51.656-115.391-115.375-115.391zm0 201.922c-47.719 0-86.547-38.813-86.547-86.531s38.828-86.547 86.547-86.547 86.531 38.828 86.531 86.547-38.812 86.531-86.531 86.531z" />
          <Path d="M419.125 254.656c4.203-1.641 8.938-6.406 10.328-8.094a16.992 16.992 0 0 0 3.125-5.422c.672-1.938 1-3.953 1-6.078 0-3.703-.672-7.031-2-9.984-1.344-2.953-3.531-5.359-6.359-7.531-5.016-3.906-12.313-5.766-18.219-6.266v-12.688h-10.953v12.516l-9.922-.031v-12.484h-10.953v12.453H355.25V221c0 2.156-.156 3.438 2.078 3.891.188.031.484.094.844.141.359.078 4.734.219 5.719.344 1.484.219 2.578 1 2.578 3.047v53.984c0 1.688-.813 3.344-2.578 3.344-.984 0-5.359.266-5.719.328s-.641.109-.844.141c-2.234.453-2.078 1.766-2.078 3.906v11.109H375.172v12.156h10.953v-12.156h9.922v12.156H407v-12.25c4.047-.219 8.391-.844 11.844-1.891 4.406-1.328 6.953-3.188 9.938-5.531 3-2.344 5.281-5.141 6.859-8.391 1.563-3.234 2.344-6.766 2.344-10.609-.001-10.594-6.001-17.844-18.86-20.063zm-32.406-27.625h8.875c4.688 0 8.125.766 10.344 2.313 2.188 1.516 3.297 4.094 3.297 7.719 0 3.484-1.234 6.031-3.672 7.625s-6.031 2.406-10.719 2.406h-8.125v-20.063zm24.828 51.532c-.453 1.281-1.234 2.406-2.266 3.375-1.063.938-2.438 1.719-4.188 2.297s-3.906.859-6.469.859h-11.5V264.75h11.438c2.438 0 4.531.219 6.25.656 1.719.453 3.125 1.094 4.219 1.953 1.109.844 1.922 1.859 2.438 3.078.531 1.203.781 2.547.781 4.047 0 1.438-.25 2.797-.703 4.079z" />
          <Text x="0" y="600" fontWeight="bold" fontSize={10}>
            {text}
          </Text>
        </G>
      </Icon>
    </Center>
  );
};
