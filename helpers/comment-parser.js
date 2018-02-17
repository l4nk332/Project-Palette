class CommentParser {
  constructor() {
    this.commentActive = false;
  }

  static stripInlineComment(line) {
    const commentIndex = line.indexOf('//');
    return commentIndex !== -1 ? line.slice(0, commentIndex) : line;
  }

  stripBlockComments(line) {
    const openComment = '/*';
    const closeComment = '*/';
    const splitLine = line.split(/(\/\*)|(\*\/)/g);
    const parsedLine = splitLine.filter(split => {
      if (!this.commentActive && split !== openComment) {
        return true;
      }

      if (split === openComment) {
        this.commentActive = true;
      }

      if (split === closeComment) {
        this.commentActive = false;
      }

      return false;
    });

    return parsedLine.join('');
  }
}

module.exports = CommentParser;
