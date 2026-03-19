import MainLayout from '../layouts/MainLayout/MainLayout'
import LandingPage from '../pages/LandingPage/LandingPage'
import { navItems } from '../data/navigation'

function AppRoutes() {
  return (
    <MainLayout navItems={navItems}>
      <LandingPage />
    </MainLayout>
  )
}

export default AppRoutes
