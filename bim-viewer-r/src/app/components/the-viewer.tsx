 'use client'
 import { Server, BIMViewer, LocaleService } from '@xeokit/xeokit-bim-viewer'
 import { useSearchParams } from 'next/navigation'
 

export default function TheViewer(){

    const requestedParams = {
        dataDir: '',
        company: '',
        locale: '',
        bcfPoint: ''
    }

    getRequestedParams()
    function getRequestedParams() {
        const searchParams = useSearchParams()
        console.log('the params are:')
        console.log(searchParams)
    }
   

    return (
        <>
        <div id="the-explorer"></div>
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