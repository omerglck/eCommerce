import Svg, {Path} from 'react-native-svg';

const Cart = ({width = 37, height = 32, fill = 'none', strokeWidth = 1}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 37 32"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.98357 11.5061C2.54219 11.5057 2.11851 11.6797 1.80487 11.9903C1.49123 12.3008 1.31305 12.7228 1.30915 13.1641C1.30736 13.3171 1.32952 13.4694 1.37482 13.6156L5.61831 28.5786C5.81499 29.2776 6.23532 29.8928 6.81494 30.3301C7.39456 30.7674 8.10153 31.0027 8.82761 31H27.9357C28.6631 31.0006 29.3711 30.7648 29.9529 30.3281C30.5348 29.8913 30.9589 29.2774 31.1614 28.5786L35.4049 13.6156L35.4541 13.1641C35.4502 12.7228 35.272 12.3008 34.9584 11.9903C34.6448 11.6797 34.2211 11.5057 33.7797 11.5061H2.98357ZM18.8511 24.6446C18.1689 24.6412 17.503 24.4358 16.9374 24.0543C16.3718 23.6728 15.9319 23.1323 15.6732 22.501C15.4145 21.8698 15.3486 21.176 15.4838 20.5073C15.6189 19.8386 15.9492 19.225 16.4328 18.7438C16.9164 18.2626 17.5317 17.9354 18.201 17.8036C18.8704 17.6717 19.5638 17.7411 20.1938 18.0029C20.8237 18.2648 21.362 18.7074 21.7407 19.2749C22.1193 19.8423 22.3214 20.5093 22.3214 21.1915C22.3171 22.109 21.9495 22.9873 21.2992 23.6345C20.6488 24.2816 19.7686 24.6448 18.8511 24.6446V24.6446Z"
        stroke="black"
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
      <Path
        d="M10.502 11.5061L18.3817 1L26.2613 11.5061"
        stroke="black"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Cart;
