import { View, Text, Image } from 'react-native'
import { styles } from './styles'

import clipboard from '../../../assets/clipboard.png'

export function TaskCardEmpty() {
  return (
    <View style={styles.emptyCard}>
      <Image source={clipboard} alt="" />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subtitle}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
