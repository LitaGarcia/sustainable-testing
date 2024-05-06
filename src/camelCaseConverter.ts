export function camelCaseConverter(text: string): string {
    const upperCaseValidator: RegExp = /^[A-Z][a-zA-Z]*$/
    const spaceValidator: RegExp = /\s/;
    const hyphenValidator: RegExp = /-/;
    const underscoreValidator: RegExp = /_/;
    const camelCaseValidator: RegExp = /^[a-z]/;
    const camelCaseAndSpaceValidator: RegExp = /[\w\s]+[_\-][\w\s]+/;

    if (text.match(camelCaseAndSpaceValidator)) {
        const textList = text.split(' ').map((word, i) => word.split(/[_-]/));
        const replacedTextList = textList.map((word, i) => {
            word.join('')
            return word.map((w, j) => {
                return w.charAt(0).toUpperCase() + w.slice(1)
            }).join('').toString()
        })
        return replacedTextList.join('')
    }

    if (text === '') {
        return text
    }
    if (text.match(upperCaseValidator)) {
        return text
    }
    if (text.match(spaceValidator)) {
        return text.split(' ').join('')
    }
    if (text.match(hyphenValidator) && text.match(underscoreValidator)) {
        return text.split('-').join('').split('_').join('')
    }
    if (text.match(camelCaseValidator)) {
        return text.charAt(0).toUpperCase() + text.slice(1)
    }

    return 'test'
}