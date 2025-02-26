import { styleTags, tags } from "@lezer/highlight";

export const Highlight = styleTags({
  "if endif": tags.controlKeyword,
  "{{ }}": tags.tagName,
  "{{{ }}}": tags.tagName,
  BIHelper: tags.keyword,
  Escape: tags.annotation,
  DirectiveContent: tags.variableName,
  BlockComment: tags.comment,
  OnelineComment: tags.comment,
  Number: tags.number,
  String: tags.string,
  Identifier: tags.variableName,
  "[ ]": tags.content, // Square brackets with darker appearance
  "~ @": tags.atom,
  "BracketExpression/[ BracketExpression/]": tags.content, // Highlight brackets
  dot: tags.punctuation, // Style the dot in property access
});
