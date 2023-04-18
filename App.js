import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Escribe aquí' style={styles.input} />
        <Button title='Buscar' color='#9955B4'/>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Item 1</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Item 2</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Item 3</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Item 4</Text>
        </View>
      </View>
    </View>
  );
}

