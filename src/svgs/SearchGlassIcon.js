import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SearchGlassIcon = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.40049 7.52622C1.40049 4.12623 4.21809 1.36999 7.69378 1.36999C11.1695 1.36999 13.9871 4.12623 13.9871 7.52622C13.9871 10.9262 11.1695 13.6825 7.69378 13.6825C4.21809 13.6825 1.40049 10.9262 1.40049 7.52622ZM7.69378 0C3.44462 0 0 3.3696 0 7.52622C0 11.6828 3.44462 15.0524 7.69378 15.0524C9.47361 15.0524 11.1123 14.4612 12.4158 13.4686L14.8053 15.8C15.0791 16.0672 15.5224 16.0666 15.7955 15.7987C16.0687 15.5309 16.0681 15.0972 15.7943 14.83L13.4391 12.5321C14.6511 11.202 15.3876 9.44823 15.3876 7.52622C15.3876 3.3696 11.9429 0 7.69378 0Z"
      fill="#D9D9D9"
    />
  </Svg>
);
export default SearchGlassIcon;
