import { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";

export default function LoginScreen() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [login, setLogin] = useState(false);

  return (
    // <KeyboardAvoidingView
    //   style={styles.container}
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    // >
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {!login && (
        <>
          <Text style={styles.regularText}>Login to continue </Text>

          <TextInput
            style={styles.input}
            value={email}
            placeholder="email"
            keyboardType="email-address"
            onChangeText={onChangeEmail}
          />
          <TextInput
            style={styles.input}
            value={password}
            secureTextEntry={true}
            placeholder="password"
            maxLength={8}
            onChangeText={onChangePassword}
          />
          <Pressable
            style={styles.loginButton}
            onPress={() => {
              setLogin(!login);
            }}
          >
            <Text style={styles.loginButtonText}>Log in</Text>
          </Pressable>
        </>
      )}
      {login && <Text style={styles.regularText}>You are Logged In!</Text>}
    </ScrollView>

    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  loginButton: {
    height: 50,
    width: 180,
    padding: 10,
    marginVertical: 8,
    margin: 130,
    backgroundColor: "#EE9972",
    borderRadius: 8,
  },
  loginButtonText: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
  },
});
