import { Alert, FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Task from '../../components/Task';

type Task = {
    name: string;
    checked: boolean;
  };

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskName, setTaskName] = useState('');
    const [taskCount, setTaskCount] = useState(0);
    const [taskChecked, setTaskChecked] = useState(0);

    function handleTaskAdd() {
        if(tasks.some(task => task.name === taskName)) {
            return Alert.alert("Tarefa existente", "Essa tarefa já foi adicionada na lista.");
        } else if(taskName === '') {
            return Alert.alert("Campo vazio", "Por favor, preencha o campo com o nome da tarefa.");
        }
        setTaskCount(taskCount + 1);
        setTasks(prevState => [...prevState, { name: taskName, checked: false }]);
        setTaskName('');
    }
    

    function handleRemoveTask(name: string) {
        Alert.alert("Remover Tarefa", `Deseja remover a tarefa ${name}?`, [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => {
                    setTasks(prevTasks => {
                        const taskToRemove = prevTasks.find(task => task.name === name);
                        if (taskToRemove?.checked) {
                            setTaskChecked(prevCount => prevCount - 1);
                        }
                        return prevTasks.filter(task => task.name !== name);
                    });
                    setTaskCount(prevCount => prevCount - 1);
                    Alert.alert("Removida!");
                }
            }
        ]);
    }
    function handleCheckTask(name: string) {
        setTasks(prevTasks => {
            return prevTasks.map(task => {
                if (task.name === name) {
                    const isChecked = !task.checked;
                    setTaskChecked(prevCount => prevCount + (isChecked ? 1 : -1));
                    return { ...task, checked: isChecked };
                }
                return task;
            });
        });
    }
    

  return (
    <SafeAreaView style={styles.container}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} resizeMode='contain'/>
        <View style={styles.form}>
            <TextInput placeholder='Adicione uma nova tarefa' placeholderTextColor={'#808080'} onChangeText={text => setTaskName(text)} value={taskName} style={styles.textInput}/>
            <TouchableOpacity onPress={handleTaskAdd} style={styles.button}>
                <Image source={require('../../../assets/plus.png')} style={{width: 16, height: 16}}/>
            </TouchableOpacity>
        </View>
        <View style={styles.body}>
            <View style={styles.tab}>
                <View style={styles.tabChildren}>
                    <Text style={styles.fistText}>Criadas</Text>
                    <View style={styles.countOne}>
                        <Text style={styles.countText}>{taskCount}</Text>
                    </View>
                </View>
                <View style={styles.tabChildren}>
                    <Text style={styles.secondText}>Concluídas</Text>
                    <View style={styles.countOne}>
                        <Text style={styles.countText}>{taskChecked}</Text>
                    </View>
                </View>
            </View>
            <FlatList
                style={{paddingHorizontal: 20}}
                data={tasks}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Task 
                        key={item.name} 
                        name={item.name} 
                        onRemove={() => handleRemoveTask(item.name)} 
                        onCheck={() => handleCheckTask(item.name)} 
                    />
                )}
                ListEmptyComponent={() => (
                    <View style={styles.emptyList}>
                        <Image source={require('../../../assets/clipboard.png')} style={styles.emptyImage} resizeMode='contain'/>
                        <Text style={styles.emptyTitle}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={styles.emptySubtitle}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                )}
            />

        </View>
    </SafeAreaView>
  )
}