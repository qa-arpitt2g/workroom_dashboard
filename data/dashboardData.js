export const dashboardData = {
  stats: [
    {
      id: 1,
      title: "Total Tasks",
      value: "128",
      trend: "↑ 12%",
      trendLabel: "from last week",
      trendColor: "success",
      icon: "ClipboardList",
      accent: "#22C55E",
      chartData: [20, 25, 22, 30, 28, 35, 32]
    },
    {
      id: 2,
      title: "Completed Tasks",
      value: "89",
      trend: "↑ 18%",
      trendLabel: "from last week",
      trendColor: "success",
      icon: "CheckSquare",
      accent: "#22C55E",
      chartData: [15, 18, 22, 28, 26, 32, 38]
    },
    {
      id: 3,
      title: "In Progress",
      value: "28",
      trend: "↓ 5%",
      trendLabel: "from last week",
      trendColor: "danger",
      icon: "Clock",
      accent: "#F59E0B",
      chartData: [35, 30, 32, 25, 28, 22, 20]
    },
    {
      id: 4,
      title: "Total Hours Spent",
      value: "342h 45m",
      trend: "↑ 15%",
      trendLabel: "from last week",
      trendColor: "success",
      icon: "Clock",
      accent: "#8B5CF6",
      chartData: [20, 28, 25, 32, 30, 35, 38]
    }
  ],
  tasks: [
    {
      id: 1,
      name: "Dashboard UI Design",
      department: "Design",
      team: "UI/UX Team",
      status: "In Progress",
      hours: "12h 30m"
    },
    {
      id: 2,
      name: "API Integration",
      department: "Engineering",
      team: "Backend Team",
      status: "Completed",
      hours: "18h 45m"
    },
    {
      id: 3,
      name: "User Research",
      department: "Product",
      team: "Research Team",
      status: "Completed",
      hours: "8h 20m"
    },
    {
      id: 4,
      name: "Database Optimization",
      department: "Engineering",
      team: "DevOps Team",
      status: "In Progress",
      hours: "15h 10m"
    },
    {
      id: 5,
      name: "Marketing Campaign",
      department: "Marketing",
      team: "Content Team",
      status: "On Hold",
      hours: "6h 15m"
    }
  ],
  departments: [
    { name: "Engineering", value: 42, hours: "142h 30m", color: "#0F766E" },
    { name: "Design", value: 25, hours: "85h 15m", color: "#F59E0B" },
    { name: "Marketing", value: 16, hours: "56h 30m", color: "#8B5CF6" },
    { name: "Product", value: 11, hours: "38h 30m", color: "#3B82F6" },
    { name: "Others", value: 6, hours: "20h 0m", color: "#9CA3AF" }
  ],
  progress: [
    { name: "Completed", value: 69, count: 89, color: "#14B8A6" },
    { name: "In Progress", value: 22, count: 28, color: "#F59E0B" },
    { name: "On Hold", value: 5, count: 7, color: "#EF4444" },
    { name: "Not Started", value: 11, count: 14, color: "#9CA3AF" }
  ],
  trendData: [
    { name: "Wk 1", progress: 15 },
    { name: "Wk 2", progress: 35 },
    { name: "Wk 3", progress: 45 },
    { name: "Wk 4", progress: 60 },
    { name: "Wk 5", progress: 75 },
    { name: "Wk 6", progress: 89 }
  ]
};
