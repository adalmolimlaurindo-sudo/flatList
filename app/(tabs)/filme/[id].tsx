import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const filmes = {
  "1a": {
    titulo: "Oppenheimer",
    ano: "2023",
    idade: "+16",
    genero: "Drama / Biografia",
    duracao: "3h",
    imagem: "https://static1.colliderimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/oppenheimer-poster.jpg",
    descricao: "A história do físico J. Robert Oppenheimer e seu papel no desenvolvimento da primeira bomba atômica."
  },

  "1b": {
    titulo: "Duna 2",
    ano: "2024",
    idade: "+14",
    genero: "Ficção científica",
    duracao: "2h 46min",
    imagem: "https://cinepop.com.br/wp-content/uploads/2024/01/duna-parte-2-1.jpg.webp",
    descricao: "Paul Atreides se une aos Fremen enquanto busca vingança contra aqueles que destruíram sua família."
  },

  "1c": {
    titulo: "Barbie",
    ano: "2023",
    idade: "+12",
    genero: "Comédia / Fantasia",
    duracao: "1h 54min",
    imagem: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/barbie-movie-poster.jpg",
    descricao: "Barbie deixa Barbieland e embarca em uma aventura no mundo real."
  }
};

export default function Filme() {

  const { id } = useLocalSearchParams();

  const filme = filmes[id as keyof typeof filmes];

  if (!filme) {
    return (
      <View style={styles.container}>
        <Text style={styles.erro}>Filme não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: filme.imagem }}
        style={styles.poster}
      />

      <Text style={styles.titulo}>
        {filme.titulo}
      </Text>

      <Text style={styles.info}>
        {filme.ano} · {filme.idade} · {filme.genero} · {filme.duracao}
      </Text>

      <Text style={styles.descricao}>
        {filme.descricao}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 20,
  },

  poster: {
    width: "100%",
    height: 450,
    borderRadius: 10,
  },

  titulo: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },

  info: {
    color: "#aaaaaa",
    fontSize: 14,
    marginTop: 8,
  },

  descricao: {
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
  },

  erro: {
    color: "#ffffff",
    fontSize: 20,
  },

});