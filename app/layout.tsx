/*
o EXPO Router - sistema de roteamento de telas - ele procura na pasta app/
o arquivo layout.tsx
*/

import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="Index" options={{ title: "Home" }} />
            <Stack.Screen name="Detalhes" options={{ title: "Home" }} />
        </Stack>
    );
}