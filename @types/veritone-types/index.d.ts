declare module 'veritone-types' {
  export type Maybe<T> = T | null;

  /** Specify a filter on a TemporalDataObject date/time field. At least one of `toDateTime` and `fromDateTime` must be provided. */
  export interface TemporalDataObjectDateTimeFilter {
    /** Match if the field value is `toDateTime` or earlier */
    readonly toDateTime: Maybe<DateTime>;
    /** Whether the toDateTime is inclusive or exclusive of the input timestamp */
    readonly toDateTimeExclusive: Maybe<boolean>;
    /** Match if the field value is `fromDateTime` or later */
    readonly fromDateTime: Maybe<DateTime>;
    /** Whether the fromDateTime is inclusive or exclusive of the input timestamp */
    readonly fromDateTimeExclusive: Maybe<boolean>;
    /** Identify the field to filter on. */
    readonly field: TemporalDataObjectDateTimeField;
  }

  export interface SchemaOrder {
    readonly field: SchemaOrderFields;

    readonly direction: OrderDirection;
  }

  export interface EngineFilter {
    /** Language supported by the engine */
    readonly language: Maybe<string>;
    /** provide a list of engine category names to filter by */
    readonly category: Maybe<ReadonlyArray<Maybe<string>>>;
    /** provide a list of engine type names to filter by */
    readonly type: Maybe<ReadonlyArray<EngineTypeFilter>>;
    /** Provide a list of rating from 0 to 5 to filter by. */
    readonly rating: Maybe<ReadonlyArray<Maybe<number>>>;
    /** Specify the deployment model of the engine. */
    readonly deploymentModel: Maybe<DeploymentModel>;
    /** Specify the minimum price of the engine. */
    readonly priceMin: Maybe<number>;
    /** Specify the maximum price of the engine. */
    readonly priceMax: Maybe<number>;
    /** Specify the minimum FedRamp impact level of the engine. */
    readonly fedRampImpactLevelMin: Maybe<number>;
    /** Specify the minimum FedRamp impact level of the engine. */
    readonly fedRampImpactLevelMax: Maybe<number>;
    /** Filter engines that can be trainable via API. */
    readonly trainableViaApi: Maybe<boolean>;
    /** Filter engines by cluster size. */
    readonly clusterSize: Maybe<ClusterSize>;
    /** Filter engines by gpu supported. */
    readonly gpuSupported: Maybe<SupportedGpu>;
    /** Provide a list of engine modes to filter by */
    readonly mode: Maybe<ReadonlyArray<EngineMode>>;
    /** Provide a list of runtime types to filter by */
    readonly runtimeType: Maybe<ReadonlyArray<string>>;
  }

  export interface EngineSortField {
    readonly field: EngineOrderField;

    readonly direction: Maybe<OrderDirection>;
  }
  /** Source list sort information */
  export interface SourceSortField {
    /** Specify the field to sort by. Required. */
    readonly field: SourceOrderField;
    /** Specify the sort direction. Default is descending. */
    readonly direction: OrderDirection;
  }

  export interface JobSortField {
    readonly field: JobOrderField;

    readonly direction: OrderDirection;
  }

  export interface JobDateTimeFilter {
    readonly toDateTime: Maybe<DateTime>;

    readonly fromDateTime: Maybe<DateTime>;

    readonly field: JobDateTimeField;
  }

  export interface TaskDateTimeFilter {
    readonly toDateTime: Maybe<DateTime>;

    readonly fromDateTime: Maybe<DateTime>;

    readonly field: TaskDateTimeField;
  }

  export interface DataRegistryVersion {
    /** The id of the DataRegistry */
    readonly id: string;
    /** The major version of the DataRegistry */
    readonly majorVersion: number;
  }

  export interface StructuredDataOrderBy {
    readonly field: StructuredDataOrderByField;

    readonly direction: OrderDirection;
  }

  export interface MentionDateTimeFilter {
    readonly toDateTime: Maybe<DateTime>;

    readonly fromDateTime: Maybe<DateTime>;

    readonly field: MentionDateTimeField;
  }

  export interface MentionOrderBy {
    readonly field: MentionOrderByField;

    readonly direction: OrderDirection;
  }
  /** Specifies an "order by" entry in the `auditLog` query */
  export interface AuditLogOrderBy {
    readonly field: Maybe<AuditLogOrderByField>;

    readonly direction: Maybe<OrderDirection>;
  }

  export interface ScheduledJobDateTimeFilter {
    readonly toDateTime: Maybe<DateTime>;

    readonly fromDateTime: Maybe<DateTime>;

    readonly field: ScheduledJobDateTimeField;

    readonly includeEmpty: Maybe<boolean>;
  }

  export interface ScheduledJobPartTimeFilter {
    readonly toTime: Maybe<Time>;

    readonly fromTime: Maybe<Time>;

    readonly field: ScheduledJobPartTimeField;
  }

  export interface ScheduledJobOrderBy {
    readonly field: ScheduledJobOrderField;

    readonly direction: OrderDirection;
  }
  /** Payload required to create a temporal data object */
  export interface CreateTdo {
    /** Start date and time in numerical (epoch) format. */
    readonly startDateTime: DateTime;
    /** Stop date and time in numerical (epoch) format. */
    readonly stopDateTime: DateTime;
    /** Source for the TDO, such as an ingestion type or engine ID. */
    readonly source: Maybe<string>;
    /** Status, such as "downloaded" or "recording". The server will set a value if one is not provided. */
    readonly status: string;
    /** A name for the TDO object, such as the name of the primary media file. */
    readonly name: Maybe<string>;
    /** A description for the TDO object. */
    readonly description: Maybe<string>;
    /** True if the new TDO should be made public. If true, security.global will be set to true and users from other organizations will be able to view, but not modify, the TDO's metadata and assets. */
    readonly isPublic: Maybe<boolean>;
    /** An optional parent folder ID for the new TemporalDataObject. The folder can be filed in additional folders later using `fileTemporalDataObject`, or un-filed from this one. */
    readonly parentFolderId: Maybe<string>;
    /** Optionally, set source data for this TDO. Source data identifies that task that generated this TDO. If the TDO was not generated as part of engine or adapter execution, this field should not be set. However, it is _strongly_ recommended that engines that create TDOs set this field. Doing so ensures that later tasks in the same job have appropriate access to the new TDO. */
    readonly sourceData: Maybe<SetTdoSourceData>;

    readonly details: Maybe<Json>;
    /** Only internal systems can set this value */
    readonly applicationId: Maybe<string>;
    /** Optionally, specify one or more structured data objects to apply as content templates to the TDO. They will be stored as assets of type content-template and will contain an immutable copy of the original data. */
    readonly contentTemplates: Maybe<ReadonlyArray<CreateTdoContentTemplateWithTdo>>;
    /** Optionally, add the new data to the search index. If the data is not indexed on creation, it can be indexed later by using `updateTDO` or creating a suitable job. */
    readonly addToIndex: Maybe<boolean>;
    /** An optional thumbnail URL for the TDO */
    readonly thumbnailUrl: Maybe<string>;
    /** An optional image representing the TDO source */
    readonly sourceImageUrl: Maybe<string>;
  }
  /** Identifies the task that created a TDO. */
  export interface SetTdoSourceData {
    /** ID of the task that created this TDO */
    readonly taskId: Maybe<string>;
    /** Optional ID of the source from which this TDO's initial data was created. This field will typically be set only by adapters that ingest data and create TDOs. */
    readonly sourceId: Maybe<string>;
    /** Optional ID of the scheduled job that created this TDO. */
    readonly scheduledJobId: Maybe<string>;
  }

  export interface CreateTdoContentTemplateWithTdo {
    /** Supply the ID of the data registry that contains the schema for the content template. */
    readonly schemaId: string;
    /** To associate an existing structured data object (SDO) to the TDO, provide the SDO ID. Either this field or data must be supplied. */
    readonly sdoId: Maybe<string>;
    /** To create a new structured data object, supply this field with JSON to save in the SDO. The JSON must comply with the schema defined in data registry. */
    readonly data: Maybe<Json>;
  }
  /** Payload required to create a temporal data object */
  export interface UpdateTdo {
    /** ID of the TDO to update */
    readonly id: string;
    /** Start date and time in numerical (epoch) format. */
    readonly startDateTime: Maybe<DateTime>;
    /** Stop date and time in numerical (epoch) format. */
    readonly stopDateTime: Maybe<DateTime>;
    /** Source for the TDO, such as an ingestion type or engine ID. */
    readonly source: Maybe<string>;
    /** Current status, such as "downloaded" or "recording". */
    readonly status: Maybe<string>;
    /** A name for the TDO object, such as the name of the primary media file. */
    readonly name: Maybe<string>;
    /** A description for the TDO object. */
    readonly description: Maybe<string>;
    /** Set the primary asset of a given type (transcript or media) */
    readonly primaryAsset: Maybe<ReadonlyArray<SetPrimaryAsset>>;
    /** True if the new TDO should be made public. If true, security.global will be set to true and users from other organizations will be able to view, but not modify, the TDO's metadata and assets. */
    readonly isPublic: Maybe<boolean>;

    readonly details: Maybe<Json>;
    /** Optionally, specify one or more structured data objects to apply as content templates to the TDO. They will be stored as assets of type content-template and will contain an immutable copy of the original data. Setting this field on an update does _not_ affect any content templates previously added to the TDO -- it only creates the new ones. */
    readonly contentTemplates: Maybe<ReadonlyArray<CreateTdoContentTemplateWithTdo>>;
    /** An optional thumbnail URL for the TDO */
    readonly thumbnailUrl: Maybe<string>;
    /** An optional image representing the TDO source */
    readonly sourceImageUrl: Maybe<string>;
  }
  /** Input used to set the primary asset of a given type on a TDO. The type must be supported by the server; primary asset is used by certain engines and front end components. Currently "media" and "transcript" are supported. */
  export interface SetPrimaryAsset {
    /** ID of the asset */
    readonly id: string;
    /** The asset type -- "media" or "transcript" */
    readonly assetType: string;
  }

  export interface CreateTaskLog {
    /** ID of the task which the task long belongs to. */
    readonly taskId: string;
    /** A file to upload. Use multipart form POST to submit this field. */
    readonly file: Maybe<UploadedFile>;
  }

  export interface CreateAsset {
    /** ID of the parent container, a TemporalDataObject, for the new asset */
    readonly containerId: string;
    /** A valid MIME type */
    readonly contentType: Maybe<string>;
    /** An optional description for the asset */
    readonly description: Maybe<string>;
    /** A file to upload. Use multipart form POST to submit this field. */
    readonly file: Maybe<UploadedFile>;
    /** Optional expected checksum for the file */
    readonly md5sum: Maybe<string>;
    /** Asset type - deprecated (use type) */
    readonly assetType: Maybe<string>;
    /** The asset type. Either this or assetType must be provided. */
    readonly type: Maybe<string>;
    /** URI to the asset data. Optional -- if a file is provided, the URI will be computed by the server. */
    readonly uri: Maybe<string>;
    /** Optionally, set attributes about the file */
    readonly fileData: Maybe<SetAssetFileData>;
    /** Optionally, set attributes about the source engine and task */
    readonly sourceData: Maybe<SetAssetSourceData>;
    /** Application- or type-specific metadata */
    readonly details: Maybe<Json>;
    /** File or other name */
    readonly name: Maybe<string>;
    /** Deprecated. Set `fileData`, `sourceData`, or `details` instead. */
    readonly jsondata: Maybe<Json>;
    /** if true, sets the new asset to be the primary asset of its type. Only certain asset types, such as "media" and "transcript", can have primary assets. */
    readonly setAsPrimary: Maybe<boolean>;
    /** Set to true if this asset was created by editing another asset. */
    readonly isUserEdited: Maybe<boolean>;
    /** Set to true if the container stopDateTime needs to be updated by the duration of the asset */
    readonly updateContainerStopDateTime: Maybe<boolean>;
  }
  /** Input type for AssetFileData */
  export interface SetAssetFileData {
    /** The MD5 checksum of the file */
    readonly md5sum: Maybe<string>;
    /** The file size in bytes */
    readonly size: Maybe<number>;
    /** Original file URI, if provided on asset creation */
    readonly originalFileUri: Maybe<string>;
    /** The insertion mode of the asset */
    readonly mode: AssetCreationMode;
  }
  /** Input type for AssetSourceData */
  export interface SetAssetSourceData {
    /** The name of the asset source engine or engine category */
    readonly name: Maybe<string>;
    /** ID of the specific task that created the asset */
    readonly taskId: Maybe<string>;
    /** ID of the engine that created the asset */
    readonly engineId: Maybe<string>;
    /** Optional ID of the source from which this asset was created. This field will typically be set only by adapters that ingest data. */
    readonly sourceId: Maybe<string>;
    /** Optional ID of the scheduled job that created this asset */
    readonly scheduledJobId: Maybe<string>;
    /** Optional ID of the asset this asset was created from. This will usually be assets with edits to a previous asset. */
    readonly assetId: Maybe<string>;
  }
  /** Input needed to update an asset. The asset data itself -- file or URI -- is immutable. Only supplemental metadata can be updated with this input type. */
  export interface UpdateAsset {
    /** The asset ID. Required. */
    readonly id: string;
    /** The asset description. */
    readonly description: Maybe<string>;
    /** File name or other name for the asset */
    readonly name: Maybe<string>;
    /** Optionally, set attributes about the file */
    readonly fileData: Maybe<SetAssetFileData>;
    /** Optionally, set attributes about the source engine and task */
    readonly sourceData: Maybe<SetAssetSourceData>;
    /** Application- or type-specific metadata */
    readonly details: Maybe<Json>;
  }

  export interface RequestClone {
    readonly sourceApplicationId: string;

    readonly destinationApplicationId: string;

    readonly cloneBlobs: Maybe<boolean>;
  }
  /** Input fields used to create a new engine. */
  export interface CreateEngine {
    /** Optional given id */
    readonly id: Maybe<string>;
    /** Indicates whether or not the engine should be public -- visible to and usable by users outside the creator's organization. Typically an engine should not be made public until it has been fully configured and tested in production. */
    readonly isPublic: Maybe<boolean>;
    /** Human-readable name for the engine */
    readonly name: string;
    /** An optional description for the engine. */
    readonly description: Maybe<string>;
    /** The engine category */
    readonly categoryId: string;
    /** The engine deployment model. See the DeploymentModel enum for options. */
    readonly deploymentModel: DeploymentModel;
    /** An optional price indicator for the engine. */
    readonly price: Maybe<number>;
    /** Optionally, supply custom fields that the user can set when launching the engine. See developer documentation for details. */
    readonly fields: Maybe<ReadonlyArray<CreateEngineField>>;
    /** The path for an icon image */
    readonly iconPath: Maybe<string>;
    /** The path for a logo image */
    readonly logoPath: Maybe<string>;
    /** Whether or not the engine requires a library. */
    readonly libraryRequired: Maybe<boolean>;
    /** Whether or not the engine creates a TDO */
    readonly createsTDO: Maybe<boolean>;
  }

  export interface CreateEngineField {
    /** Maximum value, in float format. Applies only to fields of type Number. */
    readonly max: Maybe<number>;
    /** Minimum value, in float format. Applies only to fields of type Number. */
    readonly min: Maybe<number>;
    /** Numerical step by which the value should be incremented or decremented in the user interface, in float format. Applies only to fields of type Number. */
    readonly step: Maybe<number>;
    /** The field type. */
    readonly type: EngineFieldType;
    /** General information about the field, such as a description. */
    readonly info: Maybe<string>;
    /** A machine-readable name, or key, for the field. */
    readonly name: string;
    /** A human-readable label for the field. */
    readonly label: string;
    /** A set of allowed values for the field. Applies only to fields of type picklist or multi-picklist. */
    readonly options: Maybe<ReadonlyArray<CreateEngineFieldPicklistOption>>;
    /** An optional default value for the field. Taken in string format, but applies to all field types. */
    readonly defaultValue: Maybe<string>;
    /** Optional default values to apply to a picklist. This field should only be set for a field of type multi-picklist. */
    readonly defaultValues: Maybe<ReadonlyArray<string>>;
  }
  /** Represents one allowed option in a picklist. */
  export interface CreateEngineFieldPicklistOption {
    /** The human-readable label for the option, such as "English-US" for a language selector. */
    readonly key: string;
    /** The machine-readable value that will be sent in the engine payload, such as "en-us" for a language selector. */
    readonly value: string;
  }
  /** Input fields used to update an existing engine. */
  export interface UpdateEngine {
    /** Supply the ID of the engine to update */
    readonly id: string;
    /** Indicates whether or not the engine should be public -- visible to and usable by users outside the creator's organization. Typically an engine should not be made public until it has been fully configured and tested in production. */
    readonly isPublic: Maybe<boolean>;
    /** Human-readable name for the engine. Changing this value will change how the engine appears to users. */
    readonly name: Maybe<string>;

    readonly description: Maybe<string>;

    readonly categoryId: Maybe<string>;
    /** The engine deployment model. See the DeploymentModel enum for options. */
    readonly deploymentModel: Maybe<DeploymentModel>;
    /** An optional price indicator for the engine. */
    readonly price: Maybe<number>;
    /** Optionally, supply custom fields that the user can set when launching the engine. See developer documentation for details. To update the fields, make sure you supply the complete set of new fields -- new fields, updated existing fields, and unmodified existing fields. */
    readonly fields: Maybe<ReadonlyArray<CreateEngineField>>;
    /** The path for an icon image */
    readonly iconPath: Maybe<string>;
    /** The path for a logo image */
    readonly logoPath: Maybe<string>;
    /** Whether or not the engine requires a library. */
    readonly libraryRequired: Maybe<boolean>;
  }

  export interface CreateBuild {
    readonly engineId: string;
  }

  export interface UpdateBuild {
    readonly id: string;

    readonly engineId: string;

    readonly action: BuildUpdateAction;

    readonly dockerImage: Maybe<string>;
  }

  export interface DeleteBuild {
    readonly id: string;

    readonly engineId: string;
  }

  export interface UpdateTask {
    readonly id: string;

    readonly status: TaskStatus;

    readonly jobId: Maybe<string>;

    readonly output: Maybe<Json>;
    /** Task output as JSON string */
    readonly outputString: Maybe<string>;
    /** Use this parameter if your task output does not take the form of valid JSON. Provide a key and the server will convert your output into JSON with a single string value. For example, ``` mutation { updateTask(input: { id: <id> outputString: "<xml><stuff id=\"value\">more stuff </stuff></xml>" outputJsonKey: "response" }) { id } } ``` Will set the task output JSON to ` {"response":"<xml><stuff id=\"value\">more stuff </stuff></xml>"}` */
    readonly outputJsonKey: Maybe<string>;
    /** Backwards compatibility only */
    readonly taskOutput: Maybe<Json>;
    /** Update the task with a new payload */
    readonly payload: Maybe<Json>;
    /** Save execution location metadata */
    readonly executionLocationData: Maybe<Json>;
    /** Optional timestamp used to control change ordering. The client may set this to the `modifiedDateTime` value of most recent copy of the task it has before making the update. The server will _only_ update the task with the requested changes _if_ and only if the current `modifiedDateTime` value is equal to or earlier than the supplied `clientTimestamp` value. Thus, changes that were made after the client last retrieved the task data will not be overwritten. */
    readonly clientTimestamp: Maybe<DateTime>;
  }

  export interface AddTasksToJobs {
    readonly tasks: Maybe<ReadonlyArray<AddTask>>;
  }

  export interface AddTask {
    readonly id: string;

    readonly jobId: string;

    readonly engineId: string;

    readonly buildId: string;

    readonly status: TaskStatus;

    readonly createdDateTime: DateTime;

    readonly payload: Maybe<Json>;

    readonly parentTaskId: Maybe<string>;
  }

  export interface PollTask {
    readonly id: string;

    readonly jobId: string;

    readonly pollPayload: Maybe<Json>;
  }

  export interface CreateJob {
    readonly status: Maybe<string>;

    readonly targetId: Maybe<string>;

    readonly tasks: Maybe<ReadonlyArray<CreateTask>>;

    readonly retries: Maybe<number>;
    /** Optionally, specify the scheduled job ID that this job is associated with. Typically it is not necessary for a client to set this; it is handled internally by the API. */
    readonly scheduledJobId: Maybe<string>;
    /** Supply a job template ID to indicate that this job was created from the given job template. To create a job _from_ a template, use `launchJobTemplates`. */
    readonly jobTemplateId: Maybe<string>;

    readonly skipDecider: Maybe<boolean>;
    /** Optionally, specify a cluster ID where the job should run. Both the organization and the engine must have access to the cluster. */
    readonly clusterId: Maybe<string>;
    /** Optional job config information. Typically used only by Veritone platform components. */
    readonly jobConfig: Maybe<Json>;

    readonly isReprocessJob: Maybe<boolean>;
  }
  /** Fields required to create a task. Used when creating a job. */
  export interface CreateTask {
    /** The task type, which is mapped on the server to an engine ID. Either taskType OR engineId is required. */
    readonly taskType: Maybe<string>;
    /** Engine ID to be used for the task. Either engineId OR taskType is required. */
    readonly engineId: Maybe<string>;
    /** Task payload in raw string form. Optional. Only one of payloadString and payload is permitted. */
    readonly payloadString: Maybe<string>;
    /** Task payload in GraphQL format. Optional. Only one of payloadString and payload is permitted. */
    readonly payload: Maybe<Json>;
    /** Optional. Specifies whether or not the task target should be cloned. */
    readonly isClone: Maybe<boolean>;
    /** Optional. Specifies the build ID of the engine */
    readonly buildId: Maybe<string>;
    /** Optional. Specifies whether the task is for testing. */
    readonly testTask: Maybe<boolean>;
    /** Optionally, provide a task definition that will be executed if and only if this one fails. Standby tasks can be nested. */
    readonly standbyTask: Maybe<CreateTask>;
  }

  export interface UpdateJobs {
    readonly ids: Maybe<ReadonlyArray<string>>;

    readonly status: Maybe<UpdateJobsStatus>;
  }

  export interface CreateApplication {
    readonly name: string;

    readonly key: string;

    readonly category: Maybe<string>;

    readonly description: string;

    readonly iconUrl: Maybe<string>;

    readonly iconSvg: Maybe<string>;

    readonly url: string;

    readonly oauth2RedirectUrls: Maybe<ReadonlyArray<Maybe<string>>>;

    readonly checkPermissions: boolean;

    readonly permissionsRequired: Maybe<ReadonlyArray<Maybe<string>>>;

    readonly deploymentModel: Maybe<DeploymentModel>;

    readonly contextMenuExtensions: Maybe<CreateContextMenuExtensions>;
  }

  export interface CreateContextMenuExtensions {
    readonly mentions: ReadonlyArray<Maybe<CreateContextMenuExtension>>;

    readonly tdos: ReadonlyArray<Maybe<CreateContextMenuExtension>>;

    readonly watchlists: ReadonlyArray<Maybe<CreateContextMenuExtension>>;

    readonly collections: ReadonlyArray<Maybe<CreateContextMenuExtension>>;
  }

  export interface CreateContextMenuExtension {
    readonly label: string;

    readonly url: string;
  }

  export interface UpdateApplication {
    readonly id: string;

    readonly name: Maybe<string>;

    readonly status: Maybe<ApplicationStatus>;

    readonly category: Maybe<string>;

    readonly description: Maybe<string>;

    readonly iconUrl: Maybe<string>;

    readonly iconSvg: Maybe<string>;

    readonly url: Maybe<string>;

    readonly oauth2RedirectUrls: Maybe<ReadonlyArray<string>>;

    readonly checkPermissions: Maybe<boolean>;

    readonly permissionsRequired: Maybe<ReadonlyArray<string>>;

    readonly deploymentModel: Maybe<DeploymentModel>;

    readonly contextMenuExtensions: Maybe<UpdateContextMenuExtensions>;
  }

  export interface UpdateContextMenuExtensions {
    readonly mentions: ReadonlyArray<Maybe<UpdateContextMenuExtension>>;

    readonly tdos: ReadonlyArray<Maybe<UpdateContextMenuExtension>>;

    readonly watchlists: ReadonlyArray<Maybe<UpdateContextMenuExtension>>;

    readonly collections: ReadonlyArray<Maybe<UpdateContextMenuExtension>>;
  }

  export interface UpdateContextMenuExtension {
    readonly id: Maybe<string>;

    readonly label: string;

    readonly url: string;
  }

  export interface BulkDeleteContextMenuExtensions {
    /** List of IDs of context menu extensions to delete */
    readonly ids: Maybe<ReadonlyArray<string>>;
  }
  /** Fields used to update an organization. */
  export interface UpdateOrganization {
    /** ID of the organization to update */
    readonly id: string;
    /** Name of the organization */
    readonly name: Maybe<string>;

    readonly type: Maybe<string>;

    readonly seatLimit: Maybe<number>;

    readonly status: Maybe<string>;

    readonly applications: Maybe<ReadonlyArray<string>>;

    readonly businessUnit: Maybe<string>;
    /** Currently only Veritone administrators can modify this field. */
    readonly metadata: Maybe<Json>;
    /** Update the engine blacklist for this organization. Currently only Veritone administrators can modify this field. Updating this field will completely replacing the existing engine and engine category blacklists with the IDs provided. */
    readonly blacklist: Maybe<SetEngineBlacklist>;
    /** Update the engine whitelist for this organization. Currently only Veritone administrators can modify this field. Updating this field will completely replacing the existing engine and whitelist with the IDs provided. */
    readonly whitelist: Maybe<SetEngineWhitelist>;
  }

  export interface SetEngineBlacklist {
    /** Provide the organization ID to update. This field is required only when using addToEngineBlacklist or deleteFromEngineBlacklist. */
    readonly organizationId: Maybe<string>;
    /** Provide the IDs of engines to set. */
    readonly engineIds: Maybe<ReadonlyArray<string>>;
    /** Provide the IDs of engine categories to set. */
    readonly engineCategoryIds: Maybe<ReadonlyArray<string>>;
  }

  export interface SetEngineWhitelist {
    /** Provide the organization ID to update. This field is required only when using addToEngineWhitelist or deleteFromEngineWhitelist. */
    readonly organizationId: Maybe<string>;

    readonly engineIds: Maybe<ReadonlyArray<string>>;
  }

  export interface CreateEntityIdentifierType {
    readonly label: string;

    readonly labelPlural: string;

    readonly iconClass: Maybe<string>;

    readonly description: Maybe<string>;

    readonly dataType: EntityIdentifierDataType;

    readonly id: string;
  }

  export interface UpdateEntityIdentifierType {
    readonly id: string;

    readonly label: Maybe<string>;

    readonly labelPlural: Maybe<string>;

    readonly iconClass: Maybe<string>;

    readonly description: Maybe<string>;

    readonly dataType: Maybe<EntityIdentifierDataType>;
  }

  export interface CreateLibraryType {
    readonly id: string;

    readonly label: string;

    readonly iconClass: Maybe<string>;

    readonly entityIdentifierTypeIds: Maybe<ReadonlyArray<string>>;

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

    readonly iconClass: Maybe<string>;

    readonly entityIdentifierTypeIds: Maybe<ReadonlyArray<string>>;

    readonly entityType: Maybe<UpdateEntityType>;
  }

  export interface UpdateEntityType {
    readonly name: Maybe<string>;

    readonly namePlural: Maybe<string>;

    readonly schema: Maybe<Json>;
  }

  export interface CreateLibrary {
    readonly name: string;

    readonly applicationId: Maybe<string>;

    readonly organizationId: Maybe<string>;

    readonly libraryTypeId: string;

    readonly coverImageUrl: Maybe<string>;

    readonly description: Maybe<string>;
  }

  export interface UpdateLibrary {
    readonly id: string;

    readonly name: Maybe<string>;

    readonly coverImageUrl: Maybe<string>;

    readonly description: Maybe<string>;

    readonly libraryTypeId: Maybe<string>;

    readonly version: Maybe<number>;
  }

  export interface CreateEntity {
    readonly name: string;

    readonly description: Maybe<string>;

    readonly libraryId: string;

    readonly profileImageUrl: Maybe<string>;
    /** GraphQL-formatted JSON-like structure containing freeform metadata. If a schema is associated with the entity type, the input will be validated against the schema. Use this field _or_ `jsonstring`, not both. */
    readonly jsondata: Maybe<Json>;
    /** A string containing valid JSON with freeform metadata. If a schema is associated with the entity type, the input will be validated against the schema. Use this field _or_ `jsondata`, not both. */
    readonly jsonstring: Maybe<string>;

    readonly isPublished: Maybe<boolean>;
  }

  export interface UpdateEntity {
    readonly id: string;

    readonly name: Maybe<string>;

    readonly description: Maybe<string>;

    readonly profileImageUrl: Maybe<string>;
    /** GraphQL-formatted JSON-like structure containing freeform metadata. If a schema is associated with the entity type, the input will be validated against the schema. Use this field _or_ `jsonstring`, not both. */
    readonly jsondata: Maybe<Json>;
    /** A string containing valid JSON with freeform metadata. If a schema is associated with the entity type, the input will be validated against the schema. Use this field _or_ `jsondata`, not both. */
    readonly jsonstring: Maybe<string>;
  }

  export interface CreateEntityIdentifier {
    readonly entityId: string;

    readonly identifierTypeId: string;

    readonly title: Maybe<string>;

    readonly isPriority: Maybe<boolean>;

    readonly url: Maybe<string>;
    /** GraphQL-formatted JSON-like structure containing freeform metadata. If a schema is associated with the entity type, the input will be validated against the schema. Use this field _or_ `jsonstring`, not both. */
    readonly jsondata: Maybe<Json>;
    /** A string containing valid JSON with freeform metadata. If a schema is associated with the entity type, the input will be validated against the schema. Use this field _or_ `jsondata`, not both. */
    readonly jsonstring: Maybe<string>;

    readonly contentType: string;

    readonly file: Maybe<UploadedFile>;

    readonly entityType: Maybe<CreateEntityType>;
    /** If the entity identifier type is image, the new file can automatically be set on the entity as its profile image. This is off by default (the entity profile image is not modified) but can be controlled with this parameter. */
    readonly profileUpdateMode: SetEntityProfileImage;
  }

  export interface UpdateEntityIdentifier {
    readonly id: string;

    readonly title: Maybe<string>;

    readonly isPriority: Maybe<boolean>;

    readonly url: Maybe<string>;
    /** GraphQL-formatted JSON-like structure containing freeform metadata. If a schema is associated with the entity type, the input will be validated against the schema. Use this field _or_ `jsonstring`, not both. */
    readonly jsondata: Maybe<Json>;
    /** A string containing valid JSON with freeform metadata. If a schema is associated with the entity type, the input will be validated against the schema. Use this field _or_ `jsondata`, not both. */
    readonly jsonstring: Maybe<string>;
  }

  export interface CreateLibraryEngineModel {
    /** ID of the engine the model is used by */
    readonly engineId: string;
    /** ID fo the library containing this engine model. */
    readonly libraryId: string;
    /** Id of the train job. */
    readonly trainJobId: Maybe<string>;

    readonly trainStatus: LibraryEngineModelTrainStatus;
    /** The URL to a file containing or related to the engine model. Use this field if the data is stored in a separate, internet-accessible location and not managed by Veritone APIs. You may also use `updateLibraryEngineModel` to upload a data file. */
    readonly dataUrl: Maybe<string>;
    /** Optional free-form block containing engine-specific metadata. */
    readonly jsondata: Maybe<Json>;

    readonly accuracy: Maybe<number>;

    readonly configurationId: Maybe<string>;
  }

  export interface UpdateLibraryEngineModel {
    /** ID of the library engine model to update. */
    readonly id: string;
    /** Id of the train job. */
    readonly trainJobId: Maybe<string>;
    /** Status of the train job. */
    readonly trainStatus: Maybe<LibraryEngineModelTrainStatus>;
    /** The URL to a file containing or related to the engine model. Submit either this field _or_ `file`, not both. Use this field if the data is stored in a separate, internet-accessible location and not managed by Veritone APIs. */
    readonly dataUrl: Maybe<string>;
    /** Optional free-form block containing engine-specific metadata. */
    readonly jsondata: Maybe<Json>;
    /** If a file is uploaded, you can explicitly specify the content type (a valid MIME type string) with this field. Often this is not necessary as the HTTP multipart form POST client will set content type on the file object implicitly. */
    readonly contentType: Maybe<string>;
    /** An optional data file containing or related to the engine model. Use multipart form POST to submit this field. Submit either this field _or_ `dataUrl`, not both. If a file is uploaded, the server will store it and then set `dataUrl` to its location. */
    readonly file: Maybe<UploadedFile>;

    readonly accuracy: Maybe<number>;

    readonly configurationId: Maybe<string>;
  }

  export interface CreateLibraryConfiguration {
    /** ID of the selected library where this config appliess to */
    readonly libraryId: string;
    /** ID of the engine category this config applies to */
    readonly engineCategoryId: string;
    /** List of selected engines for training */
    readonly targetEngineIds: ReadonlyArray<Maybe<string>>;
    /** This option is used for Dataset Library Only List of selected engine where tdos are extracted from for training data TDOs are extracted from higher ranked engines first then fallback to the lower ones if the priors don't have any matching tdo */
    readonly rankedSourceEngineIds: Maybe<ReadonlyArray<Maybe<string>>>;
    /** This option is used for Dataset Library Only Dataset TDOs confidence filters */
    readonly confidence: Maybe<CreateDatasetConfidence>;
  }

  export interface CreateDatasetConfidence {
    /** Mininum Confidence Filter. Sources with confidence lower than this will be ignore */
    readonly min: Maybe<number>;
    /** Maximum Confidence Filter. Sources with confidence higher than this will be ignore */
    readonly max: number;
    /** allow sources with null confidence values */
    readonly allowNull: boolean;
  }

  export interface UpdateLibraryConfiguration {
    /** library configuration id */
    readonly id: string;
    /** List of selected engines for training */
    readonly targetEngineIds: Maybe<ReadonlyArray<Maybe<string>>>;
    /** This option is used for Dataset Library Only List of selected engine where tdos are extracted from for training data TDOs are extracted from higher ranked engines first then fallback to the lower ones if the priors don't have any matching tdo */
    readonly rankedSourceEngineIds: Maybe<ReadonlyArray<Maybe<string>>>;
    /** This option is used for Dataset Library Only Dataset TDOs confidence filters */
    readonly confidence: Maybe<UpdateDatasetConfidence>;
  }

  export interface UpdateDatasetConfidence {
    /** Mininum Confidence Filter. Ignore sources having confidence lower than this */
    readonly min: Maybe<number>;
    /** Maximum Confidence Filter. Ignore sources having confidence higher than this */
    readonly max: Maybe<number>;
    /** allow sources with null confidence values */
    readonly allowNull: Maybe<boolean>;
  }

  export interface AddLibraryDataset {
    /** Id of the selected library */
    readonly libraryId: string;
    /** List of tdo ids to add to the selected library */
    readonly tdoIds: ReadonlyArray<Maybe<string>>;
  }

  export interface DeleteLibraryDataset {
    /** Id of the selected library */
    readonly libraryId: string;
    /** List of tdo ids to remove to the selected library */
    readonly tdoIds: ReadonlyArray<Maybe<string>>;
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
    /** Container for arbitrary JSON-format metadata including configuration, etc. */
    readonly jsondata: Maybe<Json>;
    /** String containing raw JSON-format metadata. You can specify either this value or jsondata, but not both. */
    readonly jsonstring: Maybe<string>;
  }

  export interface UpdateIngestionConfiguration {
    readonly id: string;

    readonly type: Maybe<string>;

    readonly name: Maybe<string>;
    /** Container for arbitrary JSON-format metadata including configuration, etc. */
    readonly jsondata: Maybe<Json>;
    /** String containing raw JSON-format metadata. You can specify either this value or jsondata, but not both. */
    readonly jsonstring: Maybe<string>;
  }

  export interface CreateWidget {
    readonly widgetId: Maybe<string>;

    readonly collectionId: string;

    readonly organizationId: Maybe<string>;

    readonly folderId: Maybe<string>;

    readonly name: Maybe<string>;

    readonly adScript: Maybe<string>;

    readonly width: Maybe<number>;

    readonly numberOfMentionsToShow: Maybe<number>;

    readonly displayLogo: Maybe<boolean>;

    readonly displayCollectionName: Maybe<boolean>;

    readonly displayMentionIntro: Maybe<boolean>;

    readonly displayTranscription: Maybe<boolean>;

    readonly seoTags: Maybe<ReadonlyArray<Maybe<string>>>;

    readonly backgroundColor: Maybe<string>;

    readonly borderColor: Maybe<string>;

    readonly textColor: Maybe<string>;
  }

  export interface UpdateWidget {
    readonly id: Maybe<string>;

    readonly widgetId: Maybe<string>;

    readonly name: Maybe<string>;

    readonly organizationId: Maybe<string>;

    readonly collectionId: string;

    readonly displayCollectionName: Maybe<boolean>;

    readonly displayTranscription: Maybe<boolean>;

    readonly width: Maybe<number>;

    readonly numberOfMentionsToShow: Maybe<number>;

    readonly adScript: Maybe<string>;

    readonly seoTags: Maybe<ReadonlyArray<Maybe<string>>>;

    readonly backgroundColor: Maybe<string>;

    readonly borderColor: Maybe<string>;

    readonly textColor: Maybe<string>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly displayLogo: Maybe<boolean>;

    readonly displayMentionIntro: Maybe<boolean>;
  }

  export interface CreateUser {
    readonly name: string;
    /** Metadata in JSON format. If a field is provided elsewhere in the payload, it does not need to be saved in jsondata. */
    readonly jsondata: Maybe<Json>;
    /** User who requested that the new user be provisioned */
    readonly requestorId: Maybe<string>;
    /** Password for new user. Optional - if not provided, the user will need to set on first login. */
    readonly password: Maybe<string>;

    readonly organizationId: string;

    readonly sendNewUserEmail: Maybe<boolean>;

    readonly email: Maybe<string>;

    readonly roleIds: Maybe<ReadonlyArray<string>>;

    readonly acls: Maybe<ReadonlyArray<UserAclInput>>;
    /** Optionally, specify user's first name */
    readonly firstName: Maybe<string>;
    /** Optionally, specify user's last name */
    readonly lastName: Maybe<string>;
  }

  export interface UserAclInput {
    readonly applicationId: Maybe<string>;

    readonly organizationId: Maybe<string>;

    readonly objectType: Maybe<string>;

    readonly objectId: Maybe<string>;

    readonly access: Maybe<UserAclAccessRightsInput>;

    readonly userId: Maybe<string>;
  }

  export interface UserAclAccessRightsInput {
    readonly owner: Maybe<boolean>;
  }

  export interface CreateOrganization {
    readonly name: string;

    readonly applications: Maybe<Json>;
    /** Metadata in JSON format. */
    readonly metadata: Json;

    readonly adminSeatLimit: Maybe<number>;

    readonly seatLimit: Maybe<number>;

    readonly status: OrganizationStatus;

    readonly maxAiwareNodes: Maybe<number>;

    readonly maxAiwareClusters: Maybe<number>;

    readonly businessUnit: string;

    readonly integrations: Maybe<Json>;

    readonly types: Maybe<ReadonlyArray<Maybe<OrganizationType>>>;
  }

  export interface UpdateUser {
    readonly id: string;

    readonly name: Maybe<string>;

    readonly jsondata: Maybe<Json>;

    readonly roleIds: Maybe<ReadonlyArray<string>>;

    readonly acls: Maybe<ReadonlyArray<UserAclInput>>;
    /** Optionally, specify user's first name */
    readonly firstName: Maybe<string>;
    /** Optionally, specify user's last name */
    readonly lastName: Maybe<string>;
  }

  export interface CreatePasswordUpdateRequest {
    /** The user's ID */
    readonly id: string;
    /** Optionally specify whether we should skip sending the reset email. */
    readonly skipPasswordResetEmail: Maybe<boolean>;
  }

  export interface GetCurrentUserPasswordToken {
    readonly password: Maybe<string>;
  }

  export interface CreatePasswordResetRequest {
    /** Optionally specify whether we should skip sending the reset email. */
    readonly skipPasswordResetEmail: Maybe<boolean>;
    /** The user login name. Typically email address. */
    readonly userName: string;
  }

  export interface UpdateCurrentUser {
    /** Required if updating the MFA phone number */
    readonly passwordToken: Maybe<string>;
    /** New MFA info for the current user, optional */
    readonly mfaInfo: Maybe<UpdateMfaInfo>;
    /** New user settings for the current user, optional */
    readonly userSetting: Maybe<UserSettingInfo>;
    /** New first name for the current user, optional */
    readonly firstName: Maybe<string>;
    /** New last name for the current user, optional */
    readonly lastName: Maybe<string>;
    /** New image URL for the current user, optional */
    readonly imageUrl: Maybe<string>;
  }

  export interface UpdateMfaInfo {
    readonly phoneNumber: Maybe<string>;
  }

  export interface UserSettingInfo {
    readonly key: Maybe<string>;

    readonly value: Maybe<string>;
  }

  export interface ChangePassword {
    /** The current user's old password. Must be provided even if the user is otherwise authenticated as an additional security check. */
    readonly oldPassword: string;
    /** The new password. May be subject to validation rules depending on the organization or environment system policy. */
    readonly newPassword: string;
  }

  export interface CreateDataRegistry {
    /** Optionally provide a forced ID */
    readonly id: Maybe<string>;

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

    readonly majorVersion: number;

    readonly schema: Json;
  }

  export interface UpdateSchemaState {
    /** The schemaId to update */
    readonly id: string;
    /** The new schema status */
    readonly status: SchemaStatus;
    /** Specify if publishing this schema would break ingestion */
    readonly breakingChanges: Maybe<boolean>;
  }

  export interface CreateStructuredData {
    /** Optionally provide a forced ID */
    readonly id: Maybe<string>;
    /** Id of the schema used to validate this object */
    readonly schemaId: string;

    readonly data: Maybe<Json>;

    readonly dataString: Maybe<string>;
  }

  export interface DeleteStructuredData {
    readonly id: string;
    /** Id of the schema used to validate this object */
    readonly schemaId: string;
  }

  export interface CreateCollection {
    /** the name of the collection */
    readonly name: string;
    /** description of the collection */
    readonly folderDescription: Maybe<string>;
    /** Collection image */
    readonly image: Maybe<string>;
  }

  export interface UpdateCollection {
    /** id of the collection */
    readonly folderId: string;
    /** the name of the collection */
    readonly name: Maybe<string>;
    /** description of the collection */
    readonly folderDescription: Maybe<string>;
    /** Collection image */
    readonly image: Maybe<string>;
  }

  export interface ShareCollection {
    /** id of the collection */
    readonly folderId: string;
    /** message in email */
    readonly shareMessage: Maybe<string>;
    /** list of recipients */
    readonly recipients: Maybe<ReadonlyArray<Maybe<string>>>;

    readonly shareOptions: Maybe<ShareOptions>;
  }

  export interface ShareOptions {
    readonly showImage: Maybe<boolean>;

    readonly showComments: Maybe<boolean>;

    readonly showRating: Maybe<boolean>;

    readonly showHeader: Maybe<boolean>;

    readonly showOrganizationLogo: Maybe<boolean>;

    readonly organizationLogoUrl: Maybe<boolean>;

    readonly showEngineResults: Maybe<boolean>;

    readonly showHits: Maybe<boolean>;

    readonly showAffiliateStripdown: Maybe<boolean>;

    readonly showDownload: Maybe<boolean>;

    readonly showDescription: Maybe<boolean>;

    readonly mentionPrePaddingSeconds: Maybe<number>;

    readonly mentionPostPaddingSeconds: Maybe<number>;
  }

  export interface ShareMentionFromCollection {
    /** id of the mention from collection */
    readonly mentionId: string;
    /** id of the collection */
    readonly folderId: string;
    /** message in email */
    readonly shareMessage: Maybe<string>;
    /** list of recipients */
    readonly recipients: Maybe<ReadonlyArray<Maybe<string>>>;
    /** Collection image */
    readonly shareOptions: Maybe<ShareOptions>;
  }

  export interface ShareMention {
    /** id of the mention */
    readonly mentionId: string;
    /** message in email */
    readonly shareMessage: Maybe<string>;
    /** list of recipients */
    readonly recipients: Maybe<ReadonlyArray<Maybe<string>>>;
    /** Collection image */
    readonly shareOptions: Maybe<Json>;
  }

  export interface ShareMentionInBulk {
    /** Array ids of the mentions */
    readonly mentionIds: ReadonlyArray<string>;
    /** message in email */
    readonly shareMessage: Maybe<string>;
    /** list of recipients */
    readonly recipients: Maybe<ReadonlyArray<Maybe<string>>>;
    /** Collection image */
    readonly shareOptions: Maybe<Json>;
  }

  export interface CollectionMentionInput {
    /** id of the collection */
    readonly folderId: string;
    /** id of the mention */
    readonly mentionId: string;
  }
  /** Information required to create a new folder. After creation, a folder can be renamed with the `updateFolder` mutation, but no other changes are supported. */
  export interface CreateFolder {
    /** The folder name */
    readonly name: string;
    /** The folder description */
    readonly description: string;
    /** ID of the parent folder underneath which the new folder will be placed. */
    readonly parentId: string;
    /** Root folder type to apply to the new folder */
    readonly rootFolderType: Maybe<RootFolderType>;
    /** Order index determining in what order the new folder will be displayed relative to other folders at the same level. */
    readonly orderIndex: Maybe<number>;
  }
  /** Information required to update a folder. Currently, the folder can be renamed. No other changes are supported. */
  export interface UpdateFolder {
    /** ID of the folder to update */
    readonly id: string;
    /** New name for the folder. */
    readonly name: string;
  }
  /** Move a folder into a new parent folder. */
  export interface MoveFolder {
    readonly treeObjectId: string;

    readonly prevParentTreeObjectId: string;

    readonly newParentTreeObjectId: string;

    readonly newOrderIndex: number;

    readonly prevOrderIndex: number;

    readonly rootFolderType: RootFolderType;
  }
  /** Delete a folder */
  export interface DeleteFolder {
    /** ID of the folder to delete */
    readonly id: string;

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
  /** Input required to delete a mention rating. Both the rating and mention IDs must be provided. Only the rating will be deleted. */
  export interface DeleteMentionRating {
    /** The mention ID */
    readonly mentionId: string;
    /** The rating ID */
    readonly ratingId: string;
  }
  /** Input fields required by the userLogin mutation. */
  export interface UserLogin {
    /** The user login name -- typically, email address. */
    readonly userName: string;
    /** The user password. Note that this value is only ever transmitted over the encrypted SSL protocol. */
    readonly password: string;
  }

  export interface CreateMention {
    readonly mediaId: string;

    readonly programId: string;

    readonly mentionDateTime: DateTime;

    readonly mentionHitCount: number;

    readonly mentionStatusId: Maybe<number>;

    readonly watchlistId: Maybe<string>;

    readonly cognitiveEngineResultsString: Maybe<string>;

    readonly cognitiveEngineResults: Maybe<Json>;

    readonly snippetsString: Maybe<string>;

    readonly snippets: Maybe<Json>;

    readonly hitStartDateTime: Maybe<DateTime>;

    readonly hitEndDateTime: Maybe<DateTime>;

    readonly mentionEndDateTime: Maybe<DateTime>;

    readonly metadata: Maybe<Json>;

    readonly queryTerm: Maybe<string>;
  }

  export interface UpdateMention {
    readonly id: string;

    readonly privateNote: Maybe<string>;

    readonly publicNote: Maybe<string>;

    readonly complianceStatusId: Maybe<string>;

    readonly spotTypeId: Maybe<string>;

    readonly statusId: Maybe<string>;

    readonly adCreative: Maybe<Json>;

    readonly userSnippets: Maybe<Json>;
  }

  export interface BulkUpdateWatchlistFilter {
    /** List of IDs of watchlists to update */
    readonly ids: Maybe<ReadonlyArray<string>>;
  }

  export interface BulkUpdateWatchlist {
    /** New stop date for watchlist. Currently, this is the only field that can be updated. */
    readonly stopDate: Maybe<DateTime>;
  }

  export interface FileTemporalDataObject {
    /** ID of the TDO to file */
    readonly tdoId: string;
    /** ID of the new parent folder */
    readonly folderId: string;
    /** Order index determining in what order the new TDO will be displayed relative to other TDOs at the same level */
    readonly orderIndex: Maybe<number>;
  }

  export interface UnfileTemporalDataObject {
    /** ID of the TDO to unfile */
    readonly tdoId: string;
    /** ID of the parent folder. The TDO will be removed from this folder. */
    readonly folderId: string;
  }

  export interface MoveTemporalDataObject {
    /** ID of the TDO to move */
    readonly tdoId: string;
    /** ID of the original parent folder. The TDO will be removed from this folder. */
    readonly oldFolderId: string;
    /** ID of the new parent folder. The TDO will be added to this folder. */
    readonly newFolderId: string;
  }
  /** Fields needed to upload and store an engine result using multipart form POST. */
  export interface UploadEngineResult {
    /** ID of the task that created this engine result */
    readonly taskId: string;
    /** A string containing the engine result. Use either this field, `output`, `uri`, or `file` with multipart form POST, but not more than one. */
    readonly outputString: Maybe<string>;
    /** JSON data containing the engine result. A string containing the engine result. Use either this field, `outputString`, `uri`, or `file` with multipart form POST, but not more than one. */
    readonly output: Maybe<Json>;
    /** A file to upload. Use multipart form POST to submit this field. Use this field, the `output`, `outputString`, or `uri` field, not more than one. */
    readonly file: Maybe<UploadedFile>;
    /** A URI to the file. Use one and only one of `uri`, `file`, or `output`/`outputString`. */
    readonly uri: Maybe<string>;
    /** The file name */
    readonly filename: Maybe<string>;
    /** The type of asset to create. Optional -- if not set, it will be deduced from the engine category. */
    readonly assetType: Maybe<string>;
    /** The content type of the file. Optional -- if not set, it will be deduced from the file name. */
    readonly contentType: Maybe<string>;
    /** Whether or not to mark the task as complete. Defaults to true. */
    readonly completeTask: boolean;
    /** If the result data uploaded is not a valid JSON string, then the task output data stored on the task object will be wrapped into a JSON object using this key. The asset created, however, is not modified in any way. */
    readonly outputJsonKey: string;
    /** Optionally, set attributes about the file */
    readonly fileData: Maybe<SetAssetFileData>;
    /** if true, sets the new asset to be the primary asset of its type. Only certain asset types, such as "media" and "transcript", can have primary assets. */
    readonly setAsPrimary: Maybe<boolean>;
    /** Skips indexing the engine result, preventing mentions from being generated over the results. */
    readonly skipIndexing: Maybe<boolean>;
    /** Whether or not to set the legacy `task_output` data for compatible with older clients. */
    readonly setTaskOutput: boolean;
  }

  export interface CreateWatchlist {
    /** Date and time at which the watchlist becomes effective. If not provided, defaults to current time. */
    readonly startDateTime: Maybe<DateTime>;
    /** Date and time at which the watchlist expires and is no longer effective. */
    readonly stopDateTime: DateTime;

    readonly cognitiveSearches: Maybe<ReadonlyArray<CreateCognitiveSearchInWatchlist>>;

    readonly name: string;

    readonly sourceTypeIds: Maybe<ReadonlyArray<string>>;
    /** Optional ID for a folder the watchlist should be filed in */
    readonly parentFolderId: Maybe<string>;

    readonly sourceIds: Maybe<ReadonlyArray<string>>;
    /** Set structured metadata on the watchlist. The data is subject to a set of schemas. */
    readonly details: Maybe<Json>;

    readonly searchIndex: SearchIndex;

    readonly subscriptions: Maybe<ReadonlyArray<CreateSubscriptionInWatchlist>>;
  }

  export interface CreateCognitiveSearchInWatchlist {
    readonly profile: Maybe<Json>;
    /** String with JSON containing the cognitive search profiles */
    readonly jsonstring: Maybe<string>;

    readonly mentionStatusId: string;
  }
  /** Used to create a subscription while creating a watchlist. The subscription will be for the new watchlist. */
  export interface CreateSubscriptionInWatchlist {
    readonly objectType: SubscriptionObjectType;

    readonly contact: CreateSubscriptionContact;

    readonly frequency: SubscriptionFrequency;

    readonly scheduledDay: Maybe<DayOfWeek>;

    readonly scheduledTime: Maybe<Time>;

    readonly scheduledTimeZone: string;
  }

  export interface CreateSubscriptionContact {
    readonly emailAddress: Maybe<string>;

    readonly phoneNumber: Maybe<string>;

    readonly webhookUri: Maybe<string>;
  }

  export interface UpdateWatchlist {
    readonly id: string;

    readonly startDateTime: Maybe<DateTime>;

    readonly stopDateTime: Maybe<DateTime>;

    readonly name: Maybe<string>;

    readonly sourceTypeIds: Maybe<ReadonlyArray<string>>;
    /** Set structured metadata on the watchlist. The data is subject to a set of schemas. */
    readonly details: Maybe<Json>;

    readonly searchIndex: Maybe<SearchIndex>;

    readonly parentFolderId: Maybe<string>;

    readonly sourceIds: Maybe<ReadonlyArray<string>>;

    readonly subscriptions: Maybe<ReadonlyArray<CreateSubscriptionInWatchlist>>;

    readonly cognitiveSearches: Maybe<ReadonlyArray<CreateCognitiveSearchInWatchlist>>;
  }

  export interface UpdateCognitiveSearch {
    readonly id: string;

    readonly profile: Maybe<Json>;

    readonly jsonstring: Maybe<string>;

    readonly mentionStatusId: Maybe<string>;
  }

  export interface CreateCognitiveSearch {
    readonly profile: Maybe<Json>;

    readonly jsonstring: Maybe<string>;

    readonly mentionStatusId: string;

    readonly watchlistId: string;
  }

  export interface FileWatchlist {
    /** ID of the TDO to file */
    readonly watchlistId: string;
    /** ID of the new parent folder */
    readonly folderId: string;
    /** Order index determining in what order the watchlist will be displayed relative to other objects at the same level */
    readonly orderIndex: Maybe<number>;
  }

  export interface UnfileWatchlist {
    /** ID of the watchlist to unfile */
    readonly watchlistId: string;
    /** ID of the parent folder. The watchlist will be removed from this folder. */
    readonly folderId: string;
  }

  export interface ShareFolderInput {
    /** The treeObjectId of the Folder to share */
    readonly treeObjectId: string;
    /** The organizations that will have read permissions to the Folder */
    readonly readOrganizationIds: Maybe<ReadonlyArray<Maybe<number>>>;
    /** The organizations that will have write permissions to the Folder */
    readonly writeOrganizationIds: Maybe<ReadonlyArray<Maybe<number>>>;
  }

  export interface CreateTdoWithAsset {
    /** TDO status, such as "recorded" (the default) */
    readonly status: string;
    /** A name for the TDO object, such as the name of the primary media file. */
    readonly name: Maybe<string>;
    /** Start date and time for the file */
    readonly startDateTime: DateTime;
    /** Stop date and time. If not passed, the server will apply a value based on the default chunk size of 15 minutes. */
    readonly stopDateTime: Maybe<DateTime>;
    /** determine stopDateTime based on the length of the media asset */
    readonly updateStopDateTimeFromAsset: Maybe<boolean>;
    /** The ingestion source ID for this file */
    readonly sourceId: Maybe<string>;
    /** Content type for the file. Default is "video/mp4" */
    readonly contentType: string;
    /** The file location or URI. */
    readonly uri: Maybe<string>;

    readonly file: Maybe<UploadedFile>;
    /** Deprecated - use scheduledJobId */
    readonly scheduleId: Maybe<string>;
    /** The scheduled job ID. */
    readonly scheduledJobId: Maybe<string>;
    /** True if the new TDO should be made public. If true, security.global will be set to true and users from other organizations will be able to view, but not modify, the TDO's metadata and assets. */
    readonly isPublic: Maybe<boolean>;
    /** An optional parent folder ID for the new TemporalDataObject. The folder can be filed in additional folders later using `fileTemporalDataObject`, or un-filed from this one. */
    readonly parentFolderId: Maybe<string>;
    /** Asset type. Default is "media". */
    readonly assetType: string;
    /** Optionally, set source data for this TDO. Source data identifies that task that generated this TDO. If the TDO was not generated as part of engine or adapter execution, this field should not be set. However, it is _strongly_ recommended that engines that create TDOs set this field. Doing so ensures that later tasks in the same job have appropriate access to the new TDO. This source data will be set on both the TDO and the asset. */
    readonly sourceData: Maybe<SetTdoSourceData>;

    readonly details: Maybe<Json>;
    /** Optionally, specify one or more structured data objects to apply as content templates to the TDO. They will be stored as assets of type content-template and will contain an immutable copy of the original data. */
    readonly contentTemplates: Maybe<ReadonlyArray<CreateTdoContentTemplateWithTdo>>;
    /** Optionally, add the new data to the search index. If the data is not indexed on creation, it can be indexed later by using `updateTDO` or creating a suitable job. */
    readonly addToIndex: Maybe<boolean>;
    /** An optional thumbnail URL for the TDO */
    readonly thumbnailUrl: Maybe<string>;
    /** An optional image representing the TDO source */
    readonly sourceImageUrl: Maybe<string>;
  }

  export interface CreateSubscription {
    /** ID of the object (probably a watchlist) to create a subscription for */
    readonly targetId: string;

    readonly objectType: SubscriptionObjectType;

    readonly contact: CreateSubscriptionContact;

    readonly frequency: SubscriptionFrequency;

    readonly scheduledDay: Maybe<DayOfWeek>;

    readonly scheduledTime: Maybe<Time>;

    readonly scheduledTimeZone: string;
  }

  export interface UpdateSubscription {
    readonly id: string;
  }

  export interface CreateTriggers {
    /** List of events in csv form. Use "*" to listen to all events. When using a wild card, csv form is no longer valid. Either events or types can be specified at a time. Example: events: "event1,event2,event3" // valid events: "*" // valid events: "*,event1" // invalid */
    readonly events: Maybe<string>;
    /** List of events in csv form. Use "*" to listen to all types. When using a wild card, csv form is no longer valid. Either events or types can be specified at a time. Example: types: "type1,type2,type3" // valid types: "*" // valid types: "*,type1" // invalid */
    readonly types: Maybe<string>;
    /** Array of hook targets */
    readonly targets: Maybe<ReadonlyArray<Maybe<CreateTriggerType>>>;
  }

  export interface CreateTriggerType {
    /** The name of the trigger target. Currently we only support Webhook, SMS, and Email */
    readonly name: CreateTriggerTarget;
    /** The parameters for this hook. Must be a JSON payload. See HookTarget docs for supported kvp for each HookTarget type. */
    readonly params: Json;
  }

  export interface GetEngineJwt {
    /** The ID of the engine that created the asset */
    readonly engineId: string;
    /** The set of IDs by resource type */
    readonly resource: GetEngineJwtResource;
  }

  export interface GetEngineJwtResource {
    readonly tdoId: Maybe<string>;

    readonly jobId: string;

    readonly taskId: string;
  }

  export interface CreateSavedSearch {
    readonly name: string;

    readonly sharedWithOrganization: Maybe<boolean>;

    readonly csp: Json;
  }

  export interface ReplaceSavedSearch {
    readonly id: string;

    readonly name: string;

    readonly sharedWithOrganization: Maybe<boolean>;

    readonly csp: Json;
  }

  export interface SendEmail {
    readonly from: string;

    readonly to: string;

    readonly subject: string;
    /** Message can be either text or HTML */
    readonly message: string;

    readonly replyTo: string;
  }

  export interface CreateFolderContentTempate {
    /** The ID of folder */
    readonly folderId: string;
    /** The ID of Structure Data Object */
    readonly sdoId: string;
    /** The ID of Data Registry */
    readonly schemaId: string;

    readonly data: Maybe<Json>;
  }

  export interface UpdateFolderContentTempate {
    /** The ID of Folder Content Template */
    readonly id: string;
    /** The ID of folder */
    readonly folderId: Maybe<string>;
    /** The ID of Structure Data Object */
    readonly sdoId: Maybe<string>;
    /** The ID of Data Registry */
    readonly schemaId: Maybe<string>;

    readonly data: Maybe<Json>;
  }

  export interface CreateExportRequest {
    /** Whether or not to include TDO media assets in the export. Setting this option can greatly increase the size of the export file. */
    readonly includeMedia: Maybe<boolean>;
    /** Information on the TDOs to export data from */
    readonly tdoData: ReadonlyArray<CreateExportRequestForTdo>;
    /** Information on the export output configuration */
    readonly outputConfigurations: ReadonlyArray<CreateExportRequestOutputConfig>;
  }

  export interface CreateExportRequestForTdo {
    /** ID of the TDO to export from Either this option _or_ mentionId must be provided. This option must be provided if includeMedia is set to true on CreateExportRequest */
    readonly tdoId: Maybe<string>;
    /** ID of the mention to export from Either this option _or_ tdoId must be provided. */
    readonly mentionId: Maybe<string>;
    /** optional start offset in milliseconds for the export, relative to TDO startDateTime */
    readonly startOffsetMs: Maybe<number>;
    /** optional stop offset in milliseconds for the export, relative to the TDO stopDateTime. */
    readonly stopOffsetMs: Maybe<number>;
    /** optional start date for the exported results. Takes priority over startOffsetMs. */
    readonly startDate: Maybe<DateTime>;
    /** optional end date for the exported results. Takes priority over stopOffsetMs. */
    readonly stopDate: Maybe<DateTime>;
  }

  export interface CreateExportRequestOutputConfig {
    /** ID of an individual engine to export results for. Either this option _or_ categoryId must be provided. */
    readonly engineId: Maybe<string>;
    /** ID of an engine category to export results for. Either this option _or_ engineId must be provided. */
    readonly categoryId: Maybe<string>;
    /** Export output format configuration */
    readonly formats: ReadonlyArray<CreateExportRequestFormatConfig>;
  }

  export interface CreateExportRequestFormatConfig {
    /** The file extension of the export type, such as "vlf" or "ttml". Must be supported by the requested engine category. */
    readonly extension: string;
    /** Optional export options specific to the target engine category. */
    readonly options: Maybe<Json>;
  }

  export interface UpdateExportRequest {
    /** ID of the export request to update */
    readonly id: string;
    /** Status change */
    readonly status: Maybe<ExportRequestStatus>;
    /** The asset URI */
    readonly assetUri: Maybe<string>;
  }

  export interface CreateMentions {
    readonly mentions: Maybe<ReadonlyArray<CreateMention>>;
  }

  export interface CreateMediaShare {
    readonly mediaType: string;
    /** sourceId OR tdoId is required */
    readonly sourceId: Maybe<string>;

    readonly tdoId: Maybe<string>;

    readonly scheduledJobId: Maybe<string>;

    readonly startDateTime: Maybe<DateTime>;

    readonly stopDateTime: Maybe<DateTime>;

    readonly startOffsetMs: Maybe<number>;

    readonly stopOffsetMs: Maybe<number>;

    readonly expireDateTime: Maybe<DateTime>;
    /** various settings for diffrent types of media. like audio only for videos */
    readonly settings: Maybe<Json>;
  }

  export interface CreateWorkflowRuntimeStorageData {
    /** Unique lookup id for the workflowRuntimeData */
    readonly storageKey: string;
    /** Data content - base64 encoded binary, plain string or encoded JSON */
    readonly storageData: string;
    /** Optional metadata for the workflowRuntimeData */
    readonly storageMetadata: Maybe<string>;
  }

  export interface CreateEvent {
    /** Name of the event to be created */
    readonly eventName: string;
    /** The type of event */
    readonly eventType: string;
    /** Identifier of the app using the event. Using "system" as application will throw error */
    readonly application: string;
    /** Event visibility. Private event is only visible to the app publisher. */
    readonly public: boolean;
    /** General description of the event */
    readonly description: Maybe<string>;
    /** Optional schema. Accept on Protocol buffer format. If not provided, Custom message schema is inferred */
    readonly schemaData: Maybe<string>;
  }

  export interface UpdateEvent {
    /** ID of event */
    readonly id: string;
    /** General description of the event */
    readonly description: Maybe<string>;
  }

  export interface SubscribeEvent {
    /** Existing event name */
    readonly eventName: Maybe<string>;
    /** Existing event type */
    readonly eventType: Maybe<string>;
    /** Identifier of the app using the event */
    readonly application: string;
    /** a string payload, it should be serialized Protobuf data with base64 encoding */
    readonly delivery: EventDelivery;
  }

  export interface EventDelivery {
    readonly name: EventDeliveryType;

    readonly params: Json;
  }

  export interface EmitEvent {
    /** Event name */
    readonly eventName: string;
    /** Existing event type */
    readonly eventType: string;
    /** Identifier of the app using the event */
    readonly application: string;
    /** string payload, it should be serialized Protobuf data with base64 encoding or escaped JSON string */
    readonly payload: string;
  }

  export interface CreateProcessTemplate {
    readonly name: string;

    readonly taskList: Json;
  }

  export interface UpdateProcessTemplate {
    readonly id: string;

    readonly taskList: Json;
  }

  export interface CreateMentionExportRequest {
    /** Filter information will be received to export data from */
    readonly mentionFilters: CreateMentionExportRequestFilter;
    /** User local timezone */
    readonly userTimeZone: string;
  }

  export interface CreateMentionExportRequestFilter {
    /** List optional programIds will be filtered to export data */
    readonly programIds: Maybe<ReadonlyArray<Maybe<string>>>;
    /** List optional marketIds will be filtered to export data */
    readonly marketIds: Maybe<ReadonlyArray<Maybe<string>>>;
    /** List optional sourceIds will be filtered to export data */
    readonly mediaSourceIds: Maybe<ReadonlyArray<Maybe<string>>>;
    /** List optional sourceTypeIds will be filtered to export data */
    readonly mediaSourceTypeIds: Maybe<ReadonlyArray<Maybe<string>>>;
    /** List optional mentionStatusIds will be filtered to export data */
    readonly statusIds: Maybe<ReadonlyArray<Maybe<string>>>;
    /** List optional spotTypeIds will be filtered to export data */
    readonly spotTypeList: Maybe<ReadonlyArray<Maybe<string>>>;
    /** Filter mentionDate from/to */
    readonly date: Maybe<CreateMentionExportRequestFilterDate>;
    /** List optional watchlistIds will be filtered to export data */
    readonly watchlistIds: Maybe<ReadonlyArray<Maybe<string>>>;
  }

  export interface CreateMentionExportRequestFilterDate {
    readonly from: Maybe<DateTime>;

    readonly to: Maybe<DateTime>;
  }

  export interface UpdateMentionExportRequest {
    /** The required mentionExportRequestId will be used for update */
    readonly id: string;
    /** Status of mentionExportRequest record */
    readonly status: Maybe<ExportRequestStatus>;
    /** The asset URI */
    readonly assetUri: Maybe<string>;
  }

  export interface CreateCreative {
    readonly name: string;

    readonly keywords: Maybe<string>;

    readonly brandId: Maybe<string>;

    readonly advertiserId: Maybe<string>;
  }

  export interface UpdateCreative {
    readonly id: string;

    readonly name: Maybe<string>;

    readonly keywords: Maybe<string>;

    readonly brandId: Maybe<string>;

    readonly advertiserId: Maybe<string>;
  }

  export interface EmitSystemEvent {
    /** A topic */
    readonly topic: string;
    /** The event payload */
    readonly payload: Json;
  }

  export interface CreateCluster {
    readonly name: string;

    readonly allowedEngines: ReadonlyArray<Maybe<string>>;

    readonly dockerCredentials: Json;

    readonly type: Maybe<ClusterType>;

    readonly containerTag: Maybe<string>;

    readonly paused: Maybe<boolean>;
    /** Specify memory size in raw bytes or in human-readable format such as 8gb, 1024mb, etc. */
    readonly memorySize: Maybe<string>;
    /** Specify storage size in raw bytes or in human-readable format such as 8gb, 1024mb, etc. */
    readonly storageSize: Maybe<string>;

    readonly bypassAllowedEngines: Maybe<boolean>;
    /** Permissions granted to other organizations. Only the cluster owner can view or edit this field. */
    readonly collaborators: Maybe<ReadonlyArray<CreateClusterCollaborator>>;
  }

  export interface CreateClusterCollaborator {
    /** ID of the organization to share */
    readonly organizationId: string;
    /** Permission to grant cluster. Can be `viewer`. Set to `none` to revoke permissions for this organization. */
    readonly permission: SetClusterPermission;
  }

  export interface UpdateCluster {
    readonly id: string;

    readonly name: Maybe<string>;

    readonly allowedEngines: Maybe<ReadonlyArray<Maybe<string>>>;

    readonly dockerCredentials: Maybe<Json>;

    readonly containerTag: Maybe<string>;

    readonly memorySize: Maybe<number>;

    readonly storageSize: Maybe<number>;

    readonly bypassAllowedEngines: Maybe<boolean>;
    /** Permissions granted to other organizations. Only the cluster owner can view or edit this field. */
    readonly collaborators: Maybe<ReadonlyArray<CreateClusterCollaborator>>;
  }

  export interface PauseCluster {
    readonly id: string;
  }

  export interface UnpauseCluster {
    readonly id: string;
  }

  export interface CreateClusterNode {
    readonly name: Maybe<string>;

    readonly clusterId: Maybe<string>;

    readonly metrics: CreateMetrics;

    readonly containerTag: Maybe<string>;

    readonly offlineBrowsing: Maybe<boolean>;

    readonly storagePresent: Maybe<boolean>;

    readonly type: Maybe<ClusterType>;
  }

  export interface CreateMetrics {
    readonly cpuCount: number;

    readonly mbRam: number;

    readonly mbDisk: number;

    readonly ipExternal: Maybe<string>;

    readonly ipInternal: Maybe<string>;

    readonly ami: Maybe<string>;

    readonly ec2InstanceType: Maybe<string>;

    readonly ec2Region: Maybe<string>;

    readonly awsAccount: Maybe<string>;

    readonly loadAverage: Maybe<Json>;
  }

  export interface UpdateClusterNode {
    readonly id: string;

    readonly name: Maybe<string>;
  }

  export interface CreateScheduledJob {
    readonly jobPipelineIds: Maybe<ReadonlyArray<string>>;

    readonly jobTemplateIds: Maybe<ReadonlyArray<string>>;

    readonly jobTemplates: Maybe<ReadonlyArray<CreateJobTemplate>>;

    readonly weeklyScheduleParts: Maybe<ReadonlyArray<CreateWeeklySchedulePart>>;

    readonly recurringScheduleParts: Maybe<ReadonlyArray<CreateRecurringSchedulePart>>;

    readonly name: string;
    /** A detailed description. Defaults to name. */
    readonly description: Maybe<string>;

    readonly runMode: RunMode;
    /** JSON containing metadata details for this scheduled job. If supplied, then the detailsSchemaId must also be set. The supplied data must comply with the schema */
    readonly details: Maybe<Json>;
    /** Schema ID for detail metadata on this scheduled job */
    readonly detailsSchemaId: Maybe<string>;

    readonly isActive: boolean;

    readonly startDateTime: Maybe<DateTime>;

    readonly stopDateTime: Maybe<DateTime>;
    /** Optionally, associate content templates with the new scheduled job */
    readonly contentTemplates: Maybe<ReadonlyArray<CreateScheduledJobContentTemplateWithScheduledJob>>;
    /** Organization ID. Used only by Veritone platform components. Other clients should not attempt to send this field. Any value sent will be ignored. */
    readonly organizationId: Maybe<string>;
    /** Indicates whether or not the scheduled job is publicly accessible. Only Veritone administrators can create public scheduled jobs. Other users will get an error if they attempt to set this value to true. */
    readonly isPublic: Maybe<boolean>;

    readonly affiliates: Maybe<ReadonlyArray<CreateProgramAffiliate>>;
  }

  export interface CreateJobTemplate {
    /** The set of task template definitions for this job template. */
    readonly taskTemplates: Maybe<ReadonlyArray<CreateTaskTemplate>>;
    /** Optional. Specify a job pipeline ID if this job template is associated with a job pipeline. */
    readonly jobPipelineId: Maybe<string>;
    /** Optional. Should be set only if `jobPipelineId` is set. Specifies the stage in the pipeline at which this job template should be applied. */
    readonly jobPipelineStage: Maybe<number>;
    /** Used only by Veritone platform components. */
    readonly skipDecider: Maybe<boolean>;
    /** Optional job-level configuration. Typically used only by Veritone platform components. */
    readonly jobConfig: Maybe<Json>;
    /** Application ID. Used only by Veritone platform components. Other clients should not attempt to send this field. Any value sent will be ignored. */
    readonly applicationId: Maybe<string>;

    readonly clusterId: Maybe<string>;
  }

  export interface CreateTaskTemplate {
    readonly engineId: Maybe<string>;

    readonly engineConfigId: Maybe<string>;

    readonly executionLocationId: Maybe<string>;

    readonly jobTemplateId: Maybe<string>;

    readonly payload: Maybe<Json>;

    readonly payloadString: Maybe<string>;

    readonly parentTaskId: Maybe<string>;
  }

  export interface CreateWeeklySchedulePart {
    readonly scheduledDay: Maybe<DayOfWeek>;

    readonly startTime: Maybe<Time>;

    readonly stopTime: Maybe<Time>;
  }

  export interface CreateRecurringSchedulePart {
    readonly repeatIntervalUnit: IntervalUnit;

    readonly repeatInterval: number;

    readonly durationSeconds: Maybe<number>;
    /** Time of day, required for repeat interval unit in days. */
    readonly startTime: Maybe<Time>;
  }

  export interface CreateScheduledJobContentTemplateWithScheduledJob {
    /** Supply the ID of the data registry that contains the schema for the content template. */
    readonly schemaId: string;
    /** To associate an existing structured data object (SDO) to the source, provide the SDO ID. Either this field or data must be supplied. */
    readonly sdoId: Maybe<string>;
    /** To create a new structured data object, supply this field with JSON to save in the SDO. The JSON must comply with the schema defined in data registry. */
    readonly data: Maybe<Json>;
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
    /** Organization ID. Used only by Veritone platform components. Other clients should not attempt to send this field. Any value sent will be ignored. */
    readonly organizationId: Maybe<string>;
  }

  export interface RevertScheduledJob {
    readonly id: string;
  }

  export interface UpdateScheduledJob {
    readonly id: string;

    readonly jobPipelineIds: Maybe<ReadonlyArray<string>>;

    readonly jobTemplateIds: Maybe<ReadonlyArray<string>>;
    /** Optionally, specify the job template definitions here. */
    readonly jobTemplates: Maybe<ReadonlyArray<CreateJobTemplate>>;

    readonly weeklyScheduleParts: Maybe<ReadonlyArray<CreateWeeklySchedulePart>>;

    readonly recurringScheduleParts: Maybe<ReadonlyArray<CreateRecurringSchedulePart>>;

    readonly name: Maybe<string>;
    /** A detailed description. Defaults to name. */
    readonly description: Maybe<string>;

    readonly runMode: Maybe<RunMode>;
    /** JSON containing metadata details for this scheduled job. If the scheduled job does not already have a schema ID associated with, one must be supplied along with this data. In either case, the supplied data must comply with the schema. */
    readonly details: Maybe<Json>;
    /** ID of the schema for detail metadata on this scheduled job */
    readonly detailsSchemaId: Maybe<string>;

    readonly isActive: Maybe<boolean>;

    readonly startDateTime: Maybe<DateTime>;

    readonly stopDateTime: Maybe<DateTime>;
    /** Optionally, associate content templates with the new scheduled job */
    readonly contentTemplates: Maybe<ReadonlyArray<CreateScheduledJobContentTemplateWithScheduledJob>>;
    /** Indicates whether or not the scheduled job is publicly accessible. Only Veritone administrators can create public scheduled jobs. Other users will get an error if they attempt to set this value to true. */
    readonly isPublic: Maybe<boolean>;

    readonly affiliates: Maybe<ReadonlyArray<CreateProgramAffiliate>>;
    /** Indicates whether or not the scheduled job we should upgrade this schedule job to the new data model if an upgrade is possible. */
    readonly migrateIfLegacy: Maybe<boolean>;
  }

  export interface CreateScheduledJobContentTemplate {
    /** Specify the scheduled job ID that this content template applies to */
    readonly scheduledJobId: string;
    /** Supply the ID of the data registry that contains the schema for the content template. */
    readonly schemaId: string;
    /** To associate an existing structured data object (SDO) to the source, provide the SDO ID. Either this field or data must be supplied. */
    readonly sdoId: Maybe<string>;
    /** To create a new structured data object, supply this field with JSON to save in the SDO. The JSON must comply with the schema defined in data registry. */
    readonly data: Maybe<Json>;
  }
  /** Data used to create a new source */
  export interface CreateSource {
    /** The source type ID */
    readonly sourceTypeId: string;
    /** The human-readable source name. The value does not have to be unique, but it is strongly recommended to use a name that is unique within the owning organization. */
    readonly name: string;
    /** Indicates whether or not the source is public. Default is false (private to owner organization). */
    readonly isPublic: Maybe<boolean>;
    /** Additional metadata to associate with the source. This data may be validated against a schema associated with the source type. */
    readonly details: Maybe<Json>;
    /** Optional thumbnail image URL for the source */
    readonly thumbnailUrl: Maybe<string>;
    /** Optionally, associate content templates with the new source */
    readonly contentTemplates: Maybe<ReadonlyArray<CreateSourceContentTemplateWithSource>>;
    /** Optionally associate a schema for correlation. Required when correlationSDOId is specified. */
    readonly correlationSchemaId: Maybe<string>;
    /** Optionally associate a structured data object of the specified correlationSchemaId. Required when correlationSchemaId is specified. */
    readonly correlationSDOId: Maybe<string>;
    /** Add or modify collaborators on the source. */
    readonly collaborators: Maybe<ReadonlyArray<CreateSourceCollaborator>>;
    /** Optionally, set an initial state for the source. This is typically not required. */
    readonly state: Maybe<Json>;
  }

  export interface CreateSourceContentTemplateWithSource {
    /** Supply the ID of the data registry that contains the schema for the content template. */
    readonly schemaId: string;
    /** To associate an existing structured data object (SDO) to the source, provide the SDO ID. Either this field or data must be supplied. */
    readonly sdoId: Maybe<string>;
    /** To create a new structured data object, supply this field with JSON to save in the SDO. The JSON must comply with the schema defined in data registry. */
    readonly data: Maybe<Json>;
  }

  export interface CreateSourceCollaborator {
    /** ID of the organization to share the source with */
    readonly organizationId: string;
    /** Permission to grant. Can be `editor` or `viewer`. Set to `none` to revoke permissions for this organization. */
    readonly permission: SetSourcePermission;
  }
  /** Data used to update an existing source */
  export interface UpdateSource {
    /** The ID of the source to update */
    readonly id: string;
    /** Update the name field */
    readonly name: Maybe<string>;
    /** Update the isPublic field */
    readonly isPublic: Maybe<boolean>;
    /** Additional metadata to associate with the source. This data may be validated against a schema associated with the source type. */
    readonly details: Maybe<Json>;
    /** Optional thumbnail image URL for the source */
    readonly thumbnailUrl: Maybe<string>;
    /** Optionally, associate content templates with the new source */
    readonly contentTemplates: Maybe<ReadonlyArray<CreateSourceContentTemplateWithSource>>;
    /** Optionally associate a schema for correlation. Required when correlationSDOId is specified. */
    readonly correlationSchemaId: Maybe<string>;
    /** Optionally associate a structured data object of the specified correlationSchemaId. Required when correlationSchemaId is specified. */
    readonly correlationSDOId: Maybe<string>;
    /** Add or modify collaborators on the source. Permissions for organizations not mentioned in this list will _not_ be modified. To revoke permissions for an organization, use the `none` permission. */
    readonly collaborators: Maybe<ReadonlyArray<CreateSourceCollaborator>>;
    /** Set current state for the source. This is used only by the adapters that use the source and should not be set by other clients. */
    readonly state: Maybe<Json>;
  }

  export interface CreateSourceContentTemplate {
    /** Specify the source ID that this content template applies to */
    readonly sourceId: string;
    /** Supply the ID of the data registry that contains the schema for the content template. */
    readonly schemaId: string;
    /** To associate an existing structured data object (SDO) to the source, provide the SDO ID. Either this field or data must be supplied. */
    readonly sdoId: Maybe<string>;
    /** To create a new structured data object, supply this field with JSON to save in the SDO. The JSON must comply with the schema defined in data registry. */
    readonly data: Maybe<Json>;
  }

  export interface CreateSourceType {
    readonly sourceSchemaId: Maybe<string>;

    readonly credentialSchemaId: Maybe<string>;

    readonly name: string;

    readonly details: Maybe<Json>;

    readonly credentialType: CredentialType;
    /** Indicates that the source type is publicly accessible. If false, is usable only by the owner organization. */
    readonly isPublic: Maybe<boolean>;
    /** Indicates whether or not the source type is "live", such as a camera feed */
    readonly isLive: Maybe<boolean>;
    /** Indicates whether or not the source type requires scan pipeline jobs */
    readonly requiresScanPipeline: Maybe<boolean>;
    /** Source type category ID */
    readonly categoryId: string;
  }

  export interface UpdateSourceType {
    readonly id: string;

    readonly name: Maybe<string>;

    readonly sourceSchemaId: Maybe<string>;

    readonly credentialSchemaId: Maybe<string>;

    readonly details: Maybe<Json>;

    readonly credentialType: Maybe<CredentialType>;
    /** Indicates that the source type is publicly accessible. If false, is usable only by the owner organization. */
    readonly isPublic: Maybe<boolean>;
    /** Indicates whether or not the source type is "live", such as a camera feed */
    readonly isLive: Maybe<boolean>;
    /** Indicates whether or not the source type requires scan pipeline jobs */
    readonly requiresScanPipeline: Maybe<boolean>;
    /** Source type category ID */
    readonly categoryId: Maybe<string>;
  }

  export interface CreateJobPipeline {
    readonly jobTemplateIds: Maybe<ReadonlyArray<string>>;

    readonly isPublic: Maybe<boolean>;
  }

  export interface UpdateJobPipeline {
    readonly id: string;

    readonly jobTemplateIds: Maybe<ReadonlyArray<string>>;

    readonly isPublic: Maybe<boolean>;
  }

  export interface UpdateJobTemplate {
    readonly id: string;
    /** taskTemplates: [CreateTaskTemplate!] */
    readonly jobPipelineStage: Maybe<number>;

    readonly skipDecider: Maybe<boolean>;

    readonly jobConfig: Maybe<Json>;
  }

  export interface UpdateTaskTemplate {
    readonly id: string;

    readonly payload: Maybe<Json>;

    readonly payloadString: Maybe<string>;

    readonly parentTaskId: Maybe<string>;
  }

  export interface CreateNextPipelineJobs {
    readonly jobPipelineId: Maybe<string>;

    readonly parentJobId: Maybe<string>;

    readonly payload: Maybe<Json>;

    readonly targetInfo: Maybe<CreateNextPipelineJobsTargetInfo>;
    /** Supply this value if and only if the job pipeline was started as part of a scheduled job. */
    readonly scheduledJobId: Maybe<string>;

    readonly organizationId: Maybe<string>;

    readonly applicationId: Maybe<string>;
  }

  export interface CreateNextPipelineJobsTargetInfo {
    /** ID of the target object for the job pipeline, typically that of a TemporalDataObject */
    readonly targetId: string;

    readonly startOffsetMs: Maybe<number>;

    readonly endOffsetMs: Maybe<number>;
  }

  export interface LaunchScheduledJobs {
    /** Optional data about the job target, a TemporalDataObject. If this field is not specified then a suitable object will be created automatically. */
    readonly targetInfo: Maybe<CreateAllPipelineJobsTargetInfo>;
    /** Optional data used to create a _new_ TDO for the job. Specify this field _or_ `targetInfo`, but not both. */
    readonly createTargetInfo: Maybe<CreateTdoForJob>;
    /** Job payload */
    readonly payload: Maybe<Json>;

    readonly scheduledJobId: Maybe<string>;
  }

  export interface CreateAllPipelineJobsTargetInfo {
    /** ID of the target object for the job pipeline, typically that of a TemporalDataObject */
    readonly targetId: string;

    readonly startOffsetMs: Maybe<number>;

    readonly endOffsetMs: Maybe<number>;
  }

  export interface CreateTdoForJob {
    /** A name for the TDO object, such as the name of the primary media file. If not provided, the TDO will have the name of the scheduled job that created it. */
    readonly name: Maybe<string>;
    /** A description for the TDO object. */
    readonly description: Maybe<string>;
    /** True if the new TDO should be made public. If true, security.global will be set to true and users from other organizations will be able to view, but not modify, the TDO's metadata and assets. */
    readonly isPublic: Maybe<boolean>;
    /** An optional parent folder ID for the new TemporalDataObject. The folder can be filed in additional folders later using `fileTemporalDataObject`, or un-filed from this one. */
    readonly parentFolderId: Maybe<string>;
    /** Only internal systems can set this value */
    readonly applicationId: Maybe<string>;
    /** Status, such as "downloaded" or "recording". The server will set a value if one is not provided. */
    readonly status: Maybe<string>;
    /** Detailed metadata about the TDO */
    readonly details: Maybe<Json>;
    /** Optionally, specify one or more structured data objects to apply as content templates to the TDO. They will be stored as assets of type content-template and will contain an immutable copy of the original data. */
    readonly contentTemplates: Maybe<ReadonlyArray<CreateTdoContentTemplateWithTdo>>;
    /** Optionally, add the new data to the search index. If the data is not indexed on creation, it can be indexed later by using `updateTDO` or creating a suitable job. */
    readonly addToIndex: Maybe<boolean>;
    /** An optional thumbnail URL for the TDO */
    readonly thumbnailUrl: Maybe<string>;
    /** An optional image representing the TDO source */
    readonly sourceImageUrl: Maybe<string>;
  }

  export interface LaunchJobTemplates {
    readonly ids: ReadonlyArray<string>;

    readonly scheduledJobId: Maybe<string>;

    readonly payload: Maybe<Json>;

    readonly targetInfo: Maybe<LaunchJobTemplatesTargetInfo>;
  }

  export interface LaunchJobTemplatesTargetInfo {
    /** ID of the target object for the jobs, typically that of a TemporalDataObject */
    readonly targetId: string;

    readonly startOffsetMs: Maybe<number>;

    readonly endOffsetMs: Maybe<number>;
  }

  export interface GetNextBundleForCluster {
    /** ID of cluster need to get next bundle */
    readonly clusterId: string;
  }

  export interface UpdateBundleStatusAsCluster {
    /** Id of the cluster. */
    readonly clusterId: string;
    /** Id of the bundle. */
    readonly bundleId: string;
    /** Bundle status body object */
    readonly bundleStatus: BundleStatus;
  }

  export interface BundleStatus {
    readonly bundleStarted: Maybe<DateTime>;

    readonly bundleCompleted: Maybe<DateTime>;

    readonly bundleResults: BundleResults;

    readonly markAsCompleted: Maybe<boolean>;
  }

  export interface BundleResults {
    readonly found: number;

    readonly completed: number;

    readonly errors: BundleError;
  }

  export interface BundleError {
    readonly error: string;
  }

  export interface CreateAllPipelineJobs {
    readonly jobPipelineId: string;

    readonly jobPipelineStage: number;
    /** Optional data about the job target, a TemporalDataObject. If this field is not specified then a suitable object will be created automatically. */
    readonly targetInfo: Maybe<CreateAllPipelineJobsTargetInfo>;
    /** Job payload */
    readonly payload: Maybe<Json>;
    /** Supply this value if and only if the job pipeline was started as part of a scheduled job. */
    readonly scheduledJobId: Maybe<string>;

    readonly organizationId: Maybe<string>;

    readonly applicationId: Maybe<string>;
  }

  export interface CreateCognitiveSearchCondition {
    readonly engineCategoryId: string;

    readonly state: Json;
  }

  export interface CreateCognitiveSearchProfile {
    readonly and: Maybe<ReadonlyArray<Maybe<CreateCognitiveSearchProfile>>>;

    readonly or: Maybe<ReadonlyArray<Maybe<CreateCognitiveSearchProfile>>>;

    readonly condition: Maybe<CreateCognitiveSearchCondition>;
  }

  export interface CreateEngineConfiguration {
    readonly sourceId: string;

    readonly credentialIds: Maybe<ReadonlyArray<string>>;
  }

  export interface CreateEngineDependency {
    /** The category type this engine depends on. Must be a valid categoryType from an existing EngineCategory. */
    readonly dependencyType: string;
    /** An optional asset type that the engine will expect to have been created. */
    readonly assetType: Maybe<string>;
  }

  export interface CreateExternalCredential {
    readonly sourceTypeId: Maybe<string>;

    readonly dataId: Maybe<string>;
  }

  export interface CreateScheduledJobCollaborator {
    /** ID of the organization to share the source with */
    readonly organizationId: string;
    /** Permission to grant. Can be `editor` or `viewer`. Set to `none` to revoke permissions for this organization. */
    readonly permission: SetScheduledJobPermission;
  }

  export interface SearchInput {
    /** Provide an offset to skip to a certain element in the result, for paging. */
    readonly offset: Maybe<number>;
    /** Maximum number of results that were retrieved in this query; page size */
    readonly limit: Maybe<number>;

    readonly index: ReadonlyArray<Maybe<string>>;

    readonly query: Json;

    readonly select: Maybe<Json>;
  }

  export interface UpdateEngineConfiguration {
    readonly id: string;

    readonly credentialIds: Maybe<ReadonlyArray<string>>;
  }

  export interface UpdateEngineDependency {
    /** The category type this engine depends on. Must be a valid categoryType from an existing EngineCategory. */
    readonly dependencyType: Maybe<string>;
    /** An optional asset type that the engine will expect to have been created. */
    readonly assetType: Maybe<string>;
  }

  export interface UpdateExternalCredential {
    readonly id: string;

    readonly dataId: Maybe<string>;
  }

  export enum TemporalDataObjectOrderBy {
    CreatedDateTime = 'createdDateTime',
    ModifiedDateTime = 'modifiedDateTime',
    StartDateTime = 'startDateTime',
    StopDateTime = 'stopDateTime',
  }

  export enum OrderDirection {
    Asc = 'asc',
    Desc = 'desc',
  }

  export enum TemporalDataObjectDateTimeField {
    CreatedDateTime = 'createdDateTime',
    ModifiedDateTime = 'modifiedDateTime',
    StartDateTime = 'startDateTime',
    StopDateTime = 'stopDateTime',
  }

  export enum AssetOrderBy {
    CreatedDateTime = 'createdDateTime',
    AssetType = 'assetType',
    ContentType = 'contentType',
  }

  export enum TaskStatus {
    Pending = 'pending',
    Running = 'running',
    Complete = 'complete',
    Queued = 'queued',
    Accepted = 'accepted',
    Failed = 'failed',
    Cancelled = 'cancelled',
    StandbyPending = 'standby_pending',
    Waiting = 'waiting',
    Resuming = 'resuming',
    Aborted = 'aborted',
  }
  /** Deployment models describe how an engine or application operates on the network and where the data it works with is transmitted. See Veritone's developer documentation at https://steel-ventures.atlassian.net/wiki/spaces/VDH/pages/101364981/Engine+Deployment+Models for a full description. */
  export enum DeploymentModel {
    FullyNetworkIsolated = 'FullyNetworkIsolated',
    MostlyNetworkIsolated = 'MostlyNetworkIsolated',
    NonNetworkIsolated = 'NonNetworkIsolated',
    HumanReview = 'HumanReview',
  }
  /** Set of possible states for a custom application. The application state determines whether or not it is available in production and the actions that can be taken on it. */
  export enum ApplicationStatus {
    Active = 'active',
    Draft = 'draft',
    Deleted = 'deleted',
    Pending = 'pending',
    Rejected = 'rejected',
    Approved = 'approved',
    Disabled = 'disabled',
  }

  export enum ApplicationStateAction {
    Approve = 'approve',
    Edit = 'edit',
    Delete = 'delete',
    Deploy = 'deploy',
    Disable = 'disable',
    Enable = 'enable',
    Reject = 'reject',
    Submit = 'submit',
    Undelete = 'undelete',
  }

  export enum OrganizationStatus {
    Active = 'active',
    Deleted = 'deleted',
  }

  export enum RootFolderType {
    Watchlist = 'watchlist',
    Collection = 'collection',
    Cms = 'cms',
  }

  export enum FolderStatus {
    Active = 'active',
    Inactive = 'inactive',
  }

  export enum SchemaStatus {
    Published = 'published',
    Deleted = 'deleted',
    Draft = 'draft',
    Inactive = 'inactive',
  }

  export enum SchemaOrderFields {
    MajorVersion = 'majorVersion',
    MinorVersion = 'minorVersion',
    Status = 'status',
    CreatedDateTime = 'createdDateTime',
    ModifiedDateTime = 'modifiedDateTime',
  }

  export enum SchemaAction {
    View = 'view',
    Edit = 'edit',
    Publish = 'publish',
    Deactivate = 'deactivate',
    Delete = 'delete',
  }

  export enum StructuredDataOrderByField {
    CreatedDateTime = 'createdDateTime',
    ModifiedDateTime = 'modifiedDateTime',
  }

  export enum UserStatus {
    Active = 'active',
    Suspended = 'suspended',
    Deleted = 'deleted',
  }

  export enum EngineTypeFilter {
    Cognition = 'Cognition',
    Ingestion = 'Ingestion',
    Aggregator = 'Aggregator',
  }

  export enum ClusterSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
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
    Name = 'name',
    Id = 'id',
    State = 'state',
    Price = 'price',
    Rating = 'rating',
    Order = 'order',
    CreatedDateTime = 'createdDateTime',
    ModifiedDateTime = 'modifiedDateTime',
  }

  export enum EntityIdentifierDataType {
    Image = 'image',
    Audio = 'audio',
    Video = 'video',
    Text = 'text',
    Pdf = 'pdf',
    Tdo = 'tdo',
  }

  export enum SubscriptionObjectType {
    Mention = 'mention',
  }

  export enum SubscriptionFrequency {
    Immediate = 'immediate',
    Daily = 'daily',
    Weekly = 'weekly',
    Never = 'never',
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
    Mine = 'mine',
    Global = 'global',
  }

  export enum CredentialType {
    None = 'None',
    Any = 'Any',
    ApiKey = 'APIKey',
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
    StartsWith = 'startsWith',
    EndsWith = 'endsWith',
    Contains = 'contains',
    Exact = 'exact',
  }
  /** Source list sort field options */
  export enum SourceOrderField {
    CreatedDateTime = 'createdDateTime',
    ModifiedDateTime = 'modifiedDateTime',
    Id = 'id',
    Name = 'name',
    SourceTypeId = 'sourceTypeId',
  }
  /** Permissions or roles on source objects */
  export enum SourcePermission {
    Editor = 'editor',
    Viewer = 'viewer',
    Owner = 'owner',
  }

  export enum SourceCollaboratorOrderBy {
    OrganizationId = 'organizationId',
    Permission = 'permission',
  }

  export enum ClusterType {
    Ami = 'ami',
    Rt = 'RT',
  }

  export enum ClusterPermission {
    Owner = 'owner',
    Viewer = 'viewer',
  }

  export enum JobOrderField {
    CreatedDateTime = 'createdDateTime',
    ModifiedDateTime = 'modifiedDateTime',
  }

  export enum JobDateTimeField {
    CreatedDateTime = 'createdDateTime',
    ModifiedDateTime = 'modifiedDateTime',
  }

  export enum JobStatusFilter {
    Pending = 'pending',
    Running = 'running',
    Complete = 'complete',
    Cancelled = 'cancelled',
    Queued = 'queued',
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
    Editor = 'editor',
    Viewer = 'viewer',
    Owner = 'owner',
  }
  /** Enumeration containing the set of allowed values for the Engine state field. */
  export enum EngineState {
    Active = 'active',
    Disabled = 'disabled',
    Pending = 'pending',
    Deleted = 'deleted',
    Draft = 'draft',
    Ready = 'ready',
  }

  export enum TaskDateTimeField {
    CreatedDateTime = 'createdDateTime',
    ModifiedDateTime = 'modifiedDateTime',
  }
  /** Valid strings for the `Build.status` field. */
  export enum BuildStatus {
    Approved = 'approved',
    Available = 'available',
    Deleted = 'deleted',
    Deploying = 'deploying',
    Deployed = 'deployed',
    Fetching = 'fetching',
    Invalid = 'invalid',
    Paused = 'paused',
    Pending = 'pending',
    Uploaded = 'uploaded',
    DeployFailed = 'deployFailed',
  }

  export enum BuildUpdateAction {
    Deploy = 'deploy',
    Pause = 'pause',
    Unpause = 'unpause',
    Approve = 'approve',
    Disapprove = 'disapprove',
    Invalidate = 'invalidate',
    Submit = 'submit',
    Upload = 'upload',
    Delete = 'delete',
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
    Edit = 'edit',
    Delete = 'delete',
    Disable = 'disable',
    Enable = 'enable',
    Undelete = 'undelete',
  }

  export enum EngineScheduleType {
    Now = 'Now',
    OnDemand = 'OnDemand',
    Recurring = 'Recurring',
    Continuous = 'Continuous',
  }
  /** The possible transformer functions which can be used with assets */
  export enum TransformFunction {
    Xml2Json = 'XML2JSON',
    Transcript2Json = 'Transcript2JSON',
    Json = 'JSON',
  }

  export enum LibraryOrderBy {
    Id = 'id',
    Name = 'name',
    CreatedDateTime = 'createdDateTime',
    ModifiedDateTime = 'modifiedDateTime',
    Version = 'version',
  }

  export enum LibraryEngineModelTrainStatus {
    Pending = 'pending',
    Queued = 'queued',
    Complete = 'complete',
    Failed = 'failed',
    Running = 'running',
  }

  export enum LibraryEntityOrderBy {
    Id = 'id',
    Name = 'name',
    CreatedDateTime = 'createdDateTime',
    ModifiedDateTime = 'modifiedDateTime',
  }

  export enum WatchlistOrderBy {
    CreatedDateTime = 'createdDateTime',
    ModifiedDateTime = 'modifiedDateTime',
    StopDateTime = 'stopDateTime',
    StartDateTime = 'startDateTime',
    Name = 'name',
  }

  export enum DataRegistryOrderBy {
    Name = 'name',
    Source = 'source',
    CreatedDateTime = 'createdDateTime',
    ModifiedDateTime = 'modifiedDateTime',
  }

  export enum SchemaOwnership {
    Mine = 'mine',
    Others = 'others',
    All = 'all',
  }

  export enum MentionDateTimeField {
    MentionDate = 'mentionDate',
    EndDateTime = 'endDateTime',
    HitStartDateTime = 'hitStartDateTime',
    HitStopDateTime = 'hitStopDateTime',
  }

  export enum MentionOrderByField {
    Id = 'id',
    MentionDate = 'mentionDate',
    HitStartDateTime = 'hitStartDateTime',
    HitEndDateTime = 'hitEndDateTime',
    EndDateTime = 'endDateTime',
  }

  export enum SavedSearchOrderBy {
    Name = 'name',
    CreatedDateTime = 'createdDateTime',
    SharedWithOrganization = 'sharedWithOrganization',
  }

  export enum ExportRequestStatus {
    Incomplete = 'incomplete',
    Complete = 'complete',
    Downloaded = 'downloaded',
  }

  export enum ExportRequestEvent {
    ExportRequest = 'exportRequest',
    MentionExportRequest = 'mentionExportRequest',
  }
  /** Fields that can be set in an `auditLog` `orderBy` parameter */
  export enum AuditLogOrderByField {
    Id = 'id',
    ObjectId = 'objectId',
    ObjectType = 'objectType',
    CreatedDateTime = 'createdDateTime',
    EventType = 'eventType',
    UserName = 'userName',
    ClientIpAddress = 'clientIpAddress',
    ClientUserAgent = 'clientUserAgent',
    Success = 'success',
  }

  export enum ScheduledJobDateTimeField {
    StartDateTime = 'startDateTime',
    StopDateTime = 'stopDateTime',
    DateCreated = 'dateCreated',
    DateModified = 'dateModified',
  }

  export enum ScheduledJobPartTimeField {
    StartTime = 'startTime',
    EndTime = 'endTime',
  }

  export enum ScheduledJobOrderField {
    Id = 'id',
    CreatedDateTime = 'createdDateTime',
    ModifiedDateTime = 'modifiedDateTime',
    StartDateTime = 'startDateTime',
    StopDateTime = 'stopDateTime',
    Name = 'name',
    RunMode = 'runMode',
    IsActive = 'isActive',
  }
  /** Options used by the cleanupTDO mutation to select which data is deleted. */
  export enum TdoCleanupOption {
    Storage = 'storage',
    SearchIndex = 'searchIndex',
    EngineResults = 'engineResults',
  }

  export enum AssetCreationMode {
    Create = 'create',
    Append = 'append',
    Replace = 'replace',
  }

  export enum UpdateJobsStatus {
    Queued = 'queued',
  }
  /** Settings that determine when to set a new entity identifier as the entity profile image. */
  export enum SetEntityProfileImage {
    None = 'none',
    IfNotSet = 'ifNotSet',
    Always = 'always',
  }

  export enum ApplicationWorkflowAction {
    Submit = 'submit',
    Approve = 'approve',
    Reject = 'reject',
    Deploy = 'deploy',
    Enable = 'enable',
    Disable = 'disable',
    Undelete = 'undelete',
  }

  export enum EngineWorkflowAction {
    Enable = 'enable',
    Disable = 'disable',
  }

  export enum OrganizationType {
    Agency = 'agency',
    Broadcaster = 'broadcaster',
  }

  export enum CreateTriggerTarget {
    Webhook = 'Webhook',
    Sms = 'SMS',
    Email = 'Email',
  }

  export enum EventDeliveryType {
    Webhook = 'Webhook',
    Sms = 'SMS',
    Email = 'Email',
  }

  export enum SetClusterPermission {
    Viewer = 'viewer',
    None = 'none',
  }

  export enum SetSourcePermission {
    Viewer = 'viewer',
    Editor = 'editor',
    None = 'none',
  }

  export enum AuditAction {
    Create = 'Create',
    Update = 'Update',
    Delete = 'Delete',
  }

  export enum AuthObjectType {
    TemporalDataObject = 'TemporalDataObject',
    Job = 'Job',
    Task = 'Task',
    Folder = 'Folder',
  }

  export enum SetScheduledJobPermission {
    Viewer = 'viewer',
    Editor = 'editor',
    None = 'none',
  }

  export enum JobStatus {
    Pending = 'pending',
    Complete = 'complete',
    Running = 'running',
    Cancelled = 'cancelled',
    Queued = 'queued',
  }

  export enum ScopeRequirement {
    Any = 'Any',
    All = 'All',
  }

  export enum TokenType {
    Api = 'API',
    User = 'User',
  }

  export enum UpdateTaskStatus {
    Running = 'running',
    Failed = 'failed',
    Complete = 'complete',
    Waiting = 'waiting',
  }

  /** Date/time custom scalar type */
  export type DateTime = any;

  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  export type Json = any;

  /** Time-only custom scalar type */
  export type Time = any;

  /** A custom scalar type representing a file upload in the asset input types */
  export type UploadedFile = any;

  // ====================================================
  // Scalars
  // ====================================================

  // ====================================================
  // Interfaces
  // ====================================================

  /** Common fields used by queries and fields that support paging to represent a single page of results. */
  export interface Page {
    /** Provide an offset to skip to a certain element in the result, for paging. */
    readonly offset: number;
    /** Maximum number of results that were retrieved in this query; page size */
    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  export interface Metadata {
    readonly name: string;
  }

  /** A property is a name-value pair. This is the base interface for properties. */
  export interface Property {
    readonly name: string;
  }

  // ====================================================
  // Types
  // ====================================================

  /** Queries are used to retrieve data. If you're new to our API, try the `me` query to explore the information you have access to. Hit `ctrl-space` at any time to activate field completion hints, and mouse over a field or parameter to see its documentation. */
  export interface Query {
    /** Retrieve a list of temporal data objects. */
    readonly temporalDataObjects: Maybe<TdoList>;
    /** Retrieve a single temporal data object */
    readonly temporalDataObject: Maybe<TemporalDataObject>;
    /** Retrieve a single Asset */
    readonly asset: Maybe<Asset>;
    /** Retrieve a single Widget */
    readonly widget: Maybe<Widget>;
    /** Retrieve clone job entries */
    readonly cloneRequests: Maybe<CloneRequestList>;
    /** Retrieve engines */
    readonly engines: Maybe<EngineList>;
    /** Retrieve a single engine by ID */
    readonly engine: Maybe<Engine>;

    readonly engineBuild: Maybe<Build>;
    /** Retrieve engine categories */
    readonly engineCategories: Maybe<EngineCategoryList>;
    /** Retrieve a specific engine category */
    readonly engineCategory: Maybe<EngineCategory>;
    /** Retrieve jobs */
    readonly jobs: Maybe<JobList>;
    /** Retrieve a single job */
    readonly job: Maybe<Job>;
    /** Retrieve a single task by ID */
    readonly task: Maybe<Task>;
    /** Retrieve entity identifier types */
    readonly entityIdentifierTypes: Maybe<EntityIdentifierTypeList>;

    readonly entityIdentifierType: Maybe<EntityIdentifierType>;
    /** Retrieve all library types */
    readonly libraryTypes: Maybe<LibraryTypeList>;
    /** Retrieve a single library type */
    readonly libraryType: Maybe<LibraryType>;
    /** Retrieve libraries and entities */
    readonly libraries: Maybe<LibraryList>;
    /** Retrieve a specific library */
    readonly library: Maybe<Library>;
    /** Retrieve a specific library engine model */
    readonly libraryEngineModel: Maybe<LibraryEngineModel>;
    /** Retrieve a specific entity */
    readonly entity: Maybe<Entity>;
    /** Retrieve a list of entities across libraries */
    readonly entities: Maybe<EntityList>;
    /** Retrieve library configuration */
    readonly libraryConfiguration: Maybe<LibraryConfiguration>;
    /** Retrieve applications. These are custom applications integrated into the Veritone platform using the VDA framework. */
    readonly applications: Maybe<ApplicationList>;
    /** Retrieve organizations */
    readonly organizations: Maybe<OrganizationList>;
    /** Retrieve a single organization */
    readonly organization: Maybe<Organization>;
    /** Retrieve permissions */
    readonly permissions: Maybe<PermissionList>;
    /** Retrieve users */
    readonly users: Maybe<UserList>;
    /** Retrieve an individual user */
    readonly user: Maybe<User>;
    /** Retrieve user's organization API tokens */
    readonly tokens: Maybe<ReadonlyArray<Maybe<Token>>>;
    /** Retrieve information for the current logged-in user */
    readonly me: Maybe<User>;
    /** Retrieve groups */
    readonly groups: Maybe<GroupList>;
    /** Retrieve a single mention */
    readonly mention: Maybe<Mention>;
    /** Retrieve a shared mention */
    readonly sharedMention: Maybe<SharedMention>;
    /** Search for mentions across an index. This query requires a user token. */
    readonly searchMentions: Maybe<SearchResult>;
    /** Search for media across an index. This query requires a user token. */
    readonly searchMedia: Maybe<SearchResult>;
    /** Retrieve the root folders for an organization */
    readonly rootFolders: Maybe<ReadonlyArray<Maybe<Folder>>>;
    /** Retrieve a single folder. Used to navigate the folder tree structure. */
    readonly folder: Maybe<Folder>;
    /** Retrieve a single application */
    readonly application: Maybe<Application>;
    /** Retrieve a single ingestion configuration */
    readonly ingestionConfiguration: Maybe<IngestionConfiguration>;
    /** Retrieve ingestion configurations */
    readonly ingestionConfigurations: Maybe<IngestionConfigurationList>;
    /** Retrieve a list of schemas for structured data ingestions */
    readonly schemas: Maybe<SchemaList>;

    readonly schema: Maybe<Schema>;

    readonly schemaProperties: Maybe<SchemaPropertyList>;
    /** Retrieve a structured data object */
    readonly structuredData: Maybe<StructuredData>;
    /** Retrieve a structured data object */
    readonly structuredDataObject: Maybe<StructuredData>;
    /** Retrieve a paginated list of structured data object */
    readonly structuredDataObjects: Maybe<StructuredDataList>;
    /** Returns information about the GraphQL server, useful for diagnostics. This data is primarily used by Veritone development, and some fields may be restricted to Veritone administrators. */
    readonly graphqlServiceInfo: Maybe<GraphQlServiceInfo>;
    /** Returns a signed writable S3 URL. A client can then upload to this URL with an HTTP PUT without providing any additional authorization (_note_: it must be a PUT. A POST will fail.) */
    readonly getSignedWritableUrl: Maybe<WritableUrlInfo>;
    /** Return writable storage URLs in bulk. A maximum of 1000 can be created in one call. See `getSignedWritableUrl` for details on usage of the response contents. */
    readonly getSignedWritableUrls: ReadonlyArray<WritableUrlInfo>;

    readonly myRights: Maybe<RightsListing>;
    /** Retrieve the shared folders for an organization */
    readonly sharedFolders: Maybe<ReadonlyArray<Maybe<Folder>>>;

    readonly watchlists: Maybe<WatchlistList>;

    readonly watchlist: Maybe<Watchlist>;

    readonly mentionStatusOptions: ReadonlyArray<MentionStatus>;

    readonly dataRegistries: Maybe<DataRegistryList>;

    readonly dataRegistry: Maybe<DataRegistry>;

    readonly subscription: Subscription;

    readonly cognitiveSearch: CognitiveSearch;

    readonly collections: CollectionList;

    readonly collection: Collection;

    readonly mentions: Maybe<MentionList>;
    /** Retrieves engine results by TDO and engine ID or by job ID. */
    readonly engineResults: Maybe<EngineResultList>;

    readonly trigger: Maybe<Trigger>;

    readonly triggers: Maybe<ReadonlyArray<Maybe<Trigger>>>;
    /** Fetch all saved searches that the current user has made Fetch all saved searches that have been shared with the current users organization Include any saved searches that the user has created */
    readonly savedSearches: SavedSearchList;
    /** Retrieve a list of export requests */
    readonly exportRequests: ExportRequestList;

    readonly exportRequest: ExportRequest;
    /** Retrieve a event by id */
    readonly event: Event;
    /** Retrieve a list of events by application */
    readonly events: EventList;
    /** This query returns information about time zones recognized by this server. The information is static and does not change. */
    readonly timeZones: ReadonlyArray<TimeZone>;
    /** Examine entries from the audit log. All operations that modify data are written to the audit log. Only entries for the user's own organization can be queried. All queries are bracketed by a time window. A default time window is applied if the `toDateTime` and/or `fromDateTime` parameters are not provided. The maximum time window length is 30 days. Only Veritone and organization administrators can use this query. */
    readonly auditLog: AuditLogEntryList;

    readonly mediaShare: MediaShare;
    /** Retrieve Veritone Workflow instance status by id */
    readonly workflowRuntime: WorkflowRuntimeResponse;
    /** Get a specific workflowRuntimeData based on dataKey */
    readonly workflowRuntimeStorageData: WorkflowRuntimeStorageDataList;
    /** Get list process templates by id or current organizationId */
    readonly processTemplates: ProcessTemplateList;
    /** Get creative by id with current organizationId */
    readonly creative: Creative;
    /** Retrieve a single schedule */
    readonly scheduledJob: Maybe<ScheduledJob>;
    /** Retrieve or search for schedules */
    readonly scheduledJobs: Maybe<ScheduledJobList>;
    /** Retrieve a single engine configuration */
    readonly engineConfiguration: Maybe<EngineConfiguration>;
    /** Retrieve all engine configurations */
    readonly engineConfigurations: Maybe<EngineConfigurationList>;
    /** Retrieve a single node */
    readonly clusterNode: ClusterNode;
    /** Retrieve a list of nodes */
    readonly clusterNodes: ClusterNodeList;
    /** Retrieve a single cluster */
    readonly cluster: Cluster;
    /** Retrieve a list of clusters */
    readonly clusters: ClusterList;
    /** Retrieve a single execution location */
    readonly executionLocation: ExecutionLocation;
    /** Retrieve a list of execution locations */
    readonly executionLocations: ExecutionLocationList;
    /** Retrieve a single job template */
    readonly jobTemplate: JobTemplate;
    /** Retrieve a list of job templates for a given job pipelineId */
    readonly jobTemplates: JobTemplateList;
    /** Retrieve a single task template */
    readonly taskTemplate: TaskTemplate;
    /** Retrieve a single job pipeline */
    readonly jobPipeline: JobPipeline;
    /** Retrieve a list of job pipelines owned by org */
    readonly jobPipelines: JobPipelineList;
    /** Retrieve a single source */
    readonly source: Source;
    /** Retrieve a list of sources */
    readonly sources: SourceList;
    /** Retrieve a single source type */
    readonly sourceType: SourceType;
    /** Retrieve a list of source types */
    readonly sourceTypes: SourceTypeList;
    /** Retrieve all source type categories */
    readonly sourceTypeCategories: SourceTypeCategoryList;
    /** Retrieve a single source type category */
    readonly sourceTypeCategory: SourceTypeCategory;
    /** Retrieve a single external credential */
    readonly externalCredential: ExternalCredential;
    /** Retrieve a list of external credentials */
    readonly externalCredentials: ExternalCredentialList;

    readonly tasks: Maybe<TaskList>;
  }

  export interface TdoList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<TemporalDataObject>>>;
    /** The starting index for records that were returned in this query. */
    readonly offset: number;
    /** Maximum number of results that were retrieved in this query; page size */
    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  export interface TemporalDataObject {
    /** Object creation timestamp. Does not change. In seconds since epoch (TODO change!). */
    readonly createdDateTime: Maybe<DateTime>;
    /** Object modification timestamp. In seconds since epoch (TODO change!). */
    readonly modifiedDateTime: Maybe<DateTime>;
    /** The object's unique ID */
    readonly id: string;

    readonly createdBy: Maybe<string>;

    readonly modifiedBy: Maybe<string>;

    readonly description: Maybe<string>;

    readonly name: Maybe<string>;

    readonly mediaId: Maybe<string>;
    /** An optional URL for a thumbnail or preview image for this object. If the URL is to an object in Veritone's object storage, it will be signed. */
    readonly thumbnailUrl: Maybe<string>;
    /** An optional URL for a source image for this object. If the URL is to an object in Veritone's object storage, it will be signed. */
    readonly sourceImageUrl: Maybe<string>;
    /** Modular metadata */
    readonly metadata: Maybe<ReadonlyArray<Maybe<Metadata>>>;
    /** Direct access to metadata in raw JSON format */
    readonly jsondata: Maybe<Json>;

    readonly details: Maybe<Json>;
    /** Assets this object contains. Can be of any size. This field does not support paging. */
    readonly assets: Maybe<AssetList>;
    /** Retrieve the primary asset of a given type */
    readonly primaryAsset: Maybe<Asset>;
    /** Security settings for the asset container */
    readonly security: Maybe<Security>;
    /** Recording start time. In seconds since epoch. */
    readonly startDateTime: DateTime;
    /** Recording stop time. In seconds since epoch. */
    readonly stopDateTime: DateTime;

    readonly source: Maybe<string>;
    /** Application this recording belongs to */
    readonly applicationId: string;
    /** status. Downloaded, recording, etc. */
    readonly status: Maybe<string>;
    /** Tasks running against this TemporalDataObject */
    readonly tasks: Maybe<TaskList>;
    /** Jobs running against this temporalDataObject */
    readonly jobs: Maybe<JobList>;
    /** Folders that this TDO is filed in */
    readonly folders: Maybe<ReadonlyArray<Folder>>;

    readonly sourceData: Maybe<TdoSourceData>;
    /** If this TDO supports streams, contains stream listings. Might be an empty list but will not be null. */
    readonly streams: ReadonlyArray<TdoStreamData>;
    /** Statuses of the engines run on the TDO. */
    readonly engineRuns: Maybe<EngineRunList>;
  }

  export interface AssetList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<Asset>>>;
    /** The starting index for records that were returned in this query. */
    readonly offset: number;

    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  /** An asset represents a single unit of data, such as a file or URL, and basic metadata about that data. An asset must be contained within a TemporalDataObject. */
  export interface Asset {
    /** The asset ID */
    readonly id: string;
    /** Asset name, such as a file name. */
    readonly name: Maybe<string>;
    /** Asset content type. Must be a valid MIME type string. */
    readonly contentType: Maybe<string>;
    /** An optional description of the asset */
    readonly description: Maybe<string>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;
    /** Freeform metadata in JSON format. */
    readonly jsondata: Maybe<Json>;
    /** The ID of the TemporalDataObject that contains this asset */
    readonly containerId: string;
    /** The TemporalDataObject that contains this asset */
    readonly container: Maybe<TemporalDataObject>;
    /** The asset's URI. If a file is provided on asset creation, this URI point to the object in Veritone's object storage. */
    readonly uri: Maybe<string>;
    /** A signed version of the asset's URI */
    readonly signedUri: Maybe<string>;
    /** The asset type, such as `media`, `transcript`, or `text`. The asset type determines which engines are able to operate on it. For example, a transcription engine requires a `media` asset. Engines that record their results in an asset typically set the type accordingly, such as `transcript`. */
    readonly type: string;
    /** Deprecated alias for type */
    readonly assetType: Maybe<string>;
    /** Freeform application-defined metadata. This field may contain information specific to the object type, such as image or video metadata. */
    readonly details: Maybe<Json>;
    /** Metadata as raw JSON string */
    readonly jsonstring: Maybe<string>;
    /** A structured containing metadata about a file. This will be set if the asset was created by uploading a file. */
    readonly fileData: Maybe<AssetFileData>;
    /** A structure containing metadata about the source engine and task. This will be set if the asset was created by an engine. */
    readonly sourceData: Maybe<AssetSourceData>;
    /** Asset transform. The transformation function to be used with the asset. It can be XML to JSON */
    readonly transform: Maybe<string>;
    /** A Boolean indicating whether or not this asset was created by editing another asset. */
    readonly isUserEdited: Maybe<boolean>;
  }

  /** A structured containing metadata about an asset file. */
  export interface AssetFileData {
    /** The MD5 checksum of the file */
    readonly md5sum: Maybe<string>;
    /** The file size in bytes */
    readonly size: Maybe<number>;
    /** Original file URI, if provided on asset creation */
    readonly originalFileUri: Maybe<string>;
  }

  /** A structure containing metadata about the source engine and task for an asset. */
  export interface AssetSourceData {
    /** The name of the asset source engine or engine category */
    readonly name: Maybe<string>;
    /** ID of the specific task that created the asset */
    readonly taskId: Maybe<string>;
    /** The specific task that created the asset */
    readonly task: Maybe<Task>;
    /** The ID of the engine that created the asset */
    readonly engineId: Maybe<string>;
    /** The engine that created the asset */
    readonly engine: Maybe<Engine>;
    /** The ID of the source from which this asset was generated or stamped. */
    readonly sourceId: Maybe<string>;
    /** ID of the schema describing this asset, if there is one. Typically applies only to assets of type "content-template". */
    readonly schemaId: Maybe<string>;
    /** The schema definition, if there is one */
    readonly schema: Maybe<Schema>;
  }

  /** Represents a single engine task */
  export interface Task {
    /** The task ID */
    readonly id: string;

    readonly name: Maybe<string>;

    readonly description: Maybe<string>;
    /** Date and time the task was created */
    readonly createdDateTime: Maybe<DateTime>;
    /** Date and time the task was last modified */
    readonly modifiedDateTime: Maybe<DateTime>;

    readonly createdBy: Maybe<string>;

    readonly modifiedBy: Maybe<string>;
    /** Date and time the task was queued for execution. */
    readonly queuedDateTime: Maybe<DateTime>;
    /** Date and time the task completed. */
    readonly completedDateTime: Maybe<DateTime>;
    /** Date and time task execution started */
    readonly startedDateTime: Maybe<DateTime>;
    /** The task status. See TaskStatus enum for details. */
    readonly status: Maybe<TaskStatus>;
    /** Optional order in which the task should run, relative to other tasks in the job that contains it. */
    readonly order: Maybe<number>;
    /** Whether or not the task is run on the clone of a TDO */
    readonly isClone: Maybe<boolean>;
    /** Application ID that owns the task */
    readonly applicationId: Maybe<string>;
    /** The ID of the TemporalDataObject the task was created for. */
    readonly targetId: Maybe<string>;
    /** The TemporalDataObject the task was created for. */
    readonly target: Maybe<TemporalDataObject>;
    /** ID of the engine for the task. */
    readonly engineId: Maybe<string>;
    /** The engine for the task */
    readonly engine: Maybe<Engine>;
    /** The ID of the job that contains this task */
    readonly jobId: Maybe<string>;
    /** The job that contains this task. */
    readonly job: Maybe<Job>;
    /** ID of the engine build used for this task. */
    readonly buildId: Maybe<string>;
    /** The engine build used for this task */
    readonly build: Maybe<Build>;
    /** The source asset for this task, if there is one. */
    readonly sourceAsset: Maybe<Asset>;
    /** The ID of the source asset for this task, if there is one. */
    readonly sourceAssetId: Maybe<string>;

    readonly mediaLengthSec: Maybe<number>;

    readonly mediaStorageBytes: Maybe<number>;

    readonly mediaFileName: Maybe<string>;
    /** The incoming task payload, in JSON format */
    readonly payload: Maybe<Json>;
    /** The task output, in JSON format. */
    readonly output: Maybe<Json>;
    /** The incoming task payload, in String format. */
    readonly payloadString: Maybe<string>;
    /** The task output, in String format. */
    readonly outputString: Maybe<string>;
    /** The log file produced during task execution */
    readonly log: Maybe<TaskLog>;
    /** For backwards compatibility only */
    readonly taskPayload: Maybe<Json>;
    /** For backwards compatibility only */
    readonly taskOutput: Maybe<Json>;
    /** True if this task was created as a test task */
    readonly testTask: Maybe<boolean>;

    readonly parentTaskId: Maybe<string>;

    readonly parentTask: Maybe<Task>;

    readonly childTaskIds: Maybe<ReadonlyArray<string>>;

    readonly childTasks: Maybe<ReadonlyArray<Task>>;
    /** A standby task that will execute if this one fails. */
    readonly standbyTask: Maybe<Task>;
    /** The task that this task is a standby for. If the task identified in this field fails, the current task will execute. */
    readonly standbyForTask: Maybe<Task>;
    /** Contains metadata used by the platform run-time system to execute the task. This field is accessible only to platform components. */
    readonly runtimePayload: Maybe<Json>;

    readonly engineConfiguration: Maybe<EngineConfiguration>;

    readonly engineConfigurationId: Maybe<string>;

    readonly executionLocation: Maybe<ExecutionLocation>;

    readonly executionLocationId: Maybe<string>;

    readonly templateId: Maybe<string>;

    readonly template: Maybe<TaskTemplate>;
  }

  export interface Engine {
    readonly id: string;

    readonly ownerOrganizationId: string;

    readonly isPublic: Maybe<boolean>;

    readonly logoPath: Maybe<string>;

    readonly iconPath: Maybe<string>;
    /** The signed URL for the engine icon; will fallback to raw iconPath if unable to sign. */
    readonly signedIconPath: Maybe<string>;
    /** The signed URL for the engine logo; will fallback to raw logoPath if unable to sign. */
    readonly signedLogoPath: Maybe<string>;

    readonly name: Maybe<string>;

    readonly ownerOrganization: Maybe<Organization>;

    readonly description: Maybe<string>;

    readonly categoryId: Maybe<string>;

    readonly state: Maybe<EngineState>;

    readonly price: Maybe<number>;

    readonly asset: Maybe<string>;

    readonly displayName: Maybe<string>;

    readonly validateUri: Maybe<string>;

    readonly executeUri: Maybe<string>;

    readonly applicationId: Maybe<string>;
    /** True if the engine creates a TemporalDataObject (TDO) as part of its execution. False otherwise. */
    readonly createsTDO: Maybe<boolean>;

    readonly website: Maybe<string>;

    readonly rating: Maybe<number>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;

    readonly createdBy: Maybe<string>;

    readonly modifiedBy: Maybe<string>;
    /** True if the engine requires a library to run. If so, a library ID must be provided in the engine payload. */
    readonly libraryRequired: Maybe<boolean>;

    readonly deploymentModel: Maybe<DeploymentModel>;

    readonly tasks: Maybe<TaskList>;
    /** Retrieve builds for the engine. By default, deleted builds are not included. Deleted builds can be retrieved by including the `deleted` status parameter. */
    readonly builds: Maybe<BuildList>;
    /** Dependency information for this engine */
    readonly dependency: Maybe<EngineDependency>;
    /** The list of custom fields on the engine. Users will be prompted to set or change these values when they run the engine. For example, a translation engine might have a field for the target language. */
    readonly fields: Maybe<ReadonlyArray<EngineField>>;
    /** The engine category */
    readonly category: Maybe<EngineCategory>;

    readonly validStateActions: Maybe<ReadonlyArray<Maybe<EngineStateAction>>>;
    /** Get the engine's preferred input format, based on the latest deployed build. If there is no deployed build this field cannot be populated. */
    readonly preferredInputFormat: Maybe<string>;
    /** Get the engine's supported input formats, based on the latest deployed build. If there is no deployed build this field cannot be populated. */
    readonly supportedInputFormats: Maybe<ReadonlyArray<string>>;
    /** Get the engine's output formats, based on the latest deployed build. If there is no deployed build this field cannot be populated. */
    readonly outputFormats: Maybe<ReadonlyArray<string>>;
    /** List of IDs of source types that the engine supports, based on the latest deployed build. If there is no deployed build this field cannot be populated. Applies only to adapter engines that ingest data from a source. Will be a list of IDs of SourceType objects. */
    readonly supportedSourceTypes: Maybe<ReadonlyArray<string>>;
    /** Get the ingestion flag which determines whether the adapter has a scan phase during ingestion. If there is no deployed build this field cannot be populated. */
    readonly hasScanPhase: Maybe<boolean>;
    /** Get the deployed build version of this engine. If there is no deployed build, this field will be null. */
    readonly deployedVersion: Maybe<number>;
    /** Specifies the mode in which the engine process input */
    readonly mode: Maybe<EngineMode>;
    /** Specifies the runtime type, such as "iron" or "edge" */
    readonly runtimeType: Maybe<string>;
    /** Get oauth information based on the deployed build. If there is no deployed build, this field will be null. */
    readonly oauth: Maybe<string>;
    /** Get engine flag which determines whether the engine is a conductor, this field will be null */
    readonly isConductor: Maybe<boolean>;
    /** List of schedule types that the engine supports, based on the latest deployed build. If there is no deployed build, this field cannot be populated. */
    readonly supportedScheduleTypes: Maybe<ReadonlyArray<EngineScheduleType>>;
    /** Retrieve task metrics for the engine */
    readonly taskMetrics: Maybe<EngineTaskMetrics>;
  }

  export interface Organization {
    /** The organization ID */
    readonly id: string;
    /** The organization's name */
    readonly name: Maybe<string>;
    /** A list of types applied to the organization, such as `Broadcaster` or `Agency`. */
    readonly type: Maybe<ReadonlyArray<Maybe<string>>>;
    /** Applications belonging to the organization */
    readonly applications: Maybe<ApplicationList>;
    /** Freeform metadata in JSON format */
    readonly jsondata: Maybe<Json>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;

    readonly seatLimit: Maybe<number>;
    /** Organization's current status */
    readonly status: Maybe<OrganizationStatus>;
    /** Roles allowed within the organization */
    readonly roles: Maybe<ReadonlyArray<Maybe<Role>>>;
    /** Users belonging to the organization */
    readonly users: Maybe<UserList>;
    /** List of engines forbidden to this organization. */
    readonly blacklist: Maybe<EngineBlacklist>;
    /** List of engines allowed for this organization. Takes precedence of the blacklist. That is, if a whitelist is defined, then only engines in the whitelist are permitted regardless of what is in the blacklist. This field is not fully implemented! */
    readonly whitelist: Maybe<EngineWhitelist>;
    /** Custom schemas defined by this organization. This field is not fully implemented! */
    readonly schemas: Maybe<SchemaList>;
    /** Watchlists for this organization. This field is not fully implemented! */
    readonly watchlists: Maybe<WatchlistList>;
    /** Collections for this organization */
    readonly collections: Maybe<CollectionList>;
    /** Folder tree for this organization */
    readonly rootFolder: Maybe<Folder>;
    /** Business unit */
    readonly businessUnit: Maybe<string>;
    /** Dashboards */
    readonly dashboards: Maybe<ReadonlyArray<Maybe<Dashboard>>>;

    readonly imageUrl: Maybe<string>;
    /** An ID corresponding to the organization used internally for some provisioning elements. `applicationId` on `TemporalDataObject`, `Job`, and some other types uses this value instead of the organization `id`. */
    readonly internalApplicationId: Maybe<string>;
    /** The number of active seats */
    readonly seats: Maybe<number>;
  }

  export interface ApplicationList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<Application>>>;
    /** The starting index for records that were returned in this query. */
    readonly offset: number;
    /** Maximum number of results that were retrieved in this query; page size */
    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  /** An application is a set of Veritone functionality that customers can sign up for. */
  export interface Application {
    readonly id: string;

    readonly key: string;

    readonly name: string;

    readonly category: Maybe<string>;

    readonly description: Maybe<string>;

    readonly iconUrl: Maybe<string>;

    readonly iconSvg: Maybe<string>;

    readonly url: Maybe<string>;

    readonly deploymentModel: Maybe<DeploymentModel>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;
    /** OAuth2 client secret. This field is server-generated and is only returned on application creation. */
    readonly clientSecret: Maybe<string>;
    /** OAuth2 redirect URLs */
    readonly oauth2RedirectUrls: Maybe<ReadonlyArray<Maybe<string>>>;

    readonly organizationId: string;

    readonly status: Maybe<ApplicationStatus>;

    readonly permissionsRequired: Maybe<ReadonlyArray<Maybe<string>>>;

    readonly contextMenuExtensions: Maybe<ContextMenuExtensionList>;

    readonly validStateActions: Maybe<ReadonlyArray<Maybe<ApplicationStateAction>>>;
  }

  export interface ContextMenuExtensionList {
    readonly mentions: Maybe<ReadonlyArray<Maybe<ContextMenuExtension>>>;

    readonly tdos: Maybe<ReadonlyArray<Maybe<ContextMenuExtension>>>;

    readonly watchlists: Maybe<ReadonlyArray<Maybe<ContextMenuExtension>>>;

    readonly collections: Maybe<ReadonlyArray<Maybe<ContextMenuExtension>>>;
  }

  export interface ContextMenuExtension {
    readonly id: string;

    readonly label: string;

    readonly url: string;
  }

  /** A role signifies a user's permissions within a given context. */
  export interface Role {
    readonly description: Maybe<string>;

    readonly appName: Maybe<string>;

    readonly name: string;

    readonly permissions: Maybe<PermissionList>;

    readonly id: string;
  }

  export interface PermissionList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<Permission>>>;
    /** The starting index for records that were returned in this query. */
    readonly offset: number;
    /** Maximum number of results that were retrieved in this query; page size */
    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  export interface Permission {
    readonly id: string;

    readonly name: Maybe<string>;

    readonly description: Maybe<string>;
  }

  export interface UserList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<User>>>;
    /** The starting index for records that were returned in this query. */
    readonly offset: number;
    /** Maximum number of results that were retrieved in this query; page size */
    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  /** A user represents a user account within an organization. */
  export interface User {
    /** The user's name */
    readonly name: string;
    /** The user's unique ID. A user ID is a string in UUID format. */
    readonly id: string;
    /** The set of permissions granted to the user */
    readonly permissions: Maybe<PermissionList>;
    /** The set of roles granted to the user */
    readonly roles: Maybe<ReadonlyArray<Role>>;

    readonly roleIds: Maybe<ReadonlyArray<string>>;
    /** ID of the organization to which the user belongs. */
    readonly organizationId: Maybe<string>;
    /** Organization to which the user belongs. */
    readonly organization: Maybe<Organization>;
    /** Freeform metadata in JSON form */
    readonly jsondata: Maybe<Json>;

    readonly firstName: Maybe<string>;

    readonly lastName: Maybe<string>;

    readonly email: Maybe<string>;

    readonly acls: Maybe<ReadonlyArray<UserAcl>>;
    /** Folder tree for this organization */
    readonly rootFolder: Maybe<Folder>;
    /** Date and time this user last changed their password */
    readonly passwordUpdatedDateTime: Maybe<DateTime>;
    /** Date and time this user last logged in */
    readonly lastLoginDateTime: Maybe<DateTime>;
    /** Date and time this user account was created */
    readonly createdDateTime: Maybe<DateTime>;
    /** Date and time this user account was last modified */
    readonly modifiedDateTime: Maybe<DateTime>;
    /** Multi-factor authentication information for the user */
    readonly mfaInfo: MfaInfo;
    /** User Settings for the user */
    readonly userSettings: Maybe<ReadonlyArray<UserSetting>>;

    readonly imageUrl: Maybe<string>;
    /** Status of user account */
    readonly status: Maybe<UserStatus>;
  }

  export interface UserAcl {
    readonly applicationId: Maybe<string>;

    readonly organizationId: Maybe<string>;

    readonly organization: Maybe<Organization>;

    readonly objectType: Maybe<string>;

    readonly objectId: Maybe<string>;

    readonly access: Maybe<UserAclAccessRights>;

    readonly userId: Maybe<string>;
  }

  export interface UserAclAccessRights {
    readonly owner: Maybe<boolean>;
  }

  export interface Folder {
    /** The ID of this folder */
    readonly id: string;

    readonly treeObjectId: string;
    /** The name of this folder */
    readonly name: Maybe<string>;
    /** An optional description */
    readonly description: Maybe<string>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;

    readonly ownerId: Maybe<string>;
    /** The parent folder */
    readonly parent: Maybe<Folder>;
    /** The subfolders of this folder Deprecated: Use paginated childFolders instead. */
    readonly subfolders: Maybe<ReadonlyArray<Folder>>;
    /** A paginated list of child folders of this folders */
    readonly childFolders: Maybe<FolderList>;
    /** The organization that owns this folder */
    readonly organization: Maybe<Organization>;
    /** The ID of the organization that owns this folder */
    readonly organizationId: Maybe<string>;

    readonly typeId: Maybe<number>;

    readonly rootFolderTypeId: Maybe<number>;
    /** The maximum depth of child folders allowed */
    readonly maxDepth: Maybe<number>;

    readonly orderIndex: Maybe<number>;
    /** The folder status */
    readonly status: Maybe<FolderStatus>;
    /** The ordered path of the folder hierarchy. The first element is always a root folder, and the last is this folder's parent. */
    readonly folderPath: Maybe<ReadonlyArray<Folder>>;
    /** TemporalDataObjects that are filed in this folder */
    readonly childTDOs: Maybe<TdoList>;
    /** The read/write permissions for a shared folder */
    readonly sharedAccess: Maybe<ReadonlyArray<Maybe<string>>>;

    readonly sharedWith: Maybe<SharedWith>;

    readonly contentTemplates: ReadonlyArray<FolderContentTemplate>;
  }

  export interface FolderList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<Folder>>>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    readonly offset: number;
    /** Maximum number of results that were retrieved in this query; page size */
    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  export interface SharedWith {
    /** List of organizationIds that have read access to this object */
    readonly read: Maybe<ReadonlyArray<Maybe<number>>>;
    /** List of organizationIds that have write access to this object */
    readonly write: Maybe<ReadonlyArray<Maybe<number>>>;
  }

  export interface FolderContentTemplate {
    readonly id: string;

    readonly folderId: string;

    readonly sdoId: string;

    readonly sdo: Maybe<StructuredData>;

    readonly schemaId: string;

    readonly data: Maybe<Json>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;
  }

  export interface StructuredData {
    /** The ID */
    readonly id: string;
    /** Id of the schema used to validate this object */
    readonly schemaId: string;
    /** The schema used to validate this object */
    readonly schema: Maybe<Schema>;

    readonly data: Maybe<Json>;

    readonly dataString: Maybe<string>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;
  }

  export interface Schema {
    readonly id: string;

    readonly dataRegistryId: string;

    readonly dataRegistry: Maybe<DataRegistry>;

    readonly definition: Maybe<Json>;

    readonly majorVersion: number;

    readonly minorVersion: number;

    readonly createdBy: Maybe<User>;

    readonly modifiedBy: Maybe<User>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;

    readonly status: Maybe<SchemaStatus>;
    /** List of status the Schema can transition to. */
    readonly validActions: Maybe<ReadonlyArray<Maybe<SchemaAction>>>;
    /** SDOs under this schema */
    readonly structuredDataObjects: Maybe<StructuredDataList>;
    /** The organization that owns this schema. */
    readonly organization: Maybe<Organization>;
    /** The Id of the organization that owns this schema. */
    readonly organizationId: Maybe<string>;
  }

  export interface DataRegistry {
    readonly id: string;

    readonly name: Maybe<string>;

    readonly description: Maybe<string>;

    readonly source: Maybe<string>;

    readonly schemas: Maybe<SchemaList>;
    /** The organization that owns this data registry. */
    readonly organization: Maybe<Organization>;

    readonly organizationId: Maybe<string>;

    readonly createdBy: Maybe<User>;

    readonly modifiedBy: Maybe<User>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;
    /** The currently published schema version for convenient access. This field will be empty if there is no published schema. */
    readonly publishedSchema: Maybe<Schema>;

    readonly ingestionToken: Maybe<string>;
  }

  export interface SchemaList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<Schema>>>;
    /** The starting index for records that were returned in this query. */
    readonly offset: number;
    /** Maximum number of results that were retrieved in this query; page size */
    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  export interface StructuredDataList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<StructuredData>>>;

    readonly count: Maybe<number>;

    readonly offset: number;

    readonly limit: number;

    readonly owned: Maybe<boolean>;

    readonly orderBy: Maybe<ReadonlyArray<StructuredDataOrderByType>>;
  }

  export interface StructuredDataOrderByType {
    readonly field: StructuredDataOrderByField;

    readonly direction: OrderDirection;
  }

  /** Type that holds multi-factor authentication for a user */
  export interface MfaInfo {
    readonly phoneNumber: Maybe<string>;

    readonly smsVoiceVerifiedDateTime: Maybe<DateTime>;

    readonly gaVerifiedDateTime: Maybe<DateTime>;

    readonly defaultOption: Maybe<string>;

    readonly pendingRegistration: Maybe<string>;
  }

  /** Type that holds user setting for a user */
  export interface UserSetting {
    readonly key: Maybe<string>;

    readonly value: Maybe<string>;
  }

  export interface EngineBlacklist {
    readonly organizationId: string;

    readonly engines: Maybe<ReadonlyArray<Maybe<Engine>>>;

    readonly engineCategories: Maybe<ReadonlyArray<Maybe<EngineCategory>>>;
  }

  export interface EngineCategory {
    readonly id: string;

    readonly name: Maybe<string>;

    readonly description: Maybe<string>;

    readonly type: Maybe<EngineType>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;

    readonly createdBy: Maybe<string>;

    readonly modifiedBy: Maybe<string>;
    /** The list of IDs of engines in this category */
    readonly engineIds: Maybe<ReadonlyArray<string>>;

    readonly totalEngines: Maybe<number>;

    readonly iconClass: Maybe<string>;

    readonly editable: Maybe<boolean>;

    readonly videoOnly: Maybe<boolean>;

    readonly color: Maybe<string>;
    /** The list of engines in this category */
    readonly engines: Maybe<EngineList>;
    /** If the engine category is integrated with libraries, this field contains the list of IDs of entity identifier types that the engine category is compatible with. */
    readonly libraryEntityIdentifierTypeIds: Maybe<ReadonlyArray<string>>;
    /** If the engine category is integrated with libraries, this field contains the list of entity identifier types that the engine category is compatible with. */
    readonly libraryEntityIdentifierTypes: Maybe<EntityIdentifierTypeList>;
    /** A type for the engine category. Multiple engine categories with common elements can share a categoryType. This information is used to compute dependencies and format user interface elements. */
    readonly categoryType: Maybe<string>;
    /** An optional key used to identify this engine category's results for search and other purposes. Primarily used by Veritone platform applications. */
    readonly categoryMetadataKey: Maybe<string>;
    /** A list of categoryTypes on which instances of this engine category depend. */
    readonly dependencies: Maybe<ReadonlyArray<EngineDependency>>;
    /** Information about how engine results in this category can be searched in Veritone platform applications. Used primarily by Veritone platform applications. */
    readonly searchConfiguration: Maybe<EngineSearchConfiguration>;
    /** List of engine result export formats supported by engines in this category. May be empty. */
    readonly exportFormats: ReadonlyArray<Maybe<ExportFormat>>;
  }

  export interface EngineType {
    readonly name: Maybe<string>;

    readonly description: Maybe<string>;
  }

  export interface EngineList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<Engine>>>;
    /** Number of records returned in this response */
    readonly count: number;
    /** The starting index for records that were returned in this query. */
    readonly offset: number;

    readonly limit: number;
  }

  export interface EntityIdentifierTypeList extends Page {
    readonly records: Maybe<ReadonlyArray<EntityIdentifierType>>;

    readonly limit: number;

    readonly offset: number;

    readonly count: Maybe<number>;
  }

  export interface EntityIdentifierType {
    readonly id: string;

    readonly label: string;

    readonly labelPlural: string;

    readonly iconClass: Maybe<string>;

    readonly description: Maybe<string>;

    readonly dataType: EntityIdentifierDataType;
  }

  export interface EngineDependency {
    /** TODO maps to values in engineCategory.data_field? Must be a valid categoryType from an existing EngineCategory. */
    readonly dependencyType: string;
    /** Asset type to expect previous engine to produce */
    readonly assetType: Maybe<string>;
    /** The engine category corresponding to this dependency */
    readonly category: Maybe<EngineCategory>;
  }

  /** Represents configuration on how the results of engines within a given category are indexed and searched. Primarily used by Veritone platform applications. */
  export interface EngineSearchConfiguration {
    /** Autocomplete field information is used to tell client applications what fields are searchable by autocomplete in the search index and how to search for them. */
    readonly autocompleteFields: Maybe<ReadonlyArray<AutocompleteFieldConfig>>;
    /** Autocomplete field information is used to tell client applications what fields are searchable in the search index and how to search for them. */
    readonly searchFields: Maybe<ReadonlyArray<SearchFieldConfig>>;
    /** Indicates whether or not search is available for results produced by engines in this category can be searched. */
    readonly isSearchEnabled: Maybe<boolean>;
    /** Indicates whether or not search is available for results produced by engines in this category can be searched within the Elasticsearch index. */
    readonly isElasticEnabled: Maybe<boolean>;

    readonly searchMetadataKey: Maybe<string>;

    readonly elasticType: Maybe<string>;
  }

  export interface AutocompleteFieldConfig {
    readonly autocompleteField: Maybe<string>;

    readonly indexField: Maybe<string>;
  }

  export interface SearchFieldConfig {
    readonly searchField: Maybe<string>;

    readonly indexField: Maybe<string>;
  }

  export interface ExportFormat {
    /** The file format/extension i.e. ttml, vlf, etc. */
    readonly format: string;
    /** A human readable label for the file format i.e. "Time Text Markup Language" */
    readonly label: string;
    /** A list types to categories the file format by i.e. "subtitle" */
    readonly types: ReadonlyArray<Maybe<string>>;
  }

  export interface EngineWhitelist {
    readonly organizationId: string;

    readonly engines: Maybe<ReadonlyArray<Maybe<Engine>>>;

    readonly engineCategories: Maybe<ReadonlyArray<Maybe<EngineCategory>>>;
  }

  export interface WatchlistList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<Watchlist>>>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    readonly offset: number;
    /** Maximum number of results that were retrieved in this query; page size */
    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  export interface Watchlist {
    /** The primary ID */
    readonly id: string;
    /** A human-readable name for the watchlist */
    readonly name: string;
    /** The organization that owns the watchlist */
    readonly organization: Organization;
    /** ID of the organization that owns the watchlist */
    readonly organizationId: string;
    /** IDs of the schedules associated with the watchlist */
    readonly scheduleIds: Maybe<ReadonlyArray<string>>;
    /** Date and time at which the watchlist takes effect */
    readonly startDateTime: Maybe<DateTime>;
    /** Date and time at which the watchlist is no longer in effect */
    readonly stopDateTime: Maybe<DateTime>;
    /** Date and time the watchlist was created */
    readonly createdDateTime: Maybe<DateTime>;
    /** Date and time the watchlist was last modified */
    readonly modifiedDateTime: Maybe<DateTime>;
    /** Cognitives searches associated with the watchlist */
    readonly cognitiveSearches: Maybe<ReadonlyArray<CognitiveSearch>>;
    /** Ids of the source types associated directly with the watchlist */
    readonly sourceTypeIds: Maybe<ReadonlyArray<string>>;
    /** IDs of the sources associated directly with the watchlist */
    readonly sourceIds: Maybe<ReadonlyArray<string>>;
    /** Folders that the watchlist is filed in. At present, a watchlist can only be filed in a single folder. */
    readonly folders: Maybe<ReadonlyArray<Folder>>;
    /** Structured metadata associated with the watchlist. Elements of the metadata are validated against specific schemas. */
    readonly details: Maybe<Json>;

    readonly subscriptions: ReadonlyArray<Subscription>;

    readonly searchIndex: SearchIndex;

    readonly query: Maybe<Json>;
    /** Get mentions generated for this watchlist */
    readonly mentions: Maybe<MentionList>;
    /** ID of the advertiser directly with the watchlist */
    readonly advertiserId: Maybe<string>;
    /** ID of the brand directly with the watchlist */
    readonly brandId: Maybe<string>;
    /** advertiser associated with the watchlist */
    readonly advertiser: Maybe<Json>;
    /** brand associated with the watchlist */
    readonly brand: Maybe<Json>;
    /** creative associated with the watchlist */
    readonly creative: Maybe<Creative>;
    /** Contains the list of all source type IDs associated with this watchlist, including those for sources on schedules. */
    readonly combinedSourceTypeIds: Maybe<ReadonlyArray<string>>;

    readonly scheduledJobs: ScheduledJobList;
    /** TODO for backward compat with v3 search? */
    readonly schedules: ScheduledJobList;
  }

  export interface CognitiveSearch {
    readonly id: string;
    /** A recursive tree structure defining the search criteria */
    readonly profile: Maybe<Json>;
    /** ID of the mention status to set on each mention generated as a result of a match against this search */
    readonly mentionStatusId: Maybe<string>;
    /** The mention status to set on each mention generated as a result of a match against this search */
    readonly mentionStatus: Maybe<MentionStatus>;
    /** The raw query. Read-only and server-generated based on the search profile. */
    readonly query: Maybe<Json>;
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

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;

    readonly isActive: boolean;
    /** The ID of the object on which this subscription is set, such as a watchlist ID. */
    readonly targetId: string;
    /** Scheduled time of day */
    readonly scheduledTime: Maybe<Time>;
    /** Time zone of the scheduled time */
    readonly scheduledTimeZone: Maybe<string>;
    /** Scheduled day of the week */
    readonly scheduledDay: Maybe<DayOfWeek>;

    readonly jsondata: Maybe<Json>;

    readonly contact: SubscriptionContact;

    readonly unsubscribeHash: Maybe<string>;
  }

  export interface SubscriptionContact {
    readonly userId: string;

    readonly emailAddress: Maybe<string>;

    readonly phoneNumber: Maybe<string>;

    readonly webhookUri: Maybe<string>;
  }

  export interface MentionList extends Page {
    readonly offset: number;

    readonly limit: number;

    readonly count: Maybe<number>;

    readonly records: Maybe<ReadonlyArray<Mention>>;
  }

  export interface Mention {
    readonly id: string;

    readonly organizationId: string;

    readonly sourceTypeId: Maybe<string>;

    readonly sourceId: Maybe<string>;

    readonly scheduleId: Maybe<string>;

    readonly mediaId: Maybe<string>;

    readonly advertiserId: Maybe<string>;

    readonly brandId: Maybe<string>;

    readonly campaignId: Maybe<string>;

    readonly watchlistId: Maybe<string>;

    readonly statusId: Maybe<string>;

    readonly complianceStatusId: Maybe<string>;

    readonly spotTypeId: Maybe<string>;

    readonly audienceMarketCount: Maybe<number>;

    readonly audienceAffiliateCount: Maybe<number>;

    readonly mentionHitCount: Maybe<number>;

    readonly audience: Maybe<number>;

    readonly mentionRating: Maybe<number>;

    readonly isMatch: Maybe<boolean>;

    readonly mentionDate: Maybe<DateTime>;

    readonly metadata: Maybe<Json>;

    readonly mentionSnippets: Maybe<ReadonlyArray<Maybe<MentionSnippets>>>;

    readonly userSnippets: Maybe<ReadonlyArray<Maybe<MentionUserSnippets>>>;

    readonly adCreative: Maybe<Json>;

    readonly fingerprint: Maybe<Json>;

    readonly cognitiveEngineResults: Maybe<Json>;

    readonly comments: Maybe<MentionCommentList>;

    readonly hash: Maybe<string>;

    readonly hitStartDateTime: Maybe<DateTime>;

    readonly hitEndDateTime: Maybe<DateTime>;

    readonly endDateTime: Maybe<DateTime>;

    readonly scheduledJob: Maybe<ScheduledJob>;

    readonly temporalDataObject: Maybe<TemporalDataObject>;

    readonly organization: Organization;

    readonly watchlist: Maybe<Watchlist>;

    readonly advertiser: Maybe<Json>;

    readonly brand: Maybe<Json>;

    readonly queryTerm: Maybe<string>;

    readonly ratings: Maybe<MentionRatingList>;

    readonly privateNote: Maybe<string>;

    readonly publicNote: Maybe<string>;

    readonly campaign: Maybe<Campaign>;
  }

  export interface MentionSnippets {
    readonly text: Maybe<string>;

    readonly startTime: Maybe<number>;

    readonly endTime: Maybe<number>;

    readonly hits: Maybe<ReadonlyArray<Maybe<MentionHit>>>;
  }

  export interface MentionHit {
    readonly queryTerm: Maybe<string>;

    readonly startTime: Maybe<number>;

    readonly endTime: Maybe<number>;
  }

  export interface MentionUserSnippets {
    readonly text: Maybe<string>;

    readonly startTime: Maybe<number>;

    readonly endTime: Maybe<number>;

    readonly transcriptStartDate: Maybe<DateTime>;

    readonly transcriptEndDate: Maybe<DateTime>;

    readonly snippets: Maybe<ReadonlyArray<Maybe<MentionSnippets>>>;
  }

  export interface MentionCommentList extends Page {
    readonly offset: number;

    readonly limit: number;

    readonly count: Maybe<number>;

    readonly records: Maybe<ReadonlyArray<Maybe<MentionComment>>>;
  }

  export interface MentionComment {
    readonly commentId: string;

    readonly mentionId: Maybe<string>;

    readonly userId: Maybe<string>;

    readonly firstName: Maybe<string>;

    readonly lastName: Maybe<string>;

    readonly userImage: Maybe<string>;

    readonly commentText: Maybe<string>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;
  }

  export interface ScheduledJob {
    readonly id: string;

    readonly organizationId: Maybe<string>;
    /** Organization that owns this scheduled job */
    readonly organization: Maybe<Organization>;

    readonly name: Maybe<string>;

    readonly description: Maybe<string>;

    readonly startDateTime: Maybe<DateTime>;

    readonly stopDateTime: Maybe<DateTime>;

    readonly jobPipelineIds: Maybe<ReadonlyArray<string>>;

    readonly jobPipelines: JobPipelineList;

    readonly jobTemplateIds: Maybe<ReadonlyArray<string>>;

    readonly jobTemplates: JobTemplateList;
    /** Retrieve the complete set of job templates associated with this scheduled job, including those that are associated through a job pipeline. */
    readonly allJobTemplates: JobTemplateList;
    /** The ID of the primary source on this scheduled job, if applicable. This is based on the payloads of the tasks that are invoked for this scheduled job. */
    readonly primarySourceId: Maybe<string>;
    /** The primary source. See `primarySourceId` above. */
    readonly primarySource: Maybe<Source>;

    readonly jobs: JobList;
    /** Get a list of sources that are used by engine configurations that reference this schedule through the schedule -> job -> task relationship. */
    readonly sources: Maybe<SourceList>;

    readonly parts: Maybe<ReadonlyArray<SchedulePart>>;

    readonly isActive: boolean;

    readonly runMode: RunMode;

    readonly details: Maybe<Json>;

    readonly detailsSchemaId: Maybe<string>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;
    /** List of schema-controlled content templates attached to this scheduled job */
    readonly contentTemplates: ReadonlyArray<ScheduledJobContentTemplate>;
    /** Permissions granted to other organizations. Only the source owner can view or edit this field. */
    readonly collaborators: ScheduledJobCollaboratorList;
    /** A public scheduled job can be viewed and launched by users from any organization. By default, scheduled jobs are private and can only be viewed or launched by the owning organization and organizations that the owner has explicitly shared them with. Only Veritone administrators can create public scheduled jobs. */
    readonly isPublic: Maybe<boolean>;
    /** The user's permission on this scheduled job */
    readonly permission: Maybe<ScheduledJobPermission>;

    readonly primarySourceTypeId: Maybe<string>;

    readonly primarySourceType: Maybe<SourceType>;

    readonly ingestionStatusId: Maybe<string>;

    readonly ingestionStatus: Maybe<string>;

    readonly affiliates: ProgramAffiliateList;
  }

  export interface JobPipelineList extends Page {
    readonly records: ReadonlyArray<JobPipeline>;

    readonly count: number;

    readonly offset: number;

    readonly limit: number;
  }

  export interface JobPipeline {
    /** Unique ID of this job pipeline */
    readonly id: string;
    /** List of job templates associated with this job pipeline */
    readonly jobTemplates: Maybe<JobTemplateList>;
    /** ID of the organization that owns this job pipeline */
    readonly organizationId: Maybe<string>;
    /** The organization that owns this job pipeline */
    readonly organization: Maybe<Organization>;
    /** Indicates whether or not this job pipeline is public. If so, it can be viewed and used, but not modified, by all organizations. */
    readonly isPublic: boolean;
  }

  export interface JobTemplateList extends Page {
    readonly records: ReadonlyArray<JobTemplate>;

    readonly count: number;

    readonly offset: number;

    readonly limit: number;
  }

  /** A job template is a reusable template for job creation. */
  export interface JobTemplate {
    /** The object ID */
    readonly id: string;
    /** Date and time this job template was created */
    readonly createdDateTime: Maybe<DateTime>;
    /** Date and time this job template was last modified */
    readonly modifiedDateTime: Maybe<DateTime>;
    /** Task templates associated with this job template */
    readonly taskTemplates: TaskTemplateList;
    /** Job pipeline ID that this template belongs to, if there is one */
    readonly jobPipelineId: Maybe<string>;
    /** Job pipeline that this template belongs to, if there is one */
    readonly jobPipeline: Maybe<JobPipeline>;
    /** Job pipeline stage. Defined only if this template belongs to a job pipeline. */
    readonly jobPipelineStage: Maybe<number>;
    /** Target execution cluster ID */
    readonly clusterId: Maybe<string>;

    readonly skipDecider: Maybe<boolean>;
    /** Optional configuration data for jobs launched from the template. A schema may be enforced over the data stored here. Used for top-level information about the job that does not fit on a specific task template. */
    readonly jobConfig: Maybe<Json>;
  }

  export interface TaskTemplateList extends Page {
    readonly records: ReadonlyArray<TaskTemplate>;

    readonly count: number;

    readonly offset: number;

    readonly limit: number;
  }

  export interface TaskTemplate {
    readonly id: string;

    readonly engineId: Maybe<string>;

    readonly engine: Maybe<Engine>;

    readonly engineConfigId: Maybe<string>;

    readonly engineConfig: Maybe<EngineConfiguration>;

    readonly executionLocationId: Maybe<string>;

    readonly executionLocation: Maybe<ExecutionLocation>;

    readonly jobTemplateId: Maybe<string>;

    readonly jobTemplate: Maybe<JobTemplate>;

    readonly payload: Maybe<Json>;

    readonly payloadString: Maybe<string>;

    readonly parentTaskId: Maybe<string>;

    readonly parentTask: Maybe<Task>;

    readonly childTaskIds: ReadonlyArray<string>;

    readonly childTasks: TaskTemplateList;
  }

  export interface EngineConfiguration {
    readonly id: string;

    readonly credentials: Maybe<ReadonlyArray<ExternalCredential>>;

    readonly sourceId: Maybe<string>;

    readonly source: Maybe<Source>;
  }

  export interface ExternalCredential {
    readonly id: string;

    readonly sourceTypeId: Maybe<string>;

    readonly sourceType: Maybe<SourceType>;

    readonly data: Maybe<StructuredData>;

    readonly dataId: Maybe<string>;
  }

  /** A source type represents a category of sources that share common attributes, such as "TV station" or "Real-time camera feed". */
  export interface SourceType {
    /** Unique ID of this source type */
    readonly id: string;
    /** A name for this source type */
    readonly name: string;

    readonly organizationId: Maybe<string>;

    readonly isPublic: Maybe<boolean>;
    /** The ID of an optional schema for instances (sources) of this source type */
    readonly sourceSchemaId: Maybe<string>;
    /** The icon representing the type of source */
    readonly iconClass: Maybe<string>;
    /** The schema object used to validate details for instances (sources) of this source type */
    readonly sourceSchema: Maybe<Schema>;
    /** The ID of an optional schema for credentials associated with sources of this type. */
    readonly credentialSchemaId: Maybe<string>;
    /** The schema used to validate credentials associated with sources of this type. */
    readonly credentialSchema: Maybe<Schema>;
    /** Date and time this object was created. */
    readonly createdDateTime: Maybe<DateTime>;
    /** Date and time this object was last modified */
    readonly modifiedDateTime: Maybe<DateTime>;

    readonly credentialType: Maybe<CredentialType>;
    /** Indicates whether or not the source is "live", such as a camera feed */
    readonly isLive: Maybe<boolean>;
    /** Indicates whether the source requires a scan job pipeline */
    readonly requiresScanPipeline: Maybe<boolean>;

    readonly supportedRunModes: ReadonlyArray<RunMode>;
    /** The source type category ID for this source type. Used primarily by Veritone platform components. */
    readonly categoryId: string;
    /** The source type category for this source type. Used primarily by Veritone platform components. */
    readonly category: SourceTypeCategory;
    /** List of source formats applicable to this source type. Only applies to certain source types; many will have an empty list. */
    readonly sourceFormats: ReadonlyArray<string>;
    /** List of program formats applicable to this source type. Only applies to certain source types; many will have an empty list. */
    readonly programFormats: ReadonlyArray<string>;
    /** Sources created under this source type */
    readonly sources: SourceList;
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

  /** A source represents a source of data and is used by adapters to ingest data into the platform for use by an engine workflow. */
  export interface Source {
    /** Unique ID of this source */
    readonly id: string;
    /** ID of the source type for this source. */
    readonly sourceTypeId: string;
    /** The source type for this source */
    readonly sourceType: Maybe<SourceType>;
    /** A name for this source */
    readonly name: string;
    /** Metadata associated with this source. The schema for this data is specific to the source type and controlled by a schema. */
    readonly details: Maybe<Json>;
    /** Indicates whether this source is public and available to all organizations or restricted to the organization that owns id. */
    readonly isPublic: boolean;
    /** ID of the organization that owns this source */
    readonly organizationId: string;
    /** The organization that owns this source */
    readonly organization: Maybe<Organization>;
    /** Date and time this source was created */
    readonly createdDateTime: Maybe<DateTime>;
    /** Date and time this source was last modified */
    readonly modifiedDateTime: Maybe<DateTime>;
    /** An optional thumbnail image URL for the source */
    readonly thumbnailUrl: Maybe<string>;

    readonly contentTemplates: ReadonlyArray<SourceContentTemplate>;
    /** Id of a published data registry schema */
    readonly correlationSchemaId: Maybe<string>;
    /** Id of a structured data object for the correlationSchemaId */
    readonly correlationSDOId: Maybe<string>;
    /** permission the currently authenticated principal has on this source. */
    readonly permission: SourcePermission;
    /** Permissions granted to other organizations. Only the source owner can view or edit this field. */
    readonly collaborators: SourceCollaboratorList;
    /** Current state for the source object. This is controlled by the adapters that use the source and should not be set by other clients. */
    readonly state: Maybe<Json>;
  }

  export interface SourceContentTemplate {
    readonly id: string;

    readonly sourceId: string;

    readonly sdoId: string;

    readonly sdo: Maybe<StructuredData>;

    readonly schemaId: string;

    readonly data: Maybe<Json>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;
  }

  export interface SourceCollaboratorList extends Page {
    readonly records: ReadonlyArray<SourceCollaborator>;

    readonly offset: number;

    readonly limit: number;

    readonly count: Maybe<number>;
  }

  /** A source ACL grants a single organization limited rights to a private source */
  export interface SourceCollaborator {
    /** The permission granted. Either `viewer` or `editor`. */
    readonly permission: SourcePermission;
    /** Organization ID the source was shared with */
    readonly organizationId: string;
    /** The organization the source was shared with */
    readonly organization: Maybe<Organization>;
  }

  export interface ExecutionLocation {
    readonly id: string;

    readonly clusterId: string;

    readonly cluster: Cluster;

    readonly nodeId: Maybe<string>;

    readonly node: Maybe<ClusterNode>;

    readonly data: Json;
  }

  export interface Cluster {
    readonly id: string;

    readonly nodes: Maybe<ReadonlyArray<Maybe<ClusterNode>>>;

    readonly name: Maybe<string>;

    readonly isPublic: Maybe<boolean>;

    readonly type: Maybe<ClusterType>;

    readonly organizationId: Maybe<string>;

    readonly allowedEngines: Maybe<ReadonlyArray<string>>;

    readonly containerTag: Maybe<string>;

    readonly paused: Maybe<boolean>;

    readonly memorySizeBytes: Maybe<number>;

    readonly storageSizeBytes: Maybe<number>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;

    readonly deletedDateTime: Maybe<DateTime>;

    readonly cachedDateTime: Maybe<DateTime>;

    readonly default: Maybe<boolean>;

    readonly bypassAllowedEngines: Maybe<boolean>;

    readonly collaborators: Maybe<ClusterCollaboratorList>;
  }

  export interface ClusterNode {
    readonly id: string;

    readonly clusterId: Maybe<string>;

    readonly cluster: Maybe<Cluster>;

    readonly name: Maybe<string>;
  }

  export interface ClusterCollaboratorList extends Page {
    readonly records: ReadonlyArray<ClusterCollaborator>;

    readonly offset: number;

    readonly limit: number;

    readonly count: Maybe<number>;
  }

  /** A source ACL grants a single organization limited rights to a private clusters */
  export interface ClusterCollaborator {
    /** The permission granted. */
    readonly permission: ClusterPermission;
    /** Organization ID the cluster was shared with */
    readonly organizationId: string;
    /** The organization the cluster was shared with */
    readonly organization: Maybe<Organization>;
  }

  export interface JobList extends Page {
    /** Jobs retrieved */
    readonly records: Maybe<ReadonlyArray<Maybe<Job>>>;
    /** The starting index for records that were returned in this query. */
    readonly offset: number;
    /** Maximum number of results that were retrieved in this query; page size */
    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  export interface Job {
    /** ID of the job */
    readonly id: string;
    /** User-provided job name */
    readonly name: Maybe<string>;
    /** Optional job description */
    readonly description: Maybe<string>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;

    readonly createdBy: Maybe<string>;

    readonly modifiedBy: Maybe<string>;
    /** ID of the target object for the job, such as a container or Recording */
    readonly targetId: Maybe<string>;
    /** Source asset ID */
    readonly sourceAssetId: Maybe<string>;
    /** Overall job status, as computed from the statuses of its component tasks */
    readonly status: Maybe<TaskStatus>;
    /** Tasks the job has or will execute */
    readonly tasks: Maybe<TaskList>;
    /** Application the job ran under */
    readonly applicationId: Maybe<string>;
    /** Target TemporalDataObject */
    readonly target: Maybe<TemporalDataObject>;
    /** ID of the cluster where this job will be executed */
    readonly clusterId: Maybe<string>;

    readonly jobConfig: Maybe<Json>;
    /** ID of the template from which this job was created, if applicable. */
    readonly templateId: Maybe<string>;
    /** The template which this job was created, if applicable. */
    readonly template: Maybe<JobTemplate>;
    /** ID of the scheduled job under which this job was created, if applicable. */
    readonly scheduledJobId: Maybe<string>;
    /** The scheduled job under which this job was created, if applicable. */
    readonly scheduledJob: Maybe<ScheduledJob>;
  }

  export interface TaskList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<Task>>>;
    /** The starting index for records that were returned in this query. */
    readonly offset: number;

    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  export interface SchedulePart {
    readonly scheduleType: ScheduleType;
    /** The day of week adjusted to source live timezone */
    readonly scheduledDayLocal: Maybe<DayOfWeek>;

    readonly scheduledDay: Maybe<DayOfWeek>;

    readonly startTime: Maybe<Time>;

    readonly stopTime: Maybe<Time>;

    readonly repeatIntervalUnit: Maybe<IntervalUnit>;

    readonly repeatInterval: Maybe<number>;

    readonly durationSeconds: Maybe<number>;
  }

  export interface ScheduledJobContentTemplate {
    readonly id: string;

    readonly scheduledJobId: string;

    readonly sdoId: string;

    readonly sdo: Maybe<StructuredData>;

    readonly schemaId: string;

    readonly data: Maybe<Json>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;
  }

  export interface ScheduledJobCollaboratorList extends Page {
    readonly records: ReadonlyArray<ScheduledJobCollaborator>;

    readonly offset: number;

    readonly limit: number;

    readonly count: Maybe<number>;
  }

  /** A source ACL grants a single organization limited rights to a private source */
  export interface ScheduledJobCollaborator {
    /** The permission granted. Either `viewer` or `editor`. */
    readonly permission: ScheduledJobPermission;
    /** Organization ID the source was shared with */
    readonly organizationId: string;
    /** The organization the source was shared with */
    readonly organization: Maybe<Organization>;
  }

  export interface ProgramAffiliateList extends Page {
    readonly records: Maybe<ReadonlyArray<ProgramAffiliate>>;

    readonly offset: number;

    readonly limit: number;

    readonly count: Maybe<number>;
  }

  export interface ProgramAffiliate {
    readonly sourceId: string;

    readonly source: Maybe<Source>;

    readonly scheduledJobId: string;

    readonly scheduledJob: Maybe<ScheduledJob>;

    readonly scheduledDay: Maybe<DayOfWeek>;
    /** The day of week adjusted to source live timezone */
    readonly scheduledDayLocal: Maybe<DayOfWeek>;

    readonly startDateTime: Maybe<DateTime>;

    readonly stopDateTime: Maybe<DateTime>;

    readonly startTime: Maybe<Time>;

    readonly stopTime: Maybe<Time>;

    readonly status: Maybe<string>;
  }

  export interface MentionRatingList extends Page {
    readonly offset: number;

    readonly limit: number;

    readonly count: Maybe<number>;

    readonly records: Maybe<ReadonlyArray<Maybe<MentionRating>>>;
  }

  export interface MentionRating {
    readonly ratingId: string;

    readonly mentionId: Maybe<string>;

    readonly userId: Maybe<string>;

    readonly ratingValue: Maybe<number>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;
  }

  export interface Campaign {
    readonly id: string;

    readonly name: string;

    readonly startDate: Maybe<DateTime>;

    readonly stopDate: Maybe<DateTime>;

    readonly budget: Maybe<number>;

    readonly organizationId: string;

    readonly advertiserId: Maybe<string>;

    readonly brandId: Maybe<string>;

    readonly notes: Maybe<string>;
  }

  export interface Creative {
    readonly id: string;

    readonly name: string;

    readonly keywords: Maybe<string>;

    readonly organizationId: string;

    readonly advertiserId: Maybe<string>;

    readonly brandId: Maybe<string>;
  }

  export interface ScheduledJobList extends Page {
    readonly records: ReadonlyArray<ScheduledJob>;

    readonly count: number;

    readonly offset: number;

    readonly limit: number;
  }

  export interface CollectionList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<Collection>>>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    readonly offset: number;
    /** Maximum number of results that were retrieved in this query; page size */
    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  export interface Collection {
    readonly id: string;

    readonly name: string;
    /** A url to get the collection image */
    readonly imageUrl: Maybe<string>;
    /** A sigend url to get the collection image. It will only be signed if it is an s3 url. */
    readonly signedImageUrl: Maybe<string>;

    readonly ownerId: Maybe<string>;

    readonly description: Maybe<string>;

    readonly organization: Maybe<Organization>;

    readonly organizationId: string;

    readonly orgSharing: Maybe<boolean>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;

    readonly programCount: Maybe<number>;

    readonly itemCount: Maybe<number>;

    readonly typeId: Maybe<string>;

    readonly isActive: Maybe<boolean>;

    readonly widgets: Maybe<WidgetList>;
  }

  export interface WidgetList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<Widget>>>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    readonly offset: number;
    /** Maximum number of results that were retrieved in this query; page size */
    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  export interface Widget {
    readonly id: Maybe<string>;

    readonly name: Maybe<string>;

    readonly organization: Maybe<Organization>;

    readonly organizationId: Maybe<string>;

    readonly collection: Maybe<Collection>;

    readonly collectionId: string;

    readonly displayCollectionName: Maybe<boolean>;

    readonly displayTranscription: Maybe<boolean>;

    readonly width: Maybe<number>;

    readonly numberOfMentionsToShow: Maybe<number>;

    readonly adScript: Maybe<string>;

    readonly seoTags: Maybe<ReadonlyArray<Maybe<string>>>;

    readonly backgroundColor: Maybe<string>;

    readonly borderColor: Maybe<string>;

    readonly textColor: Maybe<string>;

    readonly createdDateTime: Maybe<DateTime>;
  }

  /** Analytics Dashboards */
  export interface Dashboard {
    /** The order in which to display the dashboard. */
    readonly index: Maybe<number>;

    readonly title: Maybe<string>;

    readonly description: Maybe<string>;
    /** The status of the dashboard */
    readonly active: Maybe<boolean>;
    /** The filters that can be applied on the dashboard. Typically watchlists. */
    readonly filters: Maybe<ReadonlyArray<Maybe<string>>>;

    readonly type: Maybe<string>;
    /** Vendor specific identifier for Qlik applications */
    readonly qlikAppId: Maybe<string>;
    /** Vendor specific identifier for Qlik sheet */
    readonly qlikSheetId: Maybe<string>;

    readonly thumbnail: Maybe<string>;
  }

  export interface BuildList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<Build>>>;
    /** The starting index for records that were returned in this query. */
    readonly offset: number;

    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  export interface Build {
    readonly id: string;

    readonly name: Maybe<string>;

    readonly description: Maybe<string>;
    /** Date and date build was created */
    readonly createdDateTime: Maybe<DateTime>;
    /** Date and time build was last modified */
    readonly modifiedDateTime: Maybe<DateTime>;

    readonly createdBy: Maybe<string>;

    readonly modifiedBy: Maybe<string>;
    /** The ID of the engine this build is for */
    readonly engineId: string;
    /** The engine this build is for */
    readonly engine: Maybe<Engine>;

    readonly price: Maybe<number>;

    readonly validateUri: Maybe<string>;

    readonly executeUri: Maybe<string>;
    /** Engine build status: */
    readonly status: Maybe<BuildStatus>;
    /** URL to the Docker image for this engine build, if applicable */
    readonly dockerImage: Maybe<string>;

    readonly runtime: Maybe<Json>;

    readonly version: Maybe<string>;

    readonly report: Maybe<Json>;
    /** The entire manifest, supplied by the engine developer, that describes the engine's capabilities and requirements and is used by the platform system to build and execute the engine. */
    readonly manifest: Maybe<Json>;

    readonly preferredInputFormat: Maybe<string>;

    readonly supportedInputFormats: Maybe<ReadonlyArray<string>>;

    readonly outputFormats: Maybe<ReadonlyArray<string>>;
    /** List of IDs of source types that the engine supports. Applies only to adapter engines that ingest data from a source. Will be a list of IDs of SourceType objects. */
    readonly supportedSourceTypes: Maybe<ReadonlyArray<string>>;
    /** Used to give a default action choice */
    readonly primaryAction: Maybe<BuildUpdateAction>;
    /** Used to give secondary action choices */
    readonly secondaryActions: Maybe<ReadonlyArray<Maybe<BuildUpdateAction>>>;
    /** Contains all valid action choices */
    readonly validStateActions: Maybe<ReadonlyArray<Maybe<BuildUpdateAction>>>;
  }

  /** Represents a custom input field on an engine. */
  export interface EngineField {
    /** Maximum value, in float format. Applies only to fields of type Number. */
    readonly max: Maybe<number>;
    /** Minimum value, in float format. Applies only to fields of type Number. */
    readonly min: Maybe<number>;
    /** Numerical step by which the value should be incremented or decremented in the user interface, in float format. Applies only to fields of type Number. */
    readonly step: Maybe<number>;
    /** The field type. */
    readonly type: EngineFieldType;
    /** General information about the field, such as a description. */
    readonly info: Maybe<string>;
    /** A machine-readable name, or key, for the field. */
    readonly name: string;
    /** A human-readable label for the field. */
    readonly label: Maybe<string>;
    /** A set of allowed values for the field. Applies only to fields of type picklist or multi-picklist. */
    readonly options: Maybe<ReadonlyArray<EngineFieldPicklistOption>>;
    /** An optional default value for the field. Taken in string format, but applies to all field types. */
    readonly defaultValue: Maybe<string>;
    /** Optional default values to apply to a picklist. This field should only be set for a field of type multi-picklist. */
    readonly defaultValues: Maybe<ReadonlyArray<string>>;
  }

  /** Represents one allowed option in a picklist. */
  export interface EngineFieldPicklistOption {
    /** The human-readable label for the option, such as "English-US" for a language selector. */
    readonly key: string;
    /** The machine-readable value that will be sent in the engine payload, such as "en-us" for a language selector. */
    readonly value: string;
  }

  export interface EngineTaskMetrics {
    readonly cancelledCount: Maybe<number>;

    readonly completedCount: Maybe<number>;

    readonly failedCount: Maybe<number>;

    readonly pendingCount: Maybe<number>;

    readonly queuedCount: Maybe<number>;

    readonly runningCount: Maybe<number>;
  }

  export interface TaskLog {
    /** URI to the task log file */
    readonly uri: Maybe<string>;
    /** The entire text contents of the log file. Note that this value can long. */
    readonly text: Maybe<string>;
    /** The log file in JSON form. If the log file contains valid JSON, this field will contain the native structure. If the log file does not contain valid JSON, this field will contain a single property called `text` with a string value containing the entire log file. */
    readonly jsondata: Maybe<Json>;
  }

  /** Contains security settings on an asset container */
  export interface Security {
    /** Whether or not the object is globally visible */
    readonly global: Maybe<boolean>;
  }

  /** Describes source information about a TDO. That is, the components and processes that produced it. Each field may or may not have a value, depending on how the TDO was created. */
  export interface TdoSourceData {
    /** Task ID, typically of an ingestion task. */
    readonly taskId: Maybe<string>;
    /** The task object. */
    readonly task: Maybe<Task>;
    /** Ingestion source ID */
    readonly sourceId: Maybe<string>;
    /** ID of the scheduled job, if any, under which this TDO was created */
    readonly scheduledJobId: Maybe<string>;
    /** ID of the engine used in the task that created this TDO */
    readonly engineId: Maybe<string>;
    /** The engine used in the task that created this TDO. */
    readonly engine: Maybe<Engine>;
    /** The scheduled job under which this TDO was created, if any */
    readonly scheduledJob: Maybe<ScheduledJob>;
    /** The source from which this TDO was created, if any */
    readonly source: Maybe<Source>;
  }

  /** Describes a stream that is available on a TDO */
  export interface TdoStreamData {
    /** The stream URI */
    readonly uri: string;
    /** The protocol, such as "dash" or "hls" */
    readonly protocol: string;
  }

  export interface EngineRunList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<EngineRun>>>;
    /** The starting index for records that were returned in this query. */
    readonly offset: number;

    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  /** Describes engine run on a TDO with */
  export interface EngineRun {
    /** Engine that was run on a TDO */
    readonly engine: Maybe<Engine>;
    /** Engine status derived from the written engine output or task status. See TaskStatus enum for details. */
    readonly status: Maybe<TaskStatus>;
    /** Last run task for this engine and tdo */
    readonly task: Maybe<Task>;
    /** Whether or not the engine run has user edits */
    readonly hasUserEdits: Maybe<boolean>;
  }

  export interface CloneRequestList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<CloneRequest>>>;

    readonly count: Maybe<number>;

    readonly offset: number;

    readonly limit: number;
  }

  export interface CloneRequest {
    readonly id: string;

    readonly sourceApplicationId: string;

    readonly destinationApplicationId: string;

    readonly numberOfRecordings: Maybe<number>;

    readonly numberOfCompletedRecordings: Maybe<number>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;

    readonly status: Maybe<string>;

    readonly percentage: Maybe<number>;
  }

  export interface EngineCategoryList extends Page {
    readonly records: Maybe<ReadonlyArray<EngineCategory>>;

    readonly offset: number;

    readonly limit: number;

    readonly count: Maybe<number>;
  }

  export interface LibraryTypeList extends Page {
    /** The starting index for records that were returned in this query. */
    readonly offset: number;

    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;

    readonly records: Maybe<ReadonlyArray<Maybe<LibraryType>>>;
  }

  export interface LibraryType {
    readonly id: string;

    readonly label: Maybe<string>;

    readonly iconClass: Maybe<string>;

    readonly entityIdentifierTypes: Maybe<ReadonlyArray<Maybe<EntityIdentifierType>>>;

    readonly entityTypeName: Maybe<string>;

    readonly entityTypeNamePlural: Maybe<string>;

    readonly entityType: Maybe<EntityType>;
  }

  export interface EntityType {
    readonly name: string;

    readonly namePlural: string;

    readonly schema: Json;
  }

  export interface LibraryList extends Page {
    /** The starting index for records that were returned in this query. */
    readonly offset: number;

    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;

    readonly records: Maybe<ReadonlyArray<Maybe<Library>>>;
  }

  export interface Library {
    /** Object creation timestamp. Does not change. */
    readonly createdDateTime: Maybe<DateTime>;
    /** Object modification timestamp. */
    readonly modifiedDateTime: Maybe<DateTime>;
    /** The object's unique ID */
    readonly id: string;

    readonly createdBy: Maybe<string>;

    readonly modifiedBy: Maybe<string>;

    readonly description: Maybe<string>;

    readonly name: Maybe<string>;
    /** Modular metadata in the form of key-value pairs */
    readonly properties: Maybe<ReadonlyArray<Maybe<Property>>>;
    /** Security settings for the asset container */
    readonly security: Maybe<Security>;

    readonly applicationId: string;
    /** Library version */
    readonly version: Maybe<number>;

    readonly organizationId: Maybe<string>;

    readonly libraryType: Maybe<LibraryType>;

    readonly libraryTypeId: Maybe<string>;

    readonly coverImageUrl: Maybe<string>;
    /** Retrieve engine models for a library */
    readonly engineModels: Maybe<LibraryEngineModelList>;
    /** Retrieve library model configurations */
    readonly configurations: Maybe<LibraryConfigurationList>;
    /** Retrieve dataset library tdos */
    readonly dataset: Maybe<LibraryDataset>;

    readonly entities: Maybe<EntityList>;
    /** Retrieve collaborators for a library. */
    readonly collaborators: Maybe<LibraryCollaboratorList>;
    /** Aggregated summary data about the library */
    readonly summary: Maybe<LibrarySummary>;
  }

  export interface LibraryEngineModelList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<LibraryEngineModel>>>;

    readonly offset: number;

    readonly limit: number;

    readonly count: Maybe<number>;
  }

  export interface LibraryEngineModel {
    readonly id: string;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;

    readonly engineId: string;

    readonly engine: Maybe<Engine>;

    readonly libraryId: string;

    readonly library: Maybe<Library>;

    readonly libraryVersion: Maybe<number>;

    readonly trainJobId: Maybe<string>;

    readonly trainStatus: LibraryEngineModelTrainStatus;

    readonly dataUrl: Maybe<string>;
    /** Content type of the data file pointed to by dataUrl. Will be empty if no data file is attached to the engine model. */
    readonly contentType: Maybe<string>;

    readonly jsondata: Maybe<Json>;

    readonly accuracy: Maybe<number>;

    readonly configurationId: Maybe<string>;
  }

  export interface LibraryConfigurationList extends Page {
    /** The starting index for records that were returned in this query. */
    readonly offset: number;

    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;

    readonly records: Maybe<ReadonlyArray<Maybe<LibraryConfiguration>>>;
  }

  export interface LibraryConfiguration {
    /** library configuration id */
    readonly id: Maybe<string>;
    /** ID of the selected library where this config applies to */
    readonly libraryId: Maybe<string>;
    /** ID of the engine category this config applies to */
    readonly engineCategoryId: Maybe<string>;
    /** List of selected engine ids for training */
    readonly targetEngineIds: Maybe<ReadonlyArray<Maybe<string>>>;
    /** This option is used for Dataset Library Only List of selected engine where tdos are extracted from for training data TDOs are extracted from higher ranked engines first then fallback to the lower ones if the priors don't have any matching tdo */
    readonly rankedSourceEngineIds: Maybe<ReadonlyArray<Maybe<string>>>;
    /** This option is used for Dataset Library Only Dataset tdos confidence filters */
    readonly confidence: Maybe<DatasetConfidence>;
  }

  export interface DatasetConfidence {
    /** Mininum Confidence Filter. Sources with confidence lower than this will be ignore */
    readonly min: Maybe<number>;
    /** Maximum Confidence Filter. Sources with confidence higher than this will be ignore */
    readonly max: Maybe<number>;
    /** allow sources with null confidence values */
    readonly allowNull: Maybe<boolean>;
  }

  export interface LibraryDataset {
    /** Id of the selected library */
    readonly libraryId: Maybe<string>;
    /** List of tdo ids in the selected library */
    readonly tdoIds: Maybe<ReadonlyArray<Maybe<string>>>;
  }

  export interface EntityList extends Page {
    /** The starting index for records that were returned in this query. */
    readonly offset: number;

    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;

    readonly records: Maybe<ReadonlyArray<Maybe<Entity>>>;
  }

  export interface Entity {
    readonly id: string;

    readonly name: Maybe<string>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;

    readonly createdBy: Maybe<string>;

    readonly modifiedBy: Maybe<string>;

    readonly properties: Maybe<ReadonlyArray<Maybe<Property>>>;

    readonly libraryId: Maybe<string>;

    readonly library: Maybe<Library>;

    readonly profileImageUrl: Maybe<string>;

    readonly identifiers: Maybe<EntityIdentifierList>;

    readonly isPublished: Maybe<boolean>;

    readonly jsondata: Maybe<Json>;

    readonly jsonstring: Maybe<string>;

    readonly summary: Maybe<EntitySummary>;

    readonly description: Maybe<string>;
  }

  export interface EntityIdentifierList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<EntityIdentifier>>>;

    readonly offset: number;

    readonly limit: number;

    readonly count: Maybe<number>;
  }

  export interface EntityIdentifier {
    readonly id: string;

    readonly entityId: string;

    readonly entity: Entity;

    readonly identifierType: EntityIdentifierType;

    readonly identifierTypeId: string;

    readonly title: Maybe<string>;

    readonly isPriority: Maybe<boolean>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;

    readonly url: string;

    readonly contentType: string;

    readonly jsondata: Maybe<Json>;

    readonly jsonstring: Maybe<string>;
  }

  export interface EntitySummary {
    readonly identifierCountsByType: Maybe<Json>;
  }

  export interface LibraryCollaboratorList {
    readonly records: Maybe<ReadonlyArray<Maybe<LibraryCollaborator>>>;
    /** The starting index for records that were returned in this query. */
    readonly offset: number;

    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  export interface LibraryCollaborator {
    readonly organizationId: string;

    readonly organization: Maybe<Organization>;

    readonly status: Maybe<string>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;

    readonly permissions: Maybe<ReadonlyArray<Maybe<string>>>;

    readonly libraryId: string;

    readonly library: Maybe<Library>;
  }

  export interface LibrarySummary {
    readonly entityCount: Maybe<number>;

    readonly unpublishedEntityCount: Maybe<number>;

    readonly lastTrainedVersion: Maybe<number>;

    readonly lastTrainedDateTime: Maybe<DateTime>;
  }

  export interface OrganizationList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<Organization>>>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    readonly offset: number;
    /** Maximum number of results that were retrieved in this query; page size */
    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  export interface Token {
    /** The token ID */
    readonly id: Maybe<string>;

    readonly applicationId: Maybe<string>;

    readonly groupId: Maybe<string>;

    readonly json: Maybe<TokenJson>;
  }

  export interface TokenJson {
    readonly rights: Maybe<ReadonlyArray<Maybe<string>>>;
  }

  export interface GroupList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<Group>>>;
    /** The starting index for records that were returned in this query. */
    readonly offset: number;
    /** Maximum number of results that were retrieved in this query; page size */
    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  export interface Group {
    readonly id: string;

    readonly name: Maybe<string>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;

    readonly applicationId: string;

    readonly createdBy: Maybe<User>;

    readonly modifiedBy: Maybe<User>;

    readonly organizationId: string;

    readonly organization: Maybe<Organization>;
    /** Freeform metadata in JSON form */
    readonly jsondata: Maybe<Json>;
  }

  export interface SharedMention {
    readonly id: string;

    readonly organizationId: string;

    readonly sourceTypeId: Maybe<string>;

    readonly sourceId: Maybe<string>;

    readonly scheduledJobId: Maybe<string>;

    readonly mediaId: Maybe<string>;

    readonly advertiserId: Maybe<string>;

    readonly brandId: Maybe<string>;

    readonly campaignId: Maybe<string>;

    readonly watchlistId: Maybe<string>;

    readonly statusId: Maybe<string>;

    readonly complianceStatusId: Maybe<string>;

    readonly spotTypeId: Maybe<string>;

    readonly audienceMarketCount: Maybe<number>;

    readonly audienceAffiliateCount: Maybe<number>;

    readonly mentionHitCount: Maybe<number>;

    readonly audience: Maybe<number>;

    readonly mentionRating: Maybe<number>;

    readonly isMatch: Maybe<boolean>;

    readonly mentionDate: Maybe<DateTime>;

    readonly metadata: Maybe<Json>;

    readonly mentionSnippets: Maybe<ReadonlyArray<Maybe<MentionSnippets>>>;

    readonly userSnippets: Maybe<ReadonlyArray<Maybe<MentionUserSnippets>>>;

    readonly adCreative: Maybe<Json>;

    readonly fingerprint: Maybe<Json>;

    readonly cognitiveEngineResults: Maybe<Json>;

    readonly comments: Maybe<ReadonlyArray<Maybe<MentionComment>>>;

    readonly hash: Maybe<string>;

    readonly hitStartDateTime: Maybe<DateTime>;

    readonly hitEndDateTime: Maybe<DateTime>;

    readonly organization: Maybe<Json>;

    readonly temporalDataObject: Maybe<Json>;

    readonly scheduledJob: Maybe<Json>;

    readonly share: Maybe<Share>;

    readonly watchlist: Maybe<Json>;
  }

  export interface Share {
    readonly id: string;

    readonly recipients: Maybe<ReadonlyArray<Maybe<string>>>;

    readonly shareMessage: Maybe<string>;

    readonly shareOptionsJson: Maybe<Json>;

    readonly folderId: Maybe<string>;

    readonly mentionId: Maybe<string>;
  }

  /** Results from a mention or media search. TODO link to format documentation for core-search-server */
  export interface SearchResult {
    readonly jsondata: Json;
  }

  export interface IngestionConfiguration {
    readonly id: string;

    readonly applicationId: string;

    readonly type: Maybe<string>;

    readonly name: Maybe<string>;

    readonly createdDateTime: Maybe<DateTime>;

    readonly modifiedDateTime: Maybe<DateTime>;

    readonly emailAddress: Maybe<string>;

    readonly job: Maybe<Json>;

    readonly ui: Maybe<Json>;

    readonly jsondata: Maybe<Json>;
  }

  export interface IngestionConfigurationList extends Page {
    readonly offset: number;

    readonly limit: number;

    readonly count: Maybe<number>;

    readonly records: Maybe<ReadonlyArray<Maybe<IngestionConfiguration>>>;
  }

  export interface SchemaPropertyList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<SchemaProperty>>>;
    /** The starting index for records that were returned in this query. */
    readonly offset: number;
    /** Maximum number of results that were retrieved in this query; page size */
    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  export interface SchemaProperty {
    readonly dataRegistryId: string;

    readonly majorVersion: number;

    readonly schema: Schema;

    readonly path: string;

    readonly searchPath: string;

    readonly type: string;

    readonly title: Maybe<string>;
  }

  /** This type represents information about the Veritone GraphQL server instance. Primarily used by Veritone engineering and operations. */
  export interface GraphQlServiceInfo {
    /** JSON structure containing build information, such as the build number and date. */
    readonly buildInfo: Maybe<Json>;

    readonly featureFlags: Maybe<Json>;

    readonly heartbeatStats: Maybe<Json>;
  }

  /** Contains information about a signed writable URL retrieved from the getSignedWritableUrl mutation. */
  export interface WritableUrlInfo {
    /** The storage bucket ID */
    readonly bucket: string;
    /** The storage object key */
    readonly key: string;
    /** Time interval, in seconds, after which this URL is expired and no longer valid. */
    readonly expiresInSeconds: number;
    /** Absolute time at which this URL expires */
    readonly expiresAtDateTime: DateTime;
    /** The signed URL, which can be uploaded to with an HTTP PUT (note:  PUT is required. POST will generate an error). */
    readonly url: string;
    /** A signed URL that can be used with HTTP GET to retrieve the new resource. */
    readonly getUrl: string;
    /** The unsigned, base URL to the object, which can be safely persisted and re-signed later by a client with the necessary storage credentials. */
    readonly unsignedUrl: Maybe<string>;
  }

  export interface RightsListing {
    readonly operations: ReadonlyArray<string>;

    readonly resources: Maybe<Json>;
  }

  export interface DataRegistryList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<DataRegistry>>>;
    /** The starting index for records that were returned in this query. */
    readonly offset: number;
    /** Maximum number of results that were retrieved in this query; page size */
    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  /** Represents a collection of engine results. Not Paged. */
  export interface EngineResultList {
    readonly sourceId: Maybe<string>;

    readonly records: Maybe<ReadonlyArray<Maybe<EngineResult>>>;
  }

  /** Represents single chunk of engine results for date range */
  export interface EngineResult {
    readonly tdoId: string;

    readonly engineId: string;

    readonly jsondata: Maybe<Json>;

    readonly startOffsetMs: Maybe<number>;

    readonly stopOffsetMs: Maybe<number>;

    readonly assetId: Maybe<string>;

    readonly userEdited: Maybe<boolean>;

    readonly tdo: Maybe<TemporalDataObject>;
  }

  /** Contains information of a event hook */
  export interface Trigger {
    readonly id: string;

    readonly event: string;

    readonly target: string;

    readonly consumerParams: Maybe<Json>;

    readonly createdDateTime: DateTime;

    readonly modifiedDateTime: DateTime;

    readonly createdBy: string;

    readonly updatedBy: string;
  }

  export interface SavedSearchList extends Page {
    readonly records: Maybe<ReadonlyArray<SavedSearch>>;

    readonly count: Maybe<number>;

    readonly offset: number;

    readonly limit: number;
  }

  export interface SavedSearch {
    readonly id: string;

    readonly organizationId: string;

    readonly organization: Maybe<Organization>;

    readonly ownerId: string;

    readonly owner: Maybe<User>;

    readonly name: string;

    readonly sharedWithOrganization: Maybe<boolean>;

    readonly createdDateTime: DateTime;

    readonly modifiedDateTime: DateTime;

    readonly csp: Maybe<Json>;
  }

  export interface ExportRequestList extends Page {
    readonly records: ReadonlyArray<ExportRequest>;

    readonly offset: number;

    readonly limit: number;

    readonly count: Maybe<number>;
  }

  export interface ExportRequest {
    /** The unique ID of this export request */
    readonly id: string;
    /** Current status of this export request */
    readonly status: ExportRequestStatus;
    /** ID of the organization this export request was issued for */
    readonly organizationId: string;
    /** Date/time at which this export request was created */
    readonly createdDateTime: DateTime;
    /** Date/time at which this export request was last modified */
    readonly modifiedDateTime: DateTime;
    /** ID of the user or API key that created this export request */
    readonly requestorId: string;
    /** The signed URI to the object that contains, or will contain, export results. */
    readonly assetUri: Maybe<string>;
  }

  export interface Event {
    readonly id: string;

    readonly eventName: string;

    readonly eventType: string;

    readonly application: string;

    readonly public: boolean;

    readonly description: Maybe<string>;

    readonly schemaData: string;

    readonly schemaHash: string;

    readonly createdDateTime: DateTime;

    readonly createdBy: string;
  }

  export interface EventList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<Event>>>;
    /** The starting index for records that were returned in this query. */
    readonly offset: number;

    readonly limit: number;
    /** Number of records returned in this response */
    readonly count: Maybe<number>;
  }

  /** Information about a time zone */
  export interface TimeZone {
    /** Time zone name, such as `America/Los_Angeles` */
    readonly name: string;
    /** Known abbreviations for the time zone. These may include offset variations such as those caused by daylight savings time. */
    readonly abbreviations: ReadonlyArray<TimeZoneAbbreviation>;
  }

  /** Information about a time zone abbreviation or variant. */
  export interface TimeZoneAbbreviation {
    /** The abbreviation, such as "PST" or "UTC" */
    readonly name: string;
    /** The offset from UTC in string form, such as `-08:00` for `PST`. */
    readonly offset: Maybe<string>;
    /** The offset from UTC in minutes, such as `-480` for `PST`. */
    readonly offsetMinutes: Maybe<number>;
  }

  export interface AuditLogEntryList extends Page {
    readonly records: ReadonlyArray<AuditLogEntry>;
    /** Count of records in this page. Will be less than or equal to `limit`. */
    readonly count: Maybe<number>;
    /** Offset used in the query that generated this page. */
    readonly offset: number;
    /** Limit used in the query that generated this page. */
    readonly limit: number;
    /** `toDateTime` value of the query that generated this page. Useful when a default was applied. */
    readonly toDateTime: Maybe<DateTime>;
    /** `fromDateTime` value of the query that generated this page. Useful when a default was applied. */
    readonly fromDateTime: Maybe<DateTime>;
  }

  export interface AuditLogEntry {
    /** ID of the organization that generated the audit entry. */
    readonly organizationId: Maybe<string>;
    /** The type of the object involved in the audit action, such as `Watchlist` or `TemporalDataObject`. */
    readonly objectType: Maybe<string>;
    /** The ID of the object involved in the audit action. The format of this ID varies by object type. */
    readonly objectId: Maybe<string>;
    /** The unique ID of the audit log entry. */
    readonly id: string;
    /** The event type, such as `Create`, `Update`, or `Delete`. */
    readonly eventType: Maybe<string>;
    /** User name or ID that generated the audit entry. This might be an API key. */
    readonly userName: Maybe<string>;
    /** Indicates whether or not the attempted action was successful. */
    readonly success: Maybe<boolean>;
    /** IP address of the client that generated the audit action. */
    readonly clientIpAddress: Maybe<string>;
    /** HTTP user agent of the client that generated the audit action. */
    readonly clientUserAgent: Maybe<string>;

    readonly description: Maybe<string>;
    /** Date/time at which the audit log entry was created. */
    readonly createdDateTime: DateTime;
  }

  export interface MediaShare {
    readonly mediaType: string;

    readonly serviceName: string;
    /** sourceId OR tdoId is required */
    readonly sourceId: Maybe<string>;

    readonly tdoId: Maybe<string>;

    readonly scheduledJobId: Maybe<string>;

    readonly startDateTime: Maybe<DateTime>;

    readonly stopDateTime: Maybe<DateTime>;

    readonly startOffsetMs: Maybe<number>;

    readonly stopOffsetMs: Maybe<number>;
    /** various settings for diffrent types of media. like audio only for videos */
    readonly settings: Maybe<Json>;
  }

  export interface WorkflowRuntimeResponse {
    readonly success: boolean;
    /** Error message if success is false */
    readonly message: Maybe<string>;
    /** uri of veritone workflow instance. This is only available when Workflow request is successful */
    readonly uri: Maybe<string>;
    /** Authentication token used for webhooks */
    readonly authToken: Maybe<string>;
  }

  export interface WorkflowRuntimeStorageDataList extends Page {
    readonly records: Maybe<ReadonlyArray<Maybe<WorkflowRuntimeStorageData>>>;

    readonly count: Maybe<number>;

    readonly offset: number;

    readonly limit: number;
  }

  export interface WorkflowRuntimeStorageData {
    /** Unique lookup id for the workflowRuntimeData */
    readonly storageKey: string;
    /** Data content - base64 encoded binary, plain string or encoded JSON */
    readonly storageData: string;
    /** Optional metadata for the workflowRuntimeData */
    readonly storageMetadata: Maybe<string>;
  }

  export interface ProcessTemplateList extends Page {
    readonly records: Maybe<ReadonlyArray<ProcessTemplate>>;

    readonly offset: number;

    readonly limit: number;

    readonly count: Maybe<number>;
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

    readonly count: Maybe<number>;
  }

  export interface ExternalCredentialList extends Page {
    readonly records: ReadonlyArray<ExternalCredential>;

    readonly count: number;

    readonly offset: number;

    readonly limit: number;
  }

  /** Mutations are used to modify data. Each mutation takes an input that contains the data necessary to create or update the data in question. */
  export interface Mutation {
    /** Create a new temporal data object */
    readonly createTDO: Maybe<TemporalDataObject>;
    /** Update a temporal data object */
    readonly updateTDO: Maybe<TemporalDataObject>;
    /** Delete a temporal data object. The TDO metadata, its assets and all storage objects, and search index data are deleted. Engine results stored in related task objects are not. cleanupTDO can be used to selectively delete certain data on the TDO. */
    readonly deleteTDO: Maybe<DeletePayload>;
    /** Delete partial information from a temporal data object. Use the delete options to control exactly which data is deleted. The default is to delete objects from storage and the search index, while leaving TDO-level metadata and task engine results intact. To permanently delete the TDO, use delete TDO. */
    readonly cleanupTDO: Maybe<DeletePayload>;
    /** Create a task log by using multipart form POST. */
    readonly createTaskLog: Maybe<TaskLog>;
    /** Create a media asset. Optionally, upload content using multipart form POST. */
    readonly createAsset: Maybe<Asset>;
    /** Delete an asset */
    readonly deleteAsset: Maybe<DeletePayload>;
    /** Update an asset */
    readonly updateAsset: Maybe<Asset>;
    /** Start a clone job. A clone creates a new TDO that links back to an existing TDO's assets instead of creating new ones and is used primarily to handle sample media. */
    readonly requestClone: Maybe<CloneRequest>;
    /** Create a new engine. The engine will need to go through a sequence of workflow steps before use in production. See VDA documentation for details. */
    readonly createEngine: Maybe<Engine>;
    /** Update an engine. Engines are subject to specific workflow steps. An engine's state determines what updates can be made to it. See VDA documentation for details. */
    readonly updateEngine: Maybe<Engine>;
    /** Delete an engine */
    readonly deleteEngine: Maybe<DeletePayload>;
    /** Create an engine build. */
    readonly createEngineBuild: Maybe<Build>;
    /** Update an engine build. Engine builds are subject to specific workflow steps. A build's state determines what updates can be made to it. See VDA documentation for details. */
    readonly updateEngineBuild: Maybe<Build>;
    /** Delete an engine build */
    readonly deleteEngineBuild: Maybe<DeletePayload>;
    /** Update a task */
    readonly updateTask: Maybe<Task>;

    readonly addTasksToJobs: Maybe<AddTasksToJobsResponse>;
    /** Poll a task */
    readonly pollTask: Maybe<Task>;
    /** Create a job */
    readonly createJob: Maybe<Job>;
    /** Cancel a job. This action effectively deletes the job, although a records of job and task execution remains in Veritone's database. */
    readonly cancelJob: Maybe<DeletePayload>;
    /** Retry a job. This action applies only to jobs that are in a failure state. The task sequence for the job will be restarted in its original configuration. */
    readonly retryJob: Maybe<Job>;

    readonly updateJobs: Maybe<JobList>;
    /** Create a new application. An application must go through a sequence of workflow steps before it is available in production. See the VDA documentation for details. */
    readonly createApplication: Maybe<Application>;
    /** Delete an application */
    readonly deleteApplication: Maybe<DeletePayload>;
    /** Update a custom application. Applications are subject to specific workflows. The current application state determines what updates can be made to it. See VDA documentation for details. */
    readonly updateApplication: Maybe<Application>;
    /** Bulk delete context meu extensions. */
    readonly bulkDeleteContextMenuExtensions: Maybe<ContextMenuExtensionList>;
    /** Update an organization */
    readonly updateOrganization: Maybe<Organization>;

    readonly addToEngineWhitelist: Maybe<EngineWhitelist>;

    readonly addToEngineBlacklist: Maybe<EngineBlacklist>;

    readonly deleteFromEngineBlacklist: Maybe<EngineBlacklist>;

    readonly deleteFromEngineWhitelist: Maybe<EngineWhitelist>;
    /** Create an entity identifier type, such as "face" or "image". Entity identifier types are typically created or modified only by Veritone engineering. Most libraries and entities will use existing entity identifier types. */
    readonly createEntityIdentifierType: Maybe<EntityIdentifierType>;
    /** Update an entity identifier type. */
    readonly updateEntityIdentifierType: Maybe<EntityIdentifierType>;
    /** Create a library type, such as "ad" or "people". Entity identifier types are typically created or modified only by Veritone engineering. Most libraries will use existing entity identifier types. */
    readonly createLibraryType: Maybe<LibraryType>;
    /** Update a library type. */
    readonly updateLibraryType: Maybe<LibraryType>;
    /** Create a new library. Once the library is created, the client can add entities and entity identifiers. Note that the library type determines what types of entity identifiers can be used within the library. */
    readonly createLibrary: Maybe<Library>;
    /** Update an existing library. */
    readonly updateLibrary: Maybe<Library>;
    /** Delete a library. This mutation will also delete all entities, entity identifiers, library engine models, and associated objects. */
    readonly deleteLibrary: Maybe<DeletePayload>;
    /** Publish a new version of a library. Increments library version by one and trains compatible engines. */
    readonly publishLibrary: Maybe<Library>;
    /** Create a new entity. */
    readonly createEntity: Maybe<Entity>;
    /** Update an entity. */
    readonly updateEntity: Maybe<Entity>;
    /** Delete an entity. This mutation will also delete all associated entity identifiers and associated objects. */
    readonly deleteEntity: Maybe<DeletePayload>;
    /** Create an entity identifier. This mutation accepts file uploads. To use this mutation and upload a file, send a multipart form POST containing two parameters:  `query`, with the GraphQL query, and `file` containing the file itself. For more information see the documentation at https://veritone-developer.atlassian.net/wiki/spaces/DOC/pages/13893791/GraphQL. */
    readonly createEntityIdentifier: Maybe<EntityIdentifier>;

    readonly updateEntityIdentifier: Maybe<EntityIdentifier>;
    /** Delete an entity identifier */
    readonly deleteEntityIdentifier: Maybe<DeletePayload>;
    /** Create a library engine model. */
    readonly createLibraryEngineModel: Maybe<LibraryEngineModel>;
    /** Update a library engine model */
    readonly updateLibraryEngineModel: Maybe<LibraryEngineModel>;
    /** Delete a library engine model */
    readonly deleteLibraryEngineModel: Maybe<DeletePayload>;
    /** Create Dataset Library Configuration */
    readonly createLibraryConfiguration: Maybe<LibraryConfiguration>;
    /** Update Dataset Library Configuration */
    readonly updateLibraryConfiguration: Maybe<LibraryConfiguration>;
    /** Delete Dataset Library Configuration */
    readonly deleteLibraryConfiguration: Maybe<DeletePayload>;
    /** Add recordings to a dataset library */
    readonly addLibraryDataset: Maybe<LibraryDataset>;
    /** Remove recordings from a dataset library */
    readonly deleteLibraryDataset: Maybe<DeleteLibraryDatasetPayload>;
    /** Apply an application workflow step, such as "submit" or "approve" */
    readonly applicationWorkflow: Maybe<Application>;
    /** Apply an application workflow step, such as "submit" or "approve" */
    readonly engineWorkflow: Maybe<Engine>;
    /** Create an ingestion configuration */
    readonly createIngestionConfiguration: Maybe<IngestionConfiguration>;
    /** Update an ingestion configuration */
    readonly updateIngestionConfiguration: Maybe<IngestionConfiguration>;
    /** Delete an ingestion configuration */
    readonly deleteIngestionConfiguration: Maybe<DeletePayload>;
    /** Creates a widget associated with a collection */
    readonly createWidget: Maybe<Widget>;
    /** Updates a widget */
    readonly updateWidget: Maybe<Widget>;
    /** Create a new user within an organization. */
    readonly createUser: Maybe<User>;
    /** Create a new organization. */
    readonly createOrganization: Maybe<Organization>;
    /** Update an existing user */
    readonly updateUser: Maybe<User>;
    /** Force a user to update password on next login. This mutation is used by administrators. */
    readonly createPasswordUpdateRequest: Maybe<User>;
    /** Get password token info for current user */
    readonly getCurrentUserPasswordToken: PasswordTokenInfo;
    /** Create a password reset request. This mutation is used on behalf of a user who needs to reset their password. It operates only on the currently authenicated user (based on the authentication token provided). */
    readonly createPasswordResetRequest: Maybe<CreatePasswordResetRequestPayload>;
    /** Update the current authenticated user */
    readonly updateCurrentUser: User;
    /** Change the current authenticated user's password */
    readonly changePassword: Maybe<User>;
    /** Delete a user */
    readonly deleteUser: Maybe<DeletePayload>;
    /** Create a structured data registry schema metadata. */
    readonly createDataRegistry: Maybe<DataRegistry>;
    /** Update a structured data registry schema metadata. */
    readonly updateDataRegistry: Maybe<DataRegistry>;
    /** Update a structured data registry schema. */
    readonly upsertSchemaDraft: Maybe<Schema>;

    readonly updateSchemaState: Maybe<Schema>;
    /** Create (ingest) a structured data object */
    readonly createStructuredData: Maybe<StructuredData>;
    /** Delete a structured data object */
    readonly deleteStructuredData: Maybe<DeletePayload>;
    /** Create (ingest) a structured data object */
    readonly createCollection: Maybe<Collection>;
    /** Update a collection */
    readonly updateCollection: Maybe<Collection>;
    /** Delete Collection */
    readonly deleteCollection: Maybe<DeletePayload>;
    /** Share a collection, allowing other organizations to view the data it contains. */
    readonly shareCollection: Maybe<Share>;
    /** Share a mention from a collection */
    readonly shareMentionFromCollection: Maybe<Share>;
    /** Share mention */
    readonly shareMention: Maybe<Share>;
    /** Share mentions in bulk */
    readonly shareMentionInBulk: Maybe<ReadonlyArray<Maybe<Share>>>;
    /** Add a mention to a collection */
    readonly createCollectionMention: Maybe<CollectionMention>;
    /** Remove a mention from a collection */
    readonly deleteCollectionMention: Maybe<CollectionMention>;
    /** Create a new folder */
    readonly createFolder: Maybe<Folder>;
    /** Update an existing folder */
    readonly updateFolder: Maybe<Folder>;
    /** Move a folder from one parent folder to another. */
    readonly moveFolder: Maybe<Folder>;
    /** Delete a folder */
    readonly deleteFolder: Maybe<DeletePayload>;
    /** Create a mention comment */
    readonly createMentionComment: Maybe<MentionComment>;
    /** Update a mention comment */
    readonly updateMentionComment: Maybe<MentionComment>;
    /** Delete a mention comment */
    readonly deleteMentionComment: Maybe<DeletePayload>;
    /** Create a mention rating */
    readonly createMentionRating: Maybe<MentionRating>;
    /** Update a mention rating */
    readonly updateMentionRating: Maybe<MentionRating>;
    /** Delete a mention rating */
    readonly deleteMentionRating: Maybe<DeletePayload>;
    /** Login as a user. This mutation does not require an existing authentication context (via `Authorization` header with bearer token, cookie, etc.). Instead, the client supplies credentials to this mutation, which then authenticates the user and sets up the authentication context. The returned tokens can be used to authenticate future requests. */
    readonly userLogin: Maybe<LoginInfo>;
    /** Logout user and invalidate user token */
    readonly userLogout: Maybe<boolean>;
    /** Refresh a user token, returning a fresh token so that the client can continue to authenticate to the API. */
    readonly refreshToken: Maybe<LoginInfo>;
    /** Validate a user token. This mutation is used by services to determine if the token provided by a given client is valid. */
    readonly validateToken: Maybe<LoginInfo>;
    /** Create a mention object */
    readonly createMention: Maybe<Mention>;
    /** Update a mention object */
    readonly updateMention: Maybe<Mention>;
    /** Create root folder for an organization */
    readonly createRootFolders: Maybe<ReadonlyArray<Maybe<Folder>>>;
    /** Apply bulk updates to watchlists. This mutation is currently available only to Veritone operations. */
    readonly bulkUpdateWatchlist: Maybe<WatchlistList>;
    /** File a TemporalDataObject in a folder. A given TemporalDataObject can be filed in any number of folders, or none. Filing causes the TemporalDataObject and its assets to be visible within the folder. */
    readonly fileTemporalDataObject: Maybe<TemporalDataObject>;
    /** Unfile a TemporalDataObject from a folder. This causes the TemporalDataObject and its assets to disappear from the folder, but does not otherwise affect either the TDO or the folder and does not change access controls. */
    readonly unfileTemporalDataObject: Maybe<TemporalDataObject>;
    /** Moves a TemporalDataObject from one parent folder to another. Any other folders the TemporalDataObject is filed in are unaffected. */
    readonly moveTemporalDataObject: Maybe<TemporalDataObject>;
    /** Upload and store an engine result. The result will be stored as an asset associated with the target TemporalDataObject and the task will be updated accordingly. Use a multipart form POST to all this mutation. */
    readonly uploadEngineResult: Maybe<Asset>;

    readonly createWatchlist: Maybe<Watchlist>;

    readonly updateWatchlist: Maybe<Watchlist>;

    readonly deleteWatchlist: Maybe<DeletePayload>;

    readonly updateCognitiveSearch: Maybe<CognitiveSearch>;

    readonly createCognitiveSearch: Maybe<CognitiveSearch>;

    readonly deleteCognitiveSearch: Maybe<DeletePayload>;

    readonly fileWatchlist: Maybe<Watchlist>;

    readonly unfileWatchlist: Maybe<Watchlist>;
    /** Share a folder with other organizations */
    readonly shareFolder: Maybe<Folder>;
    /** Create a TDO and an asset with a single call */
    readonly createTDOWithAsset: Maybe<TemporalDataObject>;

    readonly createSubscription: Maybe<Subscription>;

    readonly updateSubscription: Maybe<Subscription>;

    readonly deleteSubscription: Maybe<DeletePayload>;
    /** Create trigger for events or types. */
    readonly createTriggers: Maybe<ReadonlyArray<Maybe<Trigger>>>;
    /** Delete a registed trigger by ID. */
    readonly deleteTrigger: Maybe<DeletePayload>;
    /** Validates if an engine output conforms to the engine output guidelines */
    readonly validateEngineOutput: boolean;
    /** JWT tokens with a more limited scoped token to specific resources to the recording, task, and job and also has no organization association. */
    readonly getEngineJWT: JwtTokenInfo;
    /** Verify JWT token */
    readonly verifyJWT: Maybe<VerifyJwtPayload>;
    /** Create a new Saved Search */
    readonly createSavedSearch: SavedSearch;
    /** Delete a saved search */
    readonly deleteSavedSearch: DeletePayload;
    /** Mark existing saved search profile as deleted Create new saved search profile */
    readonly replaceSavedSearch: SavedSearch;
    /** Send a basic email. Mutation returns true for a success message. */
    readonly sendEmail: boolean;
    /** Create new content template into a folder */
    readonly createFolderContentTempate: FolderContentTemplate;
    /** Update existing content template by folderContentTemplateId */
    readonly updateFolderContentTempate: FolderContentTemplate;
    /** Delete existing folder content template by folderContentTemplateId */
    readonly deleteFolderContentTempate: DeletePayload;
    /** Create an export request. The requested TDO data, possibly including TDO media and engine results, will be exported offline. */
    readonly createExportRequest: ExportRequest;
    /** Update an export request */
    readonly updateExportRequest: ExportRequest;
    /** Create Mention in bulk. The input should be an array of createMentions */
    readonly createMentions: Maybe<MentionList>;
    /** Create Media Share. Returning the url of the share */
    readonly createMediaShare: CreatedMediaShare;
    /** Create or Update Workflow data. */
    readonly setWorkflowRuntimeStorageData: WorkflowRuntimeStorageData;
    /** Create a new event */
    readonly createEvent: Event;
    /** Update an event */
    readonly updateEvent: Event;
    /** Subscribe to an event */
    readonly subscribeEvent: string;
    /** Unsubscribe to an event */
    readonly unsubscribeEvent: UnsubscribeEvent;
    /** Emit an event */
    readonly emitEvent: EmitEventResponse;
    /** Start a Veritone Workflow instance */
    readonly startWorkflowRuntime: WorkflowRuntimeResponse;
    /** Shutdown Veritone Workflow instance */
    readonly stopWorkflowRuntime: WorkflowRuntimeResponse;
    /** Create a processTemplate in CMS */
    readonly createProcessTemplate: ProcessTemplate;
    /** Update a processTemplate by ID in CMS */
    readonly updateProcessTemplate: ProcessTemplate;
    /** Create a mention export request. The requested mentionFilters including The mention export file csv will be exported offline. */
    readonly createMentionExportRequest: ExportRequest;
    /** Update status or assetURI of a mentionExportRequest Often use when the file export was completed or downloaded */
    readonly updateMentionExportRequest: ExportRequest;
    /** Create a creative */
    readonly createCreative: Creative;
    /** Update a creative */
    readonly updateCreative: Creative;
    /** Delete a creative */
    readonly deleteCreative: DeletePayload;
    /** Emit a system-level emit. This mutation is used only by Veritone platform components. */
    readonly emitSystemEvent: SystemEventInfo;

    readonly createCluster: Maybe<Cluster>;

    readonly updateCluster: Maybe<Cluster>;

    readonly deleteCluster: Maybe<DeletePayload>;

    readonly pauseCluster: Maybe<Cluster>;

    readonly unpauseCluster: Maybe<Cluster>;

    readonly createClusterNode: Maybe<ClusterNode>;

    readonly updateClusterNode: Maybe<ClusterNode>;

    readonly deleteClusterNode: Maybe<DeletePayload>;

    readonly createScheduledJob: ScheduledJob;

    readonly cloneScheduledJob: ScheduledJob;

    readonly revertScheduledJob: ScheduledJob;

    readonly updateScheduledJob: ScheduledJob;

    readonly deleteScheduledJob: Maybe<DeletePayload>;
    /** Create a new content template on a scheduled job */
    readonly createScheduledJobContentTemplate: ScheduledJobContentTemplate;

    readonly deleteScheduledJobContentTemplate: Maybe<DeletePayload>;
    /** Create a new source */
    readonly createSource: Maybe<Source>;

    readonly updateSource: Maybe<Source>;

    readonly deleteSource: Maybe<DeletePayload>;
    /** Create a new source content template on a source */
    readonly createSourceContentTemplate: SourceContentTemplate;

    readonly deleteSourceContentTemplate: Maybe<DeletePayload>;

    readonly createSourceType: Maybe<SourceType>;

    readonly updateSourceType: Maybe<SourceType>;

    readonly deleteSourceType: Maybe<DeletePayload>;

    readonly createJobPipeline: JobPipeline;

    readonly updateJobPipeline: JobPipeline;

    readonly deleteJobPipeline: Maybe<DeletePayload>;

    readonly createJobTemplate: JobTemplate;

    readonly updateJobTemplate: JobTemplate;

    readonly deleteJobTemplate: Maybe<DeletePayload>;

    readonly createTaskTemplate: TaskTemplate;

    readonly updateTaskTemplate: TaskTemplate;

    readonly deleteTaskTemplate: Maybe<DeletePayload>;

    readonly createNextPipelineJobs: Maybe<ReadonlyArray<Maybe<Job>>>;
    /** Creates one or more jobs based on the supplied scheduled job. */
    readonly launchScheduledJobs: Maybe<ReadonlyArray<Maybe<Job>>>;
    /** Creates one or more jobs based on the supplied job templates. */
    readonly launchJobTemplates: Maybe<ReadonlyArray<Maybe<Job>>>;
    /** Get next bundle for cluster. */
    readonly getNextBundleForCluster: Bundle;
    /** Update bundle status as cluster. */
    readonly updateBundleStatusAsCluster: Bundle;
  }

  /** Payload required to delete an object */
  export interface DeletePayload {
    /** ID of the object that was deleted */
    readonly id: string;
    /** a message */
    readonly message: Maybe<string>;
  }

  export interface AddTasksToJobsResponse {
    readonly createdTasks: Maybe<ReadonlyArray<Maybe<Task>>>;

    readonly errors: Maybe<ReadonlyArray<Maybe<AddTasksToJobsError>>>;
  }

  export interface AddTasksToJobsError {
    readonly id: Maybe<string>;

    readonly message: Maybe<string>;
  }

  export interface DeleteLibraryDatasetPayload {
    /** Id of the selected library */
    readonly libraryId: Maybe<string>;
    /** List of tdos removed from dataset library */
    readonly tdoIds: Maybe<ReadonlyArray<Maybe<string>>>;
    /** Delete status */
    readonly message: Maybe<string>;
  }

  export interface PasswordTokenInfo {
    readonly passwordToken: Maybe<string>;
  }

  export interface CreatePasswordResetRequestPayload {
    readonly message: Maybe<string>;
  }

  export interface CollectionMention {
    /** id of the collection */
    readonly folderId: string;
    /** id of the mention */
    readonly mentionId: string;
  }

  /** Contains information about the user's authentication context. */
  export interface LoginInfo {
    /** API token. This is a persistent organization-level token intended for API access. */
    readonly apiToken: Maybe<string>;
    /** Session-scoped user token. This token is tied to the user's session and will expire when that session ends. */
    readonly token: Maybe<string>;
    /** Date and time at which the user last logged in to the Veritone platform */
    readonly lastLoggedIn: Maybe<string>;
    /** List of Veritone platform applications for which the user is provisioned. Note that these are different than the VDA custom applications referenced in the `Application` type, `applications()` query, and related mutations. */
    readonly applications: Maybe<ReadonlyArray<Maybe<string>>>;

    readonly applicationPlatforms: Maybe<ReadonlyArray<Maybe<ApplicationPlatform>>>;
    /** Groups to which the user belongs. */
    readonly groups: Maybe<ReadonlyArray<Maybe<Group>>>;
    /** True if the user account has a password set. False otherwise. If false, the user will be prompted to set a password on next login. */
    readonly hasPassword: Maybe<boolean>;
    /** Organization to which the user belongs. */
    readonly organization: Maybe<Organization>;
    /** True if a password reset will be required on the user's next login. */
    readonly passwordResetRequired: Maybe<boolean>;
    /** TODO */
    readonly providerId: Maybe<string>;
    /** TODO */
    readonly providerScreenName: Maybe<string>;
    /** TODO */
    readonly providerUserId: Maybe<string>;
    /** User object */
    readonly user: Maybe<User>;
  }

  /** TODO */
  export interface ApplicationPlatform {
    /** The application platform ID */
    readonly id: Maybe<string>;
    /** Platform type, such as TODO */
    readonly platformType: Maybe<string>;
    /** The application platform URL. */
    readonly platformUrl: Maybe<string>;
  }

  /** Contains information about engineJWTToken context */
  export interface JwtTokenInfo {
    readonly engineId: string;

    readonly token: string;

    readonly resource: EngineJwtResource;
  }

  /** Contain resouces of Engine JWT Token */
  export interface EngineJwtResource {
    readonly applicationId: Maybe<string>;

    readonly tdoId: Maybe<string>;

    readonly jobId: string;

    readonly taskId: string;
  }

  export interface VerifyJwtPayload {
    /** the same JWT input */
    readonly jwtToken: string;
    /** the payload contained within the JWT */
    readonly payload: Json;
  }

  export interface CreatedMediaShare {
    readonly id: string;

    readonly url: string;
  }

  export interface UnsubscribeEvent {
    /** ID of the object that was deleted */
    readonly id: string;
    /** Message */
    readonly message: Maybe<string>;
  }

  export interface EmitEventResponse {
    readonly id: string;
    /** the decoder that GQL used to interpret your event before sending */
    readonly decoder: string;
  }

  export interface SystemEventInfo {
    readonly topic: string;

    readonly payload: Json;

    readonly timestamp: DateTime;

    readonly id: string;
  }

  export interface Bundle {
    readonly id: string;

    readonly organizationId: Maybe<string>;

    readonly clusterId: Maybe<string>;

    readonly nodeId: Maybe<string>;

    readonly name: Maybe<string>;

    readonly externalCredentialId: Maybe<string>;

    readonly testRun: Maybe<boolean>;

    readonly selectDetail: Maybe<BundleSelectDetail>;

    readonly selectCategory: Maybe<string>;

    readonly bundleResults: Maybe<BundleResults>;

    readonly bundleStarted: Maybe<DateTime>;

    readonly previousBundleStarted: Maybe<DateTime>;

    readonly bundleCompleted: Maybe<DateTime>;

    readonly deletedDate: Maybe<DateTime>;

    readonly createdDate: Maybe<DateTime>;

    readonly updatedDate: Maybe<DateTime>;

    readonly scheduleDefinition: Maybe<BundleScheduleDefinition>;

    readonly nextScheduledTime: Maybe<DateTime>;
  }

  export interface BundleSelectDetail {
    readonly category: string;
    /** Array of file types to include. */
    readonly select: Maybe<ReadonlyArray<string>>;
    /** Array of paths to search from. */
    readonly paths: Maybe<ReadonlyArray<string>>;
    /** Array of files to search from. */
    readonly files: Maybe<ReadonlyArray<Maybe<string>>>;
    /** Array of tasks to run for each job. */
    readonly tasks: Maybe<ReadonlyArray<Maybe<BundleSelectDetailTask>>>;
    /** Include items after this time. */
    readonly afterTime: Maybe<DateTime>;
    /** Include items before this time. */
    readonly beforeTime: Maybe<DateTime>;

    readonly recursiveDescent: boolean;

    readonly service: Maybe<BundleService>;
  }

  export interface BundleSelectDetailTask {
    /** Id of engine. */
    readonly engineId: string;
  }

  export interface BundleService {
    readonly serviceType: Maybe<string>;

    readonly region: Maybe<string>;

    readonly bucketName: Maybe<string>;
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
    readonly recurringStartTime: Maybe<DateTime>;

    readonly recurringEndTime: Maybe<DateTime>;

    readonly repeatDaysTimeInMinutes: Maybe<number>;

    readonly repeatDaysOfWeek: Maybe<ReadonlyArray<Maybe<number>>>;

    readonly repeatDaysOfMonth: Maybe<ReadonlyArray<Maybe<number>>>;

    readonly repeatMinutes: Maybe<number>;
  }

  /** Type representing a boolean property */
  export interface BooleanProperty extends Property {
    readonly name: string;

    readonly value: Maybe<boolean>;
  }

  /** Object that represents the mapping of clone assets to its parent's assets. */
  export interface CloneAssetIdMap {
    /** The original asset ID (within the cloned asset container). */
    readonly oldAssetId: string;
    /** The new asset ID (within the clone asset container). */
    readonly newAssetId: string;
  }

  /** Metadata that represents a clone of a recording. */
  export interface CloneData extends Metadata {
    /** Timestamp when the recording was cloned */
    readonly date: Maybe<string>;
    /** The ID of the asset container this was cloned from */
    readonly originalId: string;
    /** Clone blobs flag */
    readonly cloneBlobs: Maybe<boolean>;
    /** Map of asset IDs from the clone to the parent. */
    readonly assetIdMap: Maybe<ReadonlyArray<Maybe<CloneAssetIdMap>>>;

    readonly name: string;
  }

  export interface CognitiveSearchCondition {
    readonly engineCategoryId: string;

    readonly state: Json;
  }

  export interface CognitiveSearchProfile {
    readonly and: Maybe<ReadonlyArray<CognitiveSearchProfile>>;

    readonly or: Maybe<ReadonlyArray<CognitiveSearchProfile>>;

    readonly condition: Maybe<CognitiveSearchCondition>;

    readonly jsondata: Maybe<Json>;
  }

  export interface CompoundProperty extends Property {
    readonly name: string;

    readonly value: Maybe<Kvp>;
  }

  /** Key-value pairs -- a generic way to represent metadata */
  export interface Kvp extends Metadata {
    readonly name: string;

    readonly value: Maybe<ReadonlyArray<Maybe<Property>>>;
  }

  export interface CreateExecutionLocation {
    readonly clusterId: string;

    readonly nodeId: Maybe<string>;
  }

  export interface FileData extends Metadata {
    readonly name: string;

    readonly size: Maybe<number>;

    readonly mimeType: Maybe<string>;

    readonly fileName: Maybe<string>;
  }

  /** Type representing an integer property. */
  export interface IntProperty extends Property {
    readonly name: string;

    readonly value: Maybe<number>;
  }

  export interface JsonObject extends Metadata {
    readonly name: string;

    readonly data: Maybe<Json>;
  }

  /** Metadata that represents a program. */
  export interface Program extends Metadata {
    readonly id: Maybe<string>;

    readonly name: string;

    readonly image: Maybe<string>;

    readonly liveImage: Maybe<string>;
  }

  /** Type representing a string property */
  export interface StringProperty extends Property {
    readonly name: string;

    readonly value: Maybe<string>;
  }

  /** An object containing custom structured data. This type is not fully implemented. */
  export interface StructuredJsonObject extends Metadata {
    readonly data: Maybe<Json>;

    readonly schema: StructuredJsonSchema;

    readonly name: string;

    readonly id: string;
  }

  /** A custom structured data schema, specified in JSON. This type is not fully implemented. */
  export interface StructuredJsonSchema {
    readonly schema: Maybe<Json>;

    readonly name: string;

    readonly id: string;

    readonly ownerOrganizationId: string;

    readonly organization: Organization;
  }

  export interface UpdateExecutionLocation {
    readonly id: string;

    readonly clusterId: string;

    readonly nodeId: Maybe<string>;
  }

  // ====================================================
  // Arguments
  // ====================================================

  export interface TemporalDataObjectsQueryArgs {
    /** Application ID to get TDOs for. Defaults to the user's own application. */
    applicationId: Maybe<string>;
    /** Provide an ID to retrieve a single specific TDO. */
    id: Maybe<string>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    limit: number;
    /** Optionally, specify a source ID. TDOs ingested from this source will be returned. */
    sourceId: Maybe<string>;
    /** Optionally, specify a scheduled job ID. TDOs ingested under this scheduled job will be returned. */
    scheduledJobId: Maybe<string>;
    /** Whether to retrieve only tdos with the specified sampleMedia value */
    sampleMedia: Maybe<boolean>;
    /** Whether to retrieve public data that is not part of the user's organization. The default is false. Pass true to include public data in the result set. */
    includePublic: Maybe<boolean>;

    orderBy: TemporalDataObjectOrderBy;

    orderDirection: OrderDirection;
    /** Provide optional filters against any date/time field to filter objects within a given time window. Matching objects must meet all of the given conditions. */
    dateTimeFilter: Maybe<ReadonlyArray<TemporalDataObjectDateTimeFilter>>;
    /** Retrieve TDOs associated with the given mention */
    mentionId: Maybe<string>;
  }
  export interface TemporalDataObjectQueryArgs {
    /** the TDO ID */
    id: string;
  }
  export interface AssetQueryArgs {
    /** The asset ID */
    id: string;
  }
  export interface WidgetQueryArgs {
    /** The widget ID */
    id: string;

    collectionId: string;

    organizationId: string;
  }
  export interface CloneRequestsQueryArgs {
    /** Provide an ID to retrieve a single specific clone request. */
    id: Maybe<string>;
    /** Application ID to get clone requests for. Defaults to the user's own application. */
    applicationId: Maybe<string>;

    offset: Maybe<number>;

    limit: number;
  }
  export interface EnginesQueryArgs {
    /** Provide an ID to retrieve a single specific engine. */
    id: Maybe<string>;

    ids: Maybe<ReadonlyArray<string>>;
    /** Provide a category ID to filter by engine category. */
    categoryId: Maybe<string>;
    /** provide a category name or ID to filter by engine category */
    category: Maybe<string>;
    /** Provide a list of states to filter by engine state. */
    state: Maybe<ReadonlyArray<Maybe<EngineState>>>;
    /** If true, return only engines owned by the user's organization. */
    owned: Maybe<boolean>;
    /** If true, return only engines that require a library. */
    libraryRequired: Maybe<boolean>;
    /** If true, return only engines that create their own TDO. If false, return only engines that do not create a TDO. If not set, return either. */
    createsTDO: Maybe<boolean>;
    /** Provide a name, or part of a name, to search by engine name */
    name: Maybe<string>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. */
    limit: number;
    /** Filters for engine attributes */
    filter: Maybe<EngineFilter>;
    /** Provide a list of EngineSortField to sort by. */
    orderBy: Maybe<ReadonlyArray<Maybe<EngineSortField>>>;
  }
  export interface EngineQueryArgs {
    /** Provide the engine ID */
    id: string;
  }
  export interface EngineBuildQueryArgs {
    /** Provide the build ID */
    id: string;
  }
  export interface EngineCategoriesQueryArgs {
    /** Provide an ID to retrieve a single specific engine category. */
    id: Maybe<string>;
    /** Provide a name, or part of one, to search by category name */
    name: Maybe<string>;
    /** Return all categories of an engine type */
    type: Maybe<string>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. */
    limit: number;
  }
  export interface EngineCategoryQueryArgs {
    /** Supply the ID of the engine category to retrieve */
    id: string;
  }
  export interface JobsQueryArgs {
    /** Provide an ID to retrieve a single specific job. */
    id: Maybe<string>;
    /** Provide a list of status strings to filter by status */
    status: Maybe<ReadonlyArray<JobStatusFilter>>;

    applicationStatus: Maybe<string>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify the maximum number of results to included in this response, or page size. */
    limit: number;
    /** Provide an application ID to filter jobs for a given application. Defaults to the user's own application. */
    applicationId: Maybe<string>;
    /** Provide a target ID to get the set of jobs running against a particular TDO. */
    targetId: Maybe<string>;
    /** Provide a cluster ID to get the jobs running on a specific cluster */
    clusterId: Maybe<string>;
    /** Provide a list of scheduled job IDs to get jobs associated with the scheduled jobs */
    scheduledJobIds: Maybe<ReadonlyArray<string>>;
    /** Return only jobs that are (true) or are not (false) associated with a scheduled job */
    hasScheduledJobId: Maybe<boolean>;
    /** Provide sort information. The default is to sort by createdDateTime descending. */
    orderBy: Maybe<ReadonlyArray<JobSortField>>;
    /** Filter by date/time field */
    dateTimeFilter: Maybe<ReadonlyArray<JobDateTimeFilter>>;
    /** Provide list of application IDs to filter jobs. Defaults to the user's own application. */
    applicationIds: Maybe<ReadonlyArray<Maybe<string>>>;
  }
  export interface JobQueryArgs {
    /** the job ID */
    id: string;
  }
  export interface TaskQueryArgs {
    /** Provide the task ID. */
    id: string;
  }
  export interface EntityIdentifierTypesQueryArgs {
    /** Provide an ID to retrieve a single specific entity identifier type. */
    id: Maybe<string>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    limit: number;
  }
  export interface EntityIdentifierTypeQueryArgs {
    /** Provide the entity identifier type ID */
    id: string;
  }
  export interface LibraryTypesQueryArgs {
    /** Provide an ID to retrieve a single specific library type. */
    id: Maybe<string>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    limit: number;
  }
  export interface LibraryTypeQueryArgs {
    /** Provide an ID to retrieve a single specific library type. */
    id: Maybe<string>;
  }
  export interface LibrariesQueryArgs {
    /** Provide an ID to retrieve a single specific library. */
    id: Maybe<string>;
    /** Provide a name string to search by name. */
    name: Maybe<string>;
    /** Provide the name or ID of a library to search for libraries that contain that type. */
    type: Maybe<string>;
    /** Provide the id of an entity identifier type to search for libraries that correlate to that type. */
    entityIdentifierTypeIds: Maybe<ReadonlyArray<string>>;
    /** Specify true if only libraries owned by the user's organization should be returned. Otherwise, shared libraries will be included. */
    includeOwnedOnly: Maybe<boolean>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    limit: number;
    /** Specify a field to order by */
    orderBy: Maybe<LibraryOrderBy>;
    /** Specify the direction to order by */
    orderDirection: Maybe<OrderDirection>;
  }
  export interface LibraryQueryArgs {
    /** Provide a library ID. */
    id: string;
  }
  export interface LibraryEngineModelQueryArgs {
    /** Provide the library engine model ID */
    id: string;
  }
  export interface EntityQueryArgs {
    /** Provide an entity ID. */
    id: string;
  }
  export interface EntitiesQueryArgs {
    /** Provide a list of entity IDs to retrieve those entities */
    ids: Maybe<ReadonlyArray<string>>;
    /** Provide a list of library IDs to retrieve entities across multiple libraries. */
    libraryIds: Maybe<ReadonlyArray<string>>;

    isPublished: Maybe<boolean>;

    identifierTypeId: Maybe<string>;

    name: Maybe<string>;

    offset: Maybe<number>;

    limit: number;

    orderBy: Maybe<LibraryEntityOrderBy>;

    orderDirection: Maybe<OrderDirection>;
  }
  export interface LibraryConfigurationQueryArgs {
    /** Provide configuration id */
    id: string;
  }
  export interface ApplicationsQueryArgs {
    /** Provide an ID to retrieve a single specific application. */
    id: Maybe<string>;
    /** Provide a status, such as "draft" or "active" */
    status: Maybe<ApplicationStatus>;
    /** If true, return only applications owned by the user's organization. */
    owned: Maybe<boolean>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    limit: number;
  }
  export interface OrganizationsQueryArgs {
    /** Provide an ID to retrieve a single specific organization. */
    id: Maybe<string>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    limit: number;
    /** Provide a property from the organization kvp to filter the organizaion list. */
    kvpProperty: Maybe<string>;
    /** Provide value to for the kvpFeature filter. If not present the filter becomes kvpProperty existence filter */
    kvpValue: Maybe<string>;
  }
  export interface OrganizationQueryArgs {
    /** The organization ID TODO take application ID as well as org ID */
    id: string;
  }
  export interface PermissionsQueryArgs {
    /** Provide an ID to retrieve a single specific permission. */
    id: Maybe<string>;

    name: Maybe<string>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    limit: number;
  }
  export interface UsersQueryArgs {
    /** Provide an ID to retrieve a single specific user. A user ID is a string in UUID format. */
    id: Maybe<string>;
    /** Provide IDs to retrieve multiple users by ID. */
    ids: Maybe<ReadonlyArray<Maybe<string>>>;
    /** Provide a name, or part of one, to search by name. */
    name: Maybe<string>;
    /** Provide a list of organization IDs to filter your search by organization. */
    organizationIds: Maybe<ReadonlyArray<Maybe<string>>>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    limit: number;
    /** Include all organization users. */
    includeAllOrgUsers: Maybe<boolean>;
  }
  export interface UserQueryArgs {
    /** The user ID. A user ID is a string in UUID format. */
    id: string;

    organizationIds: Maybe<ReadonlyArray<Maybe<string>>>;
  }
  export interface GroupsQueryArgs {
    /** Provide an ID to retrieve a specific group by ID */
    id: Maybe<string>;
    /** Provide IDs to retrieve multiple groups by ID */
    ids: Maybe<ReadonlyArray<Maybe<string>>>;
    /** Provide a name, or part of one, to search for groups by name */
    name: Maybe<string>;
    /** Provide a list of organization IDs to retrieve groups defined within certain organizations. */
    organizationIds: Maybe<ReadonlyArray<Maybe<string>>>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    limit: number;
  }
  export interface MentionQueryArgs {
    /** The mention ID */
    mentionId: string;
    /** Comments pagination - limit */
    limit: number;
    /** Comments pagination - limit */
    offset: Maybe<number>;
    /** The user who owns the mention. */
    userId: Maybe<string>;
  }
  export interface SharedMentionQueryArgs {
    /** share token */
    shareId: string;
  }
  export interface SearchMentionsQueryArgs {
    /** JSON structure containing the search query. TODO link to syntax documentation */
    search: Json;
  }
  export interface SearchMediaQueryArgs {
    /** JSON structure containing the search query. TODO link to syntax documentation */
    search: Json;
  }
  export interface RootFoldersQueryArgs {
    /** The type of root folder to retrieve */
    type: Maybe<RootFolderType>;
  }
  export interface FolderQueryArgs {
    /** Provide an ID to retrieve a single specific user. */
    id: string;
  }
  export interface ApplicationQueryArgs {
    /** The application ID */
    id: string;
  }
  export interface IngestionConfigurationQueryArgs {
    /** The configuration ID */
    id: string;
  }
  export interface IngestionConfigurationsQueryArgs {
    /** Supply an ingestion configuration ID to retrieve a single Ingestion */
    id: Maybe<string>;
    /** Offset */
    offset: Maybe<number>;
    /** Limit */
    limit: number;

    name: Maybe<string>;

    startDate: Maybe<DateTime>;

    endDate: Maybe<DateTime>;
    /** Specify one or more sources to filter by source type */
    sources: Maybe<ReadonlyArray<string>>;
    /** Supply an application ID to retrieve configurations only for that application. */
    applicationId: Maybe<string>;
    /** Email address configured for ingestion */
    emailAddress: Maybe<string>;
  }
  export interface SchemasQueryArgs {
    /** Id of a schema to retrieve */
    id: Maybe<string>;
    /** Ids of schemas to retrieve */
    ids: Maybe<ReadonlyArray<string>>;
    /** Specify the id of the DataRegistry to get schemas */
    dataRegistryId: Maybe<string>;
    /** Specify one or more statuses to filter by schema status */
    status: Maybe<ReadonlyArray<SchemaStatus>>;
    /** Specify a major version to filter schemas */
    majorVersion: Maybe<number>;
    /** Specify a data registry name to filter schemas */
    name: Maybe<string>;
    /** The strategy used to find data registry name */
    nameMatch: StringMatch;
    /** Limit */
    limit: number;
    /** Offset */
    offset: Maybe<number>;
    /** Specify one or more fields and direction to order results */
    orderBy: Maybe<ReadonlyArray<Maybe<SchemaOrder>>>;
  }
  export interface SchemaQueryArgs {
    id: string;
  }
  export interface SchemaPropertiesQueryArgs {
    dataRegistryVersion: Maybe<ReadonlyArray<DataRegistryVersion>>;

    search: Maybe<string>;
    /** Limit */
    limit: number;
    /** Offset */
    offset: Maybe<number>;
  }
  export interface StructuredDataQueryArgs {
    /** Supply the ID of the structured data object to retrieve. This will override filters. */
    id: string;
    /** Schema Id for the structured data object to retrieve */
    schemaId: string;
  }
  export interface StructuredDataObjectQueryArgs {
    /** Supply the ID of the structured data object to retrieve. This will override filters. */
    id: string;
    /** Schema Id for the structured data object to retrieve */
    schemaId: string;
  }
  export interface StructuredDataObjectsQueryArgs {
    /** Supply the ID of the structured data object to retrieve. This will override filters. */
    id: Maybe<string>;
    /** List of Ids of the structured data objects to retrieve. This will override filters. */
    ids: Maybe<ReadonlyArray<string>>;
    /** Schema Id for the structured data object to retrieve */
    schemaId: string;

    orderBy: Maybe<ReadonlyArray<StructuredDataOrderBy>>;

    limit: number;

    offset: Maybe<number>;

    owned: Maybe<boolean>;
    /** Query to filter SDO. Supports operations such as and, or, eq, gt, lt, etc. TODO link to syntax documentation */
    filter: Maybe<Json>;
  }
  export interface GetSignedWritableUrlQueryArgs {
    /** Optional key of the object to generate a writable URL for. If not provided, a new, unique key will be generated. If a key is provided and resembles a file name (with extension delimited by .), a UUID will be inserted into the file name, leaving the extension intact. If a key is provided and does not resemble a file name, a UUID will be appended. */
    key: Maybe<string>;
  }
  export interface GetSignedWritableUrlsQueryArgs {
    /** Number of signed URLs to return */
    number: number;
  }
  export interface WatchlistsQueryArgs {
    id: Maybe<string>;

    maxStopDateTime: Maybe<DateTime>;

    minStopDateTime: Maybe<DateTime>;

    minStartDateTime: Maybe<DateTime>;

    maxStartDateTime: Maybe<DateTime>;

    name: Maybe<string>;

    offset: Maybe<number>;

    limit: number;

    orderBy: WatchlistOrderBy;

    orderDirection: OrderDirection;
  }
  export interface WatchlistQueryArgs {
    id: string;
  }
  export interface DataRegistriesQueryArgs {
    id: Maybe<string>;

    name: Maybe<string>;

    nameMatch: StringMatch;

    offset: Maybe<number>;

    limit: number;

    orderBy: DataRegistryOrderBy;

    orderDirection: OrderDirection;

    filterByOwnership: SchemaOwnership;
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
    id: Maybe<string>;

    mentionId: Maybe<string>;

    offset: Maybe<number>;

    limit: number;
  }
  export interface CollectionQueryArgs {
    id: string;
  }
  export interface MentionsQueryArgs {
    id: Maybe<string>;
    /** Get mentions created from the specified watchlist */
    watchlistId: Maybe<string>;
    /** Get mentions associated with the specified source */
    sourceId: Maybe<string>;
    /** Get mentions associated with sources of the specified source type */
    sourceTypeId: Maybe<string>;
    /** Get mentions associated directly with the specific TDO */
    tdoId: Maybe<string>;
    /** Specify date/time filters against mention fields. Querying for mentions can be expensive. If the query does not include a filter by `id`, `tdoId`, `sourceId`, `watchlistId`, or a user-provided `dateTimeFilter`, a default filter of the past 7 days is applied. */
    dateTimeFilter: Maybe<ReadonlyArray<MentionDateTimeFilter>>;
    /** Set order information on the query. Multiple fields are supported. */
    orderBy: Maybe<ReadonlyArray<MentionOrderBy>>;

    offset: Maybe<number>;

    limit: number;
  }
  export interface EngineResultsQueryArgs {
    /** Provide the ID of the TDO containing engine results to retrieve. If this parameter is used, engineIds or engineCategoryIds must also be set. Results for _only_ the specified TDO will be returned. */
    tdoId: Maybe<string>;
    /** Provide the ID of the Source containing engine results to retrieve. If this parameter is used, engineIds or engineCategoryIds must also be set. This takes priority over tdoId. */
    sourceId: Maybe<string>;
    /** Provide one or more engine IDs to retrieve engine results by ID. This parameter is mandatory if tdoId is used, but optional if jobId or engineCategory is used. */
    engineIds: Maybe<ReadonlyArray<string>>;
    /** Provide one or more category IDs to get all results from that categroy. */
    engineCategoryIds: Maybe<ReadonlyArray<string>>;
    /** Provide a job ID to retrieve engine results for the job. */
    jobId: Maybe<string>;
    /** Provide a mention ID to retrieve engine results for the mention. */
    mentionId: Maybe<string>;
    /** Start offset ms for the results. */
    startOffsetMs: Maybe<number>;
    /** End offset ms for the results. */
    stopOffsetMs: Maybe<number>;
    /** Start date for the results. Takes priority over startOffsetMs. */
    startDate: Maybe<DateTime>;
    /** End date for the results. Takes priority over stopOffsetMs. */
    stopDate: Maybe<DateTime>;
    /** Whether or not to exclude user edited engine results. Defaults to false. */
    ignoreUserEdited: Maybe<boolean>;
    /** A TDO ID can be provided for use if the provided `sourceId` and/or `mentionId` parameters do not resolve to a logical set of TDOs. Depending on parameter settings and available data, results from other TDOs can be included in the response. */
    fallbackTdoId: Maybe<string>;
  }
  export interface TriggerQueryArgs {
    id: string;
  }
  export interface SavedSearchesQueryArgs {
    offset: Maybe<number>;

    limit: number;

    includeShared: Maybe<boolean>;

    filterByName: Maybe<string>;

    orderBy: Maybe<SavedSearchOrderBy>;

    orderDirection: Maybe<OrderDirection>;
  }
  export interface ExportRequestsQueryArgs {
    /** Provide an ID to retrieve a single export request */
    id: Maybe<string>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    limit: number;
    /** Provide a list of status options to filter by status */
    status: Maybe<ReadonlyArray<ExportRequestStatus>>;
    /** Provide an event to retrieve export request. Should be 'exportRequest' or 'mentionExportRequest' Default value is 'exportRequest' */
    event: ExportRequestEvent;
  }
  export interface ExportRequestQueryArgs {
    id: string;
    /** Provide an event to retrieve export request. Should be 'exportRequest' or 'mentionExportRequest' Default value is 'exportRequest' */
    event: ExportRequestEvent;
  }
  export interface EventQueryArgs {
    id: string;
  }
  export interface EventsQueryArgs {
    /** Provide an application to retrieve all its events. Use 'system' to list all public system events. */
    application: string;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    limit: number;
  }
  export interface AuditLogQueryArgs {
    /** Date/time up to which entries will be returned. In other words, the end of the query time window. Defaults to the current time. */
    toDateTime: Maybe<DateTime>;
    /** Date/time from which entries will be returned. In other words, the start of the query time window. Defaults to the `toDateTime` minus 7 days. */
    fromDateTime: Maybe<DateTime>;
    /** Organization ID to query records for. This value can only be used by Veritone administrators. Any value provided by user administrators will be ignored. */
    organizationId: Maybe<string>;
    /** User name on audit entry. Must be exact match. */
    userName: Maybe<string>;
    /** IP address of the client that generated the audit action. Must be exact match. */
    clientIpAddress: Maybe<string>;
    /** HTTP user agent of the client that generated the audit action. Must be exact match. */
    clientUserAgent: Maybe<string>;
    /** The event type, such as `Create`, `Update`, or `Delete`. Must be exact match. */
    eventType: Maybe<string>;
    /** The ID of the object involved in the audit action. The format of this ID varies by object type. Must be exact match. */
    objectId: Maybe<string>;
    /** The type of the object involved in the audit action, such as `Watchlist` or `TemporalDataObject`. Must be exact match. */
    objectType: Maybe<string>;
    /** Whether or not the action was successful. */
    success: Maybe<boolean>;
    /** The unique ID of an audit log entry. Multiple values can be provided. */
    id: Maybe<ReadonlyArray<string>>;
    /** Offset into result set, for paging. */
    offset: Maybe<number>;
    /** Limit on result size, for paging (page size). Audit queries are lightweight so the default of 100 is higher than the default offset used elsewhere in the API. */
    limit: number;
    /** Order information. Default is order by `createdDateTime` descending. */
    orderBy: Maybe<ReadonlyArray<AuditLogOrderBy>>;
  }
  export interface MediaShareQueryArgs {
    id: string;
  }
  export interface WorkflowRuntimeQueryArgs {
    workflowRuntimeId: string;
  }
  export interface WorkflowRuntimeStorageDataQueryArgs {
    /** Unique id of the workflow instance */
    workflowRuntimeId: string;
    /** The unique id to rertrieve a single workflow data */
    storageKey: Maybe<string>;
    /** A prefix filter used to return a set of workflow data items whose dataKey starts with dataKeyPrefix */
    storageKeyPrefix: Maybe<string>;
    /** Offset for paging */
    offset: Maybe<number>;
    /** Limit on result size, for paging (page size). workflowRuntimeData can be arbitrary large therefore smaller paging shoulf be preffered */
    limit: number;
  }
  export interface ProcessTemplatesQueryArgs {
    id: Maybe<string>;

    offset: Maybe<number>;

    limit: number;
  }
  export interface CreativeQueryArgs {
    id: string;
  }
  export interface ScheduledJobQueryArgs {
    id: string;
  }
  export interface ScheduledJobsQueryArgs {
    /** Provide an ID to retrieve a specific schedule */
    id: Maybe<string>;
    /** Provide a schedule name, or part of one, to search for schedules by name. Supports prefix/like search. */
    name: Maybe<string>;
    /** Specify a run mode to filter to run mode */
    runMode: Maybe<RunMode>;
    /** Specify isActive true or false to filter by active state */
    isActive: Maybe<boolean>;

    engineId: Maybe<string>;

    engineCategoryId: Maybe<string>;

    engineType: Maybe<ReadonlyArray<EngineTypeFilter>>;
    /** Specify an offset to retrieve additional pages */
    offset: Maybe<number>;
    /** Specify a limit to limit result size. */
    limit: number;

    dateTimeFilter: Maybe<ReadonlyArray<ScheduledJobDateTimeFilter>>;
    /** Time filter is in station local time */
    partTimeFilter: Maybe<ReadonlyArray<ScheduledJobPartTimeFilter>>;
    /** Optionally, specify one or more source IDs. Scheduled jobs with any of the given sources as their primary source will be returned. */
    primarySourceId: Maybe<ReadonlyArray<string>>;
    /** Optionally, specify one or more source type IDs. Scheduled jobs with any of the given sources types on their primary source will be returned. */
    primarySourceTypeId: Maybe<ReadonlyArray<string>>;

    hasJobTemplate: Maybe<boolean>;
    /** Specify isRunning true or false to filter for scheduled jobs that have jobs running right now. */
    hasRunningJobs: Maybe<boolean>;
    /** Order information. Default will order by modifiedDateTime descending. */
    orderBy: Maybe<ReadonlyArray<ScheduledJobOrderBy>>;
    /** Specify a permission level to retrieve scheduled jobs to which you have at least that permission. */
    permission: ScheduledJobPermission;
    /** Specify clusterId to filter scheduled jobs that run on specified cluster */
    clusterId: Maybe<string>;
  }
  export interface EngineConfigurationQueryArgs {
    id: string;
  }
  export interface EngineConfigurationsQueryArgs {
    id: Maybe<string>;
  }
  export interface ClusterNodeQueryArgs {
    id: string;
  }
  export interface ClusterNodesQueryArgs {
    id: Maybe<string>;

    offset: Maybe<number>;

    limit: number;
  }
  export interface ClusterQueryArgs {
    id: string;
  }
  export interface ClustersQueryArgs {
    id: Maybe<string>;

    name: Maybe<string>;

    type: Maybe<ClusterType>;

    offset: Maybe<number>;

    limit: number;
  }
  export interface ExecutionLocationQueryArgs {
    id: string;
  }
  export interface ExecutionLocationsQueryArgs {
    id: Maybe<string>;
  }
  export interface JobTemplateQueryArgs {
    id: string;
  }
  export interface JobTemplatesQueryArgs {
    jobPipelineId: Maybe<string>;

    scheduledJobId: Maybe<string>;

    engineId: Maybe<string>;

    engineType: Maybe<ReadonlyArray<EngineTypeFilter>>;

    offset: Maybe<number>;

    limit: number;
  }
  export interface TaskTemplateQueryArgs {
    id: string;
  }
  export interface JobPipelineQueryArgs {
    id: string;
  }
  export interface JobPipelinesQueryArgs {
    id: Maybe<string>;

    scheduledJobId: Maybe<string>;

    isPublic: Maybe<boolean>;

    offset: Maybe<number>;

    limit: number;
  }
  export interface SourceQueryArgs {
    id: string;
  }
  export interface SourcesQueryArgs {
    /** Provide an ID to retrieve a specific source. */
    id: Maybe<string>;
    /** Provide a source type ID to filter for sources of the specified type. */
    sourceTypeId: Maybe<string>;

    sourceTypeIds: Maybe<ReadonlyArray<Maybe<string>>>;
    /** Provide a name or partial name value to filter by name. The `nameMatch` parameter can be used to determine the string match strategy used in the filter. Default is "starts with". Note that all matching is case-insensitive. */
    name: Maybe<string>;
    /** String matching strategy. Default is "starts with". */
    nameMatch: StringMatch;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    limit: number;
    /** Set this flag to true or false to return only sources that do or do not have content templates associated with them. The default is neither (do not filter on the presence of content templates). */
    hasContentTemplates: Maybe<boolean>;
    /** Set this flag to true to include public sources or false to include only sources owned by the user's org, not public sources. Public sources owned by the caller's org will always be returned. */
    includePublic: boolean;
    /** Provide a correlation schama ID to filter for sources that correlate using specified schema. */
    correlationSchemaId: Maybe<string>;
    /** Provide optional sort information. If not provided, a default sort by createdDateTime descending will be applied. */
    orderBy: Maybe<ReadonlyArray<SourceSortField>>;
    /** Specify a permission level to retrieve sources to which you have at least that permission. */
    permission: SourcePermission;
  }
  export interface SourceTypeQueryArgs {
    id: string;
  }
  export interface SourceTypesQueryArgs {
    id: Maybe<string>;

    ids: Maybe<ReadonlyArray<Maybe<string>>>;
    /** Provide a source type category ID to select source types belonging to the category */
    categoryId: Maybe<string>;
    /** Provide `isLive` to select source types with the given value. */
    isLive: Maybe<boolean>;

    offset: Maybe<number>;

    limit: number;
  }
  export interface SourceTypeCategoriesQueryArgs {
    /** Optionally, provide a source category type ID. */
    id: Maybe<string>;
  }
  export interface SourceTypeCategoryQueryArgs {
    id: string;
  }
  export interface ExternalCredentialQueryArgs {
    id: string;
  }
  export interface ExternalCredentialsQueryArgs {
    id: Maybe<string>;
  }
  export interface TasksQueryArgs {
    id: Maybe<string>;

    taskTemplateId: Maybe<string>;
  }
  export interface DetailsTemporalDataObjectArgs {
    /** optionally, specify a path to retrieve only a specific property within the details JSON */
    path: Maybe<string>;
  }
  export interface AssetsTemporalDataObjectArgs {
    /** Provide an ID to retrieve a single asset. */
    id: Maybe<string>;
    /** Specify a list of asset types such as "media" or "transcript" to retrieve a specific asset type */
    type: Maybe<ReadonlyArray<string>>;
    /** Deprecated -- use type parameter */
    assetType: Maybe<ReadonlyArray<string>>;
    /** Retrieve assets created by a specific task */
    sourceTaskId: Maybe<string>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    limit: number;

    orderBy: AssetOrderBy;

    orderDirection: OrderDirection;
  }
  export interface PrimaryAssetTemporalDataObjectArgs {
    assetType: string;
  }
  export interface TasksTemporalDataObjectArgs {
    id: Maybe<string>;

    offset: Maybe<number>;

    limit: number;

    hasSourceAsset: Maybe<boolean>;
    /** If a filter is not provided, a default of `createdDateTime` between the TDO creation time and the current date will be applied. */
    dateTimeFilter: Maybe<ReadonlyArray<Maybe<TaskDateTimeFilter>>>;
  }
  export interface EngineRunsTemporalDataObjectArgs {
    offset: Maybe<number>;

    limit: number;
  }
  export interface DetailsAssetArgs {
    /** optionally, specify a path to retrieve only a specific property within the details JSON */
    path: Maybe<string>;
  }
  export interface JsonstringAssetArgs {
    indent: number;
  }
  export interface TransformAssetArgs {
    transformFunction: TransformFunction;
  }
  export interface TasksEngineArgs {
    status: Maybe<ReadonlyArray<Maybe<string>>>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    limit: number;

    id: Maybe<string>;
    /** Filter the tasks by date/time field. If a filter is not provided, a default of `createdDateTime` between three months ago and the current date will be applied. */
    dateTimeFilter: Maybe<ReadonlyArray<Maybe<TaskDateTimeFilter>>>;

    hasSourceAsset: Maybe<boolean>;
  }
  export interface BuildsEngineArgs {
    buildStatus: Maybe<ReadonlyArray<BuildStatus>>;

    status: Maybe<ReadonlyArray<Maybe<string>>>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    limit: number;

    id: Maybe<string>;
  }
  export interface TaskMetricsEngineArgs {
    /** Provide a starting date in ISO format (maximum range of 7 days) */
    fromDateTime: Maybe<DateTime>;
    /** Provide an end date in ISO format (maximum range of 7 days) */
    toDateTime: Maybe<DateTime>;
  }
  export interface ApplicationsOrganizationArgs {
    offset: Maybe<number>;

    limit: number;
  }
  export interface UsersOrganizationArgs {
    offset: Maybe<number>;

    limit: number;
  }
  export interface CollectionsOrganizationArgs {
    /** Provide a name to filter by collection name */
    name: Maybe<string>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    limit: number;
  }
  export interface RootFolderOrganizationArgs {
    /** Specify a root folder type to retrieve a specific root folder */
    type: RootFolderType;
  }
  export interface ClientSecretApplicationArgs {
    password: Maybe<string>;
  }
  export interface RootFolderUserArgs {
    /** Specify a root folder type to retrieve a specific root folder */
    type: RootFolderType;
  }
  export interface ChildFoldersFolderArgs {
    offset: Maybe<number>;

    limit: number;
  }
  export interface ChildTdOsFolderArgs {
    offset: Maybe<number>;

    limit: number;
  }
  export interface DataStructuredDataArgs {
    /** Optionally, specify a path into the JSON data. Only the value of the path will be returned, at the top level. The value will be empty if there is nothing in the JSON at that path. This parameter is useful for directly addressing fields in the JSON. */
    path: Maybe<string>;
  }
  export interface DataStringStructuredDataArgs {
    indent: Maybe<number>;
  }
  export interface StructuredDataObjectsSchemaArgs {
    offset: Maybe<number>;

    limit: number;
  }
  export interface SchemasDataRegistryArgs {
    status: Maybe<ReadonlyArray<Maybe<SchemaStatus>>>;

    majorVersion: Maybe<number>;

    id: Maybe<string>;

    offset: Maybe<number>;

    limit: number;

    orderBy: Maybe<ReadonlyArray<Maybe<SchemaOrder>>>;
  }
  export interface EnginesEngineCategoryArgs {
    offset: Maybe<number>;

    limit: number;
    /** Filters for engine attributes */
    filter: Maybe<EngineFilter>;
    /** Provide a list of EngineSortField to sort by. */
    orderBy: Maybe<ReadonlyArray<Maybe<EngineSortField>>>;
  }
  export interface MentionsWatchlistArgs {
    offset: Maybe<number>;

    limit: number;
  }
  export interface ScheduledJobsWatchlistArgs {
    offset: Maybe<number>;

    limit: number;
  }
  export interface SchedulesWatchlistArgs {
    offset: Maybe<number>;

    limit: number;
  }
  export interface RatingsMentionArgs {
    userId: Maybe<string>;
  }
  export interface JobPipelinesScheduledJobArgs {
    offset: Maybe<number>;

    limit: number;
  }
  export interface JobTemplatesScheduledJobArgs {
    offset: Maybe<number>;

    limit: number;
  }
  export interface AllJobTemplatesScheduledJobArgs {
    offset: Maybe<number>;

    limit: number;
  }
  export interface JobsScheduledJobArgs {
    /** Optionally, specify a TDO ID to filter by job target */
    targetId: Maybe<string>;
    /** Optionally, specify a cluster ID to filter by cluster */
    clusterId: Maybe<string>;
    /** Provide sort information. The default is to sort by createdDateTime descending. */
    orderBy: Maybe<ReadonlyArray<JobSortField>>;
    /** Optionally, specify filters on date/time fields */
    dateTimeFilter: Maybe<ReadonlyArray<JobDateTimeFilter>>;
    /** Provide a list of status strings to filter by status */
    status: Maybe<ReadonlyArray<JobStatusFilter>>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify the maximum number of results to included in this response, or page size. */
    limit: number;
  }
  export interface SourcesScheduledJobArgs {
    offset: Maybe<number>;

    limit: number;
  }
  export interface TaskTemplatesJobTemplateArgs {
    engineType: Maybe<ReadonlyArray<EngineTypeFilter>>;

    engineId: Maybe<string>;

    offset: Maybe<number>;

    limit: number;
  }
  export interface SourcesSourceTypeArgs {
    /** Optionally, provide a list of IDs to retrieve sources by ID */
    id: Maybe<ReadonlyArray<string>>;
    /** Provide a name or partial name value to filter by name. The `nameMatch` parameter can be used to determine the string match strategy used in the filter. Default is "starts with". Note that all matching is case-insensitive. */
    name: Maybe<string>;
    /** String matching strategy. Default is "starts with". */
    nameMatch: StringMatch;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Specify maximum number of results to retrieve in this result. Page size. */
    limit: number;
    /** Set this flag to true or false to return only sources that do or do not have content templates associated with them. The default is neither (do not filter on the presence of content templates). */
    hasContentTemplates: Maybe<boolean>;
    /** Set this flag to true to include public sources or false to include only sources owned by the user's org, not public sources. Public sources owned by the caller's org will always be returned. */
    includePublic: boolean;
    /** Provide a correlation schama ID to filter for sources that correlate using specified schema. */
    correlationSchemaId: Maybe<string>;
    /** Provide optional sort information. If not provided, a default sort by createdDateTime descending will be applied. */
    orderBy: Maybe<ReadonlyArray<SourceSortField>>;
  }
  export interface CollaboratorsSourceArgs {
    orderBy: SourceCollaboratorOrderBy;

    orderDirection: OrderDirection;
  }
  export interface TasksJobArgs {
    /** Specify a list of job status strings to filter by status */
    status: Maybe<ReadonlyArray<TaskStatus>>;
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Maximum number of results to retrieve in this query */
    limit: number;
    /** Specify an ID to retrieve a single specific task */
    id: Maybe<string>;
    /** Specify a list of IDs to filter by task target ID */
    targetId: Maybe<ReadonlyArray<Maybe<string>>>;

    hasSourceAsset: Maybe<boolean>;
  }
  export interface WidgetsCollectionArgs {
    /** Provide an offset to skip to a certain element in the result, for paging. */
    offset: Maybe<number>;
    /** Maximum number of results to retrieve in this query; page size */
    limit: number;

    id: Maybe<string>;
  }
  export interface EngineModelsLibraryArgs {
    id: Maybe<string>;
  }
  export interface ConfigurationsLibraryArgs {
    limit: Maybe<number>;

    offset: Maybe<number>;
  }
  export interface EntitiesLibraryArgs {
    /** Provide an ID to retrieve a single specific entity. */
    id: Maybe<string>;

    ids: Maybe<ReadonlyArray<string>>;

    isPublished: Maybe<boolean>;

    identifierTypeId: Maybe<string>;

    name: Maybe<string>;

    offset: Maybe<number>;

    limit: number;

    orderBy: Maybe<LibraryEntityOrderBy>;

    orderDirection: Maybe<OrderDirection>;
  }
  export interface CollaboratorsLibraryArgs {
    /** Provide an ID to retrieve collaborators within a specific organization. */
    collaboratorOrgId: Maybe<string>;
  }
  export interface IdentifiersEntityArgs {
    /** Provide an ID to retrieve a specific entity identifier */
    id: Maybe<string>;

    identifierTypeId: Maybe<string>;

    offset: Maybe<number>;

    limit: number;
  }
  export interface CreateTdoMutationArgs {
    /** Fields required to create a TDO */
    input: Maybe<CreateTdo>;
  }
  export interface UpdateTdoMutationArgs {
    /** Fields required to update a TDO */
    input: Maybe<UpdateTdo>;
  }
  export interface DeleteTdoMutationArgs {
    /** Supply the ID of the TDO to delete */
    id: string;
  }
  export interface CleanupTdoMutationArgs {
    /** Supply the ID of the TDO to clean up. */
    id: string;
    /** Supply a list of cleanup options. See TDOCleanupOption for details. If not provided, the server will use default settings. */
    options: ReadonlyArray<TdoCleanupOption>;
  }
  export interface CreateTaskLogMutationArgs {
    /** Fields needed to create a task log. */
    input: CreateTaskLog;
  }
  export interface CreateAssetMutationArgs {
    /** Fields needed to create an asset. */
    input: CreateAsset;
  }
  export interface DeleteAssetMutationArgs {
    /** Provide the ID of the asset to delete. */
    id: string;
  }
  export interface UpdateAssetMutationArgs {
    /** Fields needed to update an asset. */
    input: UpdateAsset;
  }
  export interface RequestCloneMutationArgs {
    /** Fields needed to request a new clone job. */
    input: Maybe<RequestClone>;
  }
  export interface CreateEngineMutationArgs {
    /** Fields needed to create a new engine */
    input: Maybe<CreateEngine>;
  }
  export interface UpdateEngineMutationArgs {
    /** Fields needed to update an engine */
    input: Maybe<UpdateEngine>;
  }
  export interface DeleteEngineMutationArgs {
    /** Provide the ID of the engine to delete */
    id: string;
  }
  export interface CreateEngineBuildMutationArgs {
    /** Fields needed to create an engine build. */
    input: CreateBuild;
  }
  export interface UpdateEngineBuildMutationArgs {
    /** Fields needed to update an engine build. */
    input: UpdateBuild;
  }
  export interface DeleteEngineBuildMutationArgs {
    /** Fields needed to delete an engine build. */
    input: DeleteBuild;
  }
  export interface UpdateTaskMutationArgs {
    /** Fields required to update a task. */
    input: Maybe<UpdateTask>;
  }
  export interface AddTasksToJobsMutationArgs {
    input: Maybe<AddTasksToJobs>;
  }
  export interface PollTaskMutationArgs {
    /** Fields required to poll a task. */
    input: Maybe<PollTask>;
  }
  export interface CreateJobMutationArgs {
    /** Fields required to create a job. */
    input: Maybe<CreateJob>;
  }
  export interface CancelJobMutationArgs {
    /** Supply the ID of the job to delete. */
    id: string;
  }
  export interface RetryJobMutationArgs {
    /** Supply the ID of the job to retry. */
    id: string;
  }
  export interface UpdateJobsMutationArgs {
    input: UpdateJobs;
  }
  export interface CreateApplicationMutationArgs {
    /** Fields needed to create a new custom application. */
    input: Maybe<CreateApplication>;
  }
  export interface DeleteApplicationMutationArgs {
    /** Supply the ID of the application to delete. */
    id: string;
  }
  export interface UpdateApplicationMutationArgs {
    /** Fields required to update a custom application. */
    input: Maybe<UpdateApplication>;
  }
  export interface BulkDeleteContextMenuExtensionsMutationArgs {
    input: Maybe<BulkDeleteContextMenuExtensions>;
  }
  export interface UpdateOrganizationMutationArgs {
    /** Fields required to update an organization. */
    input: UpdateOrganization;
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
    /** Fields required to create an entity identifier type. */
    input: CreateEntityIdentifierType;
  }
  export interface UpdateEntityIdentifierTypeMutationArgs {
    /** Fields required to update an entity identifier type. */
    input: UpdateEntityIdentifierType;
  }
  export interface CreateLibraryTypeMutationArgs {
    /** Fields needed to create a new library type. */
    input: CreateLibraryType;
  }
  export interface UpdateLibraryTypeMutationArgs {
    /** Fields needed to update a library type. */
    input: UpdateLibraryType;
  }
  export interface CreateLibraryMutationArgs {
    /** Fields needed to create a new library. */
    input: CreateLibrary;
  }
  export interface UpdateLibraryMutationArgs {
    /** Fields needed to update a library */
    input: UpdateLibrary;
  }
  export interface DeleteLibraryMutationArgs {
    /** Provide the ID of the library to delete. */
    id: string;
  }
  export interface PublishLibraryMutationArgs {
    /** ID of the library to publish */
    id: string;
  }
  export interface CreateEntityMutationArgs {
    /** Fields required to create a new entity. */
    input: CreateEntity;
  }
  export interface UpdateEntityMutationArgs {
    /** Fields required to update an entity. */
    input: UpdateEntity;
  }
  export interface DeleteEntityMutationArgs {
    /** Supply the ID of the entity to delete. */
    id: string;
  }
  export interface CreateEntityIdentifierMutationArgs {
    /** Fields needed to create an entity identifier. */
    input: CreateEntityIdentifier;
  }
  export interface UpdateEntityIdentifierMutationArgs {
    /** Fields required to update an entity identifier. */
    input: UpdateEntityIdentifier;
  }
  export interface DeleteEntityIdentifierMutationArgs {
    /** Supply the ID of the entity identifier to delete. */
    id: string;
  }
  export interface CreateLibraryEngineModelMutationArgs {
    /** Fields required to create a library engine model. */
    input: CreateLibraryEngineModel;
  }
  export interface UpdateLibraryEngineModelMutationArgs {
    /** Fields required to update a library engine model */
    input: UpdateLibraryEngineModel;
  }
  export interface DeleteLibraryEngineModelMutationArgs {
    /** Supply the ID of the library engine model to delete. */
    id: string;
  }
  export interface CreateLibraryConfigurationMutationArgs {
    /** Fields required to create library configuration */
    input: CreateLibraryConfiguration;
  }
  export interface UpdateLibraryConfigurationMutationArgs {
    /** Fields required to create library configuration */
    input: UpdateLibraryConfiguration;
  }
  export interface DeleteLibraryConfigurationMutationArgs {
    /** Supply configuration ID to delete. */
    id: string;
  }
  export interface AddLibraryDatasetMutationArgs {
    input: AddLibraryDataset;
  }
  export interface DeleteLibraryDatasetMutationArgs {
    input: DeleteLibraryDataset;
  }
  export interface ApplicationWorkflowMutationArgs {
    /** Fields required to apply a application workflow step */
    input: Maybe<ApplicationWorkflow>;
  }
  export interface EngineWorkflowMutationArgs {
    /** Fields required to apply a engine workflow step */
    input: Maybe<EngineWorkflow>;
  }
  export interface CreateIngestionConfigurationMutationArgs {
    input: Maybe<CreateIngestionConfiguration>;
  }
  export interface UpdateIngestionConfigurationMutationArgs {
    input: Maybe<UpdateIngestionConfiguration>;
  }
  export interface DeleteIngestionConfigurationMutationArgs {
    /** ID of the ingestion configuration to delete */
    id: string;
  }
  export interface CreateWidgetMutationArgs {
    /** Fields needed to create a new widget */
    input: Maybe<CreateWidget>;
  }
  export interface UpdateWidgetMutationArgs {
    /** Fields needed to update a widget */
    input: Maybe<UpdateWidget>;
  }
  export interface CreateUserMutationArgs {
    /** Fields needed to create a user. */
    input: Maybe<CreateUser>;
  }
  export interface CreateOrganizationMutationArgs {
    /** Fields needed to create an organization. */
    input: CreateOrganization;
  }
  export interface UpdateUserMutationArgs {
    /** Fields needed to update a user */
    input: Maybe<UpdateUser>;
  }
  export interface CreatePasswordUpdateRequestMutationArgs {
    /** Fields needed to create a password update request */
    input: Maybe<CreatePasswordUpdateRequest>;
  }
  export interface GetCurrentUserPasswordTokenMutationArgs {
    input: GetCurrentUserPasswordToken;
  }
  export interface CreatePasswordResetRequestMutationArgs {
    input: Maybe<CreatePasswordResetRequest>;
  }
  export interface UpdateCurrentUserMutationArgs {
    input: UpdateCurrentUser;
  }
  export interface ChangePasswordMutationArgs {
    /** Fields needed to change password */
    input: ChangePassword;
  }
  export interface DeleteUserMutationArgs {
    /** Supply the ID of the user to delete. */
    id: string;
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
  export interface DeleteStructuredDataMutationArgs {
    input: DeleteStructuredData;
  }
  export interface CreateCollectionMutationArgs {
    /** Fields required to create new collection */
    input: Maybe<CreateCollection>;
  }
  export interface UpdateCollectionMutationArgs {
    /** Fields needed to update a collection */
    input: Maybe<UpdateCollection>;
  }
  export interface DeleteCollectionMutationArgs {
    /** @deprecated(reason: "folderId has been renamed to id. Use id.") */
    folderId: Maybe<string>;
    /** Supply the ID of the folder or collection to delete */
    id: Maybe<string>;
  }
  export interface ShareCollectionMutationArgs {
    /** Fields needed to share a collection */
    input: Maybe<ShareCollection>;
  }
  export interface ShareMentionFromCollectionMutationArgs {
    /** Fields needed to share a mention */
    input: Maybe<ShareMentionFromCollection>;
  }
  export interface ShareMentionMutationArgs {
    input: Maybe<ShareMention>;
  }
  export interface ShareMentionInBulkMutationArgs {
    input: Maybe<ShareMentionInBulk>;
  }
  export interface CreateCollectionMentionMutationArgs {
    /** Fields needed to add a mention to a collection */
    input: Maybe<CollectionMentionInput>;
  }
  export interface DeleteCollectionMentionMutationArgs {
    /** Fields needed to delete a mention from a collection */
    input: Maybe<CollectionMentionInput>;
  }
  export interface CreateFolderMutationArgs {
    /** Fields needed to create a new folder. */
    input: Maybe<CreateFolder>;
  }
  export interface UpdateFolderMutationArgs {
    /** Fields needed to update a folder. */
    input: Maybe<UpdateFolder>;
  }
  export interface MoveFolderMutationArgs {
    /** Fields needed to move a folder */
    input: Maybe<MoveFolder>;
  }
  export interface DeleteFolderMutationArgs {
    /** Fields needed to delete a folder */
    input: Maybe<DeleteFolder>;
  }
  export interface CreateMentionCommentMutationArgs {
    /** Fields needed to create a mention comment */
    input: Maybe<CreateMentionComment>;
  }
  export interface UpdateMentionCommentMutationArgs {
    /** Fields needed to update a mention comment */
    input: Maybe<UpdateMentionComment>;
  }
  export interface DeleteMentionCommentMutationArgs {
    /** Fields needed to delete a mention comment */
    input: Maybe<DeleteMentionComment>;
  }
  export interface CreateMentionRatingMutationArgs {
    /** Fields needed to create a mention rating */
    input: Maybe<CreateMentionRating>;
  }
  export interface UpdateMentionRatingMutationArgs {
    /** Fields needed to update a mention rating */
    input: Maybe<UpdateMentionRating>;
  }
  export interface DeleteMentionRatingMutationArgs {
    /** Fields needed to delete a mention rating. */
    input: Maybe<DeleteMentionRating>;
  }
  export interface UserLoginMutationArgs {
    /** Fields needed to log in */
    input: Maybe<UserLogin>;
  }
  export interface UserLogoutMutationArgs {
    /** User token that should be invalidated */
    token: string;
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
  export interface UpdateMentionMutationArgs {
    input: UpdateMention;
  }
  export interface CreateRootFoldersMutationArgs {
    /** The type of root folder to create */
    rootFolderType: RootFolderType;
  }
  export interface BulkUpdateWatchlistMutationArgs {
    /** A filter indicating which watchlists should be updated. At least one filter condition must be provided. Only watchlists for the user's organization will be updated. */
    filter: BulkUpdateWatchlistFilter;
    /** Fields used to update a watchlist. */
    input: Maybe<BulkUpdateWatchlist>;
  }
  export interface FileTemporalDataObjectMutationArgs {
    /** The fields needed to file a TemporalDataObject in a folder */
    input: FileTemporalDataObject;
  }
  export interface UnfileTemporalDataObjectMutationArgs {
    /** The fields needed to file a TemporalDataObject in a folder */
    input: UnfileTemporalDataObject;
  }
  export interface MoveTemporalDataObjectMutationArgs {
    /** Fields need to move a TemporalDataObject */
    input: MoveTemporalDataObject;
  }
  export interface UploadEngineResultMutationArgs {
    /** Fields needed to upload and store an engine result */
    input: UploadEngineResult;
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
    input: Maybe<UpdateCognitiveSearch>;
  }
  export interface CreateCognitiveSearchMutationArgs {
    input: Maybe<CreateCognitiveSearch>;
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
    input: Maybe<ShareFolderInput>;
  }
  export interface CreateTdoWithAssetMutationArgs {
    /** Input fields necessary to create the TDO and asset */
    input: Maybe<CreateTdoWithAsset>;
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
    /** Folder Content Template Id */
    id: string;
  }
  export interface CreateExportRequestMutationArgs {
    /** Input data required to create the export request */
    input: CreateExportRequest;
  }
  export interface UpdateExportRequestMutationArgs {
    /** Input data required to update an export request */
    input: UpdateExportRequest;
  }
  export interface CreateMentionsMutationArgs {
    input: CreateMentions;
  }
  export interface CreateMediaShareMutationArgs {
    input: CreateMediaShare;
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

    generateAuthToken: Maybe<boolean>;
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
  export interface CreateMentionExportRequestMutationArgs {
    /** Input data required to create the export request */
    input: CreateMentionExportRequest;
  }
  export interface UpdateMentionExportRequestMutationArgs {
    input: UpdateMentionExportRequest;
  }
  export interface CreateCreativeMutationArgs {
    input: CreateCreative;
  }
  export interface UpdateCreativeMutationArgs {
    input: UpdateCreative;
  }
  export interface DeleteCreativeMutationArgs {
    id: string;
  }
  export interface EmitSystemEventMutationArgs {
    /** Data required to create the event */
    input: EmitSystemEvent;
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
    /** ID of the scheduled job content template to delete. It will be removed from the scheduled job. The underlying SDO will not be deleted. */
    id: string;
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
    /** ID of the source content template to delete. It will be removed from the source. The underlying SDO will not be deleted. */
    id: string;
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
    input: Maybe<UpdateBundleStatusAsCluster>;
  }
  export interface AssetIdMapCloneDataArgs {
    /** Provide an ID to retrieve mappings for specific old asset. */
    oldAssetId: Maybe<string>;
    /** Provide an ID to retrieve mappings for a specific new asset. */
    newAssetId: Maybe<string>;
  }
}
