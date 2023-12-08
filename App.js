import React, { useState } from 'react';
import { View, Text, TextInput, Switch, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, enabled: true }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, enabled: !task.enabled } : task
      )
    );
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={item.enabled ? styles.pendingText : styles.doneText}>{item.text}</Text>
      <Switch
        value={item.enabled}
        onValueChange={() => toggleTask(item.id)}
        style={styles.switch}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo App</Text>

      {tasks.length > 0 ? (
        <FlatList
        style={{paddingHorizontal:20}}
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text style={{ textAlign: 'center', marginBottom: 20, fontWeight: 'bold' }}>No pending tasks</Text>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Task"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>

      {tasks.length > 0 && (
        <TouchableOpacity onPress={clearAllTasks} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Clear All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: '#c2c2c2'
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 1
  },
  pendingText: {
    fontSize: 18,
  },
  doneText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
  },
  toggleButton: {
    backgroundColor: '#e0e0e0',
    padding: 5,
    borderRadius: 5,
  },
  inputContainer: {
    paddingHorizontal:20,
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButton: {
    marginHorizontal:20,
    marginBottom:10,
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  clearButtonText: {
    color: 'white',
    fontSize: 18,
  },
  switch: {
    marginLeft: 10,
  }
});

export default TodoApp;
