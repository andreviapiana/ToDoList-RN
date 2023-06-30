import { Text, TouchableHighlight, View } from 'react-native'
import { styles } from './styles'

import { Trash } from 'phosphor-react-native'
import Checkbox from 'expo-checkbox'
import { useState } from 'react'
import { TaskProps } from '../Content'

interface TaskCardProps {
  task: TaskProps
  onToggleCheckedTask: (id: string) => void
  onRemoveTask: (id: string) => void
}

export function TaskCard({
  task,
  onToggleCheckedTask,
  onRemoveTask,
}: TaskCardProps) {
  // Toggle do Checkbox
  const [isChecked, setChecked] = useState(false)

  // Mudança de cor ao clicar no botão da lixeira
  const [buttonPressed, setButtonPressed] = useState(false)

  function handleToggleTask(task: TaskProps) {
    setChecked(!isChecked)
    onToggleCheckedTask(task.id)
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight>
        <Checkbox
          style={isChecked ? styles.checkbox : styles.checkboxUnchecked}
          value={isChecked}
          onValueChange={() => handleToggleTask(task)}
          color={isChecked ? '#5E60CE' : '#4EA8DE'}
        />
      </TouchableHighlight>

      <Text style={task.isCompleted ? styles.completedText : styles.text}>
        {task.content}
      </Text>

      <TouchableHighlight
        underlayColor="#333333"
        onShowUnderlay={() => setButtonPressed(true)}
        onHideUnderlay={() => setButtonPressed(false)}
        onPress={() => onRemoveTask(task.id)}
      >
        <Trash size={21} color={buttonPressed ? '#E25858' : '#808080'} />
      </TouchableHighlight>
    </View>
  )
}
