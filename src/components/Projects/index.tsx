import React from 'react'
import Modal from './modal'
import Project from './project'

const projects = [
  {
    title: "Famun Website",
    desc: "Desgin & Development",
    src: "famun.png",
    color: "#047857"
  },
  {
    title: "Arquitec Website",
    desc: "Desgin & Development",
    src: "arquitec.png",
    color: "#fff"
  },
  {
    title: "Dell Technologies",
    desc: "Professional Experience",
    src: "mtmdell.jpeg",
    color: "#047857"
  },
]

export default function index() {
  const [modal, setModal] = React.useState({ active: false, index: 0 })

  React.useEffect(() => {
    console.log(modal)
  }, [modal])

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="w-[1000px] flex flex-col items-center justify-center">
        {
          projects.map((project, index) => {
            return <Project index={index} title={project.title} desc={project.desc} setModal={setModal} key={index} />
          })
        }
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  )
}
