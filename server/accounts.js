
ServiceConfiguration.configurations.remove({
  service: 'instagram'
});
ServiceConfiguration.configurations.insert({
  service: 'instagram',
  scope: ['basic', 'likes', 'relationships', 'comments','public_content'],
  requestPermissions: ['basic', 'likes', 'relationships', 'comments'],
  clientId: Meteor.settings.InstagramAPI.CLIENT_ID,
  secret: Meteor.settings.InstagramAPI.CLIENT_SECRET
});