import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
        },
        
        itemContainer: {
          margin: 10,
          height: 80,
          justifyContent: 'center',
          backgroundColor: 'gray',
          borderRadius: 5,
          marginVertical: 5,
        },
        listContainer: {
          flex: 1,
          backgroundColor: '#fff',
          marginVertical: 20,
        },
        modalContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 60,
          paddingVertical: 20,
        },
        modalTitle: {
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 10,
          color: '#750D37',
        },
        modalDetailContainer: {
          paddingVertical: 20,
        },
        modalDetailMessage: {
          fontSize: 14,
          color: '#212121',
        },
        selectedEvent: {
          fontSize: 14,
          color: '#212121',
          fontWeight: 'bold',
          paddingVertical: 10,
          textAlign: 'center',
          marginBottom: 20,
        },
        buttonContainer: {
          width: "80%",
          flexDirection: 'row',
          justifyContent: 'space-around',
        },
});