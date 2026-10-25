import { beforeEach, describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App.tsx'

// Spec: specs/spec.routing.md
// These tests render <App /> and assume the router lives inside it.
const SECTIONS = [
  ['Reader', 'reader'],
  ['News', 'news'],
  ['Church', 'church'],
  ['Vocabulary', 'vocabulary'],
] as const

const LEVELS = [2, 3, 4, 5]

describe('routing', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/')
  })

  describe.each(SECTIONS)('%s route', (name, slug) => {
    it(`navigates to /${slug}/level/1 when the "${name}" link is clicked`, () => {
      // Start on another section so the click must change the URL.
      const other = slug === 'reader' ? 'news' : 'reader'
      window.history.pushState({}, '', `/${other}/level/1`)
      render(<App />)
      fireEvent.click(screen.getByRole('link', { name }))
      expect(window.location.pathname).toBe(`/${slug}/level/1`)
    })

    it.each(LEVELS)(
      `navigates to /${slug}/level/%i when the level link is clicked`,
      (level) => {
        window.history.pushState({}, '', `/${slug}/level/1`)
        render(<App />)
        fireEvent.click(screen.getByRole('link', { name: String(level) }))
        expect(window.location.pathname).toBe(`/${slug}/level/${level}`)
      },
    )
  })
})
