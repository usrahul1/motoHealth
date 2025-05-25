"use client";

import { THEMES } from "../themes";
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
import { useThemeStore } from "../store/useThemeStore";

export default function SettingsContent() {
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [profilePic, setProfilePic] = useState(avatar);
	const [profile, setProfile] = useState(null);
	const firebase = useFirebase();
	const { theme, setTheme } = useThemeStore();

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
			<Tabs defaultValue="appearance" className="w-full">
				<TabsList className="grid w-full grid-cols-1 mb-6">
					<TabsTrigger value="appearance">Appearance</TabsTrigger>
				</TabsList>

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
									{/* <div className="grid grid-cols-3 gap-4">
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
									</div> */}
									<div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
										{THEMES.map((t) => (
											<button
												key={t}
												className={`
					group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
					${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
				  `}
												onClick={() => setTheme(t)}
											>
												<div
													className="relative h-8 w-full rounded-md overflow-hidden"
													data-theme={t}
												>
													<div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
														<div className="rounded bg-primary"></div>
														<div className="rounded bg-secondary"></div>
														<div className="rounded bg-accent"></div>
														<div className="rounded bg-neutral"></div>
													</div>
												</div>
												<span className="text-[11px] font-medium truncate w-full text-center">
													{t.charAt(0).toUpperCase() + t.slice(1)}
												</span>
											</button>
										))}
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
