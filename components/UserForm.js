import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

const UserForm = ({ onSubmit, editingUser, existingUsers = [] }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setError("");
    }
  }, [editingUser]);

  const handleSubmit = () => {
    if (!name || !email) return;

    const emailNormalized = email.trim().toLowerCase();
    const isDuplicate = existingUsers.some(
      (u) =>
        u.email &&
        u.email.trim().toLowerCase() === emailNormalized &&
        u.id !== editingUser?.id
    );

    if (isDuplicate) {
      setError("Cet email est déjà utilisé.");
      return;
    }

    onSubmit({ id: editingUser?.id, name, email: email.trim() });
    setName("");
    setEmail("");
    setError("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nom"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button
        title={editingUser ? "Mettre à jour" : "Ajouter"}
        onPress={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginVertical: 5,
    borderRadius: 5,
  },
  error: {
    color: "red",
    marginBottom: 6,
  },
});

export default UserForm;
