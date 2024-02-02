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
    Widget = "Widget",
    Space = "Space"
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
    CurrencyNok = "CURRENCY_NOK",
    Ordinary = "ORDINARY",
    Years = "YEARS"
}
export declare const DocStatus: {
    readonly Signed: "signed";
    readonly WaitingForSigning: "waiting_for_signing";
    readonly OnlyForView: "only_for_view";
    readonly Rejected: "rejected";
};
export type DocStatusTypes = (typeof DocStatus)[keyof typeof DocStatus];
export declare enum DocPickerTypes {
    dokkladd = "Dokkladd",
    postJournal = "PostJournal"
}
export declare enum UploadSource {
    Local = "local",
    Adopus = "adopus",
    Dokkladd = "dokkladd",
    Outlook = "outlook"
}
export declare enum SourceDocType {
    Adopus = "adopus_doc_id",
    Dokkladd = "dokkladd_doc_id"
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
export type TemplateStatusTypes = (typeof TTemplateStatus)[keyof typeof TTemplateStatus];
export type TemplateStatusIconTypes = (typeof TemplateFilterStatusTypes)[keyof typeof TemplateStatusIcon];
export declare enum PortalRoutesPaths {
    Overview = "overview",
    Orders = "orders",
    TemplateQueryParam = "template"
}
export declare const ProtectedRoutesPaths: {
    readonly login: "login";
    readonly homeIndex: "/";
    readonly home: "home";
    readonly customer: "customer";
    readonly documents: "customer/documents";
    readonly documentsGenerate: "customer/documents/generate";
    readonly documentsPostJournal: "customer/documents/post-journal";
    readonly documentsDrafts: "customer/documents/drafts";
    readonly documentsShared: "customer/documents/shared";
    readonly documentsArchived: "customer/documents/archived";
    readonly consents: "consents";
    readonly consentsEditor: "consents-editor";
    readonly pendingConsents: "pending-consents";
    readonly shortcuts: "shortcuts";
    readonly shortcutsSettings: "shortcuts-settings";
    readonly selectVersions: "select-versions";
    readonly qnrCompleted: "completed-schemas";
    readonly chat: "chat";
    readonly chatParamId: "/chat?chat=";
    readonly contextMeChat: "context-me-chat";
    readonly tasks: "tasks";
    readonly calendar: "calendar";
    readonly overview: "overview";
    readonly tiltak: "information-on-tiltak";
    readonly candidateProfile: "candidate-profile";
    readonly jobSearch: "job-search";
    readonly jobSeeker: "patient-profile";
    readonly directory: "directory";
    readonly reports: "reports";
    readonly myParticipants: "my-participants";
    readonly smsPainter: "sms-painter";
    readonly plans: "plans";
    readonly qnrModule: "qnr-module";
    readonly allQnrs: "all-qnrs";
    readonly qnrTemplates: "qnr-templates";
    readonly qnrTemplatesList: "qnr-templates-list";
    readonly summary: "summary";
    readonly inboxOutbox: "qnrs/inbox-outbox";
    readonly allQnrsAndFiles: "qnrs/all-qnrs-and-files";
    readonly manageQnrs: "qnrs/manage-qnrs";
    readonly manageParcels: "qnrs/manage-parcels";
    readonly smsTemplates: "qnrs/sms-templates";
    readonly anonymousForms: "qnrs/anonymous-forms";
    readonly sendOrders: "qnrs/send-orders";
    readonly anonymousQnrs: "qnrs/anonymous-qnrs";
    readonly qnrView: "qnr-view";
    readonly qnrModuleQnrView: "qnr-module/qnr-view";
    readonly plansQnrView: "plans/qnr-view";
    readonly summaryQnrView: "summary/qnr-view";
    readonly artifactPresenter: "artifact-presenter";
    readonly portalOverview: "portal-advoca/overview";
    readonly portalQnrModule: "qnr-module";
    readonly portalMicrosoftOffice: "microsoft-office/onedrive";
    readonly portalDesigner: "designer";
    readonly portalDashboard: "dashboard/services";
    readonly anonymousSchema: "anonymous-schema";
    readonly devextreme: "devextreme";
    readonly devextremeRichEdit: "devextreme/rich-edit";
    readonly devextremeReports: "devextreme/reports";
    readonly privacyStatement: "privacy-statement";
};
export type IProtectedRoutesPaths = (typeof ProtectedRoutesPaths)[keyof typeof ProtectedRoutesPaths];
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
export type IExpressionOperators = (typeof ExpressionOperators)[keyof typeof ExpressionOperators];
export type IExpressionPrefix = (typeof ExpressionPrefix)[keyof typeof ExpressionPrefix];
export declare const Language: {
    readonly EN: "en";
    readonly NO: "no";
};
export type ILanguage = (typeof Language)[keyof typeof Language];
export declare const SearchParams: {
    readonly Action: "action";
    readonly ActivityId: "activity_id";
    readonly Hide: "hide";
    readonly QnrVersion: "qnr_version";
    readonly SelectedArtifact: "selected_artifact";
    readonly SelectedPatientId: "selected_patient_id";
    readonly SelectedQnrId: "selected_qnr_id";
    readonly SelectedGroupId: "selected_group_id";
    readonly UserContext: "user_context";
    readonly QnrContext: "qnr_context";
    readonly Device: "device";
    readonly ShowHighlightedQnr: "show_highlighted_qnr";
};
export type ISearchParams = (typeof SearchParams)[keyof typeof SearchParams];
export declare const SearchParamWithValues: {
    readonly action: string;
    readonly activity_id: string;
    readonly hide: string[];
    readonly qnr_version: string;
    readonly selected_artifact: `id:${string}.type:doc.patient_id:${string}` | `id:${string}.type:doc_connector.patient_id:${string}` | `id:${string}.type:qnr.patient_id:${string}`;
    readonly selected_patient_id: string;
    readonly selected_group_id: string;
    readonly selected_qnr_id: string;
    readonly user_context: IUserContext;
    readonly device: string;
};
export type ISearchParamWithValues = (typeof SearchParamWithValues)[keyof typeof SearchParamWithValues];
export declare const UserContext: {
    readonly ME: "ME";
    readonly RECIPIENT: "RECIPIENT";
};
export declare const Device: {
    TRUSTED: string;
    UNTRUSTED: string;
};
export type IDevice = (typeof Device)[keyof typeof Device];
export type IUserContext = (typeof UserContext)[keyof typeof UserContext];
//# sourceMappingURL=enums.d.ts.map