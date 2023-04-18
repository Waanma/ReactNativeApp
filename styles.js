import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
        },
        inputContainer: {
          width: '80%',
          flexDirection: 'row',
          marginTop: 50,
          marginHorizontal: 40,
          justifyContent: 'center',
        },
        input: {
          width: '80%',
          borderBottomWidth: 1,
          borderBottomColor: '#BFACC8',
          marginRight: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        listContainer: {
          flex: 1,
          backgroundColor: '#fff',
          marginVertical: 20,
      },
      itemContainer: {
          height: 80,
          justifyContent: 'center',
          backgroundColor: '#9955B4',
          borderRadius: 3,
          marginVertical: 2,
          marginHorizontal: 20,
      },
      item: {
          color: '#fff',
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center'
      },
});