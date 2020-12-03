# sanity-plugin-dashboard-widget-amplifydeploybutton
AWS amplify deploy button plugin for sanity.io dashboard

## Installing

### Install [sanity dashboard](https://www.sanity.io/docs/dashboard) (if not already installed)
```text
sanity install @sanity/dashboard
```
### Install the plugin
```text
sanity install dashboard-widget-amplifydeploybutton
```
### Update your dashboardConfig.js. 
Get the full webHookUrl from [amplify](https://docs.aws.amazon.com/amplify/latest/userguide/webhooks.html) ex. "https://<i></i>webhooks.amplify.eu-west-1.amazonaws.com/prod/webhooks?id=XXX&token=XXX&operation=startbuild".
```javascript
export default {
  widgets: [
  {
    name: "AmplifyDeployButton",
    options: {
      webhookUrls: [
          "<WebhookUrl1>",
          "<WebhookUrl2>",
        ],
      title: "Deploy content changes",
      buttonText: "Deploy",
    },
  },
  ]
}
```
