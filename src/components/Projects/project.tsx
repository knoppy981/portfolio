'use client';
import React from 'react';

interface ProjectProps {
  index: number;
  title: string;
  desc: string;
  setModal: (modal: { active: boolean; index: number }) => void;
}

export default function Project({ index, title, desc, setModal }: ProjectProps) {
  return (
    <div
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className="flex w-full justify-between items-center px-[100px] py-[50px] border-t border-gray-300 last:border-b cursor-pointer transition-all duration-200 hover:opacity-50 group"
    >
      <h2 className="text-[60px] m-0 font-normal transition-all duration-400 group-hover:translate-x-[-10px]">
        {title}
      </h2>
      <p className="font-light transition-all duration-400 group-hover:translate-x-[10px]">
        {desc}
      </p>
    </div>
  );
};