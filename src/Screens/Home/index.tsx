// this is home screen will navigate by default when app is opened

import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { ROUTE_PATH } from '../../Constant/routePath';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { toggleTodo, removeTodo } from '../../store/actions/todoReducer';
import { Todo } from '../../types/todo';

const Home = () => {
    const todos = useAppSelector((state) => state.todo.todos);
    const dispatch = useAppDispatch();
    const navigation = useNavigation();

    const handleToggleTodo = (id: string) => {
        dispatch(toggleTodo(id));
    };

    const handleRemoveTodo = (id: string) => {
        dispatch(removeTodo(id));
    };

    const renderTodoItem = ({ item }: { item: Todo }) => (
        <View style={styles.todoItem}>
            <TouchableOpacity 
                style={styles.todoContent}
                onPress={() => handleToggleTodo(item.id)}
            >
                <Text style={[
                    styles.todoTitle, 
                    item.completed && styles.completedTodo
                ]}>
                    {item.title}
                </Text>
                {item.description && (
                    <Text style={styles.todoDescription}>{item.description}</Text>
                )}
                <Text style={styles.todoDate}>
                    {new Date(item.createdAt).toLocaleDateString()}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => handleRemoveTodo(item.id)}
            >
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Todos</Text>
            <FlatList
                data={todos}
                renderItem={renderTodoItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyText}>No todos found. Add one below!</Text>
                )}
                ListFooterComponent={() => (
                    <Button 
                        title="Add Todo" 
                        onPress={() => navigation.navigate(ROUTE_PATH.ADD_TODO as any)} 
                    />
                )}
                style={styles.list}
            />
        </View>
    );
};

export default Home;