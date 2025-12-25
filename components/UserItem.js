import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>
        {user.name} ({user.email})
      </Text>
      <View style={styles.actions}>
        <Button title="Modifier" onPress={onEdit} />
        <Button title="Supprimer" color="red" onPress={onDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: "#f8f8f8",
    marginVertical: 5,
    borderRadius: 8,
  },
  text: { fontSize: 16 },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
});

export default UserItem;
