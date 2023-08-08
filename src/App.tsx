import React, { useState } from 'react';
import Button from './components/Button/button';
import Alert from './components/Alert/alert';

import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

import Tabs from './components/Tabs/tab';
import TabItem from './components/Tabs/tabItem';

import Icon from './components/Icon/Icon';

import Input from './components/Input/input';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Transition from './components/Transition/transition';

library.add(fas);

const App: React.FC = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <p>Input组件: </p>
        <Input
          icon={'check-circle'}
          prepend={'prepand'}
          // append={'append'}
          style={{ margin: '0 auto' }}
          onChange={e => console.log(e.target.value)}
        />

        <p>Menu组件: </p>

        <Menu defaultOpenSubMenu={['2']} defaultIndex={'0'} mode="horizontal">
          <MenuItem>one</MenuItem>
          <MenuItem disabled>two</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
          </SubMenu>
          <MenuItem>three</MenuItem>
        </Menu>

        <br />

        <p>Tab组件:</p>
        <Tabs type="line">
          <TabItem label="ddd">ddd</TabItem>
          <TabItem label="aaa">aaa</TabItem>
        </Tabs>

        <Tabs
          type="line"
          tabPosition="bottom"
          centered
          items={[
            {
              label: '项目 1',
              key: 'item-1',
              children: '内容 1'
            },
            {
              label: '项目 2',
              key: 'item-2',
              children: '内容 2'
            }
          ]}
        />

        <br />

        <p>Button组件: </p>

        <Button btnType={'default'} size={'large'}>
          {' '}
          Hello World{' '}
        </Button>
        <Button btnType={'primary'}>Hello</Button>

        <Button btnType={'link'}>Hello World </Button>
        <Button btnType={'primary'} shape={'circle'} size="small">
          d
        </Button>
        <Button btnType={'primary'} shape={'circle'}>
          d
        </Button>
        <Button btnType={'primary'} shape={'circle'} size="large">
          d
        </Button>

        <br />
        <Button btnType={'danger'} shape={'round'} size="small">
          Hello World
        </Button>
        <Button btnType={'default'} shape={'round'}>
          Hello World
        </Button>
        <Button btnType={'dash'} shape={'round'} size="large">
          Hello World
        </Button>

        <Button size="large" btnType={'primary'} onClick={() => setShow(!show)}>
          Toggle
        </Button>

        <Transition in={show} wrapper timeout={300} animation="zoom-in-right">
          <p>Alert组件: </p>
          <Alert
            type="success"
            showIcon
            title="hi"
            closable={true}
            onClose={(e: any) => console.log('ddd')}
          />
          <Alert type="warning" showIcon title="2222" closable={false} />
          <Alert type="error" title="danger" description="you are dangerous" />
          <Alert
            type="default"
            title="Info"
            icon={'ice-cream'}
            showIcon
            description="you are dangerous"
          />
        </Transition>

        <br />

        <p>Icon组件: </p>
        <Icon theme="danger" icon={'coffee'} size={'10x'} />
        <Icon theme="primary" icon={'arrow-down'} size={'10x'} />
        <Icon theme="success" icon={'warning'} size="10x" />
      </header>
    </div>
  );
};

export default App;
