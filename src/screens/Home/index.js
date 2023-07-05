import * as React from 'react';
import { Text } from 'react-native-paper';
import ButtonT from '../../components/Button/Button';

export default function Home({navigation}){

function goToInsert(){
    navigation.navigate("Insert")
}

    return(
        <>
            <ButtonT text={"Ir para insert"} action={goToInsert} /> 
        </>
    )
}
