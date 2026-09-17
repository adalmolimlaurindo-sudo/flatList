import { View, StyleSheet, FlatList, Image, Text, TextInput} from 'react-native';
import { Pressable } from "react-native";
import { router } from "expo-router";

const categorias = [
  {
    id: "1",
    titulo: "Em Alta",
    filmes: [
      {
        id: "1a",
        titulo: "Oppenheimer",
        cor: "#1a1a2e",
        imagem: "https://static1.colliderimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/oppenheimer-poster.jpg"
      },
      {
        id: "1b",
        titulo: "Duna 2",
        cor: "#1a1a2e",
        imagem: "https://cinepop.com.br/wp-content/uploads/2024/01/duna-parte-2-1.jpg.webp"
      },
      {
        id: "1c",
        titulo: "Barbie",
        cor: "#1a1a2e",
        imagem: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/barbie-movie-poster.jpg"
      },
      {
        id: "1d",
        titulo: "Poor Things",
        cor: "#1a1a2e",
        imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBekm28pMcH4_rUph1y8z_G_QlDwvmzSKeCpu19hkADjjix5WgT8HlmqdL0wXrPWQd-MksVy9z31co2J6WAo1hVB67ZhbDiZKXPq55e0L4tS8OmMDeiEj0TuR4cm1WrRh5O35cLzTqKCKDItIWw2w2WZojx2MrnrD61ZUjyPEpfAEUKdZoNvA19Feg798_/s2000/poorthngs.jpg"
      },
      {
        id: "1e",
        titulo: "Saltburn",
        cor: "#1a1a2e",
        imagem: "https://tse1.mm.bing.net/th/id/OIP.Kxlp2q0VwgbDSsi1v92yFwHaK-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
      }
    ]
  },

  {
    id: "2",
    titulo: "Ação",
    filmes: [
      {
        id: "2a",
        titulo: "John Wick 4",
        cor: "#1b1b2f",
        imagem: "https://image.tmdb.org/t/p/original/mj2Z9HnRSIEk3n7yVPoOY4Uzzfh.jpg"
      },
      {
        id: "2b",
        titulo: "Missão Impossível",
        cor: "#162447",
        imagem: "https://m.media-amazon.com/images/S/pv-target-images/9cf4d37563691d4ce4c34e866b3ff015f3a5d52dab3915e284e02fcd6dbe579d.jpg"
      },
      {
        id: "2c",
        titulo: "Top Gun",
        cor: "#1f4068",
        imagem: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
      },
      {
        id: "2d",
        titulo: "Mad Max",
        cor: "#1b262c",
        imagem: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a6277c169328487.644a87f7d7f4f.jpg"
      }
    ]
  },

  {
    id: "3",
    titulo: "Comédia",
    filmes: [
      {
        id: "3a",
        titulo: "Superbad",
        cor: "#2d132c",
        imagem: "https://wallpaperaccess.com/full/8848070.jpg"
      },
      {
        id: "3b",
        titulo: "The Grand Budapest",
        cor: "#1c3334",
        imagem: "https://tse4.mm.bing.net/th/id/OIP.eqw9zTSb2p2SKwaElnbQNQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
      },
      {
        id: "3c",
        titulo: "Gente Grande",
        cor: "#1a1a2e",
        imagem: "https://m.media-amazon.com/images/M/MV5BZjEzM2U4NTQtNTdmMi00MDU1LWEzM2YtODcwNDkzZWE5YjhlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      }
    ]
  },

  {
    id: "4",
    titulo: "Romance",
    filmes: [
      {
        id: "4a",
        titulo: "Off Campus",
        cor: "#1a1a2e",
        imagem: "https://tse2.mm.bing.net/th/id/OIP.Td9lGGgeXGjQv0LcRYK9ogAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
      },
      {
        id: "4b",
        titulo: "Como Eu Era Antes de Você",
        cor: "#1a1a2e",
        imagem: "https://m.media-amazon.com/images/I/61io1vJIWFL._SL1000_.jpg"
      },
      {
        id: "4c",
        titulo: "A Cinco Passos de Você",
        cor: "#1a1a2e",
        imagem: "https://www.atoupeira.com.br/wp-content/uploads/2019/03/a-cinco-passos-de-voce-poster-critica.png"
      }
    ]
  },

  {
    id: "5",
    titulo: "Terror",
    filmes: [
      {
        id: "5a",
        titulo: "Hereditary",
        cor: "#200122",
        imagem: "https://tse4.mm.bing.net/th/id/OIP.DjEEFeE4_Dc05dSBB2GfwAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        
      },
      {
        id: "5b",
        titulo: "Midsommar",
        cor: "#190a05",
        imagem: "https://www.ecured.cu/images/c/cd/Midsommar-121406730-large.jpg"
      },
      {
        id: "5c",
        titulo: "Get Out",
        cor: "#0a0a0a",
        imagem: "https://images.moviesanywhere.com/1eac8b1747c905f18fbc228725204309/1406b595-0ac4-4bd7-90c4-65113b6b157a.jpg"
      }
    ]
  }
];

export default function App() {
  return (
    <View style={styles.app}>
      <TextInput
        placeholder="Pesquisar" 
        style={styles.input}
      />
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoria}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

function renderCategoria({ item }: { item: any }) {
  return (
    <View style={styles.categorias}>

      <Text style={styles.tituloCategoria}>
        {item.titulo}
      </Text>

      <FlatList
        data={item.filmes}
        keyExtractor={(filme) => filme.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listaFilmes}
        renderItem={({ item }) => (
          <Pressable
             onPress={() => router.push(`/filme/${item.id}`)}
             style={[
             styles.filmeTitulo,
             { backgroundColor: item.cor }
            ]}
          >
            <Image
             source={{ uri: item.imagem }}
             style={styles.filme}
             resizeMode="cover"
            />
          </Pressable>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  app: {
    flex: 1,
    backgroundColor: "#000000",
  },

  categorias: {
    backgroundColor: "#141414",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },

  tituloCategoria: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  listaFilmes: {
    paddingBottom: 10,
  },

  filmeTitulo: {
    width: 150,
    height: 200,
    marginRight: 10,
    borderRadius: 15,
    overflow: "hidden",
  },

  filme: {
    width: "100%",
    height: "100%",
  },
  input: {
    backgroundColor: "#1a1a2e",
    color: "#ffffff",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
  }

});