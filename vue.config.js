module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        const argsNew = args;
        argsNew[0].title = 'Lista Carros - Tabela Fipe';
        return args;
      });
  },
  publicPath: './',
};
