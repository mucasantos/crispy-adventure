import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home(){
const router = useRouter();

    return(
        <View>
            <Text>Home</Text>
            <Button  title="Ir para detalhes" onPress={()=> router.push("/Detalhes")}/>
            <Button  title="Ir para CardsScreen" onPress={()=> router.push("/CardsScreen")}/>
        </View>
    )
}