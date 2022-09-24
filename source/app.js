(function () {
  'use strict'

  var options = INSTALL_OPTIONS

  window._UST_CT = window._UST_CT || []
  window._UST = window._UST || { s: Date.now(), addTag: function(tag) { UST_CT.push(tag) }}

  if (!options.uxwizzdomain || !options.uxwizztrackingfile) {
    return
  }

  var domain = String(options.uxwizzdomain)
  var trackfile = String(options.uxwizztrackingfile)
  
  UST.addEvent = UST.addTag
  var datenow = Date.now()

  if (domain.indexOf('http') !== 0 && domain.indexOf('//') !== 0) {
    domain = 'https://' + domain
  }

  if (domain.charAt(domain.length - 1) !== '/') {
    domain = domain + '/'
  }

  var uxwizzVendorScript = document.createElement('script')
  var firstScriptOnPage = document.getElementsByTagName('script')[0]
  uxwizzVendorScript.src = domain + trackfile
  uxwizzVendorScript.async = true
  firstScriptOnPage.parentNode.insertBefore(uxwizzVendorScript, firstScriptOnPage)
}())
