
// this will change in near future with the integration with bundler
if( process.env.NODE_ENVIRONMENT === 'production' )
    export * from './build/index.js';
else
    export * from './src/index.ts';