import React, { Component, useEffect, useReducer, useState } from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView,
  Platform,
  ActivityIndicator
} from 'react-native';
import { Button, Text, Item } from 'native-base';
import * as Yup from 'yup';
import { flexCenter } from '../../lib/styles';
import { login } from '../../api/auth';
import { set } from '../../utils/storage';
import Input from '../../components/Input';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'contact@rauscher-67.fr',
      password: 'yu9XT24Jv',
      isValid: false
    };

    this.validationSchema = Yup.object().shape({
      email: Yup.string()
        .email('Addresse email invalide')
        .required("L'addresse email ne peut être vide"),
      password: Yup.string()
        .min(4, 'Mot de passe trop court')
        .required('Le mot de pass  ne peut être vide')
    });
  }

  onChangeText(name) {
    return async value => {
      const fields = { ...this.state, [name]: value };
      await this.safeSetState(fields);
    };
  }

  submit() {
    const { password, email } = this.state;
    this.setState({ loading: true }, async () => {
      try {
        const validation = await this.validationSchema.validate({ password, email });
        const response = await login(validation);
        if (response) {
          if (!response.user) {
            throw response;
          }
          await set('auth:login', response);
          this.props.navigation.navigate('Dashboard');
        }
        console.log(response);
      } catch (error) {
        if (error && error.message) {
          alert(error.message);
        }
        console.log(JSON.stringify(error));
      }
      this.setState({ loading: false });
    });
  }

  async safeSetState(fields) {
    let isValid = false;
    try {
      const validation = await this.validationSchema.validate(fields);
      isValid = true;
    } catch (error) {
      isValid = false;
    }
    this.setState({ ...fields, isValid }, () => console.log(this.state));
  }

  render() {
    const { email, password, isValid, loading } = this.state;
    return (
      <KeyboardAvoidingView
        style={flexCenter}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <Image source={require('../../img/logo.png')} resizeMode="center" />
        <View
          style={{
            width: Dimensions.get('window').width - 60,
            padding: 20,
            marginTop: -30,
            borderRadius: 10
          }}
        >
          <Input
            placeholder="Email"
            type="text"
            value={email}
            keyboardType="email-address"
            style={{ marginBottom: 10 }}
            onChangeText={this.onChangeText('email').bind(this)}
          />
          <Input
            placeholder="Mot de passe"
            type="password"
            value={password}
            style={{ marginBottom: 10 }}
            secureTextEntry
            onChangeText={this.onChangeText('password').bind(this)}
          />
          <Button
            full
            style={{ borderRadius: 4, height: 45, marginBottom: 10 }}
            onPress={this.submit.bind(this)}
            disabled={!isValid}
          >
            {loading ? <ActivityIndicator size="small" color="#ffffff" /> : <Text>Connecter</Text>}
          </Button>
          <Button
            full
            style={{ borderRadius: 4, height: 45, backgroundColor: 'transparent' }}
            onPress={() => this.props.navigation.navigate('SignIn')}
          >
            <Text style={{ color: 'blue' }}>S'inscrire</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

Login.navigationOptions = {
  header: null
};
