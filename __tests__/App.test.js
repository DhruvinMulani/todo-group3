import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import TodoApp from '../App';

describe('Testing TodoApp functionality', () => {
  it('On initial load, message shows that there are no tasks', async () => {
    render(<TodoApp />);
    const noTasksMessage = await screen.findByTestId('noTasksText');
    expect(noTasksMessage).toHaveTextContent("You have no tasks.");
  });

  it('After adding a task, the flatlist is updated', async () => {
    render(<TodoApp />);
    
    // Add a new task
    const textInput = await screen.findByTestId('taskInputText');
    const addButton = await screen.findByTestId('addButton');
    const flatlist = await screen.findByTestId("taskList")
    

    const listCount = flatlist.props.data.length

    fireEvent.changeText(textInput, 'New Task 1');
    fireEvent.press(addButton);

    const newListCount = flatlist.props.data.length

    expect(newListCount).toBe(listCount + 1);
  });

  it('Clears all tasks when the "Clear All" button is pressed', async () => {
    render(<TodoApp />);
    
    // Add a new task
    const input = await screen.findByTestId('taskInputText');
    const addButton = await screen.findByTestId('addButton');
    const flatlist = await screen.findByTestId("taskList")
    fireEvent.changeText(input, 'New Task 1');
    fireEvent.press(addButton);

    // Check if the new task is displayed in the flatlist
    const listCount = flatlist.props.data.length
    expect(listCount).toBe(1);

    // Clear all tasks
    const clearAllButton = await screen.findByTestId('clearAllButton');
    fireEvent.press(clearAllButton);

    // Check if the "No Pending Tasks" message is displayed
    const newlistCount = flatlist.props.data.length
    expect(newlistCount).toBe(0);
  });

  // Add more test cases based on your app's functionality
});