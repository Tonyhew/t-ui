import React, { FC, ReactElement, InputHTMLAttributes, ChangeEvent } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from '../Icon/Icon';
import classNames from 'classnames';

type InputSize = 'lg' | 'sm';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProp;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = (props) => {
  // 取出各种属性
  const { disabled, size, icon, prepend, append, style, ...restProps } = props;

  const isPrepend = !!prepend;
  const isAppend = !!append;

  // 根据属性计算不同的 className
  const inputClassName = classNames('tui-input-wrapper', {
    [`tui-input-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-prepand': isPrepend,
    'input-group-append': isAppend,
    'is-prepend': isPrepend,
    'is-append': isAppend
  });

  const fixControlledValue = (value: any) => {
    if (value === 'undefined' || value === null) {
      return ''
    }

    return value;
  }

  if ('value' in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value)
  }

  // 根据属性判断是否要添加不同的节点
  return (
    <div className={inputClassName} style={style}>
      {prepend && <div className="tui-input-group-prepend">{prepend}</div>}
      <div className="tui-input-container">
        {icon && (
          <div className="tui-input-icon">
            <Icon className={`title-${icon}`} icon={icon} />
          </div>
        )}
        <input className="tui-input" disabled={disabled} {...restProps} />
      </div>
      {append && <div className="tui-input-group-append">{append}</div>}
    </div>
  );
};

export default Input;
