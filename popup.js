  
  
   var auth = {
        consumerKey : "inoyHUZDgwjq9BTf60euqg",
        consumerSecret : "qsMR1FHX-MpZ6BkycKnFULRT5OQ",
        accessToken : "62swyNDNQ98MHlm9IhijlXR98NYpAWqm",
        // This example is a proof of concept, for how to use the Yelp v2 API with javascript.
        // You wouldn't actually want to expose your access token secret like this in a real application.
        accessTokenSecret : "tXvgJEJFlU-oxTsFRB2NE_TJ2wk",
        serviceProvider : {
          signatureMethod : "HMAC-SHA1"
        }
      };
      var terms = 'food';
      var near = 'San+Francisco';
      var accessor = {
        consumerSecret : auth.consumerSecret,
        tokenSecret : auth.accessTokenSecret
      };
      parameters = [];
      parameters.push(['term', terms]);
      parameters.push(['location', near]);
      parameters.push(['callback', 'cb']);
      parameters.push(['oauth_consumer_key', auth.consumerKey]);
      parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
      parameters.push(['oauth_token', auth.accessToken]);
      parameters.push(['oauth_signature_method', 'HMAC-SHA1']);
      var message = {
        'action' : 'http://api.yelp.com/v2/search',
        'method' : 'GET',
        'parameters' : parameters
      };
      OAuth.setTimestampAndNonce(message);
      OAuth.SignatureMethod.sign(message, accessor);
      var parameterMap = OAuth.getParameterMap(message.parameters);
      parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature)
      console.log(parameterMap);
