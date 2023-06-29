import { View } from 'react-native'
import { FormInput } from '../FormInput'
import { TaskCounter } from '../TaskCounter'

import { styles } from './styles'

export function Content() {
  return (
    <View style={styles.container}>
      <FormInput />
      <TaskCounter />
    </View>
  )
}
