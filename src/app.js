;(function() {
  const options = INSTALL_OPTIONS
  const UST_CT = []
  const UST = {
    s: Date.now(),
    addTag(tag) {
      UST_CT.push(tag)
    },
  }

  window.UST_CT = window.UST_CT || []
  window.UST = window.UST || {
    s: Date.now(),
    addTag(tag) {
      UST_CT.push(tag)
    },
  }

  if (!options.uxwizzdomain || !options.uxwizztrackingfile) {
    return
  }

  let domain = String(options.uxwizzdomain)
  const trackfile = String(options.uxwizztrackingfile)

  UST.addEvent = UST.addTag
  const datenow = Date.now()

  if (domain.indexOf("http") !== 0 && domain.indexOf("//") !== 0) {
    domain = `https://${domain}`
  }

  if (domain.charAt(domain.length - 1) !== "/") {
    domain += "/"
  }

  const uxwizzVendorScript = document.createElement("script")
  const firstScriptOnPage = document.getElementsByTagName("script")[0]
  uxwizzVendorScript.src = domain + trackfile
  uxwizzVendorScript.async = true
  firstScriptOnPage.parentNode.insertBefore(
    uxwizzVendorScript,
    firstScriptOnPage,
  )
})()
