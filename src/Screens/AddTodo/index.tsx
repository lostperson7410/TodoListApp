// create a component to add a todo typescript

import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/actions/todoReducer';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
//   const dispatch = useDispatch();
  return (
    <View>
      <TextInput placeholder="Add Todo" value={todo} onChangeText={setTodo} />
      <Button title="Add Todo" onPress={() => {
        // dispatch(addTodo(todo));
        // setTodo('');
        }} />
      <Button title="Cancel" onPress={() => {
        // setTodo('');
      }} />
    </View>
  );
};

export default AddTodo;