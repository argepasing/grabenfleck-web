// To see this message, follow the instructions for your Ruby framework.
//
// When using a plain API, perhaps it's better to generate an HTML entrypoint
// and link to the scripts and stylesheets, and let Vite transform it.
console.log('Vite ⚡️ Jekyll')

// Example: Import a stylesheet in <sourceCodeDir>/index.css
// import '~/index.css'

import Swup from 'swup';
import SwupSlideTheme from '@swup/slide-theme';
import SwupPreloadPlugin from '@swup/preload-plugin';
import SwupScrollPlugin from '@swup/scroll-plugin';

const swup = new Swup({
  plugins: [
    new SwupSlideTheme(),
    new SwupPreloadPlugin(),
    new SwupScrollPlugin()
  ]
});
