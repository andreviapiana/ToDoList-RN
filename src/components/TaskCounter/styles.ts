import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 8,
  },
  textInfo: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  taskCounter: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: '#333333',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D9D9D9',
    overflow: 'hidden',
  },
})
