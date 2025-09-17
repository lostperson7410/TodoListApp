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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#333',
    },
    list: {
        flex: 1,
    },
    todoItem: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    todoContent: {
        flex: 1,
    },
    todoTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    completedTodo: {
        textDecorationLine: 'line-through',
        color: '#999',
    },
    todoDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    todoDate: {
        fontSize: 12,
        color: '#999',
    },
    deleteButton: {
        backgroundColor: '#ff4444',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: '600',
    },
    separator: {
        height: 12,
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#666',
        marginVertical: 32,
    },
});

export default Home;