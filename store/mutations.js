export default {
  /**
   * Handler for post's data changes
   * @param {*} state Default
   * @param {Object} payload Settings in an object
   */
  dashBoardManager(state, payload) {
    // Post data related
    if (payload.data !== undefined) {
      switch (payload.mode) {
        case 'add':
          state.dashBoardData.data = payload.data
          break

        case 'concat':
          state.dashBoardData.data = state.dashBoardData.data.concat(
            payload.data
          )
          break
      }
    }
  },

  /**
   * Modifies Page ID
   * @param {*} state Default
   * @param {Object} payload .operation (specific, add, subtract, reset) and .value
   */
  pidManager(state, payload) {
    switch (payload.operation) {
      case 'specific':
        state.dashBoardData.pid = payload.value
        break

      case 'add':
        state.dashBoardData.pid++
        break

      case 'subtract':
        state.dashBoardData.pid--
        break

      case 'reset':
        state.dashBoardData.pid = 0
        break
    }
  },

  /**
   * Handler for api changes
   * @param {*} state Default store
   * @param {String} domain New domain
   */
  domainManager(state, domain) {
    console.log(domain)
    // New url
    if (domain !== undefined) {
      state.dashBoardSettings.contentDomain = domain
    }
  },

  /**
   * Handler for Side Nav
   * @param {*} state Default store
   * @param {Object} payload Operation to do (close, open, or nothing to toggle)
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
   * @param {String} payload Error string
   */
  generalManager(state, payload) {
    // Errors
    if (payload.errors !== undefined) {
      state.generalData.errors = payload.errors
    }
  },

  /**
   *
   * @param {*} state Default
   * @param {Object} payload .operation, .tag, .tag.name
   */
  tagManager(state, payload) {
    if (payload.operation !== undefined) {
      switch (payload.operation) {
        // Add if it doesnt already exist
        case 'add':
          if (!state.searchData.tags.includes(payload.tag.name)) {
            state.searchData.tags.push(payload.tag.name)
          }
          break

        // Instead of adding one, add multiple with concat
        case 'concat':
          state.searchData.tags = state.searchData.tags.concat(
            state.searchData.premadeFilterData
          )
          break

        case 'remove':
          state.searchData.tags = state.searchData.tags.filter(function(ele) {
            return ele !== payload.tag.name
          })
          break

        case 'reset':
          state.searchData.tags = []
          break
      }
    }
  },

  /**
   * Handler for search data
   * @param {*} state Default
   * @param {Object} payload Object with settings
   */
  searchManager(state, payload) {
    // Toggle Search
    if (payload.isActive !== undefined) {
      state.searchData.isActive = payload.isActive
    }

    // Toggle Filter
    if (payload.isFilterActive !== undefined) {
      state.searchData.isFilterActive = payload.isFilterActive
    }

    // Change data
    if (payload.data !== undefined) {
      // console.log(payload.data);
      state.searchData.data = payload.data
    }

    if (payload.premadeFilterData !== undefined) {
      // console.log(payload.premadeFilterData);
      state.searchData.premadeFilterData = payload.premadeFilterData
    }
  },

  /**
   * Changes user settings
   * @param {*} state Default
   * @param {Object} payload Object with settings (.index = name, .value = Boolean)
   */
  userSettingsManager(state, payload) {
    // Change value
    if (payload !== undefined) {
      // console.log(payload);
      state.userSettings[payload.index].value = payload.value
    }
  },

  experimentalManager(state, payload) {
    switch (payload) {
      case 'enable':
        state.dashBoardSettings.experimentalSettings = true
        break

      case 'disable':
        state.dashBoardSettings.experimentalSettings = false
        break

      // Toggle
      default:
        state.dashBoardSettings.experimentalSettings = !state.dashBoardSettings
          .experimentalSettings
        break
    }
  }
}
