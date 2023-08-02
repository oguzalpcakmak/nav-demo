import { useEffect, useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
import { signIn } from "../features/auth/authSlice";
import SignUpScreen from "./SignUp";

type UserItem = {
  id: number;
  email: string;
  password: string;
};

const SignInScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [users, setUsers] = useState<UserItem[]>([]);
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    try {
      const response = await fetch("DATABASE/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSignIn = () => {
    fetchUsers();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      dispatch(signIn()); // Dispatch the signIn action to update Redux state
    } else {
      console.log("Invalid email or password");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry // Hide the password input
        onChangeText={(e) => setPassword(e)}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleSignIn()}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Text>or</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          isSignUpVisible
            ? setIsSignUpVisible(false)
            : setIsSignUpVisible(true);
        }}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      {isSignUpVisible ? <SignUpScreen /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 50,
    alignItems: "center",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default SignInScreen;
