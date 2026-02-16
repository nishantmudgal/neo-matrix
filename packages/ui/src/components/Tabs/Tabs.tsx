import React, { useState } from 'react'
import './Tabs.css'

export type TabItem = {
    id: string
    label: string
    content: React.ReactNode
}

export type TabsProps = {
    tabs: TabItem[]
    defaultTabId?: string
    className?: string
}

export function Tabs({ tabs, defaultTabId, className = '', ...props }: TabsProps) {
    const [activeTabId, setActiveTabId] = useState(defaultTabId || tabs[0]?.id)

    const activeTab = tabs.find((tab) => tab.id === activeTabId)

    return (
        <div className={`nm-tabs ${className}`} {...props}>
            <div className="nm-tabs-list">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className="nm-tabs-trigger"
                        data-active={activeTabId === tab.id}
                        onClick={() => setActiveTabId(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="nm-tabs-content">
                {activeTab?.content}
            </div>
        </div>
    )
}
