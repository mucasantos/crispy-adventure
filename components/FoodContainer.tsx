import { Image, StyleSheet, Text, View } from 'react-native';
 
//cod padrao para criar componente/func em RN
export default function FoodContainer(){
return(
         <View style={estilos.box}>
         <Image source={require("../assets/images/dog.jpg")} style= {estilos.imagem}></Image>
         <Text style={estilos.texto}>Sou a primeira View</Text>
    </View>
)    
};
 
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
    texto: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white"
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
})