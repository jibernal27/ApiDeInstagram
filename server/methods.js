

Meteor.methods({
  'instagram.imagesHash'({ tag }) 
  {
    new SimpleSchema({
      tag: { type: String }
    }).validate({ tag });
    
var user = Meteor.users.findOne(Meteor.userId());
var accesToken=user.services.instagram.accessToken;
console.log(accesToken)
var url="https://api.instagram.com/v1/tags/search?q={tags}&access_token={ACCESS-TOKEN}"
var url=url.replace("{tags}",tag).replace("{ACCESS-TOKEN}",accesToken)

    return Meteor.http.call("GET", url);
  }
});



