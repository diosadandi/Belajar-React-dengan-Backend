import { HashRouter, Route, Routes } from "react-router-dom"
import OutletPage from "./outlets/OutletPage"
import PageBarangList from "./pages/barang/PageBarangList"
import PageBarangCreate from "./pages/barang/PageBarangCreate"
import PageBarangDetail from "./pages/barang/PageBarangDetail"
import { useState } from "react"
import { ContextApplication } from "./libs/config/contexts"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <ContextApplication.Provider value={{isAuthenticated, setIsAuthenticated}}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<OutletPage />}>
            <Route index={true} element={<PageBarangList />} />
            <Route path={"new"} element={<PageBarangCreate />} />
            <Route path={"detail"} element={<PageBarangDetail />} />
          </Route>
        </Routes>
      </HashRouter>
    </ContextApplication.Provider>
  )
}

export default App
