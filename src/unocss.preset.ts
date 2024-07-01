import color from './output/unocss/token'

export function tokenPreset(options) {
    const parsedRules = parseColor();

    return {
        name: 'token-preset',
        rules: parsedRules
    }
}

function parseColor() {
    const parsedOutput = []
    return color
}