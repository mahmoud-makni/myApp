import React, {useState, useEffect} from 'react';
import { taskStyleheet, View, StatusBar, Text, TouchableOpacity, FlatList, TouchableWithoutFeedback,} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCheckbox from '../../components/materialCheckBox/materialCheckBox';
import TaskContainer from '../../components/taskContainer/taskContainer';
import taskStyle from './tasksStyle';
import {Colors, GlobalSheet} from '../../config';
import {Container, Content} from 'native-base';
import {WaveIndicator} from 'react-native-indicators';

const DTATS = [
  {
    id: 1,
    title: 'mahmoud',
  },
  {
    id: 2,
    title: 'heere ',
  },
  {
    id: 3,
    title: 'mahmoud us',
  },
  {
    id: 4,
    title: 'heere is',
  },
];
function Tasks(props) {
  const [isLoading, setLoading] = useState(true);
  const [DATA, fillData] = useState(); // lena
  useEffect(() => {
    async function getData() {
      var url = 'https://nodeback-lisph.run-eu-central1.goorm.io/notes';
      var data = await axios.get(url);
      fillData(data.data);
      console.log(DATA);
      setLoading(false);
    }
    getData();
  });

  return isLoading ? (
    <WaveIndicator animating={isLoading} />
  ) : (
    <Container style={{backgroundColor: Colors.backgroundSecond}}>
      <Content>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            elevation: 0,
            backgroundColor: 'transparent',
            padding: 2 * GlobalSheet.units.vh,
          }}
          onPress={() => props.navigation.toggleDrawer()}>
          <Icon type={'FontAwesome5'} name="bars" size={25} />
        </TouchableOpacity>
        <Text style={{marginLeft: 30, fontSize: 15}}>Upcoming Tasks</Text>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <TaskContainer
              id={item._id}
              title={item.title}
              checked={item.checked}
            />
          )}
          keyExtractor={item => item._id}
          ItemSeparatorComponent={renderSeparator}
          ListEmptyComponent={EmptyList}
        />
        <Text>Done Tasks</Text>
        <FlatList
          data={DTATS}
          renderItem={({item}) => (
            <TaskContainer
              id={item._id}
              title={item.title}
              checked={item.checked}
            />
          )}
          keyExtractor={item => item._id}
          ListEmptyComponent={EmptyList}
        />
      </Content>
    </Container>
  );
}
function renderSeparator() {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        // height: 3 * GlobalSheet.units.vh,
        width: '100%',
        backgroundColor: Colors.backgroundSecond,
      }}   />
  );
}
function EmptyList() {
  return (
    <View>
      <Text>H</Text>
    </View>
  );
}
export default Tasks;
