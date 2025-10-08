import { StyleSheet, View, text } from "react-native";

const TodoItem =({text}) => {
    return (
        <View style = {StyleSheet.item}>
            <text style = {styles.itemText}>{text}</text>
        </View>
    );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default TodoItem;