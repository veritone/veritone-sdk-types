declare module 'veritone-types' {
  /** A custom scalar type representing a date/time value in RFC3339 format */
  export type DateTime = string;

  /** A custom scalar type representing a time-only value in RFC3339 format */
  export type Time = string;

  /** A custom scalar type representing a blob of valid JSON.When sending a `JSONData` parameter as input, you can format itusing normal GraphQL syntax. The data you send will not be validated.For example, say you have the following schema:```input ThingInput {JSONData json}mutation {createThing(thingInput: ThingInput): Thing}```Then you can send data like so:```mutation {createThing(thingInput: {json: {foo: "bar"}}) {id}}``` */
  export type JsonData = object;

  /** A custom scalar type representing a file upload in the asset input types */
  export type UploadedFile = Blob;
  /** Common fields used by queries and fields that support paging to representa single page of results. */
  export interface Page {
    offset: number /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number /** Maximum number of results that were retrieved in this query; page size */;
    count?: number | null /** Number of records returned in this response */;
  }

  export interface Metadata {
    name: string;
  }
  /** A property is a name-value pair. This is the base interface for properties. */
  export interface Property {
    name: string;
  }

  export interface Subscription {
    id: string;
    organizationId: string;
    objectType: SubscriptionObjectType;
    frequency: SubscriptionFrequency;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    isActive: boolean;
    targetId: string /** The ID of the object on which this subscription is set,such as a watchlist ID. */;
    scheduledTime?: Time | null /** Scheduled time of day */;
    scheduledTimeZone?: string | null /** Time zone of the scheduled time */;
    scheduledDay?: DayOfWeek | null /** Scheduled day of the week */;
    jsondata?: JsonData | null;
    contact: SubscriptionContact;
    unsubscribeHash?: string | null;
  }

  export interface SubscriptionContact {
    userId: string;
    emailAddress?: string | null;
    phoneNumber?: string | null;
    webhookUri?: string | null;
  }

  export interface DatabaseQueryMonitorResult {
    database: string;
    timestamp: DateTime;
    queries: DatabaseQueryInfo[];
    summary?: JsonData | null;
  }

  export interface DatabaseQueryInfo {
    sql: string;
    userName: string;
    pid: string;
    applicationName?: string | null;
    clientIpAddress?: string | null;
    state: string;
    queryStartTime: DateTime;
    queryDurationSeconds: number;
    action: QueryAction;
  }
  /** Represents a persistence, org-less internal token provisioned for useby Veritone platform components. */
  export interface InternalToken {
    tag: string /** A short, human-readable tag for the token. It is a prefix on the token itself. */;
    label: string /** A longer label for the token */;
    rights: string[] /** All rights granted to the token */;
    requestorId?: string | null /** ID of the user who requested the token */;
    approverId?: string | null /** ID of the user who approved the token */;
    createdDateTime?: DateTime | null /** Date and time the token was originally requested */;
    approvedDateTime?: DateTime | null /** Date and time the token was approved (if any) */;
    modifiedDateTime?: DateTime | null /** Date and time the token was last modified in any way */;
    revokedDateTime?: DateTime | null /** Date and time the token was revoked (if any) */;
    id: string /** The ID -- the actual token used to authenticate. */;
    status: InternalTokenStatus /** Current status of the token. Only an `active` token canbe used to authenticate. */;
    requestId?:
      | string
      | null /** ID of the active approval request for this token, if any.will be null for an active token, but will have an IDfor a pending or updatePending token. This ID can bepassed to approveToken in place of the actual token.It is not obscured and can be retrieved by the requestorat any time by filtering on `pending` or `updatePending` state. */;
  }

  export interface InternalTokenList extends Page {
    records: InternalToken[];
    count?: number | null;
    offset: number;
    limit: number;
  }

  export interface ProcessTemplateList extends Page {
    records?: ProcessTemplate[] | null;
    offset: number;
    limit: number;
    count?: number | null;
  }

  export interface ProcessTemplate {
    id: string;
    organizationId: string;
    name: string;
    taskList: JsonData;
  }
  /** Information about a time zone */
  export interface TimeZone {
    name: string /** Time zone name, such as `America/Los_Angeles` */;
    abbreviations: TimeZoneAbbreviation[] /** Known abbreviations for the time zone. These may includeoffset variations such as those caused by daylight savings time. */;
  }
  /** Information about a time zone abbreviation or variant. */
  export interface TimeZoneAbbreviation {
    name: string /** The abbreviation, such as "PST" or "UTC" */;
    offset?: string | null /** The offset from UTC in string form, such as `-08:00` for `PST`. */;
    offsetMinutes?: number | null /** The offset from UTC in minutes, such as `-480` for `PST`. */;
  }

  export interface ExportRequestList extends Page {
    records: ExportRequest[];
    offset: number;
    limit: number;
    count?: number | null;
  }

  export interface ExportRequest {
    id: string /** The unique ID of this export request */;
    status: ExportRequestStatus /** Current status of this export request */;
    organizationId: string /** ID of the organization this export request was issued for */;
    createdDateTime: DateTime /** Date/time at which this export request was created */;
    modifiedDateTime: DateTime /** Date/time at which this export request was last modified */;
    requestorId: string /** ID of the user or API key that created this export request */;
    assetUri?: string | null /** The signed URI to the object that contains, or will contain,export results. */;
  }

  export interface SavedSearchList extends Page {
    records?: SavedSearch[] | null;
    count?: number | null;
    offset: number;
    limit: number;
  }

  export interface SavedSearch {
    id: string;
    organizationId: string;
    organization?: Organization | null;
    ownerId: string;
    owner?: User | null;
    name: string;
    sharedWithOrganization?: boolean | null;
    createdDateTime: DateTime;
    modifiedDateTime: DateTime;
    csp?: JsonData | null;
  }

  export interface Organization {
    id: string /** The organization ID */;
    name?: string | null /** The organization's name */;
    type?: (string)[] | null /** A list of types applied to the organization, suchas `Broadcaster` or `Agency`. */;
    applications?: ApplicationList | null /** Applications belonging to the organization */;
    jsondata?: JsonData | null /** Freeform metadata in JSON format */;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    seatLimit?: number | null;
    status?: OrganizationStatus | null /** Organization's current status */;
    roles?: (Role)[] | null /** Roles allowed within the organization */;
    users?: UserList | null /** Users belonging to the organization */;
    blacklist?: EngineBlacklist | null /** List of engines forbidden to this organization. */;
    whitelist?: EngineWhitelist | null /** List of engines allowed for this organization.Takes precedence of the blacklist. That is, if a whitelistis defined, then only engines in the whitelist are permittedregardless of what is in the blacklist.This field is not fully implemented! */;
    schemas?: SchemaList | null /** Custom schemas defined by this organization.This field is not fully implemented! */;
    watchlists?: WatchlistList | null /** Watchlists for this organization.This field is not fully implemented! */;
    collections?: CollectionList | null /** Collections for this organization */;
    rootFolder?: Folder | null /** Folder tree for this organization */;
    businessUnit?: string | null /** Business unit */;
    dashboards?: (Dashboard)[] | null /** Dashboards */;
    imageUrl?: string | null;
    internalApplicationId?:
      | string
      | null /** An ID corresponding to the organization used internally for someprovisioning elements. `applicationId` on `TemporalDataObject`, `Job`,and some other types uses this value instead of the organization `id`. */;
    seats?: number | null /** The number of active seats */;
  }

  export interface ApplicationList extends Page {
    records?: (Application)[] | null;
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number /** Maximum number of results that were retrieved in this query; page size */;
    count?: number | null /** Number of records returned in this response */;
  }
  /** An application is a set of Veritone functionality that customers can sign up for. */
  export interface Application {
    id: string;
    key: string;
    name: string;
    category?: string | null;
    description?: string | null;
    iconUrl?: string | null;
    iconSvg?: string | null;
    url?: string | null;
    deploymentModel?: DeploymentModel | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    clientSecret?:
      | string
      | null /** OAuth2 client secret. This field is server-generated and is onlyreturned on application creation. */;
    oauth2RedirectUrls?: (string)[] | null /** OAuth2 redirect URLs */;
    organizationId: string;
    status?: ApplicationStatus | null;
    permissionsRequired?: (string)[] | null;
    contextMenuExtensions?: ContextMenuExtensionList | null;
    validStateActions?: (ApplicationStateAction)[] | null;
  }

  export interface ContextMenuExtensionList {
    mentions?: (ContextMenuExtension)[] | null;
    tdos?: (ContextMenuExtension)[] | null;
    watchlists?: (ContextMenuExtension)[] | null;
    collections?: (ContextMenuExtension)[] | null;
  }

  export interface ContextMenuExtension {
    id: string;
    label: string;
    url: string;
  }
  /** A role signifies a user's permissions within a given context. */
  export interface Role {
    description?: string | null;
    appName?: string | null;
    name: string;
    permissions?: PermissionList | null;
    id: string;
  }

  export interface PermissionList extends Page {
    records?: (Permission)[] | null;
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number /** Maximum number of results that were retrieved in this query; page size */;
    count?: number | null /** Number of records returned in this response */;
  }

  export interface Permission {
    id: string;
    name?: string | null;
    description?: string | null;
  }

  export interface UserList extends Page {
    records?: (User)[] | null;
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number /** Maximum number of results that were retrieved in this query; page size */;
    count?: number | null /** Number of records returned in this response */;
  }
  /** A user represents a user account within an organization. */
  export interface User {
    name: string /** The user's name */;
    id: string /** The user's unique ID.A user ID is a string in UUID format. */;
    permissions?: PermissionList | null /** The set of permissions granted to the user */;
    roles?: Role[] | null /** The set of roles granted to the user */;
    roleIds?: string[] | null;
    organizationId?: string | null /** ID of the organization to which the user belongs. */;
    organization?: Organization | null /** Organization to which the user belongs. */;
    jsondata?: JsonData | null /** Freeform metadata in JSON form */;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    acls?: UserAcl[] | null;
    rootFolder?: Folder | null /** Folder tree for this organization */;
    passwordUpdatedDateTime?: DateTime | null /** Date and time this user last changed their password */;
    lastLoginDateTime?: DateTime | null /** Date and time this user last logged in */;
    createdDateTime?: DateTime | null /** Date and time this user account was created */;
    modifiedDateTime?: DateTime | null /** Date and time this user account was last modified */;
    mfaInfo: MfaInfo /** Multi-factor authentication information for the user */;
    userSettings?: UserSetting[] | null /** User Settings for the user */;
    imageUrl?: string | null;
    status?: UserStatus | null /** Status of user account */;
  }

  export interface UserAcl {
    applicationId?: string | null;
    organizationId?: string | null;
    organization?: Organization | null;
    objectType?: string | null;
    objectId?: string | null;
    access?: UserAclAccessRights | null;
    userId?: string | null;
  }

  export interface UserAclAccessRights {
    owner?: boolean | null;
  }

  export interface Folder {
    id: string /** The ID of this folder */;
    treeObjectId: string;
    name?: string | null /** The name of this folder */;
    description?: string | null /** An optional description */;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    ownerId?: string | null;
    parent?: Folder | null /** The parent folder */;
    subfolders?: Folder[] | null /** The subfolders of this folder */;
    organization?: Organization | null /** The organization that owns this folder */;
    organizationId?: string | null /** The ID of the organization that owns this folder */;
    typeId?: number | null;
    rootFolderTypeId?: number | null;
    maxDepth?: number | null /** The maximum depth of child folders allowed */;
    orderIndex?: number | null;
    status?: FolderStatus | null /** The folder status */;
    folderPath?:
      | Folder[]
      | null /** The ordered path of the folder hierarchy. The first elementis always a root folder, and the last is this folder's parent. */;
    childTDOs?: TdoList | null /** TemporalDataObjects that are filed in this folder */;
    sharedAccess?: (string)[] | null /** The read/write permissions for a shared folder */;
    sharedWith?: SharedWith | null;
    contentTemplates: FolderContentTemplate[];
  }

  export interface TdoList extends Page {
    records?: (TemporalDataObject)[] | null;
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number /** Maximum number of results that were retrieved in this query; page size */;
    count?: number | null /** Number of records returned in this response */;
  }

  export interface TemporalDataObject {
    createdDateTime?: DateTime | null /** Object creation timestamp. Does not change. In seconds since epoch (TODO change!). */;
    modifiedDateTime?: DateTime | null /** Object modification timestamp. In seconds since epoch (TODO change!). */;
    id: string /** The object's unique ID */;
    createdBy?: string | null;
    modifiedBy?: string | null;
    description?: string | null;
    name?: string | null;
    mediaId?: string | null;
    thumbnailUrl?:
      | string
      | null /** An optional URL for a thumbnail or preview image forthis object. If the URL is to an object in Veritone'sobject storage, it will be signed. */;
    sourceImageUrl?:
      | string
      | null /** An optional URL for a source image for this object.If the URL is to an object in Veritone'sobject storage, it will be signed. */;
    metadata?: Metadata[] | null /** Modular metadata */;
    jsondata?: JsonData | null /** Direct access to metadata in raw JSON format */;
    details?: JsonData | null;
    assets?: AssetList | null /** Assets this object contains. Can be of any size.This field does not support paging. */;
    primaryAsset?: Asset | null /** Retrieve the primary asset of a given type */;
    security?: Security | null /** Security settings for the asset container */;
    startDateTime: DateTime /** Recording start time. In seconds since epoch. */;
    stopDateTime: DateTime /** Recording stop time. In seconds since epoch. */;
    source?: string | null;
    applicationId: string /** Application this recording belongs to */;
    status?: string | null /** status. Downloaded, recording, etc. */;
    tasks?: TaskList | null /** Tasks running against this TemporalDataObject */;
    jobs?: JobList | null /** Jobs running against this temporalDataObject */;
    folders?: Folder[] | null /** Folders that this TDO is filed in */;
    sourceData?: TdoSourceData | null;
    streams: TdoStreamData[] /** If this TDO supports streams, contains stream listings.Might be an empty list but will not be null. */;
    engineRuns?: EngineRunList | null /** Statuses of the engines run on the TDO. */;
  }

  export interface AssetList extends Page {
    records?: (Asset)[] | null;
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number;
    count?: number | null /** Number of records returned in this response */;
  }
  /** An asset represents a single unit of data, such as a file or URL,and basic metadata about that data. An asset must be contained withina TemporalDataObject. */
  export interface Asset {
    id: string /** The asset ID */;
    name?: string | null /** Asset name, such as a file name. */;
    contentType?: string | null /** Asset content type. Must be a valid MIME type string. */;
    description?: string | null /** An optional description of the asset */;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    jsondata?: JsonData | null /** Freeform metadata in JSON format. */;
    containerId: string /** The ID of the TemporalDataObject that contains this asset */;
    container?: TemporalDataObject | null /** The TemporalDataObject that contains this asset */;
    uri?:
      | string
      | null /** The asset's URI. If a file is provided on asset creation, this URIpoint to the object in Veritone's object storage. */;
    signedUri?: string | null /** A signed version of the asset's URI */;
    type: string /** The asset type, such as `media`, `transcript`, or `text`.The asset type determines which engines are able to operate on it.For example, a transcription engine requires a `media` asset.Engines that record their results in an asset typically set the typeaccordingly, such as `transcript`. */;
    assetType?: string | null /** Deprecated alias for type */;
    details?: JsonData | null /** Freeform application-defined metadata. This field may contain informationspecific to the object type, such as image or video metadata. */;
    jsonstring?: string | null /** Metadata as raw JSON string */;
    fileData?: AssetFileData | null /** A structured containing metadata about a file. This will be set if theasset was created by uploading a file. */;
    sourceData?: AssetSourceData | null /** A structure containing metadata about the source engine and task. This willbe set if the asset was created by an engine. */;
    transform?:
      | string
      | null /** Asset transform. The transformation function to be used with the asset.It can be XML to JSON */;
    isUserEdited?:
      | boolean
      | null /** A Boolean indicating whether or not this asset was created by editinganother asset. */;
  }
  /** A structured containing metadata about an asset file. */
  export interface AssetFileData {
    md5sum?: string | null /** The MD5 checksum of the file */;
    size?: number | null /** The file size in bytes */;
    originalFileUri?: string | null /** Original file URI, if provided on asset creation */;
  }
  /** A structure containing metadata about the source engine and task for an asset. */
  export interface AssetSourceData {
    name?: string | null /** The name of the asset source engine or engine category */;
    taskId?: string | null /** ID of the specific task that created the asset */;
    task?: Task | null /** The specific task that created the asset */;
    engineId?: string | null /** The ID of the engine that created the asset */;
    engine?: Engine | null /** The engine that created the asset */;
    sourceId?: string | null /** The ID of the source from which this asset was generated or stamped. */;
    schemaId?:
      | string
      | null /** ID of the schema describing this asset, if there is one.Typically applies only to assets of type "content-template". */;
    schema?: Schema | null /** The schema definition, if there is one */;
  }
  /** Represents a single engine task */
  export interface Task {
    id: string /** The task ID */;
    name?: string | null;
    description?: string | null;
    createdDateTime?: DateTime | null /** Date and time the task was created */;
    modifiedDateTime?: DateTime | null /** Date and time the task was last modified */;
    createdBy?: string | null;
    modifiedBy?: string | null;
    queuedDateTime?: DateTime | null /** Date and time the task was queued for execution. */;
    completedDateTime?: DateTime | null /** Date and time the task completed. */;
    startedDateTime?: DateTime | null /** Date and time task execution started */;
    status?: TaskStatus | null /** The task status. See TaskStatus enum for details. */;
    order?:
      | number
      | null /** Optional order in which the task should run, relative to other tasksin the job that contains it. */;
    isClone?: boolean | null /** Whether or not the task is run on the clone of a TDO */;
    applicationId?: string | null /** Application ID that owns the task */;
    targetId?: string | null /** The ID of the TemporalDataObject the taskwas created for. */;
    target?: TemporalDataObject | null /** The TemporalDataObject the task was created for. */;
    engineId?: string | null /** ID of the engine for the task. */;
    engine?: Engine | null /** The engine for the task */;
    jobId?: string | null /** The ID of the job that contains this task */;
    job?: Job | null /** The job that contains this task. */;
    buildId?: string | null /** ID of the engine build used for this task. */;
    build?: Build | null /** The engine build used for this task */;
    sourceAsset?: Asset | null /** The source asset for this task, if there is one. */;
    sourceAssetId?: string | null /** The ID of the source asset for this task, if there is one. */;
    mediaLengthSec?: number | null;
    mediaStorageBytes?: number | null;
    mediaFileName?: string | null;
    payload?: JsonData | null /** The incoming task payload, in JSON format */;
    output?: JsonData | null /** The task output, in JSON format. */;
    payloadString?: string | null /** The incoming task payload, in String format. */;
    outputString?: string | null /** The task output, in String format. */;
    log?: TaskLog | null /** The log file produced during task execution */;
    taskPayload?: JsonData | null /** For backwards compatibility only */;
    taskOutput?: JsonData | null /** For backwards compatibility only */;
    testTask?: boolean | null /** True if this task was created as a test task */;
    parentTaskId?: string | null;
    parentTask?: Task | null;
    childTaskIds?: string[] | null;
    childTasks?: Task[] | null;
    standbyTask?: Task | null /** A standby task that will execute if this one fails. */;
    standbyForTask?: Task | null /** The task that this task is a standby for. If the taskidentified in this field fails, the current task will execute. */;
    runtimePayload?: JsonData | null /** Contains metadata used by the platform run-time system to executethe task. This field is accessible only to platform components. */;
    engineConfiguration?: EngineConfiguration | null;
    engineConfigurationId?: string | null;
    executionLocation?: ExecutionLocation | null;
    executionLocationId?: string | null;
    templateId?: string | null;
    template?: TaskTemplate | null;
  }

  export interface Engine {
    id: string;
    ownerOrganizationId: string;
    isPublic?: boolean | null;
    logoPath?: string | null;
    iconPath?: string | null;
    signedIconPath?:
      | string
      | null /** The signed URL for the engine icon; will fallback to raw iconPath if unable to sign. */;
    signedLogoPath?:
      | string
      | null /** The signed URL for the engine logo; will fallback to raw logoPath if unable to sign. */;
    name?: string | null;
    ownerOrganization?: Organization | null;
    description?: string | null;
    categoryId?: string | null;
    state?: EngineState | null;
    price?: number | null;
    asset?: string | null;
    displayName?: string | null;
    validateUri?: string | null;
    executeUri?: string | null;
    applicationId?: string | null;
    createsTDO?:
      | boolean
      | null /** True if the engine creates a TemporalDataObject (TDO) as part of itsexecution. False otherwise. */;
    website?: string | null;
    rating?: number | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
    libraryRequired?:
      | boolean
      | null /** True if the engine requires a library to run. If so, a library ID mustbe provided in the engine payload. */;
    deploymentModel?: DeploymentModel | null;
    tasks?: TaskList | null;
    builds?: BuildList | null /** Retrieve builds for the engine.By default, deleted builds are not included.Deleted builds can be retrieved by including the `deleted` status parameter. */;
    dependency?: EngineDependency | null /** Dependency information for this engine */;
    fields?:
      | EngineField[]
      | null /** The list of custom fields on the engine. Users will be prompted toset or change these values when they run the engine. For example, atranslation engine might have a field for the target language. */;
    category?: EngineCategory | null /** The engine category */;
    validStateActions?: (EngineStateAction)[] | null;
    preferredInputFormat?:
      | string
      | null /** Get the engine's preferred input format, based on the latest deployed build.If there is no deployed build this field cannot be populated. */;
    supportedInputFormats?:
      | string[]
      | null /** Get the engine's supported input formats, based on the latest deployed build.If there is no deployed build this field cannot be populated. */;
    outputFormats?:
      | string[]
      | null /** Get the engine's output formats, based on the latest deployed build.If there is no deployed build this field cannot be populated. */;
    supportedSourceTypes?:
      | string[]
      | null /** List of IDs of source types that the engine supports,based on the latest deployed build.If there is no deployed build this field cannot be populated.Applies only to adapter engines that ingest data from a source.Will be a list of IDs of SourceType objects. */;
    hasScanPhase?:
      | boolean
      | null /** Get the ingestion flag which determines whether the adapter has a scan phase during ingestion.If there is no deployed build this field cannot be populated. */;
    deployedVersion?:
      | number
      | null /** Get the deployed build version of this engine. If there is no deployedbuild, this field will be null. */;
    mode?: EngineMode | null /** Specifies the mode in which the engine process input */;
    runtimeType?: string | null /** Specifies the runtime type, such as "iron" or "edge" */;
    oauth?:
      | string
      | null /** Get oauth information based on the deployed build. If there is no deployedbuild, this field will be null. */;
    supportedScheduleTypes?:
      | EngineScheduleType[]
      | null /** List of schedule types that the engine supports,based on the latest deployed build.If there is no deployed build, this field cannot be populated. */;
    taskMetrics?: EngineTaskMetrics | null /** Retrieve task metrics for the engine */;
  }

  export interface TaskList extends Page {
    records?: (Task)[] | null;
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number;
    count?: number | null /** Number of records returned in this response */;
  }

  export interface BuildList extends Page {
    records?: (Build)[] | null;
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number;
    count?: number | null /** Number of records returned in this response */;
  }

  export interface Build {
    id: string;
    name?: string | null;
    description?: string | null;
    createdDateTime?: DateTime | null /** Date and date build was created */;
    modifiedDateTime?: DateTime | null /** Date and time build was last modified */;
    createdBy?: string | null;
    modifiedBy?: string | null;
    engineId: string /** The ID of the engine this build is for */;
    engine?: Engine | null /** The engine this build is for */;
    price?: number | null;
    validateUri?: string | null;
    executeUri?: string | null;
    status?: BuildStatus | null /** Engine build status: */;
    dockerImage?: string | null /** URL to the Docker image for this engine build, if applicable */;
    runtime?: JsonData | null;
    version?: string | null;
    report?: JsonData | null;
    manifest?: JsonData | null /** The entire manifest, supplied by the engine developer, that describesthe engine's capabilities and requirements and is used by the platformsystem to build and execute the engine. */;
    preferredInputFormat?: string | null;
    supportedInputFormats?: string[] | null;
    outputFormats?: string[] | null;
    supportedSourceTypes?:
      | string[]
      | null /** List of IDs of source types that the engine supports.Applies only to adapter engines that ingest data from a source.Will be a list of IDs of SourceType objects. */;
    primaryAction?: BuildUpdateAction | null /** Used to give a default action choice */;
    secondaryActions?: (BuildUpdateAction)[] | null /** Used to give secondary action choices */;
    validStateActions?: (BuildUpdateAction)[] | null /** Contains all valid action choices */;
  }

  export interface EngineDependency {
    dependencyType: string /** TODO maps to values in engineCategory.data_field?Must be a valid categoryType from an existing EngineCategory. */;
    assetType?: string | null /** Asset type to expect previous engine to produce */;
    category?: EngineCategory | null /** The engine category corresponding to this dependency */;
  }

  export interface EngineCategory {
    id: string;
    name?: string | null;
    description?: string | null;
    type?: EngineType | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
    engineIds?: string[] | null /** The list of IDs of engines in this category */;
    totalEngines?: number | null;
    iconClass?: string | null;
    editable?: boolean | null;
    videoOnly?: boolean | null;
    color?: string | null;
    engines?: EngineList | null /** The list of engines in this category */;
    libraryEntityIdentifierTypeIds?:
      | string[]
      | null /** @scopes(scopes: ["developer.engine.read""cms.workflows.create""cms.job.create""job.create"]require: Any)If the engine category is integrated with libraries, this field containsthe list of IDs of entity identifier types that the engine category is compatiblewith. */;
    libraryEntityIdentifierTypes?: EntityIdentifierTypeList | null /** If the engine category is integrated with libraries, this field containsthe list of entity identifier types that the engine category is compatiblewith. */;
    categoryType?:
      | string
      | null /** A type for the engine category. Multiple engine categories with commonelements can share a categoryType. This information is used to computedependencies and format user interface elements. */;
    categoryMetadataKey?:
      | string
      | null /** An optional key used to identify this engine category's results forsearch and other purposes.Primarily used by Veritone platform applications. */;
    dependencies?:
      | EngineDependency[]
      | null /** A list of categoryTypes on which instances of this engine category depend. */;
    searchConfiguration?: EngineSearchConfiguration | null /** Information about how engine results in this category can be searchedin Veritone platform applications.Used primarily by Veritone platform applications. */;
    exportFormats: (ExportFormat)[] /** List of engine result export formats supported by engines in thiscategory. May be empty. */;
  }

  export interface EngineType {
    name?: string | null;
    description?: string | null;
  }

  export interface EngineList extends Page {
    records?: (Engine)[] | null;
    count: number /** Number of records returned in this response */;
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number;
  }

  export interface EntityIdentifierTypeList extends Page {
    records?: EntityIdentifierType[] | null;
    limit: number;
    offset: number;
    count?: number | null;
  }

  export interface EntityIdentifierType {
    id: string;
    label: string;
    labelPlural: string;
    iconClass?: string | null;
    description?: string | null;
    dataType: EntityIdentifierDataType;
  }
  /** Represents configuration on how the results of engines within a givencategory are indexed and searched.Primarily used by Veritone platform applications. */
  export interface EngineSearchConfiguration {
    autocompleteFields?:
      | AutocompleteFieldConfig[]
      | null /** Autocomplete field information is used to tell client applicationswhat fields are searchable by autocomplete in the search index andhow to search for them. */;
    searchFields?:
      | SearchFieldConfig[]
      | null /** Autocomplete field information is used to tell client applicationswhat fields are searchable in the search index andhow to search for them. */;
    isSearchEnabled?:
      | boolean
      | null /** Indicates whether or not search is available for results producedby engines in this category can be searched. */;
    isElasticEnabled?:
      | boolean
      | null /** Indicates whether or not search is available for results producedby engines in this category can be searched within the Elasticsearch index. */;
    searchMetadataKey?: string | null;
    elasticType?: string | null;
  }

  export interface AutocompleteFieldConfig {
    autocompleteField?: string | null;
    indexField?: string | null;
  }

  export interface SearchFieldConfig {
    searchField?: string | null;
    indexField?: string | null;
  }

  export interface ExportFormat {
    format: string /** The file format/extension i.e. ttml, vlf, etc. */;
    label: string /** A human readable label for the file format i.e. "Time Text Markup Language" */;
    types: (string)[] /** A list types to categories the file format by i.e. "subtitle" */;
  }
  /** Represents a custom input field on an engine. */
  export interface EngineField {
    max?: number | null /** Maximum value, in float format. Applies only to fields of type Number. */;
    min?: number | null /** Minimum value, in float format. Applies only to fields of type Number. */;
    step?:
      | number
      | null /** Numerical step by which the value should be incremented or decremented inthe user interface, in float format. Applies only to fields of type Number. */;
    type: EngineFieldType /** The field type. */;
    info?: string | null /** General information about the field, such as a description. */;
    name: string /** A machine-readable name, or key, for the field. */;
    label?: string | null /** A human-readable label for the field. */;
    options?:
      | EngineFieldPicklistOption[]
      | null /** A set of allowed values for the field. Applies only to fields of typepicklist or multi-picklist. */;
    defaultValue?:
      | string
      | null /** An optional default value for the field. Taken in string format, butapplies to all field types. */;
    defaultValues?:
      | string[]
      | null /** Optional default values to apply to a picklist. This fieldshould only be set for a field of type multi-picklist. */;
  }
  /** Represents one allowed option in a picklist. */
  export interface EngineFieldPicklistOption {
    key: string /** The human-readable label for the option, such as "English-US" for a language selector. */;
    value: string /** The machine-readable value that will be sent in the engine payload, such as"en-us" for a language selector. */;
  }

  export interface EngineTaskMetrics {
    cancelledCount?: number | null;
    completedCount?: number | null;
    failedCount?: number | null;
    pendingCount?: number | null;
    queuedCount?: number | null;
    runningCount?: number | null;
  }

  export interface Job {
    id: string /** ID of the job */;
    name?: string | null /** User-provided job name */;
    description?: string | null /** Optional job description */;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
    targetId?: string | null /** ID of the target object for the job, such as a container or Recording */;
    sourceAssetId?: string | null /** Source asset ID */;
    status?: TaskStatus | null /** Overall job status, as computed from the statuses of its component tasks */;
    tasks?: TaskList | null /** Tasks the job has or will execute */;
    applicationId?: string | null /** Application the job ran under */;
    target?: TemporalDataObject | null /** Target TemporalDataObject */;
    clusterId?: string | null /** ID of the cluster where this job will be executed */;
    templateId?: string | null /** ID of the template from which this job was created, if applicable. */;
    template?: JobTemplate | null /** The template which this job was created, if applicable. */;
    scheduledJobId?: string | null /** ID of the scheduled job under which this job was created, if applicable. */;
    scheduledJob?: ScheduledJob | null /** The scheduled job under which this job was created, if applicable. */;
  }
  /** A job template is a reusable template for job creation. */
  export interface JobTemplate {
    id: string /** The object ID */;
    createdDateTime?: DateTime | null /** Date and time this job template was created */;
    modifiedDateTime?: DateTime | null /** Date and time this job template was last modified */;
    taskTemplates: TaskTemplateList /** Task templates associated with this job template */;
    jobPipelineId?: string | null /** Job pipeline ID that this template belongs to, if there is one */;
    jobPipeline?: JobPipeline | null /** Job pipeline that this template belongs to, if there is one */;
    jobPipelineStage?:
      | number
      | null /** Job pipeline stage. Defined only if this template belongs to a job pipeline. */;
    clusterId?: string | null /** Target execution cluster ID */;
    skipDecider?: boolean | null;
    jobConfig?: JsonData | null /** Optional configuration data for jobs launched from the template.A schema may be enforced over the data stored here.Used for top-level information about the job that does not fit ona specific task template. */;
  }

  export interface TaskTemplateList extends Page {
    records: TaskTemplate[];
    count: number;
    offset: number;
    limit: number;
  }

  export interface TaskTemplate {
    id: string;
    engineId?: string | null;
    engine?: Engine | null;
    engineConfigId?: string | null;
    engineConfig?: EngineConfiguration | null;
    executionLocationId?: string | null;
    executionLocation?: ExecutionLocation | null;
    jobTemplateId?: string | null;
    jobTemplate?: JobTemplate | null;
    payload?: JsonData | null;
    payloadString?: string | null;
    parentTaskId?: string | null;
    parentTask?: Task | null;
    childTaskIds: string[];
    childTasks: TaskTemplateList;
  }

  export interface EngineConfiguration {
    id: string;
    credentials?: ExternalCredential[] | null;
    sourceId?: string | null;
    source?: Source | null;
  }

  export interface ExternalCredential {
    id: string;
    sourceTypeId?: string | null;
    sourceType?: SourceType | null;
    data?: StructuredData | null;
    dataId?: string | null;
  }
  /** A source type represents a category of sources that share commonattributes, such as "TV station" or "Real-time camera feed". */
  export interface SourceType {
    id: string /** Unique ID of this source type */;
    name: string /** A name for this source type */;
    organizationId?: string | null;
    isPublic?: boolean | null;
    sourceSchemaId?: string | null /** The ID of an optional schema for instances (sources) ofthis source type */;
    iconClass?: string | null /** The icon representing the type of source */;
    sourceSchema?: Schema | null /** The schema object used to validate details for instances (sources)of this source type */;
    credentialSchemaId?:
      | string
      | null /** The ID of an optional schema for credentials associated withsources of this type. */;
    credentialSchema?: Schema | null /** The schema used to validate credentials associated with sourcesof this type. */;
    createdDateTime?: DateTime | null /** Date and time this object was created. */;
    modifiedDateTime?: DateTime | null /** Date and time this object was last modified */;
    credentialType?: CredentialType | null;
    isLive?: boolean | null /** Indicates whether or not the source is "live", such as a camera feed */;
    requiresScanPipeline?: boolean | null /** Indicates whether the source requires a scan job pipeline */;
    supportedRunModes: RunMode[];
    categoryId: string /** The source type category ID for this source type.Used primarily by Veritone platform components. */;
    category: SourceTypeCategory /** The source type category for this source type.Used primarily by Veritone platform components. */;
    sourceFormats: string[] /** List of source formats applicable to this source type.Only applies to certain source types; many will have anempty list. */;
    programFormats: string[] /** List of program formats applicable to this source type.Only applies to certain source types; many will have anempty list. */;
    sources: SourceList /** Sources created under this source type */;
  }

  export interface Schema {
    id: string;
    dataRegistryId: string;
    dataRegistry?: DataRegistry | null;
    definition?: JsonData | null;
    majorVersion: number;
    minorVersion: number;
    createdBy?: User | null;
    modifiedBy?: User | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    status?: SchemaStatus | null;
    validActions?: (SchemaAction)[] | null /** List of status the Schema can transition to. */;
    structuredDataObjects?: StructuredDataList | null /** SDOs under this schema */;
    organization?: Organization | null /** The organization that owns this schema. */;
    organizationId?: string | null /** The Id of the organization that owns this schema. */;
  }

  export interface DataRegistry {
    id: string;
    name?: string | null;
    description?: string | null;
    source?: string | null;
    schemas?: SchemaList | null;
    organization?: Organization | null /** The organization that owns this data registry. */;
    organizationId?: string | null;
    createdBy?: User | null;
    modifiedBy?: User | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    publishedSchema?: Schema | null /** The currently published schema version for convenient access.This field will be empty if there is no published schema. */;
  }

  export interface SchemaList extends Page {
    records?: (Schema)[] | null;
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number /** Maximum number of results that were retrieved in this query; page size */;
    count?: number | null /** Number of records returned in this response */;
  }

  export interface StructuredDataList extends Page {
    records?: (StructuredData)[] | null;
    count?: number | null;
    offset: number;
    limit: number;
  }

  export interface StructuredData {
    id: string /** The ID */;
    schemaId: string /** Id of the schema used to validate this object */;
    schema?: Schema | null /** The schema used to validate this object */;
    data?: JsonData | null;
    dataString?: string | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
  }
  /** Source type categories are managed by Veritone. */
  export interface SourceTypeCategory {
    id: string;
    name: string;
  }

  export interface SourceList extends Page {
    records: Source[];
    count: number;
    offset: number;
    limit: number;
  }
  /** A source represents a source of data and is used by adapters to ingestdata into the platform for use by an engine workflow. */
  export interface Source {
    id: string /** Unique ID of this source */;
    sourceTypeId: string /** ID of the source type for this source. */;
    sourceType?: SourceType | null /** The source type for this source */;
    name: string /** A name for this source */;
    details?: JsonData | null /** Metadata associated with this source. The schema for this data isspecific to the source type and controlled by a schema. */;
    isPublic: boolean /** Indicates whether this source is public and available to all organizationsor restricted to the organization that owns id. */;
    organizationId: string /** ID of the organization that owns this source */;
    organization?: Organization | null /** The organization that owns this source */;
    createdDateTime?: DateTime | null /** Date and time this source was created */;
    modifiedDateTime?: DateTime | null /** Date and time this source was last modified */;
    thumbnailUrl?: string | null /** An optional thumbnail image URL for the source */;
    contentTemplates: SourceContentTemplate[];
    correlationSchemaId?: string | null /** Id of a published data registry schema */;
    correlationSDOId?: string | null /** Id of a structured data object for the correlationSchemaId */;
    permission: SourcePermission /** permission the currently authenticated principal has on this source. */;
    collaborators: SourceCollaboratorList /** Permissions granted to other organizations. Only the source ownercan view or edit this field. */;
    state?: JsonData | null /** Current state for the source object. This is controlled bythe adapters that use the source and should not be set byother clients. */;
  }

  export interface SourceContentTemplate {
    id: string;
    sourceId: string;
    sdoId: string;
    sdo?: StructuredData | null;
    schemaId: string;
    data?: JsonData | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
  }

  export interface SourceCollaboratorList extends Page {
    records: SourceCollaborator[];
    offset: number;
    limit: number;
    count?: number | null;
  }
  /** A source ACL grants a single organization limited rights to a private source */
  export interface SourceCollaborator {
    permission: SourcePermission /** The permission granted. Either `viewer` or `editor`. */;
    organizationId: string /** Organization ID the source was shared with */;
    organization?: Organization | null /** The organization the source was shared with */;
  }

  export interface ExecutionLocation {
    id: string;
    clusterId: string;
    cluster: Cluster;
    nodeId?: string | null;
    node?: ClusterNode | null;
    data: JsonData;
  }

  export interface Cluster {
    id: string;
    nodes?: (ClusterNode)[] | null;
    name?: string | null;
    isPublic?: boolean | null;
    type?: ClusterType | null;
    organizationId?: string | null;
    allowedEngines?: string[] | null;
    containerTag?: string | null;
    paused?: boolean | null;
    memorySizeBytes?: number | null;
    storageSizeBytes?: number | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    deletedDateTime?: DateTime | null;
    cachedDateTime?: DateTime | null;
    default?: boolean | null;
    bypassAllowedEngines?: boolean | null;
    collaborators?: ClusterCollaboratorList | null;
  }

  export interface ClusterNode {
    id: string;
    clusterId?: string | null;
    cluster?: Cluster | null;
    name?: string | null;
  }

  export interface ClusterCollaboratorList extends Page {
    records: ClusterCollaborator[];
    offset: number;
    limit: number;
    count?: number | null;
  }
  /** A source ACL grants a single organization limited rights to a private clusters */
  export interface ClusterCollaborator {
    permission: ClusterPermission /** The permission granted. */;
    organizationId: string /** Organization ID the cluster was shared with */;
    organization?: Organization | null /** The organization the cluster was shared with */;
  }

  export interface JobPipeline {
    id: string /** Unique ID of this job pipeline */;
    jobTemplates?: JobTemplateList | null /** List of job templates associated with this job pipeline */;
    organizationId?: string | null /** ID of the organization that owns this job pipeline */;
    organization?: Organization | null /** The organization that owns this job pipeline */;
    isPublic: boolean /** Indicates whether or not this job pipeline is public. If so, it canbe viewed and used, but not modified, by all organizations. */;
  }

  export interface JobTemplateList extends Page {
    records: JobTemplate[];
    count: number;
    offset: number;
    limit: number;
  }

  export interface ScheduledJob {
    id: string;
    organizationId?: string | null;
    organization?: Organization | null /** Organization that owns this scheduled job */;
    name?: string | null;
    description?: string | null;
    startDateTime?: DateTime | null;
    stopDateTime?: DateTime | null;
    jobPipelineIds?: string[] | null;
    jobPipelines: JobPipelineList;
    jobTemplateIds?: string[] | null;
    jobTemplates: JobTemplateList;
    allJobTemplates: JobTemplateList /** Retrieve the complete set of job templates associated with thisscheduled job, including those that are associated through a jobpipeline. */;
    primarySourceId?:
      | string
      | null /** The ID of the primary source on this scheduled job, if applicable.This is based on the payloads of the tasks that are invoked forthis scheduled job. */;
    primarySource?: Source | null /** The primary source. See `primarySourceId` above. */;
    jobs: JobList;
    sources?: SourceList | null /** Get a list of sources that are usedby engine configurations that referencethis schedule through the schedule -> job -> task relationship. */;
    parts?: SchedulePart[] | null;
    isActive: boolean;
    runMode: RunMode;
    details?: JsonData | null;
    detailsSchemaId?: string | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    contentTemplates: ScheduledJobContentTemplate[] /** List of schema-controlled content templates attachedto this scheduled job */;
    collaborators: ScheduledJobCollaboratorList /** Permissions granted to other organizations. Only the source ownercan view or edit this field. */;
    isPublic?:
      | boolean
      | null /** A public scheduled job can be viewed and launched byusers from any organization. By default, scheduled jobs areprivate and can only be viewed or launched by the owning organizationand organizations that the owner has explicitly shared them with.Only Veritone administrators can create public scheduled jobs. */;
    permission?: ScheduledJobPermission | null /** The user's permission on this scheduled job */;
    primarySourceTypeId?: string | null;
    primarySourceType?: SourceType | null;
    ingestionStatusId?: string | null;
    ingestionStatus?: string | null;
    affiliates: ProgramAffiliateList;
  }

  export interface JobPipelineList extends Page {
    records: JobPipeline[];
    count: number;
    offset: number;
    limit: number;
  }

  export interface JobList extends Page {
    records?: (Job)[] | null /** Jobs retrieved */;
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number /** Maximum number of results that were retrieved in this query; page size */;
    count?: number | null /** Number of records returned in this response */;
  }

  export interface SchedulePart {
    scheduleType: ScheduleType;
    scheduledDay?: DayOfWeek | null;
    startTime?: Time | null;
    stopTime?: Time | null;
    repeatIntervalUnit?: IntervalUnit | null;
    repeatInterval?: number | null;
    durationSeconds?: number | null;
  }

  export interface ScheduledJobContentTemplate {
    id: string;
    scheduledJobId: string;
    sdoId: string;
    sdo?: StructuredData | null;
    schemaId: string;
    data?: JsonData | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
  }

  export interface ScheduledJobCollaboratorList extends Page {
    records: ScheduledJobCollaborator[];
    offset: number;
    limit: number;
    count?: number | null;
  }
  /** A source ACL grants a single organization limited rights to a private source */
  export interface ScheduledJobCollaborator {
    permission: ScheduledJobPermission /** The permission granted. Either `viewer` or `editor`. */;
    organizationId: string /** Organization ID the source was shared with */;
    organization?: Organization | null /** The organization the source was shared with */;
  }

  export interface ProgramAffiliateList extends Page {
    records?: ProgramAffiliate[] | null;
    offset: number;
    limit: number;
    count?: number | null;
  }

  export interface ProgramAffiliate {
    sourceId: string;
    source?: Source | null;
    scheduledJobId: string;
    scheduledJob?: ScheduledJob | null;
    scheduledDay?: DayOfWeek | null;
    startDateTime?: DateTime | null;
    stopDateTime?: DateTime | null;
    startTime?: Time | null;
    stopTime?: Time | null;
    status?: string | null;
  }

  export interface TaskLog {
    uri?: string | null /** URI to the task log file */;
    text?: string | null /** The entire text contents of the log file. Note that this value can long. */;
    jsondata?: JsonData | null /** The log file in JSON form. If the log file contains valid JSON,this field will contain the native structure. If the log file does notcontain valid JSON, this field will contain a single property called`text` with a string value containing the entire log file. */;
  }
  /** Contains security settings on an asset container */
  export interface Security {
    global?: boolean | null /** Whether or not the object is globally visible */;
  }
  /** Describes source information about a TDO. That is,the components and processes that produced it.Each field may or may not have a value, depending onhow the TDO was created. */
  export interface TdoSourceData {
    taskId?: string | null /** Task ID, typically of an ingestion task. */;
    task?: Task | null /** The task object. */;
    sourceId?: string | null /** Ingestion source ID */;
    scheduledJobId?: string | null /** ID of the scheduled job, if any, under which this TDO was created */;
    engineId?: string | null /** ID of the engine used in the task that created this TDO */;
    engine?: Engine | null /** The engine used in the task that created this TDO. */;
    scheduledJob?: ScheduledJob | null /** The scheduled job under which this TDO was created, if any */;
    source?: Source | null /** The source from which this TDO was created, if any */;
  }
  /** Describes a stream that is available on a TDO */
  export interface TdoStreamData {
    uri: string /** The stream URI */;
    protocol: string /** The protocol, such as "dash" or "hls" */;
  }

  export interface EngineRunList extends Page {
    records?: (EngineRun)[] | null;
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number;
    count?: number | null /** Number of records returned in this response */;
  }
  /** Describes engine run on a TDO with */
  export interface EngineRun {
    engine?: Engine | null /** Engine that was run on a TDO */;
    status?: TaskStatus | null /** Engine status derived from the written engine output or task status. See TaskStatus enum for details. */;
    activeTasks?: TaskList | null /** All in-flight tasks for the given engine */;
    hasUserEdits?: boolean | null /** Whether or not the engine run has user edits */;
  }

  export interface SharedWith {
    read?: (number)[] | null /** List of organizationIds that have read access to this object */;
    write?: (number)[] | null /** List of organizationIds that have write access to this object */;
  }

  export interface FolderContentTemplate {
    id: string;
    folderId: string;
    sdoId: string;
    sdo?: StructuredData | null;
    schemaId: string;
    data?: JsonData | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
  }
  /** Type that holds multi-factor authentication for a user */
  export interface MfaInfo {
    phoneNumber?: string | null;
    smsVoiceVerifiedDateTime?: DateTime | null;
    gaVerifiedDateTime?: DateTime | null;
    defaultOption?: string | null;
    pendingRegistration?: string | null;
  }
  /** Type that holds user setting for a user */
  export interface UserSetting {
    key?: string | null;
    value?: string | null;
  }

  export interface EngineBlacklist {
    organizationId: string;
    engines?: (Engine)[] | null;
    engineCategories?: (EngineCategory)[] | null;
  }

  export interface EngineWhitelist {
    organizationId: string;
    engines?: (Engine)[] | null;
    engineCategories?: (EngineCategory)[] | null;
  }

  export interface WatchlistList extends Page {
    records?: (Watchlist)[] | null;
    offset: number /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number /** Maximum number of results that were retrieved in this query; page size */;
    count?: number | null /** Number of records returned in this response */;
  }

  export interface Watchlist {
    id: string /** The primary ID */;
    name: string /** A human-readable name for the watchlist */;
    organization: Organization /** The organization that owns the watchlist */;
    organizationId: string /** ID of the organization that owns the watchlist */;
    scheduleIds?: string[] | null /** IDs of the schedules associated with the watchlist */;
    startDateTime?: DateTime | null /** Date and time at which the watchlist takes effect */;
    stopDateTime?: DateTime | null /** Date and time at which the watchlist is no longer in effect */;
    createdDateTime?: DateTime | null /** Date and time the watchlist was created */;
    modifiedDateTime?: DateTime | null /** Date and time the watchlist was last modified */;
    cognitiveSearches?: CognitiveSearch[] | null /** Cognitives searches associated with the watchlist */;
    sourceTypeIds?: string[] | null /** Ids of the source types associated directly with the watchlist */;
    sourceIds?: string[] | null /** IDs of the sources associated directly with the watchlist */;
    folders?:
      | Folder[]
      | null /** Folders that the watchlist is filed in.At present, a watchlist can only be filed in a single folder. */;
    details?: JsonData | null /** Structured metadata associated with the watchlist.Elements of the metadata are validated against specific schemas. */;
    subscriptions: Subscription[];
    searchIndex: SearchIndex;
    query?: JsonData | null;
    mentions?: MentionList | null /** Get mentions generated for this watchlist */;
    advertiserId?: string | null /** ID of the advertiser directly with the watchlist */;
    brandId?: string | null /** ID of the brand directly with the watchlist */;
    advertiser?: JsonData | null /** advertiser associated with the watchlist */;
    brand?: JsonData | null /** brand associated with the watchlist */;
    combinedSourceTypeIds?:
      | string[]
      | null /** Contains the list of all source type IDsassociated with this watchlist, includingthose for sources on schedules. */;
    scheduledJobs: ScheduledJobList;
    schedules: ScheduledJobList /** TODO for backward compat with v3 search? */;
  }

  export interface CognitiveSearch {
    id: string;
    profile?: JsonData | null /** A recursive tree structure defining the search criteria */;
    mentionStatusId?:
      | string
      | null /** ID of the mention status to set on each mention generated as a resultof a match against this search */;
    mentionStatus?: MentionStatus | null /** The mention status to set on each mention generated as a resultof a match against this search */;
    query?: JsonData | null /** The raw query. Read-only and server-generated based on the search profile. */;
  }

  export interface MentionStatus {
    id: string;
    name: string;
  }

  export interface MentionList extends Page {
    offset: number;
    limit: number;
    count?: number | null;
    records?: Mention[] | null;
  }

  export interface Mention {
    id: string;
    organizationId: string;
    sourceTypeId?: string | null;
    sourceId?: string | null;
    scheduleId?: string | null;
    mediaId?: string | null;
    advertiserId?: string | null;
    brandId?: string | null;
    campaignId?: string | null;
    watchlistId?: string | null;
    statusId?: string | null;
    complianceStatusId?: string | null;
    spotTypeId?: string | null;
    audienceMarketCount?: number | null;
    audienceAffiliateCount?: number | null;
    mentionHitCount?: number | null;
    audience?: number | null;
    mentionRating?: number | null;
    isMatch?: boolean | null;
    mentionDate?: DateTime | null;
    metadata?: JsonData | null;
    mentionSnippets?: (MentionSnippets)[] | null;
    userSnippets?: (MentionUserSnippets)[] | null;
    adCreative?: JsonData | null;
    fingerprint?: JsonData | null;
    cognitiveEngineResults?: JsonData | null;
    comments?: MentionCommentList | null;
    hash?: string | null;
    hitStartDateTime?: DateTime | null;
    hitEndDateTime?: DateTime | null;
    endDateTime?: DateTime | null;
    scheduledJob?: ScheduledJob | null;
    temporalDataObject?: TemporalDataObject | null;
    organization: Organization;
    watchlist?: Watchlist | null;
    advertiser?: JsonData | null;
    brand?: JsonData | null;
    queryTerm?: string | null;
    ratings?: MentionRatingList | null;
  }

  export interface MentionSnippets {
    text?: string | null;
    startTime?: number | null;
    endTime?: number | null;
    hits?: (MentionHit)[] | null;
  }

  export interface MentionHit {
    queryTerm?: string | null;
    startTime?: number | null;
    endTime?: number | null;
  }

  export interface MentionUserSnippets {
    text?: string | null;
    startTime?: number | null;
    endTime?: number | null;
    transcriptStartDate?: string | null;
    transcriptEndDate?: string | null;
  }

  export interface MentionCommentList extends Page {
    offset: number;
    limit: number;
    count?: number | null;
    records?: (MentionComment)[] | null;
  }

  export interface MentionComment {
    commentId: string;
    mentionId?: string | null;
    userId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    userImage?: string | null;
    commentText?: string | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
  }

  export interface MentionRatingList extends Page {
    offset: number;
    limit: number;
    count?: number | null;
    records?: (MentionRating)[] | null;
  }

  export interface MentionRating {
    ratingId: string;
    mentionId?: string | null;
    userId?: string | null;
    ratingValue?: number | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
  }

  export interface ScheduledJobList extends Page {
    records: ScheduledJob[];
    count: number;
    offset: number;
    limit: number;
  }

  export interface CollectionList extends Page {
    records?: (Collection)[] | null;
    offset: number /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number /** Maximum number of results that were retrieved in this query; page size */;
    count?: number | null /** Number of records returned in this response */;
  }

  export interface Collection {
    id: string;
    name: string;
    imageUrl?: string | null /** A url to get the collection image */;
    signedImageUrl?:
      | string
      | null /** A sigend url to get the collection image. It will only be signed if it is an s3 url. */;
    ownerId?: string | null;
    description?: string | null;
    organization?: Organization | null;
    organizationId: string;
    orgSharing?: boolean | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    programCount?: number | null;
    itemCount?: number | null;
    typeId?: string | null;
    isActive?: boolean | null;
    widgets?: WidgetList | null;
  }

  export interface WidgetList extends Page {
    records?: (Widget)[] | null;
    offset: number /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number /** Maximum number of results that were retrieved in this query; page size */;
    count?: number | null /** Number of records returned in this response */;
  }

  export interface Widget {
    id?: string | null;
    name?: string | null;
    organization?: Organization | null;
    organizationId?: string | null;
    collection?: Collection | null;
    collectionId: string;
    displayCollectionName?: boolean | null;
    displayTranscription?: boolean | null;
    width?: number | null;
    numberOfMentionsToShow?: number | null;
    adScript?: string | null;
    seoTags?: (string)[] | null;
    backgroundColor?: string | null;
    borderColor?: string | null;
    textColor?: string | null;
    createdDateTime?: DateTime | null;
  }
  /** Analytics Dashboards */
  export interface Dashboard {
    index?: number | null /** The order in which to display the dashboard. */;
    title?: string | null;
    description?: string | null;
    active?: boolean | null /** The status of the dashboard */;
    filters?: (string)[] | null /** The filters that can be applied on the dashboard. Typically watchlists. */;
    type?: string | null;
    qlikAppId?: string | null /** Vendor specific identifier for Qlik applications */;
    qlikSheetId?: string | null /** Vendor specific identifier for Qlik sheet */;
    thumbnail?: string | null;
  }

  export interface RightsListing {
    operations: string[];
    resources?: JsonData | null;
  }

  export interface CreatePasswordResetRequestPayload {
    message?: string | null;
  }
  /** Contains information about engineJWTToken context */
  export interface JwtTokenInfo {
    engineId: string;
    token: string;
    resource: EngineJwtResource;
  }
  /** Contain resouces of Engine JWT Token */
  export interface EngineJwtResource {
    applicationId?: string | null;
    tdoId?: string | null;
    jobId: string;
    taskId: string;
  }
  /** Contains information about the user's authentication context. */
  export interface LoginInfo {
    apiToken?: string | null /** API token. This is a persistent organization-level token intended for API access. */;
    token?:
      | string
      | null /** Session-scoped user token. This token is tied to the user's session and will expirewhen that session ends. */;
    lastLoggedIn?: string | null /** Date and time at which the user last logged in to the Veritone platform */;
    applications?:
      | (string)[]
      | null /** List of Veritone platform applications for which the user is provisioned.Note that these are different than the VDA custom applications referencedin the `Application` type, `applications()` query, and related mutations. */;
    applicationPlatforms?: (ApplicationPlatform)[] | null;
    groups?: (Group)[] | null /** Groups to which the user belongs. */;
    hasPassword?:
      | boolean
      | null /** True if the user account has a password set. False otherwise.If false, the user will be prompted to set a password on next login. */;
    organization?: Organization | null /** Organization to which the user belongs. */;
    passwordResetRequired?: boolean | null /** True if a password reset will be required on the user's next login. */;
    providerId?: string | null /** TODO */;
    providerScreenName?: string | null /** TODO */;
    providerUserId?: string | null /** TODO */;
    user?: User | null /** User object */;
  }
  /** TODO */
  export interface ApplicationPlatform {
    id?: string | null /** The application platform ID */;
    platformType?: string | null /** Platform type, such as TODO */;
    platformUrl?: string | null /** The application platform URL. */;
  }

  export interface Group {
    id: string;
    name?: string | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    applicationId: string;
    createdBy?: User | null;
    modifiedBy?: User | null;
    organizationId: string;
    organization?: Organization | null;
    jsondata?: JsonData | null /** Freeform metadata in JSON form */;
  }

  export interface Token {
    id?: string | null /** The token ID */;
    applicationId?: string | null;
    groupId?: string | null;
    json?: TokenJson | null;
  }

  export interface TokenJson {
    rights?: (string)[] | null;
  }
  /** Key-value pairs -- a generic way to represent metadata */
  export interface Kvp extends Metadata {
    name: string;
    value?: (Property)[] | null;
  }
  /** Type representing an integer property. */
  export interface IntProperty extends Property {
    name: string;
    value?: number | null;
  }
  /** Type representing a string property */
  export interface StringProperty extends Property {
    name: string;
    value?: string | null;
  }
  /** Type representing a boolean property */
  export interface BooleanProperty extends Property {
    name: string;
    value?: boolean | null;
  }

  export interface CompoundProperty extends Property {
    name: string;
    value?: Kvp | null;
  }
  /** Payload required to delete an object */
  export interface DeletePayload {
    id: string /** ID of the object that was deleted */;
    message?: string | null /** a message */;
  }

  export interface CloneRequest {
    id: string;
    sourceApplicationId: string;
    destinationApplicationId: string;
    numberOfRecordings?: number | null;
    numberOfCompletedRecordings?: number | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    status?: string | null;
    percentage?: number | null;
  }

  export interface CloneRequestList extends Page {
    records?: (CloneRequest)[] | null;
    count?: number | null;
    offset: number;
    limit: number;
  }

  export interface VerifyJwtPayload {
    jwtToken: string /** the same JWT input */;
    payload: JsonData /** the payload contained within the JWT */;
  }
  /** Object that represents the mapping of clone assets to its parent's assets. */
  export interface CloneAssetIdMap {
    oldAssetId: string /** The original asset ID (within the cloned asset container). */;
    newAssetId: string /** The new asset ID (within the clone asset container). */;
  }
  /** Metadata that represents a clone of a recording. */
  export interface CloneData extends Metadata {
    date?: string | null /** Timestamp when the recording was cloned */;
    originalId: string /** The ID of the asset container this was cloned from */;
    cloneBlobs?: boolean | null /** Clone blobs flag */;
    assetIdMap?: (CloneAssetIdMap)[] | null /** Map of asset IDs from the clone to the parent. */;
    name: string;
  }
  /** Metadata that represents a program. */
  export interface Program extends Metadata {
    id?: string | null;
    name: string;
    image?: string | null;
    liveImage?: string | null;
  }

  export interface FileData extends Metadata {
    name: string;
    size?: number | null;
    mimeType?: string | null;
    fileName?: string | null;
  }

  export interface Entity {
    id: string;
    name?: string | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
    properties?: (Property)[] | null;
    libraryId?: string | null;
    library?: Library | null;
    profileImageUrl?: string | null;
    identifiers?: EntityIdentifierList | null;
    isPublished?: boolean | null;
    jsondata?: JsonData | null;
    jsonstring?: string | null;
    summary?: EntitySummary | null;
    description?: string | null;
  }

  export interface Library {
    createdDateTime?: DateTime | null /** Object creation timestamp. Does not change. */;
    modifiedDateTime?: DateTime | null /** Object modification timestamp. */;
    id: string /** The object's unique ID */;
    createdBy?: string | null;
    modifiedBy?: string | null;
    description?: string | null;
    name?: string | null;
    properties?: (Property)[] | null /** Modular metadata in the form of key-value pairs */;
    security?: Security | null /** Security settings for the asset container */;
    applicationId: string;
    version?: number | null /** Library version */;
    organizationId?: string | null;
    libraryType?: LibraryType | null;
    libraryTypeId?: string | null;
    coverImageUrl?: string | null;
    engineModels?: LibraryEngineModelList | null /** Retrieve engine models for a library */;
    entities?: EntityList | null;
    collaborators?: LibraryCollaboratorList | null /** Retrieve collaborators for a library. */;
    summary?: LibrarySummary | null /** Aggregated summary data about the library */;
  }

  export interface LibraryType {
    id: string;
    label?: string | null;
    iconClass?: string | null;
    entityIdentifierTypes?: (EntityIdentifierType)[] | null;
    entityTypeName?: string | null;
    entityTypeNamePlural?: string | null;
    entityType?: EntityType | null;
  }

  export interface EntityType {
    name: string;
    namePlural: string;
    schema: JsonData;
  }

  export interface LibraryEngineModelList extends Page {
    records?: (LibraryEngineModel)[] | null;
    offset: number;
    limit: number;
    count?: number | null;
  }

  export interface LibraryEngineModel {
    id: string;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    engineId: string;
    engine?: Engine | null;
    libraryId: string;
    library?: Library | null;
    libraryVersion?: number | null;
    trainJobId?: string | null;
    trainStatus: LibraryEngineModelTrainStatus;
    dataUrl?: string | null;
    contentType?:
      | string
      | null /** Content type of the data file pointed to by dataUrl.Will be empty if no data file is attached to the engine model. */;
    jsondata?: JsonData | null;
  }

  export interface EntityList extends Page {
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number;
    count?: number | null /** Number of records returned in this response */;
    records?: (Entity)[] | null;
  }

  export interface LibraryCollaboratorList {
    records?: (LibraryCollaborator)[] | null;
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number;
    count?: number | null /** Number of records returned in this response */;
  }

  export interface LibraryCollaborator {
    organizationId: string;
    organization?: Organization | null;
    status?: string | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    permissions?: (string)[] | null;
    libraryId: string;
    library?: Library | null;
  }

  export interface LibrarySummary {
    entityCount?: number | null;
    unpublishedEntityCount?: number | null;
    lastTrainedVersion?: number | null;
    lastTrainedDateTime?: DateTime | null;
  }

  export interface EntityIdentifierList extends Page {
    records?: (EntityIdentifier)[] | null;
    offset: number;
    limit: number;
    count?: number | null;
  }

  export interface EntityIdentifier {
    id: string;
    entityId: string;
    entity: Entity;
    identifierType: EntityIdentifierType;
    identifierTypeId: string;
    title?: string | null;
    isPriority?: boolean | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    url: string;
    contentType: string;
    jsondata?: JsonData | null;
    jsonstring?: string | null;
  }

  export interface EntitySummary {
    identifierCountsByType?: JsonData | null;
  }

  export interface LibraryTypeList extends Page {
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number;
    count?: number | null /** Number of records returned in this response */;
    records?: (LibraryType)[] | null;
  }

  export interface LibraryList extends Page {
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number;
    count?: number | null /** Number of records returned in this response */;
    records?: (Library)[] | null;
  }
  /** Represents single chunk of engine results for date range */
  export interface EngineResult {
    tdoId: string;
    engineId: string;
    jsondata?: JsonData | null;
    startOffsetMs?: number | null;
    stopOffsetMs?: number | null;
    assetId?: string | null;
    userEdited?: boolean | null;
    tdo?: TemporalDataObject | null;
  }
  /** Represents a collection of engine results. Not Paged. */
  export interface EngineResultList {
    sourceId?: string | null;
    records?: (EngineResult)[] | null;
  }

  export interface EngineCategoryList extends Page {
    records?: EngineCategory[] | null;
    offset: number;
    limit: number;
    count?: number | null;
  }

  export interface PasswordTokenInfo {
    passwordToken?: string | null;
  }

  export interface GroupList extends Page {
    records?: (Group)[] | null;
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number /** Maximum number of results that were retrieved in this query; page size */;
    count?: number | null /** Number of records returned in this response */;
  }

  export interface OrganizationList extends Page {
    records?: (Organization)[] | null;
    offset: number /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number /** Maximum number of results that were retrieved in this query; page size */;
    count?: number | null /** Number of records returned in this response */;
  }

  export interface Share {
    id: string;
    recipients?: (string)[] | null;
    shareMessage?: string | null;
    shareOptionsJson?: JsonData | null;
    folderId?: string | null;
    mentionId?: string | null;
  }

  export interface CollectionMention {
    folderId: string /** id of the collection */;
    mentionId: string /** id of the mention */;
  }

  export interface CognitiveSearchProfile {
    and?: CognitiveSearchProfile[] | null;
    or?: CognitiveSearchProfile[] | null;
    condition?: CognitiveSearchCondition | null;
    jsondata?: JsonData | null;
  }

  export interface CognitiveSearchCondition {
    engineCategoryId: string;
    state: JsonData;
  }
  /** An object containing custom structured data.This type is not fully implemented. */
  export interface StructuredJsonObject extends Metadata {
    data?: JsonData | null;
    schema: StructuredJsonSchema;
    name: string;
    id: string;
  }
  /** A custom structured data schema, specified in JSON.This type is not fully implemented. */
  export interface StructuredJsonSchema {
    schema?: JsonData | null;
    name: string;
    id: string;
    ownerOrganizationId: string;
    organization: Organization;
  }

  export interface JsonObject extends Metadata {
    name: string;
    data?: JsonData | null;
  }
  /** Results from a mention or media search.TODO link to format documentation for core-search-server */
  export interface SearchResult {
    jsondata: JsonData;
  }

  export interface IngestionConfiguration {
    id: string;
    applicationId: string;
    type?: string | null;
    name?: string | null;
    createdDateTime?: DateTime | null;
    modifiedDateTime?: DateTime | null;
    emailAddress?: string | null;
    job?: JsonData | null;
    ui?: JsonData | null;
    jsondata?: JsonData | null;
  }

  export interface IngestionConfigurationList extends Page {
    offset: number;
    limit: number;
    count?: number | null;
    records?: (IngestionConfiguration)[] | null;
  }
  /** This type represents information about the Veritone GraphQL serverinstance. Primarily used by Veritone engineering and operations. */
  export interface GraphQlServiceInfo {
    buildInfo?: JsonData | null /** JSON structure containing build information, such as the build number and date. */;
    featureFlags?: JsonData | null;
    heartbeatStats?: JsonData | null;
  }

  export interface DataRegistryList extends Page {
    records?: (DataRegistry)[] | null;
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number /** Maximum number of results that were retrieved in this query; page size */;
    count?: number | null /** Number of records returned in this response */;
  }

  export interface SchemaPropertyList extends Page {
    records?: (SchemaProperty)[] | null;
    offset: number /** The starting index for records that were returned in this query. */;
    limit: number /** Maximum number of results that were retrieved in this query; page size */;
    count?: number | null /** Number of records returned in this response */;
  }

  export interface SchemaProperty {
    dataRegistryId: string;
    majorVersion: number;
    schema: Schema;
    path: string;
    searchPath: string;
    type: string;
    title?: string | null;
  }
  /** Contains information about a signed writable URL retrieved from thegetSignedWritableUrl mutation. */
  export interface WritableUrlInfo {
    bucket: string /** The storage bucket ID */;
    key: string /** The storage object key */;
    expiresInSeconds: number /** Time interval, in seconds, after which this URL is expired and no longer valid. */;
    expiresAtDateTime: DateTime /** Absolute time at which this URL expires */;
    url: string /** The signed URL, which can be uploaded to with an HTTP PUT (note:  PUT isrequired. POST will generate an error). */;
    getUrl: string /** A signed URL that can be used with HTTP GET to retrieve thenew resource. */;
    unsignedUrl?:
      | string
      | null /** The unsigned, base URL to the object, which can be safely persistedand re-signed later by a client with the necessary storage credentials. */;
  }
  /** Contains information of a event hook */
  export interface Trigger {
    id: string;
    event: string;
    target: string;
    consumerParams?: JsonData | null;
    createdDateTime: DateTime;
    modifiedDateTime: DateTime;
    createdBy: string;
    updatedBy: string;
  }

  export interface AuditLogEntry {
    organizationId?: string | null /** ID of the organization that generated the audit entry. */;
    objectType?:
      | string
      | null /** The type of the object involved in the audit action, such as `Watchlist`or `TemporalDataObject`. */;
    objectId?:
      | string
      | null /** The ID of the object involved in the audit action. The format of this IDvaries by object type. */;
    id: string /** The unique ID of the audit log entry. */;
    eventType?: string | null /** The event type, such as `Create`, `Update`, or `Delete`. */;
    userName?: string | null /** User name or ID that generated the audit entry. This might be an API key. */;
    success?: boolean | null /** Indicates whether or not the attempted action was successful. */;
    clientIpAddress?: string | null /** IP address of the client that generated the audit action. */;
    clientUserAgent?: string | null /** HTTP user agent of the client that generated the audit action. */;
    description?: string | null;
    createdDateTime: DateTime /** Date/time at which the audit log entry was created. */;
  }

  export interface AuditLogEntryList extends Page {
    records: AuditLogEntry[];
    count?: number | null /** Count of records in this page. Will be less than or equal to `limit`. */;
    offset: number /** Offset used in the query that generated this page. */;
    limit: number /** Limit used in the query that generated this page. */;
    toDateTime?: DateTime | null /** `toDateTime` value of the query that generated this page.Useful when a default was applied. */;
    fromDateTime?: DateTime | null /** `fromDateTime` value of the query that generated this page.Useful when a default was applied. */;
  }

  export interface Event {
    id: string;
    eventName: string;
    eventType: string;
    application: string;
    public: boolean;
    description?: string | null;
    schemaData: string;
    schemaHash: string;
    createdDateTime: DateTime;
    createdBy: string;
  }

  export interface UnsubscribeEvent {
    id: string /** ID of the object that was deleted */;
    message?: string | null /** Message */;
  }

  export interface EmitEventResponse {
    id: string;
    decoder: string /** the decoder that GQL used to interpret your event before sending */;
  }

  export interface WorkflowRuntimeResponse {
    success: boolean;
    message?: string | null /** Error message if success is false */;
    uri?:
      | string
      | null /** uri of veritone workflow instance.This is only available when Workflow request is successful */;
  }

  export interface WorkflowRuntimeStorageData {
    storageKey: string /** Unique lookup id for the workflowRuntimeData */;
    storageData: string /** Data content - base64 encoded binary, plain string or encoded JSON */;
    storageMetadata?: string | null /** Optional metadata for the workflowRuntimeData */;
  }

  export interface WorkflowRuntimeStorageDataList extends Page {
    records?: (WorkflowRuntimeStorageData)[] | null;
    count?: number | null;
    offset: number;
    limit: number;
  }

  export interface ClusterList extends Page {
    records: Cluster[];
    count: number;
    offset: number;
    limit: number;
  }

  export interface ClusterNodeList extends Page {
    records: ClusterNode[];
    count: number;
    offset: number;
    limit: number;
  }

  export interface EngineConfigurationList extends Page {
    records: EngineConfiguration[];
    count: number;
    offset: number;
    limit: number;
  }

  export interface ExternalCredentialList extends Page {
    records: ExternalCredential[];
    count: number;
    offset: number;
    limit: number;
  }

  export interface SourceTypeCategoryList extends Page {
    records: SourceTypeCategory[];
    limit: number;
    offset: number;
    count?: number | null;
  }

  export interface SourceTypeList extends Page {
    records: SourceType[];
    count: number;
    offset: number;
    limit: number;
  }

  export interface CreateExecutionLocation {
    clusterId: string;
    nodeId?: string | null;
  }

  export interface UpdateExecutionLocation {
    id: string;
    clusterId: string;
    nodeId?: string | null;
  }

  export interface ExecutionLocationList extends Page {
    records: ExecutionLocation[];
    count: number;
    offset: number;
    limit: number;
  }

  export interface Bundle {
    id: string;
    organizationId?: string | null;
    clusterId?: string | null;
    nodeId?: string | null;
    name?: string | null;
    externalCredentialId?: string | null;
    testRun?: boolean | null;
    selectDetail?: BundleSelectDetail | null;
    selectCategory?: string | null;
    bundleResults?: BundleResults | null;
    bundleStarted?: DateTime | null;
    previousBundleStarted?: DateTime | null;
    bundleCompleted?: DateTime | null;
    deletedDate?: DateTime | null;
    createdDate?: DateTime | null;
    updatedDate?: DateTime | null;
    scheduleDefinition?: BundleScheduleDefinition | null;
    nextScheduledTime?: DateTime | null;
  }

  export interface BundleSelectDetail {
    category: string;
    select?: string[] | null /** Array of file types to include. */;
    paths?: string[] | null /** Array of paths to search from. */;
    files?: (string)[] | null /** Array of files to search from. */;
    tasks?: (BundleSelectDetailTask)[] | null /** Array of tasks to run for each job. */;
    afterTime?: DateTime | null /** Include items after this time. */;
    beforeTime?: DateTime | null /** Include items before this time. */;
    recursiveDescent: boolean;
    service?: BundleService | null;
  }

  export interface BundleSelectDetailTask {
    engineId: string /** Id of engine. */;
  }

  export interface BundleService {
    serviceType?: string | null;
    region?: string | null;
    bucketName?: string | null;
  }

  export interface BundleResults {
    found: number;
    completed: number;
    errors: BundleError;
  }

  export interface BundleError {
    error: string;
  }

  export interface BundleScheduleDefinition {
    recurringStartTime?: DateTime | null;
    recurringEndTime?: DateTime | null;
    repeatDaysTimeInMinutes?: number | null;
    repeatDaysOfWeek?: (number)[] | null;
    repeatDaysOfMonth?: (number)[] | null;
    repeatMinutes?: number | null;
  }
  /** Fields required to request an internal token */
  export interface RequestInternalToken {
    rights: string[] /** List the rights requested. The list will be validated againstthe complete set of known rights returned by `availableRights`.Certain rights, such as `superadmin`, cannot be set on aninternal token. */;
    tag: string /** Provide a short, human-readable tag for the token.Must not contain spaces or special characters other than `.`, `-`, and `:`.Must be non-empty but not more than 32 characters long.The tag becomes part of the token and cannot be changed. */;
    label?:
      | string
      | null /** Provide a human-readable label. If not provided, the tag will be used.The label can be changed at any time. */;
  }
  /** Fields required to update an internal token */
  export interface UpdateInternalToken {
    id: string /** ID of the token to update */;
    rights?:
      | string[]
      | null /** List the rights requested. The list will be validated againstthe complete set of known rights returned by `availableRights`.Certain rights, such as `superadmin`, cannot be set on aninternal token. */;
    label?: string | null /** Provide a human-readable label.Approval is not needed for a label change. */;
  }

  export interface ApproveInternalToken {
    id: string /** ID of the internal token to approve.Note that a user cannot approve their own request.The actual token ID _or_ the request ID can be used toapprove the token. */;
  }

  export interface RevokeInternalToken {
    id: string /** ID of the internal token to revoke. */;
  }
  /** Specifies an "order by" entry in the `auditLog` query */
  export interface AuditLogOrderBy {
    field?: AuditLogOrderByField | null;
    direction?: OrderDirection | null;
  }

  export interface TaskDateTimeFilter {
    toDateTime?: DateTime | null;
    fromDateTime?: DateTime | null;
    field: TaskDateTimeField;
  }

  export interface EngineFilter {
    language?: string | null /** Language supported by the engine */;
    category?: (string)[] | null /** provide a list of engine category names to filter by */;
    type?: EngineTypeFilter[] | null /** provide a list of engine type names to filter by */;
    rating?: (number)[] | null /** Provide a list of rating from 0 to 5 to filter by. */;
    deploymentModel?: DeploymentModel | null /** Specify the deployment model of the engine. */;
    priceMin?: number | null /** Specify the minimum price of the engine. */;
    priceMax?: number | null /** Specify the maximum price of the engine. */;
    fedRampImpactLevelMin?: number | null /** Specify the minimum FedRamp impact level of the engine. */;
    fedRampImpactLevelMax?: number | null /** Specify the minimum FedRamp impact level of the engine. */;
    trainableViaApi?: boolean | null /** Filter engines that can be trainable via API. */;
    clusterSize?: ClusterSize | null /** Filter engines by cluster size. */;
    gpuSupported?: SupportedGpu | null /** Filter engines by gpu supported. */;
    mode?: EngineMode[] | null /** Provide a list of engine modes to filter by */;
    runtimeType?: string[] | null /** Provide a list of runtime types to filter by */;
  }

  export interface EngineSortField {
    field: EngineOrderField;
    direction?: OrderDirection | null;
  }

  export interface SchemaOrder {
    field: SchemaOrderFields;
    direction?: OrderDirection | null;
  }
  /** Source list sort information */
  export interface SourceSortField {
    field: SourceOrderField /** Specify the field to sort by. Required. */;
    direction?: OrderDirection | null /** Specify the sort direction. Default is descending. */;
  }

  export interface JobSortField {
    field: JobOrderField;
    direction?: OrderDirection | null;
  }

  export interface JobDateTimeFilter {
    toDateTime?: DateTime | null;
    fromDateTime?: DateTime | null;
    field: JobDateTimeField;
  }
  /** Specify a filter on a TemporalDataObject date/time field.At least one of `toDateTime` and `fromDateTime` must be provided. */
  export interface TemporalDataObjectDateTimeFilter {
    toDateTime?: DateTime | null /** Match if the field value is `toDateTime` or earlier */;
    toDateTimeExclusive?: boolean | null /** Whether the toDateTime is inclusive or exclusive of the input timestamp */;
    fromDateTime?: DateTime | null /** Match if the field value is `fromDateTime` or later */;
    fromDateTimeExclusive?:
      | boolean
      | null /** Whether the fromDateTime is inclusive or exclusive of the input timestamp */;
    field: TemporalDataObjectDateTimeField /** Identify the field to filter on. */;
  }

  export interface CreateProcessTemplate {
    name: string;
    taskList: JsonData;
  }

  export interface UpdateProcessTemplate {
    id: string;
    taskList: JsonData;
  }

  export interface UpdateJobs {
    ids?: string[] | null;
    status?: UpdateJobsStatus | null;
  }

  export interface CreateMentions {
    mentions?: CreateMention[] | null;
  }

  export interface CreateMention {
    mediaId: string;
    programId: string;
    mentionDateTime: DateTime;
    mentionHitCount: number;
    mentionStatusId?: number | null;
    watchlistId?: string | null;
    cognitiveEngineResultsString?: string | null;
    snippetsString?: string | null;
    hitStartDateTime?: DateTime | null;
    hitEndDateTime?: DateTime | null;
    mentionEndDateTime?: DateTime | null;
    metadata?: JsonData | null;
    queryTerm?: string | null;
  }

  export interface CreateFolderContentTempate {
    folderId: string /** The ID of folder */;
    sdoId: string /** The ID of Structure Data Object */;
    schemaId: string /** The ID of Data Registry */;
    data?: JsonData | null;
  }

  export interface UpdateFolderContentTempate {
    id: string /** The ID of Folder Content Template */;
    folderId?: string | null /** The ID of folder */;
    sdoId?: string | null /** The ID of Structure Data Object */;
    schemaId?: string | null /** The ID of Data Registry */;
    data?: JsonData | null;
  }

  export interface CreateSavedSearch {
    name: string;
    sharedWithOrganization?: boolean | null;
    csp: JsonData;
  }

  export interface ReplaceSavedSearch {
    id: string;
    name: string;
    sharedWithOrganization?: boolean | null;
    csp: JsonData;
  }

  export interface GetEngineJwt {
    engineId: string /** The ID of the engine that created the asset */;
    resource: GetEngineJwtResource /** The set of IDs by resource type */;
  }

  export interface GetEngineJwtResource {
    tdoId?: string | null;
    jobId: string;
    taskId: string;
  }

  export interface ChangePassword {
    oldPassword: string /** The current user's old password. Must be provided even if theuser is otherwise authenticated as an additional security check. */;
    newPassword: string /** The new password. May be subject to validation rules dependingon the organization or environment system policy. */;
  }

  export interface CreateSubscription {
    targetId: string /** ID of the object (probably a watchlist) to create a subscription for */;
    objectType?: SubscriptionObjectType | null;
    contact: CreateSubscriptionContact;
    frequency?: SubscriptionFrequency | null;
    scheduledDay?: DayOfWeek | null;
    scheduledTime?: Time | null;
    scheduledTimeZone?: string | null;
  }

  export interface CreateSubscriptionContact {
    emailAddress?: string | null;
    phoneNumber?: string | null;
    webhookUri?: string | null;
  }
  /** Used to create a subscription while creating a watchlist.The subscription will be for the new watchlist. */
  export interface CreateSubscriptionInWatchlist {
    objectType?: SubscriptionObjectType | null;
    contact: CreateSubscriptionContact;
    frequency?: SubscriptionFrequency | null;
    scheduledDay?: DayOfWeek | null;
    scheduledTime?: Time | null;
    scheduledTimeZone?: string | null;
  }

  export interface UpdateSubscription {
    id: string;
  }

  export interface FileWatchlist {
    watchlistId: string /** ID of the TDO to file */;
    folderId: string /** ID of the new parent folder */;
    orderIndex?:
      | number
      | null /** Order index determining in what order the watchlist will be displayedrelative to other objects at the same level */;
  }

  export interface UnfileWatchlist {
    watchlistId: string /** ID of the watchlist to unfile */;
    folderId: string /** ID of the parent folder. The watchlist will be removed from this folder. */;
  }

  export interface ShareFolderInput {
    treeObjectId: string /** The treeObjectId of the Folder to share */;
    readOrganizationIds?: (number)[] | null /** The organizations that will have read permissions to the Folder */;
    writeOrganizationIds?: (number)[] | null /** The organizations that will have write permissions to the Folder */;
  }

  export interface CreateTdoWithAsset {
    status?: string | null /** TDO status, such as "recorded" (the default) */;
    name?: string | null /** A name for the TDO object, such as the name of the primary media file. */;
    startDateTime: DateTime /** Start date and time for the file */;
    stopDateTime?: DateTime | null /** Stop date and time. If not passed, the serverwill apply a value based on the defaultchunk size of 15 minutes. */;
    sourceId?: string | null /** The ingestion source ID for this file */;
    contentType?: string | null /** Content type for the file.Default is "video/mp4" */;
    uri?: string | null /** The file location or URI. */;
    file?: UploadedFile | null;
    scheduledJobId?:
      | string
      | null /** Deprecated - use scheduledJobIdscheduleId: ID # @deprecated(reason: "use scheduledJobId")The scheduled job ID. */;
    isPublic?:
      | boolean
      | null /** True if the new TDO should be made public. If true, security.globalwill be set to true and users from other organizations will be able toview, but not modify, the TDO's metadata and assets. */;
    parentFolderId?:
      | string
      | null /** An optional parent folder ID for the new TemporalDataObject.The folder can be filed in additional folders later using `fileTemporalDataObject`,or un-filed from this one. */;
    assetType?: string | null /** Asset type. Default is "media". */;
    sourceData?: SetTdoSourceData | null /** Optionally, set source data for this TDO. Source data identifiesthat task that generated this TDO. If the TDO was not generated as partof engine or adapter execution, this field should not be set.However, it is _strongly_ recommended that engines that create TDOsset this field. Doing so ensures that later tasks in the same jobhave appropriate access to the new TDO.This source data will be set on both the TDO and the asset. */;
    details?: JsonData | null;
    contentTemplates?:
      | CreateTdoContentTemplateWithTdo[]
      | null /** Optionally, specify one or more structured data objects to apply ascontent templates to the TDO. They will be stored as assets of typecontent-template and will contain an immutable copy of the original data. */;
    addToIndex?:
      | boolean
      | null /** Optionally, add the new data to the search index. If the data is notindexed on creation, it can be indexed later by using `updateTDO` orcreating a suitable job. */;
    thumbnailUrl?: string | null /** An optional thumbnail URL for the TDO */;
    sourceImageUrl?: string | null /** An optional image representing the TDO source */;
  }
  /** Identifies the task that created a TDO. */
  export interface SetTdoSourceData {
    taskId?: string | null /** ID of the task that created this TDO */;
    sourceId?:
      | string
      | null /** Optional ID of the source from which this TDO's initialdata was created. This field will typically be set onlyby adapters that ingest data and create TDOs. */;
    scheduledJobId?: string | null /** Optional ID of the scheduled job that created this TDO. */;
  }

  export interface CreateTdoContentTemplateWithTdo {
    schemaId: string /** Supply the ID of the data registry that contains the schemafor the content template. */;
    sdoId?:
      | string
      | null /** To associate an existing structured data object (SDO) to theTDO, provide the SDO ID. Either this field or data must be supplied. */;
    data?: JsonData | null /** To create a new structured data object, supply this field withJSON to save in the SDO. The JSON must comply with the schemadefined in data registry. */;
  }

  export interface FileTemporalDataObject {
    tdoId: string /** ID of the TDO to file */;
    folderId: string /** ID of the new parent folder */;
    orderIndex?:
      | number
      | null /** Order index determining in what order the new TDO will be displayedrelative to other TDOs at the same level */;
  }

  export interface UnfileTemporalDataObject {
    tdoId: string /** ID of the TDO to unfile */;
    folderId: string /** ID of the parent folder. The TDO will be removed from this folder. */;
  }

  export interface MoveTemporalDataObject {
    tdoId: string /** ID of the TDO to move */;
    oldFolderId: string /** ID of the original parent folder. The TDO will be removed from this folder. */;
    newFolderId: string /** ID of the new parent folder. The TDO will be added to this folder. */;
  }
  /** Fields needed to upload and store an engine result using multipart form POST. */
  export interface UploadEngineResult {
    taskId: string /** ID of the task that created this engine result */;
    outputString?:
      | string
      | null /** A string containing the engine result.Use either this field, `output`, or `file` with multipart form POST, but notmore than one. */;
    output?: JsonData | null /** JSON data containing the engine result.A string containing the engine result.Use either this field, `outputString`, or `file` with multipart form POST, but notmore than one. */;
    file?: UploadedFile | null /** A file to upload. Use multipart form POST to submit this field.Use either this field or the `outputString` field, not both. */;
    filename?: string | null /** The file name */;
    assetType?:
      | string
      | null /** The type of asset to create. Optional -- if not set, it will bededuced from the engine category. */;
    contentType?:
      | string
      | null /** The content type of the file. Optional -- if not set, it willbe deduced from the file name. */;
    completeTask?: boolean | null /** Whether or not to mark the task as complete. Defaults to true. */;
    outputJsonKey?:
      | string
      | null /** If the result data uploaded is not a valid JSON string, thenthe task output data stored on the task object will be wrapped intoa JSON object using this key. The asset created, however, is notmodified in any way. */;
    fileData?: SetAssetFileData | null /** Optionally, set attributes about the file */;
    setAsPrimary?:
      | boolean
      | null /** if true, sets the new asset to be the primary asset of its type.Only certain asset types, such as "media" and "transcript",can have primary assets. */;
    skipIndexing?:
      | boolean
      | null /** Skips indexing the engine result, preventing mentions from beinggenerated over the results. */;
    setTaskOutput?:
      | boolean
      | null /** Whether or not to set the legacy `task_output` data for compatiblewith older clients. */;
  }
  /** Input type for AssetFileData */
  export interface SetAssetFileData {
    md5sum?: string | null /** The MD5 checksum of the file */;
    size?: number | null /** The file size in bytes */;
    originalFileUri?: string | null /** Original file URI, if provided on asset creation */;
    mode?: AssetCreationMode | null /** The insertion mode of the asset */;
  }
  /** Input fields required by the userLogin mutation. */
  export interface UserLogin {
    userName: string /** The user login name -- typically, email address. */;
    password: string /** The user password. Note that this value is only ever transmitted overthe encrypted SSL protocol. */;
  }
  /** Information required to create a new folder.After creation, a folder can be renamed with the `updateFolder` mutation,but no other changes are supported. */
  export interface CreateFolder {
    name: string /** The folder name */;
    description: string /** The folder description */;
    parentId: string /** ID of the parent folder underneath which the new folder will be placed. */;
    rootFolderType?: RootFolderType | null /** Root folder type to apply to the new folder */;
    orderIndex?:
      | number
      | null /** Order index determining in what order the new folder will be displayedrelative to other folders at the same level. */;
  }
  /** Information required to update a folder.Currently, the folder can be renamed. No other changes are supported. */
  export interface UpdateFolder {
    id: string /** ID of the folder to update */;
    name: string /** New name for the folder. */;
  }
  /** Move a folder into a new parent folder. */
  export interface MoveFolder {
    treeObjectId: string;
    prevParentTreeObjectId: string;
    newParentTreeObjectId: string;
    newOrderIndex: number;
    prevOrderIndex: number;
    rootFolderType?: RootFolderType | null;
  }
  /** Delete a folder */
  export interface DeleteFolder {
    id: string /** ID of the folder to delete */;
    orderIndex: number;
  }
  /** Payload required to create a temporal data object */
  export interface CreateTdo {
    startDateTime: DateTime /** Start date and time in numerical (epoch) format. */;
    stopDateTime: DateTime /** Stop date and time in numerical (epoch) format. */;
    source?: string | null /** Source for the TDO, such as an ingestion type or engine ID. */;
    status?:
      | string
      | null /** Status, such as "downloaded" or "recording".The server will set a value if one is not provided. */;
    name?: string | null /** A name for the TDO object, such as the name of the primary media file. */;
    description?: string | null /** A description for the TDO object. */;
    isPublic?:
      | boolean
      | null /** True if the new TDO should be made public. If true, security.globalwill be set to true and users from other organizations will be able toview, but not modify, the TDO's metadata and assets. */;
    parentFolderId?:
      | string
      | null /** An optional parent folder ID for the new TemporalDataObject.The folder can be filed in additional folders later using `fileTemporalDataObject`,or un-filed from this one. */;
    sourceData?: SetTdoSourceData | null /** Optionally, set source data for this TDO. Source data identifiesthat task that generated this TDO. If the TDO was not generated as partof engine or adapter execution, this field should not be set.However, it is _strongly_ recommended that engines that create TDOsset this field. Doing so ensures that later tasks in the same jobhave appropriate access to the new TDO. */;
    details?: JsonData | null;
    applicationId?: string | null /** Only internal systems can set this value */;
    contentTemplates?:
      | CreateTdoContentTemplateWithTdo[]
      | null /** Optionally, specify one or more structured data objects to apply ascontent templates to the TDO. They will be stored as assets of typecontent-template and will contain an immutable copy of the original data. */;
    addToIndex?:
      | boolean
      | null /** Optionally, add the new data to the search index. If the data is notindexed on creation, it can be indexed later by using `updateTDO` orcreating a suitable job. */;
    thumbnailUrl?: string | null /** An optional thumbnail URL for the TDO */;
    sourceImageUrl?: string | null /** An optional image representing the TDO source */;
  }
  /** Payload required to create a temporal data object */
  export interface UpdateTdo {
    id: string /** ID of the TDO to update */;
    startDateTime?: DateTime | null /** Start date and time in numerical (epoch) format. */;
    stopDateTime?: DateTime | null /** Stop date and time in numerical (epoch) format. */;
    source?: string | null /** Source for the TDO, such as an ingestion type or engine ID. */;
    status?: string | null /** Current status, such as "downloaded" or "recording". */;
    name?: string | null /** A name for the TDO object, such as the name of the primary media file. */;
    description?: string | null /** A description for the TDO object. */;
    primaryAsset?: SetPrimaryAsset[] | null /** Set the primary asset of a given type (transcript or media) */;
    isPublic?:
      | boolean
      | null /** True if the new TDO should be made public. If true, security.globalwill be set to true and users from other organizations will be able toview, but not modify, the TDO's metadata and assets. */;
    details?: JsonData | null;
    contentTemplates?:
      | CreateTdoContentTemplateWithTdo[]
      | null /** Optionally, specify one or more structured data objects to apply ascontent templates to the TDO. They will be stored as assets of typecontent-template and will contain an immutable copy of the original data.Setting this field on an update does _not_ affect any content templatespreviously added to the TDO -- it only creates the new ones. */;
    thumbnailUrl?: string | null /** An optional thumbnail URL for the TDO */;
    sourceImageUrl?: string | null /** An optional image representing the TDO source */;
  }
  /** Input used to set the primary asset of a given type on a TDO.The type must be supported by the server; primary asset is usedby certain engines and front end components.Currently "media" and "transcript" are supported. */
  export interface SetPrimaryAsset {
    id: string /** ID of the asset */;
    assetType: string /** The asset type -- "media" or "transcript" */;
  }

  export interface RequestClone {
    sourceApplicationId: string;
    destinationApplicationId: string;
    cloneBlobs?: boolean | null;
  }

  export interface CreateWidget {
    widgetId?: string | null;
    collectionId: string;
    organizationId?: string | null;
    folderId?: string | null;
    name?: string | null;
    adScript?: string | null;
    width?: number | null;
    numberOfMentionsToShow?: number | null;
    displayLogo?: boolean | null;
    displayCollectionName?: boolean | null;
    displayMentionIntro?: boolean | null;
    displayTranscription?: boolean | null;
    seoTags?: (string)[] | null;
    backgroundColor?: string | null;
    borderColor?: string | null;
    textColor?: string | null;
  }

  export interface UpdateWidget {
    id?: string | null;
    widgetId?: string | null;
    name?: string | null;
    organizationId?: string | null;
    collectionId: string;
    displayCollectionName?: boolean | null;
    displayTranscription?: boolean | null;
    width?: number | null;
    numberOfMentionsToShow?: number | null;
    adScript?: string | null;
    seoTags?: (string)[] | null;
    backgroundColor?: string | null;
    borderColor?: string | null;
    textColor?: string | null;
    createdDateTime?: DateTime | null;
    displayLogo?: boolean | null;
    displayMentionIntro?: boolean | null;
  }

  export interface CreateApplication {
    name: string;
    key: string;
    category?: string | null;
    description: string;
    iconUrl?: string | null;
    iconSvg?: string | null;
    url: string;
    oauth2RedirectUrls?: (string)[] | null;
    checkPermissions: boolean;
    permissionsRequired?: (string)[] | null;
    deploymentModel?: DeploymentModel | null;
    contextMenuExtensions?: CreateContextMenuExtensions | null;
  }

  export interface CreateContextMenuExtensions {
    mentions?: (CreateContextMenuExtension)[] | null;
    tdos?: (CreateContextMenuExtension)[] | null;
    watchlists?: (CreateContextMenuExtension)[] | null;
    collections?: (CreateContextMenuExtension)[] | null;
  }

  export interface CreateContextMenuExtension {
    label: string;
    url: string;
  }

  export interface UpdateApplication {
    id: string;
    name?: string | null;
    status?: ApplicationStatus | null;
    category?: string | null;
    description?: string | null;
    iconUrl?: string | null;
    iconSvg?: string | null;
    url?: string | null;
    oauth2RedirectUrls?: string[] | null;
    checkPermissions?: boolean | null;
    permissionsRequired?: string[] | null;
    deploymentModel?: DeploymentModel | null;
    contextMenuExtensions?: UpdateContextMenuExtensions | null;
  }

  export interface UpdateContextMenuExtensions {
    mentions?: (UpdateContextMenuExtension)[] | null;
    tdos?: (UpdateContextMenuExtension)[] | null;
    watchlists?: (UpdateContextMenuExtension)[] | null;
    collections?: (UpdateContextMenuExtension)[] | null;
  }

  export interface UpdateContextMenuExtension {
    id?: string | null;
    label: string;
    url: string;
  }

  export interface ApplicationWorkflow {
    id: string;
    action: ApplicationWorkflowAction;
  }
  /** Input type for AssetSourceData */
  export interface SetAssetSourceData {
    name?: string | null /** The name of the asset source engine or engine category */;
    taskId?: string | null /** ID of the specific task that created the asset */;
    engineId?: string | null /** ID of the engine that created the asset */;
    sourceId?:
      | string
      | null /** Optional ID of the source from which this assetwas created. This field will typically be set onlyby adapters that ingest data. */;
    scheduledJobId?: string | null /** Optional ID of the scheduled job that created this asset */;
    assetId?:
      | string
      | null /** Optional ID of the asset this asset was created from.This will usually be assets with edits to a previousasset. */;
  }

  export interface CreateTaskLog {
    taskId: string /** ID of the task which the task long belongs to. */;
    file?: UploadedFile | null /** A file to upload. Use multipart form POST to submit this field. */;
  }

  export interface CreateAsset {
    containerId: string /** ID of the parent container, a TemporalDataObject, for the new asset */;
    contentType?: string | null /** A valid MIME type */;
    description?: string | null /** An optional description for the asset */;
    file?: UploadedFile | null /** A file to upload. Use multipart form POST to submit this field. */;
    md5sum?: string | null /** Optional expected checksum for the file */;
    type?:
      | string
      | null /** Asset type - deprecated (use type)assetType: String # @deprecated(reason: "use `type` instead")The asset type. Either this or assetType must be provided. */;
    uri?:
      | string
      | null /** URI to the asset data. Optional -- if a file is provided, the URIwill be computed by the server. */;
    fileData?: SetAssetFileData | null /** Optionally, set attributes about the file */;
    sourceData?: SetAssetSourceData | null /** Optionally, set attributes about the source engine and task */;
    details?: JsonData | null /** Application- or type-specific metadata */;
    name?: string | null /** File or other name */;
    jsondata?: JsonData | null /** Deprecated. Set `fileData`, `sourceData`, or `details` instead. */;
    setAsPrimary?:
      | boolean
      | null /** if true, sets the new asset to be the primary asset of its type.Only certain asset types, such as "media" and "transcript",can have primary assets. */;
    isUserEdited?: boolean | null /** Set to true if this asset was created by editing another asset. */;
  }
  /** Input needed to update an asset. The asset data itself -- file or URI --is immutable. Only supplemental metadata can be updated with this input type. */
  export interface UpdateAsset {
    id: string /** The asset ID. Required. */;
    description?: string | null /** The asset description. */;
    name?: string | null /** File name or other name for the asset */;
    fileData?: SetAssetFileData | null /** Optionally, set attributes about the file */;
    sourceData?: SetAssetSourceData | null /** Optionally, set attributes about the source engine and task */;
    details?: JsonData | null /** Application- or type-specific metadata */;
  }

  export interface CreateEntity {
    name: string;
    description?: string | null;
    libraryId: string;
    profileImageUrl?: string | null;
    jsondata?: JsonData | null /** GraphQL-formatted JSON-like structure containing freeform metadata.If a schema is associated with the entity type, the input will bevalidated against the schema. Use this field _or_ `jsonstring`, not both. */;
    jsonstring?:
      | string
      | null /** A string containing valid JSON with freeform metadata.If a schema is associated with the entity type, the input will bevalidated against the schema. Use this field _or_ `jsondata`, not both. */;
    isPublished?: boolean | null;
  }

  export interface UpdateEntity {
    id: string;
    name?: string | null;
    description?: string | null;
    profileImageUrl?: string | null;
    jsondata?: JsonData | null /** GraphQL-formatted JSON-like structure containing freeform metadata.If a schema is associated with the entity type, the input will bevalidated against the schema. Use this field _or_ `jsonstring`, not both. */;
    jsonstring?:
      | string
      | null /** A string containing valid JSON with freeform metadata.If a schema is associated with the entity type, the input will bevalidated against the schema. Use this field _or_ `jsondata`, not both. */;
  }

  export interface CreateEntityIdentifierType {
    label: string;
    labelPlural: string;
    iconClass?: string | null;
    description?: string | null;
    dataType: EntityIdentifierDataType;
    id: string;
  }

  export interface UpdateEntityIdentifierType {
    id: string;
    label?: string | null;
    labelPlural?: string | null;
    iconClass?: string | null;
    description?: string | null;
    dataType?: EntityIdentifierDataType | null;
  }

  export interface CreateEntityIdentifier {
    entityId: string;
    identifierTypeId: string;
    title?: string | null;
    isPriority?: boolean | null;
    url?: string | null;
    jsondata?: JsonData | null /** GraphQL-formatted JSON-like structure containing freeform metadata.If a schema is associated with the entity type, the input will bevalidated against the schema. Use this field _or_ `jsonstring`, not both. */;
    jsonstring?:
      | string
      | null /** A string containing valid JSON with freeform metadata.If a schema is associated with the entity type, the input will bevalidated against the schema. Use this field _or_ `jsondata`, not both. */;
    contentType: string;
    file?: UploadedFile | null;
    entityType?: CreateEntityType | null;
    profileUpdateMode?: SetEntityProfileImage | null /** If the entity identifier type is image, the new file can automaticallybe set on the entity as its profile image. This is off by default(the entity profile image is not modified) but can be controlledwith this parameter. */;
  }

  export interface CreateEntityType {
    name: string;
    namePlural: string;
    schema: JsonData;
  }

  export interface UpdateEntityIdentifier {
    id: string;
    title?: string | null;
    isPriority?: boolean | null;
    url?: string | null;
    jsondata?: JsonData | null /** GraphQL-formatted JSON-like structure containing freeform metadata.If a schema is associated with the entity type, the input will bevalidated against the schema. Use this field _or_ `jsonstring`, not both. */;
    jsonstring?:
      | string
      | null /** A string containing valid JSON with freeform metadata.If a schema is associated with the entity type, the input will bevalidated against the schema. Use this field _or_ `jsondata`, not both. */;
  }

  export interface CreateLibraryType {
    id: string;
    label: string;
    iconClass?: string | null;
    entityIdentifierTypeIds?: string[] | null;
    entityType: CreateEntityType;
  }

  export interface UpdateLibraryType {
    id: string;
    label: string;
    iconClass?: string | null;
    entityIdentifierTypeIds?: string[] | null;
    entityType?: UpdateEntityType | null;
  }

  export interface UpdateEntityType {
    name?: string | null;
    namePlural?: string | null;
    schema?: JsonData | null;
  }

  export interface CreateLibrary {
    name: string;
    applicationId?: string | null;
    organizationId?: string | null;
    libraryTypeId: string;
    coverImageUrl?: string | null;
    description?: string | null;
  }

  export interface UpdateLibrary {
    id: string;
    name?: string | null;
    coverImageUrl?: string | null;
    description?: string | null;
    libraryTypeId?: string | null;
    version?: number | null;
  }

  export interface CreateLibraryEngineModel {
    engineId: string /** ID of the engine the model is used by */;
    libraryId: string /** ID fo the library containing this engine model. */;
    trainJobId?: string | null /** Id of the train job. */;
    trainStatus?: LibraryEngineModelTrainStatus | null;
    dataUrl?:
      | string
      | null /** The URL to a file containing or related to the engine model.Use this field if the data is stored in a separate, internet-accessiblelocation and not managed by Veritone APIs.You may also use `updateLibraryEngineModel` to upload a data file. */;
    jsondata?: JsonData | null /** Optional free-form block containing engine-specific metadata. */;
  }

  export interface UpdateLibraryEngineModel {
    id: string /** ID of the library engine model to update. */;
    trainJobId?: string | null /** Id of the train job. */;
    trainStatus?: LibraryEngineModelTrainStatus | null /** Status of the train job. */;
    dataUrl?:
      | string
      | null /** The URL to a file containing or related to the engine model.Submit either this field _or_ `file`, not both.Use this field if the data is stored in a separate, internet-accessiblelocation and not managed by Veritone APIs. */;
    jsondata?: JsonData | null /** Optional free-form block containing engine-specific metadata. */;
    contentType?:
      | string
      | null /** If a file is uploaded, you can explicitly specify the content type(a valid MIME type string) with this field. Often this is not necessaryas the HTTP multipart form POST client will set content type on thefile object implicitly. */;
    file?: UploadedFile | null /** An optional data file containing or related to the engine model.Use multipart form POST to submit this field.Submit either this field _or_ `dataUrl`, not both. If a file isuploaded, the server will store it and then set `dataUrl` toits location. */;
  }

  export interface CreateEngineDependency {
    dependencyType: string /** The category type this engine depends on.Must be a valid categoryType from an existing EngineCategory. */;
    assetType?: string | null /** An optional asset type that the engine will expect to havebeen created. */;
  }

  export interface UpdateEngineDependency {
    dependencyType?:
      | string
      | null /** The category type this engine depends on.Must be a valid categoryType from an existing EngineCategory. */;
    assetType?: string | null /** An optional asset type that the engine will expect to havebeen created. */;
  }
  /** Input fields used to create a new engine. */
  export interface CreateEngine {
    isPublic?:
      | boolean
      | null /** Indicates whether or not the engine should be public -- visible to andusable by users outside the creator's organization.Typically an engine should not be made public until it has been fullyconfigured and tested in production. */;
    name: string /** Human-readable name for the engine */;
    description?: string | null /** An optional description for the engine. */;
    categoryId: string /** The engine category */;
    deploymentModel: DeploymentModel /** The engine deployment model. See the DeploymentModel enum for options. */;
    price?: number | null /** An optional price indicator for the engine. */;
    fields?:
      | CreateEngineField[]
      | null /** Optionally, supply custom fields that the user can set when launchingthe engine. See developer documentation for details. */;
    iconPath?: string | null /** The path for an icon image */;
    logoPath?: string | null /** The path for a logo image */;
    libraryRequired?: boolean | null /** Whether or not the engine requires a library. */;
    createsTDO?: boolean | null /** Whether or not the engine creates a TDO */;
  }

  export interface CreateEngineField {
    max?: number | null /** Maximum value, in float format. Applies only to fields of type Number. */;
    min?: number | null /** Minimum value, in float format. Applies only to fields of type Number. */;
    step?:
      | number
      | null /** Numerical step by which the value should be incremented or decremented inthe user interface, in float format. Applies only to fields of type Number. */;
    type: EngineFieldType /** The field type. */;
    info?: string | null /** General information about the field, such as a description. */;
    name: string /** A machine-readable name, or key, for the field. */;
    label: string /** A human-readable label for the field. */;
    options?:
      | CreateEngineFieldPicklistOption[]
      | null /** A set of allowed values for the field. Applies only to fields of typepicklist or multi-picklist. */;
    defaultValue?:
      | string
      | null /** An optional default value for the field. Taken in string format, butapplies to all field types. */;
    defaultValues?:
      | string[]
      | null /** Optional default values to apply to a picklist. This fieldshould only be set for a field of type multi-picklist. */;
  }
  /** Represents one allowed option in a picklist. */
  export interface CreateEngineFieldPicklistOption {
    key: string /** The human-readable label for the option, such as "English-US" for a language selector. */;
    value: string /** The machine-readable value that will be sent in the engine payload, such as"en-us" for a language selector. */;
  }
  /** Input fields used to update an existing engine. */
  export interface UpdateEngine {
    id: string /** Supply the ID of the engine to update */;
    isPublic?:
      | boolean
      | null /** Indicates whether or not the engine should be public -- visible to andusable by users outside the creator's organization.Typically an engine should not be made public until it has been fullyconfigured and tested in production. */;
    name?:
      | string
      | null /** Human-readable name for the engine. Changing this value will changehow the engine appears to users. */;
    description?: string | null;
    categoryId?: string | null;
    deploymentModel?: DeploymentModel | null /** The engine deployment model. See the DeploymentModel enum for options. */;
    price?: number | null /** An optional price indicator for the engine. */;
    fields?:
      | CreateEngineField[]
      | null /** Optionally, supply custom fields that the user can set when launchingthe engine. See developer documentation for details. To update the fields,make sure you supply the complete set of new fields -- new fields,updated existing fields, and unmodified existing fields. */;
    iconPath?: string | null /** The path for an icon image */;
    logoPath?: string | null /** The path for a logo image */;
    libraryRequired?: boolean | null /** Whether or not the engine requires a library. */;
  }

  export interface EngineWorkflow {
    id: string;
    action: EngineWorkflowAction;
  }

  export interface UpdateTask {
    id: string;
    status: TaskStatus;
    jobId?: string | null;
    output?: JsonData | null;
    outputString?: string | null /** Task output as JSON string */;
    outputJsonKey?:
      | string
      | null /** Use this parameter if your task output does not take the form of validJSON. Provide a key and the server will convert your output intoJSON with a single string value. For example,```mutation {updateTask(input: {id: <id>outputString: "<xml><stuff id=\"value\">more stuff </stuff></xml>"outputJsonKey: "response"}) { id }}```Will set the task output JSON to` {"response":"<xml><stuff id=\"value\">more stuff </stuff></xml>"}` */;
    taskOutput?: JsonData | null /** Backwards compatibility only */;
    payload?: JsonData | null /** Update the task with a new payload */;
    executionLocationData?: JsonData | null /** Save execution location metadata */;
  }

  export interface PollTask {
    id: string;
    jobId: string;
    pollPayload?: JsonData | null;
  }

  export interface UpdateBuild {
    id: string;
    engineId: string;
    action: BuildUpdateAction;
    dockerImage?: string | null;
  }

  export interface CreateBuild {
    engineId: string;
  }

  export interface DeleteBuild {
    id: string;
    engineId: string;
  }

  export interface CreateJob {
    status?: string | null;
    targetId?: string | null;
    tasks?: CreateTask[] | null;
    retries?: number | null;
    scheduledJobId?:
      | string
      | null /** Optionally, specify the scheduled job ID that this job is associatedwith. Typically it is not necessary for a client to set this; it ishandled internally by the API. */;
    jobTemplateId?:
      | string
      | null /** Supply a job template ID to indicate that thisjob was created from the given job template.To create a job _from_ a template, use `launchJobTemplates`. */;
    skipDecider?: boolean | null;
    clusterId?:
      | string
      | null /** Optionally, specify a cluster ID where the job should run.Both the organization and the engine must have access to the cluster. */;
    jobConfig?: JsonData | null /** Optional job config information. Typically used only by Veritoneplatform components. */;
  }
  /** Fields required to create a task. Used when creating a job. */
  export interface CreateTask {
    taskType?:
      | string
      | null /** The task type, which is mapped on the server to an engine ID.Either taskType OR engineId is required. */;
    engineId?: string | null /** Engine ID to be used for the task.Either engineId OR taskType is required. */;
    payloadString?:
      | string
      | null /** Task payload in raw string form.Optional. Only one of payloadString and payload is permitted. */;
    payload?: JsonData | null /** Task payload in GraphQL format.Optional. Only one of payloadString and payload is permitted. */;
    isClone?: boolean | null /** Optional. Specifies whether or not the task target should be cloned. */;
    buildId?: string | null /** Optional. Specifies the build ID of the engine */;
    testTask?: boolean | null /** Optional. Specifies whether the task is for testing. */;
    standbyTask?: CreateTask | null /** Optionally, provide a task definition that will be executed ifand only if this one fails. Standby tasks can be nested. */;
  }

  export interface BulkDeleteContextMenuExtensions {
    ids?: string[] | null /** List of IDs of context menu extensions to delete */;
  }

  export interface CreateOrganization {
    name: string;
    applications?: JsonData | null;
    metadata: JsonData /** Metadata in JSON format. */;
    adminSeatLimit?: number | null;
    seatLimit?: number | null;
    status?: OrganizationStatus | null;
    maxAiwareNodes?: number | null;
    maxAiwareClusters?: number | null;
    businessUnit: string;
    integrations?: JsonData | null;
    types?: (OrganizationType)[] | null;
  }

  export interface CreateUser {
    name: string;
    jsondata?: JsonData | null /** Metadata in JSON format. If a field is provided elsewhere in thepayload, it does not need to be saved in jsondata. */;
    requestorId?: string | null /** User who requested that the new user be provisioned */;
    password?:
      | string
      | null /** Password for new user. Optional - if not provided, the user willneed to set on first login. */;
    organizationId: string;
    sendNewUserEmail?: boolean | null;
    email?: string | null;
    roleIds?: string[] | null;
    acls?: UserAclInput[] | null;
    firstName?: string | null /** Optionally, specify user's first name */;
    lastName?: string | null /** Optionally, specify user's last name */;
  }

  export interface UserAclInput {
    applicationId?: string | null;
    organizationId?: string | null;
    objectType?: string | null;
    objectId?: string | null;
    access?: UserAclAccessRightsInput | null;
    userId?: string | null;
  }

  export interface UserAclAccessRightsInput {
    owner?: boolean | null;
  }

  export interface UpdateUser {
    id: string;
    name?: string | null;
    jsondata?: JsonData | null;
    roleIds?: string[] | null;
    acls?: UserAclInput[] | null;
    firstName?: string | null /** Optionally, specify user's first name */;
    lastName?: string | null /** Optionally, specify user's last name */;
  }

  export interface CreatePasswordUpdateRequest {
    id: string /** The user's ID */;
    skipPasswordResetEmail?: boolean | null /** Optionally specify whether we should skip sending the reset email. */;
  }

  export interface CreatePasswordResetRequest {
    skipPasswordResetEmail?: boolean | null /** Optionally specify whether we should skip sending the reset email. */;
    userName: string /** The user login name. Typically email address. */;
  }

  export interface UpdateCurrentUser {
    passwordToken?: string | null /** Required if updating the MFA phone number */;
    mfaInfo?: UpdateMfaInfo | null /** New MFA info for the current user, optional */;
    userSetting?: UserSettingInfo | null /** New user settings for the current user, optional */;
    firstName?: string | null /** New first name for the current user, optional */;
    lastName?: string | null /** New last name for the current user, optional */;
    imageUrl?: string | null /** New image URL for the current user, optional */;
  }

  export interface UpdateMfaInfo {
    phoneNumber?: string | null;
  }

  export interface UserSettingInfo {
    key?: string | null;
    value?: string | null;
  }

  export interface GetCurrentUserPasswordToken {
    password?: string | null;
  }
  /** Fields used to update an organization. */
  export interface UpdateOrganization {
    id: string /** ID of the organization to update */;
    name?: string | null /** Name of the organization */;
    type?: string | null;
    seatLimit?: number | null;
    status?: string | null;
    applications?: string[] | null;
    businessUnit?: string | null;
    metadata?: JsonData | null /** Currently only Veritone administrators can modify this field. */;
    blacklist?: SetEngineBlacklist | null /** Update the engine blacklist for this organization.Currently only Veritone administrators can modify this field.Updating this field will completely replacing the existing engineand engine category blacklists with the IDs provided. */;
    whitelist?: SetEngineWhitelist | null /** Update the engine whitelist for this organization.Currently only Veritone administrators can modify this field.Updating this field will completely replacing the existing engineand whitelist with the IDs provided. */;
  }

  export interface SetEngineBlacklist {
    organizationId?:
      | string
      | null /** Provide the organization ID to update. This field is required onlywhen using addToEngineBlacklist or deleteFromEngineBlacklist. */;
    engineIds?: string[] | null /** Provide the IDs of engines to set. */;
    engineCategoryIds?: string[] | null /** Provide the IDs of engine categories to set. */;
  }

  export interface SetEngineWhitelist {
    organizationId?:
      | string
      | null /** Provide the organization ID to update. This field is required onlywhen using addToEngineWhitelist or deleteFromEngineWhitelist. */;
    engineIds?: string[] | null;
  }

  export interface SearchInput {
    offset?: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit?: number | null /** Maximum number of results that were retrieved in this query; page size */;
    index: (string)[];
    query: JsonData;
    select?: JsonData | null;
  }

  export interface MentionDateTimeFilter {
    toDateTime?: DateTime | null;
    fromDateTime?: DateTime | null;
    field: MentionDateTimeField;
  }

  export interface MentionOrderBy {
    field: MentionOrderByField;
    direction?: OrderDirection | null;
  }

  export interface CreateMentionComment {
    mentionId: string;
    commentText: string;
  }

  export interface UpdateMentionComment {
    mentionId: string;
    commentId: string;
    commentText: string;
  }

  export interface DeleteMentionComment {
    mentionId: string;
    commentId: string;
  }

  export interface CreateMentionRating {
    mentionId: string;
    ratingValue: number;
  }

  export interface UpdateMentionRating {
    mentionId: string;
    ratingId: string;
    ratingValue: number;
  }
  /** Input required to delete a mention rating.Both the rating and mention IDs must be provided.Only the rating will be deleted. */
  export interface DeleteMentionRating {
    mentionId: string /** The mention ID */;
    ratingId: string /** The rating ID */;
  }

  export interface CreateCollection {
    name: string /** the name of the collection */;
    folderDescription?: string | null /** description of the collection */;
    image?: string | null /** Collection image */;
  }

  export interface UpdateCollection {
    folderId: string /** id of the collection */;
    name?: string | null /** the name of the collection */;
    folderDescription?: string | null /** description of the collection */;
    image?: string | null /** Collection image */;
  }

  export interface ShareCollection {
    folderId: string /** id of the collection */;
    shareMessage?: string | null /** message in email */;
    recipients?: (string)[] | null /** list of recipients */;
    shareOptions?: ShareOptions | null /** Collection image */;
  }

  export interface ShareOptions {
    showImage?: boolean | null;
    showComments?: boolean | null;
    showRating?: boolean | null;
    showHeader?: boolean | null;
    showOrganizationLogo?: boolean | null;
    organizationLogoUrl?: boolean | null;
    showEngineResults?: boolean | null;
    showHits?: boolean | null;
    showAffiliateStripdown?: boolean | null;
    showDownload?: boolean | null;
    showDescription?: boolean | null;
  }

  export interface ShareMentionFromCollection {
    mentionId: string /** id of the mention from collection */;
    folderId: string /** id of the collection */;
    shareMessage?: string | null /** message in email */;
    recipients?: (string)[] | null /** list of recipients */;
    shareOptions?: ShareOptions | null /** Collection image */;
  }

  export interface CollectionMentionInput {
    folderId: string /** id of the collection */;
    mentionId: string /** id of the mention */;
  }

  export interface UpdateCognitiveSearch {
    id: string;
    profile?: JsonData | null;
    jsonstring?: string | null;
    mentionStatusId?: string | null;
  }

  export interface CreateCognitiveSearchInWatchlist {
    profile?: JsonData | null;
    jsonstring?: string | null /** String with JSON containing the cognitive search profiles */;
    mentionStatusId: string;
  }

  export interface CreateCognitiveSearch {
    profile?: JsonData | null;
    jsonstring?: string | null;
    mentionStatusId: string;
    watchlistId: string;
  }

  export interface CreateCognitiveSearchProfile {
    and?: (CreateCognitiveSearchProfile)[] | null;
    or?: (CreateCognitiveSearchProfile)[] | null;
    condition?: CreateCognitiveSearchCondition | null;
  }

  export interface CreateCognitiveSearchCondition {
    engineCategoryId: string;
    state: JsonData;
  }

  export interface CreateWatchlist {
    startDateTime?: DateTime | null /** Date and time at which the watchlist becomes effective.If not provided, defaults to current time. */;
    stopDateTime: DateTime /** Date and time at which the watchlist expires and is no longer effective. */;
    cognitiveSearches?: CreateCognitiveSearchInWatchlist[] | null;
    name: string;
    sourceTypeIds?: string[] | null;
    parentFolderId?: string | null /** Optional ID for a folder the watchlist should be filed in */;
    sourceIds?: string[] | null;
    details?: JsonData | null /** Set structured metadata on the watchlist.The data is subject to a set of schemas. */;
    searchIndex?: SearchIndex | null;
    subscriptions?: CreateSubscriptionInWatchlist[] | null;
  }

  export interface UpdateWatchlist {
    id: string;
    startDateTime?: DateTime | null;
    stopDateTime?: DateTime | null;
    name?: string | null;
    sourceTypeIds?: string[] | null;
    details?: JsonData | null /** Set structured metadata on the watchlist.The data is subject to a set of schemas. */;
    searchIndex?: SearchIndex | null;
    parentFolderId?: string | null;
    sourceIds?: string[] | null;
    subscriptions?: CreateSubscriptionInWatchlist[] | null;
    cognitiveSearches?: CreateCognitiveSearchInWatchlist[] | null;
  }

  export interface BulkUpdateWatchlist {
    stopDate?: DateTime | null /** New stop date for watchlist. Currently, this is the onlyfield that can be updated. */;
  }

  export interface BulkUpdateWatchlistFilter {
    ids?: string[] | null /** List of IDs of watchlists to update */;
  }

  export interface CreateIngestionConfiguration {
    applicationId: string;
    type: string;
    name: string;
    jsondata?: JsonData | null /** Container for arbitrary JSON-format metadata including configuration, etc. */;
    jsonstring?:
      | string
      | null /** String containing raw JSON-format metadata. You can specifyeither this value or jsondata, but not both. */;
  }

  export interface UpdateIngestionConfiguration {
    id: string;
    type?: string | null;
    name?: string | null;
    jsondata?: JsonData | null /** Container for arbitrary JSON-format metadata including configuration, etc. */;
    jsonstring?:
      | string
      | null /** String containing raw JSON-format metadata. You can specifyeither this value or jsondata, but not both. */;
  }

  export interface CreateDataRegistry {
    id?: string | null /** Optionally provide a forced ID */;
    name: string;
    description: string;
    source: string;
  }

  export interface UpdateDataRegistry {
    id: string;
    name: string;
    description: string;
    source: string;
  }

  export interface UpsertSchemaDraft {
    dataRegistryId: string;
    majorVersion?: number | null;
    schema: JsonData;
  }

  export interface UpdateSchemaState {
    id: string /** The schemaId to update */;
    status: SchemaStatus /** The new schema status */;
    breakingChanges?: boolean | null /** Specify if publishing this schema would break ingestion */;
  }

  export interface CreateStructuredData {
    id?: string | null /** Optionally provide a forced ID */;
    schemaId: string /** Id of the schema used to validate this object */;
    data?: JsonData | null;
    dataString?: string | null;
  }

  export interface DataRegistryVersion {
    id: string /** The id of the DataRegistry */;
    majorVersion: number /** The major version of the DataRegistry */;
  }

  export interface SendEmail {
    from: string;
    to: string;
    subject: string;
    message: string /** Message can be either text or HTML */;
    replyTo: string;
  }

  export interface CreateTriggers {
    events?:
      | string
      | null /** List of events in csv form. Use "*" to listen to all events. When using a wild card, csv form is no longer valid.Either events or types can be specified at a time. Example:events: "event1,event2,event3" // validevents: "*" // validevents: "*,event1" // invalid */;
    types?:
      | string
      | null /** List of events in csv form. Use "*" to listen to all types. When using a wild card, csv form is no longer valid.Either events or types can be specified at a time. Example:types: "type1,type2,type3" // validtypes: "*" // validtypes: "*,type1" // invalid */;
    targets?: (CreateTriggerType)[] | null /** Array of hook targets */;
  }

  export interface CreateTriggerType {
    name: CreateTriggerTarget /** The name of the trigger target. Currently we only supportWebhook, SMS, and Email */;
    params: JsonData /** The parameters for this hook. Must be a JSON payload. SeeHookTarget docs for supported kvp for each HookTarget type. */;
  }

  export interface CreateExportRequestForTdo {
    tdoId?:
      | string
      | null /** ID of the TDO to export fromEither this option _or_ mentionId must be provided.This option must be provided if includeMedia is set to true on CreateExportRequest */;
    mentionId?: string | null /** ID of the mention to export fromEither this option _or_ tdoId must be provided. */;
    startOffsetMs?:
      | number
      | null /** optional start offset in milliseconds for the export, relative to TDO startDateTime */;
    stopOffsetMs?:
      | number
      | null /** optional stop offset in milliseconds for the export, relative to the TDO stopDateTime. */;
    startDate?: DateTime | null /** optional start date for the exported results. Takes priority over startOffsetMs. */;
    stopDate?: DateTime | null /** optional end date for the exported results. Takes priority over stopOffsetMs. */;
  }

  export interface CreateExportRequestFormatConfig {
    extension: string /** The file extension of the export type, such as "vlf" or "ttml".Must be supported by the requested engine category. */;
    options?: JsonData | null /** Optional export options specific to the target engine category. */;
  }

  export interface CreateExportRequestOutputConfig {
    engineId?:
      | string
      | null /** ID of an individual engine to export results for.Either this option _or_ categoryId must be provided. */;
    categoryId?:
      | string
      | null /** ID of an engine category to export results for.Either this option _or_ engineId must be provided. */;
    formats: CreateExportRequestFormatConfig[] /** Export output format configuration */;
  }

  export interface CreateExportRequest {
    includeMedia?:
      | boolean
      | null /** Whether or not to include TDO media assets in the export.Setting this option can greatly increase the size of the export file. */;
    tdoData: CreateExportRequestForTdo[] /** Information on the TDOs to export data from */;
    outputConfigurations?:
      | CreateExportRequestOutputConfig[]
      | null /** Information on the export output configuration */;
  }

  export interface UpdateExportRequest {
    id: string /** ID of the export request to update */;
    status?: ExportRequestStatus | null /** Status change */;
    assetUri?: string | null /** The asset URI */;
  }

  export interface EventDelivery {
    name: EventDeliveryType;
    params: JsonData;
  }

  export interface CreateEvent {
    eventName: string /** Name of the event to be created */;
    eventType: string /** The type of event */;
    application: string /** Identifier of the app using the event. Using "system" as application will throw error */;
    public: boolean /** Event visibility. Private event is only visible to the app publisher. */;
    description?: string | null /** General description of the event */;
    schemaData?:
      | string
      | null /** Optional schema. Accept on Protocol buffer format. If not provided,Custom message schema is inferred */;
  }

  export interface UpdateEvent {
    id: string /** ID of event */;
    description?: string | null /** General description of the event */;
  }

  export interface SubscribeEvent {
    eventName?: string | null /** Existing event name */;
    eventType?: string | null /** Existing event type */;
    application: string /** Identifier of the app using the event */;
    delivery: EventDelivery /** a string payload, it should be serialized Protobuf data with base64 encoding */;
  }

  export interface EmitEvent {
    eventName: string /** Event name */;
    eventType: string /** Existing event type */;
    application: string /** Identifier of the app using the event */;
    payload: string /** string payload, it should be serialized Protobuf data with base64 encoding or escaped JSON string */;
  }

  export interface CreateWorkflowRuntimeStorageData {
    storageKey: string /** Unique lookup id for the workflowRuntimeData */;
    storageData: string /** Data content - base64 encoded binary, plain string or encoded JSON */;
    storageMetadata?: string | null /** Optional metadata for the workflowRuntimeData */;
  }

  export interface CreateProgramAffiliate {
    sourceId: string;
    scheduledDay: DayOfWeek;
    startDateTime: DateTime;
    stopDateTime: DateTime;
    startTime: Time;
    stopTime: Time;
  }

  export interface ScheduledJobOrderBy {
    field: ScheduledJobOrderField;
    direction?: OrderDirection | null;
  }

  export interface CreateScheduledJobCollaborator {
    organizationId: string /** ID of the organization to share the source with */;
    permission: SetScheduledJobPermission /** Permission to grant. Can be `editor` or `viewer`.Set to `none` to revoke permissions for this organization. */;
  }

  export interface CreateRecurringSchedulePart {
    repeatIntervalUnit: IntervalUnit;
    repeatInterval: number;
    durationSeconds?: number | null;
    startTime?: Time | null /** Time of day, required for repeat interval unit in days. */;
  }

  export interface CreateWeeklySchedulePart {
    scheduledDay?: DayOfWeek | null;
    startTime?: Time | null;
    stopTime?: Time | null;
  }

  export interface CreateScheduledJob {
    jobPipelineIds?: string[] | null;
    jobTemplateIds?: string[] | null;
    jobTemplates?: CreateJobTemplate[] | null;
    weeklyScheduleParts?: CreateWeeklySchedulePart[] | null;
    recurringScheduleParts?: CreateRecurringSchedulePart[] | null;
    name: string;
    description?: string | null /** A detailed description. Defaults to name. */;
    runMode?: RunMode | null;
    details?: JsonData | null /** JSON containing metadata details for this scheduled job.If supplied, then the detailsSchemaId must also be set.The supplied data must comply with the schema */;
    detailsSchemaId?: string | null /** Schema ID for detail metadata on this scheduled job */;
    isActive?: boolean | null;
    startDateTime?: DateTime | null;
    stopDateTime?: DateTime | null;
    contentTemplates?:
      | CreateScheduledJobContentTemplateWithScheduledJob[]
      | null /** Optionally, associate content templates with the new scheduled job */;
    organizationId?:
      | string
      | null /** Organization ID. Used only by Veritone platform components.Other clients should not attempt to send this field. Any value sentwill be ignored. */;
    isPublic?:
      | boolean
      | null /** Indicates whether or not the scheduled job is publicly accessible.Only Veritone administrators can create public scheduled jobs.Other users will get an error if they attempt to set this value to true. */;
    affiliates?: CreateProgramAffiliate[] | null;
  }

  export interface CreateJobTemplate {
    taskTemplates?: CreateTaskTemplate[] | null /** The set of task template definitions for this job template. */;
    jobPipelineId?:
      | string
      | null /** Optional. Specify a job pipeline ID if this job template is associatedwith a job pipeline. */;
    jobPipelineStage?:
      | number
      | null /** Optional. Should be set only if `jobPipelineId` is set.Specifies the stage in the pipeline at which this job template shouldbe applied. */;
    skipDecider?: boolean | null /** Used only by Veritone platform components. */;
    jobConfig?: JsonData | null /** Optional job-level configuration. Typically used only by Veritoneplatform components. */;
    applicationId?:
      | string
      | null /** Application ID. Used only by Veritone platform components.Other clients should not attempt to send this field. Any value sentwill be ignored. */;
    clusterId?: string | null;
  }

  export interface CreateTaskTemplate {
    engineId?: string | null;
    engineConfigId?: string | null;
    executionLocationId?: string | null;
    jobTemplateId?: string | null;
    payload?: JsonData | null;
    payloadString?: string | null;
    parentTaskId?: string | null;
  }

  export interface CreateScheduledJobContentTemplateWithScheduledJob {
    schemaId: string /** Supply the ID of the data registry that contains the schemafor the content template. */;
    sdoId?:
      | string
      | null /** To associate an existing structured data object (SDO) to thesource, provide the SDO ID. Either this field or data must be supplied. */;
    data?: JsonData | null /** To create a new structured data object, supply this field withJSON to save in the SDO. The JSON must comply with the schemadefined in data registry. */;
  }

  export interface CloneScheduledJob {
    id: string;
    organizationId?:
      | string
      | null /** Organization ID. Used only by Veritone platform components.Other clients should not attempt to send this field. Any value sentwill be ignored. */;
  }

  export interface RevertScheduledJob {
    id: string;
  }

  export interface UpdateScheduledJob {
    id: string;
    jobPipelineIds?: string[] | null;
    jobTemplateIds?: string[] | null;
    jobTemplates?: CreateJobTemplate[] | null /** Optionally, specify the job template definitions here. */;
    weeklyScheduleParts?: CreateWeeklySchedulePart[] | null;
    recurringScheduleParts?: CreateRecurringSchedulePart[] | null;
    name?: string | null;
    description?: string | null /** A detailed description. Defaults to name. */;
    runMode?: RunMode | null;
    details?: JsonData | null /** JSON containing metadata details for this scheduled job.If the scheduled job does not already have a schema IDassociated with, one must be supplied along with this data.In either case, the supplied data must comply with theschema. */;
    detailsSchemaId?: string | null /** ID of the schema for detail metadata on this scheduled job */;
    isActive?: boolean | null;
    startDateTime?: DateTime | null;
    stopDateTime?: DateTime | null;
    contentTemplates?:
      | CreateScheduledJobContentTemplateWithScheduledJob[]
      | null /** Optionally, associate content templates with the new scheduled job */;
    isPublic?:
      | boolean
      | null /** Indicates whether or not the scheduled job is publicly accessible.Only Veritone administrators can create public scheduled jobs.Other users will get an error if they attempt to set this value to true. */;
    affiliates?: CreateProgramAffiliate[] | null;
    migrateIfLegacy?:
      | boolean
      | null /** Indicates whether or not the scheduled job we should upgrade this schedule jobto the new data model if an upgrade is possible. */;
  }

  export interface CreateCluster {
    name: string;
    allowedEngines: (string)[];
    dockerCredentials: JsonData;
    type?: ClusterType | null;
    containerTag?: string | null;
    paused?: boolean | null;
    memorySize?:
      | string
      | null /** Specify memory size in raw bytes or in human-readableformat such as 8gb, 1024mb, etc. */;
    storageSize?:
      | string
      | null /** Specify storage size in raw bytes or in human-readableformat such as 8gb, 1024mb, etc. */;
    bypassAllowedEngines?: boolean | null;
    collaborators?:
      | CreateClusterCollaborator[]
      | null /** Permissions granted to other organizations. Only the cluster ownercan view or edit this field. */;
  }

  export interface CreateClusterCollaborator {
    organizationId: string /** ID of the organization to share */;
    permission: SetClusterPermission /** Permission to grant cluster. Can be `viewer`.Set to `none` to revoke permissions for this organization. */;
  }

  export interface UpdateCluster {
    id: string;
    name?: string | null;
    allowedEngines?: (string)[] | null;
    dockerCredentials?: JsonData | null;
    containerTag?: string | null;
    memorySize?: number | null;
    storageSize?: number | null;
    bypassAllowedEngines?: boolean | null;
    collaborators?:
      | CreateClusterCollaborator[]
      | null /** Permissions granted to other organizations. Only the cluster ownercan view or edit this field. */;
  }

  export interface PauseCluster {
    id: string;
  }

  export interface UnpauseCluster {
    id: string;
  }

  export interface CreateClusterNode {
    name?: string | null;
    clusterId?: string | null;
    metrics: CreateMetrics;
    containerTag?: string | null;
    offlineBrowsing?: boolean | null;
    storagePresent?: boolean | null;
    type?: ClusterType | null;
  }

  export interface CreateMetrics {
    cpuCount: number;
    mbRam: number;
    mbDisk: number;
    ipExternal?: string | null;
    ipInternal?: string | null;
    ami?: string | null;
    ec2InstanceType?: string | null;
    ec2Region?: string | null;
    awsAccount?: string | null;
    loadAverage?: JsonData | null;
  }

  export interface UpdateClusterNode {
    id: string;
    name?: string | null;
  }

  export interface CreateEngineConfiguration {
    sourceId: string;
    credentialIds?: string[] | null;
  }

  export interface UpdateEngineConfiguration {
    id: string;
    credentialIds?: string[] | null;
  }

  export interface CreateExternalCredential {
    sourceTypeId?: string | null;
    dataId?: string | null;
  }

  export interface UpdateExternalCredential {
    id: string;
    dataId?: string | null;
  }

  export interface CreateSourceCollaborator {
    organizationId: string /** ID of the organization to share the source with */;
    permission: SetSourcePermission /** Permission to grant. Can be `editor` or `viewer`.Set to `none` to revoke permissions for this organization. */;
  }
  /** Data used to create a new source */
  export interface CreateSource {
    sourceTypeId: string /** The source type ID */;
    name: string /** The human-readable source name. The value does not have to be unique,but it is strongly recommended to use a name that is unique withinthe owning organization. */;
    isPublic?:
      | boolean
      | null /** Indicates whether or not the source is public. Default is false (privateto owner organization). */;
    details?: JsonData | null /** Additional metadata to associate with the source. This data may bevalidated against a schema associated with the source type. */;
    thumbnailUrl?: string | null /** Optional thumbnail image URL for the source */;
    contentTemplates?:
      | CreateSourceContentTemplateWithSource[]
      | null /** Optionally, associate content templates with the new source */;
    correlationSchemaId?:
      | string
      | null /** Optionally associate a schema for correlation.Required when correlationSDOId is specified. */;
    correlationSDOId?:
      | string
      | null /** Optionally associate a structured data object of the specified correlationSchemaId.Required when correlationSchemaId is specified. */;
    collaborators?: CreateSourceCollaborator[] | null /** Add or modify collaborators on the source. */;
    state?: JsonData | null /** Optionally, set an initial state for the source.This is typically not required. */;
  }

  export interface CreateSourceContentTemplateWithSource {
    schemaId: string /** Supply the ID of the data registry that contains the schemafor the content template. */;
    sdoId?:
      | string
      | null /** To associate an existing structured data object (SDO) to thesource, provide the SDO ID. Either this field or data must be supplied. */;
    data?: JsonData | null /** To create a new structured data object, supply this field withJSON to save in the SDO. The JSON must comply with the schemadefined in data registry. */;
  }
  /** Data used to update an existing source */
  export interface UpdateSource {
    id: string /** The ID of the source to update */;
    name?: string | null /** Update the name field */;
    isPublic?: boolean | null /** Update the isPublic field */;
    details?: JsonData | null /** Additional metadata to associate with the source. This data may bevalidated against a schema associated with the source type. */;
    thumbnailUrl?: string | null /** Optional thumbnail image URL for the source */;
    contentTemplates?:
      | CreateSourceContentTemplateWithSource[]
      | null /** Optionally, associate content templates with the new source */;
    correlationSchemaId?:
      | string
      | null /** Optionally associate a schema for correlation.Required when correlationSDOId is specified. */;
    correlationSDOId?:
      | string
      | null /** Optionally associate a structured data object of the specified correlationSchemaId.Required when correlationSchemaId is specified. */;
    collaborators?:
      | CreateSourceCollaborator[]
      | null /** Add or modify collaborators on the source. Permissions for organizationsnot mentioned in this list will _not_ be modified. To revoke permissionsfor an organization, use the `none` permission. */;
    state?: JsonData | null /** Set current state for the source. This is used only by the adaptersthat use the source and should not be set by other clients. */;
  }

  export interface CreateSourceContentTemplate {
    sourceId: string /** Specify the source ID that this content template applies to */;
    schemaId: string /** Supply the ID of the data registry that contains the schemafor the content template. */;
    sdoId?:
      | string
      | null /** To associate an existing structured data object (SDO) to thesource, provide the SDO ID. Either this field or data must be supplied. */;
    data?: JsonData | null /** To create a new structured data object, supply this field withJSON to save in the SDO. The JSON must comply with the schemadefined in data registry. */;
  }

  export interface CreateScheduledJobContentTemplate {
    scheduledJobId: string /** Specify the scheduled job ID that this content template applies to */;
    schemaId: string /** Supply the ID of the data registry that contains the schemafor the content template. */;
    sdoId?:
      | string
      | null /** To associate an existing structured data object (SDO) to thesource, provide the SDO ID. Either this field or data must be supplied. */;
    data?: JsonData | null /** To create a new structured data object, supply this field withJSON to save in the SDO. The JSON must comply with the schemadefined in data registry. */;
  }

  export interface CreateSourceType {
    sourceSchemaId?: string | null;
    credentialSchemaId?: string | null;
    name: string;
    details?: JsonData | null;
    credentialType?: CredentialType | null;
    isPublic?:
      | boolean
      | null /** Indicates that the source type is publicly accessible.If false, is usable only by the owner organization. */;
    isLive?: boolean | null /** Indicates whether or not the source type is "live", suchas a camera feed */;
    requiresScanPipeline?: boolean | null /** Indicates whether or not the source type requiresscan pipeline jobs */;
    categoryId: string /** Source type category ID */;
  }

  export interface UpdateSourceType {
    id: string;
    name?: string | null;
    sourceSchemaId?: string | null;
    credentialSchemaId?: string | null;
    details?: JsonData | null;
    credentialType?: CredentialType | null;
    isPublic?:
      | boolean
      | null /** Indicates that the source type is publicly accessible.If false, is usable only by the owner organization. */;
    isLive?: boolean | null /** Indicates whether or not the source type is "live", suchas a camera feed */;
    requiresScanPipeline?: boolean | null /** Indicates whether or not the source type requiresscan pipeline jobs */;
    categoryId?: string | null /** Source type category ID */;
  }

  export interface UpdateJobTemplate {
    id: string;
    jobPipelineStage?: number | null /** taskTemplates: [CreateTaskTemplate!] */;
    skipDecider?: boolean | null;
    jobConfig?: JsonData | null;
  }

  export interface UpdateTaskTemplate {
    id: string;
    payload?: JsonData | null;
    payloadString?: string | null;
    parentTaskId?: string | null;
  }

  export interface CreateJobPipeline {
    jobTemplateIds?: string[] | null;
    isPublic?: boolean | null;
  }

  export interface UpdateJobPipeline {
    id: string;
    jobTemplateIds?: string[] | null;
    isPublic?: boolean | null;
  }

  export interface ScheduledJobDateTimeFilter {
    toDateTime?: DateTime | null;
    fromDateTime?: DateTime | null;
    field: ScheduledJobDateTimeField;
    includeEmpty?: boolean | null;
  }

  export interface ScheduledJobPartTimeFilter {
    toTime?: Time | null;
    fromTime?: Time | null;
    field: ScheduledJobPartTimeField;
  }

  export interface CreateNextPipelineJobs {
    jobPipelineId?: string | null;
    parentJobId?: string | null;
    payload?: JsonData | null;
    targetInfo?: CreateNextPipelineJobsTargetInfo | null;
    scheduledJobId?:
      | string
      | null /** Supply this value if and only if the job pipelinewas started as part of a scheduled job. */;
    organizationId?: string | null;
    applicationId?: string | null;
  }

  export interface CreateNextPipelineJobsTargetInfo {
    targetId: string /** ID of the target object for the job pipeline,typically that of a TemporalDataObject */;
    startOffsetMs?: number | null;
    endOffsetMs?: number | null;
  }

  export interface CreateAllPipelineJobs {
    jobPipelineId: string;
    jobPipelineStage?: number | null;
    targetInfo?: CreateAllPipelineJobsTargetInfo | null /** Optional data about the job target,a TemporalDataObject. If this field isnot specified then a suitableobject will be created automatically. */;
    payload?: JsonData | null /** Job payload */;
    scheduledJobId?:
      | string
      | null /** Supply this value if and only if the job pipelinewas started as part of a scheduled job. */;
    organizationId?: string | null;
    applicationId?: string | null;
  }

  export interface CreateAllPipelineJobsTargetInfo {
    targetId: string /** ID of the target object for the job pipeline,typically that of a TemporalDataObject */;
    startOffsetMs?: number | null;
    endOffsetMs?: number | null;
  }

  export interface LaunchScheduledJobs {
    targetInfo?: CreateAllPipelineJobsTargetInfo | null /** Optional data about the job target,a TemporalDataObject. If this field isnot specified then a suitableobject will be created automatically. */;
    createTargetInfo?: CreateTdoForJob | null /** Optional data used to create a _new_ TDO for the job.Specify this field _or_ `targetInfo`, but not both. */;
    payload?: JsonData | null /** Job payload */;
    scheduledJobId?: string | null;
  }

  export interface CreateTdoForJob {
    name?:
      | string
      | null /** A name for the TDO object, such as the name of the primary media file.If not provided, the TDO will have the name of the scheduled job thatcreated it. */;
    description?: string | null /** A description for the TDO object. */;
    isPublic?:
      | boolean
      | null /** True if the new TDO should be made public. If true, security.globalwill be set to true and users from other organizations will be able toview, but not modify, the TDO's metadata and assets. */;
    parentFolderId?:
      | string
      | null /** An optional parent folder ID for the new TemporalDataObject.The folder can be filed in additional folders later using `fileTemporalDataObject`,or un-filed from this one. */;
    applicationId?: string | null /** Only internal systems can set this value */;
    status?:
      | string
      | null /** Status, such as "downloaded" or "recording".The server will set a value if one is not provided. */;
    details?: JsonData | null /** Detailed metadata about the TDO */;
    contentTemplates?:
      | CreateTdoContentTemplateWithTdo[]
      | null /** Optionally, specify one or more structured data objects to apply ascontent templates to the TDO. They will be stored as assets of typecontent-template and will contain an immutable copy of the original data. */;
    addToIndex?:
      | boolean
      | null /** Optionally, add the new data to the search index. If the data is notindexed on creation, it can be indexed later by using `updateTDO` orcreating a suitable job. */;
    thumbnailUrl?: string | null /** An optional thumbnail URL for the TDO */;
    sourceImageUrl?: string | null /** An optional image representing the TDO source */;
  }

  export interface LaunchJobTemplates {
    ids: string[];
    scheduledJobId?: string | null;
    payload?: JsonData | null;
    targetInfo?: LaunchJobTemplatesTargetInfo | null;
  }

  export interface LaunchJobTemplatesTargetInfo {
    targetId: string /** ID of the target object for the jobs,typically that of a TemporalDataObject */;
    startOffsetMs?: number | null;
    endOffsetMs?: number | null;
  }

  export interface GetNextBundleForCluster {
    clusterId: string /** ID of cluster need to get next bundle */;
  }

  export interface UpdateBundleStatusAsCluster {
    clusterId: string /** Id of the cluster. */;
    bundleId: string /** Id of the bundle. */;
    bundleStatus: BundleStatus /** Bundle status body object */;
  }

  export interface BundleStatus {
    bundleStarted?: DateTime | null;
    bundleCompleted?: DateTime | null;
    bundleResults: BundleResults;
    markAsCompleted?: boolean | null;
  }

  export interface BundleResults {
    found: number;
    completed: number;
    errors: BundleError;
  }

  export interface BundleError {
    error: string;
  }
  export interface ApplicationsOrganizationArgs {
    offset?: number | null;
    limit?: number | null;
  }
  export interface UsersOrganizationArgs {
    offset?: number | null;
    limit?: number | null;
  }
  export interface CollectionsOrganizationArgs {
    name?: string | null /** Provide a name to filter by collection name */;
    offset?: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit?: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
  }
  export interface RootFolderOrganizationArgs {
    type?: RootFolderType | null /** Specify a root folder type to retrieve a specific root folder */;
  }
  export interface ClientSecretApplicationArgs {
    password?: string | null;
  }
  export interface RootFolderUserArgs {
    type?: RootFolderType | null /** Specify a root folder type to retrieve a specific root folder */;
  }
  export interface ChildTdOsFolderArgs {
    offset?: number | null;
    limit?: number | null;
  }
  export interface DetailsTemporalDataObjectArgs {
    path?: string | null /** optionally, specify a path to retrieve only a specific propertywithin the details JSON */;
  }
  export interface AssetsTemporalDataObjectArgs {
    id?: string | null /** Provide an ID to retrieve a single asset. */;
    type?:
      | string[]
      | null /** Specify a list of asset types such as "media" or "transcript" toretrieve a specific asset type */;
    sourceTaskId?:
      | string
      | null /** Deprecated -- use type parameterassetType: [String!] # @deprecated(reason: "use _type_ parameter")Retrieve assets created by a specific task */;
    offset?: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit?: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    orderBy?: AssetOrderBy | null;
    orderDirection?: OrderDirection | null;
  }
  export interface PrimaryAssetTemporalDataObjectArgs {
    assetType: string;
  }
  export interface TasksTemporalDataObjectArgs {
    id?: string | null;
    offset?: number | null;
    limit?: number | null;
    hasSourceAsset?: boolean | null;
  }
  export interface EngineRunsTemporalDataObjectArgs {
    offset?: number | null;
    limit?: number | null;
  }
  export interface DetailsAssetArgs {
    path?: string | null /** optionally, specify a path to retrieve only a specific propertywithin the details JSON */;
  }
  export interface JsonstringAssetArgs {
    indent?: number | null;
  }
  export interface TransformAssetArgs {
    transformFunction: TransformFunction;
  }
  export interface TasksEngineArgs {
    status?: (string)[] | null;
    offset?: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit?: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    id?: string | null;
    dateTimeFilter?: (TaskDateTimeFilter)[] | null;
    hasSourceAsset?: boolean | null;
  }
  export interface BuildsEngineArgs {
    buildStatus?: BuildStatus[] | null;
    status?: (string)[] | null;
    offset?: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit?: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    id?: string | null;
  }
  export interface TaskMetricsEngineArgs {
    fromDateTime?: DateTime | null /** Provide a starting date in ISO format (maximum range of 7 days) */;
    toDateTime?: DateTime | null /** Provide an end date in ISO format (maximum range of 7 days) */;
  }
  export interface EnginesEngineCategoryArgs {
    offset?: number | null;
    limit?: number | null;
    filter?: EngineFilter | null /** Filters for engine attributes */;
    orderBy?: (EngineSortField)[] | null /** Provide a list of EngineSortField to sort by. */;
  }
  export interface TasksJobArgs {
    status?: TaskStatus[] | null /** Specify a list of job status strings to filter by status */;
    offset?: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit?: number | null /** Maximum number of results to retrieve in this query */;
    id?: string | null /** Specify an ID to retrieve a single specific task */;
    targetId?: (string)[] | null /** Specify a list of IDs to filter by task target ID */;
    hasSourceAsset?: boolean | null;
  }
  export interface TaskTemplatesJobTemplateArgs {
    engineType?: EngineTypeFilter[] | null;
    engineId?: string | null;
    offset?: number | null;
    limit?: number | null;
  }
  export interface SourcesSourceTypeArgs {
    id?: string[] | null /** Optionally, provide a list of IDs to retrieve sources by ID */;
    name?:
      | string
      | null /** Provide a name or partial name value to filter by name.The `nameMatch` parameter can be used to determine the stringmatch strategy used in the filter. Default is "starts with".Note that all matching is case-insensitive. */;
    nameMatch?: StringMatch | null /** String matching strategy. Default is "starts with". */;
    offset?: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit?: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    hasContentTemplates?:
      | boolean
      | null /** Set this flag to true or false to return only sources that do or donot have content templates associated with them.The default is neither (do not filter on the presence of content templates). */;
    includePublic?:
      | boolean
      | null /** Set this flag to true to include public sources or false to includeonly sources owned by theuser's org, not public sources.Public sources owned by the caller's org will always be returned. */;
    correlationSchemaId?:
      | string
      | null /** Provide a correlation schama ID to filter for sources that correlate using specified schema. */;
    orderBy?:
      | SourceSortField[]
      | null /** Provide optional sort information. If not provided, a default sortby createdDateTime descending will be applied. */;
  }
  export interface StructuredDataObjectsSchemaArgs {
    offset?: number | null;
    limit?: number | null;
  }
  export interface SchemasDataRegistryArgs {
    status?: (SchemaStatus)[] | null;
    majorVersion?: number | null;
    id?: string | null;
    offset?: number | null;
    limit?: number | null;
    orderBy?: (SchemaOrder)[] | null;
  }
  export interface DataStructuredDataArgs {
    path?:
      | string
      | null /** Optionally, specify a path into the JSON data.Only the value of the path will be returned, at thetop level. The value will be empty if there is nothingin the JSON at that path.This parameter is useful for directly addressing fields in the JSON. */;
  }
  export interface DataStringStructuredDataArgs {
    indent?: number | null;
  }
  export interface CollaboratorsSourceArgs {
    orderBy?: SourceCollaboratorOrderBy | null;
    orderDirection?: OrderDirection | null;
  }
  export interface JobPipelinesScheduledJobArgs {
    offset?: number | null;
    limit?: number | null;
  }
  export interface JobTemplatesScheduledJobArgs {
    offset?: number | null;
    limit?: number | null;
  }
  export interface AllJobTemplatesScheduledJobArgs {
    offset?: number | null;
    limit?: number | null;
  }
  export interface JobsScheduledJobArgs {
    targetId?: string | null /** Optionally, specify a TDO ID to filter by job target */;
    clusterId?: string | null /** Optionally, specify a cluster ID to filter by cluster */;
    orderBy?:
      | JobSortField[]
      | null /** Provide sort information. The default is to sort bycreatedDateTime descending. */;
    dateTimeFilter?: JobDateTimeFilter[] | null /** Optionally, specify filters on date/time fields */;
    status?: JobStatusFilter[] | null /** Provide a list of status strings to filter by status */;
    offset?: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit?: number | null /** Specify the maximum number of results to included in this response, or page size. */;
  }
  export interface SourcesScheduledJobArgs {
    offset?: number | null;
    limit?: number | null;
  }
  export interface ActiveTasksEngineRunArgs {
    offset?: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit?: number | null /** Maximum number of results to retrieve in this query */;
  }
  export interface MentionsWatchlistArgs {
    offset?: number | null;
    limit?: number | null;
  }
  export interface ScheduledJobsWatchlistArgs {
    offset?: number | null;
    limit?: number | null;
  }
  export interface SchedulesWatchlistArgs {
    offset?: number | null;
    limit?: number | null;
  }
  export interface RatingsMentionArgs {
    userId?: string | null;
  }
  export interface WidgetsCollectionArgs {
    offset?: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit?: number | null /** Maximum number of results to retrieve in this query; page size */;
    id?: string | null;
  }
  export interface AssetIdMapCloneDataArgs {
    oldAssetId?: string | null /** Provide an ID to retrieve mappings for specific old asset. */;
    newAssetId?: string | null /** Provide an ID to retrieve mappings for a specific new asset. */;
  }
  export interface IdentifiersEntityArgs {
    id?: string | null /** Provide an ID to retrieve a specific entity identifier */;
    identifierTypeId?: string | null;
    offset?: number | null;
    limit?: number | null;
  }
  export interface EngineModelsLibraryArgs {
    id?: string | null;
  }
  export interface EntitiesLibraryArgs {
    id?: string | null /** Provide an ID to retrieve a single specific entity. */;
    ids?: string[] | null;
    isPublished?: boolean | null;
    identifierTypeId?: string | null;
    name?: string | null;
    offset?: number | null;
    limit?: number | null;
    orderBy?: LibraryEntityOrderBy | null;
    orderDirection?: OrderDirection | null;
  }
  export interface CollaboratorsLibraryArgs {
    collaboratorOrgId?: string | null /** Provide an ID to retrieve collaborators within a specific organization. */;
  }

  export enum SubscriptionObjectType {
    mention = 'mention',
  }

  export enum SubscriptionFrequency {
    immediate = 'immediate',
    daily = 'daily',
    weekly = 'weekly',
    never = 'never',
  }

  export enum DayOfWeek {
    Sunday = 'Sunday',
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
  }

  export enum QueryAction {
    warn = 'warn',
    kill = 'kill',
    killFailed = 'killFailed',
  }
  /** Possible status setting for internal tokens */
  export enum InternalTokenStatus {
    pending = 'pending',
    active = 'active',
    revoked = 'revoked',
    updatePending = 'updatePending',
  }

  export enum AuditAction {
    Create = 'Create',
    Update = 'Update',
    Delete = 'Delete',
  }

  export enum TokenType {
    API = 'API',
    User = 'User',
  }

  export enum ScopeRequirement {
    Any = 'Any',
    All = 'All',
  }

  export enum AuthObjectType {
    TemporalDataObject = 'TemporalDataObject',
    Job = 'Job',
    Task = 'Task',
    Folder = 'Folder',
  }
  /** Fields that can be set in an `auditLog` `orderBy` parameter */
  export enum AuditLogOrderByField {
    id = 'id',
    objectId = 'objectId',
    objectType = 'objectType',
    createdDateTime = 'createdDateTime',
    eventType = 'eventType',
    userName = 'userName',
    clientIpAddress = 'clientIpAddress',
    clientUserAgent = 'clientUserAgent',
    success = 'success',
  }

  export enum OrderDirection {
    asc = 'asc',
    desc = 'desc',
  }

  export enum ExportRequestStatus {
    incomplete = 'incomplete',
    complete = 'complete',
    downloaded = 'downloaded',
  }

  export enum SavedSearchOrderBy {
    name = 'name',
    createdDateTime = 'createdDateTime',
    sharedWithOrganization = 'sharedWithOrganization',
  }
  /** Deployment models describe how an engine or application operates on the networkand where the data it works with is transmitted. See Veritone's developerdocumentation at https://steel-ventures.atlassian.net/wiki/spaces/VDH/pages/101364981/Engine+Deployment+Modelsfor a full description. */
  export enum DeploymentModel {
    FullyNetworkIsolated = 'FullyNetworkIsolated',
    MostlyNetworkIsolated = 'MostlyNetworkIsolated',
    NonNetworkIsolated = 'NonNetworkIsolated',
    HumanReview = 'HumanReview',
  }
  /** Set of possible states for a custom application.The application state determines whether or not it is available in productionand the actions that can be taken on it. */
  export enum ApplicationStatus {
    active = 'active',
    draft = 'draft',
    deleted = 'deleted',
    pending = 'pending',
    rejected = 'rejected',
    approved = 'approved',
    disabled = 'disabled',
  }

  export enum ApplicationStateAction {
    approve = 'approve',
    edit = 'edit',
    delete = 'delete',
    deploy = 'deploy',
    disable = 'disable',
    enable = 'enable',
    reject = 'reject',
    submit = 'submit',
    undelete = 'undelete',
  }

  export enum OrganizationStatus {
    active = 'active',
    deleted = 'deleted',
  }

  export enum RootFolderType {
    watchlist = 'watchlist',
    collection = 'collection',
    cms = 'cms',
  }

  export enum FolderStatus {
    active = 'active',
    inactive = 'inactive',
  }

  export enum AssetOrderBy {
    createdDateTime = 'createdDateTime',
    assetType = 'assetType',
    contentType = 'contentType',
  }

  export enum TaskStatus {
    pending = 'pending',
    running = 'running',
    complete = 'complete',
    queued = 'queued',
    accepted = 'accepted',
    failed = 'failed',
    cancelled = 'cancelled',
    standby_pending = 'standby_pending',
    waiting = 'waiting',
    resuming = 'resuming',
    aborted = 'aborted',
  }
  /** Enumeration containing the set of allowed values for the Engine state field. */
  export enum EngineState {
    active = 'active',
    disabled = 'disabled',
    pending = 'pending',
    deleted = 'deleted',
    draft = 'draft',
    ready = 'ready',
  }

  export enum TaskDateTimeField {
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
  }
  /** Valid strings for the `Build.status` field. */
  export enum BuildStatus {
    approved = 'approved',
    available = 'available',
    deleted = 'deleted',
    deploying = 'deploying',
    deployed = 'deployed',
    fetching = 'fetching',
    invalid = 'invalid',
    paused = 'paused',
    pending = 'pending',
    uploaded = 'uploaded',
    deployFailed = 'deployFailed',
  }

  export enum BuildUpdateAction {
    deploy = 'deploy',
    pause = 'pause',
    unpause = 'unpause',
    approve = 'approve',
    disapprove = 'disapprove',
    invalidate = 'invalidate',
    submit = 'submit',
    upload = 'upload',
    delete = 'delete',
  }

  export enum EngineTypeFilter {
    Cognition = 'Cognition',
    Ingestion = 'Ingestion',
    Aggregator = 'Aggregator',
  }

  export enum ClusterSize {
    small = 'small',
    medium = 'medium',
    large = 'large',
  }

  export enum SupportedGpu {
    G2 = 'G2',
    G3 = 'G3',
    P2 = 'P2',
  }

  export enum EngineMode {
    Chunk = 'Chunk',
    Stream = 'Stream',
    Batch = 'Batch',
  }

  export enum EngineOrderField {
    name = 'name',
    id = 'id',
    state = 'state',
    price = 'price',
    rating = 'rating',
    order = 'order',
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
  }

  export enum EntityIdentifierDataType {
    image = 'image',
    audio = 'audio',
    video = 'video',
    text = 'text',
    pdf = 'pdf',
  }
  /** An enum containing valid custom engine field types. */
  export enum EngineFieldType {
    Number = 'Number',
    Picklist = 'Picklist',
    MultiPicklist = 'MultiPicklist',
    Text = 'Text',
    SchemaSelection = 'SchemaSelection',
  }

  export enum EngineStateAction {
    edit = 'edit',
    delete = 'delete',
    disable = 'disable',
    enable = 'enable',
    undelete = 'undelete',
  }

  export enum EngineScheduleType {
    Now = 'Now',
    OnDemand = 'OnDemand',
    Recurring = 'Recurring',
    Continuous = 'Continuous',
  }

  export enum SchemaStatus {
    published = 'published',
    deleted = 'deleted',
    draft = 'draft',
    inactive = 'inactive',
  }

  export enum SchemaOrderFields {
    majorVersion = 'majorVersion',
    minorVersion = 'minorVersion',
    status = 'status',
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
  }

  export enum SchemaAction {
    view = 'view',
    edit = 'edit',
    publish = 'publish',
    deactivate = 'deactivate',
    delete = 'delete',
  }

  export enum CredentialType {
    None = 'None',
    Any = 'Any',
    APIKey = 'APIKey',
    Username = 'Username',
  }

  export enum RunMode {
    Continuous = 'Continuous',
    Recurring = 'Recurring',
    Once = 'Once',
    Now = 'Now',
  }
  /** Used to control string matching on fields that support it */
  export enum StringMatch {
    startsWith = 'startsWith',
    endsWith = 'endsWith',
    contains = 'contains',
    exact = 'exact',
  }
  /** Source list sort field options */
  export enum SourceOrderField {
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
    id = 'id',
    name = 'name',
    sourceTypeId = 'sourceTypeId',
  }
  /** Permissions or roles on source objects */
  export enum SourcePermission {
    editor = 'editor',
    viewer = 'viewer',
    owner = 'owner',
  }

  export enum SourceCollaboratorOrderBy {
    organizationId = 'organizationId',
    permission = 'permission',
  }

  export enum ClusterType {
    ami = 'ami',
    RT = 'RT',
  }

  export enum ClusterPermission {
    owner = 'owner',
    viewer = 'viewer',
  }

  export enum JobOrderField {
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
  }

  export enum JobDateTimeField {
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
  }

  export enum JobStatusFilter {
    pending = 'pending',
    running = 'running',
    complete = 'complete',
    cancelled = 'cancelled',
    queued = 'queued',
  }

  export enum ScheduleType {
    Weekly = 'Weekly',
    Interval = 'Interval',
  }

  export enum IntervalUnit {
    Months = 'Months',
    Weeks = 'Weeks',
    Days = 'Days',
    Hours = 'Hours',
    Minutes = 'Minutes',
    Seconds = 'Seconds',
  }
  /** Permissions or roles on source objects */
  export enum ScheduledJobPermission {
    editor = 'editor',
    viewer = 'viewer',
    owner = 'owner',
  }
  /** The possible transformer functions which can be used with assets */
  export enum TransformFunction {
    XML2JSON = 'XML2JSON',
    Transcript2JSON = 'Transcript2JSON',
    JSON = 'JSON',
  }

  export enum UserStatus {
    active = 'active',
    suspended = 'suspended',
    deleted = 'deleted',
  }

  export enum SearchIndex {
    mine = 'mine',
    global = 'global',
  }

  export enum SchemaOwnership {
    mine = 'mine',
    others = 'others',
    all = 'all',
  }

  export enum TemporalDataObjectOrderBy {
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
    startDateTime = 'startDateTime',
    stopDateTime = 'stopDateTime',
  }

  export enum TemporalDataObjectDateTimeField {
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
    startDateTime = 'startDateTime',
    stopDateTime = 'stopDateTime',
  }

  export enum WatchlistOrderBy {
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
    stopDateTime = 'stopDateTime',
    startDateTime = 'startDateTime',
    name = 'name',
  }

  export enum UpdateJobsStatus {
    queued = 'queued',
  }

  export enum AssetCreationMode {
    create = 'create',
    append = 'append',
    replace = 'replace',
  }
  /** Options used by the cleanupTDO mutation to select which data is deleted. */
  export enum TdoCleanupOption {
    storage = 'storage',
    searchIndex = 'searchIndex',
    engineResults = 'engineResults',
  }

  export enum ApplicationWorkflowAction {
    submit = 'submit',
    approve = 'approve',
    reject = 'reject',
    deploy = 'deploy',
    enable = 'enable',
    disable = 'disable',
    undelete = 'undelete',
  }

  export enum LibraryEngineModelTrainStatus {
    pending = 'pending',
    queued = 'queued',
    complete = 'complete',
    failed = 'failed',
    running = 'running',
  }

  export enum LibraryEntityOrderBy {
    id = 'id',
    name = 'name',
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
  }
  /** Settings that determine when to set a new entity identifieras the entity profile image. */
  export enum SetEntityProfileImage {
    none = 'none',
    ifNotSet = 'ifNotSet',
    always = 'always',
  }

  export enum LibraryOrderBy {
    id = 'id',
    name = 'name',
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
    version = 'version',
  }

  export enum EngineWorkflowAction {
    enable = 'enable',
    disable = 'disable',
  }

  export enum JobStatus {
    pending = 'pending',
    complete = 'complete',
    running = 'running',
    cancelled = 'cancelled',
    queued = 'queued',
  }

  export enum UpdateTaskStatus {
    running = 'running',
    failed = 'failed',
    complete = 'complete',
    waiting = 'waiting',
  }

  export enum OrganizationType {
    agency = 'agency',
    broadcaster = 'broadcaster',
  }

  export enum MentionDateTimeField {
    mentionDate = 'mentionDate',
    endDateTime = 'endDateTime',
    hitStartDateTime = 'hitStartDateTime',
    hitStopDateTime = 'hitStopDateTime',
  }

  export enum MentionOrderByField {
    id = 'id',
    mentionDate = 'mentionDate',
    hitStartDateTime = 'hitStartDateTime',
    hitEndDateTime = 'hitEndDateTime',
    endDateTime = 'endDateTime',
  }

  export enum DataRegistryOrderBy {
    name = 'name',
    source = 'source',
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
  }

  export enum CreateTriggerTarget {
    Webhook = 'Webhook',
    SMS = 'SMS',
    Email = 'Email',
  }

  export enum EventDeliveryType {
    Webhook = 'Webhook',
    SMS = 'SMS',
    Email = 'Email',
  }

  export enum ScheduledJobOrderField {
    id = 'id',
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
    startDateTime = 'startDateTime',
    stopDateTime = 'stopDateTime',
    name = 'name',
    runMode = 'runMode',
    isActive = 'isActive',
  }

  export enum SetScheduledJobPermission {
    viewer = 'viewer',
    editor = 'editor',
    none = 'none',
  }

  export enum SetClusterPermission {
    viewer = 'viewer',
    none = 'none',
  }

  export enum SetSourcePermission {
    viewer = 'viewer',
    editor = 'editor',
    none = 'none',
  }

  export enum ScheduledJobDateTimeField {
    startDateTime = 'startDateTime',
    stopDateTime = 'stopDateTime',
    dateCreated = 'dateCreated',
    dateModified = 'dateModified',
  }

  export enum ScheduledJobPartTimeField {
    startTime = 'startTime',
    endTime = 'endTime',
  }
}
