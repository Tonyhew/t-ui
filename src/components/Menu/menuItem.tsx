import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from './menu'

export interface IMenuItem {
  index: number;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const MenuItem: React.FC<IMenuItem> = (props) => {
  const { className, style, disabled, index, children } = props
  const context = useContext(MenuContext)

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })

  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

export default MenuItem;
