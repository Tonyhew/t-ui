import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Alert, { IAlertProps } from './alert'

const testProps: IAlertProps = {
  title: 'test',
  onClose: jest.fn(),
}

const differentProps: IAlertProps = {
  ...testProps,
  description: 'this is a description sentense',
  type: 'success',
  closable: false,
}

describe('test alert component', () => {
  it('should render the correct default alert', () => {
    render(<Alert {...testProps} />)
    const element = screen.getByText('test')
    expect(element).toBeInTheDocument()
    fireEvent.click(screen.getByText('X'))
    expect(testProps.onClose).toHaveBeenCalled()
  })

  it('should render the correct button based on different props', () => {
    render(<Alert {...differentProps} />)
    const title = screen.getByText('test')
    const description = screen.getByText('this is a description sentense')
    const closeIcon = screen.queryByText('X')

    expect(title).toHaveClass('bold-title')
    expect(screen.getByTestId('tui-alert')).toHaveClass('tui-alert-success')
    expect(description).toBeInTheDocument()
    expect(closeIcon).not.toBeInTheDocument()
  })
})
