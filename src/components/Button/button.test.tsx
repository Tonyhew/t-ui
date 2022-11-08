/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps } from './button'

const testProps: ButtonProps = {
  btnType: 'link',
  size: 'large',
  className: 'klass',
}

const defaultProps = {
  onClick: jest.fn(),
}

describe('test button component', () => {
  it('should render the correct default button', () => {
    const view = render(<Button {...defaultProps}>Nice</Button>)
    const element = view.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('tui-btn tui-btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('should render the correct button based on different props', () => {
    const view = render(<Button {...testProps}>Nice</Button>)
    const element = view.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('tui-btn-link tui-btn-large klass')
  })

  it('should render a link when btnType equals link and href is provided', () => {
    const view = render(
      <Button
        btnType='link'
        href='http://www.baidu.com'
      >
        Nice
      </Button>
    )
    const element = view.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveAttribute('href')
    expect(element).toHaveClass('tui-btn-link')
  })

  it('should render disabled button when disabled set to true', () => {
    const view = render(<Button {...testProps}>Nice</Button>)
    const element = view.getByText('Nice')
    expect(element).toBeInTheDocument()
  })
})
