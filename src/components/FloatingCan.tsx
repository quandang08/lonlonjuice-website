"use client";

import React, { forwardRef, ReactNode } from "react";
import { Float } from "@react-three/drei";  // Component để tạo hiệu ứng nổi và xoay
import { SodaCan, SodaCanProps } from "@/components/SodaCan";
import { Group } from "three";

type FloatingCanProps = {
  flavor?: SodaCanProps["flavor"]; // Hương vị của lon soda
  floatSpeed?: number; // Tốc độ nổi lên/xuống
  rotationIntensity?: number; // Mức độ xoay
  floatIntensity?: number; // Mức độ dao động nổi
  floatingRange?: [number, number]; // Khoảng dao động theo trục Y
  children?: ReactNode; // Cho phép truyền thêm nội dung con vào Float
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  (
    {
      flavor = "blackCherry",
      floatSpeed = 1.5,
      rotationIntensity = 1,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          <SodaCan flavor={flavor} />
        </Float>
      </group>
    );
  },
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;