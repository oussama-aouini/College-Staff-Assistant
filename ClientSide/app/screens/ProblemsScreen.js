import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ListItemcl from "../components/lists/ListItemcl";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListeItemDeleteAction from "../components/lists/ListeItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    type: "data show",
    description: "Bonjours, le projecteur dans la salle 18 est en panne",
  },
  {
    id: 2,
    type: "electricity",
    description: "Probléme d'electricité dans la salle 12",
  },
];

function ProblemsScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItemcl
            title={item.type}
            subTitle={item.description}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListeItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              type: "Other",
              description: "table cassé dans salle 20",
            },
            {
              id: 1,
              type: "data show",
              description:
                "Bonjours, le projecteur dans la salle 18 est en panne",
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ProblemsScreen;
