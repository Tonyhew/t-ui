import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Alert from './components/Alert/alert';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Button组件: </p>

        <Button btnType={ButtonType.Default} size={ButtonSize.Large}> Hello World </Button>
        <Button btnType={ButtonType.Primary}>Hello</Button>
        <Button btnType={ButtonType.Danger}>Hello World</Button>
        <Button btnType={ButtonType.Link} href='www.baidu.com'>
          Hello World{' '}
        </Button>
        <Button btnType={ButtonType.Dash}>ddd</Button>

        <br />
        <br />

        <p>Alert组件: </p>
        <Alert type='success' title='hi' closable={true} />
        <Alert type='warning' title='2222' closable={false} icon={<>dd</>} />
        <Alert type='danger' title='danger' description='you are dangerous' />
      </header>
    </div>
  );
};

export default App;
