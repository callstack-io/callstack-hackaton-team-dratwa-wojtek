import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry, Alert, ScrollView} from 'react-native';
import AppIntro from 'react-native-app-intro';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
  padding: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderWidth: 1,
  },

  problems: {
    fontSize: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,

  }

});

class GettingStartedScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Getting started',
    }
  }

  onSkipBtnHandle = (index) => {
    Alert.alert('Skip');
    console.log(index);
  }

  doneBtnHandle = () => {
    Alert.alert('Done');
  }

  nextBtnHandle = (index) => {
    Alert.alert('Next');
    console.log(index);
  }

  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }

  render() {

    return (
      <View style={styles.container}>
        <AppIntro>
          <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
            <View level={10}>
              <Text style={styles.title}>Who are we and how we work?</Text>
            </View>
            <View level={15}>
              <Text style={styles.text}>
                We are small, but extremely skilled, highly specialized group of
                React Experts, all with strong backgrounds in the open-source
                community, and we’re here for larger projects which require that
                next level of talent. We are specialize in React, React
                Native and Node.js.

                We work with passion, involvement and with real desire to learn
                more and more.
              </Text>
            </View>
          </View>
          <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
            <View level={-10}><Text style={styles.text}>Page 222</Text></View>
            <View level={5}><Text style={styles.text}>Page 22</Text></View>
            <View level={20}><Text style={styles.text}>Page 2</Text></View>
          </View>
          <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
            <View level={8}><Text style={styles.text}>Page 3</Text></View>
            <View level={0}><Text style={styles.text}>Page 33</Text></View>
            <View level={-10}><Text style={styles.text}>Page 333</Text></View>
          </View>
          <ScrollView style={[{ backgroundColor: '#a4b602', flex: 1}]}>
            <View>
              <Text style={styles.problems}>
                If you have a programming problem - contact @mike or tell him about it,
              </Text>
            </View>
            <View>
              <Text style={styles.problems}>
                If you have problems about sales or contracts - contact @anna or come and talk about it,
              </Text>
            </View>
            <View>
              <Text style={styles.problems}>
                If you have administration problems - contact  @agnes or come and talk about it,
              </Text>
            </View>
            <View>
              <Text style={styles.problems}>
                If you have HR or events problems - contact @aniam or come and talk about it.
              </Text>
            </View>
            <View>
              <Text style={styles.problems}>
                If you have problems about projects - contact @krzysztof or come and talk about it.
              </Text>
            </View>
            <View>
              <Text style={styles.problems}>
                We always try to help you, the best as we can!
              </Text>
            </View>
        </ScrollView>
        </AppIntro>
      </View>
    );
  }
}

export default GettingStartedScreen;
