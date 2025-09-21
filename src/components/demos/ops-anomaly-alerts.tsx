"use client"

import * as React from "react"
import { useState } from "react"
import { AlertTriangle, CheckCircle, Activity } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { demoData, detectAnomaly } from "@/lib/demo-mocks"

export function OpsAnomalyAlertsDemo() {
  const [isSimulating, setIsSimulating] = useState(false)
  const [hasAnomaly, setHasAnomaly] = useState(false)
  const [currentData, setCurrentData] = useState(demoData.opsAnomalyAlerts.normalData)

  const handleSimulateSpike = async () => {
    setIsSimulating(true)
    
    // Simulate gradual change
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setCurrentData(demoData.opsAnomalyAlerts.spikeData)
    setHasAnomaly(true)
    setIsSimulating(false)
  }

  const handleReset = () => {
    setCurrentData(demoData.opsAnomalyAlerts.normalData)
    setHasAnomaly(false)
  }

  const anomalyDetected = detectAnomaly(currentData)

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Activity className="h-4 w-4" />
        <span>Anomaly Detection Demo</span>
      </div>
      
      <div className="space-y-4">
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={currentData}>
              <XAxis 
                dataKey="timestamp" 
                tick={false}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 10 }}
                tickLine={false}
                axisLine={false}
                domain={[0, 300]}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={anomalyDetected ? "#ef4444" : "#4F46E5"}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {anomalyDetected ? (
              <>
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <span className="text-sm font-medium text-red-500">Alert: Anomaly Detected</span>
              </>
            ) : (
              <>
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-green-500">No Anomaly</span>
              </>
            )}
          </div>
          
          <div className="text-xs text-muted-foreground">
            Threshold: 2σ
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleSimulateSpike}
            disabled={isSimulating || hasAnomaly}
            className="flex-1 px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSimulating ? "Simulating..." : "Simulate Spike"}
          </button>
          
          {hasAnomaly && (
            <button
              onClick={handleReset}
              className="px-3 py-2 text-sm border border-input rounded-md hover:bg-muted transition-colors"
            >
              Reset
            </button>
          )}
        </div>

        {anomalyDetected && (
          <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
            <div className="text-sm">
              <div className="font-medium text-red-800 dark:text-red-200 mb-1">
                Anomaly Alert
              </div>
              <div className="text-red-700 dark:text-red-300">
                Unusual spike detected in system metrics. Current value exceeds normal range by 2.5 standard deviations.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
