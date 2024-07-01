import {Dictionary, Options, tokens} from "style-dictionary";

function colorFormatter(dictionary: Dictionary, options: Options ): any {
   return dictionary.allProperties.filter(token => token.attributes.type === 'color').map(token => `${token.value}: ${token.value}`).join('/n');
}
