import { ReplaceHyphensWithSpacesPipe } from './replace-hyphens-with-spaces.pipe';

describe('ReplaceHyphensWithSpacesPipe', () => {
  it('create an instance', () => {
    const pipe = new ReplaceHyphensWithSpacesPipe();
    expect(pipe).toBeTruthy();
  });

  it('converts string', () => {
    const pipe = new ReplaceHyphensWithSpacesPipe();
    expect(pipe.transform('aaaa-bbbb')).toBe('aaaa bbbb');
    expect(pipe.transform('---aaaa-bbbb')).toBe('   aaaa bbbb');
    expect(pipe.transform('aaa-a-b-bbb')).toBe('aaa a b bbb');
  });
});
