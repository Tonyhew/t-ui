import React, { createContext, useState } from 'react'
import classNames from 'classnames'
import { IMenuItem } from './menuItem'

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: string) => void

export interface IMenuProps {
  className?: string;
  mode?: MenuMode;
  defaultIndex?: string;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  children?: React.ReactNode;
  defaultOpenSubMenu?: string[];
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenu?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

const Menu: React.FC<IMenuProps> = (props) => {
  const { className, mode, defaultIndex, style, onSelect, children, defaultOpenSubMenu } = props

  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  const classes = classNames('tui-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })

  const handleClick = (index: string) => {
    setActiveIndex(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: activeIndex ? activeIndex : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenu
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<IMenuItem>
      const { name } = childElement.type
      if (name === 'MenuItem' || name === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } else {
        console.error('Warning: Menu has a child which is not MenuItem component')
      }
    })
  }

  return (
    <ul
      className={classes}
      style={style}
      data-testid='test-menu'
    >
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
}

export default Menu
