import { View } from 'react-native'
import { styles } from './styles'

import { Header } from '../../components/Header'
import { Content } from '../../components/Content'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  )
}
