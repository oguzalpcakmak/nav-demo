import { useEffect, useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

type UserItem = {
    id: number;
    email: string;
    password: string;
  };

const SignUpScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<UserItem[]>([]);

  
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://192.168.0.102:3000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const addUser = async () => {
    try {
      fetchUsers();
      const response = await fetch("http://192.168.0.102:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      const newUserItem = await response.json();
      setUsers((prevUsers) => [...prevUsers, newUserItem]);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error adding user:", error);
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
      <TouchableOpacity style={styles.button} onPress={() => addUser()}>
        <Text style={styles.buttonText}>Create New User</Text>
      </TouchableOpacity>
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

export default SignUpScreen;
