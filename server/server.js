const express = require ('express');
const {createProxyMiddleware} = require('http-proxy-middleware')

const app= express();

app.use (
  '/api',
  createProxyMiddleware ({
    target:'https://www.connectedliving.net',
    changeOrigin:true,
    pathRewrite:{
      '^/api':'',
    }
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('server is running on port ${PORT}')
});

// This code sets up a simple proxy server that listens on port 5000 and forwards requests to the connectedliving.net API. The '/api' route is used as a proxy, and the pathRewrite configuration removes the '/api' prefix before forwarding the request.

