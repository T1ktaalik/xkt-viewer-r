'use client'
/* import { GetServerSideProps } from 'next'; */
import { Server, BIMViewer, LocaleService } from '@xeokit/xeokit-bim-viewer'
import { useSearchParams } from "next/navigation";
import { useRef, useEffect, forwardRef, ForwardedRef } from 'react'
import TheExplorer from './the-explorer';
import TheInspector from './the-inspector';
import TheToolbar from './the-toolbar';
import { Props } from 'next/script';
export default function TheViewer() {

    const [searchParams, setSearchParams] = useSearchParams();
    
    console.log(searchParams)



    /**
     * Здесь определяем элементы HTML-шаблона
     */
    
   /*  const TheExplorer = forwardRef(()=> {return (<>
    <TheExplorer />
    </>)}) */
    const theExplorer = useRef(null)
    const theInspector = useRef(null)
    const theToolbar = useRef(null)


    /**
     * Здесь конфигурируем вьер по настройкам
     */
    const hideEdgesMinDrawCount = 5; // FastNavPlugin enables dynamic edges when xeokit's per-frame draw count drops below this
    const scaleCanvasResolutionMinDrawCount = 1000; // FastNavPlugin switches to low-res canvas when xeokit's per-frame draw count rises above this


    /* 
        const server = new Server({
            dataDir: '/data'
        })
        */


    useEffect(() => {

        const fetchData = async () => {
            try {
                const theRes = await fetch('/api/get-projects')
                console.log('the OK!!!!!!!!!!!!!!!!!!')
                console.log(theRes)
            } catch (error) {
                console.log('Is there an error?')
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    })


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
                <TheExplorer />
                <TheInspector />
                <TheToolbar />
                <canvas id="the-viewer-canvas"></canvas>
                <canvas id="the-navcube-canvas"></canvas>
            </div>
            <div>
            </div>
        </>
    )
}   