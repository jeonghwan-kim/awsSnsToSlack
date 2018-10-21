exports.success = {
  Records: [{
    "EventSource": "aws:sns",
    "EventVersion": "1.0",
    "EventSubscriptionArn": "arn:aws:sns:ap-northeast-2:151095201970:ElasticBeanstalkNotifications-Environment-APP-ENV:1111-1111-1111-1111",
    "Sns": {
      "Type": "Notification",
      "MessageId": "1111-1111-1111-1111",
      "TopicArn": "arn:aws:sns:ap-northeast-2:111111:ElasticBeanstalkNotifications-Environment-APP-ENV",
      "Subject": "AWS Elastic Beanstalk Notification - Environment health has transitioned from Ok to Info. Applica......",
      "Message": "Timestamp: Tue Sep 18 01:53:46 UTC 2018\nMessage: Environment health has transitioned from Ok to Info. Application update in progress on 1 instance. 0 out of 1 instance completed (running for 19 seconds).\n\nEnvironment: APP-ENV\nApplication: APP\n\nEnvironment URL: http://APP-ENV.ap-northeast-2.elasticbeanstalk.com\nNotificationProcessId: ed05c426-fe75-46c9-9ca2-c03d53d85e25",
      "Timestamp": "2018-09-18T01:54:04.516Z",
      "SignatureVersion": "1",
      "Signature": "VaxT10......",
      "SigningCertUrl": "https://sns.ap-northeast-2.amazonaws.com/SimpleNotificationService-111111.pem",
      "UnsubscribeUrl": "https://sns.ap-northeast-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:ap-northeast-2:151095201970:ElasticBeanstalkNotifications-Environment-APP-ENV:......",
      "MessageAttributes": {}
    }
  }]
}

exports.failure = {
  Records: [{
    'EventSource': 'aws:sns',
    'EventVersion': '1.0',
    'EventSubscriptionArn': 'arn:aws:sns:ap-northeast-2:151095201970:ElasticBeanstalkNotifications-Environment-APP-ENV:1111-1111-1111-1111',
    'Sns': {
      'Type': 'Notification',
      'MessageId': '1111-1111-1111-1111',
      'TopicArn': 'arn:aws:sns:ap-northeast-2:111111:ElasticBeanstalkNotifications-Environment-APP-ENV',
      'Subject': 'AWS Elastic Beanstalk Notification - Environment health has transitioned from Ok to Info. Applica...',
      'Message': 'Timestamp: Tue Sep 18 01:53:46 UTC 2018\nMessage: Unsuccessful command execution on instance id(s) i-111111. Aborting the operation.\n\nEnvironment: APP-ENV\nApplication: APP\n\nEnvironment URL: http://APP-ENV.ap-northeast-2.elasticbeanstalk.com\nNotificationProcessId: 1111-1111-1111-1111',
      'Timestamp': '2018-09-18T01:54:04.516Z',
      'SignatureVersion': '1',
      'Signature': 'VaxT10......',
      'SigningCertUrl': 'https://sns.ap-northeast-2.amazonaws.com/SimpleNotificationService-111111.pem',
      'UnsubscribeUrl': 'https://sns.ap-northeast-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:ap-northeast-2:151095201970:ElasticBeanstalkNotifications-Environment-APP-ENV:......',
      'MessageAttributes': {}
    }
  }]
}
