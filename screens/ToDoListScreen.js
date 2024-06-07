import React, { useState } from "react";
import {
  Button,
  Layout,
  Text,
  Input,
  List,
  ListItem,
  Icon,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const ToDoListScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    setTasks([...tasks, { title: taskTitle }]);
    setTaskTitle("");
  };

  const handleRemoveTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const renderItemAccessory = (index) => (
    <Button size="tiny" onPress={() => handleRemoveTask(index)}>
      Done
    </Button>
  );

  const renderItem = ({ item, index }) => (
    <ListItem
      title={item.title}
      accessoryRight={() => renderItemAccessory(index)}
    />
  );

  return (
    <Layout style={styles.container}>
      <Input
        placeholder="New Task"
        value={taskTitle}
        onChangeText={setTaskTitle}
        style={styles.input}
      />
      <Button onPress={handleAddTask}>Add Task</Button>
      <List data={tasks} renderItem={renderItem} style={styles.list} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginVertical: 8,
  },
  list: {
    marginTop: 16,
  },
});

export default ToDoListScreen;
