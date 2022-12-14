import React from 'react';
import Button from './components/Button/button';
import Alert from './components/Alert/alert';

import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>

        <p>Menu组件: </p>

        <Menu defaultOpenSubMenu={['2']} defaultIndex={'0'}>
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
      </header>
    </div>
  );
};

export default App;
