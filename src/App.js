import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import ObjectCreation from './components/ObjectCreation';

import './styles/theme.css';


function App() {
  const [showComponent, setShowComponent] = useState(false);
  const [handleClick] = () => setShowComponent(!showComponent);
  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>Посмотри вокруг Admin </PanelHeader>
              <Group>
                <SimpleCell>Пользователи</SimpleCell>
                <SimpleCell>Главная страница</SimpleCell>
                <SimpleCell>Подборки</SimpleCell>
                <SimpleCell>Туристические объекты</SimpleCell>
                {showComponent && <ObjectCreation />}
                <SimpleCell>Подсказки поиска</SimpleCell>
                <SimpleCell>Поиск на карте</SimpleCell>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
