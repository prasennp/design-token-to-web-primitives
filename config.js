const {fileHeader} = require("style-dictionary/lib/common/formatHelpers");
const utils = require("style-dictionary/lib/utils/es6_");

function colorFormatter({ dictionary, file, options = {} }) {
    const { outputReferences } = options;
    return fileHeader({file}) + ['export default ['] + dictionary.allTokens.filter(token => token.type === 'color').map(function(token) {
            var to_ret = '[' + '"' + utils.kebabCase(token.name) + '"' + ', {' + `'${token.type}': '${token.value}'` + '}' + ']';
            if (token.comment)
                to_ret = to_ret.concat(' // ' + token.comment);
            return to_ret;
        }).join(',') + ']';
}

module.exports = {
    source: ['src/transformed/**/*.json'],
    format: {
       colorFormatter
    },
    platforms: {
        css: {
            transformGroup: 'css',
            buildPath: 'src/output/css/',
            files: [{
                destination: 'variables.css',
                format: 'css/variables'
            }]
        },
        scss: {
            transformGroup: "scss",
            buildPath: 'src/output/scss/',
            files: [{
                destination: "_variables.scss",
                format: "scss/variables",
            }]
        },
        js: {
            transformGroup: "js",
            buildPath: 'src/output/js/',
            files: [{
                destination: "variables.js",
                format: "javascript/es6",
            }]
        },
        unocss: {
            transformGroup: 'js',
            buildPath: 'src/output/unocss/',
            files: [{
                destination: 'token.js',
                format: 'colorFormatter'
            }]
        },
    }
}
