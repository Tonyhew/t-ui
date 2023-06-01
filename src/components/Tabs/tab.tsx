import React, { FunctionComponentElement, useState } from 'react'
import classNames from 'classnames'
import { ITabItemProps } from './tabItem'

type Type = 'line' | 'card'
type Position = 'top' | 'bottom' | 'left' | 'right'
type SelectCallback = (defaultIndex: number) => void

interface ITabProps {
  centered?: boolean
  defaultIndex?: number
  type?: Type
  tabPosition?: Position
  className?: string
  onSelect?: SelectCallback
  children?: React.ReactNode
  items?: ITabItemProps[]
}

const Tab: React.FC<ITabProps> = (props) => {
  const { defaultIndex, type, className, children, onSelect, items, centered, tabPosition } = props

  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  const handleClick = (e: React.MouseEvent, index: number, disabled?: boolean | undefined) => {
    if (!disabled) {
      setActiveIndex(index)
      if (onSelect) {
        onSelect(index)
      }
    }
  }

  const tabClass = classNames('tui-tabs', {
    className,
    'tui-tab-centered': centered,
    [`tui-tab-${tabPosition}`]: tabPosition,
  })

  const navClass = classNames('tui-tabs-nav', {
    'nav-line': type === 'line',
    'nav-card': type === 'card',
  })

  const renderNavLinks = () => {
    if (items) {
      return items.map((item, index) => {
        const classes = classNames('tui-tabs-nav-item', {
          'is-active': activeIndex === index,
          'tui-tab-disabled': item.disabled,
        })
        return (
          <li
            className={classes}
            key={`nav-item-${item.key}`}
            onClick={(e) => handleClick(e, index, item.disabled)}
          >
            {item.label}
          </li>
        )
      })
    } else {
      return React.Children.map(children, (child, index) => {
        const childElement = child as FunctionComponentElement<ITabItemProps>
        const { label, disabled } = childElement.props
        const classes = classNames('tui-tabs-nav-item', {
          'is-active': activeIndex === index,
          'tui-tab-disabled': disabled,
        })
        return (
          <li
            className={classes}
            key={`nav-item-${index}`}
            onClick={(e) => handleClick(e, index, disabled)}
          >
            {label}
          </li>
        )
      })
    }
  }

  const renderNavContent = () => {
    if (items) {
      return items.map((item, index) => {
        if (index === activeIndex) {
          return item.children
        }
      })
    } else {
      return React.Children.map(children, (child, index) => {
        if (index === activeIndex) {
          return child
        }
      })
    }
  }

  return (
    <div className={tabClass}>
      <ul className={navClass}>{renderNavLinks()}</ul>

      <div className={'tui-tabs-content'}>{renderNavContent()}</div>
    </div>
  )
}

Tab.defaultProps = {
  defaultIndex: 0,
  type: 'line',
  tabPosition: 'top'
}

export default Tab
