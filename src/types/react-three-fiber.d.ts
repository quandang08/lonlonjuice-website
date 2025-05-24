import { GroupProps } from '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    group: GroupProps;
  }
}