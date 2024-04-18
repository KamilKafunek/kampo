import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'white' // This is necessary to prevent the TextInput from being transparent
  },
  picker: {
    marginBottom: 20,
    backgroundColor: 'white'
  },
  button: {
    marginVertical: 10, // Adds vertical spacing around the button
  },
  saveButton: {
    backgroundColor: '#6200ee', // Using a color that might fit your app theme for save
  },
  cancelButton: {
    borderColor: '#6200ee', // Optional: if you want the cancel button to have a border
    borderWidth: 1
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Ensures buttons are evenly spaced in the footer
    padding: 10
  },
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editButton: {
    marginLeft: 10 // Ensures some space between the text and the button
  },
});
