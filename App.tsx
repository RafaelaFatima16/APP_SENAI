import {View} from 'react-native';
import React from 'react';

import Inventarios from './Screens/inventarios';
import DescItens from './Screens/descItens';
import CadastroItens from './Screens/cadastroItens';



const App = () => {
  return (
    <View style={{flex: 1}}>
      <CadastroItens />
    </View>

  );
  }
export default App;