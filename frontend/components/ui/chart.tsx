"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {}

const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("space-y-3", className)} {...props} />
	)
);
Chart.displayName = "Chart";

const ChartContainer = React.forwardRef<HTMLDivElement, ChartProps>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("h-[350px]", className)} {...props} />
	)
);
ChartContainer.displayName = "ChartContainer";

const ChartTitle = React.forwardRef<HTMLHeadingElement, ChartProps>(
	({ className, ...props }, ref) => (
		<h3
			ref={ref}
			className={cn("font-semibold tracking-tight", className)}
			{...props}
		/>
	)
);
ChartTitle.displayName = "ChartTitle";

const ChartDescription = React.forwardRef<HTMLParagraphElement, ChartProps>(
	({ className, ...props }, ref) => (
		<p
			ref={ref}
			className={cn("text-sm text-muted-foreground", className)}
			{...props}
		/>
	)
);
ChartDescription.displayName = "ChartDescription";

const ChartHeader = React.forwardRef<HTMLDivElement, ChartProps>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn("flex flex-col space-y-1.5", className)}
			{...props}
		/>
	)
);
ChartHeader.displayName = "ChartHeader";

const ChartLegend = React.forwardRef<HTMLDivElement, ChartProps>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn("flex flex-wrap items-center gap-4", className)}
			{...props}
		/>
	)
);
ChartLegend.displayName = "ChartLegend";

interface ChartLegendItemProps extends React.HTMLAttributes<HTMLDivElement> {
	name: string;
	color?: string; // You may want to use this for inline styles or classNames
}

const ChartLegendItem = React.forwardRef<HTMLDivElement, ChartLegendItemProps>(
	({ className, name, color, ...props }, ref) => (
		<div
			ref={ref}
			className={cn("flex items-center gap-2", className)}
			{...props}
		>
			<div
				className={cn("h-2 w-2 rounded-full", className)}
				style={{ backgroundColor: color }}
			/>
			<span className="text-sm font-medium">{name}</span>
		</div>
	)
);
ChartLegendItem.displayName = "ChartLegendItem";

const ChartTooltip = React.forwardRef<HTMLDivElement, ChartProps>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn("rounded-lg border bg-background p-2 shadow-md", className)}
			{...props}
		/>
	)
);
ChartTooltip.displayName = "ChartTooltip";

interface ChartTooltipContentProps
	extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
}

const ChartTooltipContent = React.forwardRef<
	HTMLDivElement,
	ChartTooltipContentProps
>(({ className, children, ...props }, ref) => (
	<div ref={ref} className={cn("flex flex-col gap-1", className)} {...props}>
		{children}
	</div>
));
ChartTooltipContent.displayName = "ChartTooltipContent";

export {
	Chart,
	ChartContainer,
	ChartDescription,
	ChartHeader,
	ChartLegend,
	ChartLegendItem,
	ChartTitle,
	ChartTooltip,
	ChartTooltipContent,
};
