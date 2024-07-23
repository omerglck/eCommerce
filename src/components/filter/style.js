import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  filterLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterButton: {
    marginLeft: 10,
    backgroundColor: '#d3d3d3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  filterButtonText: {
    fontSize: 16,
    color: '#000',
  },
});
