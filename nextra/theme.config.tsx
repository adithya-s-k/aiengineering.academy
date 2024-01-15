import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24">

      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        AI Engineering Academy
      </span>
    </>
  ),


  project: {
    link: 'https://github.com/CognitiveLab-tech/aiengineering.academy',
  },


  chat: {
    link: 'https://discord.com',
  }
}

export default config
