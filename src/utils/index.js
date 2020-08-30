export const cropText = (text, lines) => text.length > lines ? text.slice(text, lines) + '...' : text
