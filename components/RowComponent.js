import { View, Text, Switch, StyleSheet } from "react-native";
import CustomHook from "../CustomHook";

const RowComponent = (props) => {
  const { todoCompletionValue, toggle } = CustomHook(false);

  const buttonPressed = (id) => {
    toggle(id);
  };

  return (
    <View style={styles.taskItem}>
      
      <View style={styles.taskTextContainer}>
        <Text style={styles.taskLabel}>
          {props.item.id} - {props.item.name}
        </Text>
       
        <Text style={todoCompletionValue ? styles.taskComplete : styles.taskPending}>
          {todoCompletionValue ? "COMPLETE" : "PENDING"}
        </Text>
      </View>

      <Switch
        value={todoCompletionValue}
        onValueChange={() => buttonPressed(props.item.id)}
      />
    </View>
  );
};

export default RowComponent;
const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1,
  },
  taskTextContainer: {
    flexDirection: "column",
  },
  taskLabel: {
    fontSize: 18,
  },
  taskComplete: {
    color: "green",
  },
  taskPending: {
    color: "red",
  },
});
