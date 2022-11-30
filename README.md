# gitplelive-voice-sdk
Gitple Live Voice SDK

## Migration 0.0.x to 0.1.X
#### Migration guide from SDK 0.0.x to 0.1.X)

- Initialize the SDK.
  - The host field has been added to the initialization information.
    ```javascript
    try {
      const config = {
        host  // Added Fields
        app_id,
        user_id,
        token
      };
      // es6
      const gitpleLiveVoiceClient = new VoiceClient(config);

      // browser
      const gitpleLiveVoiceClient = new GitpleLiveVoice.VoiceClient(config);
    } catch (error) {
      // handle error
    }
    ```

## Install
```bash
# npm
$ npm i gitplelive-voice-sdk

# yarn
$ yarn add gitplelive-voice-sdk
```
___

## Import and Init
### es6
```javascript
import { VoiceClient } from 'gitplelive-voice-sdk';

const config = {
  host, // gitplelive api host (ex. live.example.com ), Without http:// or https:// or url path
  app_id,
  user_id,
  token
};

const gitpleLiveVoiceClient = new VoiceClient(config);
```

### browser
```javascript
<script src="./node_modules/gitplelive-voice-sdk/dist/voice.min.js"></script>

const config = {
  host,
  app_id,
  user_id,
  token
};

const gitpleLiveVoiceClient = new GitpleLiveVoice.VoiceClient(config);
```
___

## Use
### Get User Token
- api
  - GET https://{Gitple Live API Host}/v1/voice/users/{USER_ID}/token
  - header
    ```javascript
    {
      APP_API_KEY: 'APP API KEY',
      APP_ID: 'APP ID'
    }
  - response
    ```javascript
    {
      token: 'TOKEN'
    }
    ```
  - expire: 24h

### Init
- Initialize the SDK.
```javascript
try {
  const config = {
    host
    app_id,
    user_id,
    token
  };
  // es6
  const gitpleLiveVoiceClient = new VoiceClient(config);

  // browser
  const gitpleLiveVoiceClient = new GitpleLiveVoice.VoiceClient(config);
} catch (error) {
  // handle error
}
```
### Connect
- Use to connect users to voice services.
```javascript
try {
  await gitpleLiveVoiceClient.connectUser();
} catch (error) {
  // handle error
}
```
### Disconnect
- Use to terminate a voice service connection.
```javascript
try {
  await gitpleLiveVoiceClient.disconnectUser();
} catch (error) {
  // handle error
}
```
### Call
- Use to make a call.
```javascript
try {
  await gitpleLiveVoiceClient.call("{Other USER ID}");
} catch (error) {
  // handle error
}
```
### Dial Up
- Use to receive calls.
```javascript
try {
  await gitpleLiveVoiceClient.dialUp();
} catch (error) {
  // handle error
}
```
### Hang Up
- Use to end or decline a call.
```javascript
try {
  await gitpleLiveVoiceClient.hangUp();
} catch (error) {
  // handle error
}
```
### Mute
- Use it to mute my voice. Available after the call is connected.
```javascript
try {
  await gitpleLiveVoiceClient.mute(true);
} catch (error) {
  // handle error
}
```
### Unmute
- Use to unmute. Available after the call is connected.
```javascript
try {
  await gitpleLiveVoiceClient.mute(false);
} catch (error) {
  // handle error
}
```
### Check Destination Session
- Use to check that the destination session exists. Lets you determine if the destination is connected to the SDK.
  - Returns the boolean value. (true = session present, false = no session)
  - <span style="color:red">**CAUTION!**</span> If multiple sessions are not created indiscriminately and explicitly disconnected, the session may remain. If possible, please use the **'disconnectUser()'** function to explicitly terminate the connection.
```javascript
try {
  const flag = await gitpleLiveVoiceClient.checkSession("{Other USER ID}");
  if (flag) {
    // handle
  } else {
    // handle
  }
} catch (error) {
  // handle error
}
```
### Event Listener
```javascript
// Received when the call is created.
gitpleLiveVoiceClient.on('call', (data) => {
  // data: { id: {Call ID}, status: {Call Status}, direction: {Call direction}, from: {User ID}, to: {User ID} }

  // handle event
});

// Received whenever the status of the call changes.
gitpleLiveVoiceClient.on('call_status_changed', (data) => {
  // data: { id: {Call ID}, status: {Call Status}, direction: {Call direction}, from: {User ID}, to: {User ID} }

  // handle event
});
```

#### Event Payload
- payload
  ```javascript
  {
    id: '{Call ID}',
    status: '{Call Status}',
    direction: '{Call direction}',
    from: '{User ID}',
    to: '{User ID}'
  }
  ```

- status

  |status|desc|
  |:---|:---|
  |started|The call connection has been started|
  |ringing|The destination has confirmed that the call is ringing|
  |answered|The destination has answered the call|
  |completed|The call is completed successfully|
  |failed|The call connection failed|
  |rejected|The call attempt was rejected by the destination|
  |unanswered|There is no response to the call connection from the server|

- direction

  |direction|desc|
  |:---|:---|
  |outbound|Outgoing call|
  |inbound|incoming call|
___

## Error
### Payload
```javascript
{
  code: number;
  name: string;
  message: string;
  stack: string;
}
```

#### Code
|code|name|Desc|
|:---|:---|:---|
|80101|invalid_parameter|Invalid Parameter
|80102|not_found_user_session_id|User Session ID Not Found
|80103|same_caller_and_destination|Same caller and destination
|80201|already_connected_session|Already Connected Session
|80202|already_busy_call|Already Busy Call
|80401|invalid_token|Invalid Token
|80402|no_connected_session|No Connected Session
|80403|no_connected_call|No Connected Call
|80404|no_connected_destination|Destination is not connected
|80801|not_found_device|Device Not Found (microphone)
|80802|permission_denied|Permission Denied (microphone)
|80999|unknown_error|Unknown Error. Please contact us at Gitple