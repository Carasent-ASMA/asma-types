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



/* export enum InitiatorTypes {
    Customer = 'customer',
    Patient = 'patient',
    SelfCompletable = 'self-completable',
} */

export enum DocumentTypes {
    individual = 'individual',
    group = 'group',
}

/* export enum EprTypes {
    ADVITAM = 'ADVITAM',
    ADOPUS = 'ADOPUS',
} */

export enum QuestionStateTypes {
    ForAllTemplates = 'ForAllTemplates',
}
/* export enum QnrStatusTypes {
    Inbound = 'INBOUND',
    AwaitingReply = 'AWAITING_REPLY',
    InProgress = 'IN_PROGRESS',
    Completed = 'COMPLETED',
    Processed = 'PROCESSED',
    Expired = 'EXPIRED',
    Rejected = 'REJECTED',
} */

/* export enum QuestionTypes {
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
} */

export enum DROPDOWN {
    Ordinary = 'ORDINARY',
    PostCodeWithSity = 'REGION_POST_CODE',
    Country = 'COUNTRY',
}

export enum NumberTypes {
    PersonalNumber = 'PERSONAL_NUMBER',
    NorwegianPhoneNr = 'NORWEGIAN_PHONE_NR',
    Customizable = 'CUSTOMIZABLE',
    CurrencyNok = 'CURENCY_NOK',
    Ordinary = 'ORDINARY',
    Years = 'YEARS',
}

/* export enum ConsentTypes {
    Mandatory = 'MANDATORY',
    Optional = 'OPTIONAL',
}

export enum ConsentGroup {
    General = 'GENERAL',
    Query = 'QUERY',
    Communication = 'COMMINICATION',
} */

export enum DocStatusTypes {
    Signed = 'signed',
    WaitingForSigning = 'waiting_for_signing',
    OnlyForView = 'only_for_view',
    Rejected = 'rejected',
    /* download = 'download',
    uploaded = 'uploaded' */
}

export enum DocPickerTypes {
    dokklad = 'Dokklad',
    postJournal = 'PostJournal',
}

export enum UploadSource {
    Local = 'local',
    Adopus = 'adopus',
    Dokklad = 'dokklad',
    Outlook = 'outlook',
}

export enum SourceDocType {
    Adopus = 'adopus_doc_id',
    Dokklad = 'dokklad_doc_id',
}

export enum MenuContextTypes {
    Chat = 'chat',
    Portal = 'portal',
}

export enum UsersMenuContext {
    Patients = 'patients',
    Therapist = 'therapist',
    Actor_Involved = 'actor_involved',
}
