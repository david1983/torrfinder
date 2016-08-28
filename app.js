var torRequest = require("torrequest");
 
torRequest({
  uri: "http://thepiratebay.org/search/test",
  torHost: "127.0.0.1",
  torPort: 9150
}, function(err,res,doc){
  if(err) return console.log("Error: "+err);
console.log(doc)
  console.log("Document fetched successfully...");
});