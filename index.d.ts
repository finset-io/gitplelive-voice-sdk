import EventEmitter from 'events';
export interface InitConfig {
    user_id: string;
    token: string;
}
export declare class VoiceClient extends EventEmitter {
    private user_id;
    private token;
    private nexmoClient;
    private session;
    private currentCall;
    constructor(config: InitConfig);
    connectUser(): Promise<void>;
    createSession(): Promise<void>;
    call(to: string): Promise<void>;
    hangUp(): Promise<void>;
    dialUp(): Promise<void>;
}
