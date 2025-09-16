//import { Platform, StyleSheet, View, Text, Image } from 'react-native';
import FoodContainer from '@/components/FoodContainer';
import { StyleSheet, View } from 'react-native';
 
export default function HomeScreen() {
  return (
 
      <View style={estilos.container}>
      <FoodContainer></FoodContainer>
      </View>
  );
}
// Estilos ->
const estilos = StyleSheet.create({
   imagem :{
    height: "100%",
    width: "50%",
    borderRadius: 20
   },
   container:{
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:"blue"
 
   },
   box: {
   
    height: 200,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:"green",
    borderRadius: "15px",
    padding: 15,
    marginTop:30,
    boxShadow: "rgba(226, 85, 85, 0.35) 0px 5px 30px;"
   },
   texto: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white"
   }
  })