function toHtmlHighlight(content: string, keyword: string) {
  const regex = new RegExp(`(${keyword})`);

  return content.replace(regex, `<span class="inline-highlight">${keyword}</span>`);
}

export { toHtmlHighlight };
