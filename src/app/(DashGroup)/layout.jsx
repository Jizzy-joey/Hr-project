import DashNav from "../component/DasNav";

export default function DashboardGroup({ children }) {
  return (
    <div>
      <DashNav />
        {children}
    </div>
  )
}
