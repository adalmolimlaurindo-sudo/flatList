import { Stack, useLocalSearchParams } from "expo-router";
import { View, } from "react-native";

export default function pesquisa() {
    const { buscar } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Pesquisa",
                    headerStyle: {
                        backgroundColor: "rgb(93, 0, 7)",
                    },
                    headerTintColor: "#fff",
                }}
            />
            <Text style={styles.texto}>Você pesquisou por: {buscar}</Text>
        </View>
    );
}