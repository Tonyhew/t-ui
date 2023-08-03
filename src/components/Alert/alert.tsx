import React, { useState } from 'react';
import classNames from 'classnames';
import Transition from '../Transition/transition';
import Icon, { ThemeProps } from '../Icon/Icon';
import { IconName } from '@fortawesome/fontawesome-svg-core';

export type AlertType = 'success' | 'default' | 'danger' | 'warning';

export interface IAlertProps {
  title: string; // 标题
  description?: string; // 描述
  type?: AlertType;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  closable?: boolean;
  className?: string;
  icon?: IconName;
  iconType?: ThemeProps;
}

const Alert: React.FC<IAlertProps> = (props) => {
  const [hide, setHide] = useState(false);
  const {
    title,
    description,
    type,
    closable,
    onClose,
    className,
    icon,
    iconType
  } = props;

  const classes = classNames('tui-alert', className, {
    [`tui-alert-${type}`]: type
  });

  const titleClass = classNames('tui-alert-title', className, {
    'bold-title': title
  });

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClose) {
      onClose?.(e);
    }
    setHide(true);
  };

  return (
    <Transition in={!hide} animation="zoom-in-top" timeout={300}>
      <div className={classes} data-testid="tui-alert">
        {/* {icon && <span className='tui-alert-icon'>{icon}</span>} */}
        {icon && <Icon theme={iconType} icon={icon} />}
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
