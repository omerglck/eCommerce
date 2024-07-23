import {Path, Svg} from 'react-native-svg';

const BackArrow = () => {
  return (
    <Svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 22L2 12L12 2"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.38889 12H23.6667"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default BackArrow;
