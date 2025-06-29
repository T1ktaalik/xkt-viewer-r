import { Viewer, GLTFLoaderPlugin } from '@xeokit/xeokit-sdk' 
import { useEffect } from 'react' 
import { 
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

export default function TheViewer () {

    useEffect(() => { const viewer = new Viewer({canvasId: 'the',  
    })
    const gltfLoader = new GLTFLoaderPlugin(viewer)
    gltfLoader.load({
        id:'the id',
        src: '/antique_book.glb'
    })
})
    
    return (
        <>
            <canvas className="h-full w-full" id="the"></canvas>
        </>

    )
}