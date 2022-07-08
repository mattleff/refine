import { ReactNode } from "react";

export * from "./components";
export * from "./hooks";

export {
    IAuthContext,
    AuthProvider,
    Pagination,
    IDataContextProvider as DataProvider,
    ILiveContext as LiveProvider,
    LiveEvent,
    IResourceContext as ResourceProvider,
    ITranslationContext,
    TranslationProvider,
    IAccessControlContext,
    AccessControlProvider,
    INotificationContext,
    NotificationProvider,
    AuditLogProvider,
    I18nProvider,
    MutationMode,
    IResourceComponents,
    IResourceComponentsProps,
    ILoginForm,
    HttpError,
    LayoutProps,
    TitleProps,
    CrudFilter,
    CrudFilters,
    LogicalFilter,
    ConditionalFilter,
    CrudOperators,
    CrudSorting,
    CrudSort,
    SortOrder,
    GetListResponse,
    GetOneResponse,
    GetManyResponse,
    CreateResponse,
    CreateManyResponse,
    UpdateManyResponse,
    UpdateResponse,
    DeleteOneResponse,
    DeleteManyResponse,
    CanParams,
    CanReturnType,
    CustomResponse,
    SuccessErrorNotification,
    IRouterProvider,
    PromptProps,
    ResourceRouterParams,
    IResourceItem,
    BaseRecord,
    BaseKey,
    Option,
    LiveModeProps,
    MetaDataQuery,
    RedirectionTypes,
    MapDataFn,
    OpenNotificationParams,
    ResourceErrorRouterParams,
    LogParams,
    ILogData,
    ILog,
    ITreeMenu,
    IQueryKeys,
    ResourceProps,
} from "./interfaces";

export {
    parseTableParams,
    parseTableParamsFromQuery,
    stringifyTableParams,
    unionFilters,
    setInitialFilters,
    unionSorters,
    setInitialSorters,
    getDefaultFilter,
    getDefaultSortOrder,
} from "./definitions/table";
export {
    userFriendlyResourceName,
    importCSVMapper,
    handleUseParams,
    routeGenerator,
    createTreeView,
} from "./definitions/helpers";
export { file2Base64 } from "./definitions/upload";

declare module "react-query/types/react/QueryClientProvider" {
    interface QueryClientProviderProps {
        children?: ReactNode;
    }
}
