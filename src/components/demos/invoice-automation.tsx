"use client"

import * as React from "react"
import { useState } from "react"
import { Upload, FileText, CheckCircle } from "lucide-react"
import { demoData } from "@/lib/demo-mocks"

export function InvoiceAutomationDemo() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isProcessed, setIsProcessed] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)
    
    if (isProcessing) return
    
    setIsProcessing(true)
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsProcessed(true)
    setIsProcessing(false)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(true)
  }

  const handleDragLeave = () => {
    setDragActive(false)
  }

  const resetDemo = () => {
    setIsProcessed(false)
    setIsProcessing(false)
  }

  if (isProcessed) {
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <FileText className="h-4 w-4" />
          <span>Invoice Processing Complete</span>
        </div>
        
        <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
          <div className="flex items-center space-x-2 mb-3">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="font-medium text-green-800 dark:text-green-200">Successfully Processed</span>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Vendor:</span>
              <span className="font-medium">{demoData.invoiceAutomation.sampleData.vendor}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total:</span>
              <span className="font-medium">${demoData.invoiceAutomation.sampleData.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date:</span>
              <span className="font-medium">{demoData.invoiceAutomation.sampleData.date}</span>
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-800">
            <div className="text-sm font-medium mb-2">Items:</div>
            <div className="space-y-1">
              {demoData.invoiceAutomation.sampleData.items.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{item.description}</span>
                  <span>${item.amount.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <button
          onClick={resetDemo}
          className="w-full text-sm text-primary hover:text-primary/80 transition-colors"
        >
          Try Another Invoice
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <FileText className="h-4 w-4" />
        <span>Invoice OCR Demo</span>
      </div>
      
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive 
            ? 'border-primary bg-primary/5' 
            : 'border-muted-foreground/25 hover:border-primary/50'
        } ${isProcessing ? 'pointer-events-none opacity-50' : ''}`}
      >
        {isProcessing ? (
          <div className="space-y-3">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <div className="text-sm text-muted-foreground">Processing invoice...</div>
          </div>
        ) : (
          <div className="space-y-3">
            <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
            <div className="text-sm font-medium">Drop invoice PDF or image here</div>
            <div className="text-xs text-muted-foreground">
              Supports PDF, PNG, JPG formats
            </div>
            <div className="text-xs text-muted-foreground">
              (Demo will process sample data)
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
