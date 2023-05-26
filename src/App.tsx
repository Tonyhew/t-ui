import React, { useState } from 'react'
import Button from './components/Button/button'
import Alert from './components/Alert/alert'

<<<<<<< Updated upstream
=======
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

import Tab from './components/Tabs/tab'
import TabItem from './components/Tabs/tabItem'

import Icon from './components/Icon/Icon'

import Transition from './components/Transition/transition'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

>>>>>>> Stashed changes
const App: React.FC = () => {
  const [show, setShow] = useState(true)

  return (
    <div className='App'>
      <header className='App-header'>
<<<<<<< Updated upstream
=======
        <p>Menu组件: </p>

        <Menu>
          <MenuItem>one</MenuItem>
          <MenuItem disabled>two</MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
          </SubMenu>
          <MenuItem>three</MenuItem>
        </Menu>

        <br />

        <p>Tab组件:</p>
        <Tab type='line'>
          <TabItem label='ddd'>ddd</TabItem>
          <TabItem label='aaa'>aaa</TabItem>
        </Tab>

        <br />

>>>>>>> Stashed changes
        <p>Button组件: </p>

        <Button
          btnType={'default'}
          size={'large'}
        >
          {' '}
          Hello World{' '}
        </Button>
        <Button btnType={'primary'}>Hello</Button>

        <Button btnType={'link'}>Hello World </Button>
        <Button
          btnType={'primary'}
          shape={'circle'}
          size='small'
        >
          d
        </Button>
        <Button
          btnType={'primary'}
          shape={'circle'}
        >
          d
        </Button>
        <Button
          btnType={'primary'}
          shape={'circle'}
          size='large'
        >
          d
        </Button>

        <br />
        <Button
          btnType={'danger'}
          shape={'round'}
          size='small'
        >
          Hello World
        </Button>
        <Button
          btnType={'danger'}
          shape={'round'}
        >
          Hello World
        </Button>
        <Button
          btnType={'danger'}
          shape={'round'}
          size='large'
        >
          Hello World
        </Button>

        <Button
          size='large'
          btnType={'primary'}
          onClick={() => setShow(!show)}
        >
          Toggle
        </Button>

<<<<<<< Updated upstream
        <p>Alert组件: </p>
        <Alert type='success' title='hi' closable={true} onClose={(e: any) => console.log('ddd')} />
        <Alert type='warning' title='2222' closable={false} icon={<>dd</>} />
        <Alert type='danger' title='danger' description='you are dangerous' />
=======
        <Transition
          in={show}
          wrapper
          timeout={300}
          animation='zoom-in-right'
        >
          <p>Alert组件: </p>
          <Alert
            type='success'
            title='hi'
            closable={true}
            onClose={(e: any) => console.log('ddd')}
          />
          <Alert
            type='warning'
            title='2222'
            closable={false}
            icon={<>dd</>}
          />
          <Alert
            type='danger'
            title='danger'
            description='you are dangerous'
          />

          <br />

          <p>Icon组件: </p>
          <Icon
            theme='danger'
            icon={'coffee'}
            size={'10x'}
          />
          <Icon
            theme='primary'
            icon={'arrow-down'}
            size={'10x'}
          />
        </Transition>

        <br />
        <br />
>>>>>>> Stashed changes
      </header>
    </div>
  )
}

export default App
