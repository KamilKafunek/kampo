import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
},
button: {
    borderWidth: 2,
    borderColor: '#007BFF', // Blue border color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
},
buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF' // Blue text color to match the border
}
})