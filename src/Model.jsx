import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';
import Donut from '../public/Donut'

const Model = () => {
    return (
        <div className="model">
            <Canvas>
                <ambientLight />
                <OrbitControls maxDistance={12} minDistance={3} enablePan={false} /* enableDamping={false} *//>
                <Suspense fallback={null}>
                    <Donut />
                </Suspense>
            </Canvas>
        </div>
    );
}
 
export default Model;