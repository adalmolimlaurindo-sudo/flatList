import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import {View, StyleSheet, FlatList, Image} from 'react-native';


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
      },
      { id: "1a", titulo: "Oppenheimer", cor: "#1a1a2e", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg" },
      { id: "1b", titulo: "Duna 2", cor: "#16213e", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "1c", titulo: "Barbie", cor: "#0f3460", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "1d", titulo: "Poor Things", cor: "#533483", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "1e", titulo: "Saltburn", cor: "#2b2d42", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
    ],
  },

  {
    id: "2",
    titulo: "Comédia",
    filmes: [
      {
        id: "2a",
        titulo: "Superbad",
        cor: "#1a1a2e",
        imagem: "https://wallpaperaccess.com/full/8848070.jpg"
      },
      {
        id: "2b",
        titulo: "The Grand Budapest",
        cor: "#1a1a2e",
        imagem: "https://tse4.mm.bing.net/th/id/OIP.eqw9zTSb2p2SKwaElnbQNQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
      },
      {
        id: "2c",
        titulo: "Gente grande",
        cor: "#1a1a2e",
        imagem: "https://m.media-amazon.com/images/M/MV5BZjEzM2U4NTQtNTdmMi00MDU1LWEzM2YtODcwNDkzZWE5YjhlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      },
    titulo: "Ação",
    filmes: [
      { id: "2a", titulo: "John Wick 4", cor: "#1b1b2f", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "2b", titulo: "Missão Impossível", cor: "#162447", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "2c", titulo: "Top Gun", cor: "#1f4068", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "2d", titulo: "Mad Max", cor: "#1b262c", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
    ],
  },
  {
    id: "3",
    titulo: "Comédia",
    filmes: [
      { id: "3a", titulo: "Superbad", cor: "#2d132c", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "3b", titulo: "The Grand Budapest", cor: "#1c3334", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "3c", titulo: "Knives Out", cor: "#2c003e", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
    ],
  },

  {
    id: "3",
    titulo: "Romance",
    filmes: [
      {
        id: "3a",
        titulo: "Off Campus",
        cor: "#1a1a2e",
        imagem: "https://tse2.mm.bing.net/th/id/OIP.Td9lGGgeXGjQv0LcRYK9ogAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
      },
      {
        id: "3b",
        titulo: "Como eu era antes de você",
        cor: "#1a1a2e",
        imagem: "https://m.media-amazon.com/images/I/61io1vJIWFL._SL1000_.jpg"
      },
      {
        id: "3c",
        titulo: "A cinco passos de você",
        cor: "#1a1a2e",
        imagem: "https://www.atoupeira.com.br/wp-content/uploads/2019/03/a-cinco-passos-de-voce-poster-critica.png"
      },
    ],
  },

  {
    id: "4",
    titulo: "Ação",
    filmes: [
<<<<<<< HEAD
      {
        id: "4a",
        titulo: "Venom",
        cor: "#1a1a2e",
        imagem: "https://th.bing.com/th/id/R.93202e30662671af9861dc865e217668?rik=37Krs5mykMJiRg&pid=ImgRaw&r=0"
      },
      {
        id: "4b",
        titulo: "Vingadores: Ultimato",
        cor: "#1a1a2e",
        imagem: "https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg"
      },
      {
        id: "4c",
        titulo: "Matrix",
        cor: "#1a1a2e",
        imagem: "https://totallyhistory.com/wp-content/uploads/2023/05/The-Matrix-Movie-Poster-235x353.jpg"
      },
=======
      { id: "4a", titulo: "Free Solo", cor: "#0d0d0d", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "4b", titulo: "The Social Dilemma", cor: "#001011", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "4c", titulo: "My Octopus Teacher", cor: "#002b36", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
    ],
  },
  {
    id: "5",
    titulo: "Terror",
    filmes: [
      { id: "5a", titulo: "Hereditary", cor: "#200122", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "5b", titulo: "Midsommar", cor: "#190a05", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "5c", titulo: "Get Out", cor: "#0a0a0a", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
>>>>>>> 866e24725a84234383018a0cd1f4d22c6efd2041
    ],
  }
];

export default function App() {
<<<<<<< HEAD
  return (
    <View style={styles.app}>

      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoria}
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
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}

        renderItem={({ item }) => (
          <View
            style={[
              styles.filmeTitulo,
              { backgroundColor: item.cor }
            ]}
          >

            {item.imagem !== "" ? (
              <Image
                source={{ uri: item.imagem }}
                style={styles.filme}
                resizeMode="cover"
              />
            ) : (
              <Text style={styles.nomeFilme}>
                {item.titulo}
              </Text>
            )}

          </View>
        )}
      />

    </View>
  );
=======
    return (
        <View style={styles.corFundo}>
            <FlatList
                        data={categorias}
                        keyExtractor={item => item.id}
                        renderItem={renderCategoria}
                    />
        </View>
    );
>>>>>>> 866e24725a84234383018a0cd1f4d22c6efd2041
}


function renderCategoria({item}:{item:any}){
  return(
    <View style={styles.categorias}>
    {item.titulo}
    <FlatList
      data={item.filmes}
      keyExtractor={filme=>filme.id}
      horizontal={true}
      // showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:40}}
      renderItem={({item})=>(
          <Image
          source={{uri:item.imagem}}
          style={[styles.filme]}
          >             
          </Image>
          
        )}
      > </FlatList>
      
    </View>
  )
}

const styles = StyleSheet.create({
<<<<<<< HEAD

  app: {
    backgroundColor: "#000000",
    flex: 1,
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

  nomeFilme: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

});
=======
       categorias:{
        color:"white",
        backgroundColor: '#000000'
       },
       corFundo:{
        flex:1,
        backgroundColor:"black"
       },
       filme:{
        width:100,
        height:140,
        borderRadius:8,
        margin: 5,        
        justifyContent:'flex-end',
        padding:8
       },
       filmeTitulo:{
        color:'white',
        fontSize:12
       }
});
>>>>>>> 866e24725a84234383018a0cd1f4d22c6efd2041
