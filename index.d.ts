import EventEmitter from 'events';
export interface ClientError {
    code: number;
    name: string;
    message: string;
    stack: string;
}
export interface InitConfig {
    user_id: string;
    token: string;
    debug?: boolean;
}
export declare class VoiceClient extends EventEmitter {
    private user_id;
    private token;
    private debug;
    private nexmoClient;
    private session;
    private currentCall;
    constructor(config: InitConfig);
    connectUser(): Promise<void>;
    disconnectUser(): Promise<void>;
    call(to: string): Promise<void>;
    hangUp(): Promise<void>;
    dialUp(): Promise<void>;
    private createSession;
    private deleteSession;
    private destroyCall;
    private clearSession;
    private clearCall;
}
