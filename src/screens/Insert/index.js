import * as React from 'react';
import { Text } from 'react-native-paper';
import InputText from '../../components/InputText';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Height, Width } from "../../constants/dimensions";
import ButtonT from '../../components/Button/Button';

export default function Insert({navigation}){
    
    function cancelPedido(){
        goToHome()
    }

    function goToHome(){
        navigation.navigate("Home")
    }

    function confirmPedido(){
        goToWish()
    }

    function goToWish(){
        navigation.navigate("WishList")
    }
    
    return(
        
        <SafeAreaView style={styles.container}>


        <View style={styles.inputArea}>
        <ButtonT 
            text={"Confirmar"}
            mode={"elevated"}
            style={styles.confirm}
            textStyle={styles.textWhite}
            action={confirmPedido}
            />
          
          <ButtonT 
            text={"Cancelar"}
            mode={"elevated"}
            style={styles.cancel}
            textStyle={styles.textBlack}
            action={cancelPedido}
            />
        </View>
        
      </SafeAreaView>
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
    confirm:{
      backgroundColor: "#DC143C",
      marginTop: 100,
    },
    cancel:{
      borderColor: "#DC143C",
      borderWidth: 1,
      backgroundColor: "#fff",
      color: "#000000",
      marginTop: 5,
    },
    textBlack: {
      color: "#000000",
    },
    textWhite: {
      color: "#FFF",
    },
  })