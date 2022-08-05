import { useRef } from 'react'
import useIntersectionObserver from '@react-hook/intersection-observer'


const LazyIframe = ({ url, title }) => {
    const containerRef = useRef()
    const lockRef = useRef(false)
    const { isIntersecting } = useIntersectionObserver(containerRef)
    if (isIntersecting) {
        lockRef.current = true
    }
    return (
        <div
            style={{
                overflow: 'hidden',
                // paddingTop: '56.25%',
                position: 'relative',
                width: '100%',
                height:'100%'
            }}
            ref={containerRef}
        >
            {lockRef.current && (
                <iframe
                    title={title}
                    style={{
                        bottom: 0,
                        left: 0,
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        width: '100%',
                        height:'100%'
                    }}
                    src={url}
                    frameBorder="0"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen="allowFullScreen"
                ></iframe>
            )}
        </div>
    )
}

export default LazyIframe