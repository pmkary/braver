/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict'

const os = require('os')

/**
 * Get list of styles which should be applied to root window div
 * return array of strings (each being a class name)
 */
module.exports.getPlatformStyles = () => {
  const platform = os.platform()
  const styleList = ['platform--' + platform]

  switch (platform) {
    case 'win32':
      if (/6.1./.test(os.release())) {
        styleList.push('win7')
      } else {
        styleList.push('win10')
      }
  }

  return styleList
}

module.exports.isDarwin = () => {
  return os.platform() === 'darwin'
}

module.exports.isWindows = () => {
  return os.platform() === 'win32'
}
