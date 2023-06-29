import { View, Text } from 'react-native'
import { styles } from './styles'

import { Header } from '../../components/Header'
import { FormInput } from '../../components/FormInput'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <FormInput />
      <Text>Home</Text>
    </View>
  )
}
