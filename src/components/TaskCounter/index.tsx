import { View, Text } from 'react-native'
import { styles } from './styles'

interface TaskCounterProps {
  completedTasks: number
  tasksCreatedCounter: number
}

export function TaskCounter({
  completedTasks,
  tasksCreatedCounter,
}: TaskCounterProps) {
  return (
    <View style={styles.container}>
      <View style={styles.taskInfo}>
        <Text style={[styles.textInfo, { color: '#4EA8DE' }]}>Criadas</Text>
        <Text style={styles.taskCounter}>{tasksCreatedCounter}</Text>
      </View>
      <View style={styles.taskInfo}>
        <Text style={[styles.textInfo, { color: '#8284FA' }]}>Concluídas</Text>
        <Text style={styles.taskCounter}>{completedTasks}</Text>
      </View>
    </View>
  )
}
