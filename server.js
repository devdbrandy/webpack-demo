import Express from 'express';
import webpack from 'webpack';
import webpackDEvMiddleware from 'webpack-dev-middleware';
import config from './webpack.config';

const App = Express();
const compiler = webpack(config);

App.use(webpackDEvMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

App.listen(3000, () => {
  console.log('We are live on port 3000!\n');
});
