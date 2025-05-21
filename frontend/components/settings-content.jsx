"use client";

import { useState, useEffect } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import {
	Bell,
	Shield,
	Smartphone,
	Globe,
	Moon,
	Sun,
	UserCog,
	Lock,
	Mail,
	MessageSquare,
	BellOff,
} from "lucide-react";
import { useFirebase } from "@/context/Firebase";
import avatar from "../public/images/profile-avatar.jpg";

export default function SettingsContent() {
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [profilePic, setProfilePic] = useState(avatar);
	const [profile, setProfile] = useState(null);
	const firebase = useFirebase();

	useEffect(() => {
		const details = firebase.profDetails();
		if (details) {
			console.log("details are: ", details);
			setProfile(details);
			if (details.photoURL != null) setProfilePic(details.photoURL);
		}
	}, [firebase]);

	const [settings, setSettings] = useState({
		// Notification settings
		emailNotifications: true,
		pushNotifications: false,
		maintenanceReminders: true,
		serviceAlerts: true,
		weeklyReports: false,

		// Appearance settings
		theme: "dark",
		colorScheme: "blue",
		reducedMotion: false,

		// Privacy settings
		dataSharing: false,
		locationTracking: true,
		analytics: true,

		// Account settings
		email: "alex.johnson@example.com",
		phone: "+1 (555) 123-4567",
		language: "english",
		timezone: "America/Los_Angeles",
	});

	const handleSwitchChange = (name) => {
		setSettings({
			...settings,
			[name]: !settings[name],
		});
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setSettings({
			...settings,
			[name]: value,
		});
	};

	const handleRadioChange = (name, value) => {
		setSettings({
			...settings,
			[name]: value,
		});
	};

	const handleSaveSettings = (section) => {
		setIsSubmitting(true);

		// Simulate API call
		setTimeout(() => {
			setIsSubmitting(false);
			toast({
				title: "Settings Updated",
				description: `Your ${section} settings have been updated successfully.`,
			});
		}, 1000);
	};

	return (
		<div className="container mx-auto p-4 space-y-6">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Settings</h1>
			</div>

			<Tabs defaultValue="notifications" className="w-full">
				<TabsList className="grid w-full grid-cols-4 mb-6">
					<TabsTrigger value="notifications">Notifications</TabsTrigger>
					<TabsTrigger value="appearance">Appearance</TabsTrigger>
					<TabsTrigger value="privacy">Privacy</TabsTrigger>
					<TabsTrigger value="account">Account</TabsTrigger>
				</TabsList>

				<TabsContent value="notifications" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Bell className="h-5 w-5" />
								Notification Settings
							</CardTitle>
							<CardDescription>
								Manage how you receive notifications and alerts
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="flex items-start gap-3">
										<Mail className="h-5 w-5 mt-0.5 text-muted-foreground" />
										<div>
											<h4 className="font-medium">Email Notifications</h4>
											<p className="text-sm text-muted-foreground">
												Receive email notifications about your vehicles
											</p>
										</div>
									</div>
									<Switch
										checked={settings.emailNotifications}
										onCheckedChange={() =>
											handleSwitchChange("emailNotifications")
										}
									/>
								</div>

								<div className="flex items-center justify-between">
									<div className="flex items-start gap-3">
										<Smartphone className="h-5 w-5 mt-0.5 text-muted-foreground" />
										<div>
											<h4 className="font-medium">Push Notifications</h4>
											<p className="text-sm text-muted-foreground">
												Receive push notifications on your devices
											</p>
										</div>
									</div>
									<Switch
										checked={settings.pushNotifications}
										onCheckedChange={() =>
											handleSwitchChange("pushNotifications")
										}
									/>
								</div>

								<div className="flex items-center justify-between">
									<div className="flex items-start gap-3">
										<Bell className="h-5 w-5 mt-0.5 text-muted-foreground" />
										<div>
											<h4 className="font-medium">Maintenance Reminders</h4>
											<p className="text-sm text-muted-foreground">
												Get reminders about upcoming maintenance
											</p>
										</div>
									</div>
									<Switch
										checked={settings.maintenanceReminders}
										onCheckedChange={() =>
											handleSwitchChange("maintenanceReminders")
										}
									/>
								</div>

								<div className="flex items-center justify-between">
									<div className="flex items-start gap-3">
										<Shield className="h-5 w-5 mt-0.5 text-muted-foreground" />
										<div>
											<h4 className="font-medium">Service Alerts</h4>
											<p className="text-sm text-muted-foreground">
												Receive alerts about critical service needs
											</p>
										</div>
									</div>
									<Switch
										checked={settings.serviceAlerts}
										onCheckedChange={() => handleSwitchChange("serviceAlerts")}
									/>
								</div>

								<div className="flex items-center justify-between">
									<div className="flex items-start gap-3">
										<MessageSquare className="h-5 w-5 mt-0.5 text-muted-foreground" />
										<div>
											<h4 className="font-medium">Weekly Reports</h4>
											<p className="text-sm text-muted-foreground">
												Get weekly summary reports of your vehicles
											</p>
										</div>
									</div>
									<Switch
										checked={settings.weeklyReports}
										onCheckedChange={() => handleSwitchChange("weeklyReports")}
									/>
								</div>
							</div>

							<div className="pt-4">
								<Button
									className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
									onClick={() => handleSaveSettings("notification")}
									disabled={isSubmitting}
								>
									{isSubmitting ? "Saving..." : "Save Notification Settings"}
								</Button>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<BellOff className="h-5 w-5" />
								Do Not Disturb
							</CardTitle>
							<CardDescription>
								Set times when you don't want to receive notifications
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="dnd-start">Start Time</Label>
									<Input id="dnd-start" type="time" defaultValue="22:00" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="dnd-end">End Time</Label>
									<Input id="dnd-end" type="time" defaultValue="07:00" />
								</div>
							</div>

							<div className="flex items-center space-x-2 pt-2">
								<input
									type="checkbox"
									id="dnd-enabled"
									className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
									defaultChecked={true}
								/>
								<Label htmlFor="dnd-enabled">
									Enable Do Not Disturb schedule
								</Label>
							</div>

							<div className="pt-2">
								<Button
									variant="outline"
									onClick={() => handleSaveSettings("do not disturb")}
								>
									Save Schedule
								</Button>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="appearance" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Sun className="h-5 w-5" />
								<Moon className="h-5 w-5" />
								Theme Settings
							</CardTitle>
							<CardDescription>
								Customize the appearance of your dashboard
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-4">
								<div>
									<h4 className="font-medium mb-3">Theme Mode</h4>
									<div className="grid grid-cols-3 gap-4">
										<div
											className={`border rounded-lg p-4 cursor-pointer flex flex-col items-center ${
												settings.theme === "light"
													? "border-primary bg-primary/10"
													: "border-border"
											}`}
											onClick={() => handleRadioChange("theme", "light")}
										>
											<Sun className="h-8 w-8 mb-2" />
											<span>Light</span>
										</div>
										<div
											className={`border rounded-lg p-4 cursor-pointer flex flex-col items-center ${
												settings.theme === "dark"
													? "border-primary bg-primary/10"
													: "border-border"
											}`}
											onClick={() => handleRadioChange("theme", "dark")}
										>
											<Moon className="h-8 w-8 mb-2" />
											<span>Dark</span>
										</div>
										<div
											className={`border rounded-lg p-4 cursor-pointer flex flex-col items-center ${
												settings.theme === "system"
													? "border-primary bg-primary/10"
													: "border-border"
											}`}
											onClick={() => handleRadioChange("theme", "system")}
										>
											<div className="flex h-8 mb-2">
												<Sun className="h-8 w-8" />
												<Moon className="h-8 w-8" />
											</div>
											<span>System</span>
										</div>
									</div>
								</div>

								<div>
									<h4 className="font-medium mb-3">Color Scheme</h4>
									<div className="grid grid-cols-4 gap-4">
										<div
											className={`border rounded-lg p-3 cursor-pointer flex items-center justify-center ${
												settings.colorScheme === "blue"
													? "border-primary bg-primary/10"
													: "border-border"
											}`}
											onClick={() => handleRadioChange("colorScheme", "blue")}
										>
											<div className="h-8 w-8 rounded-full bg-blue-500"></div>
										</div>
										<div
											className={`border rounded-lg p-3 cursor-pointer flex items-center justify-center ${
												settings.colorScheme === "purple"
													? "border-primary bg-primary/10"
													: "border-border"
											}`}
											onClick={() => handleRadioChange("colorScheme", "purple")}
										>
											<div className="h-8 w-8 rounded-full bg-purple-500"></div>
										</div>
										<div
											className={`border rounded-lg p-3 cursor-pointer flex items-center justify-center ${
												settings.colorScheme === "green"
													? "border-primary bg-primary/10"
													: "border-border"
											}`}
											onClick={() => handleRadioChange("colorScheme", "green")}
										>
											<div className="h-8 w-8 rounded-full bg-green-500"></div>
										</div>
										<div
											className={`border rounded-lg p-3 cursor-pointer flex items-center justify-center ${
												settings.colorScheme === "orange"
													? "border-primary bg-primary/10"
													: "border-border"
											}`}
											onClick={() => handleRadioChange("colorScheme", "orange")}
										>
											<div className="h-8 w-8 rounded-full bg-orange-500"></div>
										</div>
									</div>
								</div>

								<div className="flex items-center justify-between pt-2">
									<div>
										<h4 className="font-medium">Reduced Motion</h4>
										<p className="text-sm text-muted-foreground">
											Minimize animations and transitions
										</p>
									</div>
									<Switch
										checked={settings.reducedMotion}
										onCheckedChange={() => handleSwitchChange("reducedMotion")}
									/>
								</div>
							</div>

							<div className="pt-4">
								<Button
									className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
									onClick={() => handleSaveSettings("appearance")}
									disabled={isSubmitting}
								>
									{isSubmitting ? "Saving..." : "Save Appearance Settings"}
								</Button>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="privacy" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Shield className="h-5 w-5" />
								Privacy Settings
							</CardTitle>
							<CardDescription>
								Manage your data privacy and security preferences
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div>
										<h4 className="font-medium">Data Sharing</h4>
										<p className="text-sm text-muted-foreground">
											Share anonymous vehicle data to improve our services
										</p>
									</div>
									<Switch
										checked={settings.dataSharing}
										onCheckedChange={() => handleSwitchChange("dataSharing")}
									/>
								</div>

								<div className="flex items-center justify-between">
									<div>
										<h4 className="font-medium">Location Tracking</h4>
										<p className="text-sm text-muted-foreground">
											Allow location tracking for vehicle services
										</p>
									</div>
									<Switch
										checked={settings.locationTracking}
										onCheckedChange={() =>
											handleSwitchChange("locationTracking")
										}
									/>
								</div>

								<div className="flex items-center justify-between">
									<div>
										<h4 className="font-medium">Analytics</h4>
										<p className="text-sm text-muted-foreground">
											Allow usage analytics to improve user experience
										</p>
									</div>
									<Switch
										checked={settings.analytics}
										onCheckedChange={() => handleSwitchChange("analytics")}
									/>
								</div>
							</div>

							<div className="pt-4">
								<Button
									className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
									onClick={() => handleSaveSettings("privacy")}
									disabled={isSubmitting}
								>
									{isSubmitting ? "Saving..." : "Save Privacy Settings"}
								</Button>
							</div>

							<div className="border-t pt-6 mt-6">
								<h4 className="font-medium mb-4">Data Management</h4>
								<div className="space-y-4">
									<Button variant="outline" className="w-full sm:w-auto">
										Download My Data
									</Button>
									<Button variant="destructive" className="w-full sm:w-auto">
										Delete All My Data
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="account" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<UserCog className="h-5 w-5" />
								Account Settings
							</CardTitle>
							<CardDescription>
								Manage your account information and preferences
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="account-email">Email Address</Label>
									<Input
										id="account-email"
										name="email"
										type="email"
										value={profile?.name || "Loading..."}
										onChange={handleInputChange}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="account-phone">Phone Number</Label>
									<Input
										id="account-phone"
										name="phone"
										value={profile?.number || "NULL"}
										onChange={handleInputChange}
									/>
								</div>
							</div>

							<div className="pt-4">
								<Button
									className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
									onClick={() => handleSaveSettings("account")}
									disabled={isSubmitting}
								>
									{isSubmitting ? "Saving..." : "Save Account Settings"}
								</Button>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Lock className="h-5 w-5" />
								Security
							</CardTitle>
							<CardDescription>
								Manage your account security settings
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-4">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="current-password">Current Password</Label>
										<Input id="current-password" type="password" />
									</div>
									<div></div>
									<div className="space-y-2">
										<Label htmlFor="new-password">New Password</Label>
										<Input id="new-password" type="password" />
									</div>
									<div className="space-y-2">
										<Label htmlFor="confirm-password">
											Confirm New Password
										</Label>
										<Input id="confirm-password" type="password" />
									</div>
								</div>

								<div className="pt-2">
									<Button variant="outline">Change Password</Button>
								</div>
							</div>

							<div className="border-t pt-6 mt-6">
								<h4 className="font-medium mb-4">Connected Devices</h4>
								<div className="space-y-4">
									<div className="flex justify-between items-center p-3 border rounded-lg">
										<div className="flex items-center gap-3">
											<Smartphone className="h-5 w-5 text-muted-foreground" />
											<div>
												<h5 className="font-medium">iPhone 13 Pro</h5>
												<p className="text-xs text-muted-foreground">
													Last active: Today
												</p>
											</div>
										</div>
										<Button variant="ghost" size="sm">
											Revoke
										</Button>
									</div>
									<div className="flex justify-between items-center p-3 border rounded-lg">
										<div className="flex items-center gap-3">
											<Globe className="h-5 w-5 text-muted-foreground" />
											<div>
												<h5 className="font-medium">Chrome on MacBook Pro</h5>
												<p className="text-xs text-muted-foreground">
													Last active: Yesterday
												</p>
											</div>
										</div>
										<Button variant="ghost" size="sm">
											Revoke
										</Button>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
