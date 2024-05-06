export function camelCaseConverter(text: string): string {
    const regex = /(?:^|\s+)(\w+)(?:[_-]+)(\w+)/g

    if (text.match(regex)) {
        const textList: string[][] = text.split(' ').map((word: string) => word.split(/[_-]/));
        const replacedTextList = textList.map((word: string[]) => {
            word.join('')
            return word.map((w: string) => {
                return w.charAt(0).toUpperCase() + w.slice(1)
            }).join('').toString()
        })
        return replacedTextList.join('')
    } else if (emptyStringValidator(text) || stringUpperCaseValidator(text)) {
        return text
    } else if (stringSpaceValidator(text)) {
        return text.split(' ').join('')
    } else if (stringCamelCaseValidator(text)) {
        return text.charAt(0).toUpperCase() + text.slice(1)
    }

}

function emptyStringValidator(text: string): boolean {
    return text === ''
}

function stringUpperCaseValidator(text: string): boolean {
    const upperCaseRegex: RegExp = /^[A-Z][a-zA-Z]*$/
    return upperCaseRegex.test(text)
}

function stringSpaceValidator(text: string): boolean {
    const spaceRegex: RegExp = /\s/
    return spaceRegex.test(text)
}

function stringCamelCaseValidator(text: string) {
    const camelCaseRegex: RegExp = /^[a-z]/
    return camelCaseRegex.test(text)
}

