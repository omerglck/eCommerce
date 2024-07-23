import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../../theme/colors';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  innerContent: {
    width: width * 0.7,
  },
  subScrollView: {
    maxHeight: height * 0.2,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 15,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 18,
    marginVertical: 10,
  },
  searchInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 5,
    marginBottom: 10,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#d3d3d3',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  applyButton: {
    backgroundColor: AppColors.PRIMARY,
  },
  clearButton: {
    backgroundColor: AppColors.SECONDARY,
  },
});
