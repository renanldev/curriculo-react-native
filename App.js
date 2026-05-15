import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

//AQUI TO CHAMANDO A FUNÇÃO APP, QUE É ONDE VAI FICAR TODO O MEU CÓDIGO
//O EXPO PRECISA SABER POR ONDE COMEÇAR A RENDERIZAR, E ESSE É O PONTO DE PARTIDA
//PODERIA TER QUALQUER NOME EM VEZ DE APP, MAS É CONVENCIONAL USAR ESSE NOME PRO COMPONENTE PRINCIPAL
export default function App() {
  //ESSA PARTE AQUI É PRA BUSCAR OS MEUS REPOSITÓRIOS NO GITHUB E EXIBIR
  //O CONST CRIA A VARIÁVEL REPOS, QUE CHEGA VAZIA E DEPOOIS VAI GUARDANDO OS DADOS QUE VEM DA API DO GITHUB
  //O SETREPOS É A FUNÇÃO QUE VAI ATUALIZAR A VARIÁVEL REPOS COM OS MEUS REPOSITÓRIOS
  //O USESTATE É UM HOOK DO REACT QUE QUE ATUALIZA AUTOMATICAMENTE A TELA QUANDO A VARIÁVEL REPOS ATUALIZA
  const [repos, setRepos] = useState([]);

  //USEEFFECT É OUTRO HOOK, SÓ QUE ESSE ELE EXECUTA O CÓDIGO QUE TEM DENTRO DELE QUANDO O COMPONENTE É RENDERIZADO
  //OU SEJA, QUANDO O APP RODAR, O USE EFFECT DISPARA, BUSCA OS DADOS DO MEU GITHUB PELA API E ATUALIZA A VARIÁVEL REPOS COM ESSES DADOS
  useEffect(() => {
    //FETCH É UMA FUNÇÃO DO JAVASCRIPT QUE FAZ A REQUISIÇÃO PELA INTERNET
    //EU PASSEI A URL DA API DO GITHUB E O FETCH VAI BUSCAR LÁ OS MEUS REPOS
    fetch(
      "https://api.github.com/users/renanldev/repos?sort=updated&per_page=4",
    )
      //DEPOIS ELE TRANSFORMA OS DADOS EM JSON
      //ELE CONVERTE A RESPOSTA DA API QUE CHEGA COMO TEXTO PURO EM UM OBJETO QUE O JS ENTENDE
      .then((response) => response.json())

        //QUANDO OS DADOS DA API CHEGAREM (DATA), VAI ACONTECER O SEGUINTE:
        //SE CHEGAR EM FORMATO DE ARRAY, ATUALIZA REPOS COM ESSES NOVOS DADOS
        //SE NÃO, NADA ACONTECE. O CÓDIGO IGNORA E O REPOS CONTINUA COM O VALOR QUE JÁ TINHA ANTES
        //ESCOLHI FAZER ISSO PORQUE A API DO GITHUB TEM UM LIMITE DE 60 REQUISIÇÕES POR HORA SEM AUTENTICAÇÃO
        .then((data) => { 
        if (Array.isArray(data)) {
          setRepos(data);
        }
      })
      }, []); //ESSE COLCHETE VAZIO FAZ COM QUE SÓ SEJA FEITA UMA REQUISIÇÃO AO RENDERIZAR O APP

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
            <FontAwesome name="github" size={28} color="#0d166b" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://linkedin.com/in/renanlsouza/")
            }
          >
            <FontAwesome name="linkedin" size={28} color="#0d166b" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formacoes}>
        <Text style={styles.titulo}>Formação Acadêmica</Text>

        <View style={styles.ads}>
          <Text style={styles.curso}>Graduação em Análise e Desenvolvimento de Sistemas</Text>
          <Text style={styles.faculdade}>Faculdade SENAC</Text>
          <Text style={styles.data}>2025 - 2027</Text>
        </View>

        <View style={styles.dg}>
          <Text style={styles.curso}>Graduação em Design Gráfico</Text>
          <Text style={styles.faculdade}>UNASP - Centro Universitário Adventista de São Paulo</Text>
          <Text style={styles.data}>2022-2024</Text>
        </View>
      </View>

      <View style={styles.cursos}>
        <Text style={styles.titulo}>Outros Cursos</Text>

        <View style={styles.rn}>
          <Text style={styles.curso}>Curso de React Native</Text>
          <Text style={styles.faculdade}>Treina Recife</Text>
          <Text style={styles.data}>2026</Text>
        </View>

        <View style={styles.ing}>
          <Text style={styles.curso}>Curso de Inglês - Beginner to Advanced</Text>
          <Text style={styles.faculdade}>SENAC</Text>
          <Text style={styles.data}>2020-2022</Text>
        </View>
      </View>

      <View style={styles.projetos}>
        <Text style={styles.titulo}>Projetos</Text>
        {repos.map((repo, index) => (
          <Text key={index}>{repo.name}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2e2e2",
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
    gap: 10,
    marginTop: 5,
  },

  formacoes: {
    width: "90%",
  },

  cursos: {
    width: "90%",
    marginTop: 15,
  },

  titulo: {
    fontSize: 17,
    fontWeight: "bold",
    
  },

  curso: {
    fontSize: 14,
   
  },

  ads: {
    marginTop: 3,
  },

  dg: {
    marginTop: 10,
  },

  rn: {
    marginTop: 3,
  },

  ing: {
    marginTop: 10,
  },

  faculdade: {
    MarginTop: 3,
    fontStyle: "italic",
    color: "#666",
  },

  data: {
    fontSize: 12,
    color: "#999",
  },

  projetos: {
    width: "90%",
    marginTop: 20,
  },

});
