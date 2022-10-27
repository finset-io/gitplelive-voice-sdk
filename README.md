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