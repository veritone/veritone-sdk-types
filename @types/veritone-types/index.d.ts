declare module 'veritone-types' {
  import { GraphQLResolveInfo } from 'graphql';

  export type Resolver<Result, Parent = any, Context = any, Args = any> = (
    parent: Parent,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo,
  ) => Promise<Result> | Result;

  export type SubscriptionResolver<Result, Parent = any, Context = any, Args = any> = {
    subscribe<R = Result, P = Parent>(
      parent: P,
      args: Args,
      context: Context,
      info: GraphQLResolveInfo,
    ): AsyncIterator<R | Result>;
    resolve?<R = Result, P = Parent>(
      parent: P,
      args: Args,
      context: Context,
      info: GraphQLResolveInfo,
    ): R | Result | Promise<R | Result>;
  };

  /** Date/time custom scalar type */
  export type DateTime = any;

  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  export type Json = any;

  /** Time-only custom scalar type */
  export type Time = any;

  /** A custom scalar type representing a file upload in the asset input types */
  export type UploadedFile = any;
  /** Common fields used by queries and fields that support paging to representa single page of results. */
  export interface Page {
    readonly offset: number /** Provide an offset to skip to a certain element in the result, for paging. */;
    readonly limit: number /** Maximum number of results that were retrieved in this query; page size */;
    readonly count: number | null /** Number of records returned in this response */;
  }

  export interface Metadata {
    readonly name: string;
  }
  /** A property is a name-value pair. This is the base interface for properties. */
  export interface Property {
    readonly name: string;
  }
  /** Queries are used to retrieve data. If you're new to our API,try the `me` query to explore the information you have access to.Hit `ctrl-space` at any time to activate field completion hints, andmouse over a field or parameter to see its documentation. */
  export interface Query {
    readonly temporalDataObjects: TdoList | null /** Retrieve a list of temporal data objects. */;
    readonly temporalDataObject: TemporalDataObject | null /** Retrieve a single temporal data object */;
    readonly asset: Asset | null /** Retrieve a single Asset */;
    readonly widget: Widget | null /** Retrieve a single Widget */;
    readonly cloneRequests: CloneRequestList | null /** Retrieve clone job entries */;
    readonly engines: EngineList | null /** Retrieve engines */;
    readonly engine: Engine | null /** Retrieve a single engine by ID */;
    readonly engineBuild: Build | null;
    readonly engineCategories: EngineCategoryList | null /** Retrieve engine categories */;
    readonly engineCategory: EngineCategory | null /** Retrieve a specific engine category */;
    readonly jobs: JobList | null /** Retrieve jobs */;
    readonly job: Job | null /** Retrieve a single job */;
    readonly task: Task | null /** Retrieve a single task by ID */;
    readonly entityIdentifierTypes: EntityIdentifierTypeList | null /** Retrieve entity identifier types */;
    readonly entityIdentifierType: EntityIdentifierType | null;
    readonly libraryTypes: LibraryTypeList | null /** Retrieve all library types */;
    readonly libraryType: LibraryType | null /** Retrieve a single library type */;
    readonly libraries: LibraryList | null /** Retrieve libraries and entities */;
    readonly library: Library | null /** Retrieve a specific library */;
    readonly libraryEngineModel: LibraryEngineModel | null /** Retrieve a specific library engine model */;
    readonly entity: Entity | null /** Retrieve a specific entity */;
    readonly entities: EntityList | null /** Retrieve a list of entities across libraries */;
    readonly applications: ApplicationList | null /** Retrieve applications. These are custom applications integrated intothe Veritone platform using the VDA framework. */;
    readonly organizations: OrganizationList | null /** Retrieve organizations */;
    readonly organization: Organization | null /** Retrieve a single organization */;
    readonly permissions: PermissionList | null /** Retrieve permissions */;
    readonly users: UserList | null /** Retrieve users */;
    readonly user: User | null /** Retrieve an individual user */;
    readonly tokens: ReadonlyArray<Token | null> | null /** Retrieve user's organization API tokens */;
    readonly me: User | null /** Retrieve information for the current logged-in user */;
    readonly groups: GroupList | null /** Retrieve groups */;
    readonly mention: Mention | null /** Retrieve a single mention */;
    readonly searchMentions: SearchResult | null /** Search for mentions across an index.This query requires a user token. */;
    readonly searchMedia: SearchResult | null /** Search for media across an index.This query requires a user token. */;
    readonly rootFolders: ReadonlyArray<Folder | null> | null /** Retrieve the root folders for an organization */;
    readonly folder: Folder | null /** Retrieve a single folder. Used to navigate the folder tree structure. */;
    readonly application: Application | null /** Retrieve a single application */;
    readonly ingestionConfiguration: IngestionConfiguration | null /** Retrieve a single ingestion configuration */;
    readonly ingestionConfigurations: IngestionConfigurationList | null /** Retrieve ingestion configurations */;
    readonly schemas: SchemaList | null /** Retrieve a list of schemas for structured data ingestions */;
    readonly schema: Schema | null;
    readonly schemaProperties: SchemaPropertyList | null;
    readonly structuredData: StructuredData | null /** Retrieve a structured data object */;
    readonly structuredDataObject: StructuredData | null /** Retrieve a structured data object */;
    readonly structuredDataObjects: StructuredDataList | null /** Retrieve a paginated list of structured data object */;
    readonly graphqlServiceInfo: GraphQlServiceInfo | null /** Returns information about the GraphQL server, usefulfor diagnostics. This data is primarily used by Veritonedevelopment, and some fields may be restricted to Veritone administrators. */;
    readonly getSignedWritableUrl: WritableUrlInfo | null /** Returns a signed writable S3 URL. A client can thenupload to this URL with an HTTP PUT without providingany additional authorization (_note_: it must be a PUT.A POST will fail.) */;
    readonly getSignedWritableUrls: ReadonlyArray<
      WritableUrlInfo
    > /** Return writable storage URLs in bulk.A maximum of 1000 can be created in one call.See `getSignedWritableUrl` for details on usage of theresponse contents. */;
    readonly myRights: RightsListing | null;
    readonly sharedFolders: ReadonlyArray<Folder | null> | null /** Retrieve the shared folders for an organization */;
    readonly watchlists: WatchlistList | null;
    readonly watchlist: Watchlist | null;
    readonly mentionStatusOptions: ReadonlyArray<MentionStatus>;
    readonly dataRegistries: DataRegistryList | null;
    readonly dataRegistry: DataRegistry | null;
    readonly subscription: Subscription;
    readonly cognitiveSearch: CognitiveSearch;
    readonly collections: CollectionList;
    readonly collection: Collection;
    readonly mentions: MentionList | null;
    readonly engineResults: EngineResultList | null /** Retrieves engine results by TDO and engine ID or by job ID. */;
    readonly trigger: Trigger | null;
    readonly triggers: ReadonlyArray<Trigger | null> | null;
    readonly savedSearches: SavedSearchList /** Fetch all saved searches that the current user has madeFetch all saved searches that have been shared withthe current users organizationInclude any saved searches that the user has created */;
    readonly exportRequests: ExportRequestList /** Retrieve a list of export requests */;
    readonly exportRequest: ExportRequest;
    readonly event: Event /** Retrieve a event by id */;
    readonly events: ReadonlyArray<Event> | null /** Retrieve a list of events by application */;
    readonly timeZones: ReadonlyArray<
      TimeZone
    > /** This query returns information about time zones recognized by thisserver. The information is static and does not change. */;
    readonly auditLog: AuditLogEntryList /** Examine entries from the audit log. All operations that modify data arewritten to the audit log. Only entries for the user's own organizationcan be queried.All queries are bracketed by a time window. A default time window is appliedif the `toDateTime` and/or `fromDateTime` parameters are not provided.The maximum time window length is 30 days.Only Veritone and organization administrators can use this query. */;
    readonly sharedMention: MentionList | null /** Get the specific Mention shared */;
    readonly workflowRuntime: WorkflowRuntimeResponse /** Retrieve Veritone Workflow instance status by id */;
    readonly workflowRuntimeStorageData: WorkflowRuntimeStorageDataList /** Get a specific workflowRuntimeData based on dataKey */;
    readonly processTemplates: ProcessTemplateList /** Get list process templates by id or current organizationId */;
    readonly scheduledJob: ScheduledJob | null /** Retrieve a single schedule */;
    readonly scheduledJobs: ScheduledJobList | null /** Retrieve or search for schedules */;
    readonly engineConfiguration: EngineConfiguration | null /** Retrieve a single engine configuration */;
    readonly engineConfigurations: EngineConfigurationList | null /** Retrieve all engine configurations */;
    readonly clusterNode: ClusterNode /** Retrieve a single node */;
    readonly clusterNodes: ClusterNodeList /** Retrieve a list of nodes */;
    readonly cluster: Cluster /** Retrieve a single cluster */;
    readonly clusters: ClusterList /** Retrieve a list of clusters */;
    readonly executionLocation: ExecutionLocation /** Retrieve a single execution location */;
    readonly executionLocations: ExecutionLocationList /** Retrieve a list of execution locations */;
    readonly jobTemplate: JobTemplate /** Retrieve a single job template */;
    readonly jobTemplates: JobTemplateList /** Retrieve a list of job templates for a given job pipelineId */;
    readonly taskTemplate: TaskTemplate /** Retrieve a single task template */;
    readonly jobPipeline: JobPipeline /** Retrieve a single job pipeline */;
    readonly jobPipelines: JobPipelineList /** Retrieve a list of job pipelines owned by org */;
    readonly source: Source /** Retrieve a single source */;
    readonly sources: SourceList /** Retrieve a list of sources */;
    readonly sourceType: SourceType /** Retrieve a single source type */;
    readonly sourceTypes: SourceTypeList /** Retrieve a list of source types */;
    readonly sourceTypeCategories: SourceTypeCategoryList /** Retrieve all source type categories */;
    readonly sourceTypeCategory: SourceTypeCategory /** Retrieve a single source type category */;
    readonly externalCredential: ExternalCredential /** Retrieve a single external credential */;
    readonly externalCredentials: ExternalCredentialList /** Retrieve a list of external credentials */;
    readonly tasks: TaskList | null;
  }

  export interface TdoList extends Page {
    readonly records: ReadonlyArray<TemporalDataObject | null> | null;
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number /** Maximum number of results that were retrieved in this query; page size */;
    readonly count: number | null /** Number of records returned in this response */;
  }

  export interface TemporalDataObject {
    readonly createdDateTime: DateTime | null /** Object creation timestamp. Does not change. In seconds since epoch (TODO change!). */;
    readonly modifiedDateTime: DateTime | null /** Object modification timestamp. In seconds since epoch (TODO change!). */;
    readonly id: string /** The object's unique ID */;
    readonly createdBy: string | null;
    readonly modifiedBy: string | null;
    readonly description: string | null;
    readonly name: string | null;
    readonly mediaId: string | null;
    readonly thumbnailUrl:
      | string
      | null /** An optional URL for a thumbnail or preview image forthis object. If the URL is to an object in Veritone'sobject storage, it will be signed. */;
    readonly sourceImageUrl:
      | string
      | null /** An optional URL for a source image for this object.If the URL is to an object in Veritone'sobject storage, it will be signed. */;
    readonly metadata: ReadonlyArray<Metadata | null> | null /** Modular metadata */;
    readonly jsondata: Json | null /** Direct access to metadata in raw JSON format */;
    readonly details: Json | null;
    readonly assets: AssetList | null /** Assets this object contains. Can be of any size.This field does not support paging. */;
    readonly primaryAsset: Asset | null /** Retrieve the primary asset of a given type */;
    readonly security: Security | null /** Security settings for the asset container */;
    readonly startDateTime: DateTime /** Recording start time. In seconds since epoch. */;
    readonly stopDateTime: DateTime /** Recording stop time. In seconds since epoch. */;
    readonly source: string | null;
    readonly applicationId: string /** Application this recording belongs to */;
    readonly status: string | null /** status. Downloaded, recording, etc. */;
    readonly tasks: TaskList | null /** Tasks running against this TemporalDataObject */;
    readonly jobs: JobList | null /** Jobs running against this temporalDataObject */;
    readonly folders: ReadonlyArray<Folder> | null /** Folders that this TDO is filed in */;
    readonly sourceData: TdoSourceData | null;
    readonly streams: ReadonlyArray<
      TdoStreamData
    > /** If this TDO supports streams, contains stream listings.Might be an empty list but will not be null. */;
    readonly engineRuns: EngineRunList | null /** Statuses of the engines run on the TDO. */;
  }

  export interface AssetList extends Page {
    readonly records: ReadonlyArray<Asset | null> | null;
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number;
    readonly count: number | null /** Number of records returned in this response */;
  }
  /** An asset represents a single unit of data, such as a file or URL,and basic metadata about that data. An asset must be contained withina TemporalDataObject. */
  export interface Asset {
    readonly id: string /** The asset ID */;
    readonly name: string | null /** Asset name, such as a file name. */;
    readonly contentType: string | null /** Asset content type. Must be a valid MIME type string. */;
    readonly description: string | null /** An optional description of the asset */;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly jsondata: Json | null /** Freeform metadata in JSON format. */;
    readonly containerId: string /** The ID of the TemporalDataObject that contains this asset */;
    readonly container: TemporalDataObject | null /** The TemporalDataObject that contains this asset */;
    readonly uri:
      | string
      | null /** The asset's URI. If a file is provided on asset creation, this URIpoint to the object in Veritone's object storage. */;
    readonly signedUri: string | null /** A signed version of the asset's URI */;
    readonly type: string /** The asset type, such as `media`, `transcript`, or `text`.The asset type determines which engines are able to operate on it.For example, a transcription engine requires a `media` asset.Engines that record their results in an asset typically set the typeaccordingly, such as `transcript`. */;
    readonly assetType: string | null /** Deprecated alias for type */;
    readonly details: Json | null /** Freeform application-defined metadata. This field may contain informationspecific to the object type, such as image or video metadata. */;
    readonly jsonstring: string | null /** Metadata as raw JSON string */;
    readonly fileData: AssetFileData | null /** A structured containing metadata about a file. This will be set if theasset was created by uploading a file. */;
    readonly sourceData: AssetSourceData | null /** A structure containing metadata about the source engine and task. This willbe set if the asset was created by an engine. */;
    readonly transform:
      | string
      | null /** Asset transform. The transformation function to be used with the asset.It can be XML to JSON */;
    readonly isUserEdited:
      | boolean
      | null /** A Boolean indicating whether or not this asset was created by editinganother asset. */;
  }
  /** A structured containing metadata about an asset file. */
  export interface AssetFileData {
    readonly md5sum: string | null /** The MD5 checksum of the file */;
    readonly size: number | null /** The file size in bytes */;
    readonly originalFileUri: string | null /** Original file URI, if provided on asset creation */;
  }
  /** A structure containing metadata about the source engine and task for an asset. */
  export interface AssetSourceData {
    readonly name: string | null /** The name of the asset source engine or engine category */;
    readonly taskId: string | null /** ID of the specific task that created the asset */;
    readonly task: Task | null /** The specific task that created the asset */;
    readonly engineId: string | null /** The ID of the engine that created the asset */;
    readonly engine: Engine | null /** The engine that created the asset */;
    readonly sourceId: string | null /** The ID of the source from which this asset was generated or stamped. */;
    readonly schemaId:
      | string
      | null /** ID of the schema describing this asset, if there is one.Typically applies only to assets of type "content-template". */;
    readonly schema: Schema | null /** The schema definition, if there is one */;
  }
  /** Represents a single engine task */
  export interface Task {
    readonly id: string /** The task ID */;
    readonly name: string | null;
    readonly description: string | null;
    readonly createdDateTime: DateTime | null /** Date and time the task was created */;
    readonly modifiedDateTime: DateTime | null /** Date and time the task was last modified */;
    readonly createdBy: string | null;
    readonly modifiedBy: string | null;
    readonly queuedDateTime: DateTime | null /** Date and time the task was queued for execution. */;
    readonly completedDateTime: DateTime | null /** Date and time the task completed. */;
    readonly startedDateTime: DateTime | null /** Date and time task execution started */;
    readonly status: TaskStatus | null /** The task status. See TaskStatus enum for details. */;
    readonly order:
      | number
      | null /** Optional order in which the task should run, relative to other tasksin the job that contains it. */;
    readonly isClone: boolean | null /** Whether or not the task is run on the clone of a TDO */;
    readonly applicationId: string | null /** Application ID that owns the task */;
    readonly targetId: string | null /** The ID of the TemporalDataObject the taskwas created for. */;
    readonly target: TemporalDataObject | null /** The TemporalDataObject the task was created for. */;
    readonly engineId: string | null /** ID of the engine for the task. */;
    readonly engine: Engine | null /** The engine for the task */;
    readonly jobId: string | null /** The ID of the job that contains this task */;
    readonly job: Job | null /** The job that contains this task. */;
    readonly buildId: string | null /** ID of the engine build used for this task. */;
    readonly build: Build | null /** The engine build used for this task */;
    readonly sourceAsset: Asset | null /** The source asset for this task, if there is one. */;
    readonly sourceAssetId: string | null /** The ID of the source asset for this task, if there is one. */;
    readonly mediaLengthSec: number | null;
    readonly mediaStorageBytes: number | null;
    readonly mediaFileName: string | null;
    readonly payload: Json | null /** The incoming task payload, in JSON format */;
    readonly output: Json | null /** The task output, in JSON format. */;
    readonly payloadString: string | null /** The incoming task payload, in String format. */;
    readonly outputString: string | null /** The task output, in String format. */;
    readonly log: TaskLog | null /** The log file produced during task execution */;
    readonly taskPayload: Json | null /** For backwards compatibility only */;
    readonly taskOutput: Json | null /** For backwards compatibility only */;
    readonly testTask: boolean | null /** True if this task was created as a test task */;
    readonly parentTaskId: string | null;
    readonly parentTask: Task | null;
    readonly childTaskIds: ReadonlyArray<string> | null;
    readonly childTasks: ReadonlyArray<Task> | null;
    readonly standbyTask: Task | null /** A standby task that will execute if this one fails. */;
    readonly standbyForTask: Task | null /** The task that this task is a standby for. If the taskidentified in this field fails, the current task will execute. */;
    readonly runtimePayload: Json | null /** Contains metadata used by the platform run-time system to executethe task. This field is accessible only to platform components. */;
    readonly engineConfiguration: EngineConfiguration | null;
    readonly engineConfigurationId: string | null;
    readonly executionLocation: ExecutionLocation | null;
    readonly executionLocationId: string | null;
    readonly templateId: string | null;
    readonly template: TaskTemplate | null;
  }

  export interface Engine {
    readonly id: string;
    readonly ownerOrganizationId: string;
    readonly isPublic: boolean | null;
    readonly logoPath: string | null;
    readonly iconPath: string | null;
    readonly signedIconPath:
      | string
      | null /** The signed URL for the engine icon; will fallback to raw iconPath if unable to sign. */;
    readonly signedLogoPath:
      | string
      | null /** The signed URL for the engine logo; will fallback to raw logoPath if unable to sign. */;
    readonly name: string | null;
    readonly ownerOrganization: Organization | null;
    readonly description: string | null;
    readonly categoryId: string | null;
    readonly state: EngineState | null;
    readonly price: number | null;
    readonly asset: string | null;
    readonly displayName: string | null;
    readonly validateUri: string | null;
    readonly executeUri: string | null;
    readonly applicationId: string | null;
    readonly createsTDO:
      | boolean
      | null /** True if the engine creates a TemporalDataObject (TDO) as part of itsexecution. False otherwise. */;
    readonly website: string | null;
    readonly rating: number | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly createdBy: string | null;
    readonly modifiedBy: string | null;
    readonly libraryRequired:
      | boolean
      | null /** True if the engine requires a library to run. If so, a library ID mustbe provided in the engine payload. */;
    readonly deploymentModel: DeploymentModel | null;
    readonly tasks: TaskList | null;
    readonly builds: BuildList | null /** Retrieve builds for the engine.By default, deleted builds are not included.Deleted builds can be retrieved by including the `deleted` status parameter. */;
    readonly dependency: EngineDependency | null /** Dependency information for this engine */;
    readonly fields: ReadonlyArray<
      EngineField
    > | null /** The list of custom fields on the engine. Users will be prompted toset or change these values when they run the engine. For example, atranslation engine might have a field for the target language. */;
    readonly category: EngineCategory | null /** The engine category */;
    readonly validStateActions: ReadonlyArray<EngineStateAction | null> | null;
    readonly preferredInputFormat:
      | string
      | null /** Get the engine's preferred input format, based on the latest deployed build.If there is no deployed build this field cannot be populated. */;
    readonly supportedInputFormats: ReadonlyArray<
      string
    > | null /** Get the engine's supported input formats, based on the latest deployed build.If there is no deployed build this field cannot be populated. */;
    readonly outputFormats: ReadonlyArray<
      string
    > | null /** Get the engine's output formats, based on the latest deployed build.If there is no deployed build this field cannot be populated. */;
    readonly supportedSourceTypes: ReadonlyArray<
      string
    > | null /** List of IDs of source types that the engine supports,based on the latest deployed build.If there is no deployed build this field cannot be populated.Applies only to adapter engines that ingest data from a source.Will be a list of IDs of SourceType objects. */;
    readonly hasScanPhase:
      | boolean
      | null /** Get the ingestion flag which determines whether the adapter has a scan phase during ingestion.If there is no deployed build this field cannot be populated. */;
    readonly deployedVersion:
      | number
      | null /** Get the deployed build version of this engine. If there is no deployedbuild, this field will be null. */;
    readonly mode: EngineMode | null /** Specifies the mode in which the engine process input */;
    readonly runtimeType: string | null /** Specifies the runtime type, such as "iron" or "edge" */;
    readonly oauth:
      | string
      | null /** Get oauth information based on the deployed build. If there is no deployedbuild, this field will be null. */;
    readonly supportedScheduleTypes: ReadonlyArray<
      EngineScheduleType
    > | null /** List of schedule types that the engine supports,based on the latest deployed build.If there is no deployed build, this field cannot be populated. */;
    readonly taskMetrics: EngineTaskMetrics | null /** Retrieve task metrics for the engine */;
  }

  export interface Organization {
    readonly id: string /** The organization ID */;
    readonly name: string | null /** The organization's name */;
    readonly type: ReadonlyArray<
      string | null
    > | null /** A list of types applied to the organization, suchas `Broadcaster` or `Agency`. */;
    readonly applications: ApplicationList | null /** Applications belonging to the organization */;
    readonly jsondata: Json | null /** Freeform metadata in JSON format */;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly seatLimit: number | null;
    readonly status: OrganizationStatus | null /** Organization's current status */;
    readonly roles: ReadonlyArray<Role | null> | null /** Roles allowed within the organization */;
    readonly users: UserList | null /** Users belonging to the organization */;
    readonly blacklist: EngineBlacklist | null /** List of engines forbidden to this organization. */;
    readonly whitelist: EngineWhitelist | null /** List of engines allowed for this organization.Takes precedence of the blacklist. That is, if a whitelistis defined, then only engines in the whitelist are permittedregardless of what is in the blacklist.This field is not fully implemented! */;
    readonly schemas: SchemaList | null /** Custom schemas defined by this organization.This field is not fully implemented! */;
    readonly watchlists: WatchlistList | null /** Watchlists for this organization.This field is not fully implemented! */;
    readonly collections: CollectionList | null /** Collections for this organization */;
    readonly rootFolder: Folder | null /** Folder tree for this organization */;
    readonly businessUnit: string | null /** Business unit */;
    readonly dashboards: ReadonlyArray<Dashboard | null> | null /** Dashboards */;
    readonly imageUrl: string | null;
    readonly internalApplicationId:
      | string
      | null /** An ID corresponding to the organization used internally for someprovisioning elements. `applicationId` on `TemporalDataObject`, `Job`,and some other types uses this value instead of the organization `id`. */;
    readonly seats: number | null /** The number of active seats */;
  }

  export interface ApplicationList extends Page {
    readonly records: ReadonlyArray<Application | null> | null;
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number /** Maximum number of results that were retrieved in this query; page size */;
    readonly count: number | null /** Number of records returned in this response */;
  }
  /** An application is a set of Veritone functionality that customers can sign up for. */
  export interface Application {
    readonly id: string;
    readonly key: string;
    readonly name: string;
    readonly category: string | null;
    readonly description: string | null;
    readonly iconUrl: string | null;
    readonly iconSvg: string | null;
    readonly url: string | null;
    readonly deploymentModel: DeploymentModel | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly clientSecret:
      | string
      | null /** OAuth2 client secret. This field is server-generated and is onlyreturned on application creation. */;
    readonly oauth2RedirectUrls: ReadonlyArray<string | null> | null /** OAuth2 redirect URLs */;
    readonly organizationId: string;
    readonly status: ApplicationStatus | null;
    readonly permissionsRequired: ReadonlyArray<string | null> | null;
    readonly contextMenuExtensions: ContextMenuExtensionList | null;
    readonly validStateActions: ReadonlyArray<ApplicationStateAction | null> | null;
  }

  export interface ContextMenuExtensionList {
    readonly mentions: ReadonlyArray<ContextMenuExtension | null> | null;
    readonly tdos: ReadonlyArray<ContextMenuExtension | null> | null;
    readonly watchlists: ReadonlyArray<ContextMenuExtension | null> | null;
    readonly collections: ReadonlyArray<ContextMenuExtension | null> | null;
  }

  export interface ContextMenuExtension {
    readonly id: string;
    readonly label: string;
    readonly url: string;
  }
  /** A role signifies a user's permissions within a given context. */
  export interface Role {
    readonly description: string | null;
    readonly appName: string | null;
    readonly name: string;
    readonly permissions: PermissionList | null;
    readonly id: string;
  }

  export interface PermissionList extends Page {
    readonly records: ReadonlyArray<Permission | null> | null;
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number /** Maximum number of results that were retrieved in this query; page size */;
    readonly count: number | null /** Number of records returned in this response */;
  }

  export interface Permission {
    readonly id: string;
    readonly name: string | null;
    readonly description: string | null;
  }

  export interface UserList extends Page {
    readonly records: ReadonlyArray<User | null> | null;
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number /** Maximum number of results that were retrieved in this query; page size */;
    readonly count: number | null /** Number of records returned in this response */;
  }
  /** A user represents a user account within an organization. */
  export interface User {
    readonly name: string /** The user's name */;
    readonly id: string /** The user's unique ID.A user ID is a string in UUID format. */;
    readonly permissions: PermissionList | null /** The set of permissions granted to the user */;
    readonly roles: ReadonlyArray<Role> | null /** The set of roles granted to the user */;
    readonly roleIds: ReadonlyArray<string> | null;
    readonly organizationId: string | null /** ID of the organization to which the user belongs. */;
    readonly organization: Organization | null /** Organization to which the user belongs. */;
    readonly jsondata: Json | null /** Freeform metadata in JSON form */;
    readonly firstName: string | null;
    readonly lastName: string | null;
    readonly email: string | null;
    readonly acls: ReadonlyArray<UserAcl> | null;
    readonly rootFolder: Folder | null /** Folder tree for this organization */;
    readonly passwordUpdatedDateTime: DateTime | null /** Date and time this user last changed their password */;
    readonly lastLoginDateTime: DateTime | null /** Date and time this user last logged in */;
    readonly createdDateTime: DateTime | null /** Date and time this user account was created */;
    readonly modifiedDateTime: DateTime | null /** Date and time this user account was last modified */;
    readonly mfaInfo: MfaInfo /** Multi-factor authentication information for the user */;
    readonly userSettings: ReadonlyArray<UserSetting> | null /** User Settings for the user */;
    readonly imageUrl: string | null;
    readonly status: UserStatus | null /** Status of user account */;
  }

  export interface UserAcl {
    readonly applicationId: string | null;
    readonly organizationId: string | null;
    readonly organization: Organization | null;
    readonly objectType: string | null;
    readonly objectId: string | null;
    readonly access: UserAclAccessRights | null;
    readonly userId: string | null;
  }

  export interface UserAclAccessRights {
    readonly owner: boolean | null;
  }

  export interface Folder {
    readonly id: string /** The ID of this folder */;
    readonly treeObjectId: string;
    readonly name: string | null /** The name of this folder */;
    readonly description: string | null /** An optional description */;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly ownerId: string | null;
    readonly parent: Folder | null /** The parent folder */;
    readonly subfolders: ReadonlyArray<Folder> | null /** The subfolders of this folder */;
    readonly organization: Organization | null /** The organization that owns this folder */;
    readonly organizationId: string | null /** The ID of the organization that owns this folder */;
    readonly typeId: number | null;
    readonly rootFolderTypeId: number | null;
    readonly maxDepth: number | null /** The maximum depth of child folders allowed */;
    readonly orderIndex: number | null;
    readonly status: FolderStatus | null /** The folder status */;
    readonly folderPath: ReadonlyArray<
      Folder
    > | null /** The ordered path of the folder hierarchy. The first elementis always a root folder, and the last is this folder's parent. */;
    readonly childTDOs: TdoList | null /** TemporalDataObjects that are filed in this folder */;
    readonly sharedAccess: ReadonlyArray<string | null> | null /** The read/write permissions for a shared folder */;
    readonly sharedWith: SharedWith | null;
    readonly contentTemplates: ReadonlyArray<FolderContentTemplate>;
  }

  export interface SharedWith {
    readonly read: ReadonlyArray<
      number | null
    > | null /** List of organizationIds that have read access to this object */;
    readonly write: ReadonlyArray<
      number | null
    > | null /** List of organizationIds that have write access to this object */;
  }

  export interface FolderContentTemplate {
    readonly id: string;
    readonly folderId: string;
    readonly sdoId: string;
    readonly sdo: StructuredData | null;
    readonly schemaId: string;
    readonly data: Json | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
  }

  export interface StructuredData {
    readonly id: string /** The ID */;
    readonly schemaId: string /** Id of the schema used to validate this object */;
    readonly schema: Schema | null /** The schema used to validate this object */;
    readonly data: Json | null;
    readonly dataString: string | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
  }

  export interface Schema {
    readonly id: string;
    readonly dataRegistryId: string;
    readonly dataRegistry: DataRegistry | null;
    readonly definition: Json | null;
    readonly majorVersion: number;
    readonly minorVersion: number;
    readonly createdBy: User | null;
    readonly modifiedBy: User | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly status: SchemaStatus | null;
    readonly validActions: ReadonlyArray<SchemaAction | null> | null /** List of status the Schema can transition to. */;
    readonly structuredDataObjects: StructuredDataList | null /** SDOs under this schema */;
    readonly organization: Organization | null /** The organization that owns this schema. */;
    readonly organizationId: string | null /** The Id of the organization that owns this schema. */;
  }

  export interface DataRegistry {
    readonly id: string;
    readonly name: string | null;
    readonly description: string | null;
    readonly source: string | null;
    readonly schemas: SchemaList | null;
    readonly organization: Organization | null /** The organization that owns this data registry. */;
    readonly organizationId: string | null;
    readonly createdBy: User | null;
    readonly modifiedBy: User | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly publishedSchema: Schema | null /** The currently published schema version for convenient access.This field will be empty if there is no published schema. */;
  }

  export interface SchemaList extends Page {
    readonly records: ReadonlyArray<Schema | null> | null;
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number /** Maximum number of results that were retrieved in this query; page size */;
    readonly count: number | null /** Number of records returned in this response */;
  }

  export interface StructuredDataList extends Page {
    readonly records: ReadonlyArray<StructuredData | null> | null;
    readonly count: number | null;
    readonly offset: number;
    readonly limit: number;
  }
  /** Type that holds multi-factor authentication for a user */
  export interface MfaInfo {
    readonly phoneNumber: string | null;
    readonly smsVoiceVerifiedDateTime: DateTime | null;
    readonly gaVerifiedDateTime: DateTime | null;
    readonly defaultOption: string | null;
    readonly pendingRegistration: string | null;
  }
  /** Type that holds user setting for a user */
  export interface UserSetting {
    readonly key: string | null;
    readonly value: string | null;
  }

  export interface EngineBlacklist {
    readonly organizationId: string;
    readonly engines: ReadonlyArray<Engine | null> | null;
    readonly engineCategories: ReadonlyArray<EngineCategory | null> | null;
  }

  export interface EngineCategory {
    readonly id: string;
    readonly name: string | null;
    readonly description: string | null;
    readonly type: EngineType | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly createdBy: string | null;
    readonly modifiedBy: string | null;
    readonly engineIds: ReadonlyArray<string> | null /** The list of IDs of engines in this category */;
    readonly totalEngines: number | null;
    readonly iconClass: string | null;
    readonly editable: boolean | null;
    readonly videoOnly: boolean | null;
    readonly color: string | null;
    readonly engines: EngineList | null /** The list of engines in this category */;
    readonly libraryEntityIdentifierTypeIds: ReadonlyArray<
      string
    > | null /** If the engine category is integrated with libraries, this field containsthe list of IDs of entity identifier types that the engine category is compatiblewith. */;
    readonly libraryEntityIdentifierTypes: EntityIdentifierTypeList | null /** If the engine category is integrated with libraries, this field containsthe list of entity identifier types that the engine category is compatiblewith. */;
    readonly categoryType:
      | string
      | null /** A type for the engine category. Multiple engine categories with commonelements can share a categoryType. This information is used to computedependencies and format user interface elements. */;
    readonly categoryMetadataKey:
      | string
      | null /** An optional key used to identify this engine category's results forsearch and other purposes.Primarily used by Veritone platform applications. */;
    readonly dependencies: ReadonlyArray<
      EngineDependency
    > | null /** A list of categoryTypes on which instances of this engine category depend. */;
    readonly searchConfiguration: EngineSearchConfiguration | null /** Information about how engine results in this category can be searchedin Veritone platform applications.Used primarily by Veritone platform applications. */;
    readonly exportFormats: ReadonlyArray<ExportFormat | null> /** List of engine result export formats supported by engines in thiscategory. May be empty. */;
  }

  export interface EngineType {
    readonly name: string | null;
    readonly description: string | null;
  }

  export interface EngineList extends Page {
    readonly records: ReadonlyArray<Engine | null> | null;
    readonly count: number /** Number of records returned in this response */;
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number;
  }

  export interface EntityIdentifierTypeList extends Page {
    readonly records: ReadonlyArray<EntityIdentifierType> | null;
    readonly limit: number;
    readonly offset: number;
    readonly count: number | null;
  }

  export interface EntityIdentifierType {
    readonly id: string;
    readonly label: string;
    readonly labelPlural: string;
    readonly iconClass: string | null;
    readonly description: string | null;
    readonly dataType: EntityIdentifierDataType;
  }

  export interface EngineDependency {
    readonly dependencyType: string /** TODO maps to values in engineCategory.data_field?Must be a valid categoryType from an existing EngineCategory. */;
    readonly assetType: string | null /** Asset type to expect previous engine to produce */;
    readonly category: EngineCategory | null /** The engine category corresponding to this dependency */;
  }
  /** Represents configuration on how the results of engines within a givencategory are indexed and searched.Primarily used by Veritone platform applications. */
  export interface EngineSearchConfiguration {
    readonly autocompleteFields: ReadonlyArray<
      AutocompleteFieldConfig
    > | null /** Autocomplete field information is used to tell client applicationswhat fields are searchable by autocomplete in the search index andhow to search for them. */;
    readonly searchFields: ReadonlyArray<
      SearchFieldConfig
    > | null /** Autocomplete field information is used to tell client applicationswhat fields are searchable in the search index andhow to search for them. */;
    readonly isSearchEnabled:
      | boolean
      | null /** Indicates whether or not search is available for results producedby engines in this category can be searched. */;
    readonly isElasticEnabled:
      | boolean
      | null /** Indicates whether or not search is available for results producedby engines in this category can be searched within the Elasticsearch index. */;
    readonly searchMetadataKey: string | null;
    readonly elasticType: string | null;
  }

  export interface AutocompleteFieldConfig {
    readonly autocompleteField: string | null;
    readonly indexField: string | null;
  }

  export interface SearchFieldConfig {
    readonly searchField: string | null;
    readonly indexField: string | null;
  }

  export interface ExportFormat {
    readonly format: string /** The file format/extension i.e. ttml, vlf, etc. */;
    readonly label: string /** A human readable label for the file format i.e. "Time Text Markup Language" */;
    readonly types: ReadonlyArray<string | null> /** A list types to categories the file format by i.e. "subtitle" */;
  }

  export interface EngineWhitelist {
    readonly organizationId: string;
    readonly engines: ReadonlyArray<Engine | null> | null;
    readonly engineCategories: ReadonlyArray<EngineCategory | null> | null;
  }

  export interface WatchlistList extends Page {
    readonly records: ReadonlyArray<Watchlist | null> | null;
    readonly offset: number /** Provide an offset to skip to a certain element in the result, for paging. */;
    readonly limit: number /** Maximum number of results that were retrieved in this query; page size */;
    readonly count: number | null /** Number of records returned in this response */;
  }

  export interface Watchlist {
    readonly id: string /** The primary ID */;
    readonly name: string /** A human-readable name for the watchlist */;
    readonly organization: Organization /** The organization that owns the watchlist */;
    readonly organizationId: string /** ID of the organization that owns the watchlist */;
    readonly scheduleIds: ReadonlyArray<string> | null /** IDs of the schedules associated with the watchlist */;
    readonly startDateTime: DateTime | null /** Date and time at which the watchlist takes effect */;
    readonly stopDateTime: DateTime | null /** Date and time at which the watchlist is no longer in effect */;
    readonly createdDateTime: DateTime | null /** Date and time the watchlist was created */;
    readonly modifiedDateTime: DateTime | null /** Date and time the watchlist was last modified */;
    readonly cognitiveSearches: ReadonlyArray<
      CognitiveSearch
    > | null /** Cognitives searches associated with the watchlist */;
    readonly sourceTypeIds: ReadonlyArray<
      string
    > | null /** Ids of the source types associated directly with the watchlist */;
    readonly sourceIds: ReadonlyArray<string> | null /** IDs of the sources associated directly with the watchlist */;
    readonly folders: ReadonlyArray<
      Folder
    > | null /** Folders that the watchlist is filed in.At present, a watchlist can only be filed in a single folder. */;
    readonly details: Json | null /** Structured metadata associated with the watchlist.Elements of the metadata are validated against specific schemas. */;
    readonly subscriptions: ReadonlyArray<Subscription>;
    readonly searchIndex: SearchIndex;
    readonly query: Json | null;
    readonly mentions: MentionList | null /** Get mentions generated for this watchlist */;
    readonly advertiserId: string | null /** ID of the advertiser directly with the watchlist */;
    readonly brandId: string | null /** ID of the brand directly with the watchlist */;
    readonly advertiser: Json | null /** advertiser associated with the watchlist */;
    readonly brand: Json | null /** brand associated with the watchlist */;
    readonly combinedSourceTypeIds: ReadonlyArray<
      string
    > | null /** Contains the list of all source type IDsassociated with this watchlist, includingthose for sources on schedules. */;
    readonly scheduledJobs: ScheduledJobList;
    readonly schedules: ScheduledJobList /** TODO for backward compat with v3 search? */;
  }

  export interface CognitiveSearch {
    readonly id: string;
    readonly profile: Json | null /** A recursive tree structure defining the search criteria */;
    readonly mentionStatusId:
      | string
      | null /** ID of the mention status to set on each mention generated as a resultof a match against this search */;
    readonly mentionStatus: MentionStatus | null /** The mention status to set on each mention generated as a resultof a match against this search */;
    readonly query: Json | null /** The raw query. Read-only and server-generated based on the search profile. */;
  }

  export interface MentionStatus {
    readonly id: string;
    readonly name: string;
  }

  export interface Subscription {
    readonly id: string;
    readonly organizationId: string;
    readonly objectType: SubscriptionObjectType;
    readonly frequency: SubscriptionFrequency;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly isActive: boolean;
    readonly targetId: string /** The ID of the object on which this subscription is set,such as a watchlist ID. */;
    readonly scheduledTime: Time | null /** Scheduled time of day */;
    readonly scheduledTimeZone: string | null /** Time zone of the scheduled time */;
    readonly scheduledDay: DayOfWeek | null /** Scheduled day of the week */;
    readonly jsondata: Json | null;
    readonly contact: SubscriptionContact;
    readonly unsubscribeHash: string | null;
  }

  export interface SubscriptionContact {
    readonly userId: string;
    readonly emailAddress: string | null;
    readonly phoneNumber: string | null;
    readonly webhookUri: string | null;
  }

  export interface MentionList extends Page {
    readonly offset: number;
    readonly limit: number;
    readonly count: number | null;
    readonly records: ReadonlyArray<Mention> | null;
  }

  export interface Mention {
    readonly id: string;
    readonly organizationId: string;
    readonly sourceTypeId: string | null;
    readonly sourceId: string | null;
    readonly scheduleId: string | null;
    readonly mediaId: string | null;
    readonly advertiserId: string | null;
    readonly brandId: string | null;
    readonly campaignId: string | null;
    readonly watchlistId: string | null;
    readonly statusId: string | null;
    readonly complianceStatusId: string | null;
    readonly spotTypeId: string | null;
    readonly audienceMarketCount: number | null;
    readonly audienceAffiliateCount: number | null;
    readonly mentionHitCount: number | null;
    readonly audience: number | null;
    readonly mentionRating: number | null;
    readonly isMatch: boolean | null;
    readonly mentionDate: DateTime | null;
    readonly metadata: Json | null;
    readonly mentionSnippets: ReadonlyArray<MentionSnippets | null> | null;
    readonly userSnippets: ReadonlyArray<MentionUserSnippets | null> | null;
    readonly adCreative: Json | null;
    readonly fingerprint: Json | null;
    readonly cognitiveEngineResults: Json | null;
    readonly comments: MentionCommentList | null;
    readonly hash: string | null;
    readonly hitStartDateTime: DateTime | null;
    readonly hitEndDateTime: DateTime | null;
    readonly endDateTime: DateTime | null;
    readonly scheduledJob: ScheduledJob | null;
    readonly temporalDataObject: TemporalDataObject | null;
    readonly organization: Organization;
    readonly watchlist: Watchlist | null;
    readonly advertiser: Json | null;
    readonly brand: Json | null;
    readonly queryTerm: string | null;
    readonly ratings: MentionRatingList | null;
  }

  export interface MentionSnippets {
    readonly text: string | null;
    readonly startTime: number | null;
    readonly endTime: number | null;
    readonly hits: ReadonlyArray<MentionHit | null> | null;
  }

  export interface MentionHit {
    readonly queryTerm: string | null;
    readonly startTime: number | null;
    readonly endTime: number | null;
  }

  export interface MentionUserSnippets {
    readonly text: string | null;
    readonly startTime: number | null;
    readonly endTime: number | null;
    readonly transcriptStartDate: string | null;
    readonly transcriptEndDate: string | null;
  }

  export interface MentionCommentList extends Page {
    readonly offset: number;
    readonly limit: number;
    readonly count: number | null;
    readonly records: ReadonlyArray<MentionComment | null> | null;
  }

  export interface MentionComment {
    readonly commentId: string;
    readonly mentionId: string | null;
    readonly userId: string | null;
    readonly firstName: string | null;
    readonly lastName: string | null;
    readonly userImage: string | null;
    readonly commentText: string | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
  }

  export interface ScheduledJob {
    readonly id: string;
    readonly organizationId: string | null;
    readonly organization: Organization | null /** Organization that owns this scheduled job */;
    readonly name: string | null;
    readonly description: string | null;
    readonly startDateTime: DateTime | null;
    readonly stopDateTime: DateTime | null;
    readonly jobPipelineIds: ReadonlyArray<string> | null;
    readonly jobPipelines: JobPipelineList;
    readonly jobTemplateIds: ReadonlyArray<string> | null;
    readonly jobTemplates: JobTemplateList;
    readonly allJobTemplates: JobTemplateList /** Retrieve the complete set of job templates associated with thisscheduled job, including those that are associated through a jobpipeline. */;
    readonly primarySourceId:
      | string
      | null /** The ID of the primary source on this scheduled job, if applicable.This is based on the payloads of the tasks that are invoked forthis scheduled job. */;
    readonly primarySource: Source | null /** The primary source. See `primarySourceId` above. */;
    readonly jobs: JobList;
    readonly sources: SourceList | null /** Get a list of sources that are usedby engine configurations that referencethis schedule through the schedule -> job -> task relationship. */;
    readonly parts: ReadonlyArray<SchedulePart> | null;
    readonly isActive: boolean;
    readonly runMode: RunMode;
    readonly details: Json | null;
    readonly detailsSchemaId: string | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly contentTemplates: ReadonlyArray<
      ScheduledJobContentTemplate
    > /** List of schema-controlled content templates attachedto this scheduled job */;
    readonly collaborators: ScheduledJobCollaboratorList /** Permissions granted to other organizations. Only the source ownercan view or edit this field. */;
    readonly isPublic:
      | boolean
      | null /** A public scheduled job can be viewed and launched byusers from any organization. By default, scheduled jobs areprivate and can only be viewed or launched by the owning organizationand organizations that the owner has explicitly shared them with.Only Veritone administrators can create public scheduled jobs. */;
    readonly permission: ScheduledJobPermission | null /** The user's permission on this scheduled job */;
    readonly primarySourceTypeId: string | null;
    readonly primarySourceType: SourceType | null;
    readonly ingestionStatusId: string | null;
    readonly ingestionStatus: string | null;
    readonly affiliates: ProgramAffiliateList;
  }

  export interface JobPipelineList extends Page {
    readonly records: ReadonlyArray<JobPipeline>;
    readonly count: number;
    readonly offset: number;
    readonly limit: number;
  }

  export interface JobPipeline {
    readonly id: string /** Unique ID of this job pipeline */;
    readonly jobTemplates: JobTemplateList | null /** List of job templates associated with this job pipeline */;
    readonly organizationId: string | null /** ID of the organization that owns this job pipeline */;
    readonly organization: Organization | null /** The organization that owns this job pipeline */;
    readonly isPublic: boolean /** Indicates whether or not this job pipeline is public. If so, it canbe viewed and used, but not modified, by all organizations. */;
  }

  export interface JobTemplateList extends Page {
    readonly records: ReadonlyArray<JobTemplate>;
    readonly count: number;
    readonly offset: number;
    readonly limit: number;
  }
  /** A job template is a reusable template for job creation. */
  export interface JobTemplate {
    readonly id: string /** The object ID */;
    readonly createdDateTime: DateTime | null /** Date and time this job template was created */;
    readonly modifiedDateTime: DateTime | null /** Date and time this job template was last modified */;
    readonly taskTemplates: TaskTemplateList /** Task templates associated with this job template */;
    readonly jobPipelineId: string | null /** Job pipeline ID that this template belongs to, if there is one */;
    readonly jobPipeline: JobPipeline | null /** Job pipeline that this template belongs to, if there is one */;
    readonly jobPipelineStage:
      | number
      | null /** Job pipeline stage. Defined only if this template belongs to a job pipeline. */;
    readonly clusterId: string | null /** Target execution cluster ID */;
    readonly skipDecider: boolean | null;
    readonly jobConfig: Json | null /** Optional configuration data for jobs launched from the template.A schema may be enforced over the data stored here.Used for top-level information about the job that does not fit ona specific task template. */;
  }

  export interface TaskTemplateList extends Page {
    readonly records: ReadonlyArray<TaskTemplate>;
    readonly count: number;
    readonly offset: number;
    readonly limit: number;
  }

  export interface TaskTemplate {
    readonly id: string;
    readonly engineId: string | null;
    readonly engine: Engine | null;
    readonly engineConfigId: string | null;
    readonly engineConfig: EngineConfiguration | null;
    readonly executionLocationId: string | null;
    readonly executionLocation: ExecutionLocation | null;
    readonly jobTemplateId: string | null;
    readonly jobTemplate: JobTemplate | null;
    readonly payload: Json | null;
    readonly payloadString: string | null;
    readonly parentTaskId: string | null;
    readonly parentTask: Task | null;
    readonly childTaskIds: ReadonlyArray<string>;
    readonly childTasks: TaskTemplateList;
  }

  export interface EngineConfiguration {
    readonly id: string;
    readonly credentials: ReadonlyArray<ExternalCredential> | null;
    readonly sourceId: string | null;
    readonly source: Source | null;
  }

  export interface ExternalCredential {
    readonly id: string;
    readonly sourceTypeId: string | null;
    readonly sourceType: SourceType | null;
    readonly data: StructuredData | null;
    readonly dataId: string | null;
  }
  /** A source type represents a category of sources that share commonattributes, such as "TV station" or "Real-time camera feed". */
  export interface SourceType {
    readonly id: string /** Unique ID of this source type */;
    readonly name: string /** A name for this source type */;
    readonly organizationId: string | null;
    readonly isPublic: boolean | null;
    readonly sourceSchemaId:
      | string
      | null /** The ID of an optional schema for instances (sources) ofthis source type */;
    readonly iconClass: string | null /** The icon representing the type of source */;
    readonly sourceSchema: Schema | null /** The schema object used to validate details for instances (sources)of this source type */;
    readonly credentialSchemaId:
      | string
      | null /** The ID of an optional schema for credentials associated withsources of this type. */;
    readonly credentialSchema: Schema | null /** The schema used to validate credentials associated with sourcesof this type. */;
    readonly createdDateTime: DateTime | null /** Date and time this object was created. */;
    readonly modifiedDateTime: DateTime | null /** Date and time this object was last modified */;
    readonly credentialType: CredentialType | null;
    readonly isLive: boolean | null /** Indicates whether or not the source is "live", such as a camera feed */;
    readonly requiresScanPipeline: boolean | null /** Indicates whether the source requires a scan job pipeline */;
    readonly supportedRunModes: ReadonlyArray<RunMode>;
    readonly categoryId: string /** The source type category ID for this source type.Used primarily by Veritone platform components. */;
    readonly category: SourceTypeCategory /** The source type category for this source type.Used primarily by Veritone platform components. */;
    readonly sourceFormats: ReadonlyArray<
      string
    > /** List of source formats applicable to this source type.Only applies to certain source types; many will have anempty list. */;
    readonly programFormats: ReadonlyArray<
      string
    > /** List of program formats applicable to this source type.Only applies to certain source types; many will have anempty list. */;
    readonly sources: SourceList /** Sources created under this source type */;
  }
  /** Source type categories are managed by Veritone. */
  export interface SourceTypeCategory {
    readonly id: string;
    readonly name: string;
  }

  export interface SourceList extends Page {
    readonly records: ReadonlyArray<Source>;
    readonly count: number;
    readonly offset: number;
    readonly limit: number;
  }
  /** A source represents a source of data and is used by adapters to ingestdata into the platform for use by an engine workflow. */
  export interface Source {
    readonly id: string /** Unique ID of this source */;
    readonly sourceTypeId: string /** ID of the source type for this source. */;
    readonly sourceType: SourceType | null /** The source type for this source */;
    readonly name: string /** A name for this source */;
    readonly details: Json | null /** Metadata associated with this source. The schema for this data isspecific to the source type and controlled by a schema. */;
    readonly isPublic: boolean /** Indicates whether this source is public and available to all organizationsor restricted to the organization that owns id. */;
    readonly organizationId: string /** ID of the organization that owns this source */;
    readonly organization: Organization | null /** The organization that owns this source */;
    readonly createdDateTime: DateTime | null /** Date and time this source was created */;
    readonly modifiedDateTime: DateTime | null /** Date and time this source was last modified */;
    readonly thumbnailUrl: string | null /** An optional thumbnail image URL for the source */;
    readonly contentTemplates: ReadonlyArray<SourceContentTemplate>;
    readonly correlationSchemaId: string | null /** Id of a published data registry schema */;
    readonly correlationSDOId: string | null /** Id of a structured data object for the correlationSchemaId */;
    readonly permission: SourcePermission /** permission the currently authenticated principal has on this source. */;
    readonly collaborators: SourceCollaboratorList /** Permissions granted to other organizations. Only the source ownercan view or edit this field. */;
    readonly state: Json | null /** Current state for the source object. This is controlled bythe adapters that use the source and should not be set byother clients. */;
  }

  export interface SourceContentTemplate {
    readonly id: string;
    readonly sourceId: string;
    readonly sdoId: string;
    readonly sdo: StructuredData | null;
    readonly schemaId: string;
    readonly data: Json | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
  }

  export interface SourceCollaboratorList extends Page {
    readonly records: ReadonlyArray<SourceCollaborator>;
    readonly offset: number;
    readonly limit: number;
    readonly count: number | null;
  }
  /** A source ACL grants a single organization limited rights to a private source */
  export interface SourceCollaborator {
    readonly permission: SourcePermission /** The permission granted. Either `viewer` or `editor`. */;
    readonly organizationId: string /** Organization ID the source was shared with */;
    readonly organization: Organization | null /** The organization the source was shared with */;
  }

  export interface ExecutionLocation {
    readonly id: string;
    readonly clusterId: string;
    readonly cluster: Cluster;
    readonly nodeId: string | null;
    readonly node: ClusterNode | null;
    readonly data: Json;
  }

  export interface Cluster {
    readonly id: string;
    readonly nodes: ReadonlyArray<ClusterNode | null> | null;
    readonly name: string | null;
    readonly isPublic: boolean | null;
    readonly type: ClusterType | null;
    readonly organizationId: string | null;
    readonly allowedEngines: ReadonlyArray<string> | null;
    readonly containerTag: string | null;
    readonly paused: boolean | null;
    readonly memorySizeBytes: number | null;
    readonly storageSizeBytes: number | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly deletedDateTime: DateTime | null;
    readonly cachedDateTime: DateTime | null;
    readonly default: boolean | null;
    readonly bypassAllowedEngines: boolean | null;
    readonly collaborators: ClusterCollaboratorList | null;
  }

  export interface ClusterNode {
    readonly id: string;
    readonly clusterId: string | null;
    readonly cluster: Cluster | null;
    readonly name: string | null;
  }

  export interface ClusterCollaboratorList extends Page {
    readonly records: ReadonlyArray<ClusterCollaborator>;
    readonly offset: number;
    readonly limit: number;
    readonly count: number | null;
  }
  /** A source ACL grants a single organization limited rights to a private clusters */
  export interface ClusterCollaborator {
    readonly permission: ClusterPermission /** The permission granted. */;
    readonly organizationId: string /** Organization ID the cluster was shared with */;
    readonly organization: Organization | null /** The organization the cluster was shared with */;
  }

  export interface JobList extends Page {
    readonly records: ReadonlyArray<Job | null> | null /** Jobs retrieved */;
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number /** Maximum number of results that were retrieved in this query; page size */;
    readonly count: number | null /** Number of records returned in this response */;
  }

  export interface Job {
    readonly id: string /** ID of the job */;
    readonly name: string | null /** User-provided job name */;
    readonly description: string | null /** Optional job description */;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly createdBy: string | null;
    readonly modifiedBy: string | null;
    readonly targetId: string | null /** ID of the target object for the job, such as a container or Recording */;
    readonly sourceAssetId: string | null /** Source asset ID */;
    readonly status: TaskStatus | null /** Overall job status, as computed from the statuses of its component tasks */;
    readonly tasks: TaskList | null /** Tasks the job has or will execute */;
    readonly applicationId: string | null /** Application the job ran under */;
    readonly target: TemporalDataObject | null /** Target TemporalDataObject */;
    readonly clusterId: string | null /** ID of the cluster where this job will be executed */;
    readonly jobConfig: Json | null;
    readonly templateId: string | null /** ID of the template from which this job was created, if applicable. */;
    readonly template: JobTemplate | null /** The template which this job was created, if applicable. */;
    readonly scheduledJobId:
      | string
      | null /** ID of the scheduled job under which this job was created, if applicable. */;
    readonly scheduledJob: ScheduledJob | null /** The scheduled job under which this job was created, if applicable. */;
  }

  export interface TaskList extends Page {
    readonly records: ReadonlyArray<Task | null> | null;
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number;
    readonly count: number | null /** Number of records returned in this response */;
  }

  export interface SchedulePart {
    readonly scheduleType: ScheduleType;
    readonly scheduledDay: DayOfWeek | null;
    readonly startTime: Time | null;
    readonly stopTime: Time | null;
    readonly repeatIntervalUnit: IntervalUnit | null;
    readonly repeatInterval: number | null;
    readonly durationSeconds: number | null;
  }

  export interface ScheduledJobContentTemplate {
    readonly id: string;
    readonly scheduledJobId: string;
    readonly sdoId: string;
    readonly sdo: StructuredData | null;
    readonly schemaId: string;
    readonly data: Json | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
  }

  export interface ScheduledJobCollaboratorList extends Page {
    readonly records: ReadonlyArray<ScheduledJobCollaborator>;
    readonly offset: number;
    readonly limit: number;
    readonly count: number | null;
  }
  /** A source ACL grants a single organization limited rights to a private source */
  export interface ScheduledJobCollaborator {
    readonly permission: ScheduledJobPermission /** The permission granted. Either `viewer` or `editor`. */;
    readonly organizationId: string /** Organization ID the source was shared with */;
    readonly organization: Organization | null /** The organization the source was shared with */;
  }

  export interface ProgramAffiliateList extends Page {
    readonly records: ReadonlyArray<ProgramAffiliate> | null;
    readonly offset: number;
    readonly limit: number;
    readonly count: number | null;
  }

  export interface ProgramAffiliate {
    readonly sourceId: string;
    readonly source: Source | null;
    readonly scheduledJobId: string;
    readonly scheduledJob: ScheduledJob | null;
    readonly scheduledDay: DayOfWeek | null;
    readonly startDateTime: DateTime | null;
    readonly stopDateTime: DateTime | null;
    readonly startTime: Time | null;
    readonly stopTime: Time | null;
    readonly status: string | null;
  }

  export interface MentionRatingList extends Page {
    readonly offset: number;
    readonly limit: number;
    readonly count: number | null;
    readonly records: ReadonlyArray<MentionRating | null> | null;
  }

  export interface MentionRating {
    readonly ratingId: string;
    readonly mentionId: string | null;
    readonly userId: string | null;
    readonly ratingValue: number | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
  }

  export interface ScheduledJobList extends Page {
    readonly records: ReadonlyArray<ScheduledJob>;
    readonly count: number;
    readonly offset: number;
    readonly limit: number;
  }

  export interface CollectionList extends Page {
    readonly records: ReadonlyArray<Collection | null> | null;
    readonly offset: number /** Provide an offset to skip to a certain element in the result, for paging. */;
    readonly limit: number /** Maximum number of results that were retrieved in this query; page size */;
    readonly count: number | null /** Number of records returned in this response */;
  }

  export interface Collection {
    readonly id: string;
    readonly name: string;
    readonly imageUrl: string | null /** A url to get the collection image */;
    readonly signedImageUrl:
      | string
      | null /** A sigend url to get the collection image. It will only be signed if it is an s3 url. */;
    readonly ownerId: string | null;
    readonly description: string | null;
    readonly organization: Organization | null;
    readonly organizationId: string;
    readonly orgSharing: boolean | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly programCount: number | null;
    readonly itemCount: number | null;
    readonly typeId: string | null;
    readonly isActive: boolean | null;
    readonly widgets: WidgetList | null;
  }

  export interface WidgetList extends Page {
    readonly records: ReadonlyArray<Widget | null> | null;
    readonly offset: number /** Provide an offset to skip to a certain element in the result, for paging. */;
    readonly limit: number /** Maximum number of results that were retrieved in this query; page size */;
    readonly count: number | null /** Number of records returned in this response */;
  }

  export interface Widget {
    readonly id: string | null;
    readonly name: string | null;
    readonly organization: Organization | null;
    readonly organizationId: string | null;
    readonly collection: Collection | null;
    readonly collectionId: string;
    readonly displayCollectionName: boolean | null;
    readonly displayTranscription: boolean | null;
    readonly width: number | null;
    readonly numberOfMentionsToShow: number | null;
    readonly adScript: string | null;
    readonly seoTags: ReadonlyArray<string | null> | null;
    readonly backgroundColor: string | null;
    readonly borderColor: string | null;
    readonly textColor: string | null;
    readonly createdDateTime: DateTime | null;
  }
  /** Analytics Dashboards */
  export interface Dashboard {
    readonly index: number | null /** The order in which to display the dashboard. */;
    readonly title: string | null;
    readonly description: string | null;
    readonly active: boolean | null /** The status of the dashboard */;
    readonly filters: ReadonlyArray<
      string | null
    > | null /** The filters that can be applied on the dashboard. Typically watchlists. */;
    readonly type: string | null;
    readonly qlikAppId: string | null /** Vendor specific identifier for Qlik applications */;
    readonly qlikSheetId: string | null /** Vendor specific identifier for Qlik sheet */;
    readonly thumbnail: string | null;
  }

  export interface BuildList extends Page {
    readonly records: ReadonlyArray<Build | null> | null;
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number;
    readonly count: number | null /** Number of records returned in this response */;
  }

  export interface Build {
    readonly id: string;
    readonly name: string | null;
    readonly description: string | null;
    readonly createdDateTime: DateTime | null /** Date and date build was created */;
    readonly modifiedDateTime: DateTime | null /** Date and time build was last modified */;
    readonly createdBy: string | null;
    readonly modifiedBy: string | null;
    readonly engineId: string /** The ID of the engine this build is for */;
    readonly engine: Engine | null /** The engine this build is for */;
    readonly price: number | null;
    readonly validateUri: string | null;
    readonly executeUri: string | null;
    readonly status: BuildStatus | null /** Engine build status: */;
    readonly dockerImage: string | null /** URL to the Docker image for this engine build, if applicable */;
    readonly runtime: Json | null;
    readonly version: string | null;
    readonly report: Json | null;
    readonly manifest: Json | null /** The entire manifest, supplied by the engine developer, that describesthe engine's capabilities and requirements and is used by the platformsystem to build and execute the engine. */;
    readonly preferredInputFormat: string | null;
    readonly supportedInputFormats: ReadonlyArray<string> | null;
    readonly outputFormats: ReadonlyArray<string> | null;
    readonly supportedSourceTypes: ReadonlyArray<
      string
    > | null /** List of IDs of source types that the engine supports.Applies only to adapter engines that ingest data from a source.Will be a list of IDs of SourceType objects. */;
    readonly primaryAction: BuildUpdateAction | null /** Used to give a default action choice */;
    readonly secondaryActions: ReadonlyArray<BuildUpdateAction | null> | null /** Used to give secondary action choices */;
    readonly validStateActions: ReadonlyArray<BuildUpdateAction | null> | null /** Contains all valid action choices */;
  }
  /** Represents a custom input field on an engine. */
  export interface EngineField {
    readonly max: number | null /** Maximum value, in float format. Applies only to fields of type Number. */;
    readonly min: number | null /** Minimum value, in float format. Applies only to fields of type Number. */;
    readonly step:
      | number
      | null /** Numerical step by which the value should be incremented or decremented inthe user interface, in float format. Applies only to fields of type Number. */;
    readonly type: EngineFieldType /** The field type. */;
    readonly info: string | null /** General information about the field, such as a description. */;
    readonly name: string /** A machine-readable name, or key, for the field. */;
    readonly label: string | null /** A human-readable label for the field. */;
    readonly options: ReadonlyArray<
      EngineFieldPicklistOption
    > | null /** A set of allowed values for the field. Applies only to fields of typepicklist or multi-picklist. */;
    readonly defaultValue:
      | string
      | null /** An optional default value for the field. Taken in string format, butapplies to all field types. */;
    readonly defaultValues: ReadonlyArray<
      string
    > | null /** Optional default values to apply to a picklist. This fieldshould only be set for a field of type multi-picklist. */;
  }
  /** Represents one allowed option in a picklist. */
  export interface EngineFieldPicklistOption {
    readonly key: string /** The human-readable label for the option, such as "English-US" for a language selector. */;
    readonly value: string /** The machine-readable value that will be sent in the engine payload, such as"en-us" for a language selector. */;
  }

  export interface EngineTaskMetrics {
    readonly cancelledCount: number | null;
    readonly completedCount: number | null;
    readonly failedCount: number | null;
    readonly pendingCount: number | null;
    readonly queuedCount: number | null;
    readonly runningCount: number | null;
  }

  export interface TaskLog {
    readonly uri: string | null /** URI to the task log file */;
    readonly text: string | null /** The entire text contents of the log file. Note that this value can long. */;
    readonly jsondata: Json | null /** The log file in JSON form. If the log file contains valid JSON,this field will contain the native structure. If the log file does notcontain valid JSON, this field will contain a single property called`text` with a string value containing the entire log file. */;
  }
  /** Contains security settings on an asset container */
  export interface Security {
    readonly global: boolean | null /** Whether or not the object is globally visible */;
  }
  /** Describes source information about a TDO. That is,the components and processes that produced it.Each field may or may not have a value, depending onhow the TDO was created. */
  export interface TdoSourceData {
    readonly taskId: string | null /** Task ID, typically of an ingestion task. */;
    readonly task: Task | null /** The task object. */;
    readonly sourceId: string | null /** Ingestion source ID */;
    readonly scheduledJobId: string | null /** ID of the scheduled job, if any, under which this TDO was created */;
    readonly engineId: string | null /** ID of the engine used in the task that created this TDO */;
    readonly engine: Engine | null /** The engine used in the task that created this TDO. */;
    readonly scheduledJob: ScheduledJob | null /** The scheduled job under which this TDO was created, if any */;
    readonly source: Source | null /** The source from which this TDO was created, if any */;
  }
  /** Describes a stream that is available on a TDO */
  export interface TdoStreamData {
    readonly uri: string /** The stream URI */;
    readonly protocol: string /** The protocol, such as "dash" or "hls" */;
  }

  export interface EngineRunList extends Page {
    readonly records: ReadonlyArray<EngineRun | null> | null;
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number;
    readonly count: number | null /** Number of records returned in this response */;
  }
  /** Describes engine run on a TDO with */
  export interface EngineRun {
    readonly engine: Engine | null /** Engine that was run on a TDO */;
    readonly status: TaskStatus | null /** Engine status derived from the written engine output or task status. See TaskStatus enum for details. */;
    readonly activeTasks: TaskList | null /** All in-flight tasks for the given engine */;
    readonly hasUserEdits: boolean | null /** Whether or not the engine run has user edits */;
  }

  export interface CloneRequestList extends Page {
    readonly records: ReadonlyArray<CloneRequest | null> | null;
    readonly count: number | null;
    readonly offset: number;
    readonly limit: number;
  }

  export interface CloneRequest {
    readonly id: string;
    readonly sourceApplicationId: string;
    readonly destinationApplicationId: string;
    readonly numberOfRecordings: number | null;
    readonly numberOfCompletedRecordings: number | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly status: string | null;
    readonly percentage: number | null;
  }

  export interface EngineCategoryList extends Page {
    readonly records: ReadonlyArray<EngineCategory> | null;
    readonly offset: number;
    readonly limit: number;
    readonly count: number | null;
  }

  export interface LibraryTypeList extends Page {
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number;
    readonly count: number | null /** Number of records returned in this response */;
    readonly records: ReadonlyArray<LibraryType | null> | null;
  }

  export interface LibraryType {
    readonly id: string;
    readonly label: string | null;
    readonly iconClass: string | null;
    readonly entityIdentifierTypes: ReadonlyArray<EntityIdentifierType | null> | null;
    readonly entityTypeName: string | null;
    readonly entityTypeNamePlural: string | null;
    readonly entityType: EntityType | null;
  }

  export interface EntityType {
    readonly name: string;
    readonly namePlural: string;
    readonly schema: Json;
  }

  export interface LibraryList extends Page {
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number;
    readonly count: number | null /** Number of records returned in this response */;
    readonly records: ReadonlyArray<Library | null> | null;
  }

  export interface Library {
    readonly createdDateTime: DateTime | null /** Object creation timestamp. Does not change. */;
    readonly modifiedDateTime: DateTime | null /** Object modification timestamp. */;
    readonly id: string /** The object's unique ID */;
    readonly createdBy: string | null;
    readonly modifiedBy: string | null;
    readonly description: string | null;
    readonly name: string | null;
    readonly properties: ReadonlyArray<Property | null> | null /** Modular metadata in the form of key-value pairs */;
    readonly security: Security | null /** Security settings for the asset container */;
    readonly applicationId: string;
    readonly version: number | null /** Library version */;
    readonly organizationId: string | null;
    readonly libraryType: LibraryType | null;
    readonly libraryTypeId: string | null;
    readonly coverImageUrl: string | null;
    readonly engineModels: LibraryEngineModelList | null /** Retrieve engine models for a library */;
    readonly entities: EntityList | null;
    readonly collaborators: LibraryCollaboratorList | null /** Retrieve collaborators for a library. */;
    readonly summary: LibrarySummary | null /** Aggregated summary data about the library */;
  }

  export interface LibraryEngineModelList extends Page {
    readonly records: ReadonlyArray<LibraryEngineModel | null> | null;
    readonly offset: number;
    readonly limit: number;
    readonly count: number | null;
  }

  export interface LibraryEngineModel {
    readonly id: string;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly engineId: string;
    readonly engine: Engine | null;
    readonly libraryId: string;
    readonly library: Library | null;
    readonly libraryVersion: number | null;
    readonly trainJobId: string | null;
    readonly trainStatus: LibraryEngineModelTrainStatus;
    readonly dataUrl: string | null;
    readonly contentType:
      | string
      | null /** Content type of the data file pointed to by dataUrl.Will be empty if no data file is attached to the engine model. */;
    readonly jsondata: Json | null;
  }

  export interface EntityList extends Page {
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number;
    readonly count: number | null /** Number of records returned in this response */;
    readonly records: ReadonlyArray<Entity | null> | null;
  }

  export interface Entity {
    readonly id: string;
    readonly name: string | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly createdBy: string | null;
    readonly modifiedBy: string | null;
    readonly properties: ReadonlyArray<Property | null> | null;
    readonly libraryId: string | null;
    readonly library: Library | null;
    readonly profileImageUrl: string | null;
    readonly identifiers: EntityIdentifierList | null;
    readonly isPublished: boolean | null;
    readonly jsondata: Json | null;
    readonly jsonstring: string | null;
    readonly summary: EntitySummary | null;
    readonly description: string | null;
  }

  export interface EntityIdentifierList extends Page {
    readonly records: ReadonlyArray<EntityIdentifier | null> | null;
    readonly offset: number;
    readonly limit: number;
    readonly count: number | null;
  }

  export interface EntityIdentifier {
    readonly id: string;
    readonly entityId: string;
    readonly entity: Entity;
    readonly identifierType: EntityIdentifierType;
    readonly identifierTypeId: string;
    readonly title: string | null;
    readonly isPriority: boolean | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly url: string;
    readonly contentType: string;
    readonly jsondata: Json | null;
    readonly jsonstring: string | null;
  }

  export interface EntitySummary {
    readonly identifierCountsByType: Json | null;
  }

  export interface LibraryCollaboratorList {
    readonly records: ReadonlyArray<LibraryCollaborator | null> | null;
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number;
    readonly count: number | null /** Number of records returned in this response */;
  }

  export interface LibraryCollaborator {
    readonly organizationId: string;
    readonly organization: Organization | null;
    readonly status: string | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly permissions: ReadonlyArray<string | null> | null;
    readonly libraryId: string;
    readonly library: Library | null;
  }

  export interface LibrarySummary {
    readonly entityCount: number | null;
    readonly unpublishedEntityCount: number | null;
    readonly lastTrainedVersion: number | null;
    readonly lastTrainedDateTime: DateTime | null;
  }

  export interface OrganizationList extends Page {
    readonly records: ReadonlyArray<Organization | null> | null;
    readonly offset: number /** Provide an offset to skip to a certain element in the result, for paging. */;
    readonly limit: number /** Maximum number of results that were retrieved in this query; page size */;
    readonly count: number | null /** Number of records returned in this response */;
  }

  export interface Token {
    readonly id: string | null /** The token ID */;
    readonly applicationId: string | null;
    readonly groupId: string | null;
    readonly json: TokenJson | null;
  }

  export interface TokenJson {
    readonly rights: ReadonlyArray<string | null> | null;
  }

  export interface GroupList extends Page {
    readonly records: ReadonlyArray<Group | null> | null;
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number /** Maximum number of results that were retrieved in this query; page size */;
    readonly count: number | null /** Number of records returned in this response */;
  }

  export interface Group {
    readonly id: string;
    readonly name: string | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly applicationId: string;
    readonly createdBy: User | null;
    readonly modifiedBy: User | null;
    readonly organizationId: string;
    readonly organization: Organization | null;
    readonly jsondata: Json | null /** Freeform metadata in JSON form */;
  }
  /** Results from a mention or media search.TODO link to format documentation for core-search-server */
  export interface SearchResult {
    readonly jsondata: Json;
  }

  export interface IngestionConfiguration {
    readonly id: string;
    readonly applicationId: string;
    readonly type: string | null;
    readonly name: string | null;
    readonly createdDateTime: DateTime | null;
    readonly modifiedDateTime: DateTime | null;
    readonly emailAddress: string | null;
    readonly job: Json | null;
    readonly ui: Json | null;
    readonly jsondata: Json | null;
  }

  export interface IngestionConfigurationList extends Page {
    readonly offset: number;
    readonly limit: number;
    readonly count: number | null;
    readonly records: ReadonlyArray<IngestionConfiguration | null> | null;
  }

  export interface SchemaPropertyList extends Page {
    readonly records: ReadonlyArray<SchemaProperty | null> | null;
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number /** Maximum number of results that were retrieved in this query; page size */;
    readonly count: number | null /** Number of records returned in this response */;
  }

  export interface SchemaProperty {
    readonly dataRegistryId: string;
    readonly majorVersion: number;
    readonly schema: Schema;
    readonly path: string;
    readonly searchPath: string;
    readonly type: string;
    readonly title: string | null;
  }
  /** This type represents information about the Veritone GraphQL serverinstance. Primarily used by Veritone engineering and operations. */
  export interface GraphQlServiceInfo {
    readonly buildInfo: Json | null /** JSON structure containing build information, such as the build number and date. */;
    readonly featureFlags: Json | null;
    readonly heartbeatStats: Json | null;
  }
  /** Contains information about a signed writable URL retrieved from thegetSignedWritableUrl mutation. */
  export interface WritableUrlInfo {
    readonly bucket: string /** The storage bucket ID */;
    readonly key: string /** The storage object key */;
    readonly expiresInSeconds: number /** Time interval, in seconds, after which this URL is expired and no longer valid. */;
    readonly expiresAtDateTime: DateTime /** Absolute time at which this URL expires */;
    readonly url: string /** The signed URL, which can be uploaded to with an HTTP PUT (note:  PUT isrequired. POST will generate an error). */;
    readonly getUrl: string /** A signed URL that can be used with HTTP GET to retrieve thenew resource. */;
    readonly unsignedUrl:
      | string
      | null /** The unsigned, base URL to the object, which can be safely persistedand re-signed later by a client with the necessary storage credentials. */;
  }

  export interface RightsListing {
    readonly operations: ReadonlyArray<string>;
    readonly resources: Json | null;
  }

  export interface DataRegistryList extends Page {
    readonly records: ReadonlyArray<DataRegistry | null> | null;
    readonly offset: number /** The starting index for records that were returned in this query. */;
    readonly limit: number /** Maximum number of results that were retrieved in this query; page size */;
    readonly count: number | null /** Number of records returned in this response */;
  }
  /** Represents a collection of engine results. Not Paged. */
  export interface EngineResultList {
    readonly sourceId: string | null;
    readonly records: ReadonlyArray<EngineResult | null> | null;
  }
  /** Represents single chunk of engine results for date range */
  export interface EngineResult {
    readonly tdoId: string;
    readonly engineId: string;
    readonly jsondata: Json | null;
    readonly startOffsetMs: number | null;
    readonly stopOffsetMs: number | null;
    readonly assetId: string | null;
    readonly userEdited: boolean | null;
    readonly tdo: TemporalDataObject | null;
  }
  /** Contains information of a event hook */
  export interface Trigger {
    readonly id: string;
    readonly event: string;
    readonly target: string;
    readonly consumerParams: Json | null;
    readonly createdDateTime: DateTime;
    readonly modifiedDateTime: DateTime;
    readonly createdBy: string;
    readonly updatedBy: string;
  }

  export interface SavedSearchList extends Page {
    readonly records: ReadonlyArray<SavedSearch> | null;
    readonly count: number | null;
    readonly offset: number;
    readonly limit: number;
  }

  export interface SavedSearch {
    readonly id: string;
    readonly organizationId: string;
    readonly organization: Organization | null;
    readonly ownerId: string;
    readonly owner: User | null;
    readonly name: string;
    readonly sharedWithOrganization: boolean | null;
    readonly createdDateTime: DateTime;
    readonly modifiedDateTime: DateTime;
    readonly csp: Json | null;
  }

  export interface ExportRequestList extends Page {
    readonly records: ReadonlyArray<ExportRequest>;
    readonly offset: number;
    readonly limit: number;
    readonly count: number | null;
  }

  export interface ExportRequest {
    readonly id: string /** The unique ID of this export request */;
    readonly status: ExportRequestStatus /** Current status of this export request */;
    readonly organizationId: string /** ID of the organization this export request was issued for */;
    readonly createdDateTime: DateTime /** Date/time at which this export request was created */;
    readonly modifiedDateTime: DateTime /** Date/time at which this export request was last modified */;
    readonly requestorId: string /** ID of the user or API key that created this export request */;
    readonly assetUri: string | null /** The signed URI to the object that contains, or will contain,export results. */;
  }

  export interface Event {
    readonly id: string;
    readonly eventName: string;
    readonly eventType: string;
    readonly application: string;
    readonly public: boolean;
    readonly description: string | null;
    readonly schemaData: string;
    readonly schemaHash: string;
    readonly createdDateTime: DateTime;
    readonly createdBy: string;
  }
  /** Information about a time zone */
  export interface TimeZone {
    readonly name: string /** Time zone name, such as `America/Los_Angeles` */;
    readonly abbreviations: ReadonlyArray<
      TimeZoneAbbreviation
    > /** Known abbreviations for the time zone. These may includeoffset variations such as those caused by daylight savings time. */;
  }
  /** Information about a time zone abbreviation or variant. */
  export interface TimeZoneAbbreviation {
    readonly name: string /** The abbreviation, such as "PST" or "UTC" */;
    readonly offset: string | null /** The offset from UTC in string form, such as `-08:00` for `PST`. */;
    readonly offsetMinutes: number | null /** The offset from UTC in minutes, such as `-480` for `PST`. */;
  }

  export interface AuditLogEntryList extends Page {
    readonly records: ReadonlyArray<AuditLogEntry>;
    readonly count: number | null /** Count of records in this page. Will be less than or equal to `limit`. */;
    readonly offset: number /** Offset used in the query that generated this page. */;
    readonly limit: number /** Limit used in the query that generated this page. */;
    readonly toDateTime: DateTime | null /** `toDateTime` value of the query that generated this page.Useful when a default was applied. */;
    readonly fromDateTime: DateTime | null /** `fromDateTime` value of the query that generated this page.Useful when a default was applied. */;
  }

  export interface AuditLogEntry {
    readonly organizationId: string | null /** ID of the organization that generated the audit entry. */;
    readonly objectType:
      | string
      | null /** The type of the object involved in the audit action, such as `Watchlist`or `TemporalDataObject`. */;
    readonly objectId:
      | string
      | null /** The ID of the object involved in the audit action. The format of this IDvaries by object type. */;
    readonly id: string /** The unique ID of the audit log entry. */;
    readonly eventType: string | null /** The event type, such as `Create`, `Update`, or `Delete`. */;
    readonly userName: string | null /** User name or ID that generated the audit entry. This might be an API key. */;
    readonly success: boolean | null /** Indicates whether or not the attempted action was successful. */;
    readonly clientIpAddress: string | null /** IP address of the client that generated the audit action. */;
    readonly clientUserAgent: string | null /** HTTP user agent of the client that generated the audit action. */;
    readonly description: string | null;
    readonly createdDateTime: DateTime /** Date/time at which the audit log entry was created. */;
  }

  export interface WorkflowRuntimeResponse {
    readonly success: boolean;
    readonly message: string | null /** Error message if success is false */;
    readonly uri:
      | string
      | null /** uri of veritone workflow instance.This is only available when Workflow request is successful */;
  }

  export interface WorkflowRuntimeStorageDataList extends Page {
    readonly records: ReadonlyArray<WorkflowRuntimeStorageData | null> | null;
    readonly count: number | null;
    readonly offset: number;
    readonly limit: number;
  }

  export interface WorkflowRuntimeStorageData {
    readonly storageKey: string /** Unique lookup id for the workflowRuntimeData */;
    readonly storageData: string /** Data content - base64 encoded binary, plain string or encoded JSON */;
    readonly storageMetadata: string | null /** Optional metadata for the workflowRuntimeData */;
  }

  export interface ProcessTemplateList extends Page {
    readonly records: ReadonlyArray<ProcessTemplate> | null;
    readonly offset: number;
    readonly limit: number;
    readonly count: number | null;
  }

  export interface ProcessTemplate {
    readonly id: string;
    readonly organizationId: string;
    readonly name: string;
    readonly taskList: Json;
  }

  export interface EngineConfigurationList extends Page {
    readonly records: ReadonlyArray<EngineConfiguration>;
    readonly count: number;
    readonly offset: number;
    readonly limit: number;
  }

  export interface ClusterNodeList extends Page {
    readonly records: ReadonlyArray<ClusterNode>;
    readonly count: number;
    readonly offset: number;
    readonly limit: number;
  }

  export interface ClusterList extends Page {
    readonly records: ReadonlyArray<Cluster>;
    readonly count: number;
    readonly offset: number;
    readonly limit: number;
  }

  export interface ExecutionLocationList extends Page {
    readonly records: ReadonlyArray<ExecutionLocation>;
    readonly count: number;
    readonly offset: number;
    readonly limit: number;
  }

  export interface SourceTypeList extends Page {
    readonly records: ReadonlyArray<SourceType>;
    readonly count: number;
    readonly offset: number;
    readonly limit: number;
  }

  export interface SourceTypeCategoryList extends Page {
    readonly records: ReadonlyArray<SourceTypeCategory>;
    readonly limit: number;
    readonly offset: number;
    readonly count: number | null;
  }

  export interface ExternalCredentialList extends Page {
    readonly records: ReadonlyArray<ExternalCredential>;
    readonly count: number;
    readonly offset: number;
    readonly limit: number;
  }
  /** Mutations are used to modify data. Each mutation takes an inputthat contains the data necessary to create or update the datain question. */
  export interface Mutation {
    readonly createTDO: TemporalDataObject | null /** Create a new temporal data object */;
    readonly updateTDO: TemporalDataObject | null /** Update a temporal data object */;
    readonly deleteTDO: DeletePayload | null /** Delete a temporal data object. The TDO metadata, its assets andall storage objects, and search index data are deleted.Engine results stored in related task objects are not.cleanupTDO can be used to selectively delete certain data on the TDO. */;
    readonly cleanupTDO: DeletePayload | null /** Delete partial information from a temporal data object.Use the delete options to control exactly which data is deleted.The default is to delete objects from storage and the search index,while leaving TDO-level metadata and task engine results intact.To permanently delete the TDO, use delete TDO. */;
    readonly createTaskLog: TaskLog | null /** Create a task log by usingmultipart form POST. */;
    readonly createAsset: Asset | null /** Create a media asset. Optionally, upload content usingmultipart form POST. */;
    readonly deleteAsset: DeletePayload | null /** Delete an asset */;
    readonly updateAsset: Asset | null /** Update an asset */;
    readonly requestClone: CloneRequest | null /** Start a clone job. A clone creates a new TDOthat links back to an existing TDO's assetsinstead of creating new ones and is usedprimarily to handle sample media. */;
    readonly createEngine: Engine | null /** Create a new engine. The engine will need to gothrough a sequence of workflow steps beforeuse in production. See VDA documentation for details. */;
    readonly updateEngine: Engine | null /** Update an engine. Engines are subject to specificworkflow steps. An engine's state determines whatupdates can be made to it. See VDA documentation fordetails. */;
    readonly deleteEngine: DeletePayload | null /** Delete an engine */;
    readonly createEngineBuild: Build | null /** Create an engine build. */;
    readonly updateEngineBuild: Build | null /** Update an engine build. Engine builds are subject tospecific workflow steps. A build's state determines whatupdates can be made to it. See VDA documentation for details. */;
    readonly deleteEngineBuild: DeletePayload | null /** Delete an engine build */;
    readonly updateTask: Task | null /** Update a task */;
    readonly pollTask: Task | null /** Poll a task */;
    readonly createJob: Job | null /** Create a job */;
    readonly cancelJob: DeletePayload | null /** Cancel a job. This action effectively deletes the job,although a records of job and task execution remains inVeritone's database. */;
    readonly retryJob: Job | null /** Retry a job. This action applies only to jobsthat are in a failure state. The task sequencefor the job will be restarted in its originalconfiguration. */;
    readonly updateJobs: JobList | null;
    readonly createApplication: Application | null /** Create a new application. An application mustgo through a sequence of workflow steps beforeit is available in production. See the VDA documentationfor details. */;
    readonly deleteApplication: DeletePayload | null /** Delete an application */;
    readonly updateApplication: Application | null /** Update a custom application. Applications are subject tospecific workflows. The current application state determineswhat updates can be made to it. See VDA documentation for details. */;
    readonly bulkDeleteContextMenuExtensions: ContextMenuExtensionList | null /** Bulk delete context meu extensions. */;
    readonly updateOrganization: Organization | null /** Update an organization */;
    readonly addToEngineWhitelist: EngineWhitelist | null;
    readonly addToEngineBlacklist: EngineBlacklist | null;
    readonly deleteFromEngineBlacklist: EngineBlacklist | null;
    readonly deleteFromEngineWhitelist: EngineWhitelist | null;
    readonly createEntityIdentifierType: EntityIdentifierType | null /** Create an entity identifier type, such as "face" or "image".Entity identifier types are typically created or modifiedonly by Veritone engineering. Most libraries andentities will use existing entity identifier types. */;
    readonly updateEntityIdentifierType: EntityIdentifierType | null /** Update an entity identifier type. */;
    readonly createLibraryType: LibraryType | null /** Create a library type, such as "ad" or "people".Entity identifier types are typically created or modifiedonly by Veritone engineering. Most librarieswill use existing entity identifier types. */;
    readonly updateLibraryType: LibraryType | null /** Update a library type. */;
    readonly createLibrary: Library | null /** Create a new library.Once the library is created, the client can addentities and entity identifiers. Note that thelibrary type determines what types of entity identifierscan be used within the library. */;
    readonly updateLibrary: Library | null /** Update an existing library. */;
    readonly deleteLibrary: DeletePayload | null /** Delete a library. This mutation will also delete all entities,entity identifiers, library engine models, and associated objects. */;
    readonly publishLibrary: Library | null /** Publish a new version of a library.Increments library version by one and trains compatible engines. */;
    readonly createEntity: Entity | null /** Create a new entity. */;
    readonly updateEntity: Entity | null /** Update an entity. */;
    readonly deleteEntity: DeletePayload | null /** Delete an entity. This mutation will also delete all associatedentity identifiers and associated objects. */;
    readonly createEntityIdentifier: EntityIdentifier | null /** Create an entity identifier.This mutation accepts file uploads. To use this mutation and upload a file,send a multipart form POST containing two parameters:  `query`, with theGraphQL query, and `file` containing the file itself.For more information see the documentation at https://veritone-developer.atlassian.net/wiki/spaces/DOC/pages/13893791/GraphQL. */;
    readonly updateEntityIdentifier: EntityIdentifier | null;
    readonly deleteEntityIdentifier: DeletePayload | null /** Delete an entity identifier */;
    readonly createLibraryEngineModel: LibraryEngineModel | null /** Create a library engine model. */;
    readonly updateLibraryEngineModel: LibraryEngineModel | null /** Update a library engine model */;
    readonly deleteLibraryEngineModel: DeletePayload | null /** Delete a library engine model */;
    readonly applicationWorkflow: Application | null /** Apply an application workflow step, such as "submit" or "approve" */;
    readonly engineWorkflow: Engine | null /** Apply an application workflow step, such as "submit" or "approve" */;
    readonly createIngestionConfiguration: IngestionConfiguration | null /** Create an ingestion configuration */;
    readonly updateIngestionConfiguration: IngestionConfiguration | null /** Update an ingestion configuration */;
    readonly deleteIngestionConfiguration: DeletePayload | null /** Delete an ingestion configuration */;
    readonly createWidget: Widget | null /** Creates a widget associated with a collection */;
    readonly updateWidget: Widget | null /** Updates a widget */;
    readonly createUser: User | null /** Create a new user within an organization. */;
    readonly createOrganization: Organization | null /** Create a new organization. */;
    readonly updateUser: User | null /** Update an existing user */;
    readonly createPasswordUpdateRequest: User | null /** Force a user to update password on next login.This mutation is used by administrators. */;
    readonly getCurrentUserPasswordToken: PasswordTokenInfo /** Get password token info for current user */;
    readonly createPasswordResetRequest: CreatePasswordResetRequestPayload | null /** Create a password reset request. This mutation is used on behalfof a user who needs to reset their password. It operates only onthe currently authenicated user (based on the authentication token provided). */;
    readonly updateCurrentUser: User /** Update the current authenticated user */;
    readonly changePassword: User | null /** Change the current authenticated user's password */;
    readonly deleteUser: DeletePayload | null /** Delete a user */;
    readonly createDataRegistry: DataRegistry | null /** Create a structured data registry schema metadata. */;
    readonly updateDataRegistry: DataRegistry | null /** Update a structured data registry schema metadata. */;
    readonly upsertSchemaDraft: Schema | null /** Update a structured data registry schema. */;
    readonly updateSchemaState: Schema | null;
    readonly createStructuredData: StructuredData | null /** Create (ingest) a structured data object */;
    readonly createCollection: Collection | null /** Create (ingest) a structured data object */;
    readonly updateCollection: Collection | null /** Update a collection */;
    readonly deleteCollection: DeletePayload | null /** Delete Collection */;
    readonly shareCollection: Share | null /** Share a collection, allowing other organizations to view the datait contains. */;
    readonly shareMentionFromCollection: Share | null /** Share a mention from a collection */;
    readonly createCollectionMention: CollectionMention | null /** Add a mention to a collection */;
    readonly deleteCollectionMention: CollectionMention | null /** Remove a mention from a collection */;
    readonly createFolder: Folder | null /** Create a new folder */;
    readonly updateFolder: Folder | null /** Update an existing folder */;
    readonly moveFolder: Folder | null /** Move a folder from one parent folder to another. */;
    readonly deleteFolder: DeletePayload | null /** Delete a folder */;
    readonly createMentionComment: MentionComment | null /** Create a mention comment */;
    readonly updateMentionComment: MentionComment | null /** Update a mention comment */;
    readonly deleteMentionComment: DeletePayload | null /** Delete a mention comment */;
    readonly createMentionRating: MentionRating | null /** Create a mention rating */;
    readonly updateMentionRating: MentionRating | null /** Update a mention rating */;
    readonly deleteMentionRating: DeletePayload | null /** Delete a mention rating */;
    readonly userLogin: LoginInfo | null /** Login as a user. This mutation does not require an existing authenticationcontext (via `Authorization` header with bearer token, cookie, etc.).Instead, the client supplies credentials to this mutation, which thenauthenticates the user and sets up the authentication context.The returned tokens can be used to authenticate future requests. */;
    readonly userLogout: boolean | null /** Logout user and invalidate user token */;
    readonly refreshToken: LoginInfo | null /** Refresh a user token, returning a fresh token so that the clientcan continue to authenticate to the API. */;
    readonly validateToken: LoginInfo | null /** Validate a user token. This mutation is used by services to determineif the token provided by a given client is valid. */;
    readonly createMention: Mention | null /** Create a mention object */;
    readonly createRootFolders: ReadonlyArray<Folder | null> | null /** Create root folder for an organization */;
    readonly bulkUpdateWatchlist: WatchlistList | null /** Apply bulk updates to watchlists.This mutation is currently available only to Veritone operations. */;
    readonly fileTemporalDataObject: TemporalDataObject | null /** File a TemporalDataObject in a folder. A given TemporalDataObject canbe filed in any number of folders, or none. Filing causes the TemporalDataObjectand its assets to be visible within the folder. */;
    readonly unfileTemporalDataObject: TemporalDataObject | null /** Unfile a TemporalDataObject from a folder. This causes the TemporalDataObjectand its assets to disappear from the folder, but does not otherwise affecteither the TDO or the folder and does not change access controls. */;
    readonly moveTemporalDataObject: TemporalDataObject | null /** Moves a TemporalDataObject from one parent folder to another.Any other folders the TemporalDataObject is filed in are unaffected. */;
    readonly uploadEngineResult: Asset | null /** Upload and store an engine result. The result will be stored as anasset associated with the target TemporalDataObject and thetask will be updated accordingly.Use a multipart form POST to all this mutation. */;
    readonly createWatchlist: Watchlist | null;
    readonly updateWatchlist: Watchlist | null;
    readonly deleteWatchlist: DeletePayload | null;
    readonly updateCognitiveSearch: CognitiveSearch | null;
    readonly createCognitiveSearch: CognitiveSearch | null;
    readonly deleteCognitiveSearch: DeletePayload | null;
    readonly fileWatchlist: Watchlist | null;
    readonly unfileWatchlist: Watchlist | null;
    readonly shareFolder: Folder | null /** Share a folder with other organizations */;
    readonly createTDOWithAsset: TemporalDataObject | null /** Create a TDO and an asset with a single call */;
    readonly createSubscription: Subscription | null;
    readonly updateSubscription: Subscription | null;
    readonly deleteSubscription: DeletePayload | null;
    readonly createTriggers: ReadonlyArray<Trigger | null> | null /** Create trigger for events or types. */;
    readonly deleteTrigger: DeletePayload | null /** Delete a registed trigger by ID. */;
    readonly validateEngineOutput: boolean /** Validates if an engine output conforms to the engine output guidelines */;
    readonly getEngineJWT: JwtTokenInfo /** JWT tokens with a more limited scoped token to specificresources to the recording, task, and joband also has no organization association. */;
    readonly verifyJWT: VerifyJwtPayload | null /** Verify JWT token */;
    readonly createSavedSearch: SavedSearch /** Create a new Saved Search */;
    readonly deleteSavedSearch: DeletePayload /** Delete a saved search */;
    readonly replaceSavedSearch: SavedSearch /** Mark existing saved search profile as deletedCreate new saved search profile */;
    readonly sendEmail: boolean /** Send a basic email. Mutation returns true for a success message. */;
    readonly createFolderContentTempate: FolderContentTemplate /** Create new content template into a folder */;
    readonly updateFolderContentTempate: FolderContentTemplate /** Update existing content template by folderContentTemplateId */;
    readonly deleteFolderContentTempate: DeletePayload /** Delete existing folder content template by folderContentTemplateId */;
    readonly createExportRequest: ExportRequest /** Create an export request. The requested TDO data, possibly includingTDO media and engine results, will be exported offline. */;
    readonly updateExportRequest: ExportRequest /** Update an export request */;
    readonly createMentions: MentionList | null /** Create Mention in bulk. The input should be an array of createMentions */;
    readonly setWorkflowRuntimeStorageData: WorkflowRuntimeStorageData /** Create or Update Workflow data. */;
    readonly createEvent: Event /** Create a new event */;
    readonly updateEvent: Event /** Update an event */;
    readonly subscribeEvent: string /** Subscribe to an event */;
    readonly unsubscribeEvent: UnsubscribeEvent /** Unsubscribe to an event */;
    readonly emitEvent: EmitEventResponse /** Emit an event */;
    readonly startWorkflowRuntime: WorkflowRuntimeResponse /** Start a Veritone Workflow instance */;
    readonly stopWorkflowRuntime: WorkflowRuntimeResponse /** Shutdown Veritone Workflow instance */;
    readonly createProcessTemplate: ProcessTemplate /** Create a processTemplate in CMS */;
    readonly updateProcessTemplate: ProcessTemplate /** Update a processTemplate by ID in CMS */;
    readonly createCluster: Cluster | null;
    readonly updateCluster: Cluster | null;
    readonly deleteCluster: DeletePayload | null;
    readonly pauseCluster: Cluster | null;
    readonly unpauseCluster: Cluster | null;
    readonly createClusterNode: ClusterNode | null;
    readonly updateClusterNode: ClusterNode | null;
    readonly deleteClusterNode: DeletePayload | null;
    readonly createScheduledJob: ScheduledJob;
    readonly cloneScheduledJob: ScheduledJob;
    readonly revertScheduledJob: ScheduledJob;
    readonly updateScheduledJob: ScheduledJob;
    readonly deleteScheduledJob: DeletePayload | null;
    readonly createScheduledJobContentTemplate: ScheduledJobContentTemplate /** Create a new content template on a scheduled job */;
    readonly deleteScheduledJobContentTemplate: DeletePayload | null;
    readonly createSource: Source | null /** Create a new source */;
    readonly updateSource: Source | null;
    readonly deleteSource: DeletePayload | null;
    readonly createSourceContentTemplate: SourceContentTemplate /** Create a new source content template on a source */;
    readonly deleteSourceContentTemplate: DeletePayload | null;
    readonly createSourceType: SourceType | null;
    readonly updateSourceType: SourceType | null;
    readonly deleteSourceType: DeletePayload | null;
    readonly createJobPipeline: JobPipeline;
    readonly updateJobPipeline: JobPipeline;
    readonly deleteJobPipeline: DeletePayload | null;
    readonly createJobTemplate: JobTemplate;
    readonly updateJobTemplate: JobTemplate;
    readonly deleteJobTemplate: DeletePayload | null;
    readonly createTaskTemplate: TaskTemplate;
    readonly updateTaskTemplate: TaskTemplate;
    readonly deleteTaskTemplate: DeletePayload | null;
    readonly createNextPipelineJobs: ReadonlyArray<Job | null> | null;
    readonly launchScheduledJobs: ReadonlyArray<Job | null> | null /** Creates one or more jobs based on the supplied scheduled job. */;
    readonly launchJobTemplates: ReadonlyArray<Job | null> | null /** Creates one or more jobs based on the supplied job templates. */;
    readonly getNextBundleForCluster: Bundle /** Get next bundle for cluster. */;
    readonly updateBundleStatusAsCluster: Bundle /** Update bundle status as cluster. */;
  }
  /** Payload required to delete an object */
  export interface DeletePayload {
    readonly id: string /** ID of the object that was deleted */;
    readonly message: string | null /** a message */;
  }

  export interface PasswordTokenInfo {
    readonly passwordToken: string | null;
  }

  export interface CreatePasswordResetRequestPayload {
    readonly message: string | null;
  }

  export interface Share {
    readonly id: string;
    readonly recipients: ReadonlyArray<string | null> | null;
    readonly shareMessage: string | null;
    readonly shareOptionsJson: Json | null;
    readonly folderId: string | null;
    readonly mentionId: string | null;
  }

  export interface CollectionMention {
    readonly folderId: string /** id of the collection */;
    readonly mentionId: string /** id of the mention */;
  }
  /** Contains information about the user's authentication context. */
  export interface LoginInfo {
    readonly apiToken:
      | string
      | null /** API token. This is a persistent organization-level token intended for API access. */;
    readonly token:
      | string
      | null /** Session-scoped user token. This token is tied to the user's session and will expirewhen that session ends. */;
    readonly lastLoggedIn: string | null /** Date and time at which the user last logged in to the Veritone platform */;
    readonly applications: ReadonlyArray<
      string | null
    > | null /** List of Veritone platform applications for which the user is provisioned.Note that these are different than the VDA custom applications referencedin the `Application` type, `applications()` query, and related mutations. */;
    readonly applicationPlatforms: ReadonlyArray<ApplicationPlatform | null> | null;
    readonly groups: ReadonlyArray<Group | null> | null /** Groups to which the user belongs. */;
    readonly hasPassword:
      | boolean
      | null /** True if the user account has a password set. False otherwise.If false, the user will be prompted to set a password on next login. */;
    readonly organization: Organization | null /** Organization to which the user belongs. */;
    readonly passwordResetRequired:
      | boolean
      | null /** True if a password reset will be required on the user's next login. */;
    readonly providerId: string | null /** TODO */;
    readonly providerScreenName: string | null /** TODO */;
    readonly providerUserId: string | null /** TODO */;
    readonly user: User | null /** User object */;
  }
  /** TODO */
  export interface ApplicationPlatform {
    readonly id: string | null /** The application platform ID */;
    readonly platformType: string | null /** Platform type, such as TODO */;
    readonly platformUrl: string | null /** The application platform URL. */;
  }
  /** Contains information about engineJWTToken context */
  export interface JwtTokenInfo {
    readonly engineId: string;
    readonly token: string;
    readonly resource: EngineJwtResource;
  }
  /** Contain resouces of Engine JWT Token */
  export interface EngineJwtResource {
    readonly applicationId: string | null;
    readonly tdoId: string | null;
    readonly jobId: string;
    readonly taskId: string;
  }

  export interface VerifyJwtPayload {
    readonly jwtToken: string /** the same JWT input */;
    readonly payload: Json /** the payload contained within the JWT */;
  }

  export interface UnsubscribeEvent {
    readonly id: string /** ID of the object that was deleted */;
    readonly message: string | null /** Message */;
  }

  export interface EmitEventResponse {
    readonly id: string;
    readonly decoder: string /** the decoder that GQL used to interpret your event before sending */;
  }

  export interface Bundle {
    readonly id: string;
    readonly organizationId: string | null;
    readonly clusterId: string | null;
    readonly nodeId: string | null;
    readonly name: string | null;
    readonly externalCredentialId: string | null;
    readonly testRun: boolean | null;
    readonly selectDetail: BundleSelectDetail | null;
    readonly selectCategory: string | null;
    readonly bundleResults: BundleResults | null;
    readonly bundleStarted: DateTime | null;
    readonly previousBundleStarted: DateTime | null;
    readonly bundleCompleted: DateTime | null;
    readonly deletedDate: DateTime | null;
    readonly createdDate: DateTime | null;
    readonly updatedDate: DateTime | null;
    readonly scheduleDefinition: BundleScheduleDefinition | null;
    readonly nextScheduledTime: DateTime | null;
  }

  export interface BundleSelectDetail {
    readonly category: string;
    readonly select: ReadonlyArray<string> | null /** Array of file types to include. */;
    readonly paths: ReadonlyArray<string> | null /** Array of paths to search from. */;
    readonly files: ReadonlyArray<string | null> | null /** Array of files to search from. */;
    readonly tasks: ReadonlyArray<BundleSelectDetailTask | null> | null /** Array of tasks to run for each job. */;
    readonly afterTime: DateTime | null /** Include items after this time. */;
    readonly beforeTime: DateTime | null /** Include items before this time. */;
    readonly recursiveDescent: boolean;
    readonly service: BundleService | null;
  }

  export interface BundleSelectDetailTask {
    readonly engineId: string /** Id of engine. */;
  }

  export interface BundleService {
    readonly serviceType: string | null;
    readonly region: string | null;
    readonly bucketName: string | null;
  }

  export interface BundleResults {
    readonly found: number;
    readonly completed: number;
    readonly errors: BundleError;
  }

  export interface BundleError {
    readonly error: string;
  }

  export interface BundleScheduleDefinition {
    readonly recurringStartTime: DateTime | null;
    readonly recurringEndTime: DateTime | null;
    readonly repeatDaysTimeInMinutes: number | null;
    readonly repeatDaysOfWeek: ReadonlyArray<number | null> | null;
    readonly repeatDaysOfMonth: ReadonlyArray<number | null> | null;
    readonly repeatMinutes: number | null;
  }
  /** Key-value pairs -- a generic way to represent metadata */
  export interface Kvp extends Metadata {
    readonly name: string;
    readonly value: ReadonlyArray<Property | null> | null;
  }
  /** Type representing an integer property. */
  export interface IntProperty extends Property {
    readonly name: string;
    readonly value: number | null;
  }
  /** Type representing a string property */
  export interface StringProperty extends Property {
    readonly name: string;
    readonly value: string | null;
  }
  /** Type representing a boolean property */
  export interface BooleanProperty extends Property {
    readonly name: string;
    readonly value: boolean | null;
  }

  export interface CompoundProperty extends Property {
    readonly name: string;
    readonly value: Kvp | null;
  }
  /** Object that represents the mapping of clone assets to its parent's assets. */
  export interface CloneAssetIdMap {
    readonly oldAssetId: string /** The original asset ID (within the cloned asset container). */;
    readonly newAssetId: string /** The new asset ID (within the clone asset container). */;
  }
  /** Metadata that represents a clone of a recording. */
  export interface CloneData extends Metadata {
    readonly date: string | null /** Timestamp when the recording was cloned */;
    readonly originalId: string /** The ID of the asset container this was cloned from */;
    readonly cloneBlobs: boolean | null /** Clone blobs flag */;
    readonly assetIdMap: ReadonlyArray<CloneAssetIdMap | null> | null /** Map of asset IDs from the clone to the parent. */;
    readonly name: string;
  }
  /** Metadata that represents a program. */
  export interface Program extends Metadata {
    readonly id: string | null;
    readonly name: string;
    readonly image: string | null;
    readonly liveImage: string | null;
  }

  export interface FileData extends Metadata {
    readonly name: string;
    readonly size: number | null;
    readonly mimeType: string | null;
    readonly fileName: string | null;
  }

  export interface CognitiveSearchProfile {
    readonly and: ReadonlyArray<CognitiveSearchProfile> | null;
    readonly or: ReadonlyArray<CognitiveSearchProfile> | null;
    readonly condition: CognitiveSearchCondition | null;
    readonly jsondata: Json | null;
  }

  export interface CognitiveSearchCondition {
    readonly engineCategoryId: string;
    readonly state: Json;
  }
  /** An object containing custom structured data.This type is not fully implemented. */
  export interface StructuredJsonObject extends Metadata {
    readonly data: Json | null;
    readonly schema: StructuredJsonSchema;
    readonly name: string;
    readonly id: string;
  }
  /** A custom structured data schema, specified in JSON.This type is not fully implemented. */
  export interface StructuredJsonSchema {
    readonly schema: Json | null;
    readonly name: string;
    readonly id: string;
    readonly ownerOrganizationId: string;
    readonly organization: Organization;
  }

  export interface JsonObject extends Metadata {
    readonly name: string;
    readonly data: Json | null;
  }

  export interface CreateExecutionLocation {
    readonly clusterId: string;
    readonly nodeId: string | null;
  }

  export interface UpdateExecutionLocation {
    readonly id: string;
    readonly clusterId: string;
    readonly nodeId: string | null;
  }
  /** Specify a filter on a TemporalDataObject date/time field.At least one of `toDateTime` and `fromDateTime` must be provided. */
  export interface TemporalDataObjectDateTimeFilter {
    readonly toDateTime: DateTime | null /** Match if the field value is `toDateTime` or earlier */;
    readonly toDateTimeExclusive:
      | boolean
      | null /** Whether the toDateTime is inclusive or exclusive of the input timestamp */;
    readonly fromDateTime: DateTime | null /** Match if the field value is `fromDateTime` or later */;
    readonly fromDateTimeExclusive:
      | boolean
      | null /** Whether the fromDateTime is inclusive or exclusive of the input timestamp */;
    readonly field: TemporalDataObjectDateTimeField /** Identify the field to filter on. */;
  }

  export interface SchemaOrder {
    readonly field: SchemaOrderFields;
    readonly direction: OrderDirection | null;
  }

  export interface EngineFilter {
    readonly language: string | null /** Language supported by the engine */;
    readonly category: ReadonlyArray<string | null> | null /** provide a list of engine category names to filter by */;
    readonly type: ReadonlyArray<EngineTypeFilter> | null /** provide a list of engine type names to filter by */;
    readonly rating: ReadonlyArray<number | null> | null /** Provide a list of rating from 0 to 5 to filter by. */;
    readonly deploymentModel: DeploymentModel | null /** Specify the deployment model of the engine. */;
    readonly priceMin: number | null /** Specify the minimum price of the engine. */;
    readonly priceMax: number | null /** Specify the maximum price of the engine. */;
    readonly fedRampImpactLevelMin: number | null /** Specify the minimum FedRamp impact level of the engine. */;
    readonly fedRampImpactLevelMax: number | null /** Specify the minimum FedRamp impact level of the engine. */;
    readonly trainableViaApi: boolean | null /** Filter engines that can be trainable via API. */;
    readonly clusterSize: ClusterSize | null /** Filter engines by cluster size. */;
    readonly gpuSupported: SupportedGpu | null /** Filter engines by gpu supported. */;
    readonly mode: ReadonlyArray<EngineMode> | null /** Provide a list of engine modes to filter by */;
    readonly runtimeType: ReadonlyArray<string> | null /** Provide a list of runtime types to filter by */;
  }

  export interface EngineSortField {
    readonly field: EngineOrderField;
    readonly direction: OrderDirection | null;
  }
  /** Source list sort information */
  export interface SourceSortField {
    readonly field: SourceOrderField /** Specify the field to sort by. Required. */;
    readonly direction: OrderDirection | null /** Specify the sort direction. Default is descending. */;
  }

  export interface JobSortField {
    readonly field: JobOrderField;
    readonly direction: OrderDirection | null;
  }

  export interface JobDateTimeFilter {
    readonly toDateTime: DateTime | null;
    readonly fromDateTime: DateTime | null;
    readonly field: JobDateTimeField;
  }

  export interface TaskDateTimeFilter {
    readonly toDateTime: DateTime | null;
    readonly fromDateTime: DateTime | null;
    readonly field: TaskDateTimeField;
  }

  export interface DataRegistryVersion {
    readonly id: string /** The id of the DataRegistry */;
    readonly majorVersion: number /** The major version of the DataRegistry */;
  }

  export interface MentionDateTimeFilter {
    readonly toDateTime: DateTime | null;
    readonly fromDateTime: DateTime | null;
    readonly field: MentionDateTimeField;
  }

  export interface MentionOrderBy {
    readonly field: MentionOrderByField;
    readonly direction: OrderDirection | null;
  }
  /** Specifies an "order by" entry in the `auditLog` query */
  export interface AuditLogOrderBy {
    readonly field: AuditLogOrderByField | null;
    readonly direction: OrderDirection | null;
  }

  export interface ScheduledJobDateTimeFilter {
    readonly toDateTime: DateTime | null;
    readonly fromDateTime: DateTime | null;
    readonly field: ScheduledJobDateTimeField;
    readonly includeEmpty: boolean | null;
  }

  export interface ScheduledJobPartTimeFilter {
    readonly toTime: Time | null;
    readonly fromTime: Time | null;
    readonly field: ScheduledJobPartTimeField;
  }

  export interface ScheduledJobOrderBy {
    readonly field: ScheduledJobOrderField;
    readonly direction: OrderDirection | null;
  }
  /** Payload required to create a temporal data object */
  export interface CreateTdo {
    readonly startDateTime: DateTime /** Start date and time in numerical (epoch) format. */;
    readonly stopDateTime: DateTime /** Stop date and time in numerical (epoch) format. */;
    readonly source: string | null /** Source for the TDO, such as an ingestion type or engine ID. */;
    readonly status:
      | string
      | null /** Status, such as "downloaded" or "recording".The server will set a value if one is not provided. */;
    readonly name: string | null /** A name for the TDO object, such as the name of the primary media file. */;
    readonly description: string | null /** A description for the TDO object. */;
    readonly isPublic:
      | boolean
      | null /** True if the new TDO should be made public. If true, security.globalwill be set to true and users from other organizations will be able toview, but not modify, the TDO's metadata and assets. */;
    readonly parentFolderId:
      | string
      | null /** An optional parent folder ID for the new TemporalDataObject.The folder can be filed in additional folders later using `fileTemporalDataObject`,or un-filed from this one. */;
    readonly sourceData: SetTdoSourceData | null /** Optionally, set source data for this TDO. Source data identifiesthat task that generated this TDO. If the TDO was not generated as partof engine or adapter execution, this field should not be set.However, it is _strongly_ recommended that engines that create TDOsset this field. Doing so ensures that later tasks in the same jobhave appropriate access to the new TDO. */;
    readonly details: Json | null;
    readonly applicationId: string | null /** Only internal systems can set this value */;
    readonly contentTemplates: ReadonlyArray<
      CreateTdoContentTemplateWithTdo
    > | null /** Optionally, specify one or more structured data objects to apply ascontent templates to the TDO. They will be stored as assets of typecontent-template and will contain an immutable copy of the original data. */;
    readonly addToIndex:
      | boolean
      | null /** Optionally, add the new data to the search index. If the data is notindexed on creation, it can be indexed later by using `updateTDO` orcreating a suitable job. */;
    readonly thumbnailUrl: string | null /** An optional thumbnail URL for the TDO */;
    readonly sourceImageUrl: string | null /** An optional image representing the TDO source */;
  }
  /** Identifies the task that created a TDO. */
  export interface SetTdoSourceData {
    readonly taskId: string | null /** ID of the task that created this TDO */;
    readonly sourceId:
      | string
      | null /** Optional ID of the source from which this TDO's initialdata was created. This field will typically be set onlyby adapters that ingest data and create TDOs. */;
    readonly scheduledJobId: string | null /** Optional ID of the scheduled job that created this TDO. */;
  }

  export interface CreateTdoContentTemplateWithTdo {
    readonly schemaId: string /** Supply the ID of the data registry that contains the schemafor the content template. */;
    readonly sdoId:
      | string
      | null /** To associate an existing structured data object (SDO) to theTDO, provide the SDO ID. Either this field or data must be supplied. */;
    readonly data: Json | null /** To create a new structured data object, supply this field withJSON to save in the SDO. The JSON must comply with the schemadefined in data registry. */;
  }
  /** Payload required to create a temporal data object */
  export interface UpdateTdo {
    readonly id: string /** ID of the TDO to update */;
    readonly startDateTime: DateTime | null /** Start date and time in numerical (epoch) format. */;
    readonly stopDateTime: DateTime | null /** Stop date and time in numerical (epoch) format. */;
    readonly source: string | null /** Source for the TDO, such as an ingestion type or engine ID. */;
    readonly status: string | null /** Current status, such as "downloaded" or "recording". */;
    readonly name: string | null /** A name for the TDO object, such as the name of the primary media file. */;
    readonly description: string | null /** A description for the TDO object. */;
    readonly primaryAsset: ReadonlyArray<
      SetPrimaryAsset
    > | null /** Set the primary asset of a given type (transcript or media) */;
    readonly isPublic:
      | boolean
      | null /** True if the new TDO should be made public. If true, security.globalwill be set to true and users from other organizations will be able toview, but not modify, the TDO's metadata and assets. */;
    readonly details: Json | null;
    readonly contentTemplates: ReadonlyArray<
      CreateTdoContentTemplateWithTdo
    > | null /** Optionally, specify one or more structured data objects to apply ascontent templates to the TDO. They will be stored as assets of typecontent-template and will contain an immutable copy of the original data.Setting this field on an update does _not_ affect any content templatespreviously added to the TDO -- it only creates the new ones. */;
    readonly thumbnailUrl: string | null /** An optional thumbnail URL for the TDO */;
    readonly sourceImageUrl: string | null /** An optional image representing the TDO source */;
  }
  /** Input used to set the primary asset of a given type on a TDO.The type must be supported by the server; primary asset is usedby certain engines and front end components.Currently "media" and "transcript" are supported. */
  export interface SetPrimaryAsset {
    readonly id: string /** ID of the asset */;
    readonly assetType: string /** The asset type -- "media" or "transcript" */;
  }

  export interface CreateTaskLog {
    readonly taskId: string /** ID of the task which the task long belongs to. */;
    readonly file: UploadedFile | null /** A file to upload. Use multipart form POST to submit this field. */;
  }

  export interface CreateAsset {
    readonly containerId: string /** ID of the parent container, a TemporalDataObject, for the new asset */;
    readonly contentType: string | null /** A valid MIME type */;
    readonly description: string | null /** An optional description for the asset */;
    readonly file: UploadedFile | null /** A file to upload. Use multipart form POST to submit this field. */;
    readonly md5sum: string | null /** Optional expected checksum for the file */;
    readonly assetType: string | null /** Asset type - deprecated (use type) */;
    readonly type: string | null /** The asset type. Either this or assetType must be provided. */;
    readonly uri:
      | string
      | null /** URI to the asset data. Optional -- if a file is provided, the URIwill be computed by the server. */;
    readonly fileData: SetAssetFileData | null /** Optionally, set attributes about the file */;
    readonly sourceData: SetAssetSourceData | null /** Optionally, set attributes about the source engine and task */;
    readonly details: Json | null /** Application- or type-specific metadata */;
    readonly name: string | null /** File or other name */;
    readonly jsondata: Json | null /** Deprecated. Set `fileData`, `sourceData`, or `details` instead. */;
    readonly setAsPrimary:
      | boolean
      | null /** if true, sets the new asset to be the primary asset of its type.Only certain asset types, such as "media" and "transcript",can have primary assets. */;
    readonly isUserEdited: boolean | null /** Set to true if this asset was created by editing another asset. */;
  }
  /** Input type for AssetFileData */
  export interface SetAssetFileData {
    readonly md5sum: string | null /** The MD5 checksum of the file */;
    readonly size: number | null /** The file size in bytes */;
    readonly originalFileUri: string | null /** Original file URI, if provided on asset creation */;
    readonly mode: AssetCreationMode | null /** The insertion mode of the asset */;
  }
  /** Input type for AssetSourceData */
  export interface SetAssetSourceData {
    readonly name: string | null /** The name of the asset source engine or engine category */;
    readonly taskId: string | null /** ID of the specific task that created the asset */;
    readonly engineId: string | null /** ID of the engine that created the asset */;
    readonly sourceId:
      | string
      | null /** Optional ID of the source from which this assetwas created. This field will typically be set onlyby adapters that ingest data. */;
    readonly scheduledJobId: string | null /** Optional ID of the scheduled job that created this asset */;
    readonly assetId:
      | string
      | null /** Optional ID of the asset this asset was created from.This will usually be assets with edits to a previousasset. */;
  }
  /** Input needed to update an asset. The asset data itself -- file or URI --is immutable. Only supplemental metadata can be updated with this input type. */
  export interface UpdateAsset {
    readonly id: string /** The asset ID. Required. */;
    readonly description: string | null /** The asset description. */;
    readonly name: string | null /** File name or other name for the asset */;
    readonly fileData: SetAssetFileData | null /** Optionally, set attributes about the file */;
    readonly sourceData: SetAssetSourceData | null /** Optionally, set attributes about the source engine and task */;
    readonly details: Json | null /** Application- or type-specific metadata */;
  }

  export interface RequestClone {
    readonly sourceApplicationId: string;
    readonly destinationApplicationId: string;
    readonly cloneBlobs: boolean | null;
  }
  /** Input fields used to create a new engine. */
  export interface CreateEngine {
    readonly isPublic:
      | boolean
      | null /** Indicates whether or not the engine should be public -- visible to andusable by users outside the creator's organization.Typically an engine should not be made public until it has been fullyconfigured and tested in production. */;
    readonly name: string /** Human-readable name for the engine */;
    readonly description: string | null /** An optional description for the engine. */;
    readonly categoryId: string /** The engine category */;
    readonly deploymentModel: DeploymentModel /** The engine deployment model. See the DeploymentModel enum for options. */;
    readonly price: number | null /** An optional price indicator for the engine. */;
    readonly fields: ReadonlyArray<
      CreateEngineField
    > | null /** Optionally, supply custom fields that the user can set when launchingthe engine. See developer documentation for details. */;
    readonly iconPath: string | null /** The path for an icon image */;
    readonly logoPath: string | null /** The path for a logo image */;
    readonly libraryRequired: boolean | null /** Whether or not the engine requires a library. */;
    readonly createsTDO: boolean | null /** Whether or not the engine creates a TDO */;
  }

  export interface CreateEngineField {
    readonly max: number | null /** Maximum value, in float format. Applies only to fields of type Number. */;
    readonly min: number | null /** Minimum value, in float format. Applies only to fields of type Number. */;
    readonly step:
      | number
      | null /** Numerical step by which the value should be incremented or decremented inthe user interface, in float format. Applies only to fields of type Number. */;
    readonly type: EngineFieldType /** The field type. */;
    readonly info: string | null /** General information about the field, such as a description. */;
    readonly name: string /** A machine-readable name, or key, for the field. */;
    readonly label: string /** A human-readable label for the field. */;
    readonly options: ReadonlyArray<
      CreateEngineFieldPicklistOption
    > | null /** A set of allowed values for the field. Applies only to fields of typepicklist or multi-picklist. */;
    readonly defaultValue:
      | string
      | null /** An optional default value for the field. Taken in string format, butapplies to all field types. */;
    readonly defaultValues: ReadonlyArray<
      string
    > | null /** Optional default values to apply to a picklist. This fieldshould only be set for a field of type multi-picklist. */;
  }
  /** Represents one allowed option in a picklist. */
  export interface CreateEngineFieldPicklistOption {
    readonly key: string /** The human-readable label for the option, such as "English-US" for a language selector. */;
    readonly value: string /** The machine-readable value that will be sent in the engine payload, such as"en-us" for a language selector. */;
  }
  /** Input fields used to update an existing engine. */
  export interface UpdateEngine {
    readonly id: string /** Supply the ID of the engine to update */;
    readonly isPublic:
      | boolean
      | null /** Indicates whether or not the engine should be public -- visible to andusable by users outside the creator's organization.Typically an engine should not be made public until it has been fullyconfigured and tested in production. */;
    readonly name:
      | string
      | null /** Human-readable name for the engine. Changing this value will changehow the engine appears to users. */;
    readonly description: string | null;
    readonly categoryId: string | null;
    readonly deploymentModel: DeploymentModel | null /** The engine deployment model. See the DeploymentModel enum for options. */;
    readonly price: number | null /** An optional price indicator for the engine. */;
    readonly fields: ReadonlyArray<
      CreateEngineField
    > | null /** Optionally, supply custom fields that the user can set when launchingthe engine. See developer documentation for details. To update the fields,make sure you supply the complete set of new fields -- new fields,updated existing fields, and unmodified existing fields. */;
    readonly iconPath: string | null /** The path for an icon image */;
    readonly logoPath: string | null /** The path for a logo image */;
    readonly libraryRequired: boolean | null /** Whether or not the engine requires a library. */;
  }

  export interface CreateBuild {
    readonly engineId: string;
  }

  export interface UpdateBuild {
    readonly id: string;
    readonly engineId: string;
    readonly action: BuildUpdateAction;
    readonly dockerImage: string | null;
  }

  export interface DeleteBuild {
    readonly id: string;
    readonly engineId: string;
  }

  export interface UpdateTask {
    readonly id: string;
    readonly status: TaskStatus;
    readonly jobId: string | null;
    readonly output: Json | null;
    readonly outputString: string | null /** Task output as JSON string */;
    readonly outputJsonKey:
      | string
      | null /** Use this parameter if your task output does not take the form of validJSON. Provide a key and the server will convert your output intoJSON with a single string value. For example,```mutation {updateTask(input: {id: <id>outputString: "<xml><stuff id=\"value\">more stuff </stuff></xml>"outputJsonKey: "response"}) { id }}```Will set the task output JSON to` {"response":"<xml><stuff id=\"value\">more stuff </stuff></xml>"}` */;
    readonly taskOutput: Json | null /** Backwards compatibility only */;
    readonly payload: Json | null /** Update the task with a new payload */;
    readonly executionLocationData: Json | null /** Save execution location metadata */;
  }

  export interface PollTask {
    readonly id: string;
    readonly jobId: string;
    readonly pollPayload: Json | null;
  }

  export interface CreateJob {
    readonly status: string | null;
    readonly targetId: string | null;
    readonly tasks: ReadonlyArray<CreateTask> | null;
    readonly retries: number | null;
    readonly scheduledJobId:
      | string
      | null /** Optionally, specify the scheduled job ID that this job is associatedwith. Typically it is not necessary for a client to set this; it ishandled internally by the API. */;
    readonly jobTemplateId:
      | string
      | null /** Supply a job template ID to indicate that thisjob was created from the given job template.To create a job _from_ a template, use `launchJobTemplates`. */;
    readonly skipDecider: boolean | null;
    readonly clusterId:
      | string
      | null /** Optionally, specify a cluster ID where the job should run.Both the organization and the engine must have access to the cluster. */;
    readonly jobConfig: Json | null /** Optional job config information. Typically used only by Veritoneplatform components. */;
    readonly isReprocessJob: boolean | null;
  }
  /** Fields required to create a task. Used when creating a job. */
  export interface CreateTask {
    readonly taskType:
      | string
      | null /** The task type, which is mapped on the server to an engine ID.Either taskType OR engineId is required. */;
    readonly engineId: string | null /** Engine ID to be used for the task.Either engineId OR taskType is required. */;
    readonly payloadString:
      | string
      | null /** Task payload in raw string form.Optional. Only one of payloadString and payload is permitted. */;
    readonly payload: Json | null /** Task payload in GraphQL format.Optional. Only one of payloadString and payload is permitted. */;
    readonly isClone: boolean | null /** Optional. Specifies whether or not the task target should be cloned. */;
    readonly buildId: string | null /** Optional. Specifies the build ID of the engine */;
    readonly testTask: boolean | null /** Optional. Specifies whether the task is for testing. */;
    readonly standbyTask: CreateTask | null /** Optionally, provide a task definition that will be executed ifand only if this one fails. Standby tasks can be nested. */;
  }

  export interface UpdateJobs {
    readonly ids: ReadonlyArray<string> | null;
    readonly status: UpdateJobsStatus | null;
  }

  export interface CreateApplication {
    readonly name: string;
    readonly key: string;
    readonly category: string | null;
    readonly description: string;
    readonly iconUrl: string | null;
    readonly iconSvg: string | null;
    readonly url: string;
    readonly oauth2RedirectUrls: ReadonlyArray<string | null> | null;
    readonly checkPermissions: boolean;
    readonly permissionsRequired: ReadonlyArray<string | null> | null;
    readonly deploymentModel: DeploymentModel | null;
    readonly contextMenuExtensions: CreateContextMenuExtensions | null;
  }

  export interface CreateContextMenuExtensions {
    readonly mentions: ReadonlyArray<CreateContextMenuExtension | null> | null;
    readonly tdos: ReadonlyArray<CreateContextMenuExtension | null> | null;
    readonly watchlists: ReadonlyArray<CreateContextMenuExtension | null> | null;
    readonly collections: ReadonlyArray<CreateContextMenuExtension | null> | null;
  }

  export interface CreateContextMenuExtension {
    readonly label: string;
    readonly url: string;
  }

  export interface UpdateApplication {
    readonly id: string;
    readonly name: string | null;
    readonly status: ApplicationStatus | null;
    readonly category: string | null;
    readonly description: string | null;
    readonly iconUrl: string | null;
    readonly iconSvg: string | null;
    readonly url: string | null;
    readonly oauth2RedirectUrls: ReadonlyArray<string> | null;
    readonly checkPermissions: boolean | null;
    readonly permissionsRequired: ReadonlyArray<string> | null;
    readonly deploymentModel: DeploymentModel | null;
    readonly contextMenuExtensions: UpdateContextMenuExtensions | null;
  }

  export interface UpdateContextMenuExtensions {
    readonly mentions: ReadonlyArray<UpdateContextMenuExtension | null> | null;
    readonly tdos: ReadonlyArray<UpdateContextMenuExtension | null> | null;
    readonly watchlists: ReadonlyArray<UpdateContextMenuExtension | null> | null;
    readonly collections: ReadonlyArray<UpdateContextMenuExtension | null> | null;
  }

  export interface UpdateContextMenuExtension {
    readonly id: string | null;
    readonly label: string;
    readonly url: string;
  }

  export interface BulkDeleteContextMenuExtensions {
    readonly ids: ReadonlyArray<string> | null /** List of IDs of context menu extensions to delete */;
  }
  /** Fields used to update an organization. */
  export interface UpdateOrganization {
    readonly id: string /** ID of the organization to update */;
    readonly name: string | null /** Name of the organization */;
    readonly type: string | null;
    readonly seatLimit: number | null;
    readonly status: string | null;
    readonly applications: ReadonlyArray<string> | null;
    readonly businessUnit: string | null;
    readonly metadata: Json | null /** Currently only Veritone administrators can modify this field. */;
    readonly blacklist: SetEngineBlacklist | null /** Update the engine blacklist for this organization.Currently only Veritone administrators can modify this field.Updating this field will completely replacing the existing engineand engine category blacklists with the IDs provided. */;
    readonly whitelist: SetEngineWhitelist | null /** Update the engine whitelist for this organization.Currently only Veritone administrators can modify this field.Updating this field will completely replacing the existing engineand whitelist with the IDs provided. */;
  }

  export interface SetEngineBlacklist {
    readonly organizationId:
      | string
      | null /** Provide the organization ID to update. This field is required onlywhen using addToEngineBlacklist or deleteFromEngineBlacklist. */;
    readonly engineIds: ReadonlyArray<string> | null /** Provide the IDs of engines to set. */;
    readonly engineCategoryIds: ReadonlyArray<string> | null /** Provide the IDs of engine categories to set. */;
  }

  export interface SetEngineWhitelist {
    readonly organizationId:
      | string
      | null /** Provide the organization ID to update. This field is required onlywhen using addToEngineWhitelist or deleteFromEngineWhitelist. */;
    readonly engineIds: ReadonlyArray<string> | null;
  }

  export interface CreateEntityIdentifierType {
    readonly label: string;
    readonly labelPlural: string;
    readonly iconClass: string | null;
    readonly description: string | null;
    readonly dataType: EntityIdentifierDataType;
    readonly id: string;
  }

  export interface UpdateEntityIdentifierType {
    readonly id: string;
    readonly label: string | null;
    readonly labelPlural: string | null;
    readonly iconClass: string | null;
    readonly description: string | null;
    readonly dataType: EntityIdentifierDataType | null;
  }

  export interface CreateLibraryType {
    readonly id: string;
    readonly label: string;
    readonly iconClass: string | null;
    readonly entityIdentifierTypeIds: ReadonlyArray<string> | null;
    readonly entityType: CreateEntityType;
  }

  export interface CreateEntityType {
    readonly name: string;
    readonly namePlural: string;
    readonly schema: Json;
  }

  export interface UpdateLibraryType {
    readonly id: string;
    readonly label: string;
    readonly iconClass: string | null;
    readonly entityIdentifierTypeIds: ReadonlyArray<string> | null;
    readonly entityType: UpdateEntityType | null;
  }

  export interface UpdateEntityType {
    readonly name: string | null;
    readonly namePlural: string | null;
    readonly schema: Json | null;
  }

  export interface CreateLibrary {
    readonly name: string;
    readonly applicationId: string | null;
    readonly organizationId: string | null;
    readonly libraryTypeId: string;
    readonly coverImageUrl: string | null;
    readonly description: string | null;
  }

  export interface UpdateLibrary {
    readonly id: string;
    readonly name: string | null;
    readonly coverImageUrl: string | null;
    readonly description: string | null;
    readonly libraryTypeId: string | null;
    readonly version: number | null;
  }

  export interface CreateEntity {
    readonly name: string;
    readonly description: string | null;
    readonly libraryId: string;
    readonly profileImageUrl: string | null;
    readonly jsondata: Json | null /** GraphQL-formatted JSON-like structure containing freeform metadata.If a schema is associated with the entity type, the input will bevalidated against the schema. Use this field _or_ `jsonstring`, not both. */;
    readonly jsonstring:
      | string
      | null /** A string containing valid JSON with freeform metadata.If a schema is associated with the entity type, the input will bevalidated against the schema. Use this field _or_ `jsondata`, not both. */;
    readonly isPublished: boolean | null;
  }

  export interface UpdateEntity {
    readonly id: string;
    readonly name: string | null;
    readonly description: string | null;
    readonly profileImageUrl: string | null;
    readonly jsondata: Json | null /** GraphQL-formatted JSON-like structure containing freeform metadata.If a schema is associated with the entity type, the input will bevalidated against the schema. Use this field _or_ `jsonstring`, not both. */;
    readonly jsonstring:
      | string
      | null /** A string containing valid JSON with freeform metadata.If a schema is associated with the entity type, the input will bevalidated against the schema. Use this field _or_ `jsondata`, not both. */;
  }

  export interface CreateEntityIdentifier {
    readonly entityId: string;
    readonly identifierTypeId: string;
    readonly title: string | null;
    readonly isPriority: boolean | null;
    readonly url: string | null;
    readonly jsondata: Json | null /** GraphQL-formatted JSON-like structure containing freeform metadata.If a schema is associated with the entity type, the input will bevalidated against the schema. Use this field _or_ `jsonstring`, not both. */;
    readonly jsonstring:
      | string
      | null /** A string containing valid JSON with freeform metadata.If a schema is associated with the entity type, the input will bevalidated against the schema. Use this field _or_ `jsondata`, not both. */;
    readonly contentType: string;
    readonly file: UploadedFile | null;
    readonly entityType: CreateEntityType | null;
    readonly profileUpdateMode: SetEntityProfileImage | null /** If the entity identifier type is image, the new file can automaticallybe set on the entity as its profile image. This is off by default(the entity profile image is not modified) but can be controlledwith this parameter. */;
  }

  export interface UpdateEntityIdentifier {
    readonly id: string;
    readonly title: string | null;
    readonly isPriority: boolean | null;
    readonly url: string | null;
    readonly jsondata: Json | null /** GraphQL-formatted JSON-like structure containing freeform metadata.If a schema is associated with the entity type, the input will bevalidated against the schema. Use this field _or_ `jsonstring`, not both. */;
    readonly jsonstring:
      | string
      | null /** A string containing valid JSON with freeform metadata.If a schema is associated with the entity type, the input will bevalidated against the schema. Use this field _or_ `jsondata`, not both. */;
  }

  export interface CreateLibraryEngineModel {
    readonly engineId: string /** ID of the engine the model is used by */;
    readonly libraryId: string /** ID fo the library containing this engine model. */;
    readonly trainJobId: string | null /** Id of the train job. */;
    readonly trainStatus: LibraryEngineModelTrainStatus | null;
    readonly dataUrl:
      | string
      | null /** The URL to a file containing or related to the engine model.Use this field if the data is stored in a separate, internet-accessiblelocation and not managed by Veritone APIs.You may also use `updateLibraryEngineModel` to upload a data file. */;
    readonly jsondata: Json | null /** Optional free-form block containing engine-specific metadata. */;
  }

  export interface UpdateLibraryEngineModel {
    readonly id: string /** ID of the library engine model to update. */;
    readonly trainJobId: string | null /** Id of the train job. */;
    readonly trainStatus: LibraryEngineModelTrainStatus | null /** Status of the train job. */;
    readonly dataUrl:
      | string
      | null /** The URL to a file containing or related to the engine model.Submit either this field _or_ `file`, not both.Use this field if the data is stored in a separate, internet-accessiblelocation and not managed by Veritone APIs. */;
    readonly jsondata: Json | null /** Optional free-form block containing engine-specific metadata. */;
    readonly contentType:
      | string
      | null /** If a file is uploaded, you can explicitly specify the content type(a valid MIME type string) with this field. Often this is not necessaryas the HTTP multipart form POST client will set content type on thefile object implicitly. */;
    readonly file: UploadedFile | null /** An optional data file containing or related to the engine model.Use multipart form POST to submit this field.Submit either this field _or_ `dataUrl`, not both. If a file isuploaded, the server will store it and then set `dataUrl` toits location. */;
  }

  export interface ApplicationWorkflow {
    readonly id: string;
    readonly action: ApplicationWorkflowAction;
  }

  export interface EngineWorkflow {
    readonly id: string;
    readonly action: EngineWorkflowAction;
  }

  export interface CreateIngestionConfiguration {
    readonly applicationId: string;
    readonly type: string;
    readonly name: string;
    readonly jsondata: Json | null /** Container for arbitrary JSON-format metadata including configuration, etc. */;
    readonly jsonstring:
      | string
      | null /** String containing raw JSON-format metadata. You can specifyeither this value or jsondata, but not both. */;
  }

  export interface UpdateIngestionConfiguration {
    readonly id: string;
    readonly type: string | null;
    readonly name: string | null;
    readonly jsondata: Json | null /** Container for arbitrary JSON-format metadata including configuration, etc. */;
    readonly jsonstring:
      | string
      | null /** String containing raw JSON-format metadata. You can specifyeither this value or jsondata, but not both. */;
  }

  export interface CreateWidget {
    readonly widgetId: string | null;
    readonly collectionId: string;
    readonly organizationId: string | null;
    readonly folderId: string | null;
    readonly name: string | null;
    readonly adScript: string | null;
    readonly width: number | null;
    readonly numberOfMentionsToShow: number | null;
    readonly displayLogo: boolean | null;
    readonly displayCollectionName: boolean | null;
    readonly displayMentionIntro: boolean | null;
    readonly displayTranscription: boolean | null;
    readonly seoTags: ReadonlyArray<string | null> | null;
    readonly backgroundColor: string | null;
    readonly borderColor: string | null;
    readonly textColor: string | null;
  }

  export interface UpdateWidget {
    readonly id: string | null;
    readonly widgetId: string | null;
    readonly name: string | null;
    readonly organizationId: string | null;
    readonly collectionId: string;
    readonly displayCollectionName: boolean | null;
    readonly displayTranscription: boolean | null;
    readonly width: number | null;
    readonly numberOfMentionsToShow: number | null;
    readonly adScript: string | null;
    readonly seoTags: ReadonlyArray<string | null> | null;
    readonly backgroundColor: string | null;
    readonly borderColor: string | null;
    readonly textColor: string | null;
    readonly createdDateTime: DateTime | null;
    readonly displayLogo: boolean | null;
    readonly displayMentionIntro: boolean | null;
  }

  export interface CreateUser {
    readonly name: string;
    readonly jsondata: Json | null /** Metadata in JSON format. If a field is provided elsewhere in thepayload, it does not need to be saved in jsondata. */;
    readonly requestorId: string | null /** User who requested that the new user be provisioned */;
    readonly password:
      | string
      | null /** Password for new user. Optional - if not provided, the user willneed to set on first login. */;
    readonly organizationId: string;
    readonly sendNewUserEmail: boolean | null;
    readonly email: string | null;
    readonly roleIds: ReadonlyArray<string> | null;
    readonly acls: ReadonlyArray<UserAclInput> | null;
    readonly firstName: string | null /** Optionally, specify user's first name */;
    readonly lastName: string | null /** Optionally, specify user's last name */;
  }

  export interface UserAclInput {
    readonly applicationId: string | null;
    readonly organizationId: string | null;
    readonly objectType: string | null;
    readonly objectId: string | null;
    readonly access: UserAclAccessRightsInput | null;
    readonly userId: string | null;
  }

  export interface UserAclAccessRightsInput {
    readonly owner: boolean | null;
  }

  export interface CreateOrganization {
    readonly name: string;
    readonly applications: Json | null;
    readonly metadata: Json /** Metadata in JSON format. */;
    readonly adminSeatLimit: number | null;
    readonly seatLimit: number | null;
    readonly status: OrganizationStatus | null;
    readonly maxAiwareNodes: number | null;
    readonly maxAiwareClusters: number | null;
    readonly businessUnit: string;
    readonly integrations: Json | null;
    readonly types: ReadonlyArray<OrganizationType | null> | null;
  }

  export interface UpdateUser {
    readonly id: string;
    readonly name: string | null;
    readonly jsondata: Json | null;
    readonly roleIds: ReadonlyArray<string> | null;
    readonly acls: ReadonlyArray<UserAclInput> | null;
    readonly firstName: string | null /** Optionally, specify user's first name */;
    readonly lastName: string | null /** Optionally, specify user's last name */;
  }

  export interface CreatePasswordUpdateRequest {
    readonly id: string /** The user's ID */;
    readonly skipPasswordResetEmail:
      | boolean
      | null /** Optionally specify whether we should skip sending the reset email. */;
  }

  export interface GetCurrentUserPasswordToken {
    readonly password: string | null;
  }

  export interface CreatePasswordResetRequest {
    readonly skipPasswordResetEmail:
      | boolean
      | null /** Optionally specify whether we should skip sending the reset email. */;
    readonly userName: string /** The user login name. Typically email address. */;
  }

  export interface UpdateCurrentUser {
    readonly passwordToken: string | null /** Required if updating the MFA phone number */;
    readonly mfaInfo: UpdateMfaInfo | null /** New MFA info for the current user, optional */;
    readonly userSetting: UserSettingInfo | null /** New user settings for the current user, optional */;
    readonly firstName: string | null /** New first name for the current user, optional */;
    readonly lastName: string | null /** New last name for the current user, optional */;
    readonly imageUrl: string | null /** New image URL for the current user, optional */;
  }

  export interface UpdateMfaInfo {
    readonly phoneNumber: string | null;
  }

  export interface UserSettingInfo {
    readonly key: string | null;
    readonly value: string | null;
  }

  export interface ChangePassword {
    readonly oldPassword: string /** The current user's old password. Must be provided even if theuser is otherwise authenticated as an additional security check. */;
    readonly newPassword: string /** The new password. May be subject to validation rules dependingon the organization or environment system policy. */;
  }

  export interface CreateDataRegistry {
    readonly id: string | null /** Optionally provide a forced ID */;
    readonly name: string;
    readonly description: string;
    readonly source: string;
  }

  export interface UpdateDataRegistry {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly source: string;
  }

  export interface UpsertSchemaDraft {
    readonly dataRegistryId: string;
    readonly majorVersion: number | null;
    readonly schema: Json;
  }

  export interface UpdateSchemaState {
    readonly id: string /** The schemaId to update */;
    readonly status: SchemaStatus /** The new schema status */;
    readonly breakingChanges: boolean | null /** Specify if publishing this schema would break ingestion */;
  }

  export interface CreateStructuredData {
    readonly id: string | null /** Optionally provide a forced ID */;
    readonly schemaId: string /** Id of the schema used to validate this object */;
    readonly data: Json | null;
    readonly dataString: string | null;
  }

  export interface CreateCollection {
    readonly name: string /** the name of the collection */;
    readonly folderDescription: string | null /** description of the collection */;
    readonly image: string | null /** Collection image */;
  }

  export interface UpdateCollection {
    readonly folderId: string /** id of the collection */;
    readonly name: string | null /** the name of the collection */;
    readonly folderDescription: string | null /** description of the collection */;
    readonly image: string | null /** Collection image */;
  }

  export interface ShareCollection {
    readonly folderId: string /** id of the collection */;
    readonly shareMessage: string | null /** message in email */;
    readonly recipients: ReadonlyArray<string | null> | null /** list of recipients */;
    readonly shareOptions: ShareOptions | null /** Collection image */;
  }

  export interface ShareOptions {
    readonly showImage: boolean | null;
    readonly showComments: boolean | null;
    readonly showRating: boolean | null;
    readonly showHeader: boolean | null;
    readonly showOrganizationLogo: boolean | null;
    readonly organizationLogoUrl: boolean | null;
    readonly showEngineResults: boolean | null;
    readonly showHits: boolean | null;
    readonly showAffiliateStripdown: boolean | null;
    readonly showDownload: boolean | null;
    readonly showDescription: boolean | null;
  }

  export interface ShareMentionFromCollection {
    readonly mentionId: string /** id of the mention from collection */;
    readonly folderId: string /** id of the collection */;
    readonly shareMessage: string | null /** message in email */;
    readonly recipients: ReadonlyArray<string | null> | null /** list of recipients */;
    readonly shareOptions: ShareOptions | null /** Collection image */;
  }

  export interface CollectionMentionInput {
    readonly folderId: string /** id of the collection */;
    readonly mentionId: string /** id of the mention */;
  }
  /** Information required to create a new folder.After creation, a folder can be renamed with the `updateFolder` mutation,but no other changes are supported. */
  export interface CreateFolder {
    readonly name: string /** The folder name */;
    readonly description: string /** The folder description */;
    readonly parentId: string /** ID of the parent folder underneath which the new folder will be placed. */;
    readonly rootFolderType: RootFolderType | null /** Root folder type to apply to the new folder */;
    readonly orderIndex:
      | number
      | null /** Order index determining in what order the new folder will be displayedrelative to other folders at the same level. */;
  }
  /** Information required to update a folder.Currently, the folder can be renamed. No other changes are supported. */
  export interface UpdateFolder {
    readonly id: string /** ID of the folder to update */;
    readonly name: string /** New name for the folder. */;
  }
  /** Move a folder into a new parent folder. */
  export interface MoveFolder {
    readonly treeObjectId: string;
    readonly prevParentTreeObjectId: string;
    readonly newParentTreeObjectId: string;
    readonly newOrderIndex: number;
    readonly prevOrderIndex: number;
    readonly rootFolderType: RootFolderType | null;
  }
  /** Delete a folder */
  export interface DeleteFolder {
    readonly id: string /** ID of the folder to delete */;
    readonly orderIndex: number;
  }

  export interface CreateMentionComment {
    readonly mentionId: string;
    readonly commentText: string;
  }

  export interface UpdateMentionComment {
    readonly mentionId: string;
    readonly commentId: string;
    readonly commentText: string;
  }

  export interface DeleteMentionComment {
    readonly mentionId: string;
    readonly commentId: string;
  }

  export interface CreateMentionRating {
    readonly mentionId: string;
    readonly ratingValue: number;
  }

  export interface UpdateMentionRating {
    readonly mentionId: string;
    readonly ratingId: string;
    readonly ratingValue: number;
  }
  /** Input required to delete a mention rating.Both the rating and mention IDs must be provided.Only the rating will be deleted. */
  export interface DeleteMentionRating {
    readonly mentionId: string /** The mention ID */;
    readonly ratingId: string /** The rating ID */;
  }
  /** Input fields required by the userLogin mutation. */
  export interface UserLogin {
    readonly userName: string /** The user login name -- typically, email address. */;
    readonly password: string /** The user password. Note that this value is only ever transmitted overthe encrypted SSL protocol. */;
  }

  export interface CreateMention {
    readonly mediaId: string;
    readonly programId: string;
    readonly mentionDateTime: DateTime;
    readonly mentionHitCount: number;
    readonly mentionStatusId: number | null;
    readonly watchlistId: string | null;
    readonly cognitiveEngineResultsString: string | null;
    readonly snippetsString: string | null;
    readonly hitStartDateTime: DateTime | null;
    readonly hitEndDateTime: DateTime | null;
    readonly mentionEndDateTime: DateTime | null;
    readonly metadata: Json | null;
    readonly queryTerm: string | null;
  }

  export interface BulkUpdateWatchlistFilter {
    readonly ids: ReadonlyArray<string> | null /** List of IDs of watchlists to update */;
  }

  export interface BulkUpdateWatchlist {
    readonly stopDate: DateTime | null /** New stop date for watchlist. Currently, this is the onlyfield that can be updated. */;
  }

  export interface FileTemporalDataObject {
    readonly tdoId: string /** ID of the TDO to file */;
    readonly folderId: string /** ID of the new parent folder */;
    readonly orderIndex:
      | number
      | null /** Order index determining in what order the new TDO will be displayedrelative to other TDOs at the same level */;
  }

  export interface UnfileTemporalDataObject {
    readonly tdoId: string /** ID of the TDO to unfile */;
    readonly folderId: string /** ID of the parent folder. The TDO will be removed from this folder. */;
  }

  export interface MoveTemporalDataObject {
    readonly tdoId: string /** ID of the TDO to move */;
    readonly oldFolderId: string /** ID of the original parent folder. The TDO will be removed from this folder. */;
    readonly newFolderId: string /** ID of the new parent folder. The TDO will be added to this folder. */;
  }
  /** Fields needed to upload and store an engine result using multipart form POST. */
  export interface UploadEngineResult {
    readonly taskId: string /** ID of the task that created this engine result */;
    readonly outputString:
      | string
      | null /** A string containing the engine result.Use either this field, `output`, or `file` with multipart form POST, but notmore than one. */;
    readonly output: Json | null /** JSON data containing the engine result.A string containing the engine result.Use either this field, `outputString`, or `file` with multipart form POST, but notmore than one. */;
    readonly file: UploadedFile | null /** A file to upload. Use multipart form POST to submit this field.Use either this field or the `outputString` field, not both. */;
    readonly filename: string | null /** The file name */;
    readonly assetType:
      | string
      | null /** The type of asset to create. Optional -- if not set, it will bededuced from the engine category. */;
    readonly contentType:
      | string
      | null /** The content type of the file. Optional -- if not set, it willbe deduced from the file name. */;
    readonly completeTask: boolean | null /** Whether or not to mark the task as complete. Defaults to true. */;
    readonly outputJsonKey:
      | string
      | null /** If the result data uploaded is not a valid JSON string, thenthe task output data stored on the task object will be wrapped intoa JSON object using this key. The asset created, however, is notmodified in any way. */;
    readonly fileData: SetAssetFileData | null /** Optionally, set attributes about the file */;
    readonly setAsPrimary:
      | boolean
      | null /** if true, sets the new asset to be the primary asset of its type.Only certain asset types, such as "media" and "transcript",can have primary assets. */;
    readonly skipIndexing:
      | boolean
      | null /** Skips indexing the engine result, preventing mentions from beinggenerated over the results. */;
    readonly setTaskOutput:
      | boolean
      | null /** Whether or not to set the legacy `task_output` data for compatiblewith older clients. */;
  }

  export interface CreateWatchlist {
    readonly startDateTime: DateTime | null /** Date and time at which the watchlist becomes effective.If not provided, defaults to current time. */;
    readonly stopDateTime: DateTime /** Date and time at which the watchlist expires and is no longer effective. */;
    readonly cognitiveSearches: ReadonlyArray<CreateCognitiveSearchInWatchlist> | null;
    readonly name: string;
    readonly sourceTypeIds: ReadonlyArray<string> | null;
    readonly parentFolderId: string | null /** Optional ID for a folder the watchlist should be filed in */;
    readonly sourceIds: ReadonlyArray<string> | null;
    readonly details: Json | null /** Set structured metadata on the watchlist.The data is subject to a set of schemas. */;
    readonly searchIndex: SearchIndex | null;
    readonly subscriptions: ReadonlyArray<CreateSubscriptionInWatchlist> | null;
  }

  export interface CreateCognitiveSearchInWatchlist {
    readonly profile: Json | null;
    readonly jsonstring: string | null /** String with JSON containing the cognitive search profiles */;
    readonly mentionStatusId: string;
  }
  /** Used to create a subscription while creating a watchlist.The subscription will be for the new watchlist. */
  export interface CreateSubscriptionInWatchlist {
    readonly objectType: SubscriptionObjectType | null;
    readonly contact: CreateSubscriptionContact;
    readonly frequency: SubscriptionFrequency | null;
    readonly scheduledDay: DayOfWeek | null;
    readonly scheduledTime: Time | null;
    readonly scheduledTimeZone: string | null;
  }

  export interface CreateSubscriptionContact {
    readonly emailAddress: string | null;
    readonly phoneNumber: string | null;
    readonly webhookUri: string | null;
  }

  export interface UpdateWatchlist {
    readonly id: string;
    readonly startDateTime: DateTime | null;
    readonly stopDateTime: DateTime | null;
    readonly name: string | null;
    readonly sourceTypeIds: ReadonlyArray<string> | null;
    readonly details: Json | null /** Set structured metadata on the watchlist.The data is subject to a set of schemas. */;
    readonly searchIndex: SearchIndex | null;
    readonly parentFolderId: string | null;
    readonly sourceIds: ReadonlyArray<string> | null;
    readonly subscriptions: ReadonlyArray<CreateSubscriptionInWatchlist> | null;
    readonly cognitiveSearches: ReadonlyArray<CreateCognitiveSearchInWatchlist> | null;
  }

  export interface UpdateCognitiveSearch {
    readonly id: string;
    readonly profile: Json | null;
    readonly jsonstring: string | null;
    readonly mentionStatusId: string | null;
  }

  export interface CreateCognitiveSearch {
    readonly profile: Json | null;
    readonly jsonstring: string | null;
    readonly mentionStatusId: string;
    readonly watchlistId: string;
  }

  export interface FileWatchlist {
    readonly watchlistId: string /** ID of the TDO to file */;
    readonly folderId: string /** ID of the new parent folder */;
    readonly orderIndex:
      | number
      | null /** Order index determining in what order the watchlist will be displayedrelative to other objects at the same level */;
  }

  export interface UnfileWatchlist {
    readonly watchlistId: string /** ID of the watchlist to unfile */;
    readonly folderId: string /** ID of the parent folder. The watchlist will be removed from this folder. */;
  }

  export interface ShareFolderInput {
    readonly treeObjectId: string /** The treeObjectId of the Folder to share */;
    readonly readOrganizationIds: ReadonlyArray<
      number | null
    > | null /** The organizations that will have read permissions to the Folder */;
    readonly writeOrganizationIds: ReadonlyArray<
      number | null
    > | null /** The organizations that will have write permissions to the Folder */;
  }

  export interface CreateTdoWithAsset {
    readonly status: string | null /** TDO status, such as "recorded" (the default) */;
    readonly name: string | null /** A name for the TDO object, such as the name of the primary media file. */;
    readonly startDateTime: DateTime /** Start date and time for the file */;
    readonly stopDateTime: DateTime | null /** Stop date and time. If not passed, the serverwill apply a value based on the defaultchunk size of 15 minutes. */;
    readonly sourceId: string | null /** The ingestion source ID for this file */;
    readonly contentType: string | null /** Content type for the file.Default is "video/mp4" */;
    readonly uri: string | null /** The file location or URI. */;
    readonly file: UploadedFile | null;
    readonly scheduleId: string | null /** Deprecated - use scheduledJobId */;
    readonly scheduledJobId: string | null /** The scheduled job ID. */;
    readonly isPublic:
      | boolean
      | null /** True if the new TDO should be made public. If true, security.globalwill be set to true and users from other organizations will be able toview, but not modify, the TDO's metadata and assets. */;
    readonly parentFolderId:
      | string
      | null /** An optional parent folder ID for the new TemporalDataObject.The folder can be filed in additional folders later using `fileTemporalDataObject`,or un-filed from this one. */;
    readonly assetType: string | null /** Asset type. Default is "media". */;
    readonly sourceData: SetTdoSourceData | null /** Optionally, set source data for this TDO. Source data identifiesthat task that generated this TDO. If the TDO was not generated as partof engine or adapter execution, this field should not be set.However, it is _strongly_ recommended that engines that create TDOsset this field. Doing so ensures that later tasks in the same jobhave appropriate access to the new TDO.This source data will be set on both the TDO and the asset. */;
    readonly details: Json | null;
    readonly contentTemplates: ReadonlyArray<
      CreateTdoContentTemplateWithTdo
    > | null /** Optionally, specify one or more structured data objects to apply ascontent templates to the TDO. They will be stored as assets of typecontent-template and will contain an immutable copy of the original data. */;
    readonly addToIndex:
      | boolean
      | null /** Optionally, add the new data to the search index. If the data is notindexed on creation, it can be indexed later by using `updateTDO` orcreating a suitable job. */;
    readonly thumbnailUrl: string | null /** An optional thumbnail URL for the TDO */;
    readonly sourceImageUrl: string | null /** An optional image representing the TDO source */;
  }

  export interface CreateSubscription {
    readonly targetId: string /** ID of the object (probably a watchlist) to create a subscription for */;
    readonly objectType: SubscriptionObjectType | null;
    readonly contact: CreateSubscriptionContact;
    readonly frequency: SubscriptionFrequency | null;
    readonly scheduledDay: DayOfWeek | null;
    readonly scheduledTime: Time | null;
    readonly scheduledTimeZone: string | null;
  }

  export interface UpdateSubscription {
    readonly id: string;
  }

  export interface CreateTriggers {
    readonly events:
      | string
      | null /** List of events in csv form. Use "*" to listen to all events. When using a wild card, csv form is no longer valid.Either events or types can be specified at a time. Example:events: "event1,event2,event3" // validevents: "*" // validevents: "*,event1" // invalid */;
    readonly types:
      | string
      | null /** List of events in csv form. Use "*" to listen to all types. When using a wild card, csv form is no longer valid.Either events or types can be specified at a time. Example:types: "type1,type2,type3" // validtypes: "*" // validtypes: "*,type1" // invalid */;
    readonly targets: ReadonlyArray<CreateTriggerType | null> | null /** Array of hook targets */;
  }

  export interface CreateTriggerType {
    readonly name: CreateTriggerTarget /** The name of the trigger target. Currently we only supportWebhook, SMS, and Email */;
    readonly params: Json /** The parameters for this hook. Must be a JSON payload. SeeHookTarget docs for supported kvp for each HookTarget type. */;
  }

  export interface GetEngineJwt {
    readonly engineId: string /** The ID of the engine that created the asset */;
    readonly resource: GetEngineJwtResource /** The set of IDs by resource type */;
  }

  export interface GetEngineJwtResource {
    readonly tdoId: string | null;
    readonly jobId: string;
    readonly taskId: string;
  }

  export interface CreateSavedSearch {
    readonly name: string;
    readonly sharedWithOrganization: boolean | null;
    readonly csp: Json;
  }

  export interface ReplaceSavedSearch {
    readonly id: string;
    readonly name: string;
    readonly sharedWithOrganization: boolean | null;
    readonly csp: Json;
  }

  export interface SendEmail {
    readonly from: string;
    readonly to: string;
    readonly subject: string;
    readonly message: string /** Message can be either text or HTML */;
    readonly replyTo: string;
  }

  export interface CreateFolderContentTempate {
    readonly folderId: string /** The ID of folder */;
    readonly sdoId: string /** The ID of Structure Data Object */;
    readonly schemaId: string /** The ID of Data Registry */;
    readonly data: Json | null;
  }

  export interface UpdateFolderContentTempate {
    readonly id: string /** The ID of Folder Content Template */;
    readonly folderId: string | null /** The ID of folder */;
    readonly sdoId: string | null /** The ID of Structure Data Object */;
    readonly schemaId: string | null /** The ID of Data Registry */;
    readonly data: Json | null;
  }

  export interface CreateExportRequest {
    readonly includeMedia:
      | boolean
      | null /** Whether or not to include TDO media assets in the export.Setting this option can greatly increase the size of the export file. */;
    readonly tdoData: ReadonlyArray<CreateExportRequestForTdo> /** Information on the TDOs to export data from */;
    readonly outputConfigurations: ReadonlyArray<
      CreateExportRequestOutputConfig
    > | null /** Information on the export output configuration */;
  }

  export interface CreateExportRequestForTdo {
    readonly tdoId:
      | string
      | null /** ID of the TDO to export fromEither this option _or_ mentionId must be provided.This option must be provided if includeMedia is set to true on CreateExportRequest */;
    readonly mentionId:
      | string
      | null /** ID of the mention to export fromEither this option _or_ tdoId must be provided. */;
    readonly startOffsetMs:
      | number
      | null /** optional start offset in milliseconds for the export, relative to TDO startDateTime */;
    readonly stopOffsetMs:
      | number
      | null /** optional stop offset in milliseconds for the export, relative to the TDO stopDateTime. */;
    readonly startDate: DateTime | null /** optional start date for the exported results. Takes priority over startOffsetMs. */;
    readonly stopDate: DateTime | null /** optional end date for the exported results. Takes priority over stopOffsetMs. */;
  }

  export interface CreateExportRequestOutputConfig {
    readonly engineId:
      | string
      | null /** ID of an individual engine to export results for.Either this option _or_ categoryId must be provided. */;
    readonly categoryId:
      | string
      | null /** ID of an engine category to export results for.Either this option _or_ engineId must be provided. */;
    readonly formats: ReadonlyArray<CreateExportRequestFormatConfig> /** Export output format configuration */;
  }

  export interface CreateExportRequestFormatConfig {
    readonly extension: string /** The file extension of the export type, such as "vlf" or "ttml".Must be supported by the requested engine category. */;
    readonly options: Json | null /** Optional export options specific to the target engine category. */;
  }

  export interface UpdateExportRequest {
    readonly id: string /** ID of the export request to update */;
    readonly status: ExportRequestStatus | null /** Status change */;
    readonly assetUri: string | null /** The asset URI */;
  }

  export interface CreateMentions {
    readonly mentions: ReadonlyArray<CreateMention> | null;
  }

  export interface CreateWorkflowRuntimeStorageData {
    readonly storageKey: string /** Unique lookup id for the workflowRuntimeData */;
    readonly storageData: string /** Data content - base64 encoded binary, plain string or encoded JSON */;
    readonly storageMetadata: string | null /** Optional metadata for the workflowRuntimeData */;
  }

  export interface CreateEvent {
    readonly eventName: string /** Name of the event to be created */;
    readonly eventType: string /** The type of event */;
    readonly application: string /** Identifier of the app using the event. Using "system" as application will throw error */;
    readonly public: boolean /** Event visibility. Private event is only visible to the app publisher. */;
    readonly description: string | null /** General description of the event */;
    readonly schemaData:
      | string
      | null /** Optional schema. Accept on Protocol buffer format. If not provided,Custom message schema is inferred */;
  }

  export interface UpdateEvent {
    readonly id: string /** ID of event */;
    readonly description: string | null /** General description of the event */;
  }

  export interface SubscribeEvent {
    readonly eventName: string | null /** Existing event name */;
    readonly eventType: string | null /** Existing event type */;
    readonly application: string /** Identifier of the app using the event */;
    readonly delivery: EventDelivery /** a string payload, it should be serialized Protobuf data with base64 encoding */;
  }

  export interface EventDelivery {
    readonly name: EventDeliveryType;
    readonly params: Json;
  }

  export interface EmitEvent {
    readonly eventName: string /** Event name */;
    readonly eventType: string /** Existing event type */;
    readonly application: string /** Identifier of the app using the event */;
    readonly payload: string /** string payload, it should be serialized Protobuf data with base64 encoding or escaped JSON string */;
  }

  export interface CreateProcessTemplate {
    readonly name: string;
    readonly taskList: Json;
  }

  export interface UpdateProcessTemplate {
    readonly id: string;
    readonly taskList: Json;
  }

  export interface CreateCluster {
    readonly name: string;
    readonly allowedEngines: ReadonlyArray<string | null>;
    readonly dockerCredentials: Json;
    readonly type: ClusterType | null;
    readonly containerTag: string | null;
    readonly paused: boolean | null;
    readonly memorySize:
      | string
      | null /** Specify memory size in raw bytes or in human-readableformat such as 8gb, 1024mb, etc. */;
    readonly storageSize:
      | string
      | null /** Specify storage size in raw bytes or in human-readableformat such as 8gb, 1024mb, etc. */;
    readonly bypassAllowedEngines: boolean | null;
    readonly collaborators: ReadonlyArray<
      CreateClusterCollaborator
    > | null /** Permissions granted to other organizations. Only the cluster ownercan view or edit this field. */;
  }

  export interface CreateClusterCollaborator {
    readonly organizationId: string /** ID of the organization to share */;
    readonly permission: SetClusterPermission /** Permission to grant cluster. Can be `viewer`.Set to `none` to revoke permissions for this organization. */;
  }

  export interface UpdateCluster {
    readonly id: string;
    readonly name: string | null;
    readonly allowedEngines: ReadonlyArray<string | null> | null;
    readonly dockerCredentials: Json | null;
    readonly containerTag: string | null;
    readonly memorySize: number | null;
    readonly storageSize: number | null;
    readonly bypassAllowedEngines: boolean | null;
    readonly collaborators: ReadonlyArray<
      CreateClusterCollaborator
    > | null /** Permissions granted to other organizations. Only the cluster ownercan view or edit this field. */;
  }

  export interface PauseCluster {
    readonly id: string;
  }

  export interface UnpauseCluster {
    readonly id: string;
  }

  export interface CreateClusterNode {
    readonly name: string | null;
    readonly clusterId: string | null;
    readonly metrics: CreateMetrics;
    readonly containerTag: string | null;
    readonly offlineBrowsing: boolean | null;
    readonly storagePresent: boolean | null;
    readonly type: ClusterType | null;
  }

  export interface CreateMetrics {
    readonly cpuCount: number;
    readonly mbRam: number;
    readonly mbDisk: number;
    readonly ipExternal: string | null;
    readonly ipInternal: string | null;
    readonly ami: string | null;
    readonly ec2InstanceType: string | null;
    readonly ec2Region: string | null;
    readonly awsAccount: string | null;
    readonly loadAverage: Json | null;
  }

  export interface UpdateClusterNode {
    readonly id: string;
    readonly name: string | null;
  }

  export interface CreateScheduledJob {
    readonly jobPipelineIds: ReadonlyArray<string> | null;
    readonly jobTemplateIds: ReadonlyArray<string> | null;
    readonly jobTemplates: ReadonlyArray<CreateJobTemplate> | null;
    readonly weeklyScheduleParts: ReadonlyArray<CreateWeeklySchedulePart> | null;
    readonly recurringScheduleParts: ReadonlyArray<CreateRecurringSchedulePart> | null;
    readonly name: string;
    readonly description: string | null /** A detailed description. Defaults to name. */;
    readonly runMode: RunMode | null;
    readonly details: Json | null /** JSON containing metadata details for this scheduled job.If supplied, then the detailsSchemaId must also be set.The supplied data must comply with the schema */;
    readonly detailsSchemaId: string | null /** Schema ID for detail metadata on this scheduled job */;
    readonly isActive: boolean | null;
    readonly startDateTime: DateTime | null;
    readonly stopDateTime: DateTime | null;
    readonly contentTemplates: ReadonlyArray<
      CreateScheduledJobContentTemplateWithScheduledJob
    > | null /** Optionally, associate content templates with the new scheduled job */;
    readonly organizationId:
      | string
      | null /** Organization ID. Used only by Veritone platform components.Other clients should not attempt to send this field. Any value sentwill be ignored. */;
    readonly isPublic:
      | boolean
      | null /** Indicates whether or not the scheduled job is publicly accessible.Only Veritone administrators can create public scheduled jobs.Other users will get an error if they attempt to set this value to true. */;
    readonly affiliates: ReadonlyArray<CreateProgramAffiliate> | null;
  }

  export interface CreateJobTemplate {
    readonly taskTemplates: ReadonlyArray<
      CreateTaskTemplate
    > | null /** The set of task template definitions for this job template. */;
    readonly jobPipelineId:
      | string
      | null /** Optional. Specify a job pipeline ID if this job template is associatedwith a job pipeline. */;
    readonly jobPipelineStage:
      | number
      | null /** Optional. Should be set only if `jobPipelineId` is set.Specifies the stage in the pipeline at which this job template shouldbe applied. */;
    readonly skipDecider: boolean | null /** Used only by Veritone platform components. */;
    readonly jobConfig: Json | null /** Optional job-level configuration. Typically used only by Veritoneplatform components. */;
    readonly applicationId:
      | string
      | null /** Application ID. Used only by Veritone platform components.Other clients should not attempt to send this field. Any value sentwill be ignored. */;
    readonly clusterId: string | null;
  }

  export interface CreateTaskTemplate {
    readonly engineId: string | null;
    readonly engineConfigId: string | null;
    readonly executionLocationId: string | null;
    readonly jobTemplateId: string | null;
    readonly payload: Json | null;
    readonly payloadString: string | null;
    readonly parentTaskId: string | null;
  }

  export interface CreateWeeklySchedulePart {
    readonly scheduledDay: DayOfWeek | null;
    readonly startTime: Time | null;
    readonly stopTime: Time | null;
  }

  export interface CreateRecurringSchedulePart {
    readonly repeatIntervalUnit: IntervalUnit;
    readonly repeatInterval: number;
    readonly durationSeconds: number | null;
    readonly startTime: Time | null /** Time of day, required for repeat interval unit in days. */;
  }

  export interface CreateScheduledJobContentTemplateWithScheduledJob {
    readonly schemaId: string /** Supply the ID of the data registry that contains the schemafor the content template. */;
    readonly sdoId:
      | string
      | null /** To associate an existing structured data object (SDO) to thesource, provide the SDO ID. Either this field or data must be supplied. */;
    readonly data: Json | null /** To create a new structured data object, supply this field withJSON to save in the SDO. The JSON must comply with the schemadefined in data registry. */;
  }

  export interface CreateProgramAffiliate {
    readonly sourceId: string;
    readonly scheduledDay: DayOfWeek;
    readonly startDateTime: DateTime;
    readonly stopDateTime: DateTime;
    readonly startTime: Time;
    readonly stopTime: Time;
  }

  export interface CloneScheduledJob {
    readonly id: string;
    readonly organizationId:
      | string
      | null /** Organization ID. Used only by Veritone platform components.Other clients should not attempt to send this field. Any value sentwill be ignored. */;
  }

  export interface RevertScheduledJob {
    readonly id: string;
  }

  export interface UpdateScheduledJob {
    readonly id: string;
    readonly jobPipelineIds: ReadonlyArray<string> | null;
    readonly jobTemplateIds: ReadonlyArray<string> | null;
    readonly jobTemplates: ReadonlyArray<
      CreateJobTemplate
    > | null /** Optionally, specify the job template definitions here. */;
    readonly weeklyScheduleParts: ReadonlyArray<CreateWeeklySchedulePart> | null;
    readonly recurringScheduleParts: ReadonlyArray<CreateRecurringSchedulePart> | null;
    readonly name: string | null;
    readonly description: string | null /** A detailed description. Defaults to name. */;
    readonly runMode: RunMode | null;
    readonly details: Json | null /** JSON containing metadata details for this scheduled job.If the scheduled job does not already have a schema IDassociated with, one must be supplied along with this data.In either case, the supplied data must comply with theschema. */;
    readonly detailsSchemaId: string | null /** ID of the schema for detail metadata on this scheduled job */;
    readonly isActive: boolean | null;
    readonly startDateTime: DateTime | null;
    readonly stopDateTime: DateTime | null;
    readonly contentTemplates: ReadonlyArray<
      CreateScheduledJobContentTemplateWithScheduledJob
    > | null /** Optionally, associate content templates with the new scheduled job */;
    readonly isPublic:
      | boolean
      | null /** Indicates whether or not the scheduled job is publicly accessible.Only Veritone administrators can create public scheduled jobs.Other users will get an error if they attempt to set this value to true. */;
    readonly affiliates: ReadonlyArray<CreateProgramAffiliate> | null;
    readonly migrateIfLegacy:
      | boolean
      | null /** Indicates whether or not the scheduled job we should upgrade this schedule jobto the new data model if an upgrade is possible. */;
  }

  export interface CreateScheduledJobContentTemplate {
    readonly scheduledJobId: string /** Specify the scheduled job ID that this content template applies to */;
    readonly schemaId: string /** Supply the ID of the data registry that contains the schemafor the content template. */;
    readonly sdoId:
      | string
      | null /** To associate an existing structured data object (SDO) to thesource, provide the SDO ID. Either this field or data must be supplied. */;
    readonly data: Json | null /** To create a new structured data object, supply this field withJSON to save in the SDO. The JSON must comply with the schemadefined in data registry. */;
  }
  /** Data used to create a new source */
  export interface CreateSource {
    readonly sourceTypeId: string /** The source type ID */;
    readonly name: string /** The human-readable source name. The value does not have to be unique,but it is strongly recommended to use a name that is unique withinthe owning organization. */;
    readonly isPublic:
      | boolean
      | null /** Indicates whether or not the source is public. Default is false (privateto owner organization). */;
    readonly details: Json | null /** Additional metadata to associate with the source. This data may bevalidated against a schema associated with the source type. */;
    readonly thumbnailUrl: string | null /** Optional thumbnail image URL for the source */;
    readonly contentTemplates: ReadonlyArray<
      CreateSourceContentTemplateWithSource
    > | null /** Optionally, associate content templates with the new source */;
    readonly correlationSchemaId:
      | string
      | null /** Optionally associate a schema for correlation.Required when correlationSDOId is specified. */;
    readonly correlationSDOId:
      | string
      | null /** Optionally associate a structured data object of the specified correlationSchemaId.Required when correlationSchemaId is specified. */;
    readonly collaborators: ReadonlyArray<
      CreateSourceCollaborator
    > | null /** Add or modify collaborators on the source. */;
    readonly state: Json | null /** Optionally, set an initial state for the source.This is typically not required. */;
  }

  export interface CreateSourceContentTemplateWithSource {
    readonly schemaId: string /** Supply the ID of the data registry that contains the schemafor the content template. */;
    readonly sdoId:
      | string
      | null /** To associate an existing structured data object (SDO) to thesource, provide the SDO ID. Either this field or data must be supplied. */;
    readonly data: Json | null /** To create a new structured data object, supply this field withJSON to save in the SDO. The JSON must comply with the schemadefined in data registry. */;
  }

  export interface CreateSourceCollaborator {
    readonly organizationId: string /** ID of the organization to share the source with */;
    readonly permission: SetSourcePermission /** Permission to grant. Can be `editor` or `viewer`.Set to `none` to revoke permissions for this organization. */;
  }
  /** Data used to update an existing source */
  export interface UpdateSource {
    readonly id: string /** The ID of the source to update */;
    readonly name: string | null /** Update the name field */;
    readonly isPublic: boolean | null /** Update the isPublic field */;
    readonly details: Json | null /** Additional metadata to associate with the source. This data may bevalidated against a schema associated with the source type. */;
    readonly thumbnailUrl: string | null /** Optional thumbnail image URL for the source */;
    readonly contentTemplates: ReadonlyArray<
      CreateSourceContentTemplateWithSource
    > | null /** Optionally, associate content templates with the new source */;
    readonly correlationSchemaId:
      | string
      | null /** Optionally associate a schema for correlation.Required when correlationSDOId is specified. */;
    readonly correlationSDOId:
      | string
      | null /** Optionally associate a structured data object of the specified correlationSchemaId.Required when correlationSchemaId is specified. */;
    readonly collaborators: ReadonlyArray<
      CreateSourceCollaborator
    > | null /** Add or modify collaborators on the source. Permissions for organizationsnot mentioned in this list will _not_ be modified. To revoke permissionsfor an organization, use the `none` permission. */;
    readonly state: Json | null /** Set current state for the source. This is used only by the adaptersthat use the source and should not be set by other clients. */;
  }

  export interface CreateSourceContentTemplate {
    readonly sourceId: string /** Specify the source ID that this content template applies to */;
    readonly schemaId: string /** Supply the ID of the data registry that contains the schemafor the content template. */;
    readonly sdoId:
      | string
      | null /** To associate an existing structured data object (SDO) to thesource, provide the SDO ID. Either this field or data must be supplied. */;
    readonly data: Json | null /** To create a new structured data object, supply this field withJSON to save in the SDO. The JSON must comply with the schemadefined in data registry. */;
  }

  export interface CreateSourceType {
    readonly sourceSchemaId: string | null;
    readonly credentialSchemaId: string | null;
    readonly name: string;
    readonly details: Json | null;
    readonly credentialType: CredentialType | null;
    readonly isPublic:
      | boolean
      | null /** Indicates that the source type is publicly accessible.If false, is usable only by the owner organization. */;
    readonly isLive: boolean | null /** Indicates whether or not the source type is "live", suchas a camera feed */;
    readonly requiresScanPipeline:
      | boolean
      | null /** Indicates whether or not the source type requiresscan pipeline jobs */;
    readonly categoryId: string /** Source type category ID */;
  }

  export interface UpdateSourceType {
    readonly id: string;
    readonly name: string | null;
    readonly sourceSchemaId: string | null;
    readonly credentialSchemaId: string | null;
    readonly details: Json | null;
    readonly credentialType: CredentialType | null;
    readonly isPublic:
      | boolean
      | null /** Indicates that the source type is publicly accessible.If false, is usable only by the owner organization. */;
    readonly isLive: boolean | null /** Indicates whether or not the source type is "live", suchas a camera feed */;
    readonly requiresScanPipeline:
      | boolean
      | null /** Indicates whether or not the source type requiresscan pipeline jobs */;
    readonly categoryId: string | null /** Source type category ID */;
  }

  export interface CreateJobPipeline {
    readonly jobTemplateIds: ReadonlyArray<string> | null;
    readonly isPublic: boolean | null;
  }

  export interface UpdateJobPipeline {
    readonly id: string;
    readonly jobTemplateIds: ReadonlyArray<string> | null;
    readonly isPublic: boolean | null;
  }

  export interface UpdateJobTemplate {
    readonly id: string;
    readonly jobPipelineStage: number | null /** taskTemplates: [CreateTaskTemplate!] */;
    readonly skipDecider: boolean | null;
    readonly jobConfig: Json | null;
  }

  export interface UpdateTaskTemplate {
    readonly id: string;
    readonly payload: Json | null;
    readonly payloadString: string | null;
    readonly parentTaskId: string | null;
  }

  export interface CreateNextPipelineJobs {
    readonly jobPipelineId: string | null;
    readonly parentJobId: string | null;
    readonly payload: Json | null;
    readonly targetInfo: CreateNextPipelineJobsTargetInfo | null;
    readonly scheduledJobId:
      | string
      | null /** Supply this value if and only if the job pipelinewas started as part of a scheduled job. */;
    readonly organizationId: string | null;
    readonly applicationId: string | null;
  }

  export interface CreateNextPipelineJobsTargetInfo {
    readonly targetId: string /** ID of the target object for the job pipeline,typically that of a TemporalDataObject */;
    readonly startOffsetMs: number | null;
    readonly endOffsetMs: number | null;
  }

  export interface LaunchScheduledJobs {
    readonly targetInfo: CreateAllPipelineJobsTargetInfo | null /** Optional data about the job target,a TemporalDataObject. If this field isnot specified then a suitableobject will be created automatically. */;
    readonly createTargetInfo: CreateTdoForJob | null /** Optional data used to create a _new_ TDO for the job.Specify this field _or_ `targetInfo`, but not both. */;
    readonly payload: Json | null /** Job payload */;
    readonly scheduledJobId: string | null;
  }

  export interface CreateAllPipelineJobsTargetInfo {
    readonly targetId: string /** ID of the target object for the job pipeline,typically that of a TemporalDataObject */;
    readonly startOffsetMs: number | null;
    readonly endOffsetMs: number | null;
  }

  export interface CreateTdoForJob {
    readonly name:
      | string
      | null /** A name for the TDO object, such as the name of the primary media file.If not provided, the TDO will have the name of the scheduled job thatcreated it. */;
    readonly description: string | null /** A description for the TDO object. */;
    readonly isPublic:
      | boolean
      | null /** True if the new TDO should be made public. If true, security.globalwill be set to true and users from other organizations will be able toview, but not modify, the TDO's metadata and assets. */;
    readonly parentFolderId:
      | string
      | null /** An optional parent folder ID for the new TemporalDataObject.The folder can be filed in additional folders later using `fileTemporalDataObject`,or un-filed from this one. */;
    readonly applicationId: string | null /** Only internal systems can set this value */;
    readonly status:
      | string
      | null /** Status, such as "downloaded" or "recording".The server will set a value if one is not provided. */;
    readonly details: Json | null /** Detailed metadata about the TDO */;
    readonly contentTemplates: ReadonlyArray<
      CreateTdoContentTemplateWithTdo
    > | null /** Optionally, specify one or more structured data objects to apply ascontent templates to the TDO. They will be stored as assets of typecontent-template and will contain an immutable copy of the original data. */;
    readonly addToIndex:
      | boolean
      | null /** Optionally, add the new data to the search index. If the data is notindexed on creation, it can be indexed later by using `updateTDO` orcreating a suitable job. */;
    readonly thumbnailUrl: string | null /** An optional thumbnail URL for the TDO */;
    readonly sourceImageUrl: string | null /** An optional image representing the TDO source */;
  }

  export interface LaunchJobTemplates {
    readonly ids: ReadonlyArray<string>;
    readonly scheduledJobId: string | null;
    readonly payload: Json | null;
    readonly targetInfo: LaunchJobTemplatesTargetInfo | null;
  }

  export interface LaunchJobTemplatesTargetInfo {
    readonly targetId: string /** ID of the target object for the jobs,typically that of a TemporalDataObject */;
    readonly startOffsetMs: number | null;
    readonly endOffsetMs: number | null;
  }

  export interface GetNextBundleForCluster {
    readonly clusterId: string /** ID of cluster need to get next bundle */;
  }

  export interface UpdateBundleStatusAsCluster {
    readonly clusterId: string /** Id of the cluster. */;
    readonly bundleId: string /** Id of the bundle. */;
    readonly bundleStatus: BundleStatus /** Bundle status body object */;
  }

  export interface BundleStatus {
    readonly bundleStarted: DateTime | null;
    readonly bundleCompleted: DateTime | null;
    readonly bundleResults: BundleResults;
    readonly markAsCompleted: boolean | null;
  }

  export interface BundleResults {
    readonly found: number;
    readonly completed: number;
    readonly errors: BundleError;
  }

  export interface BundleError {
    readonly error: string;
  }

  export interface CreateEngineDependency {
    readonly dependencyType: string /** The category type this engine depends on.Must be a valid categoryType from an existing EngineCategory. */;
    readonly assetType: string | null /** An optional asset type that the engine will expect to havebeen created. */;
  }

  export interface UpdateEngineDependency {
    readonly dependencyType:
      | string
      | null /** The category type this engine depends on.Must be a valid categoryType from an existing EngineCategory. */;
    readonly assetType: string | null /** An optional asset type that the engine will expect to havebeen created. */;
  }

  export interface SearchInput {
    readonly offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    readonly limit: number | null /** Maximum number of results that were retrieved in this query; page size */;
    readonly index: ReadonlyArray<string | null>;
    readonly query: Json;
    readonly select: Json | null;
  }

  export interface CreateCognitiveSearchProfile {
    readonly and: ReadonlyArray<CreateCognitiveSearchProfile | null> | null;
    readonly or: ReadonlyArray<CreateCognitiveSearchProfile | null> | null;
    readonly condition: CreateCognitiveSearchCondition | null;
  }

  export interface CreateCognitiveSearchCondition {
    readonly engineCategoryId: string;
    readonly state: Json;
  }

  export interface CreateScheduledJobCollaborator {
    readonly organizationId: string /** ID of the organization to share the source with */;
    readonly permission: SetScheduledJobPermission /** Permission to grant. Can be `editor` or `viewer`.Set to `none` to revoke permissions for this organization. */;
  }

  export interface CreateEngineConfiguration {
    readonly sourceId: string;
    readonly credentialIds: ReadonlyArray<string> | null;
  }

  export interface UpdateEngineConfiguration {
    readonly id: string;
    readonly credentialIds: ReadonlyArray<string> | null;
  }

  export interface CreateExternalCredential {
    readonly sourceTypeId: string | null;
    readonly dataId: string | null;
  }

  export interface UpdateExternalCredential {
    readonly id: string;
    readonly dataId: string | null;
  }

  export interface CreateAllPipelineJobs {
    readonly jobPipelineId: string;
    readonly jobPipelineStage: number | null;
    readonly targetInfo: CreateAllPipelineJobsTargetInfo | null /** Optional data about the job target,a TemporalDataObject. If this field isnot specified then a suitableobject will be created automatically. */;
    readonly payload: Json | null /** Job payload */;
    readonly scheduledJobId:
      | string
      | null /** Supply this value if and only if the job pipelinewas started as part of a scheduled job. */;
    readonly organizationId: string | null;
    readonly applicationId: string | null;
  }
  export interface TemporalDataObjectsQueryArgs {
    applicationId: string | null /** Application ID to get TDOs for. Defaults to the user's own application. */;
    id: string | null /** Provide an ID to retrieve a single specific TDO. */;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    sourceId: string | null /** Optionally, specify a source ID. TDOs ingested from this source willbe returned. */;
    scheduledJobId:
      | string
      | null /** Optionally, specify a scheduled job ID. TDOs ingested under thisscheduled job will be returned. */;
    sampleMedia: boolean | null /** Whether to retrieve only tdos with the specified sampleMedia value */;
    includePublic:
      | boolean
      | null /** Whether to retrieve public data that is not part of the user's organization.The default is false. Pass true to include public data in the result set. */;
    orderBy: TemporalDataObjectOrderBy | null;
    orderDirection: OrderDirection | null;
    dateTimeFilter: ReadonlyArray<
      TemporalDataObjectDateTimeFilter
    > | null /** Provide optional filters against any date/time field to filterobjects within a given time window.Matching objects must meet all of the given conditions. */;
    mentionId: string | null /** Retrieve TDOs associated with the given mention */;
  }
  export interface TemporalDataObjectQueryArgs {
    id: string /** the TDO ID */;
  }
  export interface AssetQueryArgs {
    id: string /** The asset ID */;
  }
  export interface WidgetQueryArgs {
    id: string /** The widget ID */;
    collectionId: string;
    organizationId: string;
  }
  export interface CloneRequestsQueryArgs {
    id: string | null /** Provide an ID to retrieve a single specific clone request. */;
    applicationId:
      | string
      | null /** Application ID to get clone requests for. Defaults to the user's own application. */;
    offset: number | null;
    limit: number | null;
  }
  export interface EnginesQueryArgs {
    id: string | null /** Provide an ID to retrieve a single specific engine. */;
    ids: ReadonlyArray<string> | null;
    categoryId: string | null /** Provide a category ID to filter by engine category. */;
    category: string | null /** provide a category name or ID to filter by engine category */;
    state: ReadonlyArray<EngineState | null> | null /** Provide a list of states to filter by engine state. */;
    owned: boolean | null /** If true, return only engines owned by the user's organization. */;
    libraryRequired: boolean | null /** If true, return only engines that require a library. */;
    createsTDO:
      | boolean
      | null /** If true, return only engines that create their own TDO.If false, return only engines that do not create a TDO.If not set, return either. */;
    name: string | null /** Provide a name, or part of a name, to search by engine name */;
    offset: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. */;
    filter: EngineFilter | null /** Filters for engine attributes */;
    orderBy: ReadonlyArray<EngineSortField | null> | null /** Provide a list of EngineSortField to sort by. */;
  }
  export interface EngineQueryArgs {
    id: string /** Provide the engine ID */;
  }
  export interface EngineBuildQueryArgs {
    id: string /** Provide the build ID */;
  }
  export interface EngineCategoriesQueryArgs {
    id: string | null /** Provide an ID to retrieve a single specific engine category. */;
    name: string | null /** Provide a name, or part of one, to search by category name */;
    type: string | null /** Return all categories of an engine type */;
    offset: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. */;
  }
  export interface EngineCategoryQueryArgs {
    id: string /** Supply the ID of the engine category to retrieve */;
  }
  export interface JobsQueryArgs {
    id: string | null /** Provide an ID to retrieve a single specific job. */;
    status: ReadonlyArray<JobStatusFilter> | null /** Provide a list of status strings to filter by status */;
    applicationStatus: string | null;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify the maximum number of results to included in this response, or page size. */;
    applicationId:
      | string
      | null /** Provide an application ID to filter jobs for a given application.Defaults to the user's own application. */;
    targetId: string | null /** Provide a target ID to get the set of jobs running against a particular TDO. */;
    clusterId: string | null /** Provide a cluster ID to get the jobs running on a specific cluster */;
    scheduledJobIds: ReadonlyArray<
      string
    > | null /** Provide a list of scheduled job IDs to get jobs associated with the scheduled jobs */;
    hasScheduledJobId:
      | boolean
      | null /** Return only jobs that are (true) or are not (false) associated with a scheduled job */;
    orderBy: ReadonlyArray<
      JobSortField
    > | null /** Provide sort information. The default is to sort bycreatedDateTime descending. */;
    dateTimeFilter: ReadonlyArray<JobDateTimeFilter> | null /** Filter by date/time field */;
    applicationIds: ReadonlyArray<
      string | null
    > | null /** Provide list of application IDs to filter jobs.Defaults to the user's own application. */;
  }
  export interface JobQueryArgs {
    id: string /** the job ID */;
  }
  export interface TaskQueryArgs {
    id: string /** Provide the task ID. */;
  }
  export interface EntityIdentifierTypesQueryArgs {
    id: string | null /** Provide an ID to retrieve a single specific entity identifier type. */;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
  }
  export interface EntityIdentifierTypeQueryArgs {
    id: string /** Provide the entity identifier type ID */;
  }
  export interface LibraryTypesQueryArgs {
    id: string | null /** Provide an ID to retrieve a single specific library type. */;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
  }
  export interface LibraryTypeQueryArgs {
    id: string | null /** Provide an ID to retrieve a single specific library type. */;
  }
  export interface LibrariesQueryArgs {
    id: string | null /** Provide an ID to retrieve a single specific library. */;
    name: string | null /** Provide a name string to search by name. */;
    type: string | null /** Provide the name or ID of a library to search for librariesthat contain that type. */;
    entityIdentifierTypeIds: ReadonlyArray<
      string
    > | null /** Provide the id of an entity identifier type to search for libraries that correlateto that type. */;
    includeOwnedOnly:
      | boolean
      | null /** Specify true if only libraries owned by the user's organizationshould be returned. Otherwise, shared libraries will be included. */;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    orderBy: LibraryOrderBy | null /** Specify a field to order by */;
    orderDirection: OrderDirection | null /** Specify the direction to order by */;
  }
  export interface LibraryQueryArgs {
    id: string /** Provide a library ID. */;
  }
  export interface LibraryEngineModelQueryArgs {
    id: string /** Provide the library engine model ID */;
  }
  export interface EntityQueryArgs {
    id: string /** Provide an entity ID. */;
  }
  export interface EntitiesQueryArgs {
    ids: ReadonlyArray<string> | null /** Provide a list of entity IDs to retrieve those entities */;
    libraryIds: ReadonlyArray<
      string
    > | null /** Provide a list of library IDs to retrieve entities acrossmultiple libraries. */;
    isPublished: boolean | null;
    identifierTypeId: string | null;
    name: string | null;
    offset: number | null;
    limit: number | null;
    orderBy: LibraryEntityOrderBy | null;
    orderDirection: OrderDirection | null;
  }
  export interface ApplicationsQueryArgs {
    id: string | null /** Provide an ID to retrieve a single specific application. */;
    status: ApplicationStatus | null /** Provide a status, such as "draft" or "active" */;
    owned: boolean | null /** If true, return only applications owned by the user's organization. */;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
  }
  export interface OrganizationsQueryArgs {
    id: string | null /** Provide an ID to retrieve a single specific organization. */;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    kvpProperty: string | null /** Provide a property from the organization kvp to filter the organizaion list. */;
    kvpValue:
      | string
      | null /** Provide value to for the kvpFeature filter.If not present the filter becomes kvpProperty existence filter */;
  }
  export interface OrganizationQueryArgs {
    id: string /** The organization IDTODO take application ID as well as org ID */;
  }
  export interface PermissionsQueryArgs {
    id: string | null /** Provide an ID to retrieve a single specific permission. */;
    name: string | null;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
  }
  export interface UsersQueryArgs {
    id: string | null /** Provide an ID to retrieve a single specific user.A user ID is a string in UUID format. */;
    ids: ReadonlyArray<string | null> | null /** Provide IDs to retrieve multiple users by ID. */;
    name: string | null /** Provide a name, or part of one, to search by name. */;
    organizationIds: ReadonlyArray<
      string | null
    > | null /** Provide a list of organization IDs to filter your search by organization. */;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    includeAllOrgUsers: boolean | null /** Include all organization users. */;
  }
  export interface UserQueryArgs {
    id: string /** The user ID.A user ID is a string in UUID format. */;
    organizationIds: ReadonlyArray<string | null> | null;
  }
  export interface GroupsQueryArgs {
    id: string | null /** Provide an ID to retrieve a specific group by ID */;
    ids: ReadonlyArray<string | null> | null /** Provide IDs to retrieve multiple groups by ID */;
    name: string | null /** Provide a name, or part of one, to search for groups by name */;
    organizationIds: ReadonlyArray<
      string | null
    > | null /** Provide a list of organization IDs to retrieve groups definedwithin certain organizations. */;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
  }
  export interface MentionQueryArgs {
    mentionId: string /** The mention ID */;
    limit: number | null /** Comments pagination - limit */;
    offset: number | null /** Comments pagination - limit */;
    userId: string | null /** The user who owns the mention. */;
  }
  export interface SearchMentionsQueryArgs {
    search: Json /** JSON structure containing the search query.TODO link to syntax documentation */;
  }
  export interface SearchMediaQueryArgs {
    search: Json /** JSON structure containing the search query.TODO link to syntax documentation */;
  }
  export interface RootFoldersQueryArgs {
    type: RootFolderType | null /** The type of root folder to retrieve */;
  }
  export interface FolderQueryArgs {
    id: string /** Provide an ID to retrieve a single specific user. */;
  }
  export interface ApplicationQueryArgs {
    id: string /** The application ID */;
  }
  export interface IngestionConfigurationQueryArgs {
    id: string /** The configuration ID */;
  }
  export interface IngestionConfigurationsQueryArgs {
    id: string | null /** Supply an ingestion configuration ID to retrieve a single Ingestion */;
    offset: number | null /** Offset */;
    limit: number | null /** Limit */;
    name: string | null;
    startDate: DateTime | null;
    endDate: DateTime | null;
    sources: ReadonlyArray<string> | null /** Specify one or more sources to filter by source type */;
    applicationId: string | null /** Supply an application ID to retrieve configurations only forthat application. */;
    emailAddress: string | null /** Email address configured for ingestion */;
  }
  export interface SchemasQueryArgs {
    id: string | null /** Id of a schema to retrieve */;
    ids: ReadonlyArray<string> | null /** Ids of schemas to retrieve */;
    dataRegistryId: string | null /** Specify the id of the DataRegistry to get schemas */;
    status: ReadonlyArray<SchemaStatus> | null /** Specify one or more statuses to filter by schema status */;
    majorVersion: number | null /** Specify a major version to filter schemas */;
    name: string | null /** Specify a data registry name to filter schemas */;
    nameMatch: StringMatch | null /** The strategy used to find data registry name */;
    limit: number | null /** Limit */;
    offset: number | null /** Offset */;
    orderBy: ReadonlyArray<SchemaOrder | null> | null /** Specify one or more fields and direction to order results */;
  }
  export interface SchemaQueryArgs {
    id: string;
  }
  export interface SchemaPropertiesQueryArgs {
    dataRegistryVersion: ReadonlyArray<DataRegistryVersion> | null;
    search: string | null;
    limit: number | null /** Limit */;
    offset: number | null /** Offset */;
  }
  export interface StructuredDataQueryArgs {
    id: string /** Supply the ID of the structured data object to retrieve. This will override filters. */;
    schemaId: string /** Schema Id for the structured data object to retrieve */;
  }
  export interface StructuredDataObjectQueryArgs {
    id: string /** Supply the ID of the structured data object to retrieve. This will override filters. */;
    schemaId: string /** Schema Id for the structured data object to retrieve */;
  }
  export interface StructuredDataObjectsQueryArgs {
    id: string | null /** Supply the ID of the structured data object to retrieve. This will override filters. */;
    ids: ReadonlyArray<
      string
    > | null /** List of Ids of the structured data objects to retrieve. This will override filters. */;
    schemaId: string /** Schema Id for the structured data object to retrieve */;
    limit: number | null;
    offset: number | null;
    filter: Json | null /** Query to filter SDO. Supports operations such as and, or, eq, gt, lt, etc.TODO link to syntax documentation */;
  }
  export interface GetSignedWritableUrlQueryArgs {
    key:
      | string
      | null /** Optional key of the object to generate a writableURL for. If not provided, a new, unique key willbe generated. If a key is provided and resembles a file name(with extension delimited by .), a UUID will be insertedinto the file name, leaving the extension intact.If a key is provided and does not resemblea file name, a UUID will be appended. */;
  }
  export interface GetSignedWritableUrlsQueryArgs {
    number: number /** Number of signed URLs to return */;
  }
  export interface WatchlistsQueryArgs {
    id: string | null;
    maxStopDateTime: DateTime | null;
    minStopDateTime: DateTime | null;
    minStartDateTime: DateTime | null;
    maxStartDateTime: DateTime | null;
    name: string | null;
    offset: number | null;
    limit: number | null;
    orderBy: WatchlistOrderBy | null;
    orderDirection: OrderDirection | null;
  }
  export interface WatchlistQueryArgs {
    id: string;
  }
  export interface DataRegistriesQueryArgs {
    id: string | null;
    name: string | null;
    nameMatch: StringMatch | null;
    offset: number | null;
    limit: number | null;
    orderBy: DataRegistryOrderBy | null;
    orderDirection: OrderDirection | null;
    filterByOwnership: SchemaOwnership | null;
  }
  export interface DataRegistryQueryArgs {
    id: string;
  }
  export interface SubscriptionQueryArgs {
    id: string;
  }
  export interface CognitiveSearchQueryArgs {
    id: string;
  }
  export interface CollectionsQueryArgs {
    id: string | null;
    mentionId: string | null;
    offset: number | null;
    limit: number | null;
  }
  export interface CollectionQueryArgs {
    id: string;
  }
  export interface MentionsQueryArgs {
    id: string | null;
    watchlistId: string | null /** Get mentions created from the specified watchlist */;
    sourceId: string | null /** Get mentions associated with the specified source */;
    sourceTypeId: string | null /** Get mentions associated with sources of the specified source type */;
    tdoId: string | null /** Get mentions associated directly with the specific TDO */;
    dateTimeFilter: ReadonlyArray<
      MentionDateTimeFilter
    > | null /** Specify date/time filters against mention fields.Querying for mentions can be expensive. If the query does notinclude a filter by `id`, `tdoId`, `sourceId`, `watchlistId`, ora user-provided `dateTimeFilter`, a default filter of thepast 7 days is applied. */;
    orderBy: ReadonlyArray<
      MentionOrderBy
    > | null /** Set order information on the query. Multiple fieldsare supported. */;
    offset: number | null;
    limit: number | null;
  }
  export interface EngineResultsQueryArgs {
    tdoId:
      | string
      | null /** Provide the ID of the TDO containing engine results to retrieve.If this parameter is used, engineIds or engineCategoryIds must also be set.Results for _only_ the specified TDO will be returned. */;
    sourceId:
      | string
      | null /** Provide the ID of the Source containing engine results to retrieve.If this parameter is used, engineIds or engineCategoryIds must also be set.This takes priority over tdoId. */;
    engineIds: ReadonlyArray<
      string
    > | null /** Provide one or more engine IDs to retrieve engine results byID. This parameter is mandatory if tdoId is used, but optionalif jobId or engineCategory is used. */;
    engineCategoryIds: ReadonlyArray<
      string
    > | null /** Provide one or more category IDs to get all results from that categroy. */;
    jobId: string | null /** Provide a job ID to retrieve engine results for the job. */;
    mentionId: string | null /** Provide a mention ID to retrieve engine results for the mention. */;
    startOffsetMs: number | null /** Start offset ms for the results. */;
    stopOffsetMs: number | null /** End offset ms for the results. */;
    startDate: DateTime | null /** Start date for the results. Takes priority over startOffsetMs. */;
    stopDate: DateTime | null /** End date for the results. Takes priority over stopOffsetMs. */;
    ignoreUserEdited: boolean | null /** Whether or not to exclude user edited engine results. Defaults to false. */;
    fallbackTdoId:
      | string
      | null /** A TDO ID can be provided for use if the provided `sourceId` and/or`mentionId` parameters do not resolve to a logical set of TDOs.Depending on parameter settings and available data,results from other TDOs can be included in the response. */;
  }
  export interface TriggerQueryArgs {
    id: string;
  }
  export interface SavedSearchesQueryArgs {
    offset: number | null;
    limit: number | null;
    includeShared: boolean | null;
    filterByName: string | null;
    orderBy: SavedSearchOrderBy | null;
    orderDirection: OrderDirection | null;
  }
  export interface ExportRequestsQueryArgs {
    id: string | null /** Provide an ID to retrieve a single export request */;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    status: ReadonlyArray<ExportRequestStatus> | null /** Provide a list of status options to filter by status */;
  }
  export interface ExportRequestQueryArgs {
    id: string;
  }
  export interface EventQueryArgs {
    id: string;
  }
  export interface EventsQueryArgs {
    application: string;
  }
  export interface AuditLogQueryArgs {
    toDateTime: DateTime | null /** Date/time up to which entries will be returned. In other words, theend of the query time window.Defaults to the current time. */;
    fromDateTime: DateTime | null /** Date/time from which entries will be returned. In other words, thestart of the query time window.Defaults to the `toDateTime` minus 7 days. */;
    organizationId:
      | string
      | null /** Organization ID to query records for. This value can only be used byVeritone administrators. Any value provided by user administrators willbe ignored. */;
    userName: string | null /** User name on audit entry. Must be exact match. */;
    clientIpAddress:
      | string
      | null /** IP address of the client that generated the audit action. Must be exact match. */;
    clientUserAgent:
      | string
      | null /** HTTP user agent of the client that generated the audit action. Must be exact match. */;
    eventType: string | null /** The event type, such as `Create`, `Update`, or `Delete`.Must be exact match. */;
    objectId:
      | string
      | null /** The ID of the object involved in the audit action. The format of this IDvaries by object type. Must be exact match. */;
    objectType:
      | string
      | null /** The type of the object involved in the audit action, such as `Watchlist`or `TemporalDataObject`. Must be exact match. */;
    success: boolean | null /** Whether or not the action was successful. */;
    id: ReadonlyArray<string> | null /** The unique ID of an audit log entry. Multiple values can be provided. */;
    offset: number | null /** Offset into result set, for paging. */;
    limit:
      | number
      | null /** Limit on result size, for paging (page size). Audit queries arelightweight so the default of 100 is higher than the default offsetused elsewhere in the API. */;
    orderBy: ReadonlyArray<
      AuditLogOrderBy
    > | null /** Order information. Default is order by `createdDateTime` descending. */;
  }
  export interface SharedMentionQueryArgs {
    id: string;
    offset: number | null;
    limit: number | null;
  }
  export interface WorkflowRuntimeQueryArgs {
    workflowRuntimeId: string;
  }
  export interface WorkflowRuntimeStorageDataQueryArgs {
    workflowRuntimeId: string /** Unique id of the workflow instance */;
    storageKey: string | null /** The unique id to rertrieve a single workflow data */;
    storageKeyPrefix:
      | string
      | null /** A prefix filter used to return a set of workflow dataitems whose dataKey starts with dataKeyPrefix */;
    offset: number | null /** Offset for paging */;
    limit:
      | number
      | null /** Limit on result size, for paging (page size).workflowRuntimeData can be arbitrary large therefore smaller paging shoulf be preffered */;
  }
  export interface ProcessTemplatesQueryArgs {
    id: string | null;
    offset: number | null;
    limit: number | null;
  }
  export interface ScheduledJobQueryArgs {
    id: string;
  }
  export interface ScheduledJobsQueryArgs {
    id: string | null /** Provide an ID to retrieve a specific schedule */;
    name:
      | string
      | null /** Provide a schedule name, or part of one, to search for schedulesby name. Supports prefix/like search. */;
    runMode: RunMode | null /** Specify a run mode to filter to run mode */;
    isActive: boolean | null /** Specify isActive true or false to filter by active state */;
    engineId: string | null;
    engineCategoryId: string | null;
    engineType: ReadonlyArray<EngineTypeFilter> | null;
    offset: number | null /** Specify an offset to retrieve additional pages */;
    limit: number | null /** Specify a limit to limit result size. */;
    dateTimeFilter: ReadonlyArray<ScheduledJobDateTimeFilter> | null;
    partTimeFilter: ReadonlyArray<ScheduledJobPartTimeFilter> | null /** Time filter is in station local time */;
    primarySourceId: ReadonlyArray<
      string
    > | null /** Optionally, specify one or more source IDs. Scheduled jobs withany of the given sources as their primary source will be returned. */;
    primarySourceTypeId: ReadonlyArray<
      string
    > | null /** Optionally, specify one or more source type IDs. Scheduled jobs withany of the given sources types on their primary source will be returned. */;
    hasJobTemplate: boolean | null;
    hasRunningJobs:
      | boolean
      | null /** Specify isRunning true or false to filter for scheduled jobs thathave jobs running right now. */;
    orderBy: ReadonlyArray<
      ScheduledJobOrderBy
    > | null /** Order information. Default will order by modifiedDateTime descending. */;
    permission: ScheduledJobPermission | null /** Specify a permission level to retrieve scheduled jobs to which youhave at least that permission. */;
  }
  export interface EngineConfigurationQueryArgs {
    id: string;
  }
  export interface EngineConfigurationsQueryArgs {
    id: string | null;
  }
  export interface ClusterNodeQueryArgs {
    id: string;
  }
  export interface ClusterNodesQueryArgs {
    id: string | null;
    offset: number | null;
    limit: number | null;
  }
  export interface ClusterQueryArgs {
    id: string;
  }
  export interface ClustersQueryArgs {
    id: string | null;
    name: string | null;
    type: ClusterType | null;
    offset: number | null;
    limit: number | null;
  }
  export interface ExecutionLocationQueryArgs {
    id: string;
  }
  export interface ExecutionLocationsQueryArgs {
    id: string | null;
  }
  export interface JobTemplateQueryArgs {
    id: string;
  }
  export interface JobTemplatesQueryArgs {
    jobPipelineId: string | null;
    scheduledJobId: string | null;
    engineId: string | null;
    engineType: ReadonlyArray<EngineTypeFilter> | null;
    offset: number | null;
    limit: number | null;
  }
  export interface TaskTemplateQueryArgs {
    id: string;
  }
  export interface JobPipelineQueryArgs {
    id: string;
  }
  export interface JobPipelinesQueryArgs {
    id: string | null;
    scheduledJobId: string | null;
    isPublic: boolean | null;
    offset: number | null;
    limit: number | null;
  }
  export interface SourceQueryArgs {
    id: string;
  }
  export interface SourcesQueryArgs {
    id: string | null /** Provide an ID to retrieve a specific source. */;
    sourceTypeId: string | null /** Provide a source type ID to filter for sources of the specified type. */;
    sourceTypeIds: ReadonlyArray<string | null> | null;
    name:
      | string
      | null /** Provide a name or partial name value to filter by name.The `nameMatch` parameter can be used to determine the stringmatch strategy used in the filter. Default is "starts with".Note that all matching is case-insensitive. */;
    nameMatch: StringMatch | null /** String matching strategy. Default is "starts with". */;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    hasContentTemplates:
      | boolean
      | null /** Set this flag to true or false to return only sources that do or donot have content templates associated with them.The default is neither (do not filter on the presence of content templates). */;
    includePublic:
      | boolean
      | null /** Set this flag to true to include public sources or false to includeonly sources owned by theuser's org, not public sources.Public sources owned by the caller's org will always be returned. */;
    correlationSchemaId:
      | string
      | null /** Provide a correlation schama ID to filter for sources that correlate using specified schema. */;
    orderBy: ReadonlyArray<
      SourceSortField
    > | null /** Provide optional sort information. If not provided, a default sortby createdDateTime descending will be applied. */;
    permission: SourcePermission | null /** Specify a permission level to retrieve sources to which youhave at least that permission. */;
  }
  export interface SourceTypeQueryArgs {
    id: string;
  }
  export interface SourceTypesQueryArgs {
    id: string | null;
    ids: ReadonlyArray<string | null> | null;
    categoryId: string | null /** Provide a source type category ID to select source types belongingto the category */;
    isLive: boolean | null /** Provide `isLive` to select source types with the given value. */;
    offset: number | null;
    limit: number | null;
  }
  export interface SourceTypeCategoriesQueryArgs {
    id: string | null /** Optionally, provide a source category type ID. */;
  }
  export interface SourceTypeCategoryQueryArgs {
    id: string;
  }
  export interface ExternalCredentialQueryArgs {
    id: string;
  }
  export interface ExternalCredentialsQueryArgs {
    id: string | null;
  }
  export interface TasksQueryArgs {
    id: string | null;
    taskTemplateId: string | null;
  }
  export interface DetailsTemporalDataObjectArgs {
    path: string | null /** optionally, specify a path to retrieve only a specific propertywithin the details JSON */;
  }
  export interface AssetsTemporalDataObjectArgs {
    id: string | null /** Provide an ID to retrieve a single asset. */;
    type: ReadonlyArray<
      string
    > | null /** Specify a list of asset types such as "media" or "transcript" toretrieve a specific asset type */;
    assetType: ReadonlyArray<string> | null /** Deprecated -- use type parameter */;
    sourceTaskId: string | null /** Retrieve assets created by a specific task */;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    orderBy: AssetOrderBy | null;
    orderDirection: OrderDirection | null;
  }
  export interface PrimaryAssetTemporalDataObjectArgs {
    assetType: string;
  }
  export interface TasksTemporalDataObjectArgs {
    id: string | null;
    offset: number | null;
    limit: number | null;
    hasSourceAsset: boolean | null;
  }
  export interface EngineRunsTemporalDataObjectArgs {
    offset: number | null;
    limit: number | null;
  }
  export interface DetailsAssetArgs {
    path: string | null /** optionally, specify a path to retrieve only a specific propertywithin the details JSON */;
  }
  export interface JsonstringAssetArgs {
    indent: number | null;
  }
  export interface TransformAssetArgs {
    transformFunction: TransformFunction;
  }
  export interface TasksEngineArgs {
    status: ReadonlyArray<string | null> | null;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    id: string | null;
    dateTimeFilter: ReadonlyArray<TaskDateTimeFilter | null> | null;
    hasSourceAsset: boolean | null;
  }
  export interface BuildsEngineArgs {
    buildStatus: ReadonlyArray<BuildStatus> | null;
    status: ReadonlyArray<string | null> | null;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    id: string | null;
  }
  export interface TaskMetricsEngineArgs {
    fromDateTime: DateTime | null /** Provide a starting date in ISO format (maximum range of 7 days) */;
    toDateTime: DateTime | null /** Provide an end date in ISO format (maximum range of 7 days) */;
  }
  export interface ApplicationsOrganizationArgs {
    offset: number | null;
    limit: number | null;
  }
  export interface UsersOrganizationArgs {
    offset: number | null;
    limit: number | null;
  }
  export interface CollectionsOrganizationArgs {
    name: string | null /** Provide a name to filter by collection name */;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
  }
  export interface RootFolderOrganizationArgs {
    type: RootFolderType | null /** Specify a root folder type to retrieve a specific root folder */;
  }
  export interface ClientSecretApplicationArgs {
    password: string | null;
  }
  export interface RootFolderUserArgs {
    type: RootFolderType | null /** Specify a root folder type to retrieve a specific root folder */;
  }
  export interface ChildTdOsFolderArgs {
    offset: number | null;
    limit: number | null;
  }
  export interface DataStructuredDataArgs {
    path:
      | string
      | null /** Optionally, specify a path into the JSON data.Only the value of the path will be returned, at thetop level. The value will be empty if there is nothingin the JSON at that path.This parameter is useful for directly addressing fields in the JSON. */;
  }
  export interface DataStringStructuredDataArgs {
    indent: number | null;
  }
  export interface StructuredDataObjectsSchemaArgs {
    offset: number | null;
    limit: number | null;
  }
  export interface SchemasDataRegistryArgs {
    status: ReadonlyArray<SchemaStatus | null> | null;
    majorVersion: number | null;
    id: string | null;
    offset: number | null;
    limit: number | null;
    orderBy: ReadonlyArray<SchemaOrder | null> | null;
  }
  export interface EnginesEngineCategoryArgs {
    offset: number | null;
    limit: number | null;
    filter: EngineFilter | null /** Filters for engine attributes */;
    orderBy: ReadonlyArray<EngineSortField | null> | null /** Provide a list of EngineSortField to sort by. */;
  }
  export interface MentionsWatchlistArgs {
    offset: number | null;
    limit: number | null;
  }
  export interface ScheduledJobsWatchlistArgs {
    offset: number | null;
    limit: number | null;
  }
  export interface SchedulesWatchlistArgs {
    offset: number | null;
    limit: number | null;
  }
  export interface RatingsMentionArgs {
    userId: string | null;
  }
  export interface JobPipelinesScheduledJobArgs {
    offset: number | null;
    limit: number | null;
  }
  export interface JobTemplatesScheduledJobArgs {
    offset: number | null;
    limit: number | null;
  }
  export interface AllJobTemplatesScheduledJobArgs {
    offset: number | null;
    limit: number | null;
  }
  export interface JobsScheduledJobArgs {
    targetId: string | null /** Optionally, specify a TDO ID to filter by job target */;
    clusterId: string | null /** Optionally, specify a cluster ID to filter by cluster */;
    orderBy: ReadonlyArray<
      JobSortField
    > | null /** Provide sort information. The default is to sort bycreatedDateTime descending. */;
    dateTimeFilter: ReadonlyArray<JobDateTimeFilter> | null /** Optionally, specify filters on date/time fields */;
    status: ReadonlyArray<JobStatusFilter> | null /** Provide a list of status strings to filter by status */;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify the maximum number of results to included in this response, or page size. */;
  }
  export interface SourcesScheduledJobArgs {
    offset: number | null;
    limit: number | null;
  }
  export interface TaskTemplatesJobTemplateArgs {
    engineType: ReadonlyArray<EngineTypeFilter> | null;
    engineId: string | null;
    offset: number | null;
    limit: number | null;
  }
  export interface SourcesSourceTypeArgs {
    id: ReadonlyArray<string> | null /** Optionally, provide a list of IDs to retrieve sources by ID */;
    name:
      | string
      | null /** Provide a name or partial name value to filter by name.The `nameMatch` parameter can be used to determine the stringmatch strategy used in the filter. Default is "starts with".Note that all matching is case-insensitive. */;
    nameMatch: StringMatch | null /** String matching strategy. Default is "starts with". */;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    hasContentTemplates:
      | boolean
      | null /** Set this flag to true or false to return only sources that do or donot have content templates associated with them.The default is neither (do not filter on the presence of content templates). */;
    includePublic:
      | boolean
      | null /** Set this flag to true to include public sources or false to includeonly sources owned by theuser's org, not public sources.Public sources owned by the caller's org will always be returned. */;
    correlationSchemaId:
      | string
      | null /** Provide a correlation schama ID to filter for sources that correlate using specified schema. */;
    orderBy: ReadonlyArray<
      SourceSortField
    > | null /** Provide optional sort information. If not provided, a default sortby createdDateTime descending will be applied. */;
  }
  export interface CollaboratorsSourceArgs {
    orderBy: SourceCollaboratorOrderBy | null;
    orderDirection: OrderDirection | null;
  }
  export interface TasksJobArgs {
    status: ReadonlyArray<TaskStatus> | null /** Specify a list of job status strings to filter by status */;
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Maximum number of results to retrieve in this query */;
    id: string | null /** Specify an ID to retrieve a single specific task */;
    targetId: ReadonlyArray<string | null> | null /** Specify a list of IDs to filter by task target ID */;
    hasSourceAsset: boolean | null;
  }
  export interface WidgetsCollectionArgs {
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Maximum number of results to retrieve in this query; page size */;
    id: string | null;
  }
  export interface ActiveTasksEngineRunArgs {
    offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
    limit: number | null /** Maximum number of results to retrieve in this query */;
  }
  export interface EngineModelsLibraryArgs {
    id: string | null;
  }
  export interface EntitiesLibraryArgs {
    id: string | null /** Provide an ID to retrieve a single specific entity. */;
    ids: ReadonlyArray<string> | null;
    isPublished: boolean | null;
    identifierTypeId: string | null;
    name: string | null;
    offset: number | null;
    limit: number | null;
    orderBy: LibraryEntityOrderBy | null;
    orderDirection: OrderDirection | null;
  }
  export interface CollaboratorsLibraryArgs {
    collaboratorOrgId: string | null /** Provide an ID to retrieve collaborators within a specific organization. */;
  }
  export interface IdentifiersEntityArgs {
    id: string | null /** Provide an ID to retrieve a specific entity identifier */;
    identifierTypeId: string | null;
    offset: number | null;
    limit: number | null;
  }
  export interface CreateTdoMutationArgs {
    input: CreateTdo | null /** Fields required to create a TDO */;
  }
  export interface UpdateTdoMutationArgs {
    input: UpdateTdo | null /** Fields required to update a TDO */;
  }
  export interface DeleteTdoMutationArgs {
    id: string /** Supply the ID of the TDO to delete */;
  }
  export interface CleanupTdoMutationArgs {
    id: string /** Supply the ID of the TDO to clean up. */;
    options: ReadonlyArray<
      TdoCleanupOption
    > | null /** Supply a list of cleanup options. See TDOCleanupOptionfor details. If not provided, the server will use default settings. */;
  }
  export interface CreateTaskLogMutationArgs {
    input: CreateTaskLog /** Fields needed to create a task log. */;
  }
  export interface CreateAssetMutationArgs {
    input: CreateAsset /** Fields needed to create an asset. */;
  }
  export interface DeleteAssetMutationArgs {
    id: string /** Provide the ID of the asset to delete. */;
  }
  export interface UpdateAssetMutationArgs {
    input: UpdateAsset /** Fields needed to update an asset. */;
  }
  export interface RequestCloneMutationArgs {
    input: RequestClone | null /** Fields needed to request a new clone job. */;
  }
  export interface CreateEngineMutationArgs {
    input: CreateEngine | null /** Fields needed to create a new engine */;
  }
  export interface UpdateEngineMutationArgs {
    input: UpdateEngine | null /** Fields needed to update an engine */;
  }
  export interface DeleteEngineMutationArgs {
    id: string /** Provide the ID of the engine to delete */;
  }
  export interface CreateEngineBuildMutationArgs {
    input: CreateBuild /** Fields needed to create an engine build. */;
  }
  export interface UpdateEngineBuildMutationArgs {
    input: UpdateBuild /** Fields needed to update an engine build. */;
  }
  export interface DeleteEngineBuildMutationArgs {
    input: DeleteBuild /** Fields needed to delete an engine build. */;
  }
  export interface UpdateTaskMutationArgs {
    input: UpdateTask | null /** Fields required to update a task. */;
  }
  export interface PollTaskMutationArgs {
    input: PollTask | null /** Fields required to poll a task. */;
  }
  export interface CreateJobMutationArgs {
    input: CreateJob | null /** Fields required to create a job. */;
  }
  export interface CancelJobMutationArgs {
    id: string /** Supply the ID of the job to delete. */;
  }
  export interface RetryJobMutationArgs {
    id: string /** Supply the ID of the job to retry. */;
  }
  export interface UpdateJobsMutationArgs {
    input: UpdateJobs;
  }
  export interface CreateApplicationMutationArgs {
    input: CreateApplication | null /** Fields needed to create a new custom application. */;
  }
  export interface DeleteApplicationMutationArgs {
    id: string /** Supply the ID of the application to delete. */;
  }
  export interface UpdateApplicationMutationArgs {
    input: UpdateApplication | null /** Fields required to update a custom application. */;
  }
  export interface BulkDeleteContextMenuExtensionsMutationArgs {
    input: BulkDeleteContextMenuExtensions | null;
  }
  export interface UpdateOrganizationMutationArgs {
    input: UpdateOrganization /** Fields required to update an organization. */;
  }
  export interface AddToEngineWhitelistMutationArgs {
    toAdd: SetEngineWhitelist;
  }
  export interface AddToEngineBlacklistMutationArgs {
    toAdd: SetEngineBlacklist;
  }
  export interface DeleteFromEngineBlacklistMutationArgs {
    toDelete: SetEngineBlacklist;
  }
  export interface DeleteFromEngineWhitelistMutationArgs {
    toDelete: SetEngineBlacklist;
  }
  export interface CreateEntityIdentifierTypeMutationArgs {
    input: CreateEntityIdentifierType /** Fields required to create an entity identifier type. */;
  }
  export interface UpdateEntityIdentifierTypeMutationArgs {
    input: UpdateEntityIdentifierType /** Fields required to update an entity identifier type. */;
  }
  export interface CreateLibraryTypeMutationArgs {
    input: CreateLibraryType /** Fields needed to create a new library type. */;
  }
  export interface UpdateLibraryTypeMutationArgs {
    input: UpdateLibraryType /** Fields needed to update a library type. */;
  }
  export interface CreateLibraryMutationArgs {
    input: CreateLibrary /** Fields needed to create a new library. */;
  }
  export interface UpdateLibraryMutationArgs {
    input: UpdateLibrary /** Fields needed to update a library */;
  }
  export interface DeleteLibraryMutationArgs {
    id: string /** Provide the ID of the library to delete. */;
  }
  export interface PublishLibraryMutationArgs {
    id: string /** ID of the library to publish */;
  }
  export interface CreateEntityMutationArgs {
    input: CreateEntity /** Fields required to create a new entity. */;
  }
  export interface UpdateEntityMutationArgs {
    input: UpdateEntity /** Fields required to update an entity. */;
  }
  export interface DeleteEntityMutationArgs {
    id: string /** Supply the ID of the entity to delete. */;
  }
  export interface CreateEntityIdentifierMutationArgs {
    input: CreateEntityIdentifier /** Fields needed to create an entity identifier. */;
  }
  export interface UpdateEntityIdentifierMutationArgs {
    input: UpdateEntityIdentifier /** Fields required to update an entity identifier. */;
  }
  export interface DeleteEntityIdentifierMutationArgs {
    id: string /** Supply the ID of the entity identifier to delete. */;
  }
  export interface CreateLibraryEngineModelMutationArgs {
    input: CreateLibraryEngineModel /** Fields required to create a library engine model. */;
  }
  export interface UpdateLibraryEngineModelMutationArgs {
    input: UpdateLibraryEngineModel /** Fields required to update a library engine model */;
  }
  export interface DeleteLibraryEngineModelMutationArgs {
    id: string /** Supply the ID of the library engine model to delete. */;
  }
  export interface ApplicationWorkflowMutationArgs {
    input: ApplicationWorkflow | null /** Fields required to apply a application workflow step */;
  }
  export interface EngineWorkflowMutationArgs {
    input: EngineWorkflow | null /** Fields required to apply a engine workflow step */;
  }
  export interface CreateIngestionConfigurationMutationArgs {
    input: CreateIngestionConfiguration | null;
  }
  export interface UpdateIngestionConfigurationMutationArgs {
    input: UpdateIngestionConfiguration | null;
  }
  export interface DeleteIngestionConfigurationMutationArgs {
    id: string /** ID of the ingestion configuration to delete */;
  }
  export interface CreateWidgetMutationArgs {
    input: CreateWidget | null /** Fields needed to create a new widget */;
  }
  export interface UpdateWidgetMutationArgs {
    input: UpdateWidget | null /** Fields needed to update a widget */;
  }
  export interface CreateUserMutationArgs {
    input: CreateUser | null /** Fields needed to create a user. */;
  }
  export interface CreateOrganizationMutationArgs {
    input: CreateOrganization /** Fields needed to create an organization. */;
  }
  export interface UpdateUserMutationArgs {
    input: UpdateUser | null /** Fields needed to update a user */;
  }
  export interface CreatePasswordUpdateRequestMutationArgs {
    input: CreatePasswordUpdateRequest | null /** Fields needed to create a password update request */;
  }
  export interface GetCurrentUserPasswordTokenMutationArgs {
    input: GetCurrentUserPasswordToken;
  }
  export interface CreatePasswordResetRequestMutationArgs {
    input: CreatePasswordResetRequest | null;
  }
  export interface UpdateCurrentUserMutationArgs {
    input: UpdateCurrentUser;
  }
  export interface ChangePasswordMutationArgs {
    input: ChangePassword /** Fields needed to change password */;
  }
  export interface DeleteUserMutationArgs {
    id: string /** Supply the ID of the user to delete. */;
  }
  export interface CreateDataRegistryMutationArgs {
    input: CreateDataRegistry;
  }
  export interface UpdateDataRegistryMutationArgs {
    input: UpdateDataRegistry;
  }
  export interface UpsertSchemaDraftMutationArgs {
    input: UpsertSchemaDraft;
  }
  export interface UpdateSchemaStateMutationArgs {
    input: UpdateSchemaState;
  }
  export interface CreateStructuredDataMutationArgs {
    input: CreateStructuredData;
  }
  export interface CreateCollectionMutationArgs {
    input: CreateCollection | null /** Fields required to create new collection */;
  }
  export interface UpdateCollectionMutationArgs {
    input: UpdateCollection | null /** Fields needed to update a collection */;
  }
  export interface DeleteCollectionMutationArgs {
    folderId: string | null /** @deprecated(reason: "folderId has been renamed to id. Use id.") */;
    id: string | null /** Supply the ID of the folder or collection to delete */;
  }
  export interface ShareCollectionMutationArgs {
    input: ShareCollection | null /** Fields needed to share a collection */;
  }
  export interface ShareMentionFromCollectionMutationArgs {
    input: ShareMentionFromCollection | null /** Fields needed to share a mention */;
  }
  export interface CreateCollectionMentionMutationArgs {
    input: CollectionMentionInput | null /** Fields needed to add a mention to a collection */;
  }
  export interface DeleteCollectionMentionMutationArgs {
    input: CollectionMentionInput | null /** Fields needed to delete a mention from a collection */;
  }
  export interface CreateFolderMutationArgs {
    input: CreateFolder | null /** Fields needed to create a new folder. */;
  }
  export interface UpdateFolderMutationArgs {
    input: UpdateFolder | null /** Fields needed to update a folder. */;
  }
  export interface MoveFolderMutationArgs {
    input: MoveFolder | null /** Fields needed to move a folder */;
  }
  export interface DeleteFolderMutationArgs {
    input: DeleteFolder | null /** Fields needed to delete a folder */;
  }
  export interface CreateMentionCommentMutationArgs {
    input: CreateMentionComment | null /** Fields needed to create a mention comment */;
  }
  export interface UpdateMentionCommentMutationArgs {
    input: UpdateMentionComment | null /** Fields needed to update a mention comment */;
  }
  export interface DeleteMentionCommentMutationArgs {
    input: DeleteMentionComment | null /** Fields needed to delete a mention comment */;
  }
  export interface CreateMentionRatingMutationArgs {
    input: CreateMentionRating | null /** Fields needed to create a mention rating */;
  }
  export interface UpdateMentionRatingMutationArgs {
    input: UpdateMentionRating | null /** Fields needed to update a mention rating */;
  }
  export interface DeleteMentionRatingMutationArgs {
    input: DeleteMentionRating | null /** Fields needed to delete a mention rating. */;
  }
  export interface UserLoginMutationArgs {
    input: UserLogin | null /** Fields needed to log in */;
  }
  export interface UserLogoutMutationArgs {
    token: string /** User token that should be invalidated */;
  }
  export interface RefreshTokenMutationArgs {
    token: string;
  }
  export interface ValidateTokenMutationArgs {
    token: string;
  }
  export interface CreateMentionMutationArgs {
    input: CreateMention;
  }
  export interface CreateRootFoldersMutationArgs {
    rootFolderType: RootFolderType | null /** The type of root folder to create */;
  }
  export interface BulkUpdateWatchlistMutationArgs {
    filter: BulkUpdateWatchlistFilter /** A filter indicating which watchlists should be updated.At least one filter condition must be provided.Only watchlists for the user's organization will be updated. */;
    input: BulkUpdateWatchlist | null /** Fields used to update a watchlist. */;
  }
  export interface FileTemporalDataObjectMutationArgs {
    input: FileTemporalDataObject /** The fields needed to file a TemporalDataObject in a folder */;
  }
  export interface UnfileTemporalDataObjectMutationArgs {
    input: UnfileTemporalDataObject /** The fields needed to file a TemporalDataObject in a folder */;
  }
  export interface MoveTemporalDataObjectMutationArgs {
    input: MoveTemporalDataObject /** Fields need to move a TemporalDataObject */;
  }
  export interface UploadEngineResultMutationArgs {
    input: UploadEngineResult /** Fields needed to upload and store an engine result */;
  }
  export interface CreateWatchlistMutationArgs {
    input: CreateWatchlist;
  }
  export interface UpdateWatchlistMutationArgs {
    input: UpdateWatchlist;
  }
  export interface DeleteWatchlistMutationArgs {
    id: string;
  }
  export interface UpdateCognitiveSearchMutationArgs {
    input: UpdateCognitiveSearch | null;
  }
  export interface CreateCognitiveSearchMutationArgs {
    input: CreateCognitiveSearch | null;
  }
  export interface DeleteCognitiveSearchMutationArgs {
    id: string;
  }
  export interface FileWatchlistMutationArgs {
    input: FileWatchlist;
  }
  export interface UnfileWatchlistMutationArgs {
    input: UnfileWatchlist;
  }
  export interface ShareFolderMutationArgs {
    input: ShareFolderInput | null;
  }
  export interface CreateTdoWithAssetMutationArgs {
    input: CreateTdoWithAsset | null /** Input fields necessary to create the TDO and asset */;
  }
  export interface CreateSubscriptionMutationArgs {
    input: CreateSubscription;
  }
  export interface UpdateSubscriptionMutationArgs {
    input: UpdateSubscription;
  }
  export interface DeleteSubscriptionMutationArgs {
    id: string;
  }
  export interface CreateTriggersMutationArgs {
    input: CreateTriggers;
  }
  export interface DeleteTriggerMutationArgs {
    id: string;
  }
  export interface ValidateEngineOutputMutationArgs {
    input: Json;
  }
  export interface GetEngineJwtMutationArgs {
    input: GetEngineJwt;
  }
  export interface VerifyJwtMutationArgs {
    jwtToken: string;
  }
  export interface CreateSavedSearchMutationArgs {
    input: CreateSavedSearch;
  }
  export interface DeleteSavedSearchMutationArgs {
    id: string;
  }
  export interface ReplaceSavedSearchMutationArgs {
    input: ReplaceSavedSearch;
  }
  export interface SendEmailMutationArgs {
    input: SendEmail;
  }
  export interface CreateFolderContentTempateMutationArgs {
    input: CreateFolderContentTempate;
  }
  export interface UpdateFolderContentTempateMutationArgs {
    input: UpdateFolderContentTempate;
  }
  export interface DeleteFolderContentTempateMutationArgs {
    id: string /** Folder Content Template Id */;
  }
  export interface CreateExportRequestMutationArgs {
    input: CreateExportRequest /** Input data required to create the export request */;
  }
  export interface UpdateExportRequestMutationArgs {
    input: UpdateExportRequest /** Input data required to update an export request */;
  }
  export interface CreateMentionsMutationArgs {
    input: CreateMentions;
  }
  export interface SetWorkflowRuntimeStorageDataMutationArgs {
    workflowRuntimeId: string;
    input: CreateWorkflowRuntimeStorageData;
  }
  export interface CreateEventMutationArgs {
    input: CreateEvent;
  }
  export interface UpdateEventMutationArgs {
    input: UpdateEvent;
  }
  export interface SubscribeEventMutationArgs {
    input: SubscribeEvent;
  }
  export interface UnsubscribeEventMutationArgs {
    id: string;
  }
  export interface EmitEventMutationArgs {
    input: EmitEvent;
  }
  export interface StartWorkflowRuntimeMutationArgs {
    workflowRuntimeId: string;
    orgId: string;
  }
  export interface StopWorkflowRuntimeMutationArgs {
    workflowRuntimeId: string;
  }
  export interface CreateProcessTemplateMutationArgs {
    input: CreateProcessTemplate;
  }
  export interface UpdateProcessTemplateMutationArgs {
    input: UpdateProcessTemplate;
  }
  export interface CreateClusterMutationArgs {
    input: CreateCluster;
  }
  export interface UpdateClusterMutationArgs {
    input: UpdateCluster;
  }
  export interface DeleteClusterMutationArgs {
    id: string;
  }
  export interface PauseClusterMutationArgs {
    input: PauseCluster;
  }
  export interface UnpauseClusterMutationArgs {
    input: UnpauseCluster;
  }
  export interface CreateClusterNodeMutationArgs {
    input: CreateClusterNode;
  }
  export interface UpdateClusterNodeMutationArgs {
    input: UpdateClusterNode;
  }
  export interface DeleteClusterNodeMutationArgs {
    id: string;
  }
  export interface CreateScheduledJobMutationArgs {
    input: CreateScheduledJob;
  }
  export interface CloneScheduledJobMutationArgs {
    input: CloneScheduledJob;
  }
  export interface RevertScheduledJobMutationArgs {
    input: RevertScheduledJob;
  }
  export interface UpdateScheduledJobMutationArgs {
    input: UpdateScheduledJob;
  }
  export interface DeleteScheduledJobMutationArgs {
    id: string;
  }
  export interface CreateScheduledJobContentTemplateMutationArgs {
    input: CreateScheduledJobContentTemplate;
  }
  export interface DeleteScheduledJobContentTemplateMutationArgs {
    id: string /** ID of the scheduled job content template to delete. It will be removed from thescheduled job. The underlying SDO will not be deleted. */;
  }
  export interface CreateSourceMutationArgs {
    input: CreateSource;
  }
  export interface UpdateSourceMutationArgs {
    input: UpdateSource;
  }
  export interface DeleteSourceMutationArgs {
    id: string;
  }
  export interface CreateSourceContentTemplateMutationArgs {
    input: CreateSourceContentTemplate;
  }
  export interface DeleteSourceContentTemplateMutationArgs {
    id: string /** ID of the source content template to delete. It will be removed from thesource. The underlying SDO will not be deleted. */;
  }
  export interface CreateSourceTypeMutationArgs {
    input: CreateSourceType;
  }
  export interface UpdateSourceTypeMutationArgs {
    input: UpdateSourceType;
  }
  export interface DeleteSourceTypeMutationArgs {
    id: string;
  }
  export interface CreateJobPipelineMutationArgs {
    input: CreateJobPipeline;
  }
  export interface UpdateJobPipelineMutationArgs {
    input: UpdateJobPipeline;
  }
  export interface DeleteJobPipelineMutationArgs {
    id: string;
  }
  export interface CreateJobTemplateMutationArgs {
    input: CreateJobTemplate;
  }
  export interface UpdateJobTemplateMutationArgs {
    input: UpdateJobTemplate;
  }
  export interface DeleteJobTemplateMutationArgs {
    id: string;
  }
  export interface CreateTaskTemplateMutationArgs {
    input: CreateTaskTemplate;
  }
  export interface UpdateTaskTemplateMutationArgs {
    input: UpdateTaskTemplate;
  }
  export interface DeleteTaskTemplateMutationArgs {
    id: string;
  }
  export interface CreateNextPipelineJobsMutationArgs {
    input: CreateNextPipelineJobs;
  }
  export interface LaunchScheduledJobsMutationArgs {
    input: LaunchScheduledJobs;
  }
  export interface LaunchJobTemplatesMutationArgs {
    input: LaunchJobTemplates;
  }
  export interface GetNextBundleForClusterMutationArgs {
    input: GetNextBundleForCluster;
  }
  export interface UpdateBundleStatusAsClusterMutationArgs {
    input: UpdateBundleStatusAsCluster | null;
  }
  export interface AssetIdMapCloneDataArgs {
    oldAssetId: string | null /** Provide an ID to retrieve mappings for specific old asset. */;
    newAssetId: string | null /** Provide an ID to retrieve mappings for a specific new asset. */;
  }

  export enum TemporalDataObjectOrderBy {
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
    startDateTime = 'startDateTime',
    stopDateTime = 'stopDateTime',
  }

  export enum OrderDirection {
    asc = 'asc',
    desc = 'desc',
  }

  export enum TemporalDataObjectDateTimeField {
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
    startDateTime = 'startDateTime',
    stopDateTime = 'stopDateTime',
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

  export enum UserStatus {
    active = 'active',
    suspended = 'suspended',
    deleted = 'deleted',
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

  export enum SearchIndex {
    mine = 'mine',
    global = 'global',
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
  /** The possible transformer functions which can be used with assets */
  export enum TransformFunction {
    XML2JSON = 'XML2JSON',
    Transcript2JSON = 'Transcript2JSON',
    JSON = 'JSON',
  }

  export enum LibraryOrderBy {
    id = 'id',
    name = 'name',
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
    version = 'version',
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

  export enum WatchlistOrderBy {
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
    stopDateTime = 'stopDateTime',
    startDateTime = 'startDateTime',
    name = 'name',
  }

  export enum DataRegistryOrderBy {
    name = 'name',
    source = 'source',
    createdDateTime = 'createdDateTime',
    modifiedDateTime = 'modifiedDateTime',
  }

  export enum SchemaOwnership {
    mine = 'mine',
    others = 'others',
    all = 'all',
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

  export enum SavedSearchOrderBy {
    name = 'name',
    createdDateTime = 'createdDateTime',
    sharedWithOrganization = 'sharedWithOrganization',
  }

  export enum ExportRequestStatus {
    incomplete = 'incomplete',
    complete = 'complete',
    downloaded = 'downloaded',
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
  /** Options used by the cleanupTDO mutation to select which data is deleted. */
  export enum TdoCleanupOption {
    storage = 'storage',
    searchIndex = 'searchIndex',
    engineResults = 'engineResults',
  }

  export enum AssetCreationMode {
    create = 'create',
    append = 'append',
    replace = 'replace',
  }

  export enum UpdateJobsStatus {
    queued = 'queued',
  }
  /** Settings that determine when to set a new entity identifieras the entity profile image. */
  export enum SetEntityProfileImage {
    none = 'none',
    ifNotSet = 'ifNotSet',
    always = 'always',
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

  export enum EngineWorkflowAction {
    enable = 'enable',
    disable = 'disable',
  }

  export enum OrganizationType {
    agency = 'agency',
    broadcaster = 'broadcaster',
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

  export enum SetClusterPermission {
    viewer = 'viewer',
    none = 'none',
  }

  export enum SetSourcePermission {
    viewer = 'viewer',
    editor = 'editor',
    none = 'none',
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

  export enum SetScheduledJobPermission {
    viewer = 'viewer',
    editor = 'editor',
    none = 'none',
  }

  /** Queries are used to retrieve data. If you're new to our API,try the `me` query to explore the information you have access to.Hit `ctrl-space` at any time to activate field completion hints, andmouse over a field or parameter to see its documentation. */
  export namespace QueryResolvers {
    export interface Resolvers<Context = any> {
      temporalDataObjects?: TemporalDataObjectsResolver<
        TdoList | null,
        any,
        Context
      > /** Retrieve a list of temporal data objects. */;
      temporalDataObject?: TemporalDataObjectResolver<
        TemporalDataObject | null,
        any,
        Context
      > /** Retrieve a single temporal data object */;
      asset?: AssetResolver<Asset | null, any, Context> /** Retrieve a single Asset */;
      widget?: WidgetResolver<Widget | null, any, Context> /** Retrieve a single Widget */;
      cloneRequests?: CloneRequestsResolver<CloneRequestList | null, any, Context> /** Retrieve clone job entries */;
      engines?: EnginesResolver<EngineList | null, any, Context> /** Retrieve engines */;
      engine?: EngineResolver<Engine | null, any, Context> /** Retrieve a single engine by ID */;
      engineBuild?: EngineBuildResolver<Build | null, any, Context>;
      engineCategories?: EngineCategoriesResolver<
        EngineCategoryList | null,
        any,
        Context
      > /** Retrieve engine categories */;
      engineCategory?: EngineCategoryResolver<
        EngineCategory | null,
        any,
        Context
      > /** Retrieve a specific engine category */;
      jobs?: JobsResolver<JobList | null, any, Context> /** Retrieve jobs */;
      job?: JobResolver<Job | null, any, Context> /** Retrieve a single job */;
      task?: TaskResolver<Task | null, any, Context> /** Retrieve a single task by ID */;
      entityIdentifierTypes?: EntityIdentifierTypesResolver<
        EntityIdentifierTypeList | null,
        any,
        Context
      > /** Retrieve entity identifier types */;
      entityIdentifierType?: EntityIdentifierTypeResolver<EntityIdentifierType | null, any, Context>;
      libraryTypes?: LibraryTypesResolver<LibraryTypeList | null, any, Context> /** Retrieve all library types */;
      libraryType?: LibraryTypeResolver<LibraryType | null, any, Context> /** Retrieve a single library type */;
      libraries?: LibrariesResolver<LibraryList | null, any, Context> /** Retrieve libraries and entities */;
      library?: LibraryResolver<Library | null, any, Context> /** Retrieve a specific library */;
      libraryEngineModel?: LibraryEngineModelResolver<
        LibraryEngineModel | null,
        any,
        Context
      > /** Retrieve a specific library engine model */;
      entity?: EntityResolver<Entity | null, any, Context> /** Retrieve a specific entity */;
      entities?: EntitiesResolver<EntityList | null, any, Context> /** Retrieve a list of entities across libraries */;
      applications?: ApplicationsResolver<
        ApplicationList | null,
        any,
        Context
      > /** Retrieve applications. These are custom applications integrated intothe Veritone platform using the VDA framework. */;
      organizations?: OrganizationsResolver<OrganizationList | null, any, Context> /** Retrieve organizations */;
      organization?: OrganizationResolver<Organization | null, any, Context> /** Retrieve a single organization */;
      permissions?: PermissionsResolver<PermissionList | null, any, Context> /** Retrieve permissions */;
      users?: UsersResolver<UserList | null, any, Context> /** Retrieve users */;
      user?: UserResolver<User | null, any, Context> /** Retrieve an individual user */;
      tokens?: TokensResolver<
        ReadonlyArray<Token | null> | null,
        any,
        Context
      > /** Retrieve user's organization API tokens */;
      me?: MeResolver<User | null, any, Context> /** Retrieve information for the current logged-in user */;
      groups?: GroupsResolver<GroupList | null, any, Context> /** Retrieve groups */;
      mention?: MentionResolver<Mention | null, any, Context> /** Retrieve a single mention */;
      searchMentions?: SearchMentionsResolver<
        SearchResult | null,
        any,
        Context
      > /** Search for mentions across an index.This query requires a user token. */;
      searchMedia?: SearchMediaResolver<
        SearchResult | null,
        any,
        Context
      > /** Search for media across an index.This query requires a user token. */;
      rootFolders?: RootFoldersResolver<
        ReadonlyArray<Folder | null> | null,
        any,
        Context
      > /** Retrieve the root folders for an organization */;
      folder?: FolderResolver<
        Folder | null,
        any,
        Context
      > /** Retrieve a single folder. Used to navigate the folder tree structure. */;
      application?: ApplicationResolver<Application | null, any, Context> /** Retrieve a single application */;
      ingestionConfiguration?: IngestionConfigurationResolver<
        IngestionConfiguration | null,
        any,
        Context
      > /** Retrieve a single ingestion configuration */;
      ingestionConfigurations?: IngestionConfigurationsResolver<
        IngestionConfigurationList | null,
        any,
        Context
      > /** Retrieve ingestion configurations */;
      schemas?: SchemasResolver<
        SchemaList | null,
        any,
        Context
      > /** Retrieve a list of schemas for structured data ingestions */;
      schema?: SchemaResolver<Schema | null, any, Context>;
      schemaProperties?: SchemaPropertiesResolver<SchemaPropertyList | null, any, Context>;
      structuredData?: StructuredDataResolver<
        StructuredData | null,
        any,
        Context
      > /** Retrieve a structured data object */;
      structuredDataObject?: StructuredDataObjectResolver<
        StructuredData | null,
        any,
        Context
      > /** Retrieve a structured data object */;
      structuredDataObjects?: StructuredDataObjectsResolver<
        StructuredDataList | null,
        any,
        Context
      > /** Retrieve a paginated list of structured data object */;
      graphqlServiceInfo?: GraphqlServiceInfoResolver<
        GraphQlServiceInfo | null,
        any,
        Context
      > /** Returns information about the GraphQL server, usefulfor diagnostics. This data is primarily used by Veritonedevelopment, and some fields may be restricted to Veritone administrators. */;
      getSignedWritableUrl?: GetSignedWritableUrlResolver<
        WritableUrlInfo | null,
        any,
        Context
      > /** Returns a signed writable S3 URL. A client can thenupload to this URL with an HTTP PUT without providingany additional authorization (_note_: it must be a PUT.A POST will fail.) */;
      getSignedWritableUrls?: GetSignedWritableUrlsResolver<
        ReadonlyArray<WritableUrlInfo>,
        any,
        Context
      > /** Return writable storage URLs in bulk.A maximum of 1000 can be created in one call.See `getSignedWritableUrl` for details on usage of theresponse contents. */;
      myRights?: MyRightsResolver<RightsListing | null, any, Context>;
      sharedFolders?: SharedFoldersResolver<
        ReadonlyArray<Folder | null> | null,
        any,
        Context
      > /** Retrieve the shared folders for an organization */;
      watchlists?: WatchlistsResolver<WatchlistList | null, any, Context>;
      watchlist?: WatchlistResolver<Watchlist | null, any, Context>;
      mentionStatusOptions?: MentionStatusOptionsResolver<ReadonlyArray<MentionStatus>, any, Context>;
      dataRegistries?: DataRegistriesResolver<DataRegistryList | null, any, Context>;
      dataRegistry?: DataRegistryResolver<DataRegistry | null, any, Context>;
      subscription?: SubscriptionResolver<Subscription, any, Context>;
      cognitiveSearch?: CognitiveSearchResolver<CognitiveSearch, any, Context>;
      collections?: CollectionsResolver<CollectionList, any, Context>;
      collection?: CollectionResolver<Collection, any, Context>;
      mentions?: MentionsResolver<MentionList | null, any, Context>;
      engineResults?: EngineResultsResolver<
        EngineResultList | null,
        any,
        Context
      > /** Retrieves engine results by TDO and engine ID or by job ID. */;
      trigger?: TriggerResolver<Trigger | null, any, Context>;
      triggers?: TriggersResolver<ReadonlyArray<Trigger | null> | null, any, Context>;
      savedSearches?: SavedSearchesResolver<
        SavedSearchList,
        any,
        Context
      > /** Fetch all saved searches that the current user has madeFetch all saved searches that have been shared withthe current users organizationInclude any saved searches that the user has created */;
      exportRequests?: ExportRequestsResolver<
        ExportRequestList,
        any,
        Context
      > /** Retrieve a list of export requests */;
      exportRequest?: ExportRequestResolver<ExportRequest, any, Context>;
      event?: EventResolver<Event, any, Context> /** Retrieve a event by id */;
      events?: EventsResolver<
        ReadonlyArray<Event> | null,
        any,
        Context
      > /** Retrieve a list of events by application */;
      timeZones?: TimeZonesResolver<
        ReadonlyArray<TimeZone>,
        any,
        Context
      > /** This query returns information about time zones recognized by thisserver. The information is static and does not change. */;
      auditLog?: AuditLogResolver<
        AuditLogEntryList,
        any,
        Context
      > /** Examine entries from the audit log. All operations that modify data arewritten to the audit log. Only entries for the user's own organizationcan be queried.All queries are bracketed by a time window. A default time window is appliedif the `toDateTime` and/or `fromDateTime` parameters are not provided.The maximum time window length is 30 days.Only Veritone and organization administrators can use this query. */;
      sharedMention?: SharedMentionResolver<MentionList | null, any, Context> /** Get the specific Mention shared */;
      workflowRuntime?: WorkflowRuntimeResolver<
        WorkflowRuntimeResponse,
        any,
        Context
      > /** Retrieve Veritone Workflow instance status by id */;
      workflowRuntimeStorageData?: WorkflowRuntimeStorageDataResolver<
        WorkflowRuntimeStorageDataList,
        any,
        Context
      > /** Get a specific workflowRuntimeData based on dataKey */;
      processTemplates?: ProcessTemplatesResolver<
        ProcessTemplateList,
        any,
        Context
      > /** Get list process templates by id or current organizationId */;
      scheduledJob?: ScheduledJobResolver<ScheduledJob | null, any, Context> /** Retrieve a single schedule */;
      scheduledJobs?: ScheduledJobsResolver<
        ScheduledJobList | null,
        any,
        Context
      > /** Retrieve or search for schedules */;
      engineConfiguration?: EngineConfigurationResolver<
        EngineConfiguration | null,
        any,
        Context
      > /** Retrieve a single engine configuration */;
      engineConfigurations?: EngineConfigurationsResolver<
        EngineConfigurationList | null,
        any,
        Context
      > /** Retrieve all engine configurations */;
      clusterNode?: ClusterNodeResolver<ClusterNode, any, Context> /** Retrieve a single node */;
      clusterNodes?: ClusterNodesResolver<ClusterNodeList, any, Context> /** Retrieve a list of nodes */;
      cluster?: ClusterResolver<Cluster, any, Context> /** Retrieve a single cluster */;
      clusters?: ClustersResolver<ClusterList, any, Context> /** Retrieve a list of clusters */;
      executionLocation?: ExecutionLocationResolver<
        ExecutionLocation,
        any,
        Context
      > /** Retrieve a single execution location */;
      executionLocations?: ExecutionLocationsResolver<
        ExecutionLocationList,
        any,
        Context
      > /** Retrieve a list of execution locations */;
      jobTemplate?: JobTemplateResolver<JobTemplate, any, Context> /** Retrieve a single job template */;
      jobTemplates?: JobTemplatesResolver<
        JobTemplateList,
        any,
        Context
      > /** Retrieve a list of job templates for a given job pipelineId */;
      taskTemplate?: TaskTemplateResolver<TaskTemplate, any, Context> /** Retrieve a single task template */;
      jobPipeline?: JobPipelineResolver<JobPipeline, any, Context> /** Retrieve a single job pipeline */;
      jobPipelines?: JobPipelinesResolver<
        JobPipelineList,
        any,
        Context
      > /** Retrieve a list of job pipelines owned by org */;
      source?: SourceResolver<Source, any, Context> /** Retrieve a single source */;
      sources?: SourcesResolver<SourceList, any, Context> /** Retrieve a list of sources */;
      sourceType?: SourceTypeResolver<SourceType, any, Context> /** Retrieve a single source type */;
      sourceTypes?: SourceTypesResolver<SourceTypeList, any, Context> /** Retrieve a list of source types */;
      sourceTypeCategories?: SourceTypeCategoriesResolver<
        SourceTypeCategoryList,
        any,
        Context
      > /** Retrieve all source type categories */;
      sourceTypeCategory?: SourceTypeCategoryResolver<
        SourceTypeCategory,
        any,
        Context
      > /** Retrieve a single source type category */;
      externalCredential?: ExternalCredentialResolver<
        ExternalCredential,
        any,
        Context
      > /** Retrieve a single external credential */;
      externalCredentials?: ExternalCredentialsResolver<
        ExternalCredentialList,
        any,
        Context
      > /** Retrieve a list of external credentials */;
      tasks?: TasksResolver<TaskList | null, any, Context>;
    }

    export type TemporalDataObjectsResolver<R = TdoList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      TemporalDataObjectsArgs
    >;
    export interface TemporalDataObjectsArgs {
      applicationId: string | null /** Application ID to get TDOs for. Defaults to the user's own application. */;
      id: string | null /** Provide an ID to retrieve a single specific TDO. */;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
      sourceId: string | null /** Optionally, specify a source ID. TDOs ingested from this source willbe returned. */;
      scheduledJobId:
        | string
        | null /** Optionally, specify a scheduled job ID. TDOs ingested under thisscheduled job will be returned. */;
      sampleMedia: boolean | null /** Whether to retrieve only tdos with the specified sampleMedia value */;
      includePublic:
        | boolean
        | null /** Whether to retrieve public data that is not part of the user's organization.The default is false. Pass true to include public data in the result set. */;
      orderBy: TemporalDataObjectOrderBy | null;
      orderDirection: OrderDirection | null;
      dateTimeFilter: ReadonlyArray<
        TemporalDataObjectDateTimeFilter
      > | null /** Provide optional filters against any date/time field to filterobjects within a given time window.Matching objects must meet all of the given conditions. */;
      mentionId: string | null /** Retrieve TDOs associated with the given mention */;
    }

    export type TemporalDataObjectResolver<R = TemporalDataObject | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      TemporalDataObjectArgs
    >;
    export interface TemporalDataObjectArgs {
      id: string /** the TDO ID */;
    }

    export type AssetResolver<R = Asset | null, Parent = any, Context = any> = Resolver<R, Parent, Context, AssetArgs>;
    export interface AssetArgs {
      id: string /** The asset ID */;
    }

    export type WidgetResolver<R = Widget | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      WidgetArgs
    >;
    export interface WidgetArgs {
      id: string /** The widget ID */;
      collectionId: string;
      organizationId: string;
    }

    export type CloneRequestsResolver<R = CloneRequestList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CloneRequestsArgs
    >;
    export interface CloneRequestsArgs {
      id: string | null /** Provide an ID to retrieve a single specific clone request. */;
      applicationId:
        | string
        | null /** Application ID to get clone requests for. Defaults to the user's own application. */;
      offset: number | null;
      limit: number | null;
    }

    export type EnginesResolver<R = EngineList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      EnginesArgs
    >;
    export interface EnginesArgs {
      id: string | null /** Provide an ID to retrieve a single specific engine. */;
      ids: ReadonlyArray<string> | null;
      categoryId: string | null /** Provide a category ID to filter by engine category. */;
      category: string | null /** provide a category name or ID to filter by engine category */;
      state: ReadonlyArray<EngineState | null> | null /** Provide a list of states to filter by engine state. */;
      owned: boolean | null /** If true, return only engines owned by the user's organization. */;
      libraryRequired: boolean | null /** If true, return only engines that require a library. */;
      createsTDO:
        | boolean
        | null /** If true, return only engines that create their own TDO.If false, return only engines that do not create a TDO.If not set, return either. */;
      name: string | null /** Provide a name, or part of a name, to search by engine name */;
      offset: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. */;
      filter: EngineFilter | null /** Filters for engine attributes */;
      orderBy: ReadonlyArray<EngineSortField | null> | null /** Provide a list of EngineSortField to sort by. */;
    }

    export type EngineResolver<R = Engine | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      EngineArgs
    >;
    export interface EngineArgs {
      id: string /** Provide the engine ID */;
    }

    export type EngineBuildResolver<R = Build | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      EngineBuildArgs
    >;
    export interface EngineBuildArgs {
      id: string /** Provide the build ID */;
    }

    export type EngineCategoriesResolver<R = EngineCategoryList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      EngineCategoriesArgs
    >;
    export interface EngineCategoriesArgs {
      id: string | null /** Provide an ID to retrieve a single specific engine category. */;
      name: string | null /** Provide a name, or part of one, to search by category name */;
      type: string | null /** Return all categories of an engine type */;
      offset: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. */;
    }

    export type EngineCategoryResolver<R = EngineCategory | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      EngineCategoryArgs
    >;
    export interface EngineCategoryArgs {
      id: string /** Supply the ID of the engine category to retrieve */;
    }

    export type JobsResolver<R = JobList | null, Parent = any, Context = any> = Resolver<R, Parent, Context, JobsArgs>;
    export interface JobsArgs {
      id: string | null /** Provide an ID to retrieve a single specific job. */;
      status: ReadonlyArray<JobStatusFilter> | null /** Provide a list of status strings to filter by status */;
      applicationStatus: string | null;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify the maximum number of results to included in this response, or page size. */;
      applicationId:
        | string
        | null /** Provide an application ID to filter jobs for a given application.Defaults to the user's own application. */;
      targetId: string | null /** Provide a target ID to get the set of jobs running against a particular TDO. */;
      clusterId: string | null /** Provide a cluster ID to get the jobs running on a specific cluster */;
      scheduledJobIds: ReadonlyArray<
        string
      > | null /** Provide a list of scheduled job IDs to get jobs associated with the scheduled jobs */;
      hasScheduledJobId:
        | boolean
        | null /** Return only jobs that are (true) or are not (false) associated with a scheduled job */;
      orderBy: ReadonlyArray<
        JobSortField
      > | null /** Provide sort information. The default is to sort bycreatedDateTime descending. */;
      dateTimeFilter: ReadonlyArray<JobDateTimeFilter> | null /** Filter by date/time field */;
      applicationIds: ReadonlyArray<
        string | null
      > | null /** Provide list of application IDs to filter jobs.Defaults to the user's own application. */;
    }

    export type JobResolver<R = Job | null, Parent = any, Context = any> = Resolver<R, Parent, Context, JobArgs>;
    export interface JobArgs {
      id: string /** the job ID */;
    }

    export type TaskResolver<R = Task | null, Parent = any, Context = any> = Resolver<R, Parent, Context, TaskArgs>;
    export interface TaskArgs {
      id: string /** Provide the task ID. */;
    }

    export type EntityIdentifierTypesResolver<
      R = EntityIdentifierTypeList | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, EntityIdentifierTypesArgs>;
    export interface EntityIdentifierTypesArgs {
      id: string | null /** Provide an ID to retrieve a single specific entity identifier type. */;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    }

    export type EntityIdentifierTypeResolver<R = EntityIdentifierType | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      EntityIdentifierTypeArgs
    >;
    export interface EntityIdentifierTypeArgs {
      id: string /** Provide the entity identifier type ID */;
    }

    export type LibraryTypesResolver<R = LibraryTypeList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      LibraryTypesArgs
    >;
    export interface LibraryTypesArgs {
      id: string | null /** Provide an ID to retrieve a single specific library type. */;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    }

    export type LibraryTypeResolver<R = LibraryType | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      LibraryTypeArgs
    >;
    export interface LibraryTypeArgs {
      id: string | null /** Provide an ID to retrieve a single specific library type. */;
    }

    export type LibrariesResolver<R = LibraryList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      LibrariesArgs
    >;
    export interface LibrariesArgs {
      id: string | null /** Provide an ID to retrieve a single specific library. */;
      name: string | null /** Provide a name string to search by name. */;
      type: string | null /** Provide the name or ID of a library to search for librariesthat contain that type. */;
      entityIdentifierTypeIds: ReadonlyArray<
        string
      > | null /** Provide the id of an entity identifier type to search for libraries that correlateto that type. */;
      includeOwnedOnly:
        | boolean
        | null /** Specify true if only libraries owned by the user's organizationshould be returned. Otherwise, shared libraries will be included. */;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
      orderBy: LibraryOrderBy | null /** Specify a field to order by */;
      orderDirection: OrderDirection | null /** Specify the direction to order by */;
    }

    export type LibraryResolver<R = Library | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      LibraryArgs
    >;
    export interface LibraryArgs {
      id: string /** Provide a library ID. */;
    }

    export type LibraryEngineModelResolver<R = LibraryEngineModel | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      LibraryEngineModelArgs
    >;
    export interface LibraryEngineModelArgs {
      id: string /** Provide the library engine model ID */;
    }

    export type EntityResolver<R = Entity | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      EntityArgs
    >;
    export interface EntityArgs {
      id: string /** Provide an entity ID. */;
    }

    export type EntitiesResolver<R = EntityList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      EntitiesArgs
    >;
    export interface EntitiesArgs {
      ids: ReadonlyArray<string> | null /** Provide a list of entity IDs to retrieve those entities */;
      libraryIds: ReadonlyArray<
        string
      > | null /** Provide a list of library IDs to retrieve entities acrossmultiple libraries. */;
      isPublished: boolean | null;
      identifierTypeId: string | null;
      name: string | null;
      offset: number | null;
      limit: number | null;
      orderBy: LibraryEntityOrderBy | null;
      orderDirection: OrderDirection | null;
    }

    export type ApplicationsResolver<R = ApplicationList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ApplicationsArgs
    >;
    export interface ApplicationsArgs {
      id: string | null /** Provide an ID to retrieve a single specific application. */;
      status: ApplicationStatus | null /** Provide a status, such as "draft" or "active" */;
      owned: boolean | null /** If true, return only applications owned by the user's organization. */;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    }

    export type OrganizationsResolver<R = OrganizationList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      OrganizationsArgs
    >;
    export interface OrganizationsArgs {
      id: string | null /** Provide an ID to retrieve a single specific organization. */;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
      kvpProperty: string | null /** Provide a property from the organization kvp to filter the organizaion list. */;
      kvpValue:
        | string
        | null /** Provide value to for the kvpFeature filter.If not present the filter becomes kvpProperty existence filter */;
    }

    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      OrganizationArgs
    >;
    export interface OrganizationArgs {
      id: string /** The organization IDTODO take application ID as well as org ID */;
    }

    export type PermissionsResolver<R = PermissionList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      PermissionsArgs
    >;
    export interface PermissionsArgs {
      id: string | null /** Provide an ID to retrieve a single specific permission. */;
      name: string | null;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    }

    export type UsersResolver<R = UserList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UsersArgs
    >;
    export interface UsersArgs {
      id: string | null /** Provide an ID to retrieve a single specific user.A user ID is a string in UUID format. */;
      ids: ReadonlyArray<string | null> | null /** Provide IDs to retrieve multiple users by ID. */;
      name: string | null /** Provide a name, or part of one, to search by name. */;
      organizationIds: ReadonlyArray<
        string | null
      > | null /** Provide a list of organization IDs to filter your search by organization. */;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
      includeAllOrgUsers: boolean | null /** Include all organization users. */;
    }

    export type UserResolver<R = User | null, Parent = any, Context = any> = Resolver<R, Parent, Context, UserArgs>;
    export interface UserArgs {
      id: string /** The user ID.A user ID is a string in UUID format. */;
      organizationIds: ReadonlyArray<string | null> | null;
    }

    export type TokensResolver<R = ReadonlyArray<Token | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type MeResolver<R = User | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type GroupsResolver<R = GroupList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      GroupsArgs
    >;
    export interface GroupsArgs {
      id: string | null /** Provide an ID to retrieve a specific group by ID */;
      ids: ReadonlyArray<string | null> | null /** Provide IDs to retrieve multiple groups by ID */;
      name: string | null /** Provide a name, or part of one, to search for groups by name */;
      organizationIds: ReadonlyArray<
        string | null
      > | null /** Provide a list of organization IDs to retrieve groups definedwithin certain organizations. */;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    }

    export type MentionResolver<R = Mention | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      MentionArgs
    >;
    export interface MentionArgs {
      mentionId: string /** The mention ID */;
      limit: number | null /** Comments pagination - limit */;
      offset: number | null /** Comments pagination - limit */;
      userId: string | null /** The user who owns the mention. */;
    }

    export type SearchMentionsResolver<R = SearchResult | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SearchMentionsArgs
    >;
    export interface SearchMentionsArgs {
      search: Json /** JSON structure containing the search query.TODO link to syntax documentation */;
    }

    export type SearchMediaResolver<R = SearchResult | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SearchMediaArgs
    >;
    export interface SearchMediaArgs {
      search: Json /** JSON structure containing the search query.TODO link to syntax documentation */;
    }

    export type RootFoldersResolver<R = ReadonlyArray<Folder | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      RootFoldersArgs
    >;
    export interface RootFoldersArgs {
      type: RootFolderType | null /** The type of root folder to retrieve */;
    }

    export type FolderResolver<R = Folder | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      FolderArgs
    >;
    export interface FolderArgs {
      id: string /** Provide an ID to retrieve a single specific user. */;
    }

    export type ApplicationResolver<R = Application | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ApplicationArgs
    >;
    export interface ApplicationArgs {
      id: string /** The application ID */;
    }

    export type IngestionConfigurationResolver<
      R = IngestionConfiguration | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, IngestionConfigurationArgs>;
    export interface IngestionConfigurationArgs {
      id: string /** The configuration ID */;
    }

    export type IngestionConfigurationsResolver<
      R = IngestionConfigurationList | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, IngestionConfigurationsArgs>;
    export interface IngestionConfigurationsArgs {
      id: string | null /** Supply an ingestion configuration ID to retrieve a single Ingestion */;
      offset: number | null /** Offset */;
      limit: number | null /** Limit */;
      name: string | null;
      startDate: DateTime | null;
      endDate: DateTime | null;
      sources: ReadonlyArray<string> | null /** Specify one or more sources to filter by source type */;
      applicationId: string | null /** Supply an application ID to retrieve configurations only forthat application. */;
      emailAddress: string | null /** Email address configured for ingestion */;
    }

    export type SchemasResolver<R = SchemaList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SchemasArgs
    >;
    export interface SchemasArgs {
      id: string | null /** Id of a schema to retrieve */;
      ids: ReadonlyArray<string> | null /** Ids of schemas to retrieve */;
      dataRegistryId: string | null /** Specify the id of the DataRegistry to get schemas */;
      status: ReadonlyArray<SchemaStatus> | null /** Specify one or more statuses to filter by schema status */;
      majorVersion: number | null /** Specify a major version to filter schemas */;
      name: string | null /** Specify a data registry name to filter schemas */;
      nameMatch: StringMatch | null /** The strategy used to find data registry name */;
      limit: number | null /** Limit */;
      offset: number | null /** Offset */;
      orderBy: ReadonlyArray<SchemaOrder | null> | null /** Specify one or more fields and direction to order results */;
    }

    export type SchemaResolver<R = Schema | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SchemaArgs
    >;
    export interface SchemaArgs {
      id: string;
    }

    export type SchemaPropertiesResolver<R = SchemaPropertyList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SchemaPropertiesArgs
    >;
    export interface SchemaPropertiesArgs {
      dataRegistryVersion: ReadonlyArray<DataRegistryVersion> | null;
      search: string | null;
      limit: number | null /** Limit */;
      offset: number | null /** Offset */;
    }

    export type StructuredDataResolver<R = StructuredData | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      StructuredDataArgs
    >;
    export interface StructuredDataArgs {
      id: string /** Supply the ID of the structured data object to retrieve. This will override filters. */;
      schemaId: string /** Schema Id for the structured data object to retrieve */;
    }

    export type StructuredDataObjectResolver<R = StructuredData | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      StructuredDataObjectArgs
    >;
    export interface StructuredDataObjectArgs {
      id: string /** Supply the ID of the structured data object to retrieve. This will override filters. */;
      schemaId: string /** Schema Id for the structured data object to retrieve */;
    }

    export type StructuredDataObjectsResolver<R = StructuredDataList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      StructuredDataObjectsArgs
    >;
    export interface StructuredDataObjectsArgs {
      id: string | null /** Supply the ID of the structured data object to retrieve. This will override filters. */;
      ids: ReadonlyArray<
        string
      > | null /** List of Ids of the structured data objects to retrieve. This will override filters. */;
      schemaId: string /** Schema Id for the structured data object to retrieve */;
      limit: number | null;
      offset: number | null;
      filter: Json | null /** Query to filter SDO. Supports operations such as and, or, eq, gt, lt, etc.TODO link to syntax documentation */;
    }

    export type GraphqlServiceInfoResolver<R = GraphQlServiceInfo | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type GetSignedWritableUrlResolver<R = WritableUrlInfo | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      GetSignedWritableUrlArgs
    >;
    export interface GetSignedWritableUrlArgs {
      key:
        | string
        | null /** Optional key of the object to generate a writableURL for. If not provided, a new, unique key willbe generated. If a key is provided and resembles a file name(with extension delimited by .), a UUID will be insertedinto the file name, leaving the extension intact.If a key is provided and does not resemblea file name, a UUID will be appended. */;
    }

    export type GetSignedWritableUrlsResolver<
      R = ReadonlyArray<WritableUrlInfo>,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, GetSignedWritableUrlsArgs>;
    export interface GetSignedWritableUrlsArgs {
      number: number /** Number of signed URLs to return */;
    }

    export type MyRightsResolver<R = RightsListing | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SharedFoldersResolver<R = ReadonlyArray<Folder | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type WatchlistsResolver<R = WatchlistList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      WatchlistsArgs
    >;
    export interface WatchlistsArgs {
      id: string | null;
      maxStopDateTime: DateTime | null;
      minStopDateTime: DateTime | null;
      minStartDateTime: DateTime | null;
      maxStartDateTime: DateTime | null;
      name: string | null;
      offset: number | null;
      limit: number | null;
      orderBy: WatchlistOrderBy | null;
      orderDirection: OrderDirection | null;
    }

    export type WatchlistResolver<R = Watchlist | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      WatchlistArgs
    >;
    export interface WatchlistArgs {
      id: string;
    }

    export type MentionStatusOptionsResolver<R = ReadonlyArray<MentionStatus>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type DataRegistriesResolver<R = DataRegistryList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DataRegistriesArgs
    >;
    export interface DataRegistriesArgs {
      id: string | null;
      name: string | null;
      nameMatch: StringMatch | null;
      offset: number | null;
      limit: number | null;
      orderBy: DataRegistryOrderBy | null;
      orderDirection: OrderDirection | null;
      filterByOwnership: SchemaOwnership | null;
    }

    export type DataRegistryResolver<R = DataRegistry | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DataRegistryArgs
    >;
    export interface DataRegistryArgs {
      id: string;
    }

    export type SubscriptionResolver<R = Subscription, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SubscriptionArgs
    >;
    export interface SubscriptionArgs {
      id: string;
    }

    export type CognitiveSearchResolver<R = CognitiveSearch, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CognitiveSearchArgs
    >;
    export interface CognitiveSearchArgs {
      id: string;
    }

    export type CollectionsResolver<R = CollectionList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CollectionsArgs
    >;
    export interface CollectionsArgs {
      id: string | null;
      mentionId: string | null;
      offset: number | null;
      limit: number | null;
    }

    export type CollectionResolver<R = Collection, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CollectionArgs
    >;
    export interface CollectionArgs {
      id: string;
    }

    export type MentionsResolver<R = MentionList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      MentionsArgs
    >;
    export interface MentionsArgs {
      id: string | null;
      watchlistId: string | null /** Get mentions created from the specified watchlist */;
      sourceId: string | null /** Get mentions associated with the specified source */;
      sourceTypeId: string | null /** Get mentions associated with sources of the specified source type */;
      tdoId: string | null /** Get mentions associated directly with the specific TDO */;
      dateTimeFilter: ReadonlyArray<
        MentionDateTimeFilter
      > | null /** Specify date/time filters against mention fields.Querying for mentions can be expensive. If the query does notinclude a filter by `id`, `tdoId`, `sourceId`, `watchlistId`, ora user-provided `dateTimeFilter`, a default filter of thepast 7 days is applied. */;
      orderBy: ReadonlyArray<
        MentionOrderBy
      > | null /** Set order information on the query. Multiple fieldsare supported. */;
      offset: number | null;
      limit: number | null;
    }

    export type EngineResultsResolver<R = EngineResultList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      EngineResultsArgs
    >;
    export interface EngineResultsArgs {
      tdoId:
        | string
        | null /** Provide the ID of the TDO containing engine results to retrieve.If this parameter is used, engineIds or engineCategoryIds must also be set.Results for _only_ the specified TDO will be returned. */;
      sourceId:
        | string
        | null /** Provide the ID of the Source containing engine results to retrieve.If this parameter is used, engineIds or engineCategoryIds must also be set.This takes priority over tdoId. */;
      engineIds: ReadonlyArray<
        string
      > | null /** Provide one or more engine IDs to retrieve engine results byID. This parameter is mandatory if tdoId is used, but optionalif jobId or engineCategory is used. */;
      engineCategoryIds: ReadonlyArray<
        string
      > | null /** Provide one or more category IDs to get all results from that categroy. */;
      jobId: string | null /** Provide a job ID to retrieve engine results for the job. */;
      mentionId: string | null /** Provide a mention ID to retrieve engine results for the mention. */;
      startOffsetMs: number | null /** Start offset ms for the results. */;
      stopOffsetMs: number | null /** End offset ms for the results. */;
      startDate: DateTime | null /** Start date for the results. Takes priority over startOffsetMs. */;
      stopDate: DateTime | null /** End date for the results. Takes priority over stopOffsetMs. */;
      ignoreUserEdited: boolean | null /** Whether or not to exclude user edited engine results. Defaults to false. */;
      fallbackTdoId:
        | string
        | null /** A TDO ID can be provided for use if the provided `sourceId` and/or`mentionId` parameters do not resolve to a logical set of TDOs.Depending on parameter settings and available data,results from other TDOs can be included in the response. */;
    }

    export type TriggerResolver<R = Trigger | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      TriggerArgs
    >;
    export interface TriggerArgs {
      id: string;
    }

    export type TriggersResolver<R = ReadonlyArray<Trigger | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SavedSearchesResolver<R = SavedSearchList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SavedSearchesArgs
    >;
    export interface SavedSearchesArgs {
      offset: number | null;
      limit: number | null;
      includeShared: boolean | null;
      filterByName: string | null;
      orderBy: SavedSearchOrderBy | null;
      orderDirection: OrderDirection | null;
    }

    export type ExportRequestsResolver<R = ExportRequestList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ExportRequestsArgs
    >;
    export interface ExportRequestsArgs {
      id: string | null /** Provide an ID to retrieve a single export request */;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
      status: ReadonlyArray<ExportRequestStatus> | null /** Provide a list of status options to filter by status */;
    }

    export type ExportRequestResolver<R = ExportRequest, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ExportRequestArgs
    >;
    export interface ExportRequestArgs {
      id: string;
    }

    export type EventResolver<R = Event, Parent = any, Context = any> = Resolver<R, Parent, Context, EventArgs>;
    export interface EventArgs {
      id: string;
    }

    export type EventsResolver<R = ReadonlyArray<Event> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      EventsArgs
    >;
    export interface EventsArgs {
      application: string;
    }

    export type TimeZonesResolver<R = ReadonlyArray<TimeZone>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type AuditLogResolver<R = AuditLogEntryList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      AuditLogArgs
    >;
    export interface AuditLogArgs {
      toDateTime: DateTime | null /** Date/time up to which entries will be returned. In other words, theend of the query time window.Defaults to the current time. */;
      fromDateTime: DateTime | null /** Date/time from which entries will be returned. In other words, thestart of the query time window.Defaults to the `toDateTime` minus 7 days. */;
      organizationId:
        | string
        | null /** Organization ID to query records for. This value can only be used byVeritone administrators. Any value provided by user administrators willbe ignored. */;
      userName: string | null /** User name on audit entry. Must be exact match. */;
      clientIpAddress:
        | string
        | null /** IP address of the client that generated the audit action. Must be exact match. */;
      clientUserAgent:
        | string
        | null /** HTTP user agent of the client that generated the audit action. Must be exact match. */;
      eventType: string | null /** The event type, such as `Create`, `Update`, or `Delete`.Must be exact match. */;
      objectId:
        | string
        | null /** The ID of the object involved in the audit action. The format of this IDvaries by object type. Must be exact match. */;
      objectType:
        | string
        | null /** The type of the object involved in the audit action, such as `Watchlist`or `TemporalDataObject`. Must be exact match. */;
      success: boolean | null /** Whether or not the action was successful. */;
      id: ReadonlyArray<string> | null /** The unique ID of an audit log entry. Multiple values can be provided. */;
      offset: number | null /** Offset into result set, for paging. */;
      limit:
        | number
        | null /** Limit on result size, for paging (page size). Audit queries arelightweight so the default of 100 is higher than the default offsetused elsewhere in the API. */;
      orderBy: ReadonlyArray<
        AuditLogOrderBy
      > | null /** Order information. Default is order by `createdDateTime` descending. */;
    }

    export type SharedMentionResolver<R = MentionList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SharedMentionArgs
    >;
    export interface SharedMentionArgs {
      id: string;
      offset: number | null;
      limit: number | null;
    }

    export type WorkflowRuntimeResolver<R = WorkflowRuntimeResponse, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      WorkflowRuntimeArgs
    >;
    export interface WorkflowRuntimeArgs {
      workflowRuntimeId: string;
    }

    export type WorkflowRuntimeStorageDataResolver<
      R = WorkflowRuntimeStorageDataList,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, WorkflowRuntimeStorageDataArgs>;
    export interface WorkflowRuntimeStorageDataArgs {
      workflowRuntimeId: string /** Unique id of the workflow instance */;
      storageKey: string | null /** The unique id to rertrieve a single workflow data */;
      storageKeyPrefix:
        | string
        | null /** A prefix filter used to return a set of workflow dataitems whose dataKey starts with dataKeyPrefix */;
      offset: number | null /** Offset for paging */;
      limit:
        | number
        | null /** Limit on result size, for paging (page size).workflowRuntimeData can be arbitrary large therefore smaller paging shoulf be preffered */;
    }

    export type ProcessTemplatesResolver<R = ProcessTemplateList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ProcessTemplatesArgs
    >;
    export interface ProcessTemplatesArgs {
      id: string | null;
      offset: number | null;
      limit: number | null;
    }

    export type ScheduledJobResolver<R = ScheduledJob | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ScheduledJobArgs
    >;
    export interface ScheduledJobArgs {
      id: string;
    }

    export type ScheduledJobsResolver<R = ScheduledJobList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ScheduledJobsArgs
    >;
    export interface ScheduledJobsArgs {
      id: string | null /** Provide an ID to retrieve a specific schedule */;
      name:
        | string
        | null /** Provide a schedule name, or part of one, to search for schedulesby name. Supports prefix/like search. */;
      runMode: RunMode | null /** Specify a run mode to filter to run mode */;
      isActive: boolean | null /** Specify isActive true or false to filter by active state */;
      engineId: string | null;
      engineCategoryId: string | null;
      engineType: ReadonlyArray<EngineTypeFilter> | null;
      offset: number | null /** Specify an offset to retrieve additional pages */;
      limit: number | null /** Specify a limit to limit result size. */;
      dateTimeFilter: ReadonlyArray<ScheduledJobDateTimeFilter> | null;
      partTimeFilter: ReadonlyArray<ScheduledJobPartTimeFilter> | null /** Time filter is in station local time */;
      primarySourceId: ReadonlyArray<
        string
      > | null /** Optionally, specify one or more source IDs. Scheduled jobs withany of the given sources as their primary source will be returned. */;
      primarySourceTypeId: ReadonlyArray<
        string
      > | null /** Optionally, specify one or more source type IDs. Scheduled jobs withany of the given sources types on their primary source will be returned. */;
      hasJobTemplate: boolean | null;
      hasRunningJobs:
        | boolean
        | null /** Specify isRunning true or false to filter for scheduled jobs thathave jobs running right now. */;
      orderBy: ReadonlyArray<
        ScheduledJobOrderBy
      > | null /** Order information. Default will order by modifiedDateTime descending. */;
      permission: ScheduledJobPermission | null /** Specify a permission level to retrieve scheduled jobs to which youhave at least that permission. */;
    }

    export type EngineConfigurationResolver<R = EngineConfiguration | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      EngineConfigurationArgs
    >;
    export interface EngineConfigurationArgs {
      id: string;
    }

    export type EngineConfigurationsResolver<
      R = EngineConfigurationList | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, EngineConfigurationsArgs>;
    export interface EngineConfigurationsArgs {
      id: string | null;
    }

    export type ClusterNodeResolver<R = ClusterNode, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ClusterNodeArgs
    >;
    export interface ClusterNodeArgs {
      id: string;
    }

    export type ClusterNodesResolver<R = ClusterNodeList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ClusterNodesArgs
    >;
    export interface ClusterNodesArgs {
      id: string | null;
      offset: number | null;
      limit: number | null;
    }

    export type ClusterResolver<R = Cluster, Parent = any, Context = any> = Resolver<R, Parent, Context, ClusterArgs>;
    export interface ClusterArgs {
      id: string;
    }

    export type ClustersResolver<R = ClusterList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ClustersArgs
    >;
    export interface ClustersArgs {
      id: string | null;
      name: string | null;
      type: ClusterType | null;
      offset: number | null;
      limit: number | null;
    }

    export type ExecutionLocationResolver<R = ExecutionLocation, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ExecutionLocationArgs
    >;
    export interface ExecutionLocationArgs {
      id: string;
    }

    export type ExecutionLocationsResolver<R = ExecutionLocationList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ExecutionLocationsArgs
    >;
    export interface ExecutionLocationsArgs {
      id: string | null;
    }

    export type JobTemplateResolver<R = JobTemplate, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      JobTemplateArgs
    >;
    export interface JobTemplateArgs {
      id: string;
    }

    export type JobTemplatesResolver<R = JobTemplateList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      JobTemplatesArgs
    >;
    export interface JobTemplatesArgs {
      jobPipelineId: string | null;
      scheduledJobId: string | null;
      engineId: string | null;
      engineType: ReadonlyArray<EngineTypeFilter> | null;
      offset: number | null;
      limit: number | null;
    }

    export type TaskTemplateResolver<R = TaskTemplate, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      TaskTemplateArgs
    >;
    export interface TaskTemplateArgs {
      id: string;
    }

    export type JobPipelineResolver<R = JobPipeline, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      JobPipelineArgs
    >;
    export interface JobPipelineArgs {
      id: string;
    }

    export type JobPipelinesResolver<R = JobPipelineList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      JobPipelinesArgs
    >;
    export interface JobPipelinesArgs {
      id: string | null;
      scheduledJobId: string | null;
      isPublic: boolean | null;
      offset: number | null;
      limit: number | null;
    }

    export type SourceResolver<R = Source, Parent = any, Context = any> = Resolver<R, Parent, Context, SourceArgs>;
    export interface SourceArgs {
      id: string;
    }

    export type SourcesResolver<R = SourceList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SourcesArgs
    >;
    export interface SourcesArgs {
      id: string | null /** Provide an ID to retrieve a specific source. */;
      sourceTypeId: string | null /** Provide a source type ID to filter for sources of the specified type. */;
      sourceTypeIds: ReadonlyArray<string | null> | null;
      name:
        | string
        | null /** Provide a name or partial name value to filter by name.The `nameMatch` parameter can be used to determine the stringmatch strategy used in the filter. Default is "starts with".Note that all matching is case-insensitive. */;
      nameMatch: StringMatch | null /** String matching strategy. Default is "starts with". */;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
      hasContentTemplates:
        | boolean
        | null /** Set this flag to true or false to return only sources that do or donot have content templates associated with them.The default is neither (do not filter on the presence of content templates). */;
      includePublic:
        | boolean
        | null /** Set this flag to true to include public sources or false to includeonly sources owned by theuser's org, not public sources.Public sources owned by the caller's org will always be returned. */;
      correlationSchemaId:
        | string
        | null /** Provide a correlation schama ID to filter for sources that correlate using specified schema. */;
      orderBy: ReadonlyArray<
        SourceSortField
      > | null /** Provide optional sort information. If not provided, a default sortby createdDateTime descending will be applied. */;
      permission: SourcePermission | null /** Specify a permission level to retrieve sources to which youhave at least that permission. */;
    }

    export type SourceTypeResolver<R = SourceType, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SourceTypeArgs
    >;
    export interface SourceTypeArgs {
      id: string;
    }

    export type SourceTypesResolver<R = SourceTypeList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SourceTypesArgs
    >;
    export interface SourceTypesArgs {
      id: string | null;
      ids: ReadonlyArray<string | null> | null;
      categoryId:
        | string
        | null /** Provide a source type category ID to select source types belongingto the category */;
      isLive: boolean | null /** Provide `isLive` to select source types with the given value. */;
      offset: number | null;
      limit: number | null;
    }

    export type SourceTypeCategoriesResolver<R = SourceTypeCategoryList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SourceTypeCategoriesArgs
    >;
    export interface SourceTypeCategoriesArgs {
      id: string | null /** Optionally, provide a source category type ID. */;
    }

    export type SourceTypeCategoryResolver<R = SourceTypeCategory, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SourceTypeCategoryArgs
    >;
    export interface SourceTypeCategoryArgs {
      id: string;
    }

    export type ExternalCredentialResolver<R = ExternalCredential, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ExternalCredentialArgs
    >;
    export interface ExternalCredentialArgs {
      id: string;
    }

    export type ExternalCredentialsResolver<R = ExternalCredentialList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ExternalCredentialsArgs
    >;
    export interface ExternalCredentialsArgs {
      id: string | null;
    }

    export type TasksResolver<R = TaskList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      TasksArgs
    >;
    export interface TasksArgs {
      id: string | null;
      taskTemplateId: string | null;
    }
  }

  export namespace TdoListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<TemporalDataObject | null> | null, any, Context>;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<
        number,
        any,
        Context
      > /** Maximum number of results that were retrieved in this query; page size */;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<
      R = ReadonlyArray<TemporalDataObject | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace TemporalDataObjectResolvers {
    export interface Resolvers<Context = any> {
      createdDateTime?: CreatedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Object creation timestamp. Does not change. In seconds since epoch (TODO change!). */;
      modifiedDateTime?: ModifiedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Object modification timestamp. In seconds since epoch (TODO change!). */;
      id?: IdResolver<string, any, Context> /** The object's unique ID */;
      createdBy?: CreatedByResolver<string | null, any, Context>;
      modifiedBy?: ModifiedByResolver<string | null, any, Context>;
      description?: DescriptionResolver<string | null, any, Context>;
      name?: NameResolver<string | null, any, Context>;
      mediaId?: MediaIdResolver<string | null, any, Context>;
      thumbnailUrl?: ThumbnailUrlResolver<
        string | null,
        any,
        Context
      > /** An optional URL for a thumbnail or preview image forthis object. If the URL is to an object in Veritone'sobject storage, it will be signed. */;
      sourceImageUrl?: SourceImageUrlResolver<
        string | null,
        any,
        Context
      > /** An optional URL for a source image for this object.If the URL is to an object in Veritone'sobject storage, it will be signed. */;
      metadata?: MetadataResolver<ReadonlyArray<Metadata | null> | null, any, Context> /** Modular metadata */;
      jsondata?: JsondataResolver<Json | null, any, Context> /** Direct access to metadata in raw JSON format */;
      details?: DetailsResolver<Json | null, any, Context>;
      assets?: AssetsResolver<
        AssetList | null,
        any,
        Context
      > /** Assets this object contains. Can be of any size.This field does not support paging. */;
      primaryAsset?: PrimaryAssetResolver<Asset | null, any, Context> /** Retrieve the primary asset of a given type */;
      security?: SecurityResolver<Security | null, any, Context> /** Security settings for the asset container */;
      startDateTime?: StartDateTimeResolver<
        DateTime,
        any,
        Context
      > /** Recording start time. In seconds since epoch. */;
      stopDateTime?: StopDateTimeResolver<DateTime, any, Context> /** Recording stop time. In seconds since epoch. */;
      source?: SourceResolver<string | null, any, Context>;
      applicationId?: ApplicationIdResolver<string, any, Context> /** Application this recording belongs to */;
      status?: StatusResolver<string | null, any, Context> /** status. Downloaded, recording, etc. */;
      tasks?: TasksResolver<TaskList | null, any, Context> /** Tasks running against this TemporalDataObject */;
      jobs?: JobsResolver<JobList | null, any, Context> /** Jobs running against this temporalDataObject */;
      folders?: FoldersResolver<ReadonlyArray<Folder> | null, any, Context> /** Folders that this TDO is filed in */;
      sourceData?: SourceDataResolver<TdoSourceData | null, any, Context>;
      streams?: StreamsResolver<
        ReadonlyArray<TdoStreamData>,
        any,
        Context
      > /** If this TDO supports streams, contains stream listings.Might be an empty list but will not be null. */;
      engineRuns?: EngineRunsResolver<
        EngineRunList | null,
        any,
        Context
      > /** Statuses of the engines run on the TDO. */;
    }

    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedByResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ModifiedByResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MediaIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ThumbnailUrlResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceImageUrlResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MetadataResolver<R = ReadonlyArray<Metadata | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type JsondataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DetailsResolver<R = Json | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DetailsArgs
    >;
    export interface DetailsArgs {
      path: string | null /** optionally, specify a path to retrieve only a specific propertywithin the details JSON */;
    }

    export type AssetsResolver<R = AssetList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      AssetsArgs
    >;
    export interface AssetsArgs {
      id: string | null /** Provide an ID to retrieve a single asset. */;
      type: ReadonlyArray<
        string
      > | null /** Specify a list of asset types such as "media" or "transcript" toretrieve a specific asset type */;
      assetType: ReadonlyArray<string> | null /** Deprecated -- use type parameter */;
      sourceTaskId: string | null /** Retrieve assets created by a specific task */;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
      orderBy: AssetOrderBy | null;
      orderDirection: OrderDirection | null;
    }

    export type PrimaryAssetResolver<R = Asset | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      PrimaryAssetArgs
    >;
    export interface PrimaryAssetArgs {
      assetType: string;
    }

    export type SecurityResolver<R = Security | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StartDateTimeResolver<R = DateTime, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StopDateTimeResolver<R = DateTime, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ApplicationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StatusResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TasksResolver<R = TaskList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      TasksArgs
    >;
    export interface TasksArgs {
      id: string | null;
      offset: number | null;
      limit: number | null;
      hasSourceAsset: boolean | null;
    }

    export type JobsResolver<R = JobList | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type FoldersResolver<R = ReadonlyArray<Folder> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SourceDataResolver<R = TdoSourceData | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type StreamsResolver<R = ReadonlyArray<TdoStreamData>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type EngineRunsResolver<R = EngineRunList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      EngineRunsArgs
    >;
    export interface EngineRunsArgs {
      offset: number | null;
      limit: number | null;
    }
  }

  export namespace AssetListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<Asset | null> | null, any, Context>;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<R = ReadonlyArray<Asset | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** An asset represents a single unit of data, such as a file or URL,and basic metadata about that data. An asset must be contained withina TemporalDataObject. */
  export namespace AssetResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context> /** The asset ID */;
      name?: NameResolver<string | null, any, Context> /** Asset name, such as a file name. */;
      contentType?: ContentTypeResolver<
        string | null,
        any,
        Context
      > /** Asset content type. Must be a valid MIME type string. */;
      description?: DescriptionResolver<string | null, any, Context> /** An optional description of the asset */;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      jsondata?: JsondataResolver<Json | null, any, Context> /** Freeform metadata in JSON format. */;
      containerId?: ContainerIdResolver<
        string,
        any,
        Context
      > /** The ID of the TemporalDataObject that contains this asset */;
      container?: ContainerResolver<
        TemporalDataObject | null,
        any,
        Context
      > /** The TemporalDataObject that contains this asset */;
      uri?: UriResolver<
        string | null,
        any,
        Context
      > /** The asset's URI. If a file is provided on asset creation, this URIpoint to the object in Veritone's object storage. */;
      signedUri?: SignedUriResolver<string | null, any, Context> /** A signed version of the asset's URI */;
      type?: TypeResolver<
        string,
        any,
        Context
      > /** The asset type, such as `media`, `transcript`, or `text`.The asset type determines which engines are able to operate on it.For example, a transcription engine requires a `media` asset.Engines that record their results in an asset typically set the typeaccordingly, such as `transcript`. */;
      assetType?: AssetTypeResolver<string | null, any, Context> /** Deprecated alias for type */;
      details?: DetailsResolver<
        Json | null,
        any,
        Context
      > /** Freeform application-defined metadata. This field may contain informationspecific to the object type, such as image or video metadata. */;
      jsonstring?: JsonstringResolver<string | null, any, Context> /** Metadata as raw JSON string */;
      fileData?: FileDataResolver<
        AssetFileData | null,
        any,
        Context
      > /** A structured containing metadata about a file. This will be set if theasset was created by uploading a file. */;
      sourceData?: SourceDataResolver<
        AssetSourceData | null,
        any,
        Context
      > /** A structure containing metadata about the source engine and task. This willbe set if the asset was created by an engine. */;
      transform?: TransformResolver<
        string | null,
        any,
        Context
      > /** Asset transform. The transformation function to be used with the asset.It can be XML to JSON */;
      isUserEdited?: IsUserEditedResolver<
        boolean | null,
        any,
        Context
      > /** A Boolean indicating whether or not this asset was created by editinganother asset. */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ContentTypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type JsondataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ContainerIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ContainerResolver<R = TemporalDataObject | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type UriResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SignedUriResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TypeResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type AssetTypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DetailsResolver<R = Json | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DetailsArgs
    >;
    export interface DetailsArgs {
      path: string | null /** optionally, specify a path to retrieve only a specific propertywithin the details JSON */;
    }

    export type JsonstringResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      JsonstringArgs
    >;
    export interface JsonstringArgs {
      indent: number | null;
    }

    export type FileDataResolver<R = AssetFileData | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceDataResolver<R = AssetSourceData | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type TransformResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      TransformArgs
    >;
    export interface TransformArgs {
      transformFunction: TransformFunction;
    }

    export type IsUserEditedResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** A structured containing metadata about an asset file. */
  export namespace AssetFileDataResolvers {
    export interface Resolvers<Context = any> {
      md5sum?: Md5sumResolver<string | null, any, Context> /** The MD5 checksum of the file */;
      size?: SizeResolver<number | null, any, Context> /** The file size in bytes */;
      originalFileUri?: OriginalFileUriResolver<
        string | null,
        any,
        Context
      > /** Original file URI, if provided on asset creation */;
    }

    export type Md5sumResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SizeResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OriginalFileUriResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** A structure containing metadata about the source engine and task for an asset. */
  export namespace AssetSourceDataResolvers {
    export interface Resolvers<Context = any> {
      name?: NameResolver<string | null, any, Context> /** The name of the asset source engine or engine category */;
      taskId?: TaskIdResolver<string | null, any, Context> /** ID of the specific task that created the asset */;
      task?: TaskResolver<Task | null, any, Context> /** The specific task that created the asset */;
      engineId?: EngineIdResolver<string | null, any, Context> /** The ID of the engine that created the asset */;
      engine?: EngineResolver<Engine | null, any, Context> /** The engine that created the asset */;
      sourceId?: SourceIdResolver<
        string | null,
        any,
        Context
      > /** The ID of the source from which this asset was generated or stamped. */;
      schemaId?: SchemaIdResolver<
        string | null,
        any,
        Context
      > /** ID of the schema describing this asset, if there is one.Typically applies only to assets of type "content-template". */;
      schema?: SchemaResolver<Schema | null, any, Context> /** The schema definition, if there is one */;
    }

    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TaskIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TaskResolver<R = Task | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EngineIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EngineResolver<R = Engine | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SchemaIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SchemaResolver<R = Schema | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Represents a single engine task */
  export namespace TaskResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context> /** The task ID */;
      name?: NameResolver<string | null, any, Context>;
      description?: DescriptionResolver<string | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time the task was created */;
      modifiedDateTime?: ModifiedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time the task was last modified */;
      createdBy?: CreatedByResolver<string | null, any, Context>;
      modifiedBy?: ModifiedByResolver<string | null, any, Context>;
      queuedDateTime?: QueuedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time the task was queued for execution. */;
      completedDateTime?: CompletedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time the task completed. */;
      startedDateTime?: StartedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time task execution started */;
      status?: StatusResolver<TaskStatus | null, any, Context> /** The task status. See TaskStatus enum for details. */;
      order?: OrderResolver<
        number | null,
        any,
        Context
      > /** Optional order in which the task should run, relative to other tasksin the job that contains it. */;
      isClone?: IsCloneResolver<
        boolean | null,
        any,
        Context
      > /** Whether or not the task is run on the clone of a TDO */;
      applicationId?: ApplicationIdResolver<string | null, any, Context> /** Application ID that owns the task */;
      targetId?: TargetIdResolver<
        string | null,
        any,
        Context
      > /** The ID of the TemporalDataObject the taskwas created for. */;
      target?: TargetResolver<
        TemporalDataObject | null,
        any,
        Context
      > /** The TemporalDataObject the task was created for. */;
      engineId?: EngineIdResolver<string | null, any, Context> /** ID of the engine for the task. */;
      engine?: EngineResolver<Engine | null, any, Context> /** The engine for the task */;
      jobId?: JobIdResolver<string | null, any, Context> /** The ID of the job that contains this task */;
      job?: JobResolver<Job | null, any, Context> /** The job that contains this task. */;
      buildId?: BuildIdResolver<string | null, any, Context> /** ID of the engine build used for this task. */;
      build?: BuildResolver<Build | null, any, Context> /** The engine build used for this task */;
      sourceAsset?: SourceAssetResolver<
        Asset | null,
        any,
        Context
      > /** The source asset for this task, if there is one. */;
      sourceAssetId?: SourceAssetIdResolver<
        string | null,
        any,
        Context
      > /** The ID of the source asset for this task, if there is one. */;
      mediaLengthSec?: MediaLengthSecResolver<number | null, any, Context>;
      mediaStorageBytes?: MediaStorageBytesResolver<number | null, any, Context>;
      mediaFileName?: MediaFileNameResolver<string | null, any, Context>;
      payload?: PayloadResolver<Json | null, any, Context> /** The incoming task payload, in JSON format */;
      output?: OutputResolver<Json | null, any, Context> /** The task output, in JSON format. */;
      payloadString?: PayloadStringResolver<
        string | null,
        any,
        Context
      > /** The incoming task payload, in String format. */;
      outputString?: OutputStringResolver<string | null, any, Context> /** The task output, in String format. */;
      log?: LogResolver<TaskLog | null, any, Context> /** The log file produced during task execution */;
      taskPayload?: TaskPayloadResolver<Json | null, any, Context> /** For backwards compatibility only */;
      taskOutput?: TaskOutputResolver<Json | null, any, Context> /** For backwards compatibility only */;
      testTask?: TestTaskResolver<boolean | null, any, Context> /** True if this task was created as a test task */;
      parentTaskId?: ParentTaskIdResolver<string | null, any, Context>;
      parentTask?: ParentTaskResolver<Task | null, any, Context>;
      childTaskIds?: ChildTaskIdsResolver<ReadonlyArray<string> | null, any, Context>;
      childTasks?: ChildTasksResolver<ReadonlyArray<Task> | null, any, Context>;
      standbyTask?: StandbyTaskResolver<
        Task | null,
        any,
        Context
      > /** A standby task that will execute if this one fails. */;
      standbyForTask?: StandbyForTaskResolver<
        Task | null,
        any,
        Context
      > /** The task that this task is a standby for. If the taskidentified in this field fails, the current task will execute. */;
      runtimePayload?: RuntimePayloadResolver<
        Json | null,
        any,
        Context
      > /** Contains metadata used by the platform run-time system to executethe task. This field is accessible only to platform components. */;
      engineConfiguration?: EngineConfigurationResolver<EngineConfiguration | null, any, Context>;
      engineConfigurationId?: EngineConfigurationIdResolver<string | null, any, Context>;
      executionLocation?: ExecutionLocationResolver<ExecutionLocation | null, any, Context>;
      executionLocationId?: ExecutionLocationIdResolver<string | null, any, Context>;
      templateId?: TemplateIdResolver<string | null, any, Context>;
      template?: TemplateResolver<TaskTemplate | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CreatedByResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ModifiedByResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type QueuedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CompletedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type StartedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type StatusResolver<R = TaskStatus | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrderResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IsCloneResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ApplicationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TargetIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TargetResolver<R = TemporalDataObject | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type EngineIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EngineResolver<R = Engine | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JobIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JobResolver<R = Job | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type BuildIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type BuildResolver<R = Build | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceAssetResolver<R = Asset | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceAssetIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MediaLengthSecResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MediaStorageBytesResolver<R = number | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type MediaFileNameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PayloadResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OutputResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PayloadStringResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OutputStringResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LogResolver<R = TaskLog | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TaskPayloadResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TaskOutputResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TestTaskResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ParentTaskIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ParentTaskResolver<R = Task | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ChildTaskIdsResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ChildTasksResolver<R = ReadonlyArray<Task> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type StandbyTaskResolver<R = Task | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StandbyForTaskResolver<R = Task | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RuntimePayloadResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EngineConfigurationResolver<R = EngineConfiguration | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type EngineConfigurationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ExecutionLocationResolver<R = ExecutionLocation | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ExecutionLocationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type TemplateIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TemplateResolver<R = TaskTemplate | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace EngineResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      ownerOrganizationId?: OwnerOrganizationIdResolver<string, any, Context>;
      isPublic?: IsPublicResolver<boolean | null, any, Context>;
      logoPath?: LogoPathResolver<string | null, any, Context>;
      iconPath?: IconPathResolver<string | null, any, Context>;
      signedIconPath?: SignedIconPathResolver<
        string | null,
        any,
        Context
      > /** The signed URL for the engine icon; will fallback to raw iconPath if unable to sign. */;
      signedLogoPath?: SignedLogoPathResolver<
        string | null,
        any,
        Context
      > /** The signed URL for the engine logo; will fallback to raw logoPath if unable to sign. */;
      name?: NameResolver<string | null, any, Context>;
      ownerOrganization?: OwnerOrganizationResolver<Organization | null, any, Context>;
      description?: DescriptionResolver<string | null, any, Context>;
      categoryId?: CategoryIdResolver<string | null, any, Context>;
      state?: StateResolver<EngineState | null, any, Context>;
      price?: PriceResolver<number | null, any, Context>;
      asset?: AssetResolver<string | null, any, Context>;
      displayName?: DisplayNameResolver<string | null, any, Context>;
      validateUri?: ValidateUriResolver<string | null, any, Context>;
      executeUri?: ExecuteUriResolver<string | null, any, Context>;
      applicationId?: ApplicationIdResolver<string | null, any, Context>;
      createsTDO?: CreatesTdoResolver<
        boolean | null,
        any,
        Context
      > /** True if the engine creates a TemporalDataObject (TDO) as part of itsexecution. False otherwise. */;
      website?: WebsiteResolver<string | null, any, Context>;
      rating?: RatingResolver<number | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      createdBy?: CreatedByResolver<string | null, any, Context>;
      modifiedBy?: ModifiedByResolver<string | null, any, Context>;
      libraryRequired?: LibraryRequiredResolver<
        boolean | null,
        any,
        Context
      > /** True if the engine requires a library to run. If so, a library ID mustbe provided in the engine payload. */;
      deploymentModel?: DeploymentModelResolver<DeploymentModel | null, any, Context>;
      tasks?: TasksResolver<TaskList | null, any, Context>;
      builds?: BuildsResolver<
        BuildList | null,
        any,
        Context
      > /** Retrieve builds for the engine.By default, deleted builds are not included.Deleted builds can be retrieved by including the `deleted` status parameter. */;
      dependency?: DependencyResolver<
        EngineDependency | null,
        any,
        Context
      > /** Dependency information for this engine */;
      fields?: FieldsResolver<
        ReadonlyArray<EngineField> | null,
        any,
        Context
      > /** The list of custom fields on the engine. Users will be prompted toset or change these values when they run the engine. For example, atranslation engine might have a field for the target language. */;
      category?: CategoryResolver<EngineCategory | null, any, Context> /** The engine category */;
      validStateActions?: ValidStateActionsResolver<ReadonlyArray<EngineStateAction | null> | null, any, Context>;
      preferredInputFormat?: PreferredInputFormatResolver<
        string | null,
        any,
        Context
      > /** Get the engine's preferred input format, based on the latest deployed build.If there is no deployed build this field cannot be populated. */;
      supportedInputFormats?: SupportedInputFormatsResolver<
        ReadonlyArray<string> | null,
        any,
        Context
      > /** Get the engine's supported input formats, based on the latest deployed build.If there is no deployed build this field cannot be populated. */;
      outputFormats?: OutputFormatsResolver<
        ReadonlyArray<string> | null,
        any,
        Context
      > /** Get the engine's output formats, based on the latest deployed build.If there is no deployed build this field cannot be populated. */;
      supportedSourceTypes?: SupportedSourceTypesResolver<
        ReadonlyArray<string> | null,
        any,
        Context
      > /** List of IDs of source types that the engine supports,based on the latest deployed build.If there is no deployed build this field cannot be populated.Applies only to adapter engines that ingest data from a source.Will be a list of IDs of SourceType objects. */;
      hasScanPhase?: HasScanPhaseResolver<
        boolean | null,
        any,
        Context
      > /** Get the ingestion flag which determines whether the adapter has a scan phase during ingestion.If there is no deployed build this field cannot be populated. */;
      deployedVersion?: DeployedVersionResolver<
        number | null,
        any,
        Context
      > /** Get the deployed build version of this engine. If there is no deployedbuild, this field will be null. */;
      mode?: ModeResolver<EngineMode | null, any, Context> /** Specifies the mode in which the engine process input */;
      runtimeType?: RuntimeTypeResolver<
        string | null,
        any,
        Context
      > /** Specifies the runtime type, such as "iron" or "edge" */;
      oauth?: OauthResolver<
        string | null,
        any,
        Context
      > /** Get oauth information based on the deployed build. If there is no deployedbuild, this field will be null. */;
      supportedScheduleTypes?: SupportedScheduleTypesResolver<
        ReadonlyArray<EngineScheduleType> | null,
        any,
        Context
      > /** List of schedule types that the engine supports,based on the latest deployed build.If there is no deployed build, this field cannot be populated. */;
      taskMetrics?: TaskMetricsResolver<
        EngineTaskMetrics | null,
        any,
        Context
      > /** Retrieve task metrics for the engine */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OwnerOrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IsPublicResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LogoPathResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IconPathResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SignedIconPathResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SignedLogoPathResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OwnerOrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CategoryIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StateResolver<R = EngineState | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PriceResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type AssetResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DisplayNameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ValidateUriResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ExecuteUriResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ApplicationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatesTdoResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type WebsiteResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RatingResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CreatedByResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ModifiedByResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LibraryRequiredResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DeploymentModelResolver<R = DeploymentModel | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type TasksResolver<R = TaskList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      TasksArgs
    >;
    export interface TasksArgs {
      status: ReadonlyArray<string | null> | null;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
      id: string | null;
      dateTimeFilter: ReadonlyArray<TaskDateTimeFilter | null> | null;
      hasSourceAsset: boolean | null;
    }

    export type BuildsResolver<R = BuildList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      BuildsArgs
    >;
    export interface BuildsArgs {
      buildStatus: ReadonlyArray<BuildStatus> | null;
      status: ReadonlyArray<string | null> | null;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
      id: string | null;
    }

    export type DependencyResolver<R = EngineDependency | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type FieldsResolver<R = ReadonlyArray<EngineField> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CategoryResolver<R = EngineCategory | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ValidStateActionsResolver<
      R = ReadonlyArray<EngineStateAction | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type PreferredInputFormatResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SupportedInputFormatsResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OutputFormatsResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SupportedSourceTypesResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type HasScanPhaseResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DeployedVersionResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ModeResolver<R = EngineMode | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RuntimeTypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OauthResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SupportedScheduleTypesResolver<
      R = ReadonlyArray<EngineScheduleType> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type TaskMetricsResolver<R = EngineTaskMetrics | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      TaskMetricsArgs
    >;
    export interface TaskMetricsArgs {
      fromDateTime: DateTime | null /** Provide a starting date in ISO format (maximum range of 7 days) */;
      toDateTime: DateTime | null /** Provide an end date in ISO format (maximum range of 7 days) */;
    }
  }

  export namespace OrganizationResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context> /** The organization ID */;
      name?: NameResolver<string | null, any, Context> /** The organization's name */;
      type?: TypeResolver<
        ReadonlyArray<string | null> | null,
        any,
        Context
      > /** A list of types applied to the organization, suchas `Broadcaster` or `Agency`. */;
      applications?: ApplicationsResolver<
        ApplicationList | null,
        any,
        Context
      > /** Applications belonging to the organization */;
      jsondata?: JsondataResolver<Json | null, any, Context> /** Freeform metadata in JSON format */;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      seatLimit?: SeatLimitResolver<number | null, any, Context>;
      status?: StatusResolver<OrganizationStatus | null, any, Context> /** Organization's current status */;
      roles?: RolesResolver<
        ReadonlyArray<Role | null> | null,
        any,
        Context
      > /** Roles allowed within the organization */;
      users?: UsersResolver<UserList | null, any, Context> /** Users belonging to the organization */;
      blacklist?: BlacklistResolver<
        EngineBlacklist | null,
        any,
        Context
      > /** List of engines forbidden to this organization. */;
      whitelist?: WhitelistResolver<
        EngineWhitelist | null,
        any,
        Context
      > /** List of engines allowed for this organization.Takes precedence of the blacklist. That is, if a whitelistis defined, then only engines in the whitelist are permittedregardless of what is in the blacklist.This field is not fully implemented! */;
      schemas?: SchemasResolver<
        SchemaList | null,
        any,
        Context
      > /** Custom schemas defined by this organization.This field is not fully implemented! */;
      watchlists?: WatchlistsResolver<
        WatchlistList | null,
        any,
        Context
      > /** Watchlists for this organization.This field is not fully implemented! */;
      collections?: CollectionsResolver<CollectionList | null, any, Context> /** Collections for this organization */;
      rootFolder?: RootFolderResolver<Folder | null, any, Context> /** Folder tree for this organization */;
      businessUnit?: BusinessUnitResolver<string | null, any, Context> /** Business unit */;
      dashboards?: DashboardsResolver<ReadonlyArray<Dashboard | null> | null, any, Context> /** Dashboards */;
      imageUrl?: ImageUrlResolver<string | null, any, Context>;
      internalApplicationId?: InternalApplicationIdResolver<
        string | null,
        any,
        Context
      > /** An ID corresponding to the organization used internally for someprovisioning elements. `applicationId` on `TemporalDataObject`, `Job`,and some other types uses this value instead of the organization `id`. */;
      seats?: SeatsResolver<number | null, any, Context> /** The number of active seats */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TypeResolver<R = ReadonlyArray<string | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ApplicationsResolver<R = ApplicationList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ApplicationsArgs
    >;
    export interface ApplicationsArgs {
      offset: number | null;
      limit: number | null;
    }

    export type JsondataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SeatLimitResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StatusResolver<R = OrganizationStatus | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type RolesResolver<R = ReadonlyArray<Role | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type UsersResolver<R = UserList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UsersArgs
    >;
    export interface UsersArgs {
      offset: number | null;
      limit: number | null;
    }

    export type BlacklistResolver<R = EngineBlacklist | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type WhitelistResolver<R = EngineWhitelist | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SchemasResolver<R = SchemaList | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type WatchlistsResolver<R = WatchlistList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CollectionsResolver<R = CollectionList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CollectionsArgs
    >;
    export interface CollectionsArgs {
      name: string | null /** Provide a name to filter by collection name */;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
    }

    export type RootFolderResolver<R = Folder | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      RootFolderArgs
    >;
    export interface RootFolderArgs {
      type: RootFolderType | null /** Specify a root folder type to retrieve a specific root folder */;
    }

    export type BusinessUnitResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DashboardsResolver<R = ReadonlyArray<Dashboard | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ImageUrlResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type InternalApplicationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SeatsResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace ApplicationListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<Application | null> | null, any, Context>;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<
        number,
        any,
        Context
      > /** Maximum number of results that were retrieved in this query; page size */;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<R = ReadonlyArray<Application | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** An application is a set of Veritone functionality that customers can sign up for. */
  export namespace ApplicationResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      key?: KeyResolver<string, any, Context>;
      name?: NameResolver<string, any, Context>;
      category?: CategoryResolver<string | null, any, Context>;
      description?: DescriptionResolver<string | null, any, Context>;
      iconUrl?: IconUrlResolver<string | null, any, Context>;
      iconSvg?: IconSvgResolver<string | null, any, Context>;
      url?: UrlResolver<string | null, any, Context>;
      deploymentModel?: DeploymentModelResolver<DeploymentModel | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      clientSecret?: ClientSecretResolver<
        string | null,
        any,
        Context
      > /** OAuth2 client secret. This field is server-generated and is onlyreturned on application creation. */;
      oauth2RedirectUrls?: Oauth2RedirectUrlsResolver<
        ReadonlyArray<string | null> | null,
        any,
        Context
      > /** OAuth2 redirect URLs */;
      organizationId?: OrganizationIdResolver<string, any, Context>;
      status?: StatusResolver<ApplicationStatus | null, any, Context>;
      permissionsRequired?: PermissionsRequiredResolver<ReadonlyArray<string | null> | null, any, Context>;
      contextMenuExtensions?: ContextMenuExtensionsResolver<ContextMenuExtensionList | null, any, Context>;
      validStateActions?: ValidStateActionsResolver<ReadonlyArray<ApplicationStateAction | null> | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type KeyResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CategoryResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IconUrlResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IconSvgResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type UrlResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DeploymentModelResolver<R = DeploymentModel | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ClientSecretResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ClientSecretArgs
    >;
    export interface ClientSecretArgs {
      password: string | null;
    }

    export type Oauth2RedirectUrlsResolver<
      R = ReadonlyArray<string | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type OrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StatusResolver<R = ApplicationStatus | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type PermissionsRequiredResolver<
      R = ReadonlyArray<string | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type ContextMenuExtensionsResolver<
      R = ContextMenuExtensionList | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type ValidStateActionsResolver<
      R = ReadonlyArray<ApplicationStateAction | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
  }

  export namespace ContextMenuExtensionListResolvers {
    export interface Resolvers<Context = any> {
      mentions?: MentionsResolver<ReadonlyArray<ContextMenuExtension | null> | null, any, Context>;
      tdos?: TdosResolver<ReadonlyArray<ContextMenuExtension | null> | null, any, Context>;
      watchlists?: WatchlistsResolver<ReadonlyArray<ContextMenuExtension | null> | null, any, Context>;
      collections?: CollectionsResolver<ReadonlyArray<ContextMenuExtension | null> | null, any, Context>;
    }

    export type MentionsResolver<
      R = ReadonlyArray<ContextMenuExtension | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type TdosResolver<
      R = ReadonlyArray<ContextMenuExtension | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type WatchlistsResolver<
      R = ReadonlyArray<ContextMenuExtension | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type CollectionsResolver<
      R = ReadonlyArray<ContextMenuExtension | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
  }

  export namespace ContextMenuExtensionResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      label?: LabelResolver<string, any, Context>;
      url?: UrlResolver<string, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LabelResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type UrlResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** A role signifies a user's permissions within a given context. */
  export namespace RoleResolvers {
    export interface Resolvers<Context = any> {
      description?: DescriptionResolver<string | null, any, Context>;
      appName?: AppNameResolver<string | null, any, Context>;
      name?: NameResolver<string, any, Context>;
      permissions?: PermissionsResolver<PermissionList | null, any, Context>;
      id?: IdResolver<string, any, Context>;
    }

    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type AppNameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PermissionsResolver<R = PermissionList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace PermissionListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<Permission | null> | null, any, Context>;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<
        number,
        any,
        Context
      > /** Maximum number of results that were retrieved in this query; page size */;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<R = ReadonlyArray<Permission | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace PermissionResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      name?: NameResolver<string | null, any, Context>;
      description?: DescriptionResolver<string | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace UserListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<User | null> | null, any, Context>;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<
        number,
        any,
        Context
      > /** Maximum number of results that were retrieved in this query; page size */;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<R = ReadonlyArray<User | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** A user represents a user account within an organization. */
  export namespace UserResolvers {
    export interface Resolvers<Context = any> {
      name?: NameResolver<string, any, Context> /** The user's name */;
      id?: IdResolver<string, any, Context> /** The user's unique ID.A user ID is a string in UUID format. */;
      permissions?: PermissionsResolver<
        PermissionList | null,
        any,
        Context
      > /** The set of permissions granted to the user */;
      roles?: RolesResolver<ReadonlyArray<Role> | null, any, Context> /** The set of roles granted to the user */;
      roleIds?: RoleIdsResolver<ReadonlyArray<string> | null, any, Context>;
      organizationId?: OrganizationIdResolver<
        string | null,
        any,
        Context
      > /** ID of the organization to which the user belongs. */;
      organization?: OrganizationResolver<
        Organization | null,
        any,
        Context
      > /** Organization to which the user belongs. */;
      jsondata?: JsondataResolver<Json | null, any, Context> /** Freeform metadata in JSON form */;
      firstName?: FirstNameResolver<string | null, any, Context>;
      lastName?: LastNameResolver<string | null, any, Context>;
      email?: EmailResolver<string | null, any, Context>;
      acls?: AclsResolver<ReadonlyArray<UserAcl> | null, any, Context>;
      rootFolder?: RootFolderResolver<Folder | null, any, Context> /** Folder tree for this organization */;
      passwordUpdatedDateTime?: PasswordUpdatedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time this user last changed their password */;
      lastLoginDateTime?: LastLoginDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time this user last logged in */;
      createdDateTime?: CreatedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time this user account was created */;
      modifiedDateTime?: ModifiedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time this user account was last modified */;
      mfaInfo?: MfaInfoResolver<MfaInfo, any, Context> /** Multi-factor authentication information for the user */;
      userSettings?: UserSettingsResolver<
        ReadonlyArray<UserSetting> | null,
        any,
        Context
      > /** User Settings for the user */;
      imageUrl?: ImageUrlResolver<string | null, any, Context>;
      status?: StatusResolver<UserStatus | null, any, Context> /** Status of user account */;
    }

    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PermissionsResolver<R = PermissionList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type RolesResolver<R = ReadonlyArray<Role> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type RoleIdsResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OrganizationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type JsondataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type FirstNameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LastNameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EmailResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type AclsResolver<R = ReadonlyArray<UserAcl> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type RootFolderResolver<R = Folder | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      RootFolderArgs
    >;
    export interface RootFolderArgs {
      type: RootFolderType | null /** Specify a root folder type to retrieve a specific root folder */;
    }

    export type PasswordUpdatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type LastLoginDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type MfaInfoResolver<R = MfaInfo, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type UserSettingsResolver<R = ReadonlyArray<UserSetting> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ImageUrlResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StatusResolver<R = UserStatus | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace UserAclResolvers {
    export interface Resolvers<Context = any> {
      applicationId?: ApplicationIdResolver<string | null, any, Context>;
      organizationId?: OrganizationIdResolver<string | null, any, Context>;
      organization?: OrganizationResolver<Organization | null, any, Context>;
      objectType?: ObjectTypeResolver<string | null, any, Context>;
      objectId?: ObjectIdResolver<string | null, any, Context>;
      access?: AccessResolver<UserAclAccessRights | null, any, Context>;
      userId?: UserIdResolver<string | null, any, Context>;
    }

    export type ApplicationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ObjectTypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ObjectIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type AccessResolver<R = UserAclAccessRights | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type UserIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace UserAclAccessRightsResolvers {
    export interface Resolvers<Context = any> {
      owner?: OwnerResolver<boolean | null, any, Context>;
    }

    export type OwnerResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace FolderResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context> /** The ID of this folder */;
      treeObjectId?: TreeObjectIdResolver<string, any, Context>;
      name?: NameResolver<string | null, any, Context> /** The name of this folder */;
      description?: DescriptionResolver<string | null, any, Context> /** An optional description */;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      ownerId?: OwnerIdResolver<string | null, any, Context>;
      parent?: ParentResolver<Folder | null, any, Context> /** The parent folder */;
      subfolders?: SubfoldersResolver<ReadonlyArray<Folder> | null, any, Context> /** The subfolders of this folder */;
      organization?: OrganizationResolver<
        Organization | null,
        any,
        Context
      > /** The organization that owns this folder */;
      organizationId?: OrganizationIdResolver<
        string | null,
        any,
        Context
      > /** The ID of the organization that owns this folder */;
      typeId?: TypeIdResolver<number | null, any, Context>;
      rootFolderTypeId?: RootFolderTypeIdResolver<number | null, any, Context>;
      maxDepth?: MaxDepthResolver<number | null, any, Context> /** The maximum depth of child folders allowed */;
      orderIndex?: OrderIndexResolver<number | null, any, Context>;
      status?: StatusResolver<FolderStatus | null, any, Context> /** The folder status */;
      folderPath?: FolderPathResolver<
        ReadonlyArray<Folder> | null,
        any,
        Context
      > /** The ordered path of the folder hierarchy. The first elementis always a root folder, and the last is this folder's parent. */;
      childTDOs?: ChildTdOsResolver<
        TdoList | null,
        any,
        Context
      > /** TemporalDataObjects that are filed in this folder */;
      sharedAccess?: SharedAccessResolver<
        ReadonlyArray<string | null> | null,
        any,
        Context
      > /** The read/write permissions for a shared folder */;
      sharedWith?: SharedWithResolver<SharedWith | null, any, Context>;
      contentTemplates?: ContentTemplatesResolver<ReadonlyArray<FolderContentTemplate>, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TreeObjectIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OwnerIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ParentResolver<R = Folder | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SubfoldersResolver<R = ReadonlyArray<Folder> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OrganizationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TypeIdResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RootFolderTypeIdResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MaxDepthResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrderIndexResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StatusResolver<R = FolderStatus | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type FolderPathResolver<R = ReadonlyArray<Folder> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ChildTdOsResolver<R = TdoList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ChildTdOsArgs
    >;
    export interface ChildTdOsArgs {
      offset: number | null;
      limit: number | null;
    }

    export type SharedAccessResolver<R = ReadonlyArray<string | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SharedWithResolver<R = SharedWith | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ContentTemplatesResolver<
      R = ReadonlyArray<FolderContentTemplate>,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
  }

  export namespace SharedWithResolvers {
    export interface Resolvers<Context = any> {
      read?: ReadResolver<
        ReadonlyArray<number | null> | null,
        any,
        Context
      > /** List of organizationIds that have read access to this object */;
      write?: WriteResolver<
        ReadonlyArray<number | null> | null,
        any,
        Context
      > /** List of organizationIds that have write access to this object */;
    }

    export type ReadResolver<R = ReadonlyArray<number | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type WriteResolver<R = ReadonlyArray<number | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace FolderContentTemplateResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      folderId?: FolderIdResolver<string, any, Context>;
      sdoId?: SdoIdResolver<string, any, Context>;
      sdo?: SdoResolver<StructuredData | null, any, Context>;
      schemaId?: SchemaIdResolver<string, any, Context>;
      data?: DataResolver<Json | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type FolderIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SdoIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SdoResolver<R = StructuredData | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SchemaIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace StructuredDataResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context> /** The ID */;
      schemaId?: SchemaIdResolver<string, any, Context> /** Id of the schema used to validate this object */;
      schema?: SchemaResolver<Schema | null, any, Context> /** The schema used to validate this object */;
      data?: DataResolver<Json | null, any, Context>;
      dataString?: DataStringResolver<string | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SchemaIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SchemaResolver<R = Schema | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context, DataArgs>;
    export interface DataArgs {
      path:
        | string
        | null /** Optionally, specify a path into the JSON data.Only the value of the path will be returned, at thetop level. The value will be empty if there is nothingin the JSON at that path.This parameter is useful for directly addressing fields in the JSON. */;
    }

    export type DataStringResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DataStringArgs
    >;
    export interface DataStringArgs {
      indent: number | null;
    }

    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace SchemaResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      dataRegistryId?: DataRegistryIdResolver<string, any, Context>;
      dataRegistry?: DataRegistryResolver<DataRegistry | null, any, Context>;
      definition?: DefinitionResolver<Json | null, any, Context>;
      majorVersion?: MajorVersionResolver<number, any, Context>;
      minorVersion?: MinorVersionResolver<number, any, Context>;
      createdBy?: CreatedByResolver<User | null, any, Context>;
      modifiedBy?: ModifiedByResolver<User | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      status?: StatusResolver<SchemaStatus | null, any, Context>;
      validActions?: ValidActionsResolver<
        ReadonlyArray<SchemaAction | null> | null,
        any,
        Context
      > /** List of status the Schema can transition to. */;
      structuredDataObjects?: StructuredDataObjectsResolver<
        StructuredDataList | null,
        any,
        Context
      > /** SDOs under this schema */;
      organization?: OrganizationResolver<
        Organization | null,
        any,
        Context
      > /** The organization that owns this schema. */;
      organizationId?: OrganizationIdResolver<
        string | null,
        any,
        Context
      > /** The Id of the organization that owns this schema. */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DataRegistryIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DataRegistryResolver<R = DataRegistry | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type DefinitionResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MajorVersionResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MinorVersionResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedByResolver<R = User | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ModifiedByResolver<R = User | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type StatusResolver<R = SchemaStatus | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ValidActionsResolver<
      R = ReadonlyArray<SchemaAction | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type StructuredDataObjectsResolver<R = StructuredDataList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      StructuredDataObjectsArgs
    >;
    export interface StructuredDataObjectsArgs {
      offset: number | null;
      limit: number | null;
    }

    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OrganizationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace DataRegistryResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      name?: NameResolver<string | null, any, Context>;
      description?: DescriptionResolver<string | null, any, Context>;
      source?: SourceResolver<string | null, any, Context>;
      schemas?: SchemasResolver<SchemaList | null, any, Context>;
      organization?: OrganizationResolver<
        Organization | null,
        any,
        Context
      > /** The organization that owns this data registry. */;
      organizationId?: OrganizationIdResolver<string | null, any, Context>;
      createdBy?: CreatedByResolver<User | null, any, Context>;
      modifiedBy?: ModifiedByResolver<User | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      publishedSchema?: PublishedSchemaResolver<
        Schema | null,
        any,
        Context
      > /** The currently published schema version for convenient access.This field will be empty if there is no published schema. */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SchemasResolver<R = SchemaList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SchemasArgs
    >;
    export interface SchemasArgs {
      status: ReadonlyArray<SchemaStatus | null> | null;
      majorVersion: number | null;
      id: string | null;
      offset: number | null;
      limit: number | null;
      orderBy: ReadonlyArray<SchemaOrder | null> | null;
    }

    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OrganizationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedByResolver<R = User | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ModifiedByResolver<R = User | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type PublishedSchemaResolver<R = Schema | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace SchemaListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<Schema | null> | null, any, Context>;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<
        number,
        any,
        Context
      > /** Maximum number of results that were retrieved in this query; page size */;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<R = ReadonlyArray<Schema | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace StructuredDataListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<StructuredData | null> | null, any, Context>;
      count?: CountResolver<number | null, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
    }

    export type RecordsResolver<
      R = ReadonlyArray<StructuredData | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Type that holds multi-factor authentication for a user */
  export namespace MfaInfoResolvers {
    export interface Resolvers<Context = any> {
      phoneNumber?: PhoneNumberResolver<string | null, any, Context>;
      smsVoiceVerifiedDateTime?: SmsVoiceVerifiedDateTimeResolver<DateTime | null, any, Context>;
      gaVerifiedDateTime?: GaVerifiedDateTimeResolver<DateTime | null, any, Context>;
      defaultOption?: DefaultOptionResolver<string | null, any, Context>;
      pendingRegistration?: PendingRegistrationResolver<string | null, any, Context>;
    }

    export type PhoneNumberResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SmsVoiceVerifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type GaVerifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type DefaultOptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PendingRegistrationResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }
  /** Type that holds user setting for a user */
  export namespace UserSettingResolvers {
    export interface Resolvers<Context = any> {
      key?: KeyResolver<string | null, any, Context>;
      value?: ValueResolver<string | null, any, Context>;
    }

    export type KeyResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ValueResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace EngineBlacklistResolvers {
    export interface Resolvers<Context = any> {
      organizationId?: OrganizationIdResolver<string, any, Context>;
      engines?: EnginesResolver<ReadonlyArray<Engine | null> | null, any, Context>;
      engineCategories?: EngineCategoriesResolver<ReadonlyArray<EngineCategory | null> | null, any, Context>;
    }

    export type OrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EnginesResolver<R = ReadonlyArray<Engine | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type EngineCategoriesResolver<
      R = ReadonlyArray<EngineCategory | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
  }

  export namespace EngineCategoryResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      name?: NameResolver<string | null, any, Context>;
      description?: DescriptionResolver<string | null, any, Context>;
      type?: TypeResolver<EngineType | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      createdBy?: CreatedByResolver<string | null, any, Context>;
      modifiedBy?: ModifiedByResolver<string | null, any, Context>;
      engineIds?: EngineIdsResolver<
        ReadonlyArray<string> | null,
        any,
        Context
      > /** The list of IDs of engines in this category */;
      totalEngines?: TotalEnginesResolver<number | null, any, Context>;
      iconClass?: IconClassResolver<string | null, any, Context>;
      editable?: EditableResolver<boolean | null, any, Context>;
      videoOnly?: VideoOnlyResolver<boolean | null, any, Context>;
      color?: ColorResolver<string | null, any, Context>;
      engines?: EnginesResolver<EngineList | null, any, Context> /** The list of engines in this category */;
      libraryEntityIdentifierTypeIds?: LibraryEntityIdentifierTypeIdsResolver<
        ReadonlyArray<string> | null,
        any,
        Context
      > /** If the engine category is integrated with libraries, this field containsthe list of IDs of entity identifier types that the engine category is compatiblewith. */;
      libraryEntityIdentifierTypes?: LibraryEntityIdentifierTypesResolver<
        EntityIdentifierTypeList | null,
        any,
        Context
      > /** If the engine category is integrated with libraries, this field containsthe list of entity identifier types that the engine category is compatiblewith. */;
      categoryType?: CategoryTypeResolver<
        string | null,
        any,
        Context
      > /** A type for the engine category. Multiple engine categories with commonelements can share a categoryType. This information is used to computedependencies and format user interface elements. */;
      categoryMetadataKey?: CategoryMetadataKeyResolver<
        string | null,
        any,
        Context
      > /** An optional key used to identify this engine category's results forsearch and other purposes.Primarily used by Veritone platform applications. */;
      dependencies?: DependenciesResolver<
        ReadonlyArray<EngineDependency> | null,
        any,
        Context
      > /** A list of categoryTypes on which instances of this engine category depend. */;
      searchConfiguration?: SearchConfigurationResolver<
        EngineSearchConfiguration | null,
        any,
        Context
      > /** Information about how engine results in this category can be searchedin Veritone platform applications.Used primarily by Veritone platform applications. */;
      exportFormats?: ExportFormatsResolver<
        ReadonlyArray<ExportFormat | null>,
        any,
        Context
      > /** List of engine result export formats supported by engines in thiscategory. May be empty. */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TypeResolver<R = EngineType | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CreatedByResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ModifiedByResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EngineIdsResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type TotalEnginesResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IconClassResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EditableResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type VideoOnlyResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ColorResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EnginesResolver<R = EngineList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      EnginesArgs
    >;
    export interface EnginesArgs {
      offset: number | null;
      limit: number | null;
      filter: EngineFilter | null /** Filters for engine attributes */;
      orderBy: ReadonlyArray<EngineSortField | null> | null /** Provide a list of EngineSortField to sort by. */;
    }

    export type LibraryEntityIdentifierTypeIdsResolver<
      R = ReadonlyArray<string> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type LibraryEntityIdentifierTypesResolver<
      R = EntityIdentifierTypeList | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type CategoryTypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CategoryMetadataKeyResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type DependenciesResolver<
      R = ReadonlyArray<EngineDependency> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type SearchConfigurationResolver<
      R = EngineSearchConfiguration | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type ExportFormatsResolver<R = ReadonlyArray<ExportFormat | null>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace EngineTypeResolvers {
    export interface Resolvers<Context = any> {
      name?: NameResolver<string | null, any, Context>;
      description?: DescriptionResolver<string | null, any, Context>;
    }

    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace EngineListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<Engine | null> | null, any, Context>;
      count?: CountResolver<number, any, Context> /** Number of records returned in this response */;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<number, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<Engine | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CountResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace EntityIdentifierTypeListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<EntityIdentifierType> | null, any, Context>;
      limit?: LimitResolver<number, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<EntityIdentifierType> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace EntityIdentifierTypeResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      label?: LabelResolver<string, any, Context>;
      labelPlural?: LabelPluralResolver<string, any, Context>;
      iconClass?: IconClassResolver<string | null, any, Context>;
      description?: DescriptionResolver<string | null, any, Context>;
      dataType?: DataTypeResolver<EntityIdentifierDataType, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LabelResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LabelPluralResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IconClassResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DataTypeResolver<R = EntityIdentifierDataType, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace EngineDependencyResolvers {
    export interface Resolvers<Context = any> {
      dependencyType?: DependencyTypeResolver<
        string,
        any,
        Context
      > /** TODO maps to values in engineCategory.data_field?Must be a valid categoryType from an existing EngineCategory. */;
      assetType?: AssetTypeResolver<string | null, any, Context> /** Asset type to expect previous engine to produce */;
      category?: CategoryResolver<
        EngineCategory | null,
        any,
        Context
      > /** The engine category corresponding to this dependency */;
    }

    export type DependencyTypeResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type AssetTypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CategoryResolver<R = EngineCategory | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Represents configuration on how the results of engines within a givencategory are indexed and searched.Primarily used by Veritone platform applications. */
  export namespace EngineSearchConfigurationResolvers {
    export interface Resolvers<Context = any> {
      autocompleteFields?: AutocompleteFieldsResolver<
        ReadonlyArray<AutocompleteFieldConfig> | null,
        any,
        Context
      > /** Autocomplete field information is used to tell client applicationswhat fields are searchable by autocomplete in the search index andhow to search for them. */;
      searchFields?: SearchFieldsResolver<
        ReadonlyArray<SearchFieldConfig> | null,
        any,
        Context
      > /** Autocomplete field information is used to tell client applicationswhat fields are searchable in the search index andhow to search for them. */;
      isSearchEnabled?: IsSearchEnabledResolver<
        boolean | null,
        any,
        Context
      > /** Indicates whether or not search is available for results producedby engines in this category can be searched. */;
      isElasticEnabled?: IsElasticEnabledResolver<
        boolean | null,
        any,
        Context
      > /** Indicates whether or not search is available for results producedby engines in this category can be searched within the Elasticsearch index. */;
      searchMetadataKey?: SearchMetadataKeyResolver<string | null, any, Context>;
      elasticType?: ElasticTypeResolver<string | null, any, Context>;
    }

    export type AutocompleteFieldsResolver<
      R = ReadonlyArray<AutocompleteFieldConfig> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type SearchFieldsResolver<
      R = ReadonlyArray<SearchFieldConfig> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type IsSearchEnabledResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IsElasticEnabledResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SearchMetadataKeyResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ElasticTypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace AutocompleteFieldConfigResolvers {
    export interface Resolvers<Context = any> {
      autocompleteField?: AutocompleteFieldResolver<string | null, any, Context>;
      indexField?: IndexFieldResolver<string | null, any, Context>;
    }

    export type AutocompleteFieldResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type IndexFieldResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace SearchFieldConfigResolvers {
    export interface Resolvers<Context = any> {
      searchField?: SearchFieldResolver<string | null, any, Context>;
      indexField?: IndexFieldResolver<string | null, any, Context>;
    }

    export type SearchFieldResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IndexFieldResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace ExportFormatResolvers {
    export interface Resolvers<Context = any> {
      format?: FormatResolver<string, any, Context> /** The file format/extension i.e. ttml, vlf, etc. */;
      label?: LabelResolver<
        string,
        any,
        Context
      > /** A human readable label for the file format i.e. "Time Text Markup Language" */;
      types?: TypesResolver<
        ReadonlyArray<string | null>,
        any,
        Context
      > /** A list types to categories the file format by i.e. "subtitle" */;
    }

    export type FormatResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LabelResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TypesResolver<R = ReadonlyArray<string | null>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace EngineWhitelistResolvers {
    export interface Resolvers<Context = any> {
      organizationId?: OrganizationIdResolver<string, any, Context>;
      engines?: EnginesResolver<ReadonlyArray<Engine | null> | null, any, Context>;
      engineCategories?: EngineCategoriesResolver<ReadonlyArray<EngineCategory | null> | null, any, Context>;
    }

    export type OrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EnginesResolver<R = ReadonlyArray<Engine | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type EngineCategoriesResolver<
      R = ReadonlyArray<EngineCategory | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
  }

  export namespace WatchlistListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<Watchlist | null> | null, any, Context>;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit?: LimitResolver<
        number,
        any,
        Context
      > /** Maximum number of results that were retrieved in this query; page size */;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<R = ReadonlyArray<Watchlist | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace WatchlistResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context> /** The primary ID */;
      name?: NameResolver<string, any, Context> /** A human-readable name for the watchlist */;
      organization?: OrganizationResolver<Organization, any, Context> /** The organization that owns the watchlist */;
      organizationId?: OrganizationIdResolver<
        string,
        any,
        Context
      > /** ID of the organization that owns the watchlist */;
      scheduleIds?: ScheduleIdsResolver<
        ReadonlyArray<string> | null,
        any,
        Context
      > /** IDs of the schedules associated with the watchlist */;
      startDateTime?: StartDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time at which the watchlist takes effect */;
      stopDateTime?: StopDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time at which the watchlist is no longer in effect */;
      createdDateTime?: CreatedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time the watchlist was created */;
      modifiedDateTime?: ModifiedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time the watchlist was last modified */;
      cognitiveSearches?: CognitiveSearchesResolver<
        ReadonlyArray<CognitiveSearch> | null,
        any,
        Context
      > /** Cognitives searches associated with the watchlist */;
      sourceTypeIds?: SourceTypeIdsResolver<
        ReadonlyArray<string> | null,
        any,
        Context
      > /** Ids of the source types associated directly with the watchlist */;
      sourceIds?: SourceIdsResolver<
        ReadonlyArray<string> | null,
        any,
        Context
      > /** IDs of the sources associated directly with the watchlist */;
      folders?: FoldersResolver<
        ReadonlyArray<Folder> | null,
        any,
        Context
      > /** Folders that the watchlist is filed in.At present, a watchlist can only be filed in a single folder. */;
      details?: DetailsResolver<
        Json | null,
        any,
        Context
      > /** Structured metadata associated with the watchlist.Elements of the metadata are validated against specific schemas. */;
      subscriptions?: SubscriptionsResolver<ReadonlyArray<Subscription>, any, Context>;
      searchIndex?: SearchIndexResolver<SearchIndex, any, Context>;
      query?: QueryResolver<Json | null, any, Context>;
      mentions?: MentionsResolver<MentionList | null, any, Context> /** Get mentions generated for this watchlist */;
      advertiserId?: AdvertiserIdResolver<
        string | null,
        any,
        Context
      > /** ID of the advertiser directly with the watchlist */;
      brandId?: BrandIdResolver<string | null, any, Context> /** ID of the brand directly with the watchlist */;
      advertiser?: AdvertiserResolver<Json | null, any, Context> /** advertiser associated with the watchlist */;
      brand?: BrandResolver<Json | null, any, Context> /** brand associated with the watchlist */;
      combinedSourceTypeIds?: CombinedSourceTypeIdsResolver<
        ReadonlyArray<string> | null,
        any,
        Context
      > /** Contains the list of all source type IDsassociated with this watchlist, includingthose for sources on schedules. */;
      scheduledJobs?: ScheduledJobsResolver<ScheduledJobList, any, Context>;
      schedules?: SchedulesResolver<ScheduledJobList, any, Context> /** TODO for backward compat with v3 search? */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationResolver<R = Organization, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ScheduleIdsResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type StartDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StopDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CognitiveSearchesResolver<
      R = ReadonlyArray<CognitiveSearch> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type SourceTypeIdsResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SourceIdsResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type FoldersResolver<R = ReadonlyArray<Folder> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type DetailsResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SubscriptionsResolver<R = ReadonlyArray<Subscription>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SearchIndexResolver<R = SearchIndex, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type QueryResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MentionsResolver<R = MentionList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      MentionsArgs
    >;
    export interface MentionsArgs {
      offset: number | null;
      limit: number | null;
    }

    export type AdvertiserIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type BrandIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type AdvertiserResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type BrandResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CombinedSourceTypeIdsResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ScheduledJobsResolver<R = ScheduledJobList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ScheduledJobsArgs
    >;
    export interface ScheduledJobsArgs {
      offset: number | null;
      limit: number | null;
    }

    export type SchedulesResolver<R = ScheduledJobList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SchedulesArgs
    >;
    export interface SchedulesArgs {
      offset: number | null;
      limit: number | null;
    }
  }

  export namespace CognitiveSearchResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      profile?: ProfileResolver<
        Json | null,
        any,
        Context
      > /** A recursive tree structure defining the search criteria */;
      mentionStatusId?: MentionStatusIdResolver<
        string | null,
        any,
        Context
      > /** ID of the mention status to set on each mention generated as a resultof a match against this search */;
      mentionStatus?: MentionStatusResolver<
        MentionStatus | null,
        any,
        Context
      > /** The mention status to set on each mention generated as a resultof a match against this search */;
      query?: QueryResolver<
        Json | null,
        any,
        Context
      > /** The raw query. Read-only and server-generated based on the search profile. */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ProfileResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MentionStatusIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MentionStatusResolver<R = MentionStatus | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type QueryResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace MentionStatusResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      name?: NameResolver<string, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace SubscriptionResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      organizationId?: OrganizationIdResolver<string, any, Context>;
      objectType?: ObjectTypeResolver<SubscriptionObjectType, any, Context>;
      frequency?: FrequencyResolver<SubscriptionFrequency, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      isActive?: IsActiveResolver<boolean, any, Context>;
      targetId?: TargetIdResolver<
        string,
        any,
        Context
      > /** The ID of the object on which this subscription is set,such as a watchlist ID. */;
      scheduledTime?: ScheduledTimeResolver<Time | null, any, Context> /** Scheduled time of day */;
      scheduledTimeZone?: ScheduledTimeZoneResolver<string | null, any, Context> /** Time zone of the scheduled time */;
      scheduledDay?: ScheduledDayResolver<DayOfWeek | null, any, Context> /** Scheduled day of the week */;
      jsondata?: JsondataResolver<Json | null, any, Context>;
      contact?: ContactResolver<SubscriptionContact, any, Context>;
      unsubscribeHash?: UnsubscribeHashResolver<string | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ObjectTypeResolver<R = SubscriptionObjectType, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type FrequencyResolver<R = SubscriptionFrequency, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type IsActiveResolver<R = boolean, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TargetIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ScheduledTimeResolver<R = Time | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ScheduledTimeZoneResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ScheduledDayResolver<R = DayOfWeek | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JsondataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ContactResolver<R = SubscriptionContact, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type UnsubscribeHashResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace SubscriptionContactResolvers {
    export interface Resolvers<Context = any> {
      userId?: UserIdResolver<string, any, Context>;
      emailAddress?: EmailAddressResolver<string | null, any, Context>;
      phoneNumber?: PhoneNumberResolver<string | null, any, Context>;
      webhookUri?: WebhookUriResolver<string | null, any, Context>;
    }

    export type UserIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EmailAddressResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PhoneNumberResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type WebhookUriResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace MentionListResolvers {
    export interface Resolvers<Context = any> {
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context>;
      records?: RecordsResolver<ReadonlyArray<Mention> | null, any, Context>;
    }

    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RecordsResolver<R = ReadonlyArray<Mention> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace MentionResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      organizationId?: OrganizationIdResolver<string, any, Context>;
      sourceTypeId?: SourceTypeIdResolver<string | null, any, Context>;
      sourceId?: SourceIdResolver<string | null, any, Context>;
      scheduleId?: ScheduleIdResolver<string | null, any, Context>;
      mediaId?: MediaIdResolver<string | null, any, Context>;
      advertiserId?: AdvertiserIdResolver<string | null, any, Context>;
      brandId?: BrandIdResolver<string | null, any, Context>;
      campaignId?: CampaignIdResolver<string | null, any, Context>;
      watchlistId?: WatchlistIdResolver<string | null, any, Context>;
      statusId?: StatusIdResolver<string | null, any, Context>;
      complianceStatusId?: ComplianceStatusIdResolver<string | null, any, Context>;
      spotTypeId?: SpotTypeIdResolver<string | null, any, Context>;
      audienceMarketCount?: AudienceMarketCountResolver<number | null, any, Context>;
      audienceAffiliateCount?: AudienceAffiliateCountResolver<number | null, any, Context>;
      mentionHitCount?: MentionHitCountResolver<number | null, any, Context>;
      audience?: AudienceResolver<number | null, any, Context>;
      mentionRating?: MentionRatingResolver<number | null, any, Context>;
      isMatch?: IsMatchResolver<boolean | null, any, Context>;
      mentionDate?: MentionDateResolver<DateTime | null, any, Context>;
      metadata?: MetadataResolver<Json | null, any, Context>;
      mentionSnippets?: MentionSnippetsResolver<ReadonlyArray<MentionSnippets | null> | null, any, Context>;
      userSnippets?: UserSnippetsResolver<ReadonlyArray<MentionUserSnippets | null> | null, any, Context>;
      adCreative?: AdCreativeResolver<Json | null, any, Context>;
      fingerprint?: FingerprintResolver<Json | null, any, Context>;
      cognitiveEngineResults?: CognitiveEngineResultsResolver<Json | null, any, Context>;
      comments?: CommentsResolver<MentionCommentList | null, any, Context>;
      hash?: HashResolver<string | null, any, Context>;
      hitStartDateTime?: HitStartDateTimeResolver<DateTime | null, any, Context>;
      hitEndDateTime?: HitEndDateTimeResolver<DateTime | null, any, Context>;
      endDateTime?: EndDateTimeResolver<DateTime | null, any, Context>;
      scheduledJob?: ScheduledJobResolver<ScheduledJob | null, any, Context>;
      temporalDataObject?: TemporalDataObjectResolver<TemporalDataObject | null, any, Context>;
      organization?: OrganizationResolver<Organization, any, Context>;
      watchlist?: WatchlistResolver<Watchlist | null, any, Context>;
      advertiser?: AdvertiserResolver<Json | null, any, Context>;
      brand?: BrandResolver<Json | null, any, Context>;
      queryTerm?: QueryTermResolver<string | null, any, Context>;
      ratings?: RatingsResolver<MentionRatingList | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceTypeIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ScheduleIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MediaIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type AdvertiserIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type BrandIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CampaignIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type WatchlistIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StatusIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ComplianceStatusIdResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SpotTypeIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type AudienceMarketCountResolver<R = number | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type AudienceAffiliateCountResolver<R = number | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type MentionHitCountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type AudienceResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MentionRatingResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IsMatchResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MentionDateResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MetadataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MentionSnippetsResolver<
      R = ReadonlyArray<MentionSnippets | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type UserSnippetsResolver<
      R = ReadonlyArray<MentionUserSnippets | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type AdCreativeResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type FingerprintResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CognitiveEngineResultsResolver<R = Json | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CommentsResolver<R = MentionCommentList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type HashResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type HitStartDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type HitEndDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EndDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ScheduledJobResolver<R = ScheduledJob | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type TemporalDataObjectResolver<R = TemporalDataObject | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OrganizationResolver<R = Organization, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type WatchlistResolver<R = Watchlist | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type AdvertiserResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type BrandResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type QueryTermResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RatingsResolver<R = MentionRatingList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      RatingsArgs
    >;
    export interface RatingsArgs {
      userId: string | null;
    }
  }

  export namespace MentionSnippetsResolvers {
    export interface Resolvers<Context = any> {
      text?: TextResolver<string | null, any, Context>;
      startTime?: StartTimeResolver<number | null, any, Context>;
      endTime?: EndTimeResolver<number | null, any, Context>;
      hits?: HitsResolver<ReadonlyArray<MentionHit | null> | null, any, Context>;
    }

    export type TextResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StartTimeResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EndTimeResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type HitsResolver<R = ReadonlyArray<MentionHit | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace MentionHitResolvers {
    export interface Resolvers<Context = any> {
      queryTerm?: QueryTermResolver<string | null, any, Context>;
      startTime?: StartTimeResolver<number | null, any, Context>;
      endTime?: EndTimeResolver<number | null, any, Context>;
    }

    export type QueryTermResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StartTimeResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EndTimeResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace MentionUserSnippetsResolvers {
    export interface Resolvers<Context = any> {
      text?: TextResolver<string | null, any, Context>;
      startTime?: StartTimeResolver<number | null, any, Context>;
      endTime?: EndTimeResolver<number | null, any, Context>;
      transcriptStartDate?: TranscriptStartDateResolver<string | null, any, Context>;
      transcriptEndDate?: TranscriptEndDateResolver<string | null, any, Context>;
    }

    export type TextResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StartTimeResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EndTimeResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TranscriptStartDateResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type TranscriptEndDateResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace MentionCommentListResolvers {
    export interface Resolvers<Context = any> {
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context>;
      records?: RecordsResolver<ReadonlyArray<MentionComment | null> | null, any, Context>;
    }

    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RecordsResolver<
      R = ReadonlyArray<MentionComment | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
  }

  export namespace MentionCommentResolvers {
    export interface Resolvers<Context = any> {
      commentId?: CommentIdResolver<string, any, Context>;
      mentionId?: MentionIdResolver<string | null, any, Context>;
      userId?: UserIdResolver<string | null, any, Context>;
      firstName?: FirstNameResolver<string | null, any, Context>;
      lastName?: LastNameResolver<string | null, any, Context>;
      userImage?: UserImageResolver<string | null, any, Context>;
      commentText?: CommentTextResolver<string | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
    }

    export type CommentIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MentionIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type UserIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type FirstNameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LastNameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type UserImageResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CommentTextResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace ScheduledJobResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      organizationId?: OrganizationIdResolver<string | null, any, Context>;
      organization?: OrganizationResolver<
        Organization | null,
        any,
        Context
      > /** Organization that owns this scheduled job */;
      name?: NameResolver<string | null, any, Context>;
      description?: DescriptionResolver<string | null, any, Context>;
      startDateTime?: StartDateTimeResolver<DateTime | null, any, Context>;
      stopDateTime?: StopDateTimeResolver<DateTime | null, any, Context>;
      jobPipelineIds?: JobPipelineIdsResolver<ReadonlyArray<string> | null, any, Context>;
      jobPipelines?: JobPipelinesResolver<JobPipelineList, any, Context>;
      jobTemplateIds?: JobTemplateIdsResolver<ReadonlyArray<string> | null, any, Context>;
      jobTemplates?: JobTemplatesResolver<JobTemplateList, any, Context>;
      allJobTemplates?: AllJobTemplatesResolver<
        JobTemplateList,
        any,
        Context
      > /** Retrieve the complete set of job templates associated with thisscheduled job, including those that are associated through a jobpipeline. */;
      primarySourceId?: PrimarySourceIdResolver<
        string | null,
        any,
        Context
      > /** The ID of the primary source on this scheduled job, if applicable.This is based on the payloads of the tasks that are invoked forthis scheduled job. */;
      primarySource?: PrimarySourceResolver<
        Source | null,
        any,
        Context
      > /** The primary source. See `primarySourceId` above. */;
      jobs?: JobsResolver<JobList, any, Context>;
      sources?: SourcesResolver<
        SourceList | null,
        any,
        Context
      > /** Get a list of sources that are usedby engine configurations that referencethis schedule through the schedule -> job -> task relationship. */;
      parts?: PartsResolver<ReadonlyArray<SchedulePart> | null, any, Context>;
      isActive?: IsActiveResolver<boolean, any, Context>;
      runMode?: RunModeResolver<RunMode, any, Context>;
      details?: DetailsResolver<Json | null, any, Context>;
      detailsSchemaId?: DetailsSchemaIdResolver<string | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      contentTemplates?: ContentTemplatesResolver<
        ReadonlyArray<ScheduledJobContentTemplate>,
        any,
        Context
      > /** List of schema-controlled content templates attachedto this scheduled job */;
      collaborators?: CollaboratorsResolver<
        ScheduledJobCollaboratorList,
        any,
        Context
      > /** Permissions granted to other organizations. Only the source ownercan view or edit this field. */;
      isPublic?: IsPublicResolver<
        boolean | null,
        any,
        Context
      > /** A public scheduled job can be viewed and launched byusers from any organization. By default, scheduled jobs areprivate and can only be viewed or launched by the owning organizationand organizations that the owner has explicitly shared them with.Only Veritone administrators can create public scheduled jobs. */;
      permission?: PermissionResolver<
        ScheduledJobPermission | null,
        any,
        Context
      > /** The user's permission on this scheduled job */;
      primarySourceTypeId?: PrimarySourceTypeIdResolver<string | null, any, Context>;
      primarySourceType?: PrimarySourceTypeResolver<SourceType | null, any, Context>;
      ingestionStatusId?: IngestionStatusIdResolver<string | null, any, Context>;
      ingestionStatus?: IngestionStatusResolver<string | null, any, Context>;
      affiliates?: AffiliatesResolver<ProgramAffiliateList, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StartDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StopDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JobPipelineIdsResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type JobPipelinesResolver<R = JobPipelineList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      JobPipelinesArgs
    >;
    export interface JobPipelinesArgs {
      offset: number | null;
      limit: number | null;
    }

    export type JobTemplateIdsResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type JobTemplatesResolver<R = JobTemplateList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      JobTemplatesArgs
    >;
    export interface JobTemplatesArgs {
      offset: number | null;
      limit: number | null;
    }

    export type AllJobTemplatesResolver<R = JobTemplateList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      AllJobTemplatesArgs
    >;
    export interface AllJobTemplatesArgs {
      offset: number | null;
      limit: number | null;
    }

    export type PrimarySourceIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PrimarySourceResolver<R = Source | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JobsResolver<R = JobList, Parent = any, Context = any> = Resolver<R, Parent, Context, JobsArgs>;
    export interface JobsArgs {
      targetId: string | null /** Optionally, specify a TDO ID to filter by job target */;
      clusterId: string | null /** Optionally, specify a cluster ID to filter by cluster */;
      orderBy: ReadonlyArray<
        JobSortField
      > | null /** Provide sort information. The default is to sort bycreatedDateTime descending. */;
      dateTimeFilter: ReadonlyArray<JobDateTimeFilter> | null /** Optionally, specify filters on date/time fields */;
      status: ReadonlyArray<JobStatusFilter> | null /** Provide a list of status strings to filter by status */;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify the maximum number of results to included in this response, or page size. */;
    }

    export type SourcesResolver<R = SourceList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SourcesArgs
    >;
    export interface SourcesArgs {
      offset: number | null;
      limit: number | null;
    }

    export type PartsResolver<R = ReadonlyArray<SchedulePart> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type IsActiveResolver<R = boolean, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RunModeResolver<R = RunMode, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DetailsResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DetailsSchemaIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ContentTemplatesResolver<
      R = ReadonlyArray<ScheduledJobContentTemplate>,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type CollaboratorsResolver<R = ScheduledJobCollaboratorList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type IsPublicResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PermissionResolver<R = ScheduledJobPermission | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type PrimarySourceTypeIdResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type PrimarySourceTypeResolver<R = SourceType | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type IngestionStatusIdResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type IngestionStatusResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type AffiliatesResolver<R = ProgramAffiliateList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace JobPipelineListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<JobPipeline>, any, Context>;
      count?: CountResolver<number, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<JobPipeline>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CountResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace JobPipelineResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context> /** Unique ID of this job pipeline */;
      jobTemplates?: JobTemplatesResolver<
        JobTemplateList | null,
        any,
        Context
      > /** List of job templates associated with this job pipeline */;
      organizationId?: OrganizationIdResolver<
        string | null,
        any,
        Context
      > /** ID of the organization that owns this job pipeline */;
      organization?: OrganizationResolver<
        Organization | null,
        any,
        Context
      > /** The organization that owns this job pipeline */;
      isPublic?: IsPublicResolver<
        boolean,
        any,
        Context
      > /** Indicates whether or not this job pipeline is public. If so, it canbe viewed and used, but not modified, by all organizations. */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JobTemplatesResolver<R = JobTemplateList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OrganizationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type IsPublicResolver<R = boolean, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace JobTemplateListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<JobTemplate>, any, Context>;
      count?: CountResolver<number, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<JobTemplate>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CountResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** A job template is a reusable template for job creation. */
  export namespace JobTemplateResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context> /** The object ID */;
      createdDateTime?: CreatedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time this job template was created */;
      modifiedDateTime?: ModifiedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time this job template was last modified */;
      taskTemplates?: TaskTemplatesResolver<
        TaskTemplateList,
        any,
        Context
      > /** Task templates associated with this job template */;
      jobPipelineId?: JobPipelineIdResolver<
        string | null,
        any,
        Context
      > /** Job pipeline ID that this template belongs to, if there is one */;
      jobPipeline?: JobPipelineResolver<
        JobPipeline | null,
        any,
        Context
      > /** Job pipeline that this template belongs to, if there is one */;
      jobPipelineStage?: JobPipelineStageResolver<
        number | null,
        any,
        Context
      > /** Job pipeline stage. Defined only if this template belongs to a job pipeline. */;
      clusterId?: ClusterIdResolver<string | null, any, Context> /** Target execution cluster ID */;
      skipDecider?: SkipDeciderResolver<boolean | null, any, Context>;
      jobConfig?: JobConfigResolver<
        Json | null,
        any,
        Context
      > /** Optional configuration data for jobs launched from the template.A schema may be enforced over the data stored here.Used for top-level information about the job that does not fit ona specific task template. */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type TaskTemplatesResolver<R = TaskTemplateList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      TaskTemplatesArgs
    >;
    export interface TaskTemplatesArgs {
      engineType: ReadonlyArray<EngineTypeFilter> | null;
      engineId: string | null;
      offset: number | null;
      limit: number | null;
    }

    export type JobPipelineIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JobPipelineResolver<R = JobPipeline | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JobPipelineStageResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ClusterIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SkipDeciderResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JobConfigResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace TaskTemplateListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<TaskTemplate>, any, Context>;
      count?: CountResolver<number, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<TaskTemplate>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CountResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace TaskTemplateResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      engineId?: EngineIdResolver<string | null, any, Context>;
      engine?: EngineResolver<Engine | null, any, Context>;
      engineConfigId?: EngineConfigIdResolver<string | null, any, Context>;
      engineConfig?: EngineConfigResolver<EngineConfiguration | null, any, Context>;
      executionLocationId?: ExecutionLocationIdResolver<string | null, any, Context>;
      executionLocation?: ExecutionLocationResolver<ExecutionLocation | null, any, Context>;
      jobTemplateId?: JobTemplateIdResolver<string | null, any, Context>;
      jobTemplate?: JobTemplateResolver<JobTemplate | null, any, Context>;
      payload?: PayloadResolver<Json | null, any, Context>;
      payloadString?: PayloadStringResolver<string | null, any, Context>;
      parentTaskId?: ParentTaskIdResolver<string | null, any, Context>;
      parentTask?: ParentTaskResolver<Task | null, any, Context>;
      childTaskIds?: ChildTaskIdsResolver<ReadonlyArray<string>, any, Context>;
      childTasks?: ChildTasksResolver<TaskTemplateList, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EngineIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EngineResolver<R = Engine | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EngineConfigIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EngineConfigResolver<R = EngineConfiguration | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ExecutionLocationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ExecutionLocationResolver<R = ExecutionLocation | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type JobTemplateIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JobTemplateResolver<R = JobTemplate | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PayloadResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PayloadStringResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ParentTaskIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ParentTaskResolver<R = Task | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ChildTaskIdsResolver<R = ReadonlyArray<string>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ChildTasksResolver<R = TaskTemplateList, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace EngineConfigurationResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      credentials?: CredentialsResolver<ReadonlyArray<ExternalCredential> | null, any, Context>;
      sourceId?: SourceIdResolver<string | null, any, Context>;
      source?: SourceResolver<Source | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CredentialsResolver<
      R = ReadonlyArray<ExternalCredential> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type SourceIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceResolver<R = Source | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace ExternalCredentialResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      sourceTypeId?: SourceTypeIdResolver<string | null, any, Context>;
      sourceType?: SourceTypeResolver<SourceType | null, any, Context>;
      data?: DataResolver<StructuredData | null, any, Context>;
      dataId?: DataIdResolver<string | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceTypeIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceTypeResolver<R = SourceType | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DataResolver<R = StructuredData | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DataIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** A source type represents a category of sources that share commonattributes, such as "TV station" or "Real-time camera feed". */
  export namespace SourceTypeResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context> /** Unique ID of this source type */;
      name?: NameResolver<string, any, Context> /** A name for this source type */;
      organizationId?: OrganizationIdResolver<string | null, any, Context>;
      isPublic?: IsPublicResolver<boolean | null, any, Context>;
      sourceSchemaId?: SourceSchemaIdResolver<
        string | null,
        any,
        Context
      > /** The ID of an optional schema for instances (sources) ofthis source type */;
      iconClass?: IconClassResolver<string | null, any, Context> /** The icon representing the type of source */;
      sourceSchema?: SourceSchemaResolver<
        Schema | null,
        any,
        Context
      > /** The schema object used to validate details for instances (sources)of this source type */;
      credentialSchemaId?: CredentialSchemaIdResolver<
        string | null,
        any,
        Context
      > /** The ID of an optional schema for credentials associated withsources of this type. */;
      credentialSchema?: CredentialSchemaResolver<
        Schema | null,
        any,
        Context
      > /** The schema used to validate credentials associated with sourcesof this type. */;
      createdDateTime?: CreatedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time this object was created. */;
      modifiedDateTime?: ModifiedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time this object was last modified */;
      credentialType?: CredentialTypeResolver<CredentialType | null, any, Context>;
      isLive?: IsLiveResolver<
        boolean | null,
        any,
        Context
      > /** Indicates whether or not the source is "live", such as a camera feed */;
      requiresScanPipeline?: RequiresScanPipelineResolver<
        boolean | null,
        any,
        Context
      > /** Indicates whether the source requires a scan job pipeline */;
      supportedRunModes?: SupportedRunModesResolver<ReadonlyArray<RunMode>, any, Context>;
      categoryId?: CategoryIdResolver<
        string,
        any,
        Context
      > /** The source type category ID for this source type.Used primarily by Veritone platform components. */;
      category?: CategoryResolver<
        SourceTypeCategory,
        any,
        Context
      > /** The source type category for this source type.Used primarily by Veritone platform components. */;
      sourceFormats?: SourceFormatsResolver<
        ReadonlyArray<string>,
        any,
        Context
      > /** List of source formats applicable to this source type.Only applies to certain source types; many will have anempty list. */;
      programFormats?: ProgramFormatsResolver<
        ReadonlyArray<string>,
        any,
        Context
      > /** List of program formats applicable to this source type.Only applies to certain source types; many will have anempty list. */;
      sources?: SourcesResolver<SourceList, any, Context> /** Sources created under this source type */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IsPublicResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceSchemaIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IconClassResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceSchemaResolver<R = Schema | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CredentialSchemaIdResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CredentialSchemaResolver<R = Schema | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CredentialTypeResolver<R = CredentialType | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type IsLiveResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RequiresScanPipelineResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SupportedRunModesResolver<R = ReadonlyArray<RunMode>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CategoryIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CategoryResolver<R = SourceTypeCategory, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceFormatsResolver<R = ReadonlyArray<string>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ProgramFormatsResolver<R = ReadonlyArray<string>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SourcesResolver<R = SourceList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SourcesArgs
    >;
    export interface SourcesArgs {
      id: ReadonlyArray<string> | null /** Optionally, provide a list of IDs to retrieve sources by ID */;
      name:
        | string
        | null /** Provide a name or partial name value to filter by name.The `nameMatch` parameter can be used to determine the stringmatch strategy used in the filter. Default is "starts with".Note that all matching is case-insensitive. */;
      nameMatch: StringMatch | null /** String matching strategy. Default is "starts with". */;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Specify maximum number of results to retrieve in this result. Page size. */;
      hasContentTemplates:
        | boolean
        | null /** Set this flag to true or false to return only sources that do or donot have content templates associated with them.The default is neither (do not filter on the presence of content templates). */;
      includePublic:
        | boolean
        | null /** Set this flag to true to include public sources or false to includeonly sources owned by theuser's org, not public sources.Public sources owned by the caller's org will always be returned. */;
      correlationSchemaId:
        | string
        | null /** Provide a correlation schama ID to filter for sources that correlate using specified schema. */;
      orderBy: ReadonlyArray<
        SourceSortField
      > | null /** Provide optional sort information. If not provided, a default sortby createdDateTime descending will be applied. */;
    }
  }
  /** Source type categories are managed by Veritone. */
  export namespace SourceTypeCategoryResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      name?: NameResolver<string, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace SourceListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<Source>, any, Context>;
      count?: CountResolver<number, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<Source>, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** A source represents a source of data and is used by adapters to ingestdata into the platform for use by an engine workflow. */
  export namespace SourceResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context> /** Unique ID of this source */;
      sourceTypeId?: SourceTypeIdResolver<string, any, Context> /** ID of the source type for this source. */;
      sourceType?: SourceTypeResolver<SourceType | null, any, Context> /** The source type for this source */;
      name?: NameResolver<string, any, Context> /** A name for this source */;
      details?: DetailsResolver<
        Json | null,
        any,
        Context
      > /** Metadata associated with this source. The schema for this data isspecific to the source type and controlled by a schema. */;
      isPublic?: IsPublicResolver<
        boolean,
        any,
        Context
      > /** Indicates whether this source is public and available to all organizationsor restricted to the organization that owns id. */;
      organizationId?: OrganizationIdResolver<string, any, Context> /** ID of the organization that owns this source */;
      organization?: OrganizationResolver<
        Organization | null,
        any,
        Context
      > /** The organization that owns this source */;
      createdDateTime?: CreatedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time this source was created */;
      modifiedDateTime?: ModifiedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time this source was last modified */;
      thumbnailUrl?: ThumbnailUrlResolver<
        string | null,
        any,
        Context
      > /** An optional thumbnail image URL for the source */;
      contentTemplates?: ContentTemplatesResolver<ReadonlyArray<SourceContentTemplate>, any, Context>;
      correlationSchemaId?: CorrelationSchemaIdResolver<
        string | null,
        any,
        Context
      > /** Id of a published data registry schema */;
      correlationSDOId?: CorrelationSdoIdResolver<
        string | null,
        any,
        Context
      > /** Id of a structured data object for the correlationSchemaId */;
      permission?: PermissionResolver<
        SourcePermission,
        any,
        Context
      > /** permission the currently authenticated principal has on this source. */;
      collaborators?: CollaboratorsResolver<
        SourceCollaboratorList,
        any,
        Context
      > /** Permissions granted to other organizations. Only the source ownercan view or edit this field. */;
      state?: StateResolver<
        Json | null,
        any,
        Context
      > /** Current state for the source object. This is controlled bythe adapters that use the source and should not be set byother clients. */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceTypeIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceTypeResolver<R = SourceType | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DetailsResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IsPublicResolver<R = boolean, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ThumbnailUrlResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ContentTemplatesResolver<
      R = ReadonlyArray<SourceContentTemplate>,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type CorrelationSchemaIdResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CorrelationSdoIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PermissionResolver<R = SourcePermission, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CollaboratorsResolver<R = SourceCollaboratorList, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CollaboratorsArgs
    >;
    export interface CollaboratorsArgs {
      orderBy: SourceCollaboratorOrderBy | null;
      orderDirection: OrderDirection | null;
    }

    export type StateResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace SourceContentTemplateResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      sourceId?: SourceIdResolver<string, any, Context>;
      sdoId?: SdoIdResolver<string, any, Context>;
      sdo?: SdoResolver<StructuredData | null, any, Context>;
      schemaId?: SchemaIdResolver<string, any, Context>;
      data?: DataResolver<Json | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SdoIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SdoResolver<R = StructuredData | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SchemaIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace SourceCollaboratorListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<SourceCollaborator>, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<SourceCollaborator>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** A source ACL grants a single organization limited rights to a private source */
  export namespace SourceCollaboratorResolvers {
    export interface Resolvers<Context = any> {
      permission?: PermissionResolver<
        SourcePermission,
        any,
        Context
      > /** The permission granted. Either `viewer` or `editor`. */;
      organizationId?: OrganizationIdResolver<string, any, Context> /** Organization ID the source was shared with */;
      organization?: OrganizationResolver<
        Organization | null,
        any,
        Context
      > /** The organization the source was shared with */;
    }

    export type PermissionResolver<R = SourcePermission, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace ExecutionLocationResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      clusterId?: ClusterIdResolver<string, any, Context>;
      cluster?: ClusterResolver<Cluster, any, Context>;
      nodeId?: NodeIdResolver<string | null, any, Context>;
      node?: NodeResolver<ClusterNode | null, any, Context>;
      data?: DataResolver<Json, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ClusterIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ClusterResolver<R = Cluster, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NodeIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NodeResolver<R = ClusterNode | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DataResolver<R = Json, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace ClusterResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      nodes?: NodesResolver<ReadonlyArray<ClusterNode | null> | null, any, Context>;
      name?: NameResolver<string | null, any, Context>;
      isPublic?: IsPublicResolver<boolean | null, any, Context>;
      type?: TypeResolver<ClusterType | null, any, Context>;
      organizationId?: OrganizationIdResolver<string | null, any, Context>;
      allowedEngines?: AllowedEnginesResolver<ReadonlyArray<string> | null, any, Context>;
      containerTag?: ContainerTagResolver<string | null, any, Context>;
      paused?: PausedResolver<boolean | null, any, Context>;
      memorySizeBytes?: MemorySizeBytesResolver<number | null, any, Context>;
      storageSizeBytes?: StorageSizeBytesResolver<number | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      deletedDateTime?: DeletedDateTimeResolver<DateTime | null, any, Context>;
      cachedDateTime?: CachedDateTimeResolver<DateTime | null, any, Context>;
      default?: DefaultResolver<boolean | null, any, Context>;
      bypassAllowedEngines?: BypassAllowedEnginesResolver<boolean | null, any, Context>;
      collaborators?: CollaboratorsResolver<ClusterCollaboratorList | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NodesResolver<R = ReadonlyArray<ClusterNode | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IsPublicResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TypeResolver<R = ClusterType | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type AllowedEnginesResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ContainerTagResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PausedResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MemorySizeBytesResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StorageSizeBytesResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type DeletedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CachedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DefaultResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type BypassAllowedEnginesResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CollaboratorsResolver<R = ClusterCollaboratorList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace ClusterNodeResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      clusterId?: ClusterIdResolver<string | null, any, Context>;
      cluster?: ClusterResolver<Cluster | null, any, Context>;
      name?: NameResolver<string | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ClusterIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ClusterResolver<R = Cluster | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace ClusterCollaboratorListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<ClusterCollaborator>, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<ClusterCollaborator>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** A source ACL grants a single organization limited rights to a private clusters */
  export namespace ClusterCollaboratorResolvers {
    export interface Resolvers<Context = any> {
      permission?: PermissionResolver<ClusterPermission, any, Context> /** The permission granted. */;
      organizationId?: OrganizationIdResolver<string, any, Context> /** Organization ID the cluster was shared with */;
      organization?: OrganizationResolver<
        Organization | null,
        any,
        Context
      > /** The organization the cluster was shared with */;
    }

    export type PermissionResolver<R = ClusterPermission, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace JobListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<Job | null> | null, any, Context> /** Jobs retrieved */;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<
        number,
        any,
        Context
      > /** Maximum number of results that were retrieved in this query; page size */;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<R = ReadonlyArray<Job | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace JobResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context> /** ID of the job */;
      name?: NameResolver<string | null, any, Context> /** User-provided job name */;
      description?: DescriptionResolver<string | null, any, Context> /** Optional job description */;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      createdBy?: CreatedByResolver<string | null, any, Context>;
      modifiedBy?: ModifiedByResolver<string | null, any, Context>;
      targetId?: TargetIdResolver<
        string | null,
        any,
        Context
      > /** ID of the target object for the job, such as a container or Recording */;
      sourceAssetId?: SourceAssetIdResolver<string | null, any, Context> /** Source asset ID */;
      status?: StatusResolver<
        TaskStatus | null,
        any,
        Context
      > /** Overall job status, as computed from the statuses of its component tasks */;
      tasks?: TasksResolver<TaskList | null, any, Context> /** Tasks the job has or will execute */;
      applicationId?: ApplicationIdResolver<string | null, any, Context> /** Application the job ran under */;
      target?: TargetResolver<TemporalDataObject | null, any, Context> /** Target TemporalDataObject */;
      clusterId?: ClusterIdResolver<
        string | null,
        any,
        Context
      > /** ID of the cluster where this job will be executed */;
      jobConfig?: JobConfigResolver<Json | null, any, Context>;
      templateId?: TemplateIdResolver<
        string | null,
        any,
        Context
      > /** ID of the template from which this job was created, if applicable. */;
      template?: TemplateResolver<
        JobTemplate | null,
        any,
        Context
      > /** The template which this job was created, if applicable. */;
      scheduledJobId?: ScheduledJobIdResolver<
        string | null,
        any,
        Context
      > /** ID of the scheduled job under which this job was created, if applicable. */;
      scheduledJob?: ScheduledJobResolver<
        ScheduledJob | null,
        any,
        Context
      > /** The scheduled job under which this job was created, if applicable. */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CreatedByResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ModifiedByResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TargetIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceAssetIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StatusResolver<R = TaskStatus | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TasksResolver<R = TaskList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      TasksArgs
    >;
    export interface TasksArgs {
      status: ReadonlyArray<TaskStatus> | null /** Specify a list of job status strings to filter by status */;
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Maximum number of results to retrieve in this query */;
      id: string | null /** Specify an ID to retrieve a single specific task */;
      targetId: ReadonlyArray<string | null> | null /** Specify a list of IDs to filter by task target ID */;
      hasSourceAsset: boolean | null;
    }

    export type ApplicationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TargetResolver<R = TemporalDataObject | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ClusterIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JobConfigResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TemplateIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TemplateResolver<R = JobTemplate | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ScheduledJobIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ScheduledJobResolver<R = ScheduledJob | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace TaskListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<Task | null> | null, any, Context>;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<R = ReadonlyArray<Task | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace SchedulePartResolvers {
    export interface Resolvers<Context = any> {
      scheduleType?: ScheduleTypeResolver<ScheduleType, any, Context>;
      scheduledDay?: ScheduledDayResolver<DayOfWeek | null, any, Context>;
      startTime?: StartTimeResolver<Time | null, any, Context>;
      stopTime?: StopTimeResolver<Time | null, any, Context>;
      repeatIntervalUnit?: RepeatIntervalUnitResolver<IntervalUnit | null, any, Context>;
      repeatInterval?: RepeatIntervalResolver<number | null, any, Context>;
      durationSeconds?: DurationSecondsResolver<number | null, any, Context>;
    }

    export type ScheduleTypeResolver<R = ScheduleType, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ScheduledDayResolver<R = DayOfWeek | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StartTimeResolver<R = Time | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StopTimeResolver<R = Time | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RepeatIntervalUnitResolver<R = IntervalUnit | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type RepeatIntervalResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DurationSecondsResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace ScheduledJobContentTemplateResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      scheduledJobId?: ScheduledJobIdResolver<string, any, Context>;
      sdoId?: SdoIdResolver<string, any, Context>;
      sdo?: SdoResolver<StructuredData | null, any, Context>;
      schemaId?: SchemaIdResolver<string, any, Context>;
      data?: DataResolver<Json | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ScheduledJobIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SdoIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SdoResolver<R = StructuredData | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SchemaIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace ScheduledJobCollaboratorListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<ScheduledJobCollaborator>, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<ScheduledJobCollaborator>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** A source ACL grants a single organization limited rights to a private source */
  export namespace ScheduledJobCollaboratorResolvers {
    export interface Resolvers<Context = any> {
      permission?: PermissionResolver<
        ScheduledJobPermission,
        any,
        Context
      > /** The permission granted. Either `viewer` or `editor`. */;
      organizationId?: OrganizationIdResolver<string, any, Context> /** Organization ID the source was shared with */;
      organization?: OrganizationResolver<
        Organization | null,
        any,
        Context
      > /** The organization the source was shared with */;
    }

    export type PermissionResolver<R = ScheduledJobPermission, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace ProgramAffiliateListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<ProgramAffiliate> | null, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<ProgramAffiliate> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace ProgramAffiliateResolvers {
    export interface Resolvers<Context = any> {
      sourceId?: SourceIdResolver<string, any, Context>;
      source?: SourceResolver<Source | null, any, Context>;
      scheduledJobId?: ScheduledJobIdResolver<string, any, Context>;
      scheduledJob?: ScheduledJobResolver<ScheduledJob | null, any, Context>;
      scheduledDay?: ScheduledDayResolver<DayOfWeek | null, any, Context>;
      startDateTime?: StartDateTimeResolver<DateTime | null, any, Context>;
      stopDateTime?: StopDateTimeResolver<DateTime | null, any, Context>;
      startTime?: StartTimeResolver<Time | null, any, Context>;
      stopTime?: StopTimeResolver<Time | null, any, Context>;
      status?: StatusResolver<string | null, any, Context>;
    }

    export type SourceIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceResolver<R = Source | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ScheduledJobIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ScheduledJobResolver<R = ScheduledJob | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ScheduledDayResolver<R = DayOfWeek | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StartDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StopDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StartTimeResolver<R = Time | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StopTimeResolver<R = Time | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StatusResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace MentionRatingListResolvers {
    export interface Resolvers<Context = any> {
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context>;
      records?: RecordsResolver<ReadonlyArray<MentionRating | null> | null, any, Context>;
    }

    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RecordsResolver<R = ReadonlyArray<MentionRating | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace MentionRatingResolvers {
    export interface Resolvers<Context = any> {
      ratingId?: RatingIdResolver<string, any, Context>;
      mentionId?: MentionIdResolver<string | null, any, Context>;
      userId?: UserIdResolver<string | null, any, Context>;
      ratingValue?: RatingValueResolver<number | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
    }

    export type RatingIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MentionIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type UserIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RatingValueResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace ScheduledJobListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<ScheduledJob>, any, Context>;
      count?: CountResolver<number, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<ScheduledJob>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CountResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace CollectionListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<Collection | null> | null, any, Context>;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit?: LimitResolver<
        number,
        any,
        Context
      > /** Maximum number of results that were retrieved in this query; page size */;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<R = ReadonlyArray<Collection | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace CollectionResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      name?: NameResolver<string, any, Context>;
      imageUrl?: ImageUrlResolver<string | null, any, Context> /** A url to get the collection image */;
      signedImageUrl?: SignedImageUrlResolver<
        string | null,
        any,
        Context
      > /** A sigend url to get the collection image. It will only be signed if it is an s3 url. */;
      ownerId?: OwnerIdResolver<string | null, any, Context>;
      description?: DescriptionResolver<string | null, any, Context>;
      organization?: OrganizationResolver<Organization | null, any, Context>;
      organizationId?: OrganizationIdResolver<string, any, Context>;
      orgSharing?: OrgSharingResolver<boolean | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      programCount?: ProgramCountResolver<number | null, any, Context>;
      itemCount?: ItemCountResolver<number | null, any, Context>;
      typeId?: TypeIdResolver<string | null, any, Context>;
      isActive?: IsActiveResolver<boolean | null, any, Context>;
      widgets?: WidgetsResolver<WidgetList | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ImageUrlResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SignedImageUrlResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OwnerIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrgSharingResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ProgramCountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ItemCountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TypeIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IsActiveResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type WidgetsResolver<R = WidgetList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      WidgetsArgs
    >;
    export interface WidgetsArgs {
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Maximum number of results to retrieve in this query; page size */;
      id: string | null;
    }
  }

  export namespace WidgetListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<Widget | null> | null, any, Context>;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit?: LimitResolver<
        number,
        any,
        Context
      > /** Maximum number of results that were retrieved in this query; page size */;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<R = ReadonlyArray<Widget | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace WidgetResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string | null, any, Context>;
      name?: NameResolver<string | null, any, Context>;
      organization?: OrganizationResolver<Organization | null, any, Context>;
      organizationId?: OrganizationIdResolver<string | null, any, Context>;
      collection?: CollectionResolver<Collection | null, any, Context>;
      collectionId?: CollectionIdResolver<string, any, Context>;
      displayCollectionName?: DisplayCollectionNameResolver<boolean | null, any, Context>;
      displayTranscription?: DisplayTranscriptionResolver<boolean | null, any, Context>;
      width?: WidthResolver<number | null, any, Context>;
      numberOfMentionsToShow?: NumberOfMentionsToShowResolver<number | null, any, Context>;
      adScript?: AdScriptResolver<string | null, any, Context>;
      seoTags?: SeoTagsResolver<ReadonlyArray<string | null> | null, any, Context>;
      backgroundColor?: BackgroundColorResolver<string | null, any, Context>;
      borderColor?: BorderColorResolver<string | null, any, Context>;
      textColor?: TextColorResolver<string | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
    }

    export type IdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OrganizationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CollectionResolver<R = Collection | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CollectionIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DisplayCollectionNameResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type DisplayTranscriptionResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type WidthResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NumberOfMentionsToShowResolver<R = number | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type AdScriptResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SeoTagsResolver<R = ReadonlyArray<string | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type BackgroundColorResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type BorderColorResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TextColorResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }
  /** Analytics Dashboards */
  export namespace DashboardResolvers {
    export interface Resolvers<Context = any> {
      index?: IndexResolver<number | null, any, Context> /** The order in which to display the dashboard. */;
      title?: TitleResolver<string | null, any, Context>;
      description?: DescriptionResolver<string | null, any, Context>;
      active?: ActiveResolver<boolean | null, any, Context> /** The status of the dashboard */;
      filters?: FiltersResolver<
        ReadonlyArray<string | null> | null,
        any,
        Context
      > /** The filters that can be applied on the dashboard. Typically watchlists. */;
      type?: TypeResolver<string | null, any, Context>;
      qlikAppId?: QlikAppIdResolver<
        string | null,
        any,
        Context
      > /** Vendor specific identifier for Qlik applications */;
      qlikSheetId?: QlikSheetIdResolver<string | null, any, Context> /** Vendor specific identifier for Qlik sheet */;
      thumbnail?: ThumbnailResolver<string | null, any, Context>;
    }

    export type IndexResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TitleResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ActiveResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type FiltersResolver<R = ReadonlyArray<string | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type TypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type QlikAppIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type QlikSheetIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ThumbnailResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace BuildListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<Build | null> | null, any, Context>;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<R = ReadonlyArray<Build | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace BuildResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      name?: NameResolver<string | null, any, Context>;
      description?: DescriptionResolver<string | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context> /** Date and date build was created */;
      modifiedDateTime?: ModifiedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Date and time build was last modified */;
      createdBy?: CreatedByResolver<string | null, any, Context>;
      modifiedBy?: ModifiedByResolver<string | null, any, Context>;
      engineId?: EngineIdResolver<string, any, Context> /** The ID of the engine this build is for */;
      engine?: EngineResolver<Engine | null, any, Context> /** The engine this build is for */;
      price?: PriceResolver<number | null, any, Context>;
      validateUri?: ValidateUriResolver<string | null, any, Context>;
      executeUri?: ExecuteUriResolver<string | null, any, Context>;
      status?: StatusResolver<BuildStatus | null, any, Context> /** Engine build status: */;
      dockerImage?: DockerImageResolver<
        string | null,
        any,
        Context
      > /** URL to the Docker image for this engine build, if applicable */;
      runtime?: RuntimeResolver<Json | null, any, Context>;
      version?: VersionResolver<string | null, any, Context>;
      report?: ReportResolver<Json | null, any, Context>;
      manifest?: ManifestResolver<
        Json | null,
        any,
        Context
      > /** The entire manifest, supplied by the engine developer, that describesthe engine's capabilities and requirements and is used by the platformsystem to build and execute the engine. */;
      preferredInputFormat?: PreferredInputFormatResolver<string | null, any, Context>;
      supportedInputFormats?: SupportedInputFormatsResolver<ReadonlyArray<string> | null, any, Context>;
      outputFormats?: OutputFormatsResolver<ReadonlyArray<string> | null, any, Context>;
      supportedSourceTypes?: SupportedSourceTypesResolver<
        ReadonlyArray<string> | null,
        any,
        Context
      > /** List of IDs of source types that the engine supports.Applies only to adapter engines that ingest data from a source.Will be a list of IDs of SourceType objects. */;
      primaryAction?: PrimaryActionResolver<
        BuildUpdateAction | null,
        any,
        Context
      > /** Used to give a default action choice */;
      secondaryActions?: SecondaryActionsResolver<
        ReadonlyArray<BuildUpdateAction | null> | null,
        any,
        Context
      > /** Used to give secondary action choices */;
      validStateActions?: ValidStateActionsResolver<
        ReadonlyArray<BuildUpdateAction | null> | null,
        any,
        Context
      > /** Contains all valid action choices */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CreatedByResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ModifiedByResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EngineIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EngineResolver<R = Engine | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PriceResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ValidateUriResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ExecuteUriResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StatusResolver<R = BuildStatus | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DockerImageResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RuntimeResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type VersionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ReportResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ManifestResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PreferredInputFormatResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SupportedInputFormatsResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OutputFormatsResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SupportedSourceTypesResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type PrimaryActionResolver<R = BuildUpdateAction | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SecondaryActionsResolver<
      R = ReadonlyArray<BuildUpdateAction | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type ValidStateActionsResolver<
      R = ReadonlyArray<BuildUpdateAction | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
  }
  /** Represents a custom input field on an engine. */
  export namespace EngineFieldResolvers {
    export interface Resolvers<Context = any> {
      max?: MaxResolver<
        number | null,
        any,
        Context
      > /** Maximum value, in float format. Applies only to fields of type Number. */;
      min?: MinResolver<
        number | null,
        any,
        Context
      > /** Minimum value, in float format. Applies only to fields of type Number. */;
      step?: StepResolver<
        number | null,
        any,
        Context
      > /** Numerical step by which the value should be incremented or decremented inthe user interface, in float format. Applies only to fields of type Number. */;
      type?: TypeResolver<EngineFieldType, any, Context> /** The field type. */;
      info?: InfoResolver<
        string | null,
        any,
        Context
      > /** General information about the field, such as a description. */;
      name?: NameResolver<string, any, Context> /** A machine-readable name, or key, for the field. */;
      label?: LabelResolver<string | null, any, Context> /** A human-readable label for the field. */;
      options?: OptionsResolver<
        ReadonlyArray<EngineFieldPicklistOption> | null,
        any,
        Context
      > /** A set of allowed values for the field. Applies only to fields of typepicklist or multi-picklist. */;
      defaultValue?: DefaultValueResolver<
        string | null,
        any,
        Context
      > /** An optional default value for the field. Taken in string format, butapplies to all field types. */;
      defaultValues?: DefaultValuesResolver<
        ReadonlyArray<string> | null,
        any,
        Context
      > /** Optional default values to apply to a picklist. This fieldshould only be set for a field of type multi-picklist. */;
    }

    export type MaxResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MinResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StepResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TypeResolver<R = EngineFieldType, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type InfoResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LabelResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OptionsResolver<
      R = ReadonlyArray<EngineFieldPicklistOption> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type DefaultValueResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DefaultValuesResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }
  /** Represents one allowed option in a picklist. */
  export namespace EngineFieldPicklistOptionResolvers {
    export interface Resolvers<Context = any> {
      key?: KeyResolver<
        string,
        any,
        Context
      > /** The human-readable label for the option, such as "English-US" for a language selector. */;
      value?: ValueResolver<
        string,
        any,
        Context
      > /** The machine-readable value that will be sent in the engine payload, such as"en-us" for a language selector. */;
    }

    export type KeyResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ValueResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace EngineTaskMetricsResolvers {
    export interface Resolvers<Context = any> {
      cancelledCount?: CancelledCountResolver<number | null, any, Context>;
      completedCount?: CompletedCountResolver<number | null, any, Context>;
      failedCount?: FailedCountResolver<number | null, any, Context>;
      pendingCount?: PendingCountResolver<number | null, any, Context>;
      queuedCount?: QueuedCountResolver<number | null, any, Context>;
      runningCount?: RunningCountResolver<number | null, any, Context>;
    }

    export type CancelledCountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CompletedCountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type FailedCountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PendingCountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type QueuedCountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RunningCountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace TaskLogResolvers {
    export interface Resolvers<Context = any> {
      uri?: UriResolver<string | null, any, Context> /** URI to the task log file */;
      text?: TextResolver<
        string | null,
        any,
        Context
      > /** The entire text contents of the log file. Note that this value can long. */;
      jsondata?: JsondataResolver<
        Json | null,
        any,
        Context
      > /** The log file in JSON form. If the log file contains valid JSON,this field will contain the native structure. If the log file does notcontain valid JSON, this field will contain a single property called`text` with a string value containing the entire log file. */;
    }

    export type UriResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TextResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JsondataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Contains security settings on an asset container */
  export namespace SecurityResolvers {
    export interface Resolvers<Context = any> {
      global?: GlobalResolver<boolean | null, any, Context> /** Whether or not the object is globally visible */;
    }

    export type GlobalResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Describes source information about a TDO. That is,the components and processes that produced it.Each field may or may not have a value, depending onhow the TDO was created. */
  export namespace TdoSourceDataResolvers {
    export interface Resolvers<Context = any> {
      taskId?: TaskIdResolver<string | null, any, Context> /** Task ID, typically of an ingestion task. */;
      task?: TaskResolver<Task | null, any, Context> /** The task object. */;
      sourceId?: SourceIdResolver<string | null, any, Context> /** Ingestion source ID */;
      scheduledJobId?: ScheduledJobIdResolver<
        string | null,
        any,
        Context
      > /** ID of the scheduled job, if any, under which this TDO was created */;
      engineId?: EngineIdResolver<
        string | null,
        any,
        Context
      > /** ID of the engine used in the task that created this TDO */;
      engine?: EngineResolver<Engine | null, any, Context> /** The engine used in the task that created this TDO. */;
      scheduledJob?: ScheduledJobResolver<
        ScheduledJob | null,
        any,
        Context
      > /** The scheduled job under which this TDO was created, if any */;
      source?: SourceResolver<Source | null, any, Context> /** The source from which this TDO was created, if any */;
    }

    export type TaskIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TaskResolver<R = Task | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ScheduledJobIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EngineIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EngineResolver<R = Engine | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ScheduledJobResolver<R = ScheduledJob | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SourceResolver<R = Source | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Describes a stream that is available on a TDO */
  export namespace TdoStreamDataResolvers {
    export interface Resolvers<Context = any> {
      uri?: UriResolver<string, any, Context> /** The stream URI */;
      protocol?: ProtocolResolver<string, any, Context> /** The protocol, such as "dash" or "hls" */;
    }

    export type UriResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ProtocolResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace EngineRunListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<EngineRun | null> | null, any, Context>;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<R = ReadonlyArray<EngineRun | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Describes engine run on a TDO with */
  export namespace EngineRunResolvers {
    export interface Resolvers<Context = any> {
      engine?: EngineResolver<Engine | null, any, Context> /** Engine that was run on a TDO */;
      status?: StatusResolver<
        TaskStatus | null,
        any,
        Context
      > /** Engine status derived from the written engine output or task status. See TaskStatus enum for details. */;
      activeTasks?: ActiveTasksResolver<TaskList | null, any, Context> /** All in-flight tasks for the given engine */;
      hasUserEdits?: HasUserEditsResolver<
        boolean | null,
        any,
        Context
      > /** Whether or not the engine run has user edits */;
    }

    export type EngineResolver<R = Engine | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StatusResolver<R = TaskStatus | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ActiveTasksResolver<R = TaskList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ActiveTasksArgs
    >;
    export interface ActiveTasksArgs {
      offset: number | null /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit: number | null /** Maximum number of results to retrieve in this query */;
    }

    export type HasUserEditsResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace CloneRequestListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<CloneRequest | null> | null, any, Context>;
      count?: CountResolver<number | null, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<CloneRequest | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace CloneRequestResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      sourceApplicationId?: SourceApplicationIdResolver<string, any, Context>;
      destinationApplicationId?: DestinationApplicationIdResolver<string, any, Context>;
      numberOfRecordings?: NumberOfRecordingsResolver<number | null, any, Context>;
      numberOfCompletedRecordings?: NumberOfCompletedRecordingsResolver<number | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      status?: StatusResolver<string | null, any, Context>;
      percentage?: PercentageResolver<number | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SourceApplicationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DestinationApplicationIdResolver<R = string, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type NumberOfRecordingsResolver<R = number | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type NumberOfCompletedRecordingsResolver<R = number | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type StatusResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PercentageResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace EngineCategoryListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<EngineCategory> | null, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<EngineCategory> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace LibraryTypeListResolvers {
    export interface Resolvers<Context = any> {
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
      records?: RecordsResolver<ReadonlyArray<LibraryType | null> | null, any, Context>;
    }

    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RecordsResolver<R = ReadonlyArray<LibraryType | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace LibraryTypeResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      label?: LabelResolver<string | null, any, Context>;
      iconClass?: IconClassResolver<string | null, any, Context>;
      entityIdentifierTypes?: EntityIdentifierTypesResolver<
        ReadonlyArray<EntityIdentifierType | null> | null,
        any,
        Context
      >;
      entityTypeName?: EntityTypeNameResolver<string | null, any, Context>;
      entityTypeNamePlural?: EntityTypeNamePluralResolver<string | null, any, Context>;
      entityType?: EntityTypeResolver<EntityType | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LabelResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IconClassResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EntityIdentifierTypesResolver<
      R = ReadonlyArray<EntityIdentifierType | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type EntityTypeNameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EntityTypeNamePluralResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type EntityTypeResolver<R = EntityType | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace EntityTypeResolvers {
    export interface Resolvers<Context = any> {
      name?: NameResolver<string, any, Context>;
      namePlural?: NamePluralResolver<string, any, Context>;
      schema?: SchemaResolver<Json, any, Context>;
    }

    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NamePluralResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SchemaResolver<R = Json, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace LibraryListResolvers {
    export interface Resolvers<Context = any> {
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
      records?: RecordsResolver<ReadonlyArray<Library | null> | null, any, Context>;
    }

    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RecordsResolver<R = ReadonlyArray<Library | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace LibraryResolvers {
    export interface Resolvers<Context = any> {
      createdDateTime?: CreatedDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** Object creation timestamp. Does not change. */;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context> /** Object modification timestamp. */;
      id?: IdResolver<string, any, Context> /** The object's unique ID */;
      createdBy?: CreatedByResolver<string | null, any, Context>;
      modifiedBy?: ModifiedByResolver<string | null, any, Context>;
      description?: DescriptionResolver<string | null, any, Context>;
      name?: NameResolver<string | null, any, Context>;
      properties?: PropertiesResolver<
        ReadonlyArray<Property | null> | null,
        any,
        Context
      > /** Modular metadata in the form of key-value pairs */;
      security?: SecurityResolver<Security | null, any, Context> /** Security settings for the asset container */;
      applicationId?: ApplicationIdResolver<string, any, Context>;
      version?: VersionResolver<number | null, any, Context> /** Library version */;
      organizationId?: OrganizationIdResolver<string | null, any, Context>;
      libraryType?: LibraryTypeResolver<LibraryType | null, any, Context>;
      libraryTypeId?: LibraryTypeIdResolver<string | null, any, Context>;
      coverImageUrl?: CoverImageUrlResolver<string | null, any, Context>;
      engineModels?: EngineModelsResolver<
        LibraryEngineModelList | null,
        any,
        Context
      > /** Retrieve engine models for a library */;
      entities?: EntitiesResolver<EntityList | null, any, Context>;
      collaborators?: CollaboratorsResolver<
        LibraryCollaboratorList | null,
        any,
        Context
      > /** Retrieve collaborators for a library. */;
      summary?: SummaryResolver<LibrarySummary | null, any, Context> /** Aggregated summary data about the library */;
    }

    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedByResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ModifiedByResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PropertiesResolver<R = ReadonlyArray<Property | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SecurityResolver<R = Security | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ApplicationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type VersionResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LibraryTypeResolver<R = LibraryType | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LibraryTypeIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CoverImageUrlResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EngineModelsResolver<R = LibraryEngineModelList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      EngineModelsArgs
    >;
    export interface EngineModelsArgs {
      id: string | null;
    }

    export type EntitiesResolver<R = EntityList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      EntitiesArgs
    >;
    export interface EntitiesArgs {
      id: string | null /** Provide an ID to retrieve a single specific entity. */;
      ids: ReadonlyArray<string> | null;
      isPublished: boolean | null;
      identifierTypeId: string | null;
      name: string | null;
      offset: number | null;
      limit: number | null;
      orderBy: LibraryEntityOrderBy | null;
      orderDirection: OrderDirection | null;
    }

    export type CollaboratorsResolver<R = LibraryCollaboratorList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CollaboratorsArgs
    >;
    export interface CollaboratorsArgs {
      collaboratorOrgId: string | null /** Provide an ID to retrieve collaborators within a specific organization. */;
    }

    export type SummaryResolver<R = LibrarySummary | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace LibraryEngineModelListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<LibraryEngineModel | null> | null, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context>;
    }

    export type RecordsResolver<
      R = ReadonlyArray<LibraryEngineModel | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace LibraryEngineModelResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      engineId?: EngineIdResolver<string, any, Context>;
      engine?: EngineResolver<Engine | null, any, Context>;
      libraryId?: LibraryIdResolver<string, any, Context>;
      library?: LibraryResolver<Library | null, any, Context>;
      libraryVersion?: LibraryVersionResolver<number | null, any, Context>;
      trainJobId?: TrainJobIdResolver<string | null, any, Context>;
      trainStatus?: TrainStatusResolver<LibraryEngineModelTrainStatus, any, Context>;
      dataUrl?: DataUrlResolver<string | null, any, Context>;
      contentType?: ContentTypeResolver<
        string | null,
        any,
        Context
      > /** Content type of the data file pointed to by dataUrl.Will be empty if no data file is attached to the engine model. */;
      jsondata?: JsondataResolver<Json | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type EngineIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EngineResolver<R = Engine | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LibraryIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LibraryResolver<R = Library | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LibraryVersionResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TrainJobIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TrainStatusResolver<R = LibraryEngineModelTrainStatus, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type DataUrlResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ContentTypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JsondataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace EntityListResolvers {
    export interface Resolvers<Context = any> {
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
      records?: RecordsResolver<ReadonlyArray<Entity | null> | null, any, Context>;
    }

    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RecordsResolver<R = ReadonlyArray<Entity | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace EntityResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      name?: NameResolver<string | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      createdBy?: CreatedByResolver<string | null, any, Context>;
      modifiedBy?: ModifiedByResolver<string | null, any, Context>;
      properties?: PropertiesResolver<ReadonlyArray<Property | null> | null, any, Context>;
      libraryId?: LibraryIdResolver<string | null, any, Context>;
      library?: LibraryResolver<Library | null, any, Context>;
      profileImageUrl?: ProfileImageUrlResolver<string | null, any, Context>;
      identifiers?: IdentifiersResolver<EntityIdentifierList | null, any, Context>;
      isPublished?: IsPublishedResolver<boolean | null, any, Context>;
      jsondata?: JsondataResolver<Json | null, any, Context>;
      jsonstring?: JsonstringResolver<string | null, any, Context>;
      summary?: SummaryResolver<EntitySummary | null, any, Context>;
      description?: DescriptionResolver<string | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CreatedByResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ModifiedByResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PropertiesResolver<R = ReadonlyArray<Property | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type LibraryIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LibraryResolver<R = Library | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ProfileImageUrlResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IdentifiersResolver<R = EntityIdentifierList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      IdentifiersArgs
    >;
    export interface IdentifiersArgs {
      id: string | null /** Provide an ID to retrieve a specific entity identifier */;
      identifierTypeId: string | null;
      offset: number | null;
      limit: number | null;
    }

    export type IsPublishedResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JsondataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JsonstringResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SummaryResolver<R = EntitySummary | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace EntityIdentifierListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<EntityIdentifier | null> | null, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context>;
    }

    export type RecordsResolver<
      R = ReadonlyArray<EntityIdentifier | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace EntityIdentifierResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      entityId?: EntityIdResolver<string, any, Context>;
      entity?: EntityResolver<Entity, any, Context>;
      identifierType?: IdentifierTypeResolver<EntityIdentifierType, any, Context>;
      identifierTypeId?: IdentifierTypeIdResolver<string, any, Context>;
      title?: TitleResolver<string | null, any, Context>;
      isPriority?: IsPriorityResolver<boolean | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      url?: UrlResolver<string, any, Context>;
      contentType?: ContentTypeResolver<string, any, Context>;
      jsondata?: JsondataResolver<Json | null, any, Context>;
      jsonstring?: JsonstringResolver<string | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EntityIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EntityResolver<R = Entity, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IdentifierTypeResolver<R = EntityIdentifierType, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type IdentifierTypeIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TitleResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IsPriorityResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type UrlResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ContentTypeResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JsondataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JsonstringResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace EntitySummaryResolvers {
    export interface Resolvers<Context = any> {
      identifierCountsByType?: IdentifierCountsByTypeResolver<Json | null, any, Context>;
    }

    export type IdentifierCountsByTypeResolver<R = Json | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace LibraryCollaboratorListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<LibraryCollaborator | null> | null, any, Context>;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<
      R = ReadonlyArray<LibraryCollaborator | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace LibraryCollaboratorResolvers {
    export interface Resolvers<Context = any> {
      organizationId?: OrganizationIdResolver<string, any, Context>;
      organization?: OrganizationResolver<Organization | null, any, Context>;
      status?: StatusResolver<string | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      permissions?: PermissionsResolver<ReadonlyArray<string | null> | null, any, Context>;
      libraryId?: LibraryIdResolver<string, any, Context>;
      library?: LibraryResolver<Library | null, any, Context>;
    }

    export type OrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type StatusResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type PermissionsResolver<R = ReadonlyArray<string | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type LibraryIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LibraryResolver<R = Library | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace LibrarySummaryResolvers {
    export interface Resolvers<Context = any> {
      entityCount?: EntityCountResolver<number | null, any, Context>;
      unpublishedEntityCount?: UnpublishedEntityCountResolver<number | null, any, Context>;
      lastTrainedVersion?: LastTrainedVersionResolver<number | null, any, Context>;
      lastTrainedDateTime?: LastTrainedDateTimeResolver<DateTime | null, any, Context>;
    }

    export type EntityCountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type UnpublishedEntityCountResolver<R = number | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type LastTrainedVersionResolver<R = number | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type LastTrainedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace OrganizationListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<Organization | null> | null, any, Context>;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** Provide an offset to skip to a certain element in the result, for paging. */;
      limit?: LimitResolver<
        number,
        any,
        Context
      > /** Maximum number of results that were retrieved in this query; page size */;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<R = ReadonlyArray<Organization | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace TokenResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string | null, any, Context> /** The token ID */;
      applicationId?: ApplicationIdResolver<string | null, any, Context>;
      groupId?: GroupIdResolver<string | null, any, Context>;
      json?: JsonResolver<TokenJson | null, any, Context>;
    }

    export type IdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ApplicationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type GroupIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JsonResolver<R = TokenJson | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace TokenJsonResolvers {
    export interface Resolvers<Context = any> {
      rights?: RightsResolver<ReadonlyArray<string | null> | null, any, Context>;
    }

    export type RightsResolver<R = ReadonlyArray<string | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace GroupListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<Group | null> | null, any, Context>;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<
        number,
        any,
        Context
      > /** Maximum number of results that were retrieved in this query; page size */;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<R = ReadonlyArray<Group | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace GroupResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      name?: NameResolver<string | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      applicationId?: ApplicationIdResolver<string, any, Context>;
      createdBy?: CreatedByResolver<User | null, any, Context>;
      modifiedBy?: ModifiedByResolver<User | null, any, Context>;
      organizationId?: OrganizationIdResolver<string, any, Context>;
      organization?: OrganizationResolver<Organization | null, any, Context>;
      jsondata?: JsondataResolver<Json | null, any, Context> /** Freeform metadata in JSON form */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ApplicationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedByResolver<R = User | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ModifiedByResolver<R = User | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type JsondataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Results from a mention or media search.TODO link to format documentation for core-search-server */
  export namespace SearchResultResolvers {
    export interface Resolvers<Context = any> {
      jsondata?: JsondataResolver<Json, any, Context>;
    }

    export type JsondataResolver<R = Json, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace IngestionConfigurationResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      applicationId?: ApplicationIdResolver<string, any, Context>;
      type?: TypeResolver<string | null, any, Context>;
      name?: NameResolver<string | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime | null, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime | null, any, Context>;
      emailAddress?: EmailAddressResolver<string | null, any, Context>;
      job?: JobResolver<Json | null, any, Context>;
      ui?: UiResolver<Json | null, any, Context>;
      jsondata?: JsondataResolver<Json | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ApplicationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ModifiedDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type EmailAddressResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JobResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type UiResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JsondataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace IngestionConfigurationListResolvers {
    export interface Resolvers<Context = any> {
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context>;
      records?: RecordsResolver<ReadonlyArray<IngestionConfiguration | null> | null, any, Context>;
    }

    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RecordsResolver<
      R = ReadonlyArray<IngestionConfiguration | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
  }

  export namespace SchemaPropertyListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<SchemaProperty | null> | null, any, Context>;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<
        number,
        any,
        Context
      > /** Maximum number of results that were retrieved in this query; page size */;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<
      R = ReadonlyArray<SchemaProperty | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace SchemaPropertyResolvers {
    export interface Resolvers<Context = any> {
      dataRegistryId?: DataRegistryIdResolver<string, any, Context>;
      majorVersion?: MajorVersionResolver<number, any, Context>;
      schema?: SchemaResolver<Schema, any, Context>;
      path?: PathResolver<string, any, Context>;
      searchPath?: SearchPathResolver<string, any, Context>;
      type?: TypeResolver<string, any, Context>;
      title?: TitleResolver<string | null, any, Context>;
    }

    export type DataRegistryIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MajorVersionResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SchemaResolver<R = Schema, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PathResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SearchPathResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TypeResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TitleResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** This type represents information about the Veritone GraphQL serverinstance. Primarily used by Veritone engineering and operations. */
  export namespace GraphQlServiceInfoResolvers {
    export interface Resolvers<Context = any> {
      buildInfo?: BuildInfoResolver<
        Json | null,
        any,
        Context
      > /** JSON structure containing build information, such as the build number and date. */;
      featureFlags?: FeatureFlagsResolver<Json | null, any, Context>;
      heartbeatStats?: HeartbeatStatsResolver<Json | null, any, Context>;
    }

    export type BuildInfoResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type FeatureFlagsResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type HeartbeatStatsResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Contains information about a signed writable URL retrieved from thegetSignedWritableUrl mutation. */
  export namespace WritableUrlInfoResolvers {
    export interface Resolvers<Context = any> {
      bucket?: BucketResolver<string, any, Context> /** The storage bucket ID */;
      key?: KeyResolver<string, any, Context> /** The storage object key */;
      expiresInSeconds?: ExpiresInSecondsResolver<
        number,
        any,
        Context
      > /** Time interval, in seconds, after which this URL is expired and no longer valid. */;
      expiresAtDateTime?: ExpiresAtDateTimeResolver<
        DateTime,
        any,
        Context
      > /** Absolute time at which this URL expires */;
      url?: UrlResolver<
        string,
        any,
        Context
      > /** The signed URL, which can be uploaded to with an HTTP PUT (note:  PUT isrequired. POST will generate an error). */;
      getUrl?: GetUrlResolver<
        string,
        any,
        Context
      > /** A signed URL that can be used with HTTP GET to retrieve thenew resource. */;
      unsignedUrl?: UnsignedUrlResolver<
        string | null,
        any,
        Context
      > /** The unsigned, base URL to the object, which can be safely persistedand re-signed later by a client with the necessary storage credentials. */;
    }

    export type BucketResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type KeyResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ExpiresInSecondsResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ExpiresAtDateTimeResolver<R = DateTime, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type UrlResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type GetUrlResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type UnsignedUrlResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace RightsListingResolvers {
    export interface Resolvers<Context = any> {
      operations?: OperationsResolver<ReadonlyArray<string>, any, Context>;
      resources?: ResourcesResolver<Json | null, any, Context>;
    }

    export type OperationsResolver<R = ReadonlyArray<string>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ResourcesResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace DataRegistryListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<DataRegistry | null> | null, any, Context>;
      offset?: OffsetResolver<
        number,
        any,
        Context
      > /** The starting index for records that were returned in this query. */;
      limit?: LimitResolver<
        number,
        any,
        Context
      > /** Maximum number of results that were retrieved in this query; page size */;
      count?: CountResolver<number | null, any, Context> /** Number of records returned in this response */;
    }

    export type RecordsResolver<R = ReadonlyArray<DataRegistry | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Represents a collection of engine results. Not Paged. */
  export namespace EngineResultListResolvers {
    export interface Resolvers<Context = any> {
      sourceId?: SourceIdResolver<string | null, any, Context>;
      records?: RecordsResolver<ReadonlyArray<EngineResult | null> | null, any, Context>;
    }

    export type SourceIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RecordsResolver<R = ReadonlyArray<EngineResult | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }
  /** Represents single chunk of engine results for date range */
  export namespace EngineResultResolvers {
    export interface Resolvers<Context = any> {
      tdoId?: TdoIdResolver<string, any, Context>;
      engineId?: EngineIdResolver<string, any, Context>;
      jsondata?: JsondataResolver<Json | null, any, Context>;
      startOffsetMs?: StartOffsetMsResolver<number | null, any, Context>;
      stopOffsetMs?: StopOffsetMsResolver<number | null, any, Context>;
      assetId?: AssetIdResolver<string | null, any, Context>;
      userEdited?: UserEditedResolver<boolean | null, any, Context>;
      tdo?: TdoResolver<TemporalDataObject | null, any, Context>;
    }

    export type TdoIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EngineIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JsondataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StartOffsetMsResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StopOffsetMsResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type AssetIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type UserEditedResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TdoResolver<R = TemporalDataObject | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Contains information of a event hook */
  export namespace TriggerResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      event?: EventResolver<string, any, Context>;
      target?: TargetResolver<string, any, Context>;
      consumerParams?: ConsumerParamsResolver<Json | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime, any, Context>;
      createdBy?: CreatedByResolver<string, any, Context>;
      updatedBy?: UpdatedByResolver<string, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EventResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TargetResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ConsumerParamsResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ModifiedDateTimeResolver<R = DateTime, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedByResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type UpdatedByResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace SavedSearchListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<SavedSearch> | null, any, Context>;
      count?: CountResolver<number | null, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<SavedSearch> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace SavedSearchResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      organizationId?: OrganizationIdResolver<string, any, Context>;
      organization?: OrganizationResolver<Organization | null, any, Context>;
      ownerId?: OwnerIdResolver<string, any, Context>;
      owner?: OwnerResolver<User | null, any, Context>;
      name?: NameResolver<string, any, Context>;
      sharedWithOrganization?: SharedWithOrganizationResolver<boolean | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime, any, Context>;
      modifiedDateTime?: ModifiedDateTimeResolver<DateTime, any, Context>;
      csp?: CspResolver<Json | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OwnerIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OwnerResolver<R = User | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SharedWithOrganizationResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CreatedDateTimeResolver<R = DateTime, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ModifiedDateTimeResolver<R = DateTime, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CspResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace ExportRequestListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<ExportRequest>, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<ExportRequest>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace ExportRequestResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context> /** The unique ID of this export request */;
      status?: StatusResolver<ExportRequestStatus, any, Context> /** Current status of this export request */;
      organizationId?: OrganizationIdResolver<
        string,
        any,
        Context
      > /** ID of the organization this export request was issued for */;
      createdDateTime?: CreatedDateTimeResolver<
        DateTime,
        any,
        Context
      > /** Date/time at which this export request was created */;
      modifiedDateTime?: ModifiedDateTimeResolver<
        DateTime,
        any,
        Context
      > /** Date/time at which this export request was last modified */;
      requestorId?: RequestorIdResolver<
        string,
        any,
        Context
      > /** ID of the user or API key that created this export request */;
      assetUri?: AssetUriResolver<
        string | null,
        any,
        Context
      > /** The signed URI to the object that contains, or will contain,export results. */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StatusResolver<R = ExportRequestStatus, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ModifiedDateTimeResolver<R = DateTime, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RequestorIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type AssetUriResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace EventResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      eventName?: EventNameResolver<string, any, Context>;
      eventType?: EventTypeResolver<string, any, Context>;
      application?: ApplicationResolver<string, any, Context>;
      public?: PublicResolver<boolean, any, Context>;
      description?: DescriptionResolver<string | null, any, Context>;
      schemaData?: SchemaDataResolver<string, any, Context>;
      schemaHash?: SchemaHashResolver<string, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<DateTime, any, Context>;
      createdBy?: CreatedByResolver<string, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EventNameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EventTypeResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ApplicationResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PublicResolver<R = boolean, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SchemaDataResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SchemaHashResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedByResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Information about a time zone */
  export namespace TimeZoneResolvers {
    export interface Resolvers<Context = any> {
      name?: NameResolver<string, any, Context> /** Time zone name, such as `America/Los_Angeles` */;
      abbreviations?: AbbreviationsResolver<
        ReadonlyArray<TimeZoneAbbreviation>,
        any,
        Context
      > /** Known abbreviations for the time zone. These may includeoffset variations such as those caused by daylight savings time. */;
    }

    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type AbbreviationsResolver<R = ReadonlyArray<TimeZoneAbbreviation>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }
  /** Information about a time zone abbreviation or variant. */
  export namespace TimeZoneAbbreviationResolvers {
    export interface Resolvers<Context = any> {
      name?: NameResolver<string, any, Context> /** The abbreviation, such as "PST" or "UTC" */;
      offset?: OffsetResolver<
        string | null,
        any,
        Context
      > /** The offset from UTC in string form, such as `-08:00` for `PST`. */;
      offsetMinutes?: OffsetMinutesResolver<
        number | null,
        any,
        Context
      > /** The offset from UTC in minutes, such as `-480` for `PST`. */;
    }

    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetMinutesResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace AuditLogEntryListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<AuditLogEntry>, any, Context>;
      count?: CountResolver<
        number | null,
        any,
        Context
      > /** Count of records in this page. Will be less than or equal to `limit`. */;
      offset?: OffsetResolver<number, any, Context> /** Offset used in the query that generated this page. */;
      limit?: LimitResolver<number, any, Context> /** Limit used in the query that generated this page. */;
      toDateTime?: ToDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** `toDateTime` value of the query that generated this page.Useful when a default was applied. */;
      fromDateTime?: FromDateTimeResolver<
        DateTime | null,
        any,
        Context
      > /** `fromDateTime` value of the query that generated this page.Useful when a default was applied. */;
    }

    export type RecordsResolver<R = ReadonlyArray<AuditLogEntry>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ToDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type FromDateTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace AuditLogEntryResolvers {
    export interface Resolvers<Context = any> {
      organizationId?: OrganizationIdResolver<
        string | null,
        any,
        Context
      > /** ID of the organization that generated the audit entry. */;
      objectType?: ObjectTypeResolver<
        string | null,
        any,
        Context
      > /** The type of the object involved in the audit action, such as `Watchlist`or `TemporalDataObject`. */;
      objectId?: ObjectIdResolver<
        string | null,
        any,
        Context
      > /** The ID of the object involved in the audit action. The format of this IDvaries by object type. */;
      id?: IdResolver<string, any, Context> /** The unique ID of the audit log entry. */;
      eventType?: EventTypeResolver<
        string | null,
        any,
        Context
      > /** The event type, such as `Create`, `Update`, or `Delete`. */;
      userName?: UserNameResolver<
        string | null,
        any,
        Context
      > /** User name or ID that generated the audit entry. This might be an API key. */;
      success?: SuccessResolver<
        boolean | null,
        any,
        Context
      > /** Indicates whether or not the attempted action was successful. */;
      clientIpAddress?: ClientIpAddressResolver<
        string | null,
        any,
        Context
      > /** IP address of the client that generated the audit action. */;
      clientUserAgent?: ClientUserAgentResolver<
        string | null,
        any,
        Context
      > /** HTTP user agent of the client that generated the audit action. */;
      description?: DescriptionResolver<string | null, any, Context>;
      createdDateTime?: CreatedDateTimeResolver<
        DateTime,
        any,
        Context
      > /** Date/time at which the audit log entry was created. */;
    }

    export type OrganizationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ObjectTypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ObjectIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type EventTypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type UserNameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SuccessResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ClientIpAddressResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ClientUserAgentResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateTimeResolver<R = DateTime, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace WorkflowRuntimeResponseResolvers {
    export interface Resolvers<Context = any> {
      success?: SuccessResolver<boolean, any, Context>;
      message?: MessageResolver<string | null, any, Context> /** Error message if success is false */;
      uri?: UriResolver<
        string | null,
        any,
        Context
      > /** uri of veritone workflow instance.This is only available when Workflow request is successful */;
    }

    export type SuccessResolver<R = boolean, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MessageResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type UriResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace WorkflowRuntimeStorageDataListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<WorkflowRuntimeStorageData | null> | null, any, Context>;
      count?: CountResolver<number | null, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
    }

    export type RecordsResolver<
      R = ReadonlyArray<WorkflowRuntimeStorageData | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace WorkflowRuntimeStorageDataResolvers {
    export interface Resolvers<Context = any> {
      storageKey?: StorageKeyResolver<string, any, Context> /** Unique lookup id for the workflowRuntimeData */;
      storageData?: StorageDataResolver<
        string,
        any,
        Context
      > /** Data content - base64 encoded binary, plain string or encoded JSON */;
      storageMetadata?: StorageMetadataResolver<
        string | null,
        any,
        Context
      > /** Optional metadata for the workflowRuntimeData */;
    }

    export type StorageKeyResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StorageDataResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StorageMetadataResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace ProcessTemplateListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<ProcessTemplate> | null, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<ProcessTemplate> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace ProcessTemplateResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      organizationId?: OrganizationIdResolver<string, any, Context>;
      name?: NameResolver<string, any, Context>;
      taskList?: TaskListResolver<Json, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TaskListResolver<R = Json, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace EngineConfigurationListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<EngineConfiguration>, any, Context>;
      count?: CountResolver<number, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<EngineConfiguration>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CountResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace ClusterNodeListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<ClusterNode>, any, Context>;
      count?: CountResolver<number, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<ClusterNode>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CountResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace ClusterListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<Cluster>, any, Context>;
      count?: CountResolver<number, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<Cluster>, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace ExecutionLocationListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<ExecutionLocation>, any, Context>;
      count?: CountResolver<number, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<ExecutionLocation>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CountResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace SourceTypeListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<SourceType>, any, Context>;
      count?: CountResolver<number, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<SourceType>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CountResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace SourceTypeCategoryListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<SourceTypeCategory>, any, Context>;
      limit?: LimitResolver<number, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      count?: CountResolver<number | null, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<SourceTypeCategory>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CountResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace ExternalCredentialListResolvers {
    export interface Resolvers<Context = any> {
      records?: RecordsResolver<ReadonlyArray<ExternalCredential>, any, Context>;
      count?: CountResolver<number, any, Context>;
      offset?: OffsetResolver<number, any, Context>;
      limit?: LimitResolver<number, any, Context>;
    }

    export type RecordsResolver<R = ReadonlyArray<ExternalCredential>, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type CountResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OffsetResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LimitResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Mutations are used to modify data. Each mutation takes an inputthat contains the data necessary to create or update the datain question. */
  export namespace MutationResolvers {
    export interface Resolvers<Context = any> {
      createTDO?: CreateTdoResolver<TemporalDataObject | null, any, Context> /** Create a new temporal data object */;
      updateTDO?: UpdateTdoResolver<TemporalDataObject | null, any, Context> /** Update a temporal data object */;
      deleteTDO?: DeleteTdoResolver<
        DeletePayload | null,
        any,
        Context
      > /** Delete a temporal data object. The TDO metadata, its assets andall storage objects, and search index data are deleted.Engine results stored in related task objects are not.cleanupTDO can be used to selectively delete certain data on the TDO. */;
      cleanupTDO?: CleanupTdoResolver<
        DeletePayload | null,
        any,
        Context
      > /** Delete partial information from a temporal data object.Use the delete options to control exactly which data is deleted.The default is to delete objects from storage and the search index,while leaving TDO-level metadata and task engine results intact.To permanently delete the TDO, use delete TDO. */;
      createTaskLog?: CreateTaskLogResolver<
        TaskLog | null,
        any,
        Context
      > /** Create a task log by usingmultipart form POST. */;
      createAsset?: CreateAssetResolver<
        Asset | null,
        any,
        Context
      > /** Create a media asset. Optionally, upload content usingmultipart form POST. */;
      deleteAsset?: DeleteAssetResolver<DeletePayload | null, any, Context> /** Delete an asset */;
      updateAsset?: UpdateAssetResolver<Asset | null, any, Context> /** Update an asset */;
      requestClone?: RequestCloneResolver<
        CloneRequest | null,
        any,
        Context
      > /** Start a clone job. A clone creates a new TDOthat links back to an existing TDO's assetsinstead of creating new ones and is usedprimarily to handle sample media. */;
      createEngine?: CreateEngineResolver<
        Engine | null,
        any,
        Context
      > /** Create a new engine. The engine will need to gothrough a sequence of workflow steps beforeuse in production. See VDA documentation for details. */;
      updateEngine?: UpdateEngineResolver<
        Engine | null,
        any,
        Context
      > /** Update an engine. Engines are subject to specificworkflow steps. An engine's state determines whatupdates can be made to it. See VDA documentation fordetails. */;
      deleteEngine?: DeleteEngineResolver<DeletePayload | null, any, Context> /** Delete an engine */;
      createEngineBuild?: CreateEngineBuildResolver<Build | null, any, Context> /** Create an engine build. */;
      updateEngineBuild?: UpdateEngineBuildResolver<
        Build | null,
        any,
        Context
      > /** Update an engine build. Engine builds are subject tospecific workflow steps. A build's state determines whatupdates can be made to it. See VDA documentation for details. */;
      deleteEngineBuild?: DeleteEngineBuildResolver<DeletePayload | null, any, Context> /** Delete an engine build */;
      updateTask?: UpdateTaskResolver<Task | null, any, Context> /** Update a task */;
      pollTask?: PollTaskResolver<Task | null, any, Context> /** Poll a task */;
      createJob?: CreateJobResolver<Job | null, any, Context> /** Create a job */;
      cancelJob?: CancelJobResolver<
        DeletePayload | null,
        any,
        Context
      > /** Cancel a job. This action effectively deletes the job,although a records of job and task execution remains inVeritone's database. */;
      retryJob?: RetryJobResolver<
        Job | null,
        any,
        Context
      > /** Retry a job. This action applies only to jobsthat are in a failure state. The task sequencefor the job will be restarted in its originalconfiguration. */;
      updateJobs?: UpdateJobsResolver<JobList | null, any, Context>;
      createApplication?: CreateApplicationResolver<
        Application | null,
        any,
        Context
      > /** Create a new application. An application mustgo through a sequence of workflow steps beforeit is available in production. See the VDA documentationfor details. */;
      deleteApplication?: DeleteApplicationResolver<DeletePayload | null, any, Context> /** Delete an application */;
      updateApplication?: UpdateApplicationResolver<
        Application | null,
        any,
        Context
      > /** Update a custom application. Applications are subject tospecific workflows. The current application state determineswhat updates can be made to it. See VDA documentation for details. */;
      bulkDeleteContextMenuExtensions?: BulkDeleteContextMenuExtensionsResolver<
        ContextMenuExtensionList | null,
        any,
        Context
      > /** Bulk delete context meu extensions. */;
      updateOrganization?: UpdateOrganizationResolver<Organization | null, any, Context> /** Update an organization */;
      addToEngineWhitelist?: AddToEngineWhitelistResolver<EngineWhitelist | null, any, Context>;
      addToEngineBlacklist?: AddToEngineBlacklistResolver<EngineBlacklist | null, any, Context>;
      deleteFromEngineBlacklist?: DeleteFromEngineBlacklistResolver<EngineBlacklist | null, any, Context>;
      deleteFromEngineWhitelist?: DeleteFromEngineWhitelistResolver<EngineWhitelist | null, any, Context>;
      createEntityIdentifierType?: CreateEntityIdentifierTypeResolver<
        EntityIdentifierType | null,
        any,
        Context
      > /** Create an entity identifier type, such as "face" or "image".Entity identifier types are typically created or modifiedonly by Veritone engineering. Most libraries andentities will use existing entity identifier types. */;
      updateEntityIdentifierType?: UpdateEntityIdentifierTypeResolver<
        EntityIdentifierType | null,
        any,
        Context
      > /** Update an entity identifier type. */;
      createLibraryType?: CreateLibraryTypeResolver<
        LibraryType | null,
        any,
        Context
      > /** Create a library type, such as "ad" or "people".Entity identifier types are typically created or modifiedonly by Veritone engineering. Most librarieswill use existing entity identifier types. */;
      updateLibraryType?: UpdateLibraryTypeResolver<LibraryType | null, any, Context> /** Update a library type. */;
      createLibrary?: CreateLibraryResolver<
        Library | null,
        any,
        Context
      > /** Create a new library.Once the library is created, the client can addentities and entity identifiers. Note that thelibrary type determines what types of entity identifierscan be used within the library. */;
      updateLibrary?: UpdateLibraryResolver<Library | null, any, Context> /** Update an existing library. */;
      deleteLibrary?: DeleteLibraryResolver<
        DeletePayload | null,
        any,
        Context
      > /** Delete a library. This mutation will also delete all entities,entity identifiers, library engine models, and associated objects. */;
      publishLibrary?: PublishLibraryResolver<
        Library | null,
        any,
        Context
      > /** Publish a new version of a library.Increments library version by one and trains compatible engines. */;
      createEntity?: CreateEntityResolver<Entity | null, any, Context> /** Create a new entity. */;
      updateEntity?: UpdateEntityResolver<Entity | null, any, Context> /** Update an entity. */;
      deleteEntity?: DeleteEntityResolver<
        DeletePayload | null,
        any,
        Context
      > /** Delete an entity. This mutation will also delete all associatedentity identifiers and associated objects. */;
      createEntityIdentifier?: CreateEntityIdentifierResolver<
        EntityIdentifier | null,
        any,
        Context
      > /** Create an entity identifier.This mutation accepts file uploads. To use this mutation and upload a file,send a multipart form POST containing two parameters:  `query`, with theGraphQL query, and `file` containing the file itself.For more information see the documentation at https://veritone-developer.atlassian.net/wiki/spaces/DOC/pages/13893791/GraphQL. */;
      updateEntityIdentifier?: UpdateEntityIdentifierResolver<EntityIdentifier | null, any, Context>;
      deleteEntityIdentifier?: DeleteEntityIdentifierResolver<
        DeletePayload | null,
        any,
        Context
      > /** Delete an entity identifier */;
      createLibraryEngineModel?: CreateLibraryEngineModelResolver<
        LibraryEngineModel | null,
        any,
        Context
      > /** Create a library engine model. */;
      updateLibraryEngineModel?: UpdateLibraryEngineModelResolver<
        LibraryEngineModel | null,
        any,
        Context
      > /** Update a library engine model */;
      deleteLibraryEngineModel?: DeleteLibraryEngineModelResolver<
        DeletePayload | null,
        any,
        Context
      > /** Delete a library engine model */;
      applicationWorkflow?: ApplicationWorkflowResolver<
        Application | null,
        any,
        Context
      > /** Apply an application workflow step, such as "submit" or "approve" */;
      engineWorkflow?: EngineWorkflowResolver<
        Engine | null,
        any,
        Context
      > /** Apply an application workflow step, such as "submit" or "approve" */;
      createIngestionConfiguration?: CreateIngestionConfigurationResolver<
        IngestionConfiguration | null,
        any,
        Context
      > /** Create an ingestion configuration */;
      updateIngestionConfiguration?: UpdateIngestionConfigurationResolver<
        IngestionConfiguration | null,
        any,
        Context
      > /** Update an ingestion configuration */;
      deleteIngestionConfiguration?: DeleteIngestionConfigurationResolver<
        DeletePayload | null,
        any,
        Context
      > /** Delete an ingestion configuration */;
      createWidget?: CreateWidgetResolver<
        Widget | null,
        any,
        Context
      > /** Creates a widget associated with a collection */;
      updateWidget?: UpdateWidgetResolver<Widget | null, any, Context> /** Updates a widget */;
      createUser?: CreateUserResolver<User | null, any, Context> /** Create a new user within an organization. */;
      createOrganization?: CreateOrganizationResolver<
        Organization | null,
        any,
        Context
      > /** Create a new organization. */;
      updateUser?: UpdateUserResolver<User | null, any, Context> /** Update an existing user */;
      createPasswordUpdateRequest?: CreatePasswordUpdateRequestResolver<
        User | null,
        any,
        Context
      > /** Force a user to update password on next login.This mutation is used by administrators. */;
      getCurrentUserPasswordToken?: GetCurrentUserPasswordTokenResolver<
        PasswordTokenInfo,
        any,
        Context
      > /** Get password token info for current user */;
      createPasswordResetRequest?: CreatePasswordResetRequestResolver<
        CreatePasswordResetRequestPayload | null,
        any,
        Context
      > /** Create a password reset request. This mutation is used on behalfof a user who needs to reset their password. It operates only onthe currently authenicated user (based on the authentication token provided). */;
      updateCurrentUser?: UpdateCurrentUserResolver<User, any, Context> /** Update the current authenticated user */;
      changePassword?: ChangePasswordResolver<
        User | null,
        any,
        Context
      > /** Change the current authenticated user's password */;
      deleteUser?: DeleteUserResolver<DeletePayload | null, any, Context> /** Delete a user */;
      createDataRegistry?: CreateDataRegistryResolver<
        DataRegistry | null,
        any,
        Context
      > /** Create a structured data registry schema metadata. */;
      updateDataRegistry?: UpdateDataRegistryResolver<
        DataRegistry | null,
        any,
        Context
      > /** Update a structured data registry schema metadata. */;
      upsertSchemaDraft?: UpsertSchemaDraftResolver<
        Schema | null,
        any,
        Context
      > /** Update a structured data registry schema. */;
      updateSchemaState?: UpdateSchemaStateResolver<Schema | null, any, Context>;
      createStructuredData?: CreateStructuredDataResolver<
        StructuredData | null,
        any,
        Context
      > /** Create (ingest) a structured data object */;
      createCollection?: CreateCollectionResolver<
        Collection | null,
        any,
        Context
      > /** Create (ingest) a structured data object */;
      updateCollection?: UpdateCollectionResolver<Collection | null, any, Context> /** Update a collection */;
      deleteCollection?: DeleteCollectionResolver<DeletePayload | null, any, Context> /** Delete Collection */;
      shareCollection?: ShareCollectionResolver<
        Share | null,
        any,
        Context
      > /** Share a collection, allowing other organizations to view the datait contains. */;
      shareMentionFromCollection?: ShareMentionFromCollectionResolver<
        Share | null,
        any,
        Context
      > /** Share a mention from a collection */;
      createCollectionMention?: CreateCollectionMentionResolver<
        CollectionMention | null,
        any,
        Context
      > /** Add a mention to a collection */;
      deleteCollectionMention?: DeleteCollectionMentionResolver<
        CollectionMention | null,
        any,
        Context
      > /** Remove a mention from a collection */;
      createFolder?: CreateFolderResolver<Folder | null, any, Context> /** Create a new folder */;
      updateFolder?: UpdateFolderResolver<Folder | null, any, Context> /** Update an existing folder */;
      moveFolder?: MoveFolderResolver<
        Folder | null,
        any,
        Context
      > /** Move a folder from one parent folder to another. */;
      deleteFolder?: DeleteFolderResolver<DeletePayload | null, any, Context> /** Delete a folder */;
      createMentionComment?: CreateMentionCommentResolver<
        MentionComment | null,
        any,
        Context
      > /** Create a mention comment */;
      updateMentionComment?: UpdateMentionCommentResolver<
        MentionComment | null,
        any,
        Context
      > /** Update a mention comment */;
      deleteMentionComment?: DeleteMentionCommentResolver<
        DeletePayload | null,
        any,
        Context
      > /** Delete a mention comment */;
      createMentionRating?: CreateMentionRatingResolver<
        MentionRating | null,
        any,
        Context
      > /** Create a mention rating */;
      updateMentionRating?: UpdateMentionRatingResolver<
        MentionRating | null,
        any,
        Context
      > /** Update a mention rating */;
      deleteMentionRating?: DeleteMentionRatingResolver<
        DeletePayload | null,
        any,
        Context
      > /** Delete a mention rating */;
      userLogin?: UserLoginResolver<
        LoginInfo | null,
        any,
        Context
      > /** Login as a user. This mutation does not require an existing authenticationcontext (via `Authorization` header with bearer token, cookie, etc.).Instead, the client supplies credentials to this mutation, which thenauthenticates the user and sets up the authentication context.The returned tokens can be used to authenticate future requests. */;
      userLogout?: UserLogoutResolver<boolean | null, any, Context> /** Logout user and invalidate user token */;
      refreshToken?: RefreshTokenResolver<
        LoginInfo | null,
        any,
        Context
      > /** Refresh a user token, returning a fresh token so that the clientcan continue to authenticate to the API. */;
      validateToken?: ValidateTokenResolver<
        LoginInfo | null,
        any,
        Context
      > /** Validate a user token. This mutation is used by services to determineif the token provided by a given client is valid. */;
      createMention?: CreateMentionResolver<Mention | null, any, Context> /** Create a mention object */;
      createRootFolders?: CreateRootFoldersResolver<
        ReadonlyArray<Folder | null> | null,
        any,
        Context
      > /** Create root folder for an organization */;
      bulkUpdateWatchlist?: BulkUpdateWatchlistResolver<
        WatchlistList | null,
        any,
        Context
      > /** Apply bulk updates to watchlists.This mutation is currently available only to Veritone operations. */;
      fileTemporalDataObject?: FileTemporalDataObjectResolver<
        TemporalDataObject | null,
        any,
        Context
      > /** File a TemporalDataObject in a folder. A given TemporalDataObject canbe filed in any number of folders, or none. Filing causes the TemporalDataObjectand its assets to be visible within the folder. */;
      unfileTemporalDataObject?: UnfileTemporalDataObjectResolver<
        TemporalDataObject | null,
        any,
        Context
      > /** Unfile a TemporalDataObject from a folder. This causes the TemporalDataObjectand its assets to disappear from the folder, but does not otherwise affecteither the TDO or the folder and does not change access controls. */;
      moveTemporalDataObject?: MoveTemporalDataObjectResolver<
        TemporalDataObject | null,
        any,
        Context
      > /** Moves a TemporalDataObject from one parent folder to another.Any other folders the TemporalDataObject is filed in are unaffected. */;
      uploadEngineResult?: UploadEngineResultResolver<
        Asset | null,
        any,
        Context
      > /** Upload and store an engine result. The result will be stored as anasset associated with the target TemporalDataObject and thetask will be updated accordingly.Use a multipart form POST to all this mutation. */;
      createWatchlist?: CreateWatchlistResolver<Watchlist | null, any, Context>;
      updateWatchlist?: UpdateWatchlistResolver<Watchlist | null, any, Context>;
      deleteWatchlist?: DeleteWatchlistResolver<DeletePayload | null, any, Context>;
      updateCognitiveSearch?: UpdateCognitiveSearchResolver<CognitiveSearch | null, any, Context>;
      createCognitiveSearch?: CreateCognitiveSearchResolver<CognitiveSearch | null, any, Context>;
      deleteCognitiveSearch?: DeleteCognitiveSearchResolver<DeletePayload | null, any, Context>;
      fileWatchlist?: FileWatchlistResolver<Watchlist | null, any, Context>;
      unfileWatchlist?: UnfileWatchlistResolver<Watchlist | null, any, Context>;
      shareFolder?: ShareFolderResolver<Folder | null, any, Context> /** Share a folder with other organizations */;
      createTDOWithAsset?: CreateTdoWithAssetResolver<
        TemporalDataObject | null,
        any,
        Context
      > /** Create a TDO and an asset with a single call */;
      createSubscription?: CreateSubscriptionResolver<Subscription | null, any, Context>;
      updateSubscription?: UpdateSubscriptionResolver<Subscription | null, any, Context>;
      deleteSubscription?: DeleteSubscriptionResolver<DeletePayload | null, any, Context>;
      createTriggers?: CreateTriggersResolver<
        ReadonlyArray<Trigger | null> | null,
        any,
        Context
      > /** Create trigger for events or types. */;
      deleteTrigger?: DeleteTriggerResolver<DeletePayload | null, any, Context> /** Delete a registed trigger by ID. */;
      validateEngineOutput?: ValidateEngineOutputResolver<
        boolean,
        any,
        Context
      > /** Validates if an engine output conforms to the engine output guidelines */;
      getEngineJWT?: GetEngineJwtResolver<
        JwtTokenInfo,
        any,
        Context
      > /** JWT tokens with a more limited scoped token to specificresources to the recording, task, and joband also has no organization association. */;
      verifyJWT?: VerifyJwtResolver<VerifyJwtPayload | null, any, Context> /** Verify JWT token */;
      createSavedSearch?: CreateSavedSearchResolver<SavedSearch, any, Context> /** Create a new Saved Search */;
      deleteSavedSearch?: DeleteSavedSearchResolver<DeletePayload, any, Context> /** Delete a saved search */;
      replaceSavedSearch?: ReplaceSavedSearchResolver<
        SavedSearch,
        any,
        Context
      > /** Mark existing saved search profile as deletedCreate new saved search profile */;
      sendEmail?: SendEmailResolver<
        boolean,
        any,
        Context
      > /** Send a basic email. Mutation returns true for a success message. */;
      createFolderContentTempate?: CreateFolderContentTempateResolver<
        FolderContentTemplate,
        any,
        Context
      > /** Create new content template into a folder */;
      updateFolderContentTempate?: UpdateFolderContentTempateResolver<
        FolderContentTemplate,
        any,
        Context
      > /** Update existing content template by folderContentTemplateId */;
      deleteFolderContentTempate?: DeleteFolderContentTempateResolver<
        DeletePayload,
        any,
        Context
      > /** Delete existing folder content template by folderContentTemplateId */;
      createExportRequest?: CreateExportRequestResolver<
        ExportRequest,
        any,
        Context
      > /** Create an export request. The requested TDO data, possibly includingTDO media and engine results, will be exported offline. */;
      updateExportRequest?: UpdateExportRequestResolver<ExportRequest, any, Context> /** Update an export request */;
      createMentions?: CreateMentionsResolver<
        MentionList | null,
        any,
        Context
      > /** Create Mention in bulk. The input should be an array of createMentions */;
      setWorkflowRuntimeStorageData?: SetWorkflowRuntimeStorageDataResolver<
        WorkflowRuntimeStorageData,
        any,
        Context
      > /** Create or Update Workflow data. */;
      createEvent?: CreateEventResolver<Event, any, Context> /** Create a new event */;
      updateEvent?: UpdateEventResolver<Event, any, Context> /** Update an event */;
      subscribeEvent?: SubscribeEventResolver<string, any, Context> /** Subscribe to an event */;
      unsubscribeEvent?: UnsubscribeEventResolver<UnsubscribeEvent, any, Context> /** Unsubscribe to an event */;
      emitEvent?: EmitEventResolver<EmitEventResponse, any, Context> /** Emit an event */;
      startWorkflowRuntime?: StartWorkflowRuntimeResolver<
        WorkflowRuntimeResponse,
        any,
        Context
      > /** Start a Veritone Workflow instance */;
      stopWorkflowRuntime?: StopWorkflowRuntimeResolver<
        WorkflowRuntimeResponse,
        any,
        Context
      > /** Shutdown Veritone Workflow instance */;
      createProcessTemplate?: CreateProcessTemplateResolver<
        ProcessTemplate,
        any,
        Context
      > /** Create a processTemplate in CMS */;
      updateProcessTemplate?: UpdateProcessTemplateResolver<
        ProcessTemplate,
        any,
        Context
      > /** Update a processTemplate by ID in CMS */;
      createCluster?: CreateClusterResolver<Cluster | null, any, Context>;
      updateCluster?: UpdateClusterResolver<Cluster | null, any, Context>;
      deleteCluster?: DeleteClusterResolver<DeletePayload | null, any, Context>;
      pauseCluster?: PauseClusterResolver<Cluster | null, any, Context>;
      unpauseCluster?: UnpauseClusterResolver<Cluster | null, any, Context>;
      createClusterNode?: CreateClusterNodeResolver<ClusterNode | null, any, Context>;
      updateClusterNode?: UpdateClusterNodeResolver<ClusterNode | null, any, Context>;
      deleteClusterNode?: DeleteClusterNodeResolver<DeletePayload | null, any, Context>;
      createScheduledJob?: CreateScheduledJobResolver<ScheduledJob, any, Context>;
      cloneScheduledJob?: CloneScheduledJobResolver<ScheduledJob, any, Context>;
      revertScheduledJob?: RevertScheduledJobResolver<ScheduledJob, any, Context>;
      updateScheduledJob?: UpdateScheduledJobResolver<ScheduledJob, any, Context>;
      deleteScheduledJob?: DeleteScheduledJobResolver<DeletePayload | null, any, Context>;
      createScheduledJobContentTemplate?: CreateScheduledJobContentTemplateResolver<
        ScheduledJobContentTemplate,
        any,
        Context
      > /** Create a new content template on a scheduled job */;
      deleteScheduledJobContentTemplate?: DeleteScheduledJobContentTemplateResolver<DeletePayload | null, any, Context>;
      createSource?: CreateSourceResolver<Source | null, any, Context> /** Create a new source */;
      updateSource?: UpdateSourceResolver<Source | null, any, Context>;
      deleteSource?: DeleteSourceResolver<DeletePayload | null, any, Context>;
      createSourceContentTemplate?: CreateSourceContentTemplateResolver<
        SourceContentTemplate,
        any,
        Context
      > /** Create a new source content template on a source */;
      deleteSourceContentTemplate?: DeleteSourceContentTemplateResolver<DeletePayload | null, any, Context>;
      createSourceType?: CreateSourceTypeResolver<SourceType | null, any, Context>;
      updateSourceType?: UpdateSourceTypeResolver<SourceType | null, any, Context>;
      deleteSourceType?: DeleteSourceTypeResolver<DeletePayload | null, any, Context>;
      createJobPipeline?: CreateJobPipelineResolver<JobPipeline, any, Context>;
      updateJobPipeline?: UpdateJobPipelineResolver<JobPipeline, any, Context>;
      deleteJobPipeline?: DeleteJobPipelineResolver<DeletePayload | null, any, Context>;
      createJobTemplate?: CreateJobTemplateResolver<JobTemplate, any, Context>;
      updateJobTemplate?: UpdateJobTemplateResolver<JobTemplate, any, Context>;
      deleteJobTemplate?: DeleteJobTemplateResolver<DeletePayload | null, any, Context>;
      createTaskTemplate?: CreateTaskTemplateResolver<TaskTemplate, any, Context>;
      updateTaskTemplate?: UpdateTaskTemplateResolver<TaskTemplate, any, Context>;
      deleteTaskTemplate?: DeleteTaskTemplateResolver<DeletePayload | null, any, Context>;
      createNextPipelineJobs?: CreateNextPipelineJobsResolver<ReadonlyArray<Job | null> | null, any, Context>;
      launchScheduledJobs?: LaunchScheduledJobsResolver<
        ReadonlyArray<Job | null> | null,
        any,
        Context
      > /** Creates one or more jobs based on the supplied scheduled job. */;
      launchJobTemplates?: LaunchJobTemplatesResolver<
        ReadonlyArray<Job | null> | null,
        any,
        Context
      > /** Creates one or more jobs based on the supplied job templates. */;
      getNextBundleForCluster?: GetNextBundleForClusterResolver<
        Bundle,
        any,
        Context
      > /** Get next bundle for cluster. */;
      updateBundleStatusAsCluster?: UpdateBundleStatusAsClusterResolver<
        Bundle,
        any,
        Context
      > /** Update bundle status as cluster. */;
    }

    export type CreateTdoResolver<R = TemporalDataObject | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateTdoArgs
    >;
    export interface CreateTdoArgs {
      input: CreateTdo | null /** Fields required to create a TDO */;
    }

    export type UpdateTdoResolver<R = TemporalDataObject | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateTdoArgs
    >;
    export interface UpdateTdoArgs {
      input: UpdateTdo | null /** Fields required to update a TDO */;
    }

    export type DeleteTdoResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteTdoArgs
    >;
    export interface DeleteTdoArgs {
      id: string /** Supply the ID of the TDO to delete */;
    }

    export type CleanupTdoResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CleanupTdoArgs
    >;
    export interface CleanupTdoArgs {
      id: string /** Supply the ID of the TDO to clean up. */;
      options: ReadonlyArray<
        TdoCleanupOption
      > | null /** Supply a list of cleanup options. See TDOCleanupOptionfor details. If not provided, the server will use default settings. */;
    }

    export type CreateTaskLogResolver<R = TaskLog | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateTaskLogArgs
    >;
    export interface CreateTaskLogArgs {
      input: CreateTaskLog /** Fields needed to create a task log. */;
    }

    export type CreateAssetResolver<R = Asset | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateAssetArgs
    >;
    export interface CreateAssetArgs {
      input: CreateAsset /** Fields needed to create an asset. */;
    }

    export type DeleteAssetResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteAssetArgs
    >;
    export interface DeleteAssetArgs {
      id: string /** Provide the ID of the asset to delete. */;
    }

    export type UpdateAssetResolver<R = Asset | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateAssetArgs
    >;
    export interface UpdateAssetArgs {
      input: UpdateAsset /** Fields needed to update an asset. */;
    }

    export type RequestCloneResolver<R = CloneRequest | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      RequestCloneArgs
    >;
    export interface RequestCloneArgs {
      input: RequestClone | null /** Fields needed to request a new clone job. */;
    }

    export type CreateEngineResolver<R = Engine | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateEngineArgs
    >;
    export interface CreateEngineArgs {
      input: CreateEngine | null /** Fields needed to create a new engine */;
    }

    export type UpdateEngineResolver<R = Engine | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateEngineArgs
    >;
    export interface UpdateEngineArgs {
      input: UpdateEngine | null /** Fields needed to update an engine */;
    }

    export type DeleteEngineResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteEngineArgs
    >;
    export interface DeleteEngineArgs {
      id: string /** Provide the ID of the engine to delete */;
    }

    export type CreateEngineBuildResolver<R = Build | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateEngineBuildArgs
    >;
    export interface CreateEngineBuildArgs {
      input: CreateBuild /** Fields needed to create an engine build. */;
    }

    export type UpdateEngineBuildResolver<R = Build | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateEngineBuildArgs
    >;
    export interface UpdateEngineBuildArgs {
      input: UpdateBuild /** Fields needed to update an engine build. */;
    }

    export type DeleteEngineBuildResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteEngineBuildArgs
    >;
    export interface DeleteEngineBuildArgs {
      input: DeleteBuild /** Fields needed to delete an engine build. */;
    }

    export type UpdateTaskResolver<R = Task | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateTaskArgs
    >;
    export interface UpdateTaskArgs {
      input: UpdateTask | null /** Fields required to update a task. */;
    }

    export type PollTaskResolver<R = Task | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      PollTaskArgs
    >;
    export interface PollTaskArgs {
      input: PollTask | null /** Fields required to poll a task. */;
    }

    export type CreateJobResolver<R = Job | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateJobArgs
    >;
    export interface CreateJobArgs {
      input: CreateJob | null /** Fields required to create a job. */;
    }

    export type CancelJobResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CancelJobArgs
    >;
    export interface CancelJobArgs {
      id: string /** Supply the ID of the job to delete. */;
    }

    export type RetryJobResolver<R = Job | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      RetryJobArgs
    >;
    export interface RetryJobArgs {
      id: string /** Supply the ID of the job to retry. */;
    }

    export type UpdateJobsResolver<R = JobList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateJobsArgs
    >;
    export interface UpdateJobsArgs {
      input: UpdateJobs;
    }

    export type CreateApplicationResolver<R = Application | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateApplicationArgs
    >;
    export interface CreateApplicationArgs {
      input: CreateApplication | null /** Fields needed to create a new custom application. */;
    }

    export type DeleteApplicationResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteApplicationArgs
    >;
    export interface DeleteApplicationArgs {
      id: string /** Supply the ID of the application to delete. */;
    }

    export type UpdateApplicationResolver<R = Application | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateApplicationArgs
    >;
    export interface UpdateApplicationArgs {
      input: UpdateApplication | null /** Fields required to update a custom application. */;
    }

    export type BulkDeleteContextMenuExtensionsResolver<
      R = ContextMenuExtensionList | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, BulkDeleteContextMenuExtensionsArgs>;
    export interface BulkDeleteContextMenuExtensionsArgs {
      input: BulkDeleteContextMenuExtensions | null;
    }

    export type UpdateOrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateOrganizationArgs
    >;
    export interface UpdateOrganizationArgs {
      input: UpdateOrganization /** Fields required to update an organization. */;
    }

    export type AddToEngineWhitelistResolver<R = EngineWhitelist | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      AddToEngineWhitelistArgs
    >;
    export interface AddToEngineWhitelistArgs {
      toAdd: SetEngineWhitelist;
    }

    export type AddToEngineBlacklistResolver<R = EngineBlacklist | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      AddToEngineBlacklistArgs
    >;
    export interface AddToEngineBlacklistArgs {
      toAdd: SetEngineBlacklist;
    }

    export type DeleteFromEngineBlacklistResolver<R = EngineBlacklist | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteFromEngineBlacklistArgs
    >;
    export interface DeleteFromEngineBlacklistArgs {
      toDelete: SetEngineBlacklist;
    }

    export type DeleteFromEngineWhitelistResolver<R = EngineWhitelist | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteFromEngineWhitelistArgs
    >;
    export interface DeleteFromEngineWhitelistArgs {
      toDelete: SetEngineBlacklist;
    }

    export type CreateEntityIdentifierTypeResolver<
      R = EntityIdentifierType | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, CreateEntityIdentifierTypeArgs>;
    export interface CreateEntityIdentifierTypeArgs {
      input: CreateEntityIdentifierType /** Fields required to create an entity identifier type. */;
    }

    export type UpdateEntityIdentifierTypeResolver<
      R = EntityIdentifierType | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, UpdateEntityIdentifierTypeArgs>;
    export interface UpdateEntityIdentifierTypeArgs {
      input: UpdateEntityIdentifierType /** Fields required to update an entity identifier type. */;
    }

    export type CreateLibraryTypeResolver<R = LibraryType | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateLibraryTypeArgs
    >;
    export interface CreateLibraryTypeArgs {
      input: CreateLibraryType /** Fields needed to create a new library type. */;
    }

    export type UpdateLibraryTypeResolver<R = LibraryType | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateLibraryTypeArgs
    >;
    export interface UpdateLibraryTypeArgs {
      input: UpdateLibraryType /** Fields needed to update a library type. */;
    }

    export type CreateLibraryResolver<R = Library | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateLibraryArgs
    >;
    export interface CreateLibraryArgs {
      input: CreateLibrary /** Fields needed to create a new library. */;
    }

    export type UpdateLibraryResolver<R = Library | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateLibraryArgs
    >;
    export interface UpdateLibraryArgs {
      input: UpdateLibrary /** Fields needed to update a library */;
    }

    export type DeleteLibraryResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteLibraryArgs
    >;
    export interface DeleteLibraryArgs {
      id: string /** Provide the ID of the library to delete. */;
    }

    export type PublishLibraryResolver<R = Library | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      PublishLibraryArgs
    >;
    export interface PublishLibraryArgs {
      id: string /** ID of the library to publish */;
    }

    export type CreateEntityResolver<R = Entity | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateEntityArgs
    >;
    export interface CreateEntityArgs {
      input: CreateEntity /** Fields required to create a new entity. */;
    }

    export type UpdateEntityResolver<R = Entity | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateEntityArgs
    >;
    export interface UpdateEntityArgs {
      input: UpdateEntity /** Fields required to update an entity. */;
    }

    export type DeleteEntityResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteEntityArgs
    >;
    export interface DeleteEntityArgs {
      id: string /** Supply the ID of the entity to delete. */;
    }

    export type CreateEntityIdentifierResolver<R = EntityIdentifier | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateEntityIdentifierArgs
    >;
    export interface CreateEntityIdentifierArgs {
      input: CreateEntityIdentifier /** Fields needed to create an entity identifier. */;
    }

    export type UpdateEntityIdentifierResolver<R = EntityIdentifier | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateEntityIdentifierArgs
    >;
    export interface UpdateEntityIdentifierArgs {
      input: UpdateEntityIdentifier /** Fields required to update an entity identifier. */;
    }

    export type DeleteEntityIdentifierResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteEntityIdentifierArgs
    >;
    export interface DeleteEntityIdentifierArgs {
      id: string /** Supply the ID of the entity identifier to delete. */;
    }

    export type CreateLibraryEngineModelResolver<R = LibraryEngineModel | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateLibraryEngineModelArgs
    >;
    export interface CreateLibraryEngineModelArgs {
      input: CreateLibraryEngineModel /** Fields required to create a library engine model. */;
    }

    export type UpdateLibraryEngineModelResolver<R = LibraryEngineModel | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateLibraryEngineModelArgs
    >;
    export interface UpdateLibraryEngineModelArgs {
      input: UpdateLibraryEngineModel /** Fields required to update a library engine model */;
    }

    export type DeleteLibraryEngineModelResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteLibraryEngineModelArgs
    >;
    export interface DeleteLibraryEngineModelArgs {
      id: string /** Supply the ID of the library engine model to delete. */;
    }

    export type ApplicationWorkflowResolver<R = Application | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ApplicationWorkflowArgs
    >;
    export interface ApplicationWorkflowArgs {
      input: ApplicationWorkflow | null /** Fields required to apply a application workflow step */;
    }

    export type EngineWorkflowResolver<R = Engine | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      EngineWorkflowArgs
    >;
    export interface EngineWorkflowArgs {
      input: EngineWorkflow | null /** Fields required to apply a engine workflow step */;
    }

    export type CreateIngestionConfigurationResolver<
      R = IngestionConfiguration | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, CreateIngestionConfigurationArgs>;
    export interface CreateIngestionConfigurationArgs {
      input: CreateIngestionConfiguration | null;
    }

    export type UpdateIngestionConfigurationResolver<
      R = IngestionConfiguration | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, UpdateIngestionConfigurationArgs>;
    export interface UpdateIngestionConfigurationArgs {
      input: UpdateIngestionConfiguration | null;
    }

    export type DeleteIngestionConfigurationResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteIngestionConfigurationArgs
    >;
    export interface DeleteIngestionConfigurationArgs {
      id: string /** ID of the ingestion configuration to delete */;
    }

    export type CreateWidgetResolver<R = Widget | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateWidgetArgs
    >;
    export interface CreateWidgetArgs {
      input: CreateWidget | null /** Fields needed to create a new widget */;
    }

    export type UpdateWidgetResolver<R = Widget | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateWidgetArgs
    >;
    export interface UpdateWidgetArgs {
      input: UpdateWidget | null /** Fields needed to update a widget */;
    }

    export type CreateUserResolver<R = User | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateUserArgs
    >;
    export interface CreateUserArgs {
      input: CreateUser | null /** Fields needed to create a user. */;
    }

    export type CreateOrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateOrganizationArgs
    >;
    export interface CreateOrganizationArgs {
      input: CreateOrganization /** Fields needed to create an organization. */;
    }

    export type UpdateUserResolver<R = User | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateUserArgs
    >;
    export interface UpdateUserArgs {
      input: UpdateUser | null /** Fields needed to update a user */;
    }

    export type CreatePasswordUpdateRequestResolver<R = User | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreatePasswordUpdateRequestArgs
    >;
    export interface CreatePasswordUpdateRequestArgs {
      input: CreatePasswordUpdateRequest | null /** Fields needed to create a password update request */;
    }

    export type GetCurrentUserPasswordTokenResolver<R = PasswordTokenInfo, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      GetCurrentUserPasswordTokenArgs
    >;
    export interface GetCurrentUserPasswordTokenArgs {
      input: GetCurrentUserPasswordToken;
    }

    export type CreatePasswordResetRequestResolver<
      R = CreatePasswordResetRequestPayload | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, CreatePasswordResetRequestArgs>;
    export interface CreatePasswordResetRequestArgs {
      input: CreatePasswordResetRequest | null;
    }

    export type UpdateCurrentUserResolver<R = User, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateCurrentUserArgs
    >;
    export interface UpdateCurrentUserArgs {
      input: UpdateCurrentUser;
    }

    export type ChangePasswordResolver<R = User | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ChangePasswordArgs
    >;
    export interface ChangePasswordArgs {
      input: ChangePassword /** Fields needed to change password */;
    }

    export type DeleteUserResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteUserArgs
    >;
    export interface DeleteUserArgs {
      id: string /** Supply the ID of the user to delete. */;
    }

    export type CreateDataRegistryResolver<R = DataRegistry | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateDataRegistryArgs
    >;
    export interface CreateDataRegistryArgs {
      input: CreateDataRegistry;
    }

    export type UpdateDataRegistryResolver<R = DataRegistry | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateDataRegistryArgs
    >;
    export interface UpdateDataRegistryArgs {
      input: UpdateDataRegistry;
    }

    export type UpsertSchemaDraftResolver<R = Schema | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpsertSchemaDraftArgs
    >;
    export interface UpsertSchemaDraftArgs {
      input: UpsertSchemaDraft;
    }

    export type UpdateSchemaStateResolver<R = Schema | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateSchemaStateArgs
    >;
    export interface UpdateSchemaStateArgs {
      input: UpdateSchemaState;
    }

    export type CreateStructuredDataResolver<R = StructuredData | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateStructuredDataArgs
    >;
    export interface CreateStructuredDataArgs {
      input: CreateStructuredData;
    }

    export type CreateCollectionResolver<R = Collection | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateCollectionArgs
    >;
    export interface CreateCollectionArgs {
      input: CreateCollection | null /** Fields required to create new collection */;
    }

    export type UpdateCollectionResolver<R = Collection | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateCollectionArgs
    >;
    export interface UpdateCollectionArgs {
      input: UpdateCollection | null /** Fields needed to update a collection */;
    }

    export type DeleteCollectionResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteCollectionArgs
    >;
    export interface DeleteCollectionArgs {
      folderId: string | null /** @deprecated(reason: "folderId has been renamed to id. Use id.") */;
      id: string | null /** Supply the ID of the folder or collection to delete */;
    }

    export type ShareCollectionResolver<R = Share | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ShareCollectionArgs
    >;
    export interface ShareCollectionArgs {
      input: ShareCollection | null /** Fields needed to share a collection */;
    }

    export type ShareMentionFromCollectionResolver<R = Share | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ShareMentionFromCollectionArgs
    >;
    export interface ShareMentionFromCollectionArgs {
      input: ShareMentionFromCollection | null /** Fields needed to share a mention */;
    }

    export type CreateCollectionMentionResolver<R = CollectionMention | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateCollectionMentionArgs
    >;
    export interface CreateCollectionMentionArgs {
      input: CollectionMentionInput | null /** Fields needed to add a mention to a collection */;
    }

    export type DeleteCollectionMentionResolver<R = CollectionMention | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteCollectionMentionArgs
    >;
    export interface DeleteCollectionMentionArgs {
      input: CollectionMentionInput | null /** Fields needed to delete a mention from a collection */;
    }

    export type CreateFolderResolver<R = Folder | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateFolderArgs
    >;
    export interface CreateFolderArgs {
      input: CreateFolder | null /** Fields needed to create a new folder. */;
    }

    export type UpdateFolderResolver<R = Folder | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateFolderArgs
    >;
    export interface UpdateFolderArgs {
      input: UpdateFolder | null /** Fields needed to update a folder. */;
    }

    export type MoveFolderResolver<R = Folder | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      MoveFolderArgs
    >;
    export interface MoveFolderArgs {
      input: MoveFolder | null /** Fields needed to move a folder */;
    }

    export type DeleteFolderResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteFolderArgs
    >;
    export interface DeleteFolderArgs {
      input: DeleteFolder | null /** Fields needed to delete a folder */;
    }

    export type CreateMentionCommentResolver<R = MentionComment | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateMentionCommentArgs
    >;
    export interface CreateMentionCommentArgs {
      input: CreateMentionComment | null /** Fields needed to create a mention comment */;
    }

    export type UpdateMentionCommentResolver<R = MentionComment | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateMentionCommentArgs
    >;
    export interface UpdateMentionCommentArgs {
      input: UpdateMentionComment | null /** Fields needed to update a mention comment */;
    }

    export type DeleteMentionCommentResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteMentionCommentArgs
    >;
    export interface DeleteMentionCommentArgs {
      input: DeleteMentionComment | null /** Fields needed to delete a mention comment */;
    }

    export type CreateMentionRatingResolver<R = MentionRating | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateMentionRatingArgs
    >;
    export interface CreateMentionRatingArgs {
      input: CreateMentionRating | null /** Fields needed to create a mention rating */;
    }

    export type UpdateMentionRatingResolver<R = MentionRating | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateMentionRatingArgs
    >;
    export interface UpdateMentionRatingArgs {
      input: UpdateMentionRating | null /** Fields needed to update a mention rating */;
    }

    export type DeleteMentionRatingResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteMentionRatingArgs
    >;
    export interface DeleteMentionRatingArgs {
      input: DeleteMentionRating | null /** Fields needed to delete a mention rating. */;
    }

    export type UserLoginResolver<R = LoginInfo | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UserLoginArgs
    >;
    export interface UserLoginArgs {
      input: UserLogin | null /** Fields needed to log in */;
    }

    export type UserLogoutResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UserLogoutArgs
    >;
    export interface UserLogoutArgs {
      token: string /** User token that should be invalidated */;
    }

    export type RefreshTokenResolver<R = LoginInfo | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      RefreshTokenArgs
    >;
    export interface RefreshTokenArgs {
      token: string;
    }

    export type ValidateTokenResolver<R = LoginInfo | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ValidateTokenArgs
    >;
    export interface ValidateTokenArgs {
      token: string;
    }

    export type CreateMentionResolver<R = Mention | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateMentionArgs
    >;
    export interface CreateMentionArgs {
      input: CreateMention;
    }

    export type CreateRootFoldersResolver<
      R = ReadonlyArray<Folder | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, CreateRootFoldersArgs>;
    export interface CreateRootFoldersArgs {
      rootFolderType: RootFolderType | null /** The type of root folder to create */;
    }

    export type BulkUpdateWatchlistResolver<R = WatchlistList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      BulkUpdateWatchlistArgs
    >;
    export interface BulkUpdateWatchlistArgs {
      filter: BulkUpdateWatchlistFilter /** A filter indicating which watchlists should be updated.At least one filter condition must be provided.Only watchlists for the user's organization will be updated. */;
      input: BulkUpdateWatchlist | null /** Fields used to update a watchlist. */;
    }

    export type FileTemporalDataObjectResolver<R = TemporalDataObject | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      FileTemporalDataObjectArgs
    >;
    export interface FileTemporalDataObjectArgs {
      input: FileTemporalDataObject /** The fields needed to file a TemporalDataObject in a folder */;
    }

    export type UnfileTemporalDataObjectResolver<R = TemporalDataObject | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UnfileTemporalDataObjectArgs
    >;
    export interface UnfileTemporalDataObjectArgs {
      input: UnfileTemporalDataObject /** The fields needed to file a TemporalDataObject in a folder */;
    }

    export type MoveTemporalDataObjectResolver<R = TemporalDataObject | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      MoveTemporalDataObjectArgs
    >;
    export interface MoveTemporalDataObjectArgs {
      input: MoveTemporalDataObject /** Fields need to move a TemporalDataObject */;
    }

    export type UploadEngineResultResolver<R = Asset | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UploadEngineResultArgs
    >;
    export interface UploadEngineResultArgs {
      input: UploadEngineResult /** Fields needed to upload and store an engine result */;
    }

    export type CreateWatchlistResolver<R = Watchlist | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateWatchlistArgs
    >;
    export interface CreateWatchlistArgs {
      input: CreateWatchlist;
    }

    export type UpdateWatchlistResolver<R = Watchlist | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateWatchlistArgs
    >;
    export interface UpdateWatchlistArgs {
      input: UpdateWatchlist;
    }

    export type DeleteWatchlistResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteWatchlistArgs
    >;
    export interface DeleteWatchlistArgs {
      id: string;
    }

    export type UpdateCognitiveSearchResolver<R = CognitiveSearch | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateCognitiveSearchArgs
    >;
    export interface UpdateCognitiveSearchArgs {
      input: UpdateCognitiveSearch | null;
    }

    export type CreateCognitiveSearchResolver<R = CognitiveSearch | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateCognitiveSearchArgs
    >;
    export interface CreateCognitiveSearchArgs {
      input: CreateCognitiveSearch | null;
    }

    export type DeleteCognitiveSearchResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteCognitiveSearchArgs
    >;
    export interface DeleteCognitiveSearchArgs {
      id: string;
    }

    export type FileWatchlistResolver<R = Watchlist | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      FileWatchlistArgs
    >;
    export interface FileWatchlistArgs {
      input: FileWatchlist;
    }

    export type UnfileWatchlistResolver<R = Watchlist | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UnfileWatchlistArgs
    >;
    export interface UnfileWatchlistArgs {
      input: UnfileWatchlist;
    }

    export type ShareFolderResolver<R = Folder | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ShareFolderArgs
    >;
    export interface ShareFolderArgs {
      input: ShareFolderInput | null;
    }

    export type CreateTdoWithAssetResolver<R = TemporalDataObject | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateTdoWithAssetArgs
    >;
    export interface CreateTdoWithAssetArgs {
      input: CreateTdoWithAsset | null /** Input fields necessary to create the TDO and asset */;
    }

    export type CreateSubscriptionResolver<R = Subscription | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateSubscriptionArgs
    >;
    export interface CreateSubscriptionArgs {
      input: CreateSubscription;
    }

    export type UpdateSubscriptionResolver<R = Subscription | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateSubscriptionArgs
    >;
    export interface UpdateSubscriptionArgs {
      input: UpdateSubscription;
    }

    export type DeleteSubscriptionResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteSubscriptionArgs
    >;
    export interface DeleteSubscriptionArgs {
      id: string;
    }

    export type CreateTriggersResolver<
      R = ReadonlyArray<Trigger | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, CreateTriggersArgs>;
    export interface CreateTriggersArgs {
      input: CreateTriggers;
    }

    export type DeleteTriggerResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteTriggerArgs
    >;
    export interface DeleteTriggerArgs {
      id: string;
    }

    export type ValidateEngineOutputResolver<R = boolean, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ValidateEngineOutputArgs
    >;
    export interface ValidateEngineOutputArgs {
      input: Json;
    }

    export type GetEngineJwtResolver<R = JwtTokenInfo, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      GetEngineJwtArgs
    >;
    export interface GetEngineJwtArgs {
      input: GetEngineJwt;
    }

    export type VerifyJwtResolver<R = VerifyJwtPayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      VerifyJwtArgs
    >;
    export interface VerifyJwtArgs {
      jwtToken: string;
    }

    export type CreateSavedSearchResolver<R = SavedSearch, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateSavedSearchArgs
    >;
    export interface CreateSavedSearchArgs {
      input: CreateSavedSearch;
    }

    export type DeleteSavedSearchResolver<R = DeletePayload, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteSavedSearchArgs
    >;
    export interface DeleteSavedSearchArgs {
      id: string;
    }

    export type ReplaceSavedSearchResolver<R = SavedSearch, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      ReplaceSavedSearchArgs
    >;
    export interface ReplaceSavedSearchArgs {
      input: ReplaceSavedSearch;
    }

    export type SendEmailResolver<R = boolean, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SendEmailArgs
    >;
    export interface SendEmailArgs {
      input: SendEmail;
    }

    export type CreateFolderContentTempateResolver<R = FolderContentTemplate, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateFolderContentTempateArgs
    >;
    export interface CreateFolderContentTempateArgs {
      input: CreateFolderContentTempate;
    }

    export type UpdateFolderContentTempateResolver<R = FolderContentTemplate, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateFolderContentTempateArgs
    >;
    export interface UpdateFolderContentTempateArgs {
      input: UpdateFolderContentTempate;
    }

    export type DeleteFolderContentTempateResolver<R = DeletePayload, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteFolderContentTempateArgs
    >;
    export interface DeleteFolderContentTempateArgs {
      id: string /** Folder Content Template Id */;
    }

    export type CreateExportRequestResolver<R = ExportRequest, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateExportRequestArgs
    >;
    export interface CreateExportRequestArgs {
      input: CreateExportRequest /** Input data required to create the export request */;
    }

    export type UpdateExportRequestResolver<R = ExportRequest, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateExportRequestArgs
    >;
    export interface UpdateExportRequestArgs {
      input: UpdateExportRequest /** Input data required to update an export request */;
    }

    export type CreateMentionsResolver<R = MentionList | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateMentionsArgs
    >;
    export interface CreateMentionsArgs {
      input: CreateMentions;
    }

    export type SetWorkflowRuntimeStorageDataResolver<
      R = WorkflowRuntimeStorageData,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, SetWorkflowRuntimeStorageDataArgs>;
    export interface SetWorkflowRuntimeStorageDataArgs {
      workflowRuntimeId: string;
      input: CreateWorkflowRuntimeStorageData;
    }

    export type CreateEventResolver<R = Event, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateEventArgs
    >;
    export interface CreateEventArgs {
      input: CreateEvent;
    }

    export type UpdateEventResolver<R = Event, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateEventArgs
    >;
    export interface UpdateEventArgs {
      input: UpdateEvent;
    }

    export type SubscribeEventResolver<R = string, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      SubscribeEventArgs
    >;
    export interface SubscribeEventArgs {
      input: SubscribeEvent;
    }

    export type UnsubscribeEventResolver<R = UnsubscribeEvent, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UnsubscribeEventArgs
    >;
    export interface UnsubscribeEventArgs {
      id: string;
    }

    export type EmitEventResolver<R = EmitEventResponse, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      EmitEventArgs
    >;
    export interface EmitEventArgs {
      input: EmitEvent;
    }

    export type StartWorkflowRuntimeResolver<R = WorkflowRuntimeResponse, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      StartWorkflowRuntimeArgs
    >;
    export interface StartWorkflowRuntimeArgs {
      workflowRuntimeId: string;
      orgId: string;
    }

    export type StopWorkflowRuntimeResolver<R = WorkflowRuntimeResponse, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      StopWorkflowRuntimeArgs
    >;
    export interface StopWorkflowRuntimeArgs {
      workflowRuntimeId: string;
    }

    export type CreateProcessTemplateResolver<R = ProcessTemplate, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateProcessTemplateArgs
    >;
    export interface CreateProcessTemplateArgs {
      input: CreateProcessTemplate;
    }

    export type UpdateProcessTemplateResolver<R = ProcessTemplate, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateProcessTemplateArgs
    >;
    export interface UpdateProcessTemplateArgs {
      input: UpdateProcessTemplate;
    }

    export type CreateClusterResolver<R = Cluster | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateClusterArgs
    >;
    export interface CreateClusterArgs {
      input: CreateCluster;
    }

    export type UpdateClusterResolver<R = Cluster | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateClusterArgs
    >;
    export interface UpdateClusterArgs {
      input: UpdateCluster;
    }

    export type DeleteClusterResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteClusterArgs
    >;
    export interface DeleteClusterArgs {
      id: string;
    }

    export type PauseClusterResolver<R = Cluster | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      PauseClusterArgs
    >;
    export interface PauseClusterArgs {
      input: PauseCluster;
    }

    export type UnpauseClusterResolver<R = Cluster | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UnpauseClusterArgs
    >;
    export interface UnpauseClusterArgs {
      input: UnpauseCluster;
    }

    export type CreateClusterNodeResolver<R = ClusterNode | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateClusterNodeArgs
    >;
    export interface CreateClusterNodeArgs {
      input: CreateClusterNode;
    }

    export type UpdateClusterNodeResolver<R = ClusterNode | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateClusterNodeArgs
    >;
    export interface UpdateClusterNodeArgs {
      input: UpdateClusterNode;
    }

    export type DeleteClusterNodeResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteClusterNodeArgs
    >;
    export interface DeleteClusterNodeArgs {
      id: string;
    }

    export type CreateScheduledJobResolver<R = ScheduledJob, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateScheduledJobArgs
    >;
    export interface CreateScheduledJobArgs {
      input: CreateScheduledJob;
    }

    export type CloneScheduledJobResolver<R = ScheduledJob, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CloneScheduledJobArgs
    >;
    export interface CloneScheduledJobArgs {
      input: CloneScheduledJob;
    }

    export type RevertScheduledJobResolver<R = ScheduledJob, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      RevertScheduledJobArgs
    >;
    export interface RevertScheduledJobArgs {
      input: RevertScheduledJob;
    }

    export type UpdateScheduledJobResolver<R = ScheduledJob, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateScheduledJobArgs
    >;
    export interface UpdateScheduledJobArgs {
      input: UpdateScheduledJob;
    }

    export type DeleteScheduledJobResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteScheduledJobArgs
    >;
    export interface DeleteScheduledJobArgs {
      id: string;
    }

    export type CreateScheduledJobContentTemplateResolver<
      R = ScheduledJobContentTemplate,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, CreateScheduledJobContentTemplateArgs>;
    export interface CreateScheduledJobContentTemplateArgs {
      input: CreateScheduledJobContentTemplate;
    }

    export type DeleteScheduledJobContentTemplateResolver<
      R = DeletePayload | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, DeleteScheduledJobContentTemplateArgs>;
    export interface DeleteScheduledJobContentTemplateArgs {
      id: string /** ID of the scheduled job content template to delete. It will be removed from thescheduled job. The underlying SDO will not be deleted. */;
    }

    export type CreateSourceResolver<R = Source | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateSourceArgs
    >;
    export interface CreateSourceArgs {
      input: CreateSource;
    }

    export type UpdateSourceResolver<R = Source | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateSourceArgs
    >;
    export interface UpdateSourceArgs {
      input: UpdateSource;
    }

    export type DeleteSourceResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteSourceArgs
    >;
    export interface DeleteSourceArgs {
      id: string;
    }

    export type CreateSourceContentTemplateResolver<R = SourceContentTemplate, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateSourceContentTemplateArgs
    >;
    export interface CreateSourceContentTemplateArgs {
      input: CreateSourceContentTemplate;
    }

    export type DeleteSourceContentTemplateResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteSourceContentTemplateArgs
    >;
    export interface DeleteSourceContentTemplateArgs {
      id: string /** ID of the source content template to delete. It will be removed from thesource. The underlying SDO will not be deleted. */;
    }

    export type CreateSourceTypeResolver<R = SourceType | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateSourceTypeArgs
    >;
    export interface CreateSourceTypeArgs {
      input: CreateSourceType;
    }

    export type UpdateSourceTypeResolver<R = SourceType | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateSourceTypeArgs
    >;
    export interface UpdateSourceTypeArgs {
      input: UpdateSourceType;
    }

    export type DeleteSourceTypeResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteSourceTypeArgs
    >;
    export interface DeleteSourceTypeArgs {
      id: string;
    }

    export type CreateJobPipelineResolver<R = JobPipeline, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateJobPipelineArgs
    >;
    export interface CreateJobPipelineArgs {
      input: CreateJobPipeline;
    }

    export type UpdateJobPipelineResolver<R = JobPipeline, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateJobPipelineArgs
    >;
    export interface UpdateJobPipelineArgs {
      input: UpdateJobPipeline;
    }

    export type DeleteJobPipelineResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteJobPipelineArgs
    >;
    export interface DeleteJobPipelineArgs {
      id: string;
    }

    export type CreateJobTemplateResolver<R = JobTemplate, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateJobTemplateArgs
    >;
    export interface CreateJobTemplateArgs {
      input: CreateJobTemplate;
    }

    export type UpdateJobTemplateResolver<R = JobTemplate, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateJobTemplateArgs
    >;
    export interface UpdateJobTemplateArgs {
      input: UpdateJobTemplate;
    }

    export type DeleteJobTemplateResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteJobTemplateArgs
    >;
    export interface DeleteJobTemplateArgs {
      id: string;
    }

    export type CreateTaskTemplateResolver<R = TaskTemplate, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      CreateTaskTemplateArgs
    >;
    export interface CreateTaskTemplateArgs {
      input: CreateTaskTemplate;
    }

    export type UpdateTaskTemplateResolver<R = TaskTemplate, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateTaskTemplateArgs
    >;
    export interface UpdateTaskTemplateArgs {
      input: UpdateTaskTemplate;
    }

    export type DeleteTaskTemplateResolver<R = DeletePayload | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      DeleteTaskTemplateArgs
    >;
    export interface DeleteTaskTemplateArgs {
      id: string;
    }

    export type CreateNextPipelineJobsResolver<
      R = ReadonlyArray<Job | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, CreateNextPipelineJobsArgs>;
    export interface CreateNextPipelineJobsArgs {
      input: CreateNextPipelineJobs;
    }

    export type LaunchScheduledJobsResolver<
      R = ReadonlyArray<Job | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, LaunchScheduledJobsArgs>;
    export interface LaunchScheduledJobsArgs {
      input: LaunchScheduledJobs;
    }

    export type LaunchJobTemplatesResolver<
      R = ReadonlyArray<Job | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, LaunchJobTemplatesArgs>;
    export interface LaunchJobTemplatesArgs {
      input: LaunchJobTemplates;
    }

    export type GetNextBundleForClusterResolver<R = Bundle, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      GetNextBundleForClusterArgs
    >;
    export interface GetNextBundleForClusterArgs {
      input: GetNextBundleForCluster;
    }

    export type UpdateBundleStatusAsClusterResolver<R = Bundle, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context,
      UpdateBundleStatusAsClusterArgs
    >;
    export interface UpdateBundleStatusAsClusterArgs {
      input: UpdateBundleStatusAsCluster | null;
    }
  }
  /** Payload required to delete an object */
  export namespace DeletePayloadResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context> /** ID of the object that was deleted */;
      message?: MessageResolver<string | null, any, Context> /** a message */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MessageResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace PasswordTokenInfoResolvers {
    export interface Resolvers<Context = any> {
      passwordToken?: PasswordTokenResolver<string | null, any, Context>;
    }

    export type PasswordTokenResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace CreatePasswordResetRequestPayloadResolvers {
    export interface Resolvers<Context = any> {
      message?: MessageResolver<string | null, any, Context>;
    }

    export type MessageResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace ShareResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      recipients?: RecipientsResolver<ReadonlyArray<string | null> | null, any, Context>;
      shareMessage?: ShareMessageResolver<string | null, any, Context>;
      shareOptionsJson?: ShareOptionsJsonResolver<Json | null, any, Context>;
      folderId?: FolderIdResolver<string | null, any, Context>;
      mentionId?: MentionIdResolver<string | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RecipientsResolver<R = ReadonlyArray<string | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ShareMessageResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ShareOptionsJsonResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type FolderIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MentionIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace CollectionMentionResolvers {
    export interface Resolvers<Context = any> {
      folderId?: FolderIdResolver<string, any, Context> /** id of the collection */;
      mentionId?: MentionIdResolver<string, any, Context> /** id of the mention */;
    }

    export type FolderIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MentionIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Contains information about the user's authentication context. */
  export namespace LoginInfoResolvers {
    export interface Resolvers<Context = any> {
      apiToken?: ApiTokenResolver<
        string | null,
        any,
        Context
      > /** API token. This is a persistent organization-level token intended for API access. */;
      token?: TokenResolver<
        string | null,
        any,
        Context
      > /** Session-scoped user token. This token is tied to the user's session and will expirewhen that session ends. */;
      lastLoggedIn?: LastLoggedInResolver<
        string | null,
        any,
        Context
      > /** Date and time at which the user last logged in to the Veritone platform */;
      applications?: ApplicationsResolver<
        ReadonlyArray<string | null> | null,
        any,
        Context
      > /** List of Veritone platform applications for which the user is provisioned.Note that these are different than the VDA custom applications referencedin the `Application` type, `applications()` query, and related mutations. */;
      applicationPlatforms?: ApplicationPlatformsResolver<
        ReadonlyArray<ApplicationPlatform | null> | null,
        any,
        Context
      >;
      groups?: GroupsResolver<
        ReadonlyArray<Group | null> | null,
        any,
        Context
      > /** Groups to which the user belongs. */;
      hasPassword?: HasPasswordResolver<
        boolean | null,
        any,
        Context
      > /** True if the user account has a password set. False otherwise.If false, the user will be prompted to set a password on next login. */;
      organization?: OrganizationResolver<
        Organization | null,
        any,
        Context
      > /** Organization to which the user belongs. */;
      passwordResetRequired?: PasswordResetRequiredResolver<
        boolean | null,
        any,
        Context
      > /** True if a password reset will be required on the user's next login. */;
      providerId?: ProviderIdResolver<string | null, any, Context> /** TODO */;
      providerScreenName?: ProviderScreenNameResolver<string | null, any, Context> /** TODO */;
      providerUserId?: ProviderUserIdResolver<string | null, any, Context> /** TODO */;
      user?: UserResolver<User | null, any, Context> /** User object */;
    }

    export type ApiTokenResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TokenResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LastLoggedInResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ApplicationsResolver<R = ReadonlyArray<string | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ApplicationPlatformsResolver<
      R = ReadonlyArray<ApplicationPlatform | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type GroupsResolver<R = ReadonlyArray<Group | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type HasPasswordResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationResolver<R = Organization | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type PasswordResetRequiredResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ProviderIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ProviderScreenNameResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ProviderUserIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type UserResolver<R = User | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** TODO */
  export namespace ApplicationPlatformResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string | null, any, Context> /** The application platform ID */;
      platformType?: PlatformTypeResolver<string | null, any, Context> /** Platform type, such as TODO */;
      platformUrl?: PlatformUrlResolver<string | null, any, Context> /** The application platform URL. */;
    }

    export type IdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PlatformTypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PlatformUrlResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Contains information about engineJWTToken context */
  export namespace JwtTokenInfoResolvers {
    export interface Resolvers<Context = any> {
      engineId?: EngineIdResolver<string, any, Context>;
      token?: TokenResolver<string, any, Context>;
      resource?: ResourceResolver<EngineJwtResource, any, Context>;
    }

    export type EngineIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TokenResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ResourceResolver<R = EngineJwtResource, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Contain resouces of Engine JWT Token */
  export namespace EngineJwtResourceResolvers {
    export interface Resolvers<Context = any> {
      applicationId?: ApplicationIdResolver<string | null, any, Context>;
      tdoId?: TdoIdResolver<string | null, any, Context>;
      jobId?: JobIdResolver<string, any, Context>;
      taskId?: TaskIdResolver<string, any, Context>;
    }

    export type ApplicationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TdoIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type JobIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type TaskIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace VerifyJwtPayloadResolvers {
    export interface Resolvers<Context = any> {
      jwtToken?: JwtTokenResolver<string, any, Context> /** the same JWT input */;
      payload?: PayloadResolver<Json, any, Context> /** the payload contained within the JWT */;
    }

    export type JwtTokenResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PayloadResolver<R = Json, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace UnsubscribeEventResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context> /** ID of the object that was deleted */;
      message?: MessageResolver<string | null, any, Context> /** Message */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MessageResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace EmitEventResponseResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      decoder?: DecoderResolver<
        string,
        any,
        Context
      > /** the decoder that GQL used to interpret your event before sending */;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DecoderResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace BundleResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      organizationId?: OrganizationIdResolver<string | null, any, Context>;
      clusterId?: ClusterIdResolver<string | null, any, Context>;
      nodeId?: NodeIdResolver<string | null, any, Context>;
      name?: NameResolver<string | null, any, Context>;
      externalCredentialId?: ExternalCredentialIdResolver<string | null, any, Context>;
      testRun?: TestRunResolver<boolean | null, any, Context>;
      selectDetail?: SelectDetailResolver<BundleSelectDetail | null, any, Context>;
      selectCategory?: SelectCategoryResolver<string | null, any, Context>;
      bundleResults?: BundleResultsResolver<BundleResults | null, any, Context>;
      bundleStarted?: BundleStartedResolver<DateTime | null, any, Context>;
      previousBundleStarted?: PreviousBundleStartedResolver<DateTime | null, any, Context>;
      bundleCompleted?: BundleCompletedResolver<DateTime | null, any, Context>;
      deletedDate?: DeletedDateResolver<DateTime | null, any, Context>;
      createdDate?: CreatedDateResolver<DateTime | null, any, Context>;
      updatedDate?: UpdatedDateResolver<DateTime | null, any, Context>;
      scheduleDefinition?: ScheduleDefinitionResolver<BundleScheduleDefinition | null, any, Context>;
      nextScheduledTime?: NextScheduledTimeResolver<DateTime | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ClusterIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NodeIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ExternalCredentialIdResolver<R = string | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type TestRunResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SelectDetailResolver<R = BundleSelectDetail | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type SelectCategoryResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type BundleResultsResolver<R = BundleResults | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type BundleStartedResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type PreviousBundleStartedResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type BundleCompletedResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type DeletedDateResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CreatedDateResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type UpdatedDateResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ScheduleDefinitionResolver<R = BundleScheduleDefinition | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type NextScheduledTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }

  export namespace BundleSelectDetailResolvers {
    export interface Resolvers<Context = any> {
      category?: CategoryResolver<string, any, Context>;
      select?: SelectResolver<ReadonlyArray<string> | null, any, Context> /** Array of file types to include. */;
      paths?: PathsResolver<ReadonlyArray<string> | null, any, Context> /** Array of paths to search from. */;
      files?: FilesResolver<ReadonlyArray<string | null> | null, any, Context> /** Array of files to search from. */;
      tasks?: TasksResolver<
        ReadonlyArray<BundleSelectDetailTask | null> | null,
        any,
        Context
      > /** Array of tasks to run for each job. */;
      afterTime?: AfterTimeResolver<DateTime | null, any, Context> /** Include items after this time. */;
      beforeTime?: BeforeTimeResolver<DateTime | null, any, Context> /** Include items before this time. */;
      recursiveDescent?: RecursiveDescentResolver<boolean, any, Context>;
      service?: ServiceResolver<BundleService | null, any, Context>;
    }

    export type CategoryResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SelectResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type PathsResolver<R = ReadonlyArray<string> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type FilesResolver<R = ReadonlyArray<string | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type TasksResolver<
      R = ReadonlyArray<BundleSelectDetailTask | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type AfterTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type BeforeTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RecursiveDescentResolver<R = boolean, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ServiceResolver<R = BundleService | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace BundleSelectDetailTaskResolvers {
    export interface Resolvers<Context = any> {
      engineId?: EngineIdResolver<string, any, Context> /** Id of engine. */;
    }

    export type EngineIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace BundleServiceResolvers {
    export interface Resolvers<Context = any> {
      serviceType?: ServiceTypeResolver<string | null, any, Context>;
      region?: RegionResolver<string | null, any, Context>;
      bucketName?: BucketNameResolver<string | null, any, Context>;
    }

    export type ServiceTypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type RegionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type BucketNameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace BundleResultsResolvers {
    export interface Resolvers<Context = any> {
      found?: FoundResolver<number, any, Context>;
      completed?: CompletedResolver<number, any, Context>;
      errors?: ErrorsResolver<BundleError, any, Context>;
    }

    export type FoundResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CompletedResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ErrorsResolver<R = BundleError, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace BundleErrorResolvers {
    export interface Resolvers<Context = any> {
      error?: ErrorResolver<string, any, Context>;
    }

    export type ErrorResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace BundleScheduleDefinitionResolvers {
    export interface Resolvers<Context = any> {
      recurringStartTime?: RecurringStartTimeResolver<DateTime | null, any, Context>;
      recurringEndTime?: RecurringEndTimeResolver<DateTime | null, any, Context>;
      repeatDaysTimeInMinutes?: RepeatDaysTimeInMinutesResolver<number | null, any, Context>;
      repeatDaysOfWeek?: RepeatDaysOfWeekResolver<ReadonlyArray<number | null> | null, any, Context>;
      repeatDaysOfMonth?: RepeatDaysOfMonthResolver<ReadonlyArray<number | null> | null, any, Context>;
      repeatMinutes?: RepeatMinutesResolver<number | null, any, Context>;
    }

    export type RecurringStartTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type RecurringEndTimeResolver<R = DateTime | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type RepeatDaysTimeInMinutesResolver<R = number | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type RepeatDaysOfWeekResolver<
      R = ReadonlyArray<number | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type RepeatDaysOfMonthResolver<
      R = ReadonlyArray<number | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context>;
    export type RepeatMinutesResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Key-value pairs -- a generic way to represent metadata */
  export namespace KvpResolvers {
    export interface Resolvers<Context = any> {
      name?: NameResolver<string, any, Context>;
      value?: ValueResolver<ReadonlyArray<Property | null> | null, any, Context>;
    }

    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ValueResolver<R = ReadonlyArray<Property | null> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
  }
  /** Type representing an integer property. */
  export namespace IntPropertyResolvers {
    export interface Resolvers<Context = any> {
      name?: NameResolver<string, any, Context>;
      value?: ValueResolver<number | null, any, Context>;
    }

    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ValueResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Type representing a string property */
  export namespace StringPropertyResolvers {
    export interface Resolvers<Context = any> {
      name?: NameResolver<string, any, Context>;
      value?: ValueResolver<string | null, any, Context>;
    }

    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ValueResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Type representing a boolean property */
  export namespace BooleanPropertyResolvers {
    export interface Resolvers<Context = any> {
      name?: NameResolver<string, any, Context>;
      value?: ValueResolver<boolean | null, any, Context>;
    }

    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ValueResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace CompoundPropertyResolvers {
    export interface Resolvers<Context = any> {
      name?: NameResolver<string, any, Context>;
      value?: ValueResolver<Kvp | null, any, Context>;
    }

    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ValueResolver<R = Kvp | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Object that represents the mapping of clone assets to its parent's assets. */
  export namespace CloneAssetIdMapResolvers {
    export interface Resolvers<Context = any> {
      oldAssetId?: OldAssetIdResolver<
        string,
        any,
        Context
      > /** The original asset ID (within the cloned asset container). */;
      newAssetId?: NewAssetIdResolver<string, any, Context> /** The new asset ID (within the clone asset container). */;
    }

    export type OldAssetIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NewAssetIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Metadata that represents a clone of a recording. */
  export namespace CloneDataResolvers {
    export interface Resolvers<Context = any> {
      date?: DateResolver<string | null, any, Context> /** Timestamp when the recording was cloned */;
      originalId?: OriginalIdResolver<string, any, Context> /** The ID of the asset container this was cloned from */;
      cloneBlobs?: CloneBlobsResolver<boolean | null, any, Context> /** Clone blobs flag */;
      assetIdMap?: AssetIdMapResolver<
        ReadonlyArray<CloneAssetIdMap | null> | null,
        any,
        Context
      > /** Map of asset IDs from the clone to the parent. */;
      name?: NameResolver<string, any, Context>;
    }

    export type DateResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OriginalIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type CloneBlobsResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type AssetIdMapResolver<
      R = ReadonlyArray<CloneAssetIdMap | null> | null,
      Parent = any,
      Context = any
    > = Resolver<R, Parent, Context, AssetIdMapArgs>;
    export interface AssetIdMapArgs {
      oldAssetId: string | null /** Provide an ID to retrieve mappings for specific old asset. */;
      newAssetId: string | null /** Provide an ID to retrieve mappings for a specific new asset. */;
    }

    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** Metadata that represents a program. */
  export namespace ProgramResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string | null, any, Context>;
      name?: NameResolver<string, any, Context>;
      image?: ImageResolver<string | null, any, Context>;
      liveImage?: LiveImageResolver<string | null, any, Context>;
    }

    export type IdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ImageResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type LiveImageResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace FileDataResolvers {
    export interface Resolvers<Context = any> {
      name?: NameResolver<string, any, Context>;
      size?: SizeResolver<number | null, any, Context>;
      mimeType?: MimeTypeResolver<string | null, any, Context>;
      fileName?: FileNameResolver<string | null, any, Context>;
    }

    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SizeResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type MimeTypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type FileNameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace CognitiveSearchProfileResolvers {
    export interface Resolvers<Context = any> {
      and?: AndResolver<ReadonlyArray<CognitiveSearchProfile> | null, any, Context>;
      or?: OrResolver<ReadonlyArray<CognitiveSearchProfile> | null, any, Context>;
      condition?: ConditionResolver<CognitiveSearchCondition | null, any, Context>;
      jsondata?: JsondataResolver<Json | null, any, Context>;
    }

    export type AndResolver<R = ReadonlyArray<CognitiveSearchProfile> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type OrResolver<R = ReadonlyArray<CognitiveSearchProfile> | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type ConditionResolver<R = CognitiveSearchCondition | null, Parent = any, Context = any> = Resolver<
      R,
      Parent,
      Context
    >;
    export type JsondataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace CognitiveSearchConditionResolvers {
    export interface Resolvers<Context = any> {
      engineCategoryId?: EngineCategoryIdResolver<string, any, Context>;
      state?: StateResolver<Json, any, Context>;
    }

    export type EngineCategoryIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type StateResolver<R = Json, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** An object containing custom structured data.This type is not fully implemented. */
  export namespace StructuredJsonObjectResolvers {
    export interface Resolvers<Context = any> {
      data?: DataResolver<Json | null, any, Context>;
      schema?: SchemaResolver<StructuredJsonSchema, any, Context>;
      name?: NameResolver<string, any, Context>;
      id?: IdResolver<string, any, Context>;
    }

    export type DataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type SchemaResolver<R = StructuredJsonSchema, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
  /** A custom structured data schema, specified in JSON.This type is not fully implemented. */
  export namespace StructuredJsonSchemaResolvers {
    export interface Resolvers<Context = any> {
      schema?: SchemaResolver<Json | null, any, Context>;
      name?: NameResolver<string, any, Context>;
      id?: IdResolver<string, any, Context>;
      ownerOrganizationId?: OwnerOrganizationIdResolver<string, any, Context>;
      organization?: OrganizationResolver<Organization, any, Context>;
    }

    export type SchemaResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OwnerOrganizationIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type OrganizationResolver<R = Organization, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace JsonObjectResolvers {
    export interface Resolvers<Context = any> {
      name?: NameResolver<string, any, Context>;
      data?: DataResolver<Json | null, any, Context>;
    }

    export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type DataResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace CreateExecutionLocationResolvers {
    export interface Resolvers<Context = any> {
      clusterId?: ClusterIdResolver<string, any, Context>;
      nodeId?: NodeIdResolver<string | null, any, Context>;
    }

    export type ClusterIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NodeIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }

  export namespace UpdateExecutionLocationResolvers {
    export interface Resolvers<Context = any> {
      id?: IdResolver<string, any, Context>;
      clusterId?: ClusterIdResolver<string, any, Context>;
      nodeId?: NodeIdResolver<string | null, any, Context>;
    }

    export type IdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type ClusterIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
    export type NodeIdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  }
}
