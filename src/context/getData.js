import React from 'react'

const DataContext = React.createContext()
const url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=31260be2bc7380f8b5a7b72012706a93&hash=5aaa7887ae87c22f886dfc36de35825d'

export function DataPropvider(props) {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data.data.results))
  }, [])

  const value = React.useMemo(() => {
    return ({
      data
    })
  }, [data])

  return <DataContext.Provider value={value} {...props} />
}

export function useData() {
  const context = React.useContext(DataContext)
  if (!context) {
    throw new Error('Error');
  }
  return context;
}