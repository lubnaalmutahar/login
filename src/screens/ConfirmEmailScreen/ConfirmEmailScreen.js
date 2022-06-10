import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
    
    const [code, setCode] = useState('');

    const navigation = useNavigation();

    const onConfirmPress = () => {
        navigation.navigate('Home');
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    const onResendPress = () => {
        console.warn('onResendPress');
    };

    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.root}>
            <Text style={styles.title}>Confirm your email</Text>
            
            <CustomInput 
                placeholder="Enter your confirmation code" 
                value={code} 
                setValue={setCode} 
            />
   
            <CustomButton 
                text="Confirm" 
                onPress={onConfirmPress} 
            />

            <CustomButton 
                text="Resend code" 
                onPress={onResendPress}
                type="SECONDARY" 
            />

            <CustomButton 
                text="Back to Sign in" 
                onPress={onSignInPress}
                type="TERTIARY" 
            />

          </View>
        </ScrollView>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'grey',
        paddingLeft: 20,
        paddingRight: 20,
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    }
})

export default ConfirmEmailScreen