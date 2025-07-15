 'use client'
 import { Server, BIMViewer, LocaleService } from '@xeokit/xeokit-bim-viewer'
import { useSearchParams } from "react-router";
 import { useRef, useEffect } from 'react'
 
export default function TheViewer(){

/* 
    const server = new Server({
        dataDir: '/data'
    })
    */
    



    useEffect(()=> {
       /*    const [searchParams, setSearchParams] = useSearchParams() */
   console.log('the params are:')
  /*  console.log(searchParams)  */
    })

    const theExplorer = useRef(null)
    const theInspector = useRef(null)
    const theToolbar = useRef(null) 
    

    /** Обработка query params */
    
    interface RequestedParams {
        dataDir?: string
        company?: string
        locale?: string
        bcfPoint?: string
        projectId?: string
    }
/* 
    const requestedParams: RequestedParams = getRequestedParams()
    function getRequestedParams() {
        const searchParams = useSearchParams()
        console.log('the params are:')
        console.log(searchParams)
        return {}
    } */

    /** */
   
    const dataDir = ''
    const company = ''
    const locale = 'ru'
    const bcfPoint = ''
    const projectId = '' 
/* 
    const server = new Server({
        dataDir: requestedParams.dataDir
    })

    const bimViewer = new BIMViewer({
        localeService: null,

    }) */

    return (
        <>
        <div id="the-explorer" ref={theExplorer}></div>
        <div id="the-inspector"></div>
        <div id="the-viewer">
            <div id="the-toolbar"></div>
            <canvas id="the-viewer-canvas"></canvas>
            <canvas id="the-navcube-canvas"></canvas>
        </div>
        <div>
        </div>
        </>
    )
}   