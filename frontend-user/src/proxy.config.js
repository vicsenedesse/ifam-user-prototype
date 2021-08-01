const proxy = [
    {
        context: '/api/user',
        target: 'http://localhost:8080',
        pathRewrite: {'^/api/user' : ''}
    }
  
  ];
module.exports = proxy;