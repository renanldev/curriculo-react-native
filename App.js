import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function App() {
  const formacoes = [
    "Graduação em Análise e Desenvolvimento de Sistemas - Faculdade SENAC",
    "Graduação em Design Gráfico - UNASP",
  ];
  const cursos = [
    "Curso de React Native - Treina Recife",
    "Curso de Inglês (Beginner to Advanced) - SENAC",
  ];

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./assets/fotoperfil.jpeg")} //aqui não dá pra usar URI porque a imagem tá local, por isso usei require
      />

      <View style={styles.dadosPessoais}>
        <Text style={styles.nome}>Renan Lima de Souza</Text>
        <Text style={styles.profissao}>Desenvolvedor Mobile</Text>

        <View style={styles.contatos}>
          
          <TouchableOpacity
            onPress={() => Linking.openURL("https://github.com/renanldev")}
          >
            <FontAwesome name="github" size={28} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL("https://linkedin.com/in/renanlsouza/")}
          >
            <FontAwesome name="linkedin" size={28} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.academico}>
      <View style={styles.formacoes}>
        <Text style={styles.titulo}>Formação Acadêmica</Text>
        <Text>{formacoes[0]}</Text>
        <Text>{formacoes[1]}</Text>
      </View>

      <View style={styles.cursos}>
        <Text style={styles.titulo}>Outros Cursos</Text>
        <Text>{cursos[0]}</Text>
        <Text>{cursos[1]}</Text>
      </View>
    </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
  },

    image: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginTop: 15,
    marginBottom: 5,
  },

  dadosPessoais: {
    alignItems: "center",
    marginBottom: 20,
  },

  nome: {
    fontSize: 23,
    fontWeight: "bold",
  },
  profissao: {
    fontStyle: "italic",
    padding: 3,
    fontSize: 16,
    color: "#666",
  },
 
  contatos: {
    flexDirection: "row",
    gap: 15,
    marginTop: 10,
  },
  
  academico: {
    width: "100%",
    alignItems: "center",
  },


  formacoes: {
    width: "90%",
    marginTop: 20,
  },

  cursos: {
    width: "90%",
    marginTop: 20,
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },


});
