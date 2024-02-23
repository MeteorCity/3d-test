import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';
import Shoe from '../public/Shoe'

const Model = () => {
    return (
        <div className="model">
            <Canvas>
                <ambientLight />
                <OrbitControls maxDistance={100} minDistance={3} enablePan={false} /* enableDamping={false} *//>
                <Suspense fallback={null}>
                    <Shoe />
                </Suspense>
            </Canvas>
        </div>
    );
}
 
export default Model;