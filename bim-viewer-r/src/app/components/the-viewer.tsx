'use client'
/* import { GetServerSideProps } from 'next'; */
import { BIMViewer } from '@/app/libs/bim-viewer-libs/src/BIMViewer'
import {LocaleService} from '@xeokit/xeokit-sdk/src/viewer/localization/LocaleService.js'
import { Server } from '@/app/libs/bim-viewer-libs/src/server/Server'
import { useSearchParams } from "next/navigation"
import { useRef, useEffect, forwardRef, ForwardedRef } from 'react'
import TheExplorer from './the-explorer'
import TheInspector from './the-inspector'
import TheToolbar from './the-toolbar'
import { messages as localeMessages } from '@/app/libs/messages' 
export default function TheViewer() {

    /**
     * Здесь определяем элементы HTML-шаблона
     */
    const TheViewerCanvas =  useRef(null)
    const TheExplorerRef = useRef(null)
    /*const TheInspectorRef = useRef(null)
    const TheToolbarRef = useRef(null) */
   /*  const TheExplorerRef = forwardRef(()=> {return (<>
    <TheExplorer />
    </>)})
    const TheInspectorRef = forwardRef(()=> {return (<>
    <TheInspector />
    </>)})
    const TheToolbarRef = forwardRef(()=> {return (<>
    <TheToolbar />
    </>)}) */
    
    
        const preventDefault = (e: MouseEvent) =>  {
            e.preventDefault()
        }



    useEffect(() => {
        const locale = { messages: localeMessages,
            locale: 'ru'
        }
        const bimViewer = new BIMViewer({
            LocaleService: new LocaleService(locale),
            canvasElement: TheViewerCanvas.current,
            explorerElement: TheExplorerRef.current,
            /* inspectorElement: TheInspectorRef.current, */
         
        })


    })

    return (
        <>
                <TheExplorer /* ref={TheExplorer} */ />
                <TheInspector />
                <TheToolbar />
        <canvas ref={TheViewerCanvas} ></canvas>
                <canvas id="the-navcube-canvas"></canvas> 
        </>
    )
}   

