import EventEmitter from 'events';
export interface ClientError {
    code: number;
    name: string;
    message: string;
    stack: string;
}
export interface InitConfig {
    app_id: string;
    user_id: string;
    token: string;
    debug?: boolean;
}
export interface CallPayload {
    id: string;
    from?: string;
    to?: string;
    status: string | 'started' | 'ringing' | 'answered' | 'completed' | 'failed' | 'unanswered' | 'rejected';
    direction: string | 'outbound' | 'inbound';
}
export declare class VoiceClient extends EventEmitter {
    private appId;
    private userId;
    private voiceAppId;
    private token;
    private debug;
    private nexmoClient;
    private session;
    private currentCall;
    private currentTo;
    private me;
    constructor(config: InitConfig);
    connectUser(): Promise<void>;
    disconnectUser(): Promise<void>;
    call(to: string): Promise<void>;
    hangUp(): Promise<void>;
    dialUp(): Promise<void>;
    mute(mode: boolean): Promise<void>;
    private createSession;
    private deleteSession;
    private destroyCall;
    private clearSession;
    private clearCall;
    private decodeToken;
    private setCallPayload;
    private getMe;
}
