//import { Platform, StyleSheet, View, Text, Image } from 'react-native';
import FoodContainer from '@/components/FoodContainer';
import { listaCards } from '@/data/listaCards';
import { FlatList, StyleSheet, View } from 'react-native';

export default function CardsScreen() {
  return (
    <View style={estilos.container}>
      <FlatList
        data={listaCards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FoodContainer
            titulo={item.titulo}
            preco={item.preco}
            url={item.url}
          ></FoodContainer>
        )
        }
        contentContainerStyle={{alignItems:"center"}}
        horizontal
     
      />
    </View>
  );
}
// Estilos ->
const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white",
    minHeight:"auto"
  
  },
})