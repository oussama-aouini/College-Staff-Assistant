import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ListItemcl from "../components/lists/ListItemcl";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListeItemDeleteAction from "../components/lists/ListeItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    email: "oussama.aouini@ensi-uma.tn",
    title: "mobi dick",
    image: require("../assets/mypic.jpg"),
  },
  {
    id: 2,
    email: "oussama.aouini@ensi-uma.tn",
    title: "The song of ice and fire",
    image: require("../assets/mypic.jpg"),
  },
];

function EmpruntsScreen(props) {
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
            title={item.email}
            subTitle={item.title}
            image={item.image}
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
              email: "najem.marzouky@ensi-uma.tn",
              title: "The song of ice and fire",
              image: require("../assets/najem.jpg"),
            },
            {
              id: 1,
              email: "oussama.aouini@ensi-uma.tn",
              title: "mobi dick",
              image: require("../assets/mypic.jpg"),
            },
            {
              id: 2,
              email: "oussama.aouini@ensi-uma.tn",
              title: "The song of ice and fire",
              image: require("../assets/mypic.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default EmpruntsScreen;
