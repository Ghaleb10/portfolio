import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  img: StaticImageData,
  skill: string,
  projectName: string;
  link?: string
}

export default function CardProject({ img, skill, projectName, link }: Props) {
  return (
    <Link href={link ? link : '/'} target={link ? "_blank" : ""}>
      <div className="text-white h-[250px] relative rounded-lg shadow-zinc-100/5 shadow-md border border-zinc-200/10 overflow-hidden">
        <div className="absolute top-2 left-2 px-4 py-2 rounded-full bg-cyan-950 border border-zinc-100/20">
          <p className="text-xs">{skill}</p>
        </div>
        <Image src={img} alt="" className="object-cover object-center w-full h-full" />
        <div className="w-full h-[150px] absolute bottom-0 left-0 rounded-md bg-gradient-to-t from-black/95 to-transparent p-4 flex flex-col gap-2 items-start justify-end">
          <p className="font-bold text-sm">{projectName}</p>
          {/* <p className="text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> */}
        </div>
      </div>
    </Link>
  )
}