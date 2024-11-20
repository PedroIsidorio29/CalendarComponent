import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

type Event = {
  id: number;
  name: string;
  date: string;
};

type Props = {
  events: Event[];
  selectedDate: string;
};

const EventListComponent: React.FC<Props> = ({ events, selectedDate }) => {
  const filteredEvents = events.filter(event => event.date === selectedDate);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos em {selectedDate || 'nenhuma data selecionada'}</Text>
      {filteredEvents.length > 0 ? (
        <FlatList
          data={filteredEvents}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text style={styles.item}>- {item.name}</Text>}
        />
      ) : (
        <Text style={styles.noEvent}>Nenhum evento encontrado.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 14,
    marginVertical: 5,
  },
  noEvent: {
    fontStyle: 'italic',
    color: '#888',
  },
});

export default EventListComponent;
