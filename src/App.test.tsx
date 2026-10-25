import { beforeEach, describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App.tsx'

describe('App', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/')
  })

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

  it('lists vocabulary by level', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('link', { name: 'Vocabulary' }))
    expect(screen.getByRole('heading', { name: /Level 1/ })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('link', { name: '2' }))
    expect(screen.getByRole('heading', { name: /Level 2/ })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('link', { name: '1' }))
    expect(screen.getAllByText('고양이').length).toBeGreaterThan(0)
  })

  it('shows news stories with a source link, separate from the reader', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('link', { name: 'News' }))
    expect(screen.getByText(/News Level 1/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'The Korea Herald' })).toHaveAttribute(
      'href',
      expect.stringContaining('koreaherald.com'),
    )
    expect(screen.queryByRole('button', { name: '고양이' })).toBeNull()
  })

  it('shows church texts with tooltips and no quiz', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('link', { name: 'Church' }))
    fireEvent.click(screen.getAllByRole('button', { name: '아버지' })[0])
    expect(screen.getByRole('tooltip')).toHaveTextContent('father')
    fireEvent.click(screen.getByRole('button', { name: "The Apostles' Creed" }))
    expect(screen.getByRole('heading', { name: '사도신경' })).toBeInTheDocument()
    expect(screen.queryByRole('tab', { name: 'Questions' })).toBeNull()
  })
})
