import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigation = useNavigation();

    const onSubmitPress = () => {
        navigation.navigate('Home');
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
                placeholder="Code" 
                value={code}
                setValue={setCode} />

            <CustomInput 
                placeholder="Enter new password" 
                value={newPassword}
                setValue={setNewPassword} />
   
            <CustomButton 
                text="Submit" 
                onPress={onSubmitPress} />

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

export default NewPasswordScreen