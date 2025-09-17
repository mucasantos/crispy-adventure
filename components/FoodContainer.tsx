import { Image, StyleSheet, Text, View } from 'react-native';

/*
Receber informações => chamamos de props!

JS => ele aceita que eu use variaveis sem tipar!
*/

export default function FoodContainer(props: any) {

    console.log(props);
    return (
        <View style={estilos.box}>
            <Image source={props.url} style={estilos.imagem}></Image>
            <Text style={estilos.texto}>{props.titulo}</Text>
            <Text style={estilos.texto}>{props.preco}</Text>
        </View>
    )
};

const estilos = StyleSheet.create({
    imagem: {
        height: 100,
        width: "100%",
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue"
    },
    box: {
        height: 200,
        width: 200,
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 30,
        boxShadow: "rgba(226, 85, 85, 0.35) 0px 5px 30px;"
    },
})