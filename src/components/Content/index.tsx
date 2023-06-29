import { View } from 'react-native'
import { FormInput } from '../FormInput'
import { TaskCard } from '../TaskCard'
import { TaskCardEmpty } from '../TaskCardEmpty'
import { TaskCounter } from '../TaskCounter'

import { styles } from './styles'

export function Content() {
  const task = true
  return (
    <View style={styles.container}>
      <FormInput />
      <TaskCounter />
      {task ? <TaskCard /> : <TaskCardEmpty />}
    </View>
  )
}
