# GitHub-Explorer

- [x] Configurando ambiente ⚙️
- [x] Conceitos Importantes 📘
- [x] Chamadas HTTP 🗣
- [x] Usando Typescript 📘
- [x] Finalizando aplicação 🚚

## Preparing environment
```cmd
$ yarn init -y
```

#### 📂 Folders:   
    .    
    ├── dist             
    ├── node_modules                   
    ├── public                   
     ├── src
      ├── components
       ├── Counter.jsx
       ├── RepositoryItem.jsx
       ├── RepositoryList.jsx              
      ├── styles
        ├── global.scss                 
      ├── App.tsx
      ├── Index.tsx
      ├── package.json
      ├── babel.config.js
      └── webpack.config.js

#### Node Modules
* Normais
 ```cmd
$ yarn add __
```
* Desenvolvimento (Não vai para a produção):
```cmd
$ yarn add __ -D
```

#### React
```cmd
$ yarn add react
$ yarn add react-dom //Render the react elements
```
* App
Onde são criados os componentes

```jsx
import './styles/global.scss'

export function App() {
    //throw new Error("O forninho caiu!");
    return <h1>Hello World</h1>
}
```

* Index
Arquivo de execução principal

```jsx
import { render } from 'react-dom';
import { App } from './App';
render(<App />, document.getElementById('root'))
```

 ### Babel
 Converte o código para que o navegador entenda
 #### Configuração
 ```javascript
 //babel.config.js
 module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {
            runtime: 'automatic'
        }]
    ]
 }
 ```
 ### Executar
 ```cmd
 yarn babel src/index.js --out-file dist/bundle.js
 ```
 
### Webpack
Estipula uma série de 'loaders' para converter os arquivos a fim de deixar legíveis ao browser
#### Installing
 ```cmd
 yarn add webpack webpack-cli webpack-dev-server -D
 yarn add html-webpack-plugin -D // Add the bundle.js to index.html
 yarn add cross-env -D //Permiti a inserção de variáveis de ambiente em qualquer sistema operacional
 ```
* Loaders:
```cmd
 yarn add css-loader sass-loader style-loader node-sass -D //instala pré processador de css para inserir novas funcionalidades .scss
 yarn add babel-loader -D
```
#### Configure webpack.config.js
```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV != 'production';
module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        })
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel'),
                        ].filter(Boolean)
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    }
};
```
### Executar
 * Cria um atalho no package json
 ```json
 {
  "name": "github-explorer",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "webpack serve",
    "build": "cross-env NODE_ENV=production webpack"
  },
  "license": "MIT",
  "dependencies": {
  },
  "devDependencies": {
  }
}
```
 ```cmd
 $ yarn dev 
 $ yarn build
 ```
 ## Typescript
 * Static Type Checking
 ```cmd
 $ yarn add typescript -D  
 $ yarn add @babel/preset-typescript -D //faz com que o babel entenda typescript
 $ yarn yarn tsc --init
 $ yarn add @types/react-dom -D //adapta a tipagem do typescript
 ```

