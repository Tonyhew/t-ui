import React from 'react';
import classNames from 'classnames';

export type ButtonSize = 'large' | 'small';

export type ButtonType = 'default' | 'danger' | 'primary' | 'link' | 'dash';

export type ButtonShape = 'default' | 'circle' | 'round';

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
  shape?: ButtonShape;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const { disabled, className, size, btnType, children, href, shape, ...restProps } = props;

  const classes = classNames('tui-btn', className, {
    [`tui-btn-${btnType}`]: btnType,
    [`tui-btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
    [`tui-btn-${shape}`]: shape,
  });

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  btnType: 'default',
  disabled: false,
  shape: 'default',
};

export default Button;
