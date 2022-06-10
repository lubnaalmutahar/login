import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    
    const [username, setUsername] = useState('');

    const navigation = useNavigation();

    const onSendPress = () => {
        navigation.navigate('NewPassword');
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>
            
            <CustomInput 
            placeholder="Username" 
            value={username}
            setValue={setUsername} />
   
            <CustomButton 
                text="Send"
                onPress={onSendPress} />

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

export default ForgotPasswordScreen