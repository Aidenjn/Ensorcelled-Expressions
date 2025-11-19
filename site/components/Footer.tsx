'use client';

import GraspHand from '@/public/custom_graphics/grasphand.svg'

export default function Footer() {
  return (
    <footer className="static w-full z-50 mt-auto pointer-events-none">
      <div className="grasphand-decor-bar -bottom-px">
        <GraspHand className="w-24 h-24 float-left scale-y-[-1] svg-grasp-hand-icon"/>
        <GraspHand className="w-24 h-24 float-right scale-y-[-1] scale-x-[-1] svg-grasp-hand-icon"/>
      </div>
      <div className='relative grid place-items-center z-60 h-20 w-full bg-foreground pointer-events-auto'>
        © 2025 Aiden Nelson
      </div>
    </footer>
  );
}