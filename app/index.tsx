//import { Platform, StyleSheet, View, Text, Image } from 'react-native';
import FoodContainer from '@/components/FoodContainer';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={estilos.container}>
      <FoodContainer peso= '2.15'  url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7LRhCCPUD2ICU3VYsTbw_6s2vMKLlgRVytg&s" titulo="Meu doginho"></FoodContainer>
      <FoodContainer peso= '1.15'  url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx428teOUFkJAy3DLmRWKyypOM30WhhxopFA&s" titulo="Meu gatinho"></FoodContainer>
      <FoodContainer peso= '1.15'  url="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_1280.png" titulo="Meu gatinho Fofo"></FoodContainer>
    </View>
  );
}
// Estilos ->
const estilos = StyleSheet.create({
  imagem: {
    height: "100%",
    width: "50%",
    borderRadius: 20
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",

  },
 
  texto: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white"
  }
})