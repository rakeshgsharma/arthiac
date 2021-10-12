import React, { useEffect } from 'react'

const AdBanner = () => {
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <>
      <ins
        className="adsbygoogle adbanner-customize"
        style={{
          display: 'block',
        }}
        data-ad-client="7562980080729916"
        data-ad-slot=""
      />
    </>
  )
}

export default AdBanner
