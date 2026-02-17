import { useState } from "react";
import { Users, TrendingUp, Clock, UserCheck, Search } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import { AddEmployeeDialog, Employee } from "@/components/AddEmployeeDialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const initialEmployees: Employee[] = [
  { id: 1, name: "Sarah Chen", email: "sarah@company.com", role: "Lead Developer", department: "Engineering", status: "Active", avatar: "SC" },
  { id: 2, name: "Marcus Johnson", email: "marcus@company.com", role: "UI Designer", department: "Design", status: "Remote", avatar: "MJ" },
  { id: 3, name: "Emily Rodriguez", email: "emily@company.com", role: "Product Manager", department: "Engineering", status: "Active", avatar: "ER" },
  { id: 4, name: "David Kim", email: "david@company.com", role: "Marketing Lead", department: "Marketing", status: "On Leave", avatar: "DK" },
  { id: 5, name: "Lisa Wang", email: "lisa@company.com", role: "HR Manager", department: "HR", status: "Active", avatar: "LW" },
  { id: 6, name: "James Carter", email: "james@company.com", role: "Sales Director", department: "Sales", status: "Active", avatar: "JC" },
];

const statusVariant: Record<string, string> = {
  Active: "bg-success/10 text-success border-success/20",
  "On Leave": "bg-warning/10 text-warning-foreground border-warning/20",
  Remote: "bg-primary/10 text-primary border-primary/20",
};

export default function DashboardPage() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [search, setSearch] = useState("");

  const filtered = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.role.toLowerCase().includes(search.toLowerCase()) ||
      e.department.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = (emp: Omit<Employee, "id" | "avatar">) => {
    const initials = emp.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
    setEmployees((prev) => [
      ...prev,
      { ...emp, id: Date.now(), avatar: initials },
    ]);
  };

  return (
    <div className="flex-1 min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-sm border-b px-6 py-4 md:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back, here's what's happening today.</p>
          </div>
          <AddEmployeeDialog onAdd={handleAdd} />
        </div>
      </header>

      <main className="p-6 md:p-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard title="Total Employees" value={employees.length} change="+3 this month" changeType="positive" icon={Users} />
          <StatsCard title="Active Now" value={employees.filter((e) => e.status === "Active").length} change="92% attendance" changeType="positive" icon={UserCheck} />
          <StatsCard title="On Leave" value={employees.filter((e) => e.status === "On Leave").length} change="2 returning soon" changeType="neutral" icon={Clock} />
          <StatsCard title="Departments" value={new Set(employees.map((e) => e.department)).size} change="All operational" changeType="positive" icon={TrendingUp} />
        </div>

        {/* Employee Table */}
        <div className="rounded-xl border bg-card shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-6 border-b">
            <h2 className="text-lg font-semibold text-card-foreground">Employee Directory</h2>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search employees..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead className="hidden md:table-cell">Role</TableHead>
                <TableHead className="hidden sm:table-cell">Department</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((emp) => (
                <TableRow key={emp.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                        {emp.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">{emp.name}</p>
                        <p className="text-xs text-muted-foreground">{emp.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">{emp.role}</TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">{emp.department}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={statusVariant[emp.status]}>
                      {emp.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                    No employees found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
