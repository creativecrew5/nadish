<h1>Readme</h1>
<p>
  Set the google client id in the "config/webpack.common.js"

</p>


<code>
const METADATA = {
  title: 'Angular2 Google Auth',
  baseUrl: '/',
  googleClientId:{CLIENTID},
  isDevServer: helpers.isWebpackDevServer()
};
</code>