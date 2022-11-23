import React, { useContext, FunctionComponentElement } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { IMenuItem } from './menuItem'

export interface ISubMenuProps {
  index?: number;
  title: string;
  className?: string;
  children?: React.ReactNode
}

const SubMenu: React.FC<ISubMenuProps> = ({ title, className, index, children }) => {
  const context = useContext(MenuContext)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
  })

  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<IMenuItem>
      const { name } = childElement.type
      if (name === 'MenuItem') {
        return childElement
      } else {
        console.error("Warning: SubMenu has a child which is not a MenuItem component")
      }
    })
    return (
      <ul className="tui-submenu">
        {childrenComponent}
      </ul>
    )
  }

  return (
    <li key={index} className={classes}>
      <div className="submenu-title">
        {title}
      </div>
      {renderChildren()}
    </li>
  )

}

SubMenu.displayName = 'SubMenu'
export default SubMenu;
