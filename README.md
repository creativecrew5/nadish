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

<ul>
  <li>
    Run 'npm install' 
  </li>
  <li>
     'npm start' ot run the project in dev.
  </li>
  <li>
     'npm run build:dev' to build the project. Files should be served by a webserver.     
  </li>
  <li>
     'npm install http-server' navigate to the dist folder and run this command 'http-server'
  </li>
</ul>