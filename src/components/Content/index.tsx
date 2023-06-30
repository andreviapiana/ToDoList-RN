import { useState } from 'react'
import { FlatList, View } from 'react-native'
import { FormInput } from '../FormInput'
import { TaskCard } from '../TaskCard'
import { TaskCardEmpty } from '../TaskCardEmpty'
import { TaskCounter } from '../TaskCounter'

import { styles } from './styles'

export interface TaskProps {
  id: string
  content: string
  isCompleted: boolean
}

export function Content() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  function handleAddNewTask(task: TaskProps) {
    setTasks((prevState) => [...prevState, task])
  }

  const tasksCreatedCounter = tasks.length

  const completedTasks = tasks.reduce((acc, task) => {
    return task.isCompleted ? acc + 1 : acc
  }, 0)

  return (
    <View style={styles.container}>
      <FormInput onAddNewTask={handleAddNewTask} />

      <TaskCounter
        tasksCreatedCounter={tasksCreatedCounter}
        completedTasks={completedTasks}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TaskCard
              id={item.id}
              isCompleted={item.isCompleted}
              content={item.content}
            />
          )
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return <TaskCardEmpty />
        }}
      />
    </View>
  )
}
