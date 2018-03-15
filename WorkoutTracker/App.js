import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, SectionList } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      { title: 'Chest', data: [{ Workout: "Bench Press", Reps: "7", Weight: "165" }] },
      { title: 'Legs', data: [{ Workout: "Squats", Reps: "7", Weight: "285" }] }
    ];
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.appHeader}>Workout Tracker Motherfucker!</Text>
        <SectionList
          sections={this.data}
          renderItem={({ item }) => <Greeting item={item}></Greeting>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    padding: 20
  },
  appHeader: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18
  },
  mooo: {
    height: 60,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row'
  },
  mooo2: {
    width: 160,
    borderColor: 'black',
    borderWidth: 1,

  },
  moooHeader: {
    height: 20,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row'
  }
});


class Greeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
       item: this.props.item
    };
 }
  
  render() {
    return (
      <View>
            <View style={styles.moooHeader}>
              <Text style={{ height: 30, width: 160 }}>Workout</Text>
              <Text style={{ height: 30, width: 80 }}>Reps</Text>
              <Text style={{ height: 30, width: 80 }}>Weight</Text>
            </View>

            <View style={styles.mooo}>
              <Text style={styles.mooo2}>{this.state.item.Workout}</Text>
              <TextInput
                style={{ height: 60, width: 80, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) =>this.moo(this.state.item,"Reps",text)}
                value={this.state.item.Reps}
              />
              {/* <TextInput
                style={{ height: 60, width: 80, borderColor: 'gray', borderWidth: 1 }}
                value={item.Weight}
                // onChangeText={(text) => this.setState({item.Weight})}
              /> */}
            </View>
          </View>
    );
  }

  moo(item,key,text){
    item[key] = text;
    this.forceUpdate()
  }
}
