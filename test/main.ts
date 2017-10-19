import { main } from '../src/main'

describe('main', () => {
  const commit = jest.fn()
  const help = jest.fn()

  beforeEach(() => {
    commit.mockReset()
    help.mockReset()
  })

  describe('help', () => {
    describe('shows', () => {
      ;['-h', '--help'].forEach(opt => {
        it(`on ${opt}`, async () => {
          const args = ['--amend', opt, '-n']
          await main(args, commit, help)
          expect(commit).not.toHaveBeenCalled()
          expect(help).toHaveBeenCalledTimes(1)
        })
      })

      it('when no args', async () => {
        const args: string[] = []
        await main(args, commit, help)
        expect(commit).not.toHaveBeenCalled()
        expect(help).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('lints', () => {
    const opts = ['-m', '--message']

    describe('when message', () => {
      const message = 'message'

      opts.forEach(opt => {
        it(`succeeds on ${opt}`, async () => {
          const args = ['--amend', opt, message]
          await main(args, commit, help)
          expect(help).not.toHaveBeenCalled()
          expect(commit).toHaveBeenCalledTimes(1)
          expect(commit).toHaveBeenCalledWith(message, ['--amend'])
        })
      })
    })
  })
})
