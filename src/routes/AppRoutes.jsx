import MainLayout from '../layouts/MainLayout/MainLayout'
import LandingPage from '../pages/LandingPage/LandingPage'
import { navItems } from '../data/navigation'
import { useEffect, useState } from 'react'
import ExperiencePage from '../pages/ExperiencePage/ExperiencePage'

function AppRoutes() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const update = () => setHash(window.location.hash)
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  const isDetail = hash.startsWith('#/')
  const slug = hash.startsWith('#/experiencias/') ? hash.slice('#/experiencias/'.length) : ''
  return (
    <MainLayout navItems={navItems} isDetail={isDetail} routeKey={isDetail ? hash : 'home'}>
      {isDetail ? <ExperiencePage slug={slug} /> : <LandingPage />}
    </MainLayout>
  )
}

export default AppRoutes
