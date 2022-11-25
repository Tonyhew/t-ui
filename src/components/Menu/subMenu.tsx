import React, { useContext, useState, FunctionComponentElement } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { IMenuItem } from './menuItem'

export interface ISubMenuProps {
  index?: string;
  title: string;
  className?: string;
  children?: React.ReactNode
}

const SubMenu: React.FC<ISubMenuProps> = ({ title, className, index, children }) => {
  const context = useContext(MenuContext)
  const openedSubMenu = context.defaultOpenSubMenu as Array<string>
  const isOpened = (index && context.mode === 'vertical') ? openedSubMenu.includes(index) : false

  const [ menuOpen, setMenuOpen ] = useState(isOpened)
  
  const pIndex = context.index as string
  
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index || pIndex.includes(index as string),
  })

  const handleSubMenuClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }

  let timer: any
  const handleHoverMenu = (e: React.MouseEvent, toggle: boolean) => {
    if (timer) {
      clearTimeout(timer)
    }
    e.preventDefault()
    timer = setTimeout(() => {
      setMenuOpen(toggle)
    }, 300)
  }

  const clickEvent = context.mode === 'vertical' ? {
    onClick: handleSubMenuClick
  } : {}

  const hoverEvent = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleHoverMenu(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleHoverMenu(e, false) }
  } : {}

  const renderChildren = () => {
    const subMenuClasses = classNames('tui-submenu', {
      'menu-opened': menuOpen
    })

    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<IMenuItem>
      const { name } = childElement.type
      if (name === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        })
      } else {
        console.error("Warning: SubMenu has a child which is not a MenuItem component")
      }
    })
    return (
      <ul className={subMenuClasses}>
        {childrenComponent}
      </ul>
    )
  }

  return (
    <li key={index} className={classes} {...hoverEvent}>
      <div className="submenu-title" {...clickEvent}>
        {title}
      </div>
      {renderChildren()}
    </li>
  )

}

SubMenu.displayName = 'SubMenu'
export default SubMenu;
