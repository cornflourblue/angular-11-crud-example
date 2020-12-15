export class Alert {
    constructor(
        public id: string,
        public type?: AlertType,
        public message?: string,
        public autoClose: boolean = true,
        public keepAfterRouteChange: boolean = false,
        public fade: boolean = false
    ) {}
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}