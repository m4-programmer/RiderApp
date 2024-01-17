import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { COLORS } from '../../../constants/theme';
// import AntDesign from '@expo/vector-icons/AntDesign';


const CustomDropdownInput = ({value, setValue,data, fieldLabel, fieldValue, ...props}) => {
  
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      {props.text && <Text style={[styles.label, { color: COLORS.mildLight }]}>
            {props?.text}
      </Text>}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: COLORS.mildLight }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        
        data={data}
        search
        maxHeight={300}
        labelField={fieldLabel}
        valueField={fieldValue}
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
       
      />
    </View>
  );
};

export default CustomDropdownInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  dropdown: {
    height: 70,
    padding: 15,
    paddingTop: 30,
    borderColor: COLORS.darkMode,
    borderWidth: 0.5,
    borderRadius: 8,
    backgroundColor: COLORS.inputColor,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    top: 8,
    left: 15,
    zIndex: 999,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 14,
    color: COLORS.lightMode,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: COLORS.lightMode,
  },

});