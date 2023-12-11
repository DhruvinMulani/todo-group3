import { renderHook, act } from '@testing-library/react-native';
import useCustomHook from '../CustomHook';

describe('Testing CustomHook functionality', () => {
  it('Can set the initial value of the custom hook\'s state variable', () => {
    const initialValue = true;
    const { result } = renderHook(() => useCustomHook(initialValue));

    expect(result.current.todoCompletionValue).toBe(initialValue);
  });

  it('Calling toggle updates the state variable', () => {
    const { result } = renderHook(() => useCustomHook(true));

    expect(result.current.todoCompletionValue).toBe(true);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.todoCompletionValue).toBe(false);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.todoCompletionValue).toBe(true);
  });

  // Add more test cases based on your custom hook's functionality
});
