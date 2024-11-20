import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = {
  startDate: string;
  endDate: string;
  onDateChange: (date: string) => void;
};

const CalendarComponent: React.FC<Props> = ({ startDate, endDate, onDateChange }) => {
  const [showPicker, setShowPicker] = useState(false); // Controle para mostrar ou esconder o DateTimePicker
  const [selectedDate, setSelectedDate] = useState(new Date()); // Armazena a data selecionada

  // Função chamada quando a data é alterada
  const handleDateChange = (event: any, date?: Date) => {
    setShowPicker(false); // Fecha o DateTimePicker após a seleção da data

    if (date) {
      setSelectedDate(date); // Atualiza a data selecionada
      onDateChange(date.toISOString().split('T')[0]); // Envia a data para o componente pai
    }
  };

  // Função para exibir o picker
  const openDatePicker = () => {
    setShowPicker(true); // Exibe o DateTimePicker
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Selecione uma data entre {startDate} e {endDate}
      </Text>

      {/* Botão para abrir o DateTimePicker */}
      <Button title="Selecionar Data" onPress={openDatePicker} />

      {/* Condicionalmente exibe o DateTimePicker */}
      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date" // Exibe a data no picker
          display={Platform.OS === 'ios' ? 'spinner' : 'default'} // Exibe de forma diferente no iOS
          onChange={handleDateChange} // Passa a função que será chamada quando a data mudar
          minimumDate={new Date(startDate)} // A data mínima que pode ser selecionada
          maximumDate={new Date(endDate)} // A data máxima que pode ser selecionada
        />
      )}

      {/* Exibe a data selecionada */}
      <Text style={styles.selectedDate}>
        Data Selecionada: {selectedDate.toISOString().split('T')[0]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  selectedDate: {
    marginTop: 10,
    fontStyle: 'italic',
  },
});

export default CalendarComponent;
