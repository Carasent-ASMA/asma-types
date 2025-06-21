import type { ValueOf } from '../utilities/valueof.type.js'

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
    HTML = 'html',
    UNKNOWN = 'unknown',
}

export const ScheduleFormat = {
    ONE_TIME: 'one_time',
    DAILY: 'daily',
    WEEKLY: 'weekly',
    MONTHLY: 'monthly',
} as const

export type ScheduleFormatType = ValueOf<typeof ScheduleFormat>

export const ArtifactPackageStatus = {
    ACTIVE: 'active',
    CANCELED: 'canceled',
    FINISHED: 'finished',
} as const

export type IArtifactPackageStatus = ValueOf<typeof ArtifactPackageStatus>

export type SelectedArtifact = `id:${string}.type:${'doc' | 'doc_connector' | 'qnr'}.patient_id:${string}`

export enum AnonymousQnrInvitationTypes {
    CODE = '#CODE#',
    URL = '#URL#',
    NAME = '#NAME#',
    ACTIVITY_ID = '#ACTIVITY_ID#',
}
