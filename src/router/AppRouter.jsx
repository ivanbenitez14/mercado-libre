import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { MeliRoutes } from '../meli/routes/MeliRoutes'

export const AppRouter = () => {
  return (
    <Routes>

      <Route path="/auth/*" element={ <AuthRoutes />} />

      <Route path="/*" element={ <MeliRoutes />} />
        
    </Routes>
  )
}
