# gitplelive-voice-sdk
Gitple Live Voice SDK

### Install
```bash
# npm
$ npm i gitplelive-voice-sdk

# yarn
$ yarn add gitplelive-voice-sdk
```

### Import and Init
#### es6
```javascript
import { VoiceClient } from 'gitplelive-voice-sdk';

const gitpleLiveVoiceClient = new VoiceClient({user_id, token});
```

#### browser
```javascript
<script src="./node_modules/gitplelive-voice-sdk/dist/voice.min.js"></script>

const gitpleLiveVoiceClient = new GitpleLiveVoice.VoiceClient({user_id, token});
```

### Use
#### init
```javascript
let gitpleLiveVoiceClient;
try {
  gitpleLiveVoiceClient = new VoiceClient({user_id, token});
} catch (error) {
  // handle error
}
```
#### connect
```javascript
try {
  await gitpleLiveVoiceClient.connectUser();
} catch (error) {
  // handle error
}
```
#### disconnect
```javascript
try {
  await gitpleLiveVoiceClient.disconnectUser();
} catch (error) {
  // handle error
}
```
#### call
```javascript
try {
  await gitpleLiveVoiceClient.call("{Other USER ID}");
} catch (error) {
  // handle error
}
```
#### dial up
```javascript
try {
  await gitpleLiveVoiceClient.dialUp();
} catch (error) {
  // handle error
}
```
#### hang up
```javascript
try {
  await gitpleLiveVoiceClient.hangUp();
} catch (error) {
  // handle error
}
```
#### event listener
- status: 'started', 'answered', 'completed', 'failed', 'unanswered', 'rejected'
- direction: 'outbound', 'inbound'

```javascript
gitpleLiveVoiceClient.on('call', (data) => {
  // data: { id: {Call ID}, status: {Call Status}, direction: {Call direction}} }

  // handle event
});

gitpleLiveVoiceClient.on('call_status_changed', (data) => {
  // data: { id: {Call ID}, status: {Call Status}, direction: {Call direction}} }

  // handle event
});
```

### Error Code
|Code|Desc|
|:---|:---|
|80101|invalid_parameter|
|80201|already_connected_session|
|80202|already_busy_call|
|80401|invalid_token|
|80402|no_connected_session|
|80403|no_connected_call|
|80999|unknown_error|