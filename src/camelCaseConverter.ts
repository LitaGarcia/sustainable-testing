export function camelCaseConverter(text: string): string {
    const regexExp: RegExp = /\s+|[-_]/g;

    const convertedText: string = text.replace(regexExp, '#')
    return convertedText.split('#').map((word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join('')
}