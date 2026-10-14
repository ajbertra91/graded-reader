import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App.tsx'

describe('App', () => {
  it('shows a vocabulary tooltip when a word is tapped', () => {
    render(<App />)
    fireEvent.click(screen.getAllByRole('button', { name: '고양이' })[0])
    expect(screen.getByRole('tooltip')).toHaveTextContent('cat')
  })

  it('reveals the translation of a sentence', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('tab', { name: 'Translation' }))
    expect(screen.queryByText('I really love cats.')).toBeNull()
    fireEvent.click(screen.getByText('저는 고양이를 아주 좋아해요.'))
    expect(screen.getByText('I really love cats.')).toBeInTheDocument()
  })

  it('scores the questions', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('tab', { name: 'Questions' }))
    fireEvent.click(screen.getByText(/1\. 고양이 카페에서 고양이를/))
    fireEvent.click(screen.getByText(/2\. 루루는 카페에서/))
    fireEvent.click(screen.getByText(/3\. 글쓴이는 지난달에 혼자/))
    expect(screen.getByText(/Your score: 3 \/ 3/)).toBeInTheDocument()
  })
})
