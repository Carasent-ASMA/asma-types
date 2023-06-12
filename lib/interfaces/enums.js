// deprecated, replaced with QueriesInitiator
/**
 * @deprecated replaced with QueriesInitiator
 */
export var InitiatorTypes;
(function (InitiatorTypes) {
    InitiatorTypes["Customer"] = "customer";
    InitiatorTypes["Patient"] = "patient";
    InitiatorTypes["SelfCompletable"] = "self-completable";
})(InitiatorTypes || (InitiatorTypes = {}));
// deprecated, replaced with TemplatesContext
/**
 * @deprecated replaced with TemplatesContext
 */
export var QnrContextTypes;
(function (QnrContextTypes) {
    QnrContextTypes["Advoca"] = "advoca";
    QnrContextTypes["Portal"] = "portal";
    QnrContextTypes["Outlook"] = "outlook";
})(QnrContextTypes || (QnrContextTypes = {}));
export var DocSignicatSignStatusTypes;
(function (DocSignicatSignStatusTypes) {
    DocSignicatSignStatusTypes["Completed"] = "completed";
    DocSignicatSignStatusTypes["Rejected"] = "rejected";
    DocSignicatSignStatusTypes["Waiting"] = "waiting";
})(DocSignicatSignStatusTypes || (DocSignicatSignStatusTypes = {}));
export var DocProxyStatusTypes;
(function (DocProxyStatusTypes) {
    DocProxyStatusTypes["Signed"] = "signed";
    DocProxyStatusTypes["WaitingForSigning"] = "waiting_for_signing";
    DocProxyStatusTypes["OnlyForView"] = "only_for_view";
    /* download = 'download',
    uploaded = 'uploaded' */
})(DocProxyStatusTypes || (DocProxyStatusTypes = {}));
export var AsyncChatArtifactExtension;
(function (AsyncChatArtifactExtension) {
    AsyncChatArtifactExtension["DOC"] = "doc";
    AsyncChatArtifactExtension["DOCX"] = "docx";
    AsyncChatArtifactExtension["JPEG"] = "jpeg";
    AsyncChatArtifactExtension["JPG"] = "jpg";
    AsyncChatArtifactExtension["PDF"] = "pdf";
    AsyncChatArtifactExtension["PNG"] = "png";
    AsyncChatArtifactExtension["UNKNOWN"] = "unknown";
})(AsyncChatArtifactExtension || (AsyncChatArtifactExtension = {}));
export var QuestionTypes;
(function (QuestionTypes) {
    QuestionTypes["BooleanQuestion"] = "BooleanQuestion";
    QuestionTypes["CheckBoxes"] = "CheckBoxes";
    QuestionTypes["CompositeQuestion"] = "CompositeQuestion";
    QuestionTypes["DateField"] = "DateField";
    QuestionTypes["Dropdown"] = "Dropdown";
    QuestionTypes["FormatNumber"] = "FormatNumber";
    QuestionTypes["LinearScale"] = "LinearScale";
    QuestionTypes["Link"] = "Link";
    QuestionTypes["RadioButtons"] = "RadioButtons";
    QuestionTypes["TextLong"] = "TextLong";
    QuestionTypes["TextShort"] = "TextShort";
    QuestionTypes["Emoticons"] = "Emoticons";
    QuestionTypes["DocumentUpload"] = "DocumentUpload";
    QuestionTypes["Readonly"] = "Readonly";
    QuestionTypes["ExpressionQuestion"] = "ExpressionQuestion";
    QuestionTypes["Chart"] = "Chart";
    QuestionTypes["Widget"] = "Widget";
})(QuestionTypes || (QuestionTypes = {}));
export var ActorTypes;
(function (ActorTypes) {
    ActorTypes["Mappable"] = "mappable";
    ActorTypes["Custom"] = "custom";
    ActorTypes["Complex"] = "complex";
})(ActorTypes || (ActorTypes = {}));
export var ConsentsGroupTypes;
(function (ConsentsGroupTypes) {
    ConsentsGroupTypes["General"] = "GENERAL";
    ConsentsGroupTypes["Query"] = "QUERY";
    ConsentsGroupTypes["Communication"] = "COMMUNICATION";
})(ConsentsGroupTypes || (ConsentsGroupTypes = {}));
export var ConsentsTypeTypes;
(function (ConsentsTypeTypes) {
    ConsentsTypeTypes["Mandatory"] = "MANDATORY";
    ConsentsTypeTypes["Optional"] = "OPTIONAL";
})(ConsentsTypeTypes || (ConsentsTypeTypes = {}));
export var DocumentPatientSecurityLevelTypes;
(function (DocumentPatientSecurityLevelTypes) {
    DocumentPatientSecurityLevelTypes["ONE"] = "1";
    DocumentPatientSecurityLevelTypes["TWO"] = "2";
    DocumentPatientSecurityLevelTypes["THREE"] = "3";
    DocumentPatientSecurityLevelTypes["FOUR"] = "4";
})(DocumentPatientSecurityLevelTypes || (DocumentPatientSecurityLevelTypes = {}));
export var QueriesStatusTypes;
(function (QueriesStatusTypes) {
    QueriesStatusTypes["InBound"] = "INBOUND";
    QueriesStatusTypes["InProgress"] = "IN_PROGRESS";
    QueriesStatusTypes["AwaitingReply"] = "AWAITING_REPLY";
    QueriesStatusTypes["Expired"] = "EXPIRED";
    QueriesStatusTypes["Completed"] = "COMPLETED";
    QueriesStatusTypes["Processed"] = "PROCESSED";
    QueriesStatusTypes["Rejected"] = "REJECTED";
})(QueriesStatusTypes || (QueriesStatusTypes = {}));
export var QueriesInitiatorTypes;
(function (QueriesInitiatorTypes) {
    QueriesInitiatorTypes["Patient"] = "PATIENT";
    QueriesInitiatorTypes["Customer"] = "CUSTOMER";
    QueriesInitiatorTypes["SelfCompletable"] = "SELFCOMPLETABLE";
})(QueriesInitiatorTypes || (QueriesInitiatorTypes = {}));
export var SmsTemplatesCategoryTypes;
(function (SmsTemplatesCategoryTypes) {
    SmsTemplatesCategoryTypes["Info"] = "INFO";
    SmsTemplatesCategoryTypes["Reject"] = "REJECT";
    SmsTemplatesCategoryTypes["NewChat"] = "NEW_CHAT";
    SmsTemplatesCategoryTypes["UnseenNotifications"] = "UNSEEN_NOTIFICATIONS";
})(SmsTemplatesCategoryTypes || (SmsTemplatesCategoryTypes = {}));
export var TemplatesContextTypes;
(function (TemplatesContextTypes) {
    TemplatesContextTypes["Advoca"] = "ADVOCA";
    TemplatesContextTypes["Portal"] = "PORTAL";
    TemplatesContextTypes["Outlook"] = "OUTLOOK";
    TemplatesContextTypes["Start"] = "START";
    TemplatesContextTypes["Research"] = "RESEARCH";
    TemplatesContextTypes["Plan"] = "PLAN";
    TemplatesContextTypes["Summary"] = "SUMMARY";
})(TemplatesContextTypes || (TemplatesContextTypes = {}));
export var TemplatesAccessibleTypes;
(function (TemplatesAccessibleTypes) {
    TemplatesAccessibleTypes["Patient"] = "PATIENT";
    TemplatesAccessibleTypes["Customer"] = "CUSTOMER";
})(TemplatesAccessibleTypes || (TemplatesAccessibleTypes = {}));
/* export enum InitiatorTypes {
    Customer = 'customer',
    Patient = 'patient',
    SelfCompletable = 'self-completable',
} */
export var DocumentTypes;
(function (DocumentTypes) {
    DocumentTypes["individual"] = "individual";
    DocumentTypes["group"] = "group";
})(DocumentTypes || (DocumentTypes = {}));
/* export enum EprTypes {
    ADOPUS = 'ADOPUS',
} */
export var QuestionStateTypes;
(function (QuestionStateTypes) {
    QuestionStateTypes["ForAllTemplates"] = "ForAllTemplates";
})(QuestionStateTypes || (QuestionStateTypes = {}));
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
export var DROPDOWN;
(function (DROPDOWN) {
    DROPDOWN["Ordinary"] = "ORDINARY";
    DROPDOWN["PostCodeWithCity"] = "REGION_POST_CODE";
    DROPDOWN["Country"] = "COUNTRY";
})(DROPDOWN || (DROPDOWN = {}));
export var NumberTypes;
(function (NumberTypes) {
    NumberTypes["PersonalNumber"] = "PERSONAL_NUMBER";
    NumberTypes["NorwegianPhoneNr"] = "NORWEGIAN_PHONE_NR";
    NumberTypes["Customizable"] = "CUSTOMIZABLE";
    NumberTypes["CurrencyNok"] = "CURRENCY_NOK";
    NumberTypes["Ordinary"] = "ORDINARY";
    NumberTypes["Years"] = "YEARS";
})(NumberTypes || (NumberTypes = {}));
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
};
export var DocPickerTypes;
(function (DocPickerTypes) {
    DocPickerTypes["dokkladd"] = "Dokkladd";
    DocPickerTypes["postJournal"] = "PostJournal";
})(DocPickerTypes || (DocPickerTypes = {}));
export var UploadSource;
(function (UploadSource) {
    UploadSource["Local"] = "local";
    UploadSource["Adopus"] = "adopus";
    UploadSource["Dokkladd"] = "dokkladd";
    UploadSource["Outlook"] = "outlook";
})(UploadSource || (UploadSource = {}));
export var SourceDocType;
(function (SourceDocType) {
    SourceDocType["Adopus"] = "adopus_doc_id";
    SourceDocType["Dokkladd"] = "dokkladd_doc_id";
})(SourceDocType || (SourceDocType = {}));
export var MenuContextTypes;
(function (MenuContextTypes) {
    MenuContextTypes["Chat"] = "chat";
    MenuContextTypes["Portal"] = "portal";
})(MenuContextTypes || (MenuContextTypes = {}));
export var UsersMenuContext;
(function (UsersMenuContext) {
    UsersMenuContext["Patients"] = "patients";
    UsersMenuContext["Therapist"] = "therapist";
    UsersMenuContext["Actor_Involved"] = "actor_involved";
})(UsersMenuContext || (UsersMenuContext = {}));
export var FileTypeEnum;
(function (FileTypeEnum) {
    FileTypeEnum["Doc"] = "doc";
    FileTypeEnum["Qnr"] = "questionnaire";
})(FileTypeEnum || (FileTypeEnum = {}));
export var SecurityLevelEnum;
(function (SecurityLevelEnum) {
    SecurityLevelEnum["Four"] = "4";
    SecurityLevelEnum["Three"] = "3";
    SecurityLevelEnum["Two"] = "2";
    SecurityLevelEnum["One"] = "1";
})(SecurityLevelEnum || (SecurityLevelEnum = {}));
export var SeenFilterStatusEnums;
(function (SeenFilterStatusEnums) {
    SeenFilterStatusEnums["seen"] = "seen";
    SeenFilterStatusEnums["unseen"] = "unseen";
    SeenFilterStatusEnums["show_all"] = "show_all";
})(SeenFilterStatusEnums || (SeenFilterStatusEnums = {}));
export var OverviewScopeEnums;
(function (OverviewScopeEnums) {
    OverviewScopeEnums["Customer"] = "CUSTOMER";
    OverviewScopeEnums["Patient"] = "PATIENT";
    OverviewScopeEnums["Archived"] = "archived";
})(OverviewScopeEnums || (OverviewScopeEnums = {}));
/* export enum DocStatusEnums {
    signed = 'signed',
    waiting_for_signing = 'waiting_for_signing',
    only_for_view = 'only_for_view',
    /* download = 'download',
    uploaded = 'uploaded'
} */
export var SignedByTherapistEnum;
(function (SignedByTherapistEnum) {
    SignedByTherapistEnum["canceled"] = "canceled";
    SignedByTherapistEnum["complete"] = "complete";
    SignedByTherapistEnum["postponed"] = "postponed";
    SignedByTherapistEnum["waiting_for_signing"] = "waiting_for_signing";
    SignedByTherapistEnum["sent_for_signing"] = "sent_for_signing";
    SignedByTherapistEnum["not_set_for_signing"] = "not_set_for_signing";
})(SignedByTherapistEnum || (SignedByTherapistEnum = {}));
export var TemplatesFilterOptionsEnum;
(function (TemplatesFilterOptionsEnum) {
    TemplatesFilterOptionsEnum["archived"] = "archived";
    TemplatesFilterOptionsEnum["withMyRole"] = "withMyRole";
})(TemplatesFilterOptionsEnum || (TemplatesFilterOptionsEnum = {}));
export var TemplateFilterStatusTypes;
(function (TemplateFilterStatusTypes) {
    TemplateFilterStatusTypes["not_received"] = "not_received";
    TemplateFilterStatusTypes["active"] = "active";
    TemplateFilterStatusTypes["completed"] = "completed";
    TemplateFilterStatusTypes["inactive"] = "inactive";
})(TemplateFilterStatusTypes || (TemplateFilterStatusTypes = {}));
export const TemplateStatusIcon = {
    [TemplateFilterStatusTypes.active]: 'fa-question-circle',
    [TemplateFilterStatusTypes.completed]: 'fa-list-alt',
    [TemplateFilterStatusTypes.not_received]: 'fa-times-circle',
};
export var TDelivery;
(function (TDelivery) {
    TDelivery["send"] = "send";
    TDelivery["not_send"] = "not_send";
})(TDelivery || (TDelivery = {}));
export const TDeliveryColor = {
    [TDelivery.send]: 'purple',
    [TDelivery.not_send]: 'red',
};
export const TTemplateStatus = {
    ...QueriesStatusTypes,
    [TemplateFilterStatusTypes.not_received]: TemplateFilterStatusTypes.not_received,
    [TemplateFilterStatusTypes.inactive]: TemplateFilterStatusTypes.inactive,
};
export const TemplateStatusColor = {
    [TemplateFilterStatusTypes.completed]: 'blue',
    [TemplateFilterStatusTypes.not_received]: 'gray',
    [TemplateFilterStatusTypes.active]: 'green',
    [TemplateFilterStatusTypes.inactive]: 'red',
};
export var PortalRoutesPaths;
(function (PortalRoutesPaths) {
    PortalRoutesPaths["Overview"] = "overview";
    PortalRoutesPaths["Orders"] = "orders";
    PortalRoutesPaths["TemplateQueryParam"] = "template";
})(PortalRoutesPaths || (PortalRoutesPaths = {}));
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
    shortcuts: 'shortcuts',
    qnrCompleted: 'completed-schemas',
    chat: 'chat',
    chatParamId: '/chat?chat=',
    tasks: 'tasks',
    calendar: 'calendar',
    overview: 'overview',
    tiltak: 'information-on-tiltak',
    candidateProfile: 'candidate-profile',
    jobSearch: 'job-search',
    jobSeeker: 'patient-profile',
    directory: 'directory',
    reports: 'reports',
    myParticipants: "my-participants",
    smsPainter: "sms-painter",
    //
    plans: 'plans',
    qnrModule: 'qnr-module',
    allQnrs: 'all-qnrs',
    qnrTemplates: 'qnr-templates',
    qnrTemplatesList: 'qnr-templates-list',
    summary: 'summary',
    //
    inboxOutbox: 'qnrs/inbox-outbox',
    allQnrsAndFiles: 'qnrs/all-qnrs-and-files',
    manageQnrs: 'qnrs/manage-qnrs',
    manageParcels: 'qnrs/manage-parcels',
    smsTemplates: 'qnrs/sms-templates',
    anonymousForms: 'qnrs/anonymous-forms',
    sendOrders: 'qnrs/send-orders',
    anonymousQnrs: 'qnrs/anonymous-qnrs',
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
};
export var ExpressionOperators;
(function (ExpressionOperators) {
    ExpressionOperators["Addition"] = "+";
    ExpressionOperators["Subtraction"] = "-";
    ExpressionOperators["Multiplication"] = "*";
    ExpressionOperators["Division"] = "/";
    ExpressionOperators["Mean"] = "mean(  )";
})(ExpressionOperators || (ExpressionOperators = {}));
export var ExpressionPrefix;
(function (ExpressionPrefix) {
    ExpressionPrefix["AtSign"] = "@";
    ExpressionPrefix["Hashtag"] = "#";
})(ExpressionPrefix || (ExpressionPrefix = {}));
export const Language = {
    EN: 'en',
    NO: 'no',
};
export const SearchParams = {
    SelectedUserId: 'selected_patient_id',
    SelectedQnrId: 'selected_query_id',
    UserContext: 'user_context',
};
export const SearchParamWithValues = {
    'selected_patient_id': '',
    'selected_query_id': '',
    'user_context': '',
};
export const UserContext = {
    ME: 'ME',
    RECIPIENT: 'RECIPIENT',
};
//# sourceMappingURL=enums.js.map