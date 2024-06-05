import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text } from 'react-native';

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const placeholder = {
    label: 'Card or Wallet',
    value: null,
  };
  const options = [
    { label: 'Debit Card', value: 'card' },
    { label: 'Wallet', value: 'wallet' },
    // { label: 'Option 3', value: 'option3' },
  ];
  return (
    <View>
      {/* <Text>Card or Wallet</Text> */}
      <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
      {/* {selectedValue && <Text>Selected: {selectedValue}</Text>} */}
    </View>
  );
};
export default Dropdown;