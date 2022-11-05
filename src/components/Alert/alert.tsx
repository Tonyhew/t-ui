import React, { useState } from 'react';
import classNames from 'classnames';

export type AlertType = 'success' | 'default' | 'danger' | 'warning';

export interface IAlertProps {
  title: string; // 标题
  description?: string; // 描述
  type?: AlertType;
  onClose?: () => void;
  closable?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const Alert: React.FC<IAlertProps> = (props) => {
  const [hide, setHide] = useState(false);

  const { title, description, type, closable, onClose, className, icon } = props;

  const classes = classNames('tui-alert', className, {
    [`tui-alert-${type}`]: type,
  });

  const titleClass = classNames('tui-alert-title', className, {
    'bold-title': title,
  });

  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose();
    }
    setHide(true);
  };

  return !hide ? (
    <div className={classes}>
      {icon && <span className='tui-alert-icon'>{icon}</span>}
      <span className={titleClass}>{title}</span>
      {description && <p className='tui-alert-desc'>{description}</p>}
      {closable && (
        <span className='tui-alert-close' onClick={handleClose}>
          X
        </span>
      )}
    </div>
  ) : null;
};

Alert.defaultProps = {
  type: 'default',
  closable: true,
};

export default Alert;
