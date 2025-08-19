import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import UserProfile from "@/components/social/user-profile"

export default async function ProfilePage() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login?redirectTo=/profile")
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <UserProfile user={user} />
    </div>
  )
}
