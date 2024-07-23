import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from './style';

const CustomButton = props => {
  const {title, fullWidth} = props;
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, fullWidth && {width: fullWidth}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
