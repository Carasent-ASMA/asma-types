import type { ValueOf } from '../utilities/valueof.type'

export enum ArtifactPresenterTypes {
    Qnr = 'Questionnaire',
    DocumentProxy = 'DocumentProxy',
    DocumentConnector = 'DocumentConnector',
    DocumentOutlook = 'DocumentOutlook',
    ArtifactPackage = 'ArtifactPackage',
}

export enum FileExtension {
    ZIP = 'zip',
    XLSX = 'xlsx',
    XLS = 'xls',
    TXT = 'txt',
    RAR = 'rar',
    PPTX = 'pptx',
    PPT = 'ppt',
    PNG = 'png',
    WEBP = 'webp',
    PDF = 'pdf',
    SVG = 'svg',
    ODT = 'odt',
    JPG = 'jpg',
    JPEG = 'jpeg',
    GIF = 'gif',
    DOCX = 'docx',
    DOC = 'doc',
    APP = 'app',
    RTF = 'rtf',
    UNKNOWN = 'unknown',
}

export const ScheduleFormat = {
    ONE_TIME: 'one_time',
    DAILY: 'daily',
    WEEKLY: 'weekly',
} as const

export type ScheduleFormatType = ValueOf<typeof ScheduleFormat>
