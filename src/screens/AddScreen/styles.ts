import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginVertical: 4,
    marginHorizontal: 8,
  },
  cardContent: {
    flexDirection: 'row',  // Aligns children horizontally
    justifyContent: 'space-between',  // Distributes space between children
    alignItems: 'center',  // Vertically centers the children
  },
  titleContainer: {
    flex: 1,  // Allows the title to take up most of the space
  },
  editButton: {
    // additional styles if necessary, like margin or padding adjustments
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    // backgroundColor: 'white',
  },
  addButton: {
    marginHorizontal: 10,
  },
})