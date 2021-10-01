import { TextStyle } from "react-native"
import { colors, typography } from '../../theme/'

const BASE: TextStyle = {
    fontFamily: typography.primary,
    fontSize: 14,
    color: colors.darkgray
}

const BOLD: TextStyle = {
    fontFamily: typography.bold,
    color: colors.black
}

export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 32,
    },
    h2: {
        ...BOLD,
        fontSize: 28,
    },
    h3: {
        ...BOLD,
        fontSize: 24,
    },
    subhead1: {
        ...BASE,
        fontSize: 15,
    },
    subhead2: {
        ...BOLD,
        fontSize: 13,
    },
    small: {
        ...BASE,
        fontSize: 11,
    }
}

/**
 * A list of preset names.
 */
 export type TextPresets = keyof typeof presets