// deprecated, replaced with QueriesInitiator
/**
 * @deprecated replaced with QueriesInitiator
 */
export enum InitiatorTypes {
    Customer = 'customer',
    Patient = 'patient',
    SelfCompletable = 'self-completable',
}
// deprecated, replaced with TemplatesContext
/**
 * @deprecated replaced with TemplatesContext
 */
export enum QnrContextTypes {
    Advoca = 'advoca',
    Portal = 'portal',
    Outlook = 'outlook',
}
export enum DocSignicatSignStatusTypes {
    Complteted = 'completed',
    Rejected = 'rejected',
    Waiting = 'waiting',
}

export enum DocProxyStatusTypes {
    Signed = 'signed',
    WaitingForSigning = 'waiting_for_signing',
    OnlyForView = 'only_for_view',
    /* download = 'download',
    uploaded = 'uploaded' */
}

export enum AsyncChatArtifactExtension {
    DOC = 'doc',
    DOCX = 'docx',
    JPEG = 'jpeg',
    JPG = 'jpg',
    PDF = 'pdf',
    PNG = 'png',
    UNKNOWN = 'unknown',
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
    Readonly = 'Readonly',
    ExpressionQuestion = 'ExpressionQuestion',
    Chart = 'Chart',
    Widget = 'Widget',
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
    NewChat = 'NEW_CHAT',
    UnseenNotifications = 'UNSEEN_NOTIFICATIONS',
}

export enum TemplatesContextTypes {
    Advoca = 'ADVOCA',
    Portal = 'PORTAL',
    Outlook = 'OUTLOOK',
    Start = 'START',
    Research = 'RESEARCH',
    Plan = 'PLAN',
    Summary = 'SUMMARY',
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

export enum FileTypeEnum {
    Doc = 'doc',
    Qnr = 'questionnaire',
}

export enum SecurityLevelEnum {
    Four = '4',
    Three = '3',
    Two = '2',
    One = '1',
}

export enum SeenFilterStatusEnums {
    seen = 'seen',
    unseen = 'unseen',
    show_all = 'show_all',
}

export enum OverviewScopeEnums {
    Customer = 'CUSTOMER',
    Patient = 'PATIENT',
    Archived = 'archived',
}

/* export enum DocStatusEnums {
    signed = 'signed',
    waiting_for_signing = 'waiting_for_signing',
    only_for_view = 'only_for_view',
    /* download = 'download',
    uploaded = 'uploaded'
} */

export enum SignedByTherapistEnum {
    canceled = 'canceled',
    complete = 'complete',
    postponed = 'postponed',
    waiting_for_signing = 'waiting_for_signing',
    sent_for_signing = 'sent_for_signing',
    not_set_for_signing = 'not_set_for_signing',
}

export enum TemplatesFilterOptionsEnum {
    archived = 'archived',
    withMyRole = 'withMyRole',
}

export enum TemplateFilterStatusTypes {
    not_received = 'not_received',
    active = 'active',
    completed = 'completed',
    inactive = 'inactive',
}

export const TemplateStatusIcon = {
    [TemplateFilterStatusTypes.active]: 'fa-question-circle',
    [TemplateFilterStatusTypes.completed]: 'fa-list-alt',
    [TemplateFilterStatusTypes.not_received]: 'fa-times-circle',
}

export enum TDelivery {
    send = 'send',
    not_send = 'not_send',
}

export const TDeliveryColor = {
    [TDelivery.send]: 'purple',
    [TDelivery.not_send]: 'red',
}

export const TTemplateStatus = {
    ...QueriesStatusTypes,
    [TemplateFilterStatusTypes.not_received]: TemplateFilterStatusTypes.not_received,
    [TemplateFilterStatusTypes.inactive]: TemplateFilterStatusTypes.inactive,
}
export const TemplateStatusColor = {
    [TemplateFilterStatusTypes.completed]: 'blue',
    [TemplateFilterStatusTypes.not_received]: 'gray',
    [TemplateFilterStatusTypes.active]: 'green',
    [TemplateFilterStatusTypes.inactive]: 'red',
}

export type TemplateStatusTypes = typeof TTemplateStatus[keyof typeof TTemplateStatus]

export type TemplateStatusIconTypes = typeof TemplateFilterStatusTypes[keyof typeof TemplateStatusIcon]

export enum PortalRoutesPaths {
    Overview = 'overview',
    Orders = 'orders',
    TemplateQueryParam = 'template',
}

export enum ProtectedRoutesPaths {
    login = 'login',
    homeIndex = '/',
    home = 'home',
    customer = 'customer',
    documents = 'customer/documents',
    consents = 'consents',
    shortcuts = 'shortcuts',
    qnrCompleted = 'completed-schemas',
    chat = 'chat',
    chatParamId = '/chat?chat=',
    tasks = 'tasks',
    calendar = 'calendar',
    overview = 'overview',
    tiltak = 'information-on-tiltak',
    candidatProfile = 'candidat-profile',
    jobsearch = 'job-search',
    jobseeker = 'patient-profile',
    directory = 'directory',
    reports = 'reports',
    //
    plans = 'plans',
    research = 'research',
    summary = 'summary',
    //
    inboxOutbox = 'research/inbox-outbox',
    allFormsAndFiles = 'research/all-forms-and-files',
    manageForms = 'research/manage-forms',
    manageParcels = 'research/manage-parcels',
    smsPainter = 'research/sms-painter',
    anonymousForms = 'research/anonymous-forms',
    //
    qnrview = 'qnr-view',
    researchQnrView = 'research/qnr-view',
    plansQnrView = 'plans/qnr-view',
    summaryQnrView = 'summary/qnr-view',
    //
    artifactPresenter = 'artifact-presenter',
    //portal routes
    portalOverview = 'portal-advoca/overview',
    portalQnrModule = 'qnr-module',
    portalMicrosoftOffice = 'microsoft-office/onedrive',
    portalDesigner = 'designer',
    portalDashboard = 'dashboard/services',
    //
    anonymousSchema = 'anonymous-schema',
}

export enum ExpressionOperators {
    Addition = '+',
    Subtraction = '-',
    Multiplication = '*',
    Division = '/',
    Mean = 'mean(  )',
}

export enum ExpressionPrefix {
    'AtSign' = '@',
    'Hashtag' = '#',
}

export type IExpressionOperators = typeof ExpressionOperators[keyof typeof ExpressionOperators]
export type IExpressionPrefix = typeof ExpressionPrefix[keyof typeof ExpressionPrefix]

export enum Language {
    EN = 'en',
    NO = 'no',
}

export enum SearchParams {
    SelectedUserId = 'selected_patient_id',
    SelectedQnrId = 'selected_query_id',
}
