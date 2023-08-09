import React, { useState } from 'react';
import classNames from 'classnames';
import Transition from '../Transition/transition';
import Icon from '../Icon/Icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type AlertType =
  | 'success'
  | 'default'
  | 'danger'
  | 'warning'
  | 'info'
  | 'primary'
  | 'error';

export interface IAlertProps {
  title: string; // 标题
  description?: string; // 描述
  type?: AlertType;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  closable?: boolean;
  className?: string;
  icon?: IconProp;
  showIcon?: boolean;
}

const Alert: React.FC<IAlertProps> = (props) => {
  const [hide, setHide] = useState(false);
  const { title, description, type, closable, onClose, className, icon, showIcon } =
    props;

  const classes = classNames('tui-alert', className, {
    [`tui-alert-${type}`]: type,
  });

  const titleClass = classNames('tui-alert-title', className, {
    'bold-title': title,
    'isClose': closable
  });

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClose) {
      onClose?.(e);
    }
    setHide(true);
  };

  const iconTypeRender = (iconType: any, icon: any) => {
    if (showIcon) {
      switch (iconType) {
        case 'success':
          return (
            <Icon
              className="tui-alert-icon"
              theme={iconType}
              icon={icon !== '' && icon ? icon : 'check-circle'}
            />
          );
        case 'warning':
          return (
            <Icon
              className="tui-alert-icon"
              theme={iconType}
              icon={icon !== '' && icon ? icon : 'warning'}
            />
          );
        case 'error':
          return (
            <Icon
              className="tui-alert-icon"
              theme={iconType}
              icon={icon !== '' && icon ? icon : 'plus-circle'}
              style={{ transform: 'rotate(45deg)' }}
            />
          );
        case 'info':
          return (
            <Icon
              className="tui-alert-icon"
              theme={iconType}
              icon={icon !== '' && icon ? icon : 'info-circle'}
            />
          );
        default:
          return <Icon className="tui-alert-icon" theme={iconType} icon={icon} />;
      }
    }
  };

  return (
    <Transition in={!hide} animation="zoom-in-top" timeout={300}>
      <div className={classes} data-testid="tui-alert">
        {/* {icon && <span className='tui-alert-icon'>{icon}</span>} */}
        {showIcon ? iconTypeRender(type, icon) : null}
        <span className={titleClass}>{title}</span>
        {description && <p className="tui-alert-desc">{description}</p>}
        {closable && (
          <span className="tui-alert-close" onClick={handleClose}>
            X
          </span>
        )}
      </div>
    </Transition>
  );
};

Alert.defaultProps = {
  type: 'default',
  closable: true
};

export default Alert;
