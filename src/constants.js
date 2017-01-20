/** @constant
 * @description Prefix for all actions within library
 * @type {String}
 * @example
 * import { constants } from 'react-redux-firebase'
 * constants.actionsPrefix === '@@reactReduxFirebase' // true
*/
export const actionsPrefix = '@@reactReduxFirebase'

/** @constant
 * @description Object containing all action types
 * @type {Object}
 * @example
 * import { actionTypes } from 'react-redux-firebase'
 * actionTypes.SET === '@@reactReduxFirebase/SET' // true
 * @example
 * import { constants } from 'react-redux-firebase'
 * constants.actionTypes.SET === '@@reactReduxFirebase/SET' // true
*/
export const actionTypes = {
  START: `${actionsPrefix}/START`,
  SET: `${actionsPrefix}/SET`,
  SET_PROFILE: `${actionsPrefix}/SET_PROFILE`,
  LOGIN: `${actionsPrefix}/LOGIN`,
  LOGOUT: `${actionsPrefix}/LOGOUT`,
  LOGIN_ERROR: `${actionsPrefix}/LOGIN_ERROR`,
  NO_VALUE: `${actionsPrefix}/NO_VALUE`,
  UNAUTHORIZED_ERROR: `${actionsPrefix}/UNAUTHORIZED_ERROR`,
  INIT_BY_PATH: `${actionsPrefix}/INIT_BY_PATH`,
  AUTHENTICATION_INIT_STARTED: `${actionsPrefix}/AUTHENTICATION_INIT_STARTED`,
  AUTHENTICATION_INIT_FINISHED: `${actionsPrefix}/AUTHENTICATION_INIT_FINISHED`,
  FILE_UPLOAD_START: `${actionsPrefix}/FILE_UPLOAD_START`,
  FILE_UPLOAD_ERROR: `${actionsPrefix}/FILE_UPLOAD_ERROR`,
  FILE_UPLOAD_PROGRESS: `${actionsPrefix}/FILE_UPLOAD_PROGRESS`,
  FILE_UPLOAD_COMPLETE: `${actionsPrefix}/FILE_UPLOAD_COMPLETE`,
  FILE_DELETE_START: `${actionsPrefix}/FILE_DELETE_START`,
  FILE_DELETE_ERROR: `${actionsPrefix}/FILE_DELETE_ERROR`,
  FILE_DELETE_COMPLETE: `${actionsPrefix}/FILE_DELETE_COMPLETE`
}

/** @constant
 * @description Default configuration options
 * @type {Array}
*/
export const defaultConfig = {
  userProfile: null,
  enableLogging: false,
  updateProfileOnLogin: true,
  enableRedirectHandling: true
}

/** @constant
 * @description List of all external auth providers that are supported (firebase's email/anonymous included by default)
 * @type {Array}
 * @private
*/
export const supportedAuthProviders = [
  'google',
  'github',
  'twitter',
  'facebook'
]

/** @constant
 * @description Default keys returned within JSON Web Token recieved when authenticating
 * @type {Array}
 * @private
*/
export const defaultJWTProps = [
  'aud',
  'auth_time',
  'exp',
  'firebase',
  'iat',
  'iss',
  'sub',
  'user_id'
]

/** @constant
 * @description Default initial props used when running firebase.initializeApp
 * @type {Array}
 * @private
*/
export const defaultInitProps = [
  'apiKey',
  'authDomain',
  'databaseURL',
  'storageBucket',
  'messagingSenderId'
]

/** @constant
 * @description Parameters stored by path string instead of full path
 * @type {Array}
 * @private
*/
export const metaParams = ['timestamp', 'requesting', 'requested']

/** @constant
 * @description String Character used to split/join meta parameter keys
 * @type {Array}
 * @private
*/
export const paramSplitChar = '/'

export default {
  defaultJWTProps,
  actionTypes,
  defaultConfig,
  supportedAuthProviders,
  defaultInitProps,
  metaParams,
  paramSplitChar
}

module.exports = {
  defaultJWTProps,
  actionTypes,
  defaultConfig,
  supportedAuthProviders,
  defaultInitProps,
  metaParams,
  paramSplitChar
}
