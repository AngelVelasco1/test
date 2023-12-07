import { DashboardView } from '../views/DashboardView'
import { SidebarView } from '../views/SidebarView'

export const Home: React.FC = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row w-screen '>
        <SidebarView />
        <DashboardView />
      </div>
    </>
  )
}
