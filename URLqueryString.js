// URL Query String
// Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

// HINT: You may use decodeURIComponent()

// Examples
// Input	Output
// url:
// "http://example.com?a=hello&b=99"	[ [ "a", "hello" ], [ "b", "99" ] ]
// url:
// "http://example.com?msg=hello%20world"	[ [ "msg", "hello world" ] ]
// url:
// "http://example.com"	undefined


function parseQueryString (url) {
  
  var path = url.split("?")[1]
  
  if (path) {
    
    var pairs = [] 
    
    var fragments = path.split("&")
    
    for (var i=0; i<fragments.length; i++){
      
      var parameters = fragments[i].split("=")
      
      parameters[1] = decodeURIComponent( parameters[1])
      //parameters.splice(1,1,decodeURIComponent(pairs[1])
      
      pairs.push(parameters)
      
    }
    
    return pairs
  }  
  
  return null
  
}
