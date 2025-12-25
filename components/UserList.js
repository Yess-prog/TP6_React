import React, { useState } from "react";
import { View, TextInput, FlatList, Text } from "react-native";
import UserItem from "./UserItem";

const UserList = ({ users, onEdit, onDelete }) => {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View>
      <TextInput
        placeholder="Rechercher un utilisateur..."
        value={search}
        onChangeText={setSearch}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          marginBottom: 10,
          padding: 5,
        }}
      />
      {filteredUsers.length === 0 ? (
        <Text>Aucun utilisateur trouvé</Text>
      ) : (
        <FlatList
          data={filteredUsers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <UserItem
              user={item}
              onEdit={() => onEdit(item)}
              onDelete={() => onDelete(item.id)}
            />
          )}
        />
      )}
    </View>
  );
};

export default UserList;
