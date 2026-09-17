import {View, Image, FlatList, StyleSheet, Text} from "react-native"
import { Link } from "expo-router";

export default function renderCategoria({ item, width }: { item: any; width: number }){
    const imagemLargura = width < 600 ? 150 : 180;
    const imagemAltura = imagemLargura * 1.50;
      
        return (
          <View style={styles.filme}>
      
            <Text style={styles.tituloCategoria}>
              {item.titulo}
            </Text>
      
            <FlatList
              data={item.filmes}
              keyExtractor={(filme) => filme.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={[styles.filme, { width: imagemLargura }]}>
                  <Link  href="/filme" >
                    <Image
                      source={{ uri: item.imagem }}
                      style={[
                        styles.filme,
                        {
                          width: imagemLargura,
                          height: imagemAltura,
                        },
                      ]}
                    />
                    <Text style={styles.filmeTitulo}>
                      {item.titulo}
                    </Text>
                  </Link>
      
                </View>
              )}
            />
      
          </View>
        );
    }

    const styles = StyleSheet.create({
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