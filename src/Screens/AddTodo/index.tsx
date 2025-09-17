// create a component to add a todo typescript

import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../store/hooks';
import { addTodo } from '../../store/actions/todoReducer';
import ButtonDefault from '../../component/Button/ButtonDefault';

const AddTodo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useAppDispatch();
    const navigation = useNavigation();

    const handleAddTodo = () => {
        if (title.trim() === '') {
            Alert.alert('Error', 'Please enter a todo title');
            return;
        }

        dispatch(addTodo({
            title: title.trim(),
            description: description.trim() || undefined,
        }));

        // Clear form and navigate back
        setTitle('');
        setDescription('');
        navigation.goBack();
    };

    const handleCancel = () => {
        setTitle('');
        setDescription('');
        navigation.goBack();
    };

    return (
        <View style={styles.container}>            
            <TextInput 
                style={styles.input}
                placeholder="Todo title (required)" 
                value={title} 
                onChangeText={setTitle}
                multiline={false}
            />
            
            <TextInput 
                style={[styles.input, styles.descriptionInput]}
                placeholder="Description (optional)" 
                value={description} 
                onChangeText={setDescription}
                multiline={true}
                numberOfLines={4}
            />

            <View style={styles.buttonContainer}>
                <ButtonDefault 
                    title="Add Todo" 
                    onPress={handleAddTodo}
                    style={styles.addButton}
                    textStyle={styles.addButtonText}
                />
                <View style={styles.buttonSpacer} />
                <ButtonDefault
                    title="Cancel" 
                    onPress={handleCancel}
                    style={styles.cancelButton}
                    textStyle={styles.cancelButtonText}
                />
            </View>
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
        marginBottom: 24,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 16,
    },
    descriptionInput: {
        height: 100,
        textAlignVertical: 'top',
    },
    buttonContainer: {
        marginTop: 20,
    },
    buttonSpacer: {
        height: 12,
    },
    addButton: {
        backgroundColor: '#0064ff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 1,
        shadowColor: '#000',    },
    addButtonText: {
        color: '#fff',
    },
    cancelButton: {
        // backgroundColor: '#d7331d',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 1,
        shadowColor: '#000',    },
    cancelButtonText: {
        color: '#0064ff',
    },
});

export default AddTodo;