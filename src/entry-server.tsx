import React from 'react'
import { type RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server'
import App from './App'
import { StaticRouter } from 'react-router-dom/server'

export function render(_url: string, _ssrManifest?: string, options?: RenderToPipeableStreamOptions) {

  const serializedStoreData = JSON.stringify('ok'); 

  const appHtml =  renderToPipeableStream(
    <React.StrictMode>
      <StaticRouter location={'/' + _url}>
        <App/>
      </StaticRouter>
    </React.StrictMode>,
    options
  )

  return { appHtml, serializedStoreData };
}
