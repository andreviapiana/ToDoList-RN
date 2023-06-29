import { Text, TouchableHighlight, View } from 'react-native'
import { styles } from './styles'

import { Trash } from 'phosphor-react-native'
import Checkbox from 'expo-checkbox'
import { useState } from 'react'

export function TaskCard() {
  // Toggle do Checkbox
  const [isChecked, setChecked] = useState(false)

  // Mudança de cor ao clicar no botão da lixeira
  const [buttonPressed, setButtonPressed] = useState(false)

  return (
    <View style={styles.container}>
      <TouchableHighlight>
        <Checkbox
          style={isChecked ? styles.checkbox : styles.checkboxUnchecked}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#5E60CE' : '#4EA8DE'}
        />
      </TouchableHighlight>

      <Text style={isChecked ? styles.completedText : styles.text}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>

      <TouchableHighlight
        underlayColor="#333333"
        onShowUnderlay={() => setButtonPressed(true)}
        onHideUnderlay={() => setButtonPressed(false)}
      >
        <Trash size={21} color={buttonPressed ? '#E25858' : '#808080'} />
      </TouchableHighlight>
    </View>
  )
}
