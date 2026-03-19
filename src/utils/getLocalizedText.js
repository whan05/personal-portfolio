function getLocalizedText(value, lang) {
  if (typeof value === 'string') {
    return value
  }

  if (!value || typeof value !== 'object') {
    return ''
  }

  return value[lang] ?? value.es ?? value.en ?? ''
}

export default getLocalizedText
