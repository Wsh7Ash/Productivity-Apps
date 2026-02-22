const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Hours Tracked"
        value="32.5"
        unit="hrs"
        trend="+2.5"
      />
      <StatCard
        title="Active Projects"
        value="4"
        trend="+1"
      />
      <StatCard
        title="Pending Invoices"
        value="$3,250"
        trend="+$750"
      />
      <StatCard
        title="Monthly Expenses"
        value="$1,200"
        trend="-$200"
      />
    </div>
  )
}

const StatCard = ({ 
  title, 
  value, 
  unit = '', 
  trend 
}: { 
  title: string
  value: string
  unit?: string
  trend: string
}) => {
  const isPositive = trend.startsWith('+')
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold">{value}{unit}</p>
        <span className={`ml-2 text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {trend}
        </span>
      </div>
    </div>
  )
}

export default DashboardStats 