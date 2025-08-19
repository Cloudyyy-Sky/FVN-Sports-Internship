import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import AdminDashboard from "@/components/admin/admin-dashboard"

export default async function AdminPage() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Redirect to login if not authenticated
  if (!user) {
    redirect("/auth/login?redirectTo=/admin")
  }

  // In a real app, you'd check if user has admin role
  // For demo purposes, we'll allow any authenticated user to access admin

  return (
    <div className="min-h-screen bg-gray-900">
      <AdminDashboard user={user} />
    </div>
  )
}
