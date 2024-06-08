import React, { useState } from "react";
import { Button, Layout, Input, List, ListItem } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const ToDoListScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = () => {
    if (taskTitle.trim() === "" || taskDescription.trim() === "") {
      return;
    }
    setTasks([...tasks, { title: taskTitle, description: taskDescription }]);
    setTaskTitle("");
    setTaskDescription("");
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
      title={`${index + 1}. ${item.title}`}
      description={item.description}
      accessoryRight={() => renderItemAccessory(index)}
    />
  );

  return (
    <Layout style={styles.container}>
      <Input
        placeholder="Task Title"
        value={taskTitle}
        onChangeText={setTaskTitle}
        style={styles.input}
      />
      <Input
        placeholder="Task Description"
        value={taskDescription}
        onChangeText={setTaskDescription}
        style={styles.input}
      />
      <Button onPress={handleAddTask} style={styles.button}>
        Add Task
      </Button>
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
  button: {
    marginVertical: 8,
  },
  list: {
    marginTop: 16,
  },
});

export default ToDoListScreen;
