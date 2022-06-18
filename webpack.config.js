const path = require('path');

const config = {
    entry: "./src/app.tsx",
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
              test: /\.(scss|css)$/,
              use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.js",
    },
    devServer: {
        static: path.join(__dirname, "build"),
        compress: true,
        port: 4000,
    },
};

module.exports.default = config;