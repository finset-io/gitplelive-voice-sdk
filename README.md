# gitplelive-voice-sdk
Gitple Live Voice SDK

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

const gitpleLiveVoiceClient = new VoiceClient({app_id, user_id, token});
```

### browser
```javascript
<script src="./node_modules/gitplelive-voice-sdk/dist/voice.min.js"></script>

const gitpleLiveVoiceClient = new GitpleLiveVoice.VoiceClient({app_id, user_id, token});
```
___

## Use
### Init
- Initialize the SDK.
```javascript
try {
  const gitpleLiveVoiceClient = new VoiceClient({app_id, user_id, token});
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
|80201|already_connected_session|Already Connected Session
|80202|already_busy_call|Already Busy Call
|80401|invalid_token|Invalid Token
|80402|no_connected_session|No Connected Session
|80403|no_connected_call|No Connected Call
|80999|unknown_error|Unknown Error. Please contact us at Gitple