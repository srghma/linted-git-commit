import { showHelp, getMessage } from './args_parser'

describe('args_parser', () => {
  describe('showHelp', () => {
    describe('shows', () => {
      ;['-h', '--help'].forEach(opt => {
        it(`on ${opt}`, () => {
          const args = ['--amend', opt, '-n']
          expect(showHelp(args)).toBe(true)
        })
      })

      it('when no help', () => {
        const args = ['--amend', '-n']
        expect(showHelp(args)).toBe(false)
      })
    })
  })

  describe('getMessage', () => {
    const message = 'message'
    it('on -m', () => {
      const args = ['--amend', '-m', message]
      expect(getMessage(args)).toBe(message)
    })
  })
})
