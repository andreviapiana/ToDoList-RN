import { useState } from 'react'
import { Alert, TextInput, TouchableOpacity, View } from 'react-native'

import { PlusCircle } from 'phosphor-react-native'

import { styles } from './styles'

import 'react-native-get-random-values'
import uuid from 'react-native-uuid'

import { TaskProps } from '../Content'

interface FormInputProps {
  onAddNewTask: (task: TaskProps) => void
}

export function FormInput({ onAddNewTask }: FormInputProps) {
  // Input Focus Style
  const [focus, setFocus] = useState(false)
  const customStyle = focus ? styles.textInputFocus : styles.textInput

  // New Task Creation
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask() {
    if (!newTask.trim()) {
      Alert.alert('Nome inválido', 'Por favor, informe um nome válido!')
    } else {
      const newCreatedTask: TaskProps = {
        id: String(uuid.v4()),
        content: newTask,
        isCompleted: false,
      }
      onAddNewTask(newCreatedTask)
      setNewTask('')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={customStyle}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onFocus={() => setFocus(true)}
        onChangeText={setNewTask}
        value={newTask}
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateNewTask}>
        <PlusCircle size={21} color={'#F2F2F2'} />
      </TouchableOpacity>
    </View>
  )
}
