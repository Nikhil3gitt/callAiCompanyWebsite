"use client"

import * as React from "react"
import { useState } from "react"
import { Calculator, TrendingUp, DollarSign } from "lucide-react"
import { calculateOptimalPrice } from "@/lib/demo-mocks"

export function PricingOptimizerDemo() {
  const [cost, setCost] = useState(50)
  const [margin, setMargin] = useState(30)
  const [elasticity, setElasticity] = useState(-1.5)

  const { price, volume } = calculateOptimalPrice(cost, margin, elasticity)
  const revenue = price * volume

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Calculator className="h-4 w-4" />
        <span>Pricing Optimizer Demo</span>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Cost per Unit: ${cost}
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={cost}
              onChange={(e) => setCost(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Target Margin: {margin}%
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Price Elasticity: {elasticity}
            </label>
            <input
              type="range"
              min="-3"
              max="-0.5"
              step="0.1"
              value={elasticity}
              onChange={(e) => setElasticity(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div className="p-3 bg-muted rounded-lg">
            <div className="flex items-center space-x-2 mb-1">
              <DollarSign className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Optimal Price</span>
            </div>
            <div className="text-2xl font-bold text-primary">
              ${price.toFixed(2)}
            </div>
          </div>

          <div className="p-3 bg-muted rounded-lg">
            <div className="flex items-center space-x-2 mb-1">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Projected Volume</span>
            </div>
            <div className="text-2xl font-bold text-accent">
              {volume.toLocaleString()} units
            </div>
          </div>

          <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="text-sm font-medium mb-1">Projected Revenue</div>
            <div className="text-2xl font-bold text-primary">
              ${revenue.toLocaleString()}
            </div>
            <div className="text-xs text-muted-foreground">
              Based on current elasticity model
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
