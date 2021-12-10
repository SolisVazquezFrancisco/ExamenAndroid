import React, {useState} from 'react';
import { Text, View, Image, ScrollView, TextInput, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { exportDefaultDeclaration } from '@babel/types';

function HistoriaScreen() {
  return (
    <ScrollView>
      <Text>Bienvenido a la historia de los dispositivos.</Text>
      <Image style={{ height: 500, width: 300, marginLeft: 55, marginTop: 20 }}
        source={require(
           './src/images/blackberry.jpeg')}
      />
      <Text style={{ marginTop: 20 }}>Esto es una blackberry.</Text>
      <Image style={{ height: 500, width: 300, marginLeft: 55, marginTop: 20}}
        source={require(
          './src/images/nokia.jpg'
        )}
      />
      <Text style={{ marginTop: 20 }}>Esto es un nokia.</Text>
      <Image style={{ height: 500, width: 300, marginLeft: 55, marginTop: 20}}
        source={require(
          './src/images/iphone.webp'
        )}
      />
      <Text style={{ marginTop: 20 }}>Esto es un iPhone.</Text>
      <Image style={{ height: 500, width: 300, marginLeft: 55, marginTop: 20}}
        source={require(
          './src/images/Samnsung.webp'
        )}
      />
      <Text style={{ marginTop: 20 }}>Esto es un Samnsung.</Text>
    </ScrollView>
  );
}

function BusquedaScreen({navigation}) {

  const [age, setAge]=useState();

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
      <Text>Busca aquí tus usuarios por edad</Text>
      <Text style={{ marginTop: 20 }}>Edad</Text>
      <TextInput
      style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginTop: 10, marginBottom:20}}
      onChangeText={age => setAge(age)}
      />
      <Button
        title={"Buscar"}
        onPress={() => navigation.navigate('Usuarios', {age:age})}
      />
    </View>
  );
}

const NavigationStack = createNativeStackNavigator();

function BusquedaStack() {
  return (
    <NavigationStack.Navigator>

      <NavigationStack.Screen name="Busqueda" component={BusquedaScreen}/>
      <NavigationStack.Screen name="Usuarios" component={UsuariosScreen}/>  

    </NavigationStack.Navigator>
  );
}

function UsuariosScreen({ route }) {

  const {age} = route.params;

  return (
    <View>
      <ScrollView>
        <Text>Tus usuarios son los siguientes</Text>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <View>
              {filtro(age, item)}
            </View>)
          }
        />
      </ScrollView>
    </View>
  );

}

function filtro(age, item) {
  if (age > item.age) return <Text>{item.name}, edad: {item.age}</Text>
}

const DATA = [
  { id: 1, name: 'Antonio Morlanes', age: 34, sex: 'Varón' },
  { id: 2, name: 'Margarita Fuentes', age: 29, sex: 'Mujer' },
  { id: 4, name: 'Manuel Machado', age: 51, sex: 'Varón' },
  { id: 5, name: 'Cai Lun', age: 81, sex: 'Varón' },
  { id: 6, name: 'Manuela Aparicia', age: 19, sex: 'Varón' },
  { id: 7, name: 'Manuel Lara', age: 20, sex: 'Varón' },
  { id: 9, name: 'Álvaro Andrade', age: 43, sex: 'Varón' },
  { id: 10, name: 'Ángel Andrade', age: 23, sex: 'Varón' },
  { id: 11, name: 'Araceli Castillo', age: 61, sex: 'Mujer' },
  { id: 12, name: 'Sara Sacristán', age: 49, sex: 'Mujer' },
  { id: 13, name: 'Esther Arroyo', age: 18, sex: 'Mujer' },
  { id: 14, name: 'Martina Danta', age: 45, sex: 'Mujer' },
  { id: 15, name: 'Julia Praena', age: 38, sex: 'Mujer' },
  { id: 16, name: 'Pedro Flecha', age: 53, sex: 'Varón' },
  { id: 17, name: 'Miguel Berral', age: 60, sex: 'Varón' },
  { id: 18, name: 'Lorena Aparicio', age: 53, sex: 'Mujer' },
  { id: 19, name: 'David Toral', age: 61, sex: 'Varón' },
  { id: 20, name: 'Daniel Cifuentes', age: 52, sex: 'Varón' }
]

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Historia" component={HistoriaScreen} />
        <Tab.Screen options={{headerShown: false}} name="Busqueda" component={BusquedaStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}