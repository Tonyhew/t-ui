import React from 'react'
import classNames from 'classnames'

// Button 大小属性
export type ButtonSize = 'large' | 'small'
// Button 类型属性
export type ButtonType = 'default' | 'danger' | 'primary' | 'link' | 'dash'
// Button 形状属性值
export type ButtonShape = 'default' | 'circle' | 'round'

interface BaseButtonProps {
  // 设置按钮样式
  className?: string,
  // 设置按钮是否为禁用状态
  disabled?: boolean,
  // 设置按钮大小
  size?: ButtonSize,
  // 设置按钮类型
  btnType?: ButtonType,
  // 按钮的 btnType 为 link 时所能调用的属性
  href?: string,
  // 设置按钮形状
  shape?: ButtonShape,
  children: React.ReactNode,
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const { disabled, className, size, btnType, children, href, shape, ...restProps } = props

  // 按钮样式(类型、大小、形状、禁用等)
  const classes = classNames('tui-btn', className, {
    [`tui-btn-${btnType}`]: btnType,
    [`tui-btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
    [`tui-btn-${shape}`]: shape,
  })

  if (btnType === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  btnType: 'default',
  disabled: false,
  shape: 'default',
}

export default Button
