"use client"

import * as React from "react"
import { useState } from "react"
import { TrendingUp, BarChart3 } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { demoData } from "@/lib/demo-mocks"

export function DemandForecastDemo() {
  const [selectedCategory, setSelectedCategory] = useState(demoData.demandForecast.categories[0])

  const currentData = demoData.demandForecast.data[selectedCategory]
  const forecastValue = currentData[currentData.length - 1].demand

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <BarChart3 className="h-4 w-4" />
        <span>Demand Forecasting Demo</span>
      </div>
      
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium mb-2 block">Product Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {demoData.demandForecast.categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={currentData}>
              <XAxis 
                dataKey="week" 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                domain={['dataMin - 10', 'dataMax + 10']}
              />
              <Line
                type="monotone"
                dataKey="demand"
                stroke="#4F46E5"
                strokeWidth={2}
                dot={{ fill: "#4F46E5", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "#4F46E5", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="p-3 bg-muted rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Next 4 Weeks Forecast</span>
          </div>
          <div className="text-2xl font-bold text-primary">
            {forecastValue} units
          </div>
          <div className="text-xs text-muted-foreground">
            Based on historical trends and seasonality
          </div>
        </div>
      </div>
    </div>
  )
}
