import css from 'rollup-plugin-import-css'
import bundleScss from "rollup-plugin-bundle-scss";

export default [{
    input: 'src/main.ts',
    output: {
        file: 'dist/variables.js',
    },
    plugins: [
        css({ output: 'css/variables.css' }),
        bundleScss({output: 'scss/_variables.scss'})
    ],
},
    {
        input: 'src/unocss.preset.ts',
        output: {
            file: 'dist/unocss.js'
        },
    }

]