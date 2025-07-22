'use client'
/* import { GetServerSideProps } from 'next'; */
import {BCFViewpointsPlugin, FastNavPlugin, math, stats, Viewer,} from "@xeokit/xeokit-sdk/dist/xeokit-sdk.es.js"
import { Server, BIMViewer, LocaleService } from '@xeokit/xeokit-bim-viewer'
import { useSearchParams } from "next/navigation";
import { useRef, useEffect, forwardRef, ForwardedRef } from 'react'
import TheExplorer from './the-explorer';
import TheInspector from './the-inspector';
import TheToolbar from './the-toolbar';
import { Props } from 'next/script';
export default function TheViewer() {

    /**
     * Здесь определяем элементы HTML-шаблона
     */
    const TheViewerCanvas =  useRef(null)
    const TheExplorer = forwardRef(()=> {return (<>
    <TheExplorer />
    </>)})
    const TheInspector = forwardRef(()=> {return (<>
    <TheInspector />
    </>)})
    const TheToolbar = forwardRef(()=> {return (<>
    <TheToolbar />
    </>)})
    
    
        const preventDefault = (e: MouseEvent) =>  {
            e.preventDefault()
        }



    useEffect(() => {

        const locale = 'ru'
        const projectId = ''   
        const viewer = new Viewer({
            canvasElement:  TheViewerCanvas.current
        })

    
    })

    return (
        <>
                <TheExplorer  />
                <TheInspector />
                <TheToolbar />
                <canvas ref={TheViewerCanvas} ></canvas>
                <canvas id="the-navcube-canvas"></canvas>
        </>
    )
}   

