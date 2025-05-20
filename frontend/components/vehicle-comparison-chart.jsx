"use client"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
} from "@/components/ui/chart"
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from "recharts"

const data = [
  {
    name: "Fuel Efficiency",
    tesla: 100,
    toyota: 80,
    bmw: 55,
  },
  {
    name: "Maintenance Cost",
    tesla: 45,
    toyota: 65,
    bmw: 100,
  },
  {
    name: "Reliability",
    tesla: 85,
    toyota: 92,
    bmw: 78,
  },
  {
    name: "Performance",
    tesla: 95,
    toyota: 70,
    bmw: 85,
  },
  {
    name: "Comfort",
    tesla: 88,
    toyota: 82,
    bmw: 90,
  },
]

export default function VehicleComparisonChart() {
  return (
    <Chart>
      <ChartLegend className="mb-4">
        <ChartLegendItem className="text-blue-500" name="Tesla Model 3" />
        <ChartLegendItem className="text-green-500" name="Toyota Camry" />
        <ChartLegendItem className="text-purple-500" name="BMW X5" />
      </ChartLegend>
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <ChartTooltip>
                      <ChartTooltipContent
                        content={
                          <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium">{label}</p>
                            {payload.map((entry, index) => (
                              <div key={`tooltip-${index}`} className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
                                <p className="text-sm">
                                  {entry.name}: {entry.value}/100
                                </p>
                              </div>
                            ))}
                          </div>
                        }
                      />
                    </ChartTooltip>
                  )
                }
                return null
              }}
            />
            <Bar dataKey="tesla" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="toyota" fill="#22c55e" radius={[4, 4, 0, 0]} />
            <Bar dataKey="bmw" fill="#a855f7" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Chart>
  )
}
