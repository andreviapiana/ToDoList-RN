import { View, Text } from 'react-native'
import { styles } from './styles'

export function TaskCounter() {
  return (
    <View style={styles.container}>
      <View style={styles.taskInfo}>
        <Text style={[styles.textInfo, { color: '#4EA8DE' }]}>Criadas</Text>
        <Text style={styles.taskCounter}>2</Text>
      </View>
      <View style={styles.taskInfo}>
        <Text style={[styles.textInfo, { color: '#8284FA' }]}>Concluídas</Text>
        <Text style={styles.taskCounter}>2</Text>
      </View>
    </View>
  )
}
