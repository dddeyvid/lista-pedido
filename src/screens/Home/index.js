import * as React from 'react';
import { Text } from 'react-native-paper';
import ButtonT from '../../components/Button/Button';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Height, Width } from "../../constants/dimensions";
import InputText from '../../components/InputText';



export default function Home({navigation}){

function goToInsert(){
    navigation.navigate("Insert")
}

    return(
        <>
             <SafeAreaView style={styles.container}>
                
                <View style={styles.inputArea}>
                <InputText label="Nome" style={styles.input} />
                <InputText label="Pedido" style={styles.input} />

            </View>
             </SafeAreaView>


            <ButtonT text={"Ir para insert"} action={goToInsert} /> 
        </>
    )
}


const styles = StyleSheet.create({
  
    container:{
      flex: 1, 
      justifyContent: "center",
      alignItems: "center",
    },
    inputArea:{
      padding: 16,
      width: Width*0.8 
    },
    input:{
      borderRadius: 50,
    },
})