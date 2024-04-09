import '@tldraw/tldraw/tldraw.css'
import dynamic from 'next/dynamic'

const Tldraw = dynamic(async () => (
    await import('@tldraw/tldraw')).Tldraw,
    {
        ssr: false
    }

)


const tldraw = () => {

    return (
        <div style={{ position: 'fixed', inset: 0 }}>
            < Tldraw />
        </div >
    )
}


export default tldraw