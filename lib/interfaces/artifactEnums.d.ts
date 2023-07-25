import type { ValueOf } from '../utilities/valueof.type';
export declare enum ArtifactPresenterTypes {
    Qnr = "Questionnaire",
    DocumentProxy = "DocumentProxy",
    DocumentConnector = "DocumentConnector",
    DocumentOutlook = "DocumentOutlook",
    ArtifactPackage = "ArtifactPackage"
}
export declare enum FileExtension {
    ZIP = "zip",
    XLSX = "xlsx",
    XLS = "xls",
    TXT = "txt",
    RAR = "rar",
    PPTX = "pptx",
    PPT = "ppt",
    PNG = "png",
    WEBP = "webp",
    PDF = "pdf",
    SVG = "svg",
    ODT = "odt",
    JPG = "jpg",
    JPEG = "jpeg",
    GIF = "gif",
    DOCX = "docx",
    DOC = "doc",
    APP = "app",
    RTF = "rtf",
    UNKNOWN = "unknown"
}
export declare const ScheduleFormat: {
    readonly ONE_TIME: "one_time";
    readonly DAILY: "daily";
    readonly WEEKLY: "weekly";
    readonly MONTHLY: "monthly";
};
export type ScheduleFormatType = ValueOf<typeof ScheduleFormat>;
export declare const ArtifactPackageStatus: {
    readonly ACTIVE: "active";
    readonly CANCELED: "canceled";
    readonly FINISHED: "finished";
};
export type IArtifactPackageStatus = ValueOf<typeof ArtifactPackageStatus>;
//# sourceMappingURL=artifactEnums.d.ts.map