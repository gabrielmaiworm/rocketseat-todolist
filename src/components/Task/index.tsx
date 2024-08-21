import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'

type Props = {
  name: string;
  onRemove: () => void;
  onCheck: () => void;
}

export default function Task({name, onRemove, onCheck}: Props) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
    onCheck();
  }

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <TouchableOpacity onPress={handleCheck} style={styles.checkbox}>
          {checked && <Image source={require('../../../assets/check.png')} style={styles.checkmark}/>}
        </TouchableOpacity>
        <Text style={{color: '#F2F2F2', marginLeft: 10}}>{name}</Text>
      </View>
      <TouchableOpacity onPress={onRemove}>
        <Image source={require('../../../assets/trash.png')} style={{width: 36, height: 36}}/>
      </TouchableOpacity>
    </View>
  )
}