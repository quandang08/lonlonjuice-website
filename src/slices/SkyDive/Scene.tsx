"use client"

import FloatingCan from "@/components/FloatingCan";
import { Cloud, Environment } from "@react-three/drei";
import { useRef } from "react"
import * as THREE from "three";
import { OrbitControls } from '@react-three/drei';
import { Text } from '@react-three/drei'

type SkyDiveProps = {
    sentence: string | null;
    flavor: Content.SkyDiveSliceDefaultPrimary["flavor"]
};

export default function Scene({ sentence, flavor }: SkyDiveProps) {
    const groupRef = useRef<THREE.Group>(null);
    const canRef = useRef<THREE.Group>(null);
    const cloud1Ref = useRef<THREE.Group>(null);
    const cloud2Ref = useRef<THREE.Group>(null);
    const cloudsRef = useRef<THREE.Group>(null);
    const wordsRef = useRef<THREE.Group>(null);

    return (
        <group ref={groupRef}>
            <group rotation={[0, 0, 0.5]}>
                <FloatingCan ref={canRef} flavor={flavor} ></FloatingCan>
            </group>

            {/* Group các cloud */}
            <group ref={cloudsRef}>
                <Cloud ref={cloud1Ref} position={[-2, 1, 0]} bounds={[10, 10, 2]} />
                <Cloud ref={cloud2Ref} position={[2, 1, 0]} bounds={[10, 10, 2]} />
            </group>

            {/* Text  */}
            <group ref={wordsRef}>
                {sentence && <ThreeText sentence={sentence} />}
            </group>

            {/* Controls */}
            <OrbitControls />

            {/* Lights */}
            <ambientLight intensity={2} color="#9DDEFA" />
            <Environment files="/hdr/field.hdr" environmentIntensity={1.5} />
        </group>
    )
}

function ThreeText({sentence , color="white"}:{
    sentence: string;
    color?: string
}){
    return <Text>{sentence}</Text>
}