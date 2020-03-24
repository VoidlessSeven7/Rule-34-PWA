// Third party
import { addSeconds } from 'date-fns'
// Own
import { findBooruByShort } from '~/assets/js/BooruTools.js'

export default {
  /**
   * Handler for post's data changes
   * @param {*} state Default
   * @param {Object} parameters Settings in an object
   */
  dashBoardManager(state, parameters) {
    // Post data related
    switch (parameters.mode) {
      case 'add':
        state.dashBoardData.data = parameters.data
        break

      case 'concat':
        state.dashBoardData.data = state.dashBoardData.data.concat(
          parameters.data
        )
        break

      default:
        throw new Error('No mode specified')
    }
  },

  /**
   * Modifies Page ID
   * @param {*} state Default
   * @param {Object} parameters .operation (specific, add, subtract, reset) and .value
   */
  pidManager(state, parameters) {
    switch (parameters.operation) {
      case 'specific':
        state.dashBoardData.pid = parameters.value
        break

      case 'add':
        state.dashBoardData.pid++
        break

      case 'subtract':
        state.dashBoardData.pid--
        break

      case 'reset':
        // Find domain in list and use its PID
        state.dashBoardData.pid = findBooruByShort(
          state.dashBoardSettings.contentDomain
        ).pid
        break

      default:
        throw new Error('No mode specified')
    }
  },

  /**
   * Handler for api changes
   * @param {*} state Default store
   * @param {String} domain New domain
   */
  domainManager(state, domain) {
    state.dashBoardSettings.contentDomain = domain
  },

  /**
   * Handler for Side Nav
   * @param {*} state Default store
   * @param {Object} parameters Operation to do (close, open, or nothing to toggle)
   */
  sideNavManager(state, operation) {
    switch (operation) {
      case 'close':
        state.sideNavData.isActive = false
        break

      case 'open':
        state.sideNavData.isActive = true
        break

      default:
        // Toggle
        state.sideNavData.isActive = !state.sideNavData.isActive
        break
    }
  },

  /**
   *
   * @param {*} state Default
   * @param {String} parameters Error string
   */
  generalManager(state, parameters) {
    // Errors
    if (parameters.errors !== undefined) {
      state.generalData.errors = parameters.errors
    }
  },

  /**
   *
   * @param {*} state Default
   * @param {Object} parameters .operation, .tag, .tag.name
   */
  tagManager(state, parameters) {
    switch (parameters.operation) {
      // Add if it doesnt already exist
      case 'add':
        if (!state.searchData.tags.includes(parameters.tag.name)) {
          state.searchData.tags.push(parameters.tag.name)
        }
        break

      // Instead of adding one, add multiple with concat
      case 'concat':
        state.searchData.tags = state.searchData.tags.concat(
          state.searchData.premadeFilterData
        )
        break

      case 'remove':
        state.searchData.tags = state.searchData.tags.filter(function (ele) {
          return ele !== parameters.tag.name
        })
        break

      case 'reset':
        state.searchData.tags = []
        break

      default:
        throw new Error('No mode specified')
    }
  },

  /**
   * Handler for search data
   * @param {*} state Default
   * @param {Object} parameters Object with settings
   */
  searchManager(state, parameters) {
    switch (parameters.mode) {
      case 'toggleSearch':
        state.searchData.isActive = !state.searchData.isActive
        break

      // Set active state
      case 'setSearch':
        state.searchData.isActive = parameters.data
        break

      case 'toggleFilter':
        state.searchData.isFilterActive = !state.searchData.isFilterActive
        break

      case 'changeData':
        state.searchData.data = parameters.data
        break

      case 'changeFilterData':
        state.searchData.premadeFilterData = parameters.data
        break

      default:
        throw new Error('No mode specified')
    }
  },

  /**
   *
   * @param {*} state Default
   * @param {Object} parameters .operation, .data
   */
  notificationManager(state, parameters) {
    switch (parameters.mode) {
      // Set count to notification length
      case 'setLatestTitle':
        state.notificationData.latestTitle =
          state.notificationData.data[0].title
        break

      case 'setData':
        // Set data
        state.notificationData.data = parameters.data

        // Set flag so we dont fetch anymore
        state.notificationData.alreadyFetched = true
        break

      default:
        throw new Error('No mode specified')
    }
  },

  /**
   * Changes user settings
   * @param {*} state Default
   * @param {Object} parameters Object with settings (.index = name, .value = Boolean)
   */
  userSettingsManager(state, parameters) {
    // Change value
    if (parameters !== undefined) {
      // console.log(parameters);
      state.userSettings[parameters.index].value = parameters.value
    }
  },

  patreonManager(state, parameters) {
    switch (parameters.mode) {
      case 'setCredentials':
        state.patreonCredentials.access_token = parameters.access_token
        state.patreonCredentials.refresh_token = parameters.refresh_token
        state.patreonCredentials.expires_on = addSeconds(
          new Date(),
          parameters.expires_in
        )
        break

      case 'setUserData':
        // console.log(parameters.data)

        state.patreonCredentials.full_name =
          parameters.data.data.attributes.full_name

        state.patreonCredentials.image_url =
          parameters.data.data.attributes.image_url
        break

      case 'reset':
        state.patreonCredentials.access_token = undefined
        state.patreonCredentials.refresh_token = undefined
        state.patreonCredentials.expires_on = undefined

        state.patreonCredentials.full_name = undefined
        state.patreonCredentials.image_url = undefined
        break

      case 'enableExperimental':
        state.patreonCredentials.isPatron = true
        break

      case 'disableExperimental':
        state.patreonCredentials.isPatron = false
        break
    }
  },
}
