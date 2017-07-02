import React, { Component } from 'react';
import {ScrollView, View, Text} from 'react-native';
import { AccessoriesComponent } from '../AccessoriesComponent/AccessoriesComponent';
import { store } from '../../../store';

export class RoomAccessoriesComponent extends Component {

    componentWillMount () {
        this.setState({
            accessories: []
        });
    }

    render () {
      // store.subscribe(() => {
      //   this.setState({
      //       accessories: store.getState().accessories
      //   });
      // });

      let styles = {
        container: {
          borderRadius:15,
          backgroundColor: 'white',
          margin: 5,
          padding: 15,
          backgroundColor: 'rgb(39, 85, 249)'        
        },

        text: {
          color: 'white',
          fontSize: 21,
          fontWeight: 'bold'
        },
        accessories: {
          flexDirection: 'row'
        }
      };


      return (
        <View style={styles.container}>
          <Text style={styles.text}>Room Accessories</Text>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.accessories}>
            {
              this.state.accessories.map((x, index) => <AccessoriesComponent key={index} value={x.value} name={x.name} isactive={x.isactive} />)
            }
          </ScrollView>
        </View>
      )

  }
}