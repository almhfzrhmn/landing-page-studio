import {useGLTF} from "@react-three/drei";

export const GuitarModel = () => {
    const {scene} = useGLTF("/models/exp_guitar.glb");

    return(
        <primitive
            object={scene}
            scale={5}
        />
    );
}