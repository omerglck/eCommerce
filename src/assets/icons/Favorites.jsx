import Svg, {Path} from 'react-native-svg';

const Favorites = ({
  width = 35,
  height = 32,
  fill = 'none',
  storeWidth = 1,
  stroke = 'black',
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 35 32"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M33.7618 12.5385H21.358L17.608 1L13.858 12.5385H1.45412L11.5503 19.4615L7.65604 31L17.608 23.7885L27.5599 31L23.6657 19.4615L33.7618 12.5385Z"
        stroke={stroke}
        stroke-width={storeWidth}
        stroke-linejoin="round"
        fill={fill}
      />
    </Svg>
  );
};

export default Favorites;
