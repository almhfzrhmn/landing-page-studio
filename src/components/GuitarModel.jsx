import {useGLTF} from "@react-three/drei";

export const GuitarModel = () => {
    const {scene} = useGLTF("/models/exp_guitar.glb");

    return(
        <div className="flex items-center justify-center min-h-screen z-100">
            <primitive
                object={scene}
                scale={5}
            />
        </div>
    );
}