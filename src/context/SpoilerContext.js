import React, { createContext, useEffect, useState } from "react"

const LOCAL_STORAGE_KEY = "showSpoilers"

const defaultState = {
  showSpoilers: false,
  toggleSpoilers: () => {},
}

const SpolierContext = createContext(defaultState)

export const SpoilerProvider = ({ children }) => {
  const [showSpoilers, setShowSpoilers] = useState(false)
  useEffect(() => {
    setShowSpoilers(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? false
    )
  }, [])

  const toggleSpoilers = () =>
    setShowSpoilers(show => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(!show))
      return !show
    })

  return (
    <SpolierContext.Provider value={{ showSpoilers, toggleSpoilers }}>
      {children}
    </SpolierContext.Provider>
  )
}

export default SpolierContext
