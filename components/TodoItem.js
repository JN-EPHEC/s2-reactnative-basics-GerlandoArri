import { StyleSheet, Text, View } from "react-native";

const TodoItem =({text}) => {
    return (
        <View style = {styles.item}>
            <Text style = {styles.itemText}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default TodoItem;