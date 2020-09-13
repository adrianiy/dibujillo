const toExport = {
    plugins: [
        'react-hot-loader/babel',
        'styled-components',
        '@babel/plugin-proposal-class-properties',
        'babel-plugin-dynamic-import-node',
    ],
    presets: [
        '@babel/preset-react',
        '@babel/preset-env',
        {
            useBuiIns: 'entry',
        },
    ],
};

module.exports = toExport;
