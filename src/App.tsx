import React from 'react';
import Button from './components/Button/button';
import Alert from './components/Alert/alert';

import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

import Tab from './components/Tabs/tab';
import TabItem from './components/Tabs/tabItem';

import Icon from './components/Icon/Icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>

        <p>Menu组件: </p>

        <Menu defaultOpenSubMenu={['2']} defaultIndex={'0'} mode='vertical'>
          <MenuItem>one</MenuItem>
          <MenuItem disabled>two</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
          </SubMenu>     
          <MenuItem>three</MenuItem>
        </Menu>

        <br />

        <p>Tab组件:</p>
        <Tab type='line'>
          <TabItem label='ddd'>
            ddd
          </TabItem>
          <TabItem label='aaa'>
            aaa
          </TabItem>
        </Tab>

        <br />

        <p>Button组件: </p>

        <Button btnType={'default'} size={'large'}>
          {' '}
          Hello World{' '}
        </Button>
        <Button btnType={'primary'} >Hello</Button>
        
        <Button btnType={'link'} >
          Hello World{' '}
        </Button>
        <Button btnType={'primary'} shape={'circle'} size='small'>d</Button>
        <Button btnType={'primary'} shape={'circle'}>d</Button>
        <Button btnType={'primary'} shape={'circle'} size='large'>d</Button>

        <br />
        <Button btnType={'danger'} shape={'round'} size='small'>Hello World</Button>
        <Button btnType={'danger'} shape={'round'}>Hello World</Button>
        <Button btnType={'danger'} shape={'round'} size='large'>Hello World</Button>

        <br />
        <br />

        <p>Alert组件: </p>
        <Alert type='success' title='hi' closable={true} onClose={(e: any) => console.log('ddd')} />
        <Alert type='warning' title='2222' closable={false} icon={<>dd</>} />
        <Alert type='danger' title='danger' description='you are dangerous' />

        <br />
        <br />

        <p>Icon组件: </p>
        <Icon theme='danger' icon={'coffee'} size={'10x'} />
        <Icon theme='primary' icon={'arrow-down'} size={'10x'} />

      </header>
    </div>
  );
};

export default App;
