// deprecated, replaced with QueriesInitiator

import type { SelectedArtifact } from './artifactEnums'

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
    Completed = 'completed',
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
    WEBP = 'webp',
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
    Space = 'Space',
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
    PostCodeWithCity = 'REGION_POST_CODE',
    Country = 'COUNTRY',
}

export enum NumberTypes {
    PersonalNumber = 'PERSONAL_NUMBER',
    NorwegianPhoneNr = 'NORWEGIAN_PHONE_NR',
    Customizable = 'CUSTOMIZABLE',
    CurrencyNok = 'CURRENCY_NOK',
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
    Communication = 'COMMUNICATION',
} */

export const DocStatus = {
    Signed: 'signed',
    WaitingForSigning: 'waiting_for_signing',
    OnlyForView: 'only_for_view',
    Rejected: 'rejected',
    /* download = 'download',
    uploaded = 'uploaded' */
} as const

export type DocStatusTypes = (typeof DocStatus)[keyof typeof DocStatus]

export enum DocPickerTypes {
    dokkladd = 'Dokkladd',
    postJournal = 'PostJournal',
}

export enum UploadSource {
    Local = 'local',
    Adopus = 'adopus',
    Dokkladd = 'dokkladd',
    Outlook = 'outlook',
}

export enum SourceDocType {
    Adopus = 'adopus_doc_id',
    Dokkladd = 'dokkladd_doc_id',
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

export type TemplateStatusTypes = (typeof TTemplateStatus)[keyof typeof TTemplateStatus]

export type TemplateStatusIconTypes = (typeof TemplateFilterStatusTypes)[keyof typeof TemplateStatusIcon]

export enum PortalRoutesPaths {
    Overview = 'overview',
    Orders = 'orders',
    TemplateQueryParam = 'template',
}

export const ProtectedRoutesPaths = {
    login: 'login',
    homeIndex: '/',
    home: 'home',
    customer: 'customer',
    documents: 'customer/documents',
    documentsGenerate: 'customer/documents/generate',
    documentsPostJournal: 'customer/documents/post-journal',
    documentsDrafts: 'customer/documents/drafts',
    documentsShared: 'customer/documents/shared',
    documentsArchived: 'customer/documents/archived',
    consents: 'consents',
    consentsEditor: 'consents-editor',
    pendingConsents: 'pending-consents',
    shortcuts: 'shortcuts',
    shortcutsSettings: 'shortcuts-settings',
    selectVersions: 'select-versions',
    selectFeatures: 'select-features',
    qnrCompleted: 'completed-schemas',
    chat: 'chat',
    chatParamId: '/chat?chat=',
    contextMeChat: 'context-me-chat',
    tasks: 'tasks',
    calendar: 'calendar',
    overview: 'overview',
    tiltak: 'information-on-tiltak',
    candidateProfile: 'candidate-profile',
    jobSearch: 'job-search',
    jobSeeker: 'patient-profile',
    directory: 'directory',
    myParticipants: 'my-participants',
    smsPainter: 'sms-painter',
    adjustTemplates: 'adjust-templates',
    //
    plans: 'plans',
    qnrModule: 'qnr-module',
    allQnrs: 'all-qnrs',
    summary: 'summary',
    inboxOutbox: 'qnrs/inbox-outbox',
    inbox: 'qnrs/inbox',
    outbox: 'qnrs/outbox',
    //
    qnrTemplates: 'all-qnrs/qnr-templates',
    qnrTemplatesList: 'all-qnrs/qnr-templates-list',
    allQnrsAndFiles: 'all-qnrs/all-qnrs-and-files',
    manageQnrs: 'all-qnrs/manage-qnrs',
    manageParcels: 'all-qnrs/manage-parcels',
    smsTemplates: 'all-qnrs/sms-templates',
    anonymousForms: 'all-qnrs/anonymous-forms',
    sendOrders: 'all-qnrs/send-orders',
    anonymousQnrs: 'all-qnrs/anonymous-qnrs',
    //
    qnrView: 'qnr-view',
    qnrModuleQnrView: 'qnr-module/qnr-view',
    plansQnrView: 'plans/qnr-view',
    summaryQnrView: 'summary/qnr-view',
    //
    artifactPresenter: 'artifact-presenter',
    //portal routes
    portalOverview: 'portal-advoca/overview',
    portalQnrModule: 'qnr-module',
    portalMicrosoftOffice: 'microsoft-office/onedrive',
    portalDesigner: 'designer',
    portalDashboard: 'dashboard/services',
    //
    anonymousSchema: 'anonymous-schema',

    //devextreme
    devextreme: 'devextreme',
    devextremeRichEdit: 'devextreme/rich-edit',
    devextremeReports: 'devextreme/reports',
    privacyStatement: 'privacy-statement',
    meetingSessionRoom: 'meeting-session/:roomSession',

    //administration
    settingsAdministration: 'settings/administration',
    settingsAdministrationOrganizationsNew: 'settings/administration/organizations/new',
    settingsAdministrationOrganizationsEdit: 'settings/administration/organizations/edit',

    //reports
    timeTrackingList: 'reports/time-tracking-list',
    reports: 'reports/reports',
} as const

export type IProtectedRoutesPaths = (typeof ProtectedRoutesPaths)[keyof typeof ProtectedRoutesPaths]

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

export type IExpressionOperators = (typeof ExpressionOperators)[keyof typeof ExpressionOperators]
export type IExpressionPrefix = (typeof ExpressionPrefix)[keyof typeof ExpressionPrefix]

export const Language = {
    EN: 'en',
    NO: 'no',
} as const
export type ILanguage = (typeof Language)[keyof typeof Language]

export const SearchParams = {
    Action: 'action',
    ActivityId: 'activity_id',
    Hide: 'hide',
    QnrVersion: 'qnr_version',
    SelectedArtifact: 'selected_artifact',
    SelectedPatientId: 'selected_patient_id',
    SelectedQnrId: 'selected_qnr_id',
    SelectedGroupId: 'selected_group_id',
    UserContext: 'user_context',
    QnrContext: 'qnr_context',
    Device: 'device',
    ShowHighlightedQnr: 'show_highlighted_qnr',
    GroupId: 'group_id',
    Status: 'status',
    DocId: 'doc_id',
    RequestId: 'requestId',
    TaskId: 'taskId',
    Subdomain: 'subdomain',
} as const
export type ISearchParams = (typeof SearchParams)[keyof typeof SearchParams]

export const SearchParamWithValues = {
    action: '' as string,
    activity_id: '' as string,
    hide: [] as string[],
    qnr_version: '' as string,
    selected_artifact: '' as SelectedArtifact,
    selected_patient_id: '' as string,
    selected_group_id: '' as string,
    selected_qnr_id: '' as string,
    user_context: '' as IUserContext,
    qnr_context: '' as string,
    device: '' as IDevice,
    show_highlighted_qnr: '' as string,
    group_id: '' as string,
} as const

export type ISearchParamWithValues = (typeof SearchParamWithValues)[keyof typeof SearchParamWithValues]

export const UserContext = {
    ME: 'ME',
    RECIPIENT: 'RECIPIENT',
} as const

export const Device = {
    TRUSTED: 'TRUSTED',
    UNTRUSTED: 'UNTRUSTED',
}

export type IDevice = (typeof Device)[keyof typeof Device]

export type IUserContext = (typeof UserContext)[keyof typeof UserContext]
