// deprecated, replaced with QueriesInitiator
export enum InitiatorTypes {
    Customer = 'customer',
    Patient = 'patient',
    SelfCompletable = 'self-completable',
}
// deprecated, replaced with TemplatesContext
export enum QnrContextTypes {
    Advoca = 'advoca',
    Portal = 'portal',
    Outlook = 'outlook',
}
export enum  DocSignicatSignStatusTypes {
    Complteted = 'completed',
    Rejected = 'rejected',
    Waiting = 'waiting'
}

export enum DocProxyStatusTypes {
    Signed = 'signed',
    WaitingForSigning = 'waiting_for_signing',
    OnlyForView = 'only_for_view',
    /* download = 'download',
    uploaded = 'uploaded' */
}
export enum QuestionTypes {
    BooleanQuestion = 'BooleanQuestion',
    CheckBoxes = 'CheckBoxes',
    CompositeQuestion = 'CompositeQuestion',
    DateField = 'DateField',
    Dropdown = 'Dropdown',
    FormatNumber = 'FormatNumber',
    LinearScale = 'LinearScale',
    Link = 'Link',
    RadioButtons = 'RadioButtons',
    TextLong = 'TextLong',
    TextShort = 'TextShort',
    Emoticons = 'Emoticons',
    DocumentUpload = 'DocumentUpload',
}

export enum ActorTypes {
    Mappable = 'mappable',
    Custom = 'custom',
    Complex = 'complex',
}

export enum ConsentsGroupTypes {
    General = 'GENERAL',
    Query = 'QUERY',
    Communication = 'COMMUNICATION',
}

export enum ConsentsTypeTypes {
    Mandatory = 'MANDATORY',
    Optional = 'OPTIONAL',
}

export enum DocumentPatientSecurityLevelTypes {
    ONE = '1',
    TWO = '2',
    THREE = '3',
    FOUR = '4',
}

export enum QueriesStatusTypes {
    InBound = 'INBOUND',
    InProgress = 'IN_PROGRESS',
    AwaitingReply = 'AWAITING_REPLY',
    Expired = 'EXPIRED',
    Completed = 'COMPLETED',
    Processed = 'PROCESSED',
    Rejected = 'REJECTED',
}

export enum QueriesInitiatorTypes {
    Patient = 'PATIENT',
    Customer = 'CUSTOMER',
    SelfCompletable = 'SELFCOMPLETABLE',
}

export enum SmsTemplatesCategoryTypes {
    Info = 'INFO',
    Reject = 'REJECT',
}

export enum TemplatesContextTypes {
    Advoca = 'ADVOCA',
    Portal = 'PORTAL',
    Outlook = 'OUTLOOK',
}

export enum TemplatesAccessibleTypes {
    Patient = 'PATIENT',
    Customer = 'CUSTOMER',
}