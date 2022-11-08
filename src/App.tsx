import React from 'react';
import Button from './components/Button/button';
import Alert from './components/Alert/alert';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
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
        <Alert type='success' title='hi' closable={true} />
        <Alert type='warning' title='2222' closable={false} icon={<>dd</>} />
        <Alert type='danger' title='danger' description='you are dangerous' />
      </header>
    </div>
  );
};

export default App;
