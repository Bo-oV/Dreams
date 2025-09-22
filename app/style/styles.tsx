import { StyleSheet } from 'react-native';
export const inputStyles = StyleSheet.create({
  input: {
    backgroundColor: 'white',    // білий фон
    borderColor: 'gray',         // сіра обводка
    borderWidth: 1,              // товщина обводки
    padding: 10,                 // внутрішній відступ
    borderRadius: 5,             // заокруглення
  },
});

export const textStyle = StyleSheet.create({
  textSteps:{
    color : 'white',
  }
})

export const listStyles = StyleSheet.create({
  list: {
    marginVertical: 10,      // відступи зверху/знизу списку
  },
  itemContainer: {
    flexDirection: 'row',    // чекбокс і текст в один ряд
    alignItems: 'center',
    marginBottom: 8,         // відстань між кроками
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,         // відстань між чекбоксом і текстом
  },
  checkboxText: {
    fontSize: 16,
    color: '#ffffffff',
  },
  stepText: {
    fontSize: 16,
    color: '#ffffffff',
  },
});