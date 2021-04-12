import React, { createContext, useState, useEffect } from 'react'
import { Section } from '../components'
import Guides from '../docs/guides/index'

export const NavContext = createContext({})

export const NavProvider = ({ children }: any) => {
  const [guides, setGuides] = useState<any>([])
  const [components, setComponents] = useState<any>([])

  useEffect(() => {
    setGuides(Object.keys(Guides).map((key: string, index: number) => {
      const Content = (Guides as any)[key]

      return {
        section: <Section index={index} isGuide><Content /></Section>,
        index,
        title: key,
      }
    }))
  }, [])

  const addGuideRef = (index: number, ref: any) => {
    const newGuides = [...guides]
    newGuides[index].ref = ref
    setGuides(newGuides)
  }

  const addComponentNavItem = (title: string, ref: any) => {
    components.push({title, ref})
    setComponents(components)
  }

  return (
    <NavContext.Provider
      value={{
        guides,
        setGuides,
        components,
        setComponents,
        addComponentNavItem,
        addGuideRef,
      }}
    >
      {children}
    </NavContext.Provider>
  )
}
