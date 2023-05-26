import React, { FC, ReactNode } from 'react'

export interface ITabItemProps {
  /** Tab选项上面的文字 */
  label: string;
  /** 是否禁用 */
  disabled?: boolean;
  children?: ReactNode;
}

const TabItem: FC<ITabItemProps> = ({ children }) => {
  return (
    <div className="tui-tab-panel">
      {children}
    </div>
  )
}

export default TabItem
