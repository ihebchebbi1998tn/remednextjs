'use client'
import { sendGTMEvent } from '@next/third-parties/google'
import { useEffect } from 'react'


export interface WebAnalyticsProps {
  event: string
  value: string
}

export function WebAnalytics({
  event,
  value,
 }: WebAnalyticsProps) {


  useEffect(() => {
      sendGTMEvent({ event, value })
  }, [event, value])


  return null
  
}

export default WebAnalytics
