import React from 'react'

const OpenContext = React.createContext()

export function OpenProvider(props) {
  const [isOpen, setIsOpen] = React.useState(false)

  const value = React.useMemo(() => {
    return ({
      isOpen,
      setIsOpen
    })
  }, [isOpen, setIsOpen])

  return <OpenContext.Provider value={value} {...props} />
}

export function useOpen() {
  const context = React.useContext(OpenContext)
  if (!context) {
    throw new Error('Error');
  }
  return context;
}