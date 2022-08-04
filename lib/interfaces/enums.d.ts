export declare enum InitiatorTypes {
    Customer = "customer",
    Patient = "patient",
    SelfCompletable = "self-completable"
}
export declare enum QnrContextTypes {
    Advoca = "advoca",
    Portal = "portal",
    Outlook = "outlook"
}
export declare enum DocSignicatSignStatusTypes {
    Complteted = "completed",
    Rejected = "rejected",
    Waiting = "waiting"
}
export declare enum DocProxyStatusTypes {
    Signed = "signed",
    WaitingForSigning = "waiting_for_signing",
    OnlyForView = "only_for_view"
}
export declare enum QuestionTypes {
    BooleanQuestion = "BooleanQuestion",
    CheckBoxes = "CheckBoxes",
    CompositeQuestion = "CompositeQuestion",
    DateField = "DateField",
    Dropdown = "Dropdown",
    FormatNumber = "FormatNumber",
    LinearScale = "LinearScale",
    Link = "Link",
    RadioButtons = "RadioButtons",
    TextLong = "TextLong",
    TextShort = "TextShort",
    Emoticons = "Emoticons",
    DocumentUpload = "DocumentUpload"
}
export declare enum ActorTypes {
    Mappable = "mappable",
    Custom = "custom",
    Complex = "complex"
}
export declare enum ConsentsGroupTypes {
    General = "GENERAL",
    Query = "QUERY",
    Communication = "COMMUNICATION"
}
export declare enum ConsentsTypeTypes {
    Mandatory = "MANDATORY",
    Optional = "OPTIONAL"
}
export declare enum DocumentPatientSecurityLevelTypes {
    ONE = "1",
    TWO = "2",
    THREE = "3",
    FOUR = "4"
}
export declare enum QueriesStatusTypes {
    InBound = "INBOUND",
    InProgress = "IN_PROGRESS",
    AwaitingReply = "AWAITING_REPLY",
    Expired = "EXPIRED",
    Completed = "COMPLETED",
    Processed = "PROCESSED",
    Rejected = "REJECTED"
}
export declare enum QueriesInitiatorTypes {
    Patient = "PATIENT",
    Customer = "CUSTOMER",
    SelfCompletable = "SELFCOMPLETABLE"
}
export declare enum SmsTemplatesCategoryTypes {
    Info = "INFO",
    Reject = "REJECT"
}
export declare enum TemplatesContextTypes {
    Advoca = "ADVOCA",
    Portal = "PORTAL",
    Outlook = "OUTLOOK"
}
export declare enum TemplatesAccessibleTypes {
    Patient = "PATIENT",
    Customer = "CUSTOMER"
}
export declare enum DocumentTypes {
    individual = "individual",
    group = "group"
}
export declare enum QuestionStateTypes {
    ForAllTemplates = "ForAllTemplates"
}
export declare enum DROPDOWN {
    Ordinary = "ORDINARY",
    PostCodeWithSity = "REGION_POST_CODE",
    Country = "COUNTRY"
}
export declare enum NumberTypes {
    PersonalNumber = "PERSONAL_NUMBER",
    NorwegianPhoneNr = "NORWEGIAN_PHONE_NR",
    Customizable = "CUSTOMIZABLE",
    CurrencyNok = "CURENCY_NOK",
    Ordinary = "ORDINARY",
    Years = "YEARS"
}
export declare enum DocStatusTypes {
    Signed = "signed",
    WaitingForSigning = "waiting_for_signing",
    OnlyForView = "only_for_view",
    Rejected = "rejected"
}
export declare enum DocPickerTypes {
    dokklad = "Dokklad",
    postJournal = "PostJournal"
}
export declare enum UploadSource {
    Local = "local",
    Adopus = "adopus",
    Dokklad = "dokklad",
    Outlook = "outlook"
}
export declare enum SourceDocType {
    Adopus = "adopus_doc_id",
    Dokklad = "dokklad_doc_id"
}
export declare enum MenuContextTypes {
    Chat = "chat",
    Portal = "portal"
}
export declare enum UsersMenuContext {
    Patients = "patients",
    Therapist = "therapist",
    Actor_Involved = "actor_involved"
}
//# sourceMappingURL=enums.d.ts.map