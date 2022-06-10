import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail');
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPolicyPressed = () => {
        console.warn('onPrivacyPolicyPressed');
    };

    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            
            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername}
            />
             <CustomInput 
                placeholder="Email" 
                value={email} 
                setValue={setEmail}
            />
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry
            />
            <CustomInput 
                placeholder="Repeat Password" 
                value={passwordRepeat} 
                setValue={setPasswordRepeat}
                secureTextEntry
            />

            <CustomButton 
                text="Register" 
                onPress={onRegisterPressed} />

            <Text style={styles.text}>
                By registering, you confirm that you accept our
                <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
                <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
            </Text>  

            <CustomButton 
                text="Have an account? Sign in" 
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

export default SignUpScreen