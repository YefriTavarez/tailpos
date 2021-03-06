import * as React from "react";
import { Picker, Text } from "native-base";
import { View } from "react-native";

export default class DiscountPickerComponent extends React.Component {
  render() {
    const pickerItems = this.props.data.map((item, index) => (
      <Picker.Item label={item.name} value={item._id} key={index.toString()} />
    ));
    return (
      <View>
        <Text style={{ padding: 10, fontSize: 14, fontWeight: "bold" }}>
          Select New Discount
        </Text>
        <Picker
          mode="dropdown"
          selectedValue={this.props.selectedValue}
          onValueChange={this.props.onValueChange}
        >
          {pickerItems}
        </Picker>
      </View>
    );
  }
}
