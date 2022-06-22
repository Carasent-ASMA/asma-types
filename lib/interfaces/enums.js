// deprecated, replaced with QueriesInitiator
export var InitiatorTypes;
(function (InitiatorTypes) {
    InitiatorTypes["Customer"] = "customer";
    InitiatorTypes["Patient"] = "patient";
    InitiatorTypes["SelfCompletable"] = "self-completable";
})(InitiatorTypes || (InitiatorTypes = {}));
// deprecated, replaced with TemplatesContext
export var QnrContextTypes;
(function (QnrContextTypes) {
    QnrContextTypes["Advoca"] = "advoca";
    QnrContextTypes["Portal"] = "portal";
    QnrContextTypes["Outlook"] = "outlook";
})(QnrContextTypes || (QnrContextTypes = {}));
export var DocSignicatSignStatusTypes;
(function (DocSignicatSignStatusTypes) {
    DocSignicatSignStatusTypes["Complteted"] = "completed";
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
})(SmsTemplatesCategoryTypes || (SmsTemplatesCategoryTypes = {}));
export var TemplatesContextTypes;
(function (TemplatesContextTypes) {
    TemplatesContextTypes["Advoca"] = "ADVOCA";
    TemplatesContextTypes["Portal"] = "PORTAL";
    TemplatesContextTypes["Outlook"] = "OUTLOOK";
})(TemplatesContextTypes || (TemplatesContextTypes = {}));
export var TemplatesAccessibleTypes;
(function (TemplatesAccessibleTypes) {
    TemplatesAccessibleTypes["Patient"] = "PATIENT";
    TemplatesAccessibleTypes["Customer"] = "CUSTOMER";
})(TemplatesAccessibleTypes || (TemplatesAccessibleTypes = {}));
//# sourceMappingURL=enums.js.map