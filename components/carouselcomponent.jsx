import React from 'react';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' },
        // Add more items as needed
      ],
    };
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <Carousel
        layout={'default'}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={300}
        itemWidth={300}
      />
    );
  }
}

export default CarouselComponent;
