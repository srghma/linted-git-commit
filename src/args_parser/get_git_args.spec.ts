import { getGitArgs } from './get_git_args'

describe('get_git_args', () => {
  ;['-h', '--help'].forEach(opt => {
    it(`rejects ${opt}`, () => {
      const args = ['--amend', opt, '-n']
      const expected = ['--amend', '-n']
      expect(getGitArgs(args)).toEqual(expected)
    })
  })

  it('rejects message and pointer', () => {
    const args = ['--amend', '-m', 'message']
    const expected = ['--amend']
    expect(getGitArgs(args)).toEqual(expected)
  })
})
