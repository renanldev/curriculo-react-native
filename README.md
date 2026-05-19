# 📱 Currículo em React Native

Atividade prática da disciplina **Coding: Mobile** — Faculdade SENAC.

## 📋 Sobre o projeto

Aplicativo mobile de currículo desenvolvido com React Native e Expo, consumindo a API pública do GitHub para exibir repositórios automaticamente.

## ✨ Funcionalidades

- Foto de perfil
- Dados pessoais (nome e cargo)
- Links clicáveis para GitHub e LinkedIn
- Formação acadêmica
- Outros cursos
- Projetos buscados automaticamente via API do GitHub

## 🚀 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [GitHub API](https://docs.github.com/en/rest)
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/)

## ▶️ Como rodar o projeto

**Pré-requisitos:** Node.js e Expo Go instalados no celular.

```bash
# Clone o repositório
git clone https://github.com/renanldev/curriculo-react-native.git

# Entre na pasta
cd atv-react-native

# Instale as dependências
npm install

# Inicie o projeto
npx expo start
```

Escaneie o QR Code com o Expo Go (Android) ou a câmera (iOS).

## 📡 API utilizada

**GitHub REST API** — endpoint público, sem autenticação necessária.

```
GET https://api.github.com/users/{username}/repos
```

Retorna os repositórios públicos do usuário em formato JSON.

---

Desenvolvido por [Renan Souza](https://github.com/renanldev)
