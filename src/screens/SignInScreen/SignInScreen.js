import React, { useState } from 'react';
import { View, Image, StyleSheet, useWindowDimensions, SafeAreaView } from 'react-native';
import Logo from '../../../assets/images/logo.jpeg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const{height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPress = () => {
        //validate user
        navigation.navigate('HomeScreen');
    };

    const onForgotPasswordPress = () => {
        navigation.navigate('ForgotPassword');
    };

    const onSignUpPress = () => {
        navigation.navigate('SignUp');
    };

    return (
      <SafeAreaView>
          <View style={styles.root}>
            
            <Image
                source={Logo}
                style={[styles.logo, {height: height * 0.20}]}
                resizeMode="contain"
            />

            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername}
            />
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry
            />

            <CustomButton 
                text="Sign In" 
                onPress={onSignInPress} />

            <CustomButton 
                text="Forgot Password?" 
                onPress={onForgotPasswordPress}
                type="TERTIARY" 
            />

            <SocialSignInButtons />

            <CustomButton 
                text="Don't have an account? Create one" 
                onPress={onSignUpPress}
                type="TERTIARY" 
            />
          </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 20,
    },
    logo: {
        width: '100%',
        maxWidth: 300,
        maxHeight: 250,
    }
})

export default SignInScreen