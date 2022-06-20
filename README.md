# Instructions to generate token:

To generate token,use microservice project and inside it there is ‘CreateTokenCommand’ class, call ‘Handle’ method.

From the result object, we will get ‘embedToken’, ‘reportIds’,’embeddUrl’

#Instructions to update token:

‘accesstoken.json’ file is uploaded in the url: ‘powerbi.customerdemourl.com’. Every time when token gets expire, need to replace existing token with new generated token in file, 

and then replace updated file with existing file in url.
 
