import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const formacoes = [
    'Graduação em Análise e Desenvolvimento de Sistemas - Faculdade SENAC',
    'Graduação em Design Gráfico - UNASP',
    'Curso de React Native - Treina Recife'
  ]
};

return (
  <View styles={styles.container}/>
  <Image
  source={{ uri: 'https://example.com/image.jpg' }}
  style={styles.foto}
)
  />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
