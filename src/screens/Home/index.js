import * as React from 'react';
import { Text } from 'react-native-paper';
import ButtonT from '../../components/Button';

export default function Home({navigation}){

function goToInsert(){
    navigation.navigate("Insert")
}

    return(
        <>
            <Text variant="displayLarge">Display Large</Text>
            <ButtonT text={"Ir para insert"} action={goToInsert} /> 
        </>
    )
}
