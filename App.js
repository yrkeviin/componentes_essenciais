import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={require('./assets/negaooriginal.jpg')} />
      <Text style={styles.nome}>MC Negão Original</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 100,
  }
});
