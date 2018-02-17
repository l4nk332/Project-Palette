/* global describe:false, test:false, expect:false */

const CommentParser = require('../helpers/comment-parser');

/* Test CommentParser.stripInlineComment function */
/* ================================ */

describe('Test Stripping of Inline Comments', () => {
  test('Should return the same string if no inline comment is found', () => {
    expect(CommentParser.stripInlineComment('')).toEqual('');
    expect(CommentParser.stripInlineComment('/ /')).toEqual('/ /');
    expect(CommentParser.stripInlineComment('red')).toEqual('red');
    expect(CommentParser.stripInlineComment(' blue')).toEqual(' blue');
    expect(CommentParser.stripInlineComment(' green  ')).toEqual(' green  ');
  });

  test('Should return the trimmed string if inline comment is found', () => {
    expect(CommentParser.stripInlineComment('//')).toEqual('');
    expect(CommentParser.stripInlineComment('///')).toEqual('');
    expect(CommentParser.stripInlineComment('// red blue green')).toEqual('');
    expect(CommentParser.stripInlineComment('red // blue green')).toEqual('red ');
    expect(CommentParser.stripInlineComment('red blue green//')).toEqual('red blue green');
    expect(CommentParser.stripInlineComment('//red //blue //green')).toEqual('');
  });
});

/* Test CommentParser.stripBlockComment function */
/* ============================================= */

describe('Test Stripping of Block Comments', () => {
  test('Should return the same string if no block comment is found', () => {
    const commentParser = new CommentParser();
    expect(commentParser.stripBlockComments('')).toEqual('');
    expect(commentParser.commentActive).toBe(false);
    expect(commentParser.stripBlockComments('The sky is blue')).toEqual('The sky is blue');
    expect(commentParser.commentActive).toBe(false);
    expect(commentParser.stripBlockComments('/T*he s*k/y is blue*/')).toEqual('/T*he s*k/y is blue*/');
    expect(commentParser.commentActive).toBe(false);
    expect(commentParser.stripBlockComments('/ * */')).toEqual('/ * */');
    expect(commentParser.commentActive).toBe(false);
  });

  test('Should return the string stripped of block comments', () => {
    const commentParser = new CommentParser();
    expect(commentParser.stripBlockComments('/**/')).toEqual('');
    expect(commentParser.commentActive).toBe(false);
    expect(commentParser.stripBlockComments('*//*')).toEqual('*/');
    expect(commentParser.commentActive).toBe(true);
    expect(commentParser.stripBlockComments('comment is activel*/')).toEqual('');
    expect(commentParser.commentActive).toBe(false);
    expect(commentParser.stripBlockComments('/* Violet')).toEqual('');
    expect(commentParser.commentActive).toBe(true);
    expect(commentParser.stripBlockComments('* Red Blue Green')).toEqual('');
    expect(commentParser.commentActive).toBe(true);
    expect(commentParser.stripBlockComments('* Magenta')).toEqual('');
    expect(commentParser.commentActive).toBe(true);
    expect(commentParser.stripBlockComments('* Aqua */')).toEqual('');
    expect(commentParser.commentActive).toBe(false);
    const commentedA = 'Trying/* really trying*/ to';
    const uncommentedA = 'Trying to';
    expect(commentParser.stripBlockComments(commentedA)).toEqual(uncommentedA);
    expect(commentParser.commentActive).toBe(false);
    const commentedB = '/* again and again and again *//*';
    const uncommentedB = '';
    expect(commentParser.stripBlockComments(commentedB)).toEqual(uncommentedB);
    expect(commentParser.commentActive).toBe(true);
    const commentedC = 'ready*/stump /* again and again and again */the/*buggy*/ system/**/!';
    const uncommentedC = 'stump the system!';
    expect(commentParser.stripBlockComments(commentedC)).toEqual(uncommentedC);
    expect(commentParser.commentActive).toBe(false);
  });
});
