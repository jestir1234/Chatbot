import React from 'react';
import { StyleSheet,
         Text,
         View,
         TextInput,
         TouchableOpacity,
         Button,
         Image,
         KeyboardAvoidingView} from 'react-native';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      formType: "Log In",
    };
  }

  submitInfo() {
    // SUBMIT REQUEST TO BACKEND AND PASS USER INFO ALONG
    // USER TOKEN && ACCOUNT TOKEN
  }

  onChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  formType() {
    if (this.state.formType === 'Log In') {
      return(
        <View style={styles.container1}>
            <View style={styles.authView}>
              <Image style={styles.icons} source={require('../images/email.png')} />
              <TextInput
                value={this.props.value}
                placeholder="email"
                keyboardType="email-address"
                blurOnSubmit={false}
                returnKeyType="done"
                style={styles.input}
                onChangeText={(value) => this.onChange("fullName", value)}
                />
            </View>

            <View style={styles.authView}>
              <Image style={styles.icons} source={require('../images/lock.png')} />
              <TextInput
                value={this.props.value}
                placeholder="password"
                blurOnSubmit={false}
                returnKeyType="done"
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(value) => this.onChange("password", value)}
                />
            </View>
          </View>
      );
    } else {
      return(
        <View style={styles.container1}>

        <View style={styles.authView}>
          <Image style={styles.icons} source={require('../images/person.png')} />
          <TextInput
            value={this.props.value}
            placeholder="full name"
            secureTextEntry={true}
            blurOnSubmit={false}
            returnKeyType="done"
            style={styles.input}
            onChangeText={(value) => this.onChange("password", value)}
            onSubmitEditing={this.props.onAddItem}
            />
        </View>

            <View style={styles.authView}>
              <Image style={styles.icons} source={require('../images/email.png')} />
              <TextInput
                value={this.props.value}
                placeholder="email"
                keyboardType="email-address"
                blurOnSubmit={false}
                returnKeyType="done"
                style={styles.input}
                onChangeText={(value) => this.onChange("email", value)}
                onSubmitEditing={this.props.onAddItem}
                />
            </View>

            <View style={styles.authView}>
              <Image style={styles.icons} source={require('../images/lock.png')} />
              <TextInput
                value={this.props.value}
                placeholder="password"
                secureTextEntry={true}
                blurOnSubmit={false}
                returnKeyType="done"
                style={styles.input}
                onChangeText={(value) => this.onChange("password", value)}
                onSubmitEditing={this.props.onAddItem}
                />
            </View>
          </View>
      );
    }
  }


  render() {
    const authForm = this.formType();
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.title}>Welcome To News Junkie</Text>
          <Text style={styles.tagline}>For personalized content at your fingertips</Text>
        </View>
        <Image style={styles.newsImage} source={require('../images/news.png')} />
          <View style={styles.authWrapper}>
            <View style={styles.formType}>
              <Button
                title="Log In"
                color="#1D727E"
                onPress={() => this.setState({formType: 'Log In'})}
                />
              <Button
                title="Sign Up"
                color="#1D727E"
                onPress={() => this.setState({formType: 'Sign Up'})}
                />
            </View>
              {authForm}
            <TouchableOpacity style={styles.buttonWrapper} onPress={this.submitInfo}>
              <Text style={styles.buttonText}>{this.state.formType}</Text>
            </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#4CAFA6',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  title: {
    width: 400,
    height: 35,
    fontSize: 30,
    color: 'white',
    marginBottom: 10,
    marginTop: 50,
    textAlign: 'center',
  },
  formType: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsImage: {
    marginBottom: 10,
    marginTop: 40,
  },
  tagline: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonWrapper: {
    backgroundColor: '#1D727E',
    width: 250,
    height: 35,
    marginTop: 10,
    padding: 5,
    borderRadius: 10,
    marginLeft: 30,
    borderWidth: 2,
    borderColor: '#d6d7da',
  },
  authWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  welcome: {
    flexDirection: 'column',
    height: 50,
    marginBottom: 50,
  },
  container1: {
    maxHeight: 200,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 250,
    height: 35,
    marginTop: 10,
    padding: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#d6d7da',
  },
  inputFields: {
    width: 280,
    height: 25,
    color: '#1D727E',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  authView: {
    height: 50,
    width: 400,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  icons: {
    marginRight: 10,
  },
  button: {
    color: 'white',
    backgroundColor: 'pink',
    width: 60,
    height: 100,
  }
});

export default LandingPage;
