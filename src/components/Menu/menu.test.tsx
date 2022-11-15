/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { cleanup, fireEvent, render, RenderResult } from "@testing-library/react";
import Menu, { IMenuProps } from "./menu";
import MenuItem from "./menuItem";

const testProps: IMenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test'
}

const testVerProps: IMenuProps = {
  defaultIndex: 0,
  mode: 'vertical'
}

const renderMenu = (props: any) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>
        active
      </MenuItem>
      <MenuItem disabled index={1}>
        disabled
      </MenuItem>
      <MenuItem index={2}>
        xyz
      </MenuItem>
    </Menu>
  )
}

let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement

const setup = () => {
  wrapper = render(renderMenu(testProps));
  menuElement = wrapper.getByTestId('test-menu');
  activeElement = wrapper.getByText('active')
  disabledElement = wrapper.getByText('disabled')
}

describe('test Menu and MenuItem component', () => {

  it('should render correct menu and menuItem based on default props', () => {
    setup()
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('tui-menu test')
    expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })
  
  it('click items should change active and call the right callback', () => {
    setup()
    const thirdItem = wrapper.getByText('xyz')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith(2)
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
  })

  it('should render vertical mode when mode is set to vertical', () => {
    cleanup()
    const wrapper = render(renderMenu(testVerProps))
    const menuElement = wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })
})



