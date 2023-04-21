/**
 * @deprecated replaced with QueriesInitiator
 */
export declare enum InitiatorTypes {
    Customer = "customer",
    Patient = "patient",
    SelfCompletable = "self-completable"
}
/**
 * @deprecated replaced with TemplatesContext
 */
export declare enum QnrContextTypes {
    Advoca = "advoca",
    Portal = "portal",
    Outlook = "outlook"
}
export declare enum DocSignicatSignStatusTypes {
    Completed = "completed",
    Rejected = "rejected",
    Waiting = "waiting"
}
export declare enum DocProxyStatusTypes {
    Signed = "signed",
    WaitingForSigning = "waiting_for_signing",
    OnlyForView = "only_for_view"
}
export declare enum AsyncChatArtifactExtension {
    DOC = "doc",
    DOCX = "docx",
    JPEG = "jpeg",
    JPG = "jpg",
    PDF = "pdf",
    PNG = "png",
    UNKNOWN = "unknown"
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
    DocumentUpload = "DocumentUpload",
    Readonly = "Readonly",
    ExpressionQuestion = "ExpressionQuestion",
    Chart = "Chart",
    Widget = "Widget"
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
    Reject = "REJECT",
    NewChat = "NEW_CHAT",
    UnseenNotifications = "UNSEEN_NOTIFICATIONS"
}
export declare enum TemplatesContextTypes {
    Advoca = "ADVOCA",
    Portal = "PORTAL",
    Outlook = "OUTLOOK",
    Start = "START",
    Research = "RESEARCH",
    Plan = "PLAN",
    Summary = "SUMMARY"
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
    PostCodeWithCity = "REGION_POST_CODE",
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
export declare enum FileTypeEnum {
    Doc = "doc",
    Qnr = "questionnaire"
}
export declare enum SecurityLevelEnum {
    Four = "4",
    Three = "3",
    Two = "2",
    One = "1"
}
export declare enum SeenFilterStatusEnums {
    seen = "seen",
    unseen = "unseen",
    show_all = "show_all"
}
export declare enum OverviewScopeEnums {
    Customer = "CUSTOMER",
    Patient = "PATIENT",
    Archived = "archived"
}
export declare enum SignedByTherapistEnum {
    canceled = "canceled",
    complete = "complete",
    postponed = "postponed",
    waiting_for_signing = "waiting_for_signing",
    sent_for_signing = "sent_for_signing",
    not_set_for_signing = "not_set_for_signing"
}
export declare enum TemplatesFilterOptionsEnum {
    archived = "archived",
    withMyRole = "withMyRole"
}
export declare enum TemplateFilterStatusTypes {
    not_received = "not_received",
    active = "active",
    completed = "completed",
    inactive = "inactive"
}
export declare const TemplateStatusIcon: {
    active: string;
    completed: string;
    not_received: string;
};
export declare enum TDelivery {
    send = "send",
    not_send = "not_send"
}
export declare const TDeliveryColor: {
    send: string;
    not_send: string;
};
export declare const TTemplateStatus: {
    not_received: TemplateFilterStatusTypes;
    inactive: TemplateFilterStatusTypes;
    InBound: QueriesStatusTypes.InBound;
    InProgress: QueriesStatusTypes.InProgress;
    AwaitingReply: QueriesStatusTypes.AwaitingReply;
    Expired: QueriesStatusTypes.Expired;
    Completed: QueriesStatusTypes.Completed;
    Processed: QueriesStatusTypes.Processed;
    Rejected: QueriesStatusTypes.Rejected;
};
export declare const TemplateStatusColor: {
    completed: string;
    not_received: string;
    active: string;
    inactive: string;
};
export type TemplateStatusTypes = typeof TTemplateStatus[keyof typeof TTemplateStatus];
export type TemplateStatusIconTypes = typeof TemplateFilterStatusTypes[keyof typeof TemplateStatusIcon];
export declare enum PortalRoutesPaths {
    Overview = "overview",
    Orders = "orders",
    TemplateQueryParam = "template"
}
export declare enum ProtectedRoutesPaths {
    login = "login",
    homeIndex = "/",
    home = "home",
    customer = "customer",
    documents = "customer/documents",
    documentsGenerate = "customer/documents/generate",
    documentsPostJournal = "customer/documents/post-journal",
    documentsDrafts = "customer/documents/drafts",
    documentsShared = "customer/documents/shared",
    documentsArchived = "customer/documents/archived",
    consents = "consents",
    shortcuts = "shortcuts",
    qnrCompleted = "completed-schemas",
    chat = "chat",
    chatParamId = "/chat?chat=",
    tasks = "tasks",
    calendar = "calendar",
    overview = "overview",
    tiltak = "information-on-tiltak",
    candidateProfile = "candidate-profile",
    jobSearch = "job-search",
    jobSeeker = "patient-profile",
    directory = "directory",
    reports = "reports",
    plans = "plans",
    research = "research",
    summary = "summary",
    inboxOutbox = "research/inbox-outbox",
    allQnrsAndFiles = "research/all-qnrs-and-files",
    manageQnrs = "research/manage-qnrs",
    manageParcels = "research/manage-parcels",
    smsPainter = "research/sms-painter",
    anonymousForms = "research/anonymous-forms",
    sendOrders = "research/send-orders",
    anonymousQnrs = "research/anonymous-qnrs",
    qnrView = "qnr-view",
    researchQnrView = "research/qnr-view",
    plansQnrView = "plans/qnr-view",
    summaryQnrView = "summary/qnr-view",
    artifactPresenter = "artifact-presenter",
    portalOverview = "portal-advoca/overview",
    portalQnrModule = "qnr-module",
    portalMicrosoftOffice = "microsoft-office/onedrive",
    portalDesigner = "designer",
    portalDashboard = "dashboard/services",
    anonymousSchema = "anonymous-schema"
}
export declare enum ExpressionOperators {
    Addition = "+",
    Subtraction = "-",
    Multiplication = "*",
    Division = "/",
    Mean = "mean(  )"
}
export declare enum ExpressionPrefix {
    'AtSign' = "@",
    'Hashtag' = "#"
}
export type IExpressionOperators = typeof ExpressionOperators[keyof typeof ExpressionOperators];
export type IExpressionPrefix = typeof ExpressionPrefix[keyof typeof ExpressionPrefix];
export declare enum Language {
    EN = "en",
    NO = "no"
}
export declare enum SearchParams {
    SelectedUserId = "selected_patient_id",
    SelectedQnrId = "selected_query_id"
}
//# sourceMappingURL=enums.d.ts.map