import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now().toString() }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestion des utilisateurs 👥</Text>

      <UserForm
        onSubmit={editingUser ? updateUser : addUser}
        editingUser={editingUser}
        existingUsers={users}
      />

      <UserList users={users} onEdit={setEditingUser} onDelete={deleteUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
});

export default App;
