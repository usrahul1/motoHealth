"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/components/ui/use-toast"
import VehicleCard from "./vehicle-card"
import { useRouter } from "next/navigation"

const vehicles = [
  {
    id: 1,
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    image: "/images/tesla-model3.jpg",
    status: "Excellent",
    lastService: "2023-04-15",
    mileage: 12500,
    fuelLevel: 90,
    batteryHealth: 95,
  },
  {
    id: 2,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    image: "/images/toyota-camry.jpg",
    status: "Good",
    lastService: "2023-02-10",
    mileage: 18700,
    fuelLevel: 65,
    batteryHealth: 88,
  },
  {
    id: 3,
    make: "BMW",
    model: "X5",
    year: 2021,
    image: "/images/bmw-x5.jpg",
    status: "Good",
    lastService: "2023-01-05",
    mileage: 25400,
    fuelLevel: 45,
    batteryHealth: 82,
  },
]

export default function ProfilePage() {
  const { toast } = useToast()
  const router = useRouter()
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, San Francisco, CA 94105",
    password: "••••••••",
    notifications: true,
    darkMode: true,
    dataSharing: false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setProfileData({
      ...profileData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSaveProfile = () => {
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    })
  }

  const handleSaveSettings = () => {
    toast({
      title: "Settings updated",
      description: "Your account settings have been updated successfully.",
    })
  }

  const handleChangePassword = () => {
    toast({
      title: "Password changed",
      description: "Your password has been changed successfully.",
    })
  }

  const handleAddVehicle = () => {
    router.push("/dashboard/add-vehicle")
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-1/3 flex flex-col items-center p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg">
          <Avatar className="w-32 h-32 border-4 border-primary">
            <AvatarImage src="/images/profile-avatar.jpg" alt="User" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <h2 className="mt-4 text-2xl font-bold text-white">{profileData.name}</h2>
          <p className="text-slate-300">{profileData.email}</p>
          <div className="mt-6 w-full">
            <div className="flex justify-between text-slate-300 mb-2">
              <span>Member since</span>
              <span>Jan 2022</span>
            </div>
            <div className="flex justify-between text-slate-300 mb-2">
              <span>Vehicles</span>
              <span>{vehicles.length}</span>
            </div>
            <div className="flex justify-between text-slate-300 mb-2">
              <span>Last login</span>
              <span>Today</span>
            </div>
          </div>
          <Button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Edit Profile Picture
          </Button>
        </div>

        <div className="w-full md:w-2/3">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="vehicles">My Vehicles</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details here.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" value={profileData.name} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" value={profileData.phone} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" name="address" value={profileData.address} onChange={handleInputChange} />
                    </div>
                  </div>
                  <Button
                    className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={handleSaveProfile}
                  >
                    Save Changes
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                  <CardDescription>Update your password and security settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" defaultValue="••••••••" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  <Button
                    className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={handleChangePassword}
                  >
                    Change Password
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="vehicles" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>My Vehicles</CardTitle>
                  <CardDescription>Manage your registered vehicles.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {vehicles.map((vehicle) => (
                      <VehicleCard key={vehicle.id} vehicle={vehicle} showDetails={true} />
                    ))}
                  </div>
                  <Button
                    className="mt-6 w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={handleAddVehicle}
                  >
                    Add New Vehicle
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-muted-foreground">
                          Receive email notifications about your vehicles.
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="notifications" className="sr-only">
                          Email Notifications
                        </Label>
                        <input
                          type="checkbox"
                          id="notifications"
                          name="notifications"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          checked={profileData.notifications}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Dark Mode</h4>
                        <p className="text-sm text-muted-foreground">Enable dark mode for the application.</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="darkMode" className="sr-only">
                          Dark Mode
                        </Label>
                        <input
                          type="checkbox"
                          id="darkMode"
                          name="darkMode"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          checked={profileData.darkMode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Data Sharing</h4>
                        <p className="text-sm text-muted-foreground">
                          Share anonymous vehicle data to improve our services.
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="dataSharing" className="sr-only">
                          Data Sharing
                        </Label>
                        <input
                          type="checkbox"
                          id="dataSharing"
                          name="dataSharing"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          checked={profileData.dataSharing}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={handleSaveSettings}
                  >
                    Save Settings
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Danger Zone</CardTitle>
                  <CardDescription>Irreversible actions for your account.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Delete Account</h4>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all associated data.
                    </p>
                    <Button variant="destructive">Delete Account</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
