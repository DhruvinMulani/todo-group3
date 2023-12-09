import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import RowComponent from './components/RowComponent';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') {
      setError('Please enter a task name.');
      return;
    }
  
    const newId = tasks.length; 
    setTasks([...tasks, { id: newId, name: newTask, isComplete: false }]);
    setNewTask(''); 
    setError(''); 
  };

  // const changeStatus = (id) => {
  //   setTasks((prevTasks) =>
  //     prevTasks.map((task) =>
  //       task.id === id ? { ...task, isComplete: !task.isComplete } : task
  //     )
  //   );
  // };
  
  const clearAllTasks = () => {
    setTasks([]);
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item})=>{
          return (<RowComponent item = {item}/>)
          }}
        ListEmptyComponent={
          <Text style={styles.noTasks}>No Pending Tasks</Text>
        }
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Task"
          value={newTask}
          onChangeText={setNewTask}
        />
        {error !== '' && <Text style={styles.error}>{error}</Text>}
        <TouchableOpacity 
          onPress={addTask} 
          style={styles.addButton}
        >
          <Text style={styles.buttonText}>ADD TASK</Text>
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
    marginTop: 50,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: '#c2c2c2'
  },
  noTasks: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  addButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  clearButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16
  },
  error: {
    color: 'red',
    textAlign: 'center',
    padding: 5
  },
});

export default TodoApp;
