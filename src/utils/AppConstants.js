/**
 * List of constants on the App.
 */
const AppConstants = {
    ENDPOINTS: {
        LOG_IN: '/auth',
        LOG_OUT: '',
        DOCUMENTS: '/documents',
        ANNOTATIONS: '',
        USERS: '',
        NAMED_ENTITIES: ''
    },
    USER_ROLES: {
        ANALYST: 0,
        MANAGER: 1
    },
    REFRESH_RATE: 1 * 60 // 10 minutes
}

export default AppConstants;