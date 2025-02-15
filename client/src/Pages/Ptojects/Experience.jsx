import {OrbitControls, Stage} from "@react-three/drei"
import React, {Suspense} from "react";
import Box from "./render/Box";
import {RenderElements} from "./render/RenderElements";

export const Experience = ({myElements}) => {
    return (
        <>
            <Stage
                intensity={0.2}
                environment="city"
                // shadows={{
                //     type: "accumulative",
                //     color: "#d9afd9",
                //     colorBlend: 2,
                //     opacity: 2,
                // }}
                adjustCamera={2}
            >
                <Suspense fallback={<Box/>}>
                    {
                        myElements.map((t) => {
                            return (
                                t.check && <RenderElements myPath={t.file}/>
                            )
                        })
                    }
                </Suspense>
            </Stage>
            <OrbitControls
                makeDefault
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
            />
        </>
    )
}