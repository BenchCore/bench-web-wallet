import * as bexjs from 'bexjs'
import store from '../store'

/**
 * Get address from passphrase
 * @param {string} - Passphrase
 * @return {string} Account address
 */
export const getAddressFromPass = (passphrase) => {
  bexjs.bcorejs.crypto.setNetworkVersion(store.getters.networkType.version)
  const keys = bexjs.bcorejs.crypto.getKeys(passphrase)
  return bexjs.bcorejs.crypto.getAddress(keys.publicKey)
}
