import { useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'

import { PlusCircle } from 'phosphor-react-native'

import { styles } from './styles'

export function FormInput() {
  // Input Focus Style
  const [focus, setFocus] = useState(false)
  const customStyle = focus ? styles.textInputFocus : styles.textInput

  // Input Function
  function handleCreateNewTask() {
    console.log('Você clicou no botão de Adicionar!')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={customStyle}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onFocus={() => setFocus(true)}
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateNewTask}>
        <PlusCircle size={21} color={'#F2F2F2'} />
      </TouchableOpacity>
    </View>
  )
}
