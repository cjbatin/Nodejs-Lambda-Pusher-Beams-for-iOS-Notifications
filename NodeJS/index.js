exports.handler = function(event, context, callback) {
    const PushNotifications = require('@pusher/push-notifications-server');
    let beamsClient = new PushNotifications({
      instanceId: 'YOUR_INSTANCE_ID',
      secretKey: 'YOUR_SECRET_KEY'
    });
    beamsClient.publishToInterests(['hello'], {
      apns: {
        aps: {
          "alert" : {
            "title" : event.title,
            "body" : event.message
          },
        }
      }
    }).then((publishResponse) => {
       callback(null, 'Just published:' + publishResponse.publishId);
    }).catch((error) => {
      callback(error);
    });
};
