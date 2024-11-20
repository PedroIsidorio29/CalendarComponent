
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CalendarComponent from '@/components/CalendarComponent';
import EventListComponent from '@/components/EventListComponent';

const HomeScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  // Lista de eventos para exibição
  const events = [
    { id: 1, name: 'Reunião de Time', date: '2024-11-20' },
    { id: 2, name: 'Entrega do Projeto', date: '2024-11-21' },
    { id: 3, name: 'Café com Cliente', date: '2024-11-20' },
  ];

  return (
    <View style={styles.container}>
      <CalendarComponent
        startDate="2024-11-01"
        endDate="2024-11-30"
        onDateChange={(date) => setSelectedDate(date)}
      />
      <EventListComponent events={events} selectedDate={selectedDate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});

export default HomeScreen;
