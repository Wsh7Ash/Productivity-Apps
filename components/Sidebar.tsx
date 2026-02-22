import Link from 'next/link'
import { 
  Clock, 
  LayoutDashboard, 
  FileText, 
  Receipt,
  Settings 
} from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Time Tracker', icon: Clock, path: '/time-tracker' },
    { name: 'Invoices', icon: FileText, path: '/invoices' },
    { name: 'Expenses', icon: Receipt, path: '/expenses' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ]

  return (
    <div className="w-64 bg-gray-900 text-white p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Productivity Suite</h1>
      </div>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg mb-1"
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar 