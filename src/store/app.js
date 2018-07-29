import networkType from '../api/networkType'
import { successNotification } from '../api/notification'
import currencies from '../api/currencies'
import * as bexjs from 'bexjs'

const defaultScanner = {
  payload: null,
  action: ''
}

const state = {
  network: null,
  blockHeight: 0,
  sendFormVisible: false,
  voteFormVisible: false,
  loading: false,
  transactionSending: false,
  fiatCurrency: currencies.EUR,
  qrScanner: defaultScanner,
  ledgerComm: null
}

// getters
const getters = {
  app: state => state,
  networkType: state => state.network,
  blockHeight: state => state.blockHeight,
  qrScanner: state => state.qrScanner
}

// actions
const actions = {
  setNetwork ({ commit, state }, network) {
    commit('setNetwork', network)
  },
  switchNetwork ({ commit, state }, data = null) {
    commit('switchNetwork', data)
  },
  toggleVoteForm ({ commit, state }, setState = null) {
    commit('toggleVoteForm', setState)
  },
  toggleSendForm ({ commit, state }, setState = null) {
    commit('toggleSendForm', setState)
  },
  setDBHeight ({ commit, state }, blockHeight) {
    commit('setDBHeight', blockHeight)
  },
  setLoadingState ({ commit, state }, loadingState) {
    commit('setLoadingState', loadingState)
  },
  setTransactionSending ({ commit, state }, sendingState) {
    commit('setTransactionSending', sendingState)
  },
  setFiatCurrency ({ commit, state }, currency) {
    commit('setFiatCurrency', currency)
  },
  codeScanned ({ commit, state }, data) {
    commit('codeScanned', data)
  },
  clearCodeScanned ({ commit, state }) {
    commit('clearCodeScanned')
  },
  setLedgerComm ({ commit, state }, comm) {
    commit('setLedgerComm', comm)
  }
}

// mutations
const mutations = {
  setNetwork (state, network) {
    state.network = network
    bexjs.setNetwork(network.label)
  },
  switchNetwork (state, data) {
    // TODO: refactor this !
    if (data) {
      if (data.network === 'Bench') {
        state.network = networkType.BENCH
      } else if (data.network === 'BenchTest') {
        state.network = networkType.BENCHTEST
      }
      bexjs.setNetwork(state.network.label, data.url)
      successNotification(`Network switched to <b>${data.url}</b>`)
    } else {
      if (state.network === networkType.BENCH) {
        state.network = networkType.BENCHTEST
      } else if (state.network === networkType.BENCHTEST) {
        state.network = networkType.BENCH
      }
      bexjs.setNetwork(state.network.label)
      successNotification(`Network switched to <b>${state.network.label}</b>`)
    }
  },
  toggleVoteForm (state, setState) {
    if (setState != null) {
      state.voteFormVisible = setState
      return
    }
    state.voteFormVisible = !state.voteFormVisible
  },
  toggleSendForm (state, setState) {
    if (setState != null) {
      state.sendFormVisible = setState
      return
    }
    state.sendFormVisible = !state.sendFormVisible
  },
  setDBHeight (state, blockHeight) {
    state.blockHeight = blockHeight
  },
  setLoadingState (state, loadingState) {
    state.loading = loadingState
  },
  setTransactionSending (state, sendingState) {
    state.transactionSending = sendingState
  },
  setFiatCurrency (state, currency) {
    state.fiatCurrency = currency
  },
  codeScanned (state, data) {
    state.qrScanner = {
      payload: data.value,
      action: data.action
    }
  },
  clearCodeScanned (state) {
    state.qrScanner = defaultScanner
  },
  setLedgerComm (state, comm) {
    state.ledgerComm = comm
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
