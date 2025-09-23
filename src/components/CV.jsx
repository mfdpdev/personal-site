import vim from "./../assets/icons/vim.png"
import linux from "../assets/icons/linux.png"
import git from "../assets/icons/git.png"
import github from "../assets/icons/github.png"
import figma from "../assets/icons/figma.png"
import nginx from "../assets/icons/nginx.png"
import docker from "../assets/icons/docker.png"
import vscode from "../assets/icons/visual-studio-code.png"
import notion from "../assets/icons/notion.png"

export default function CV(){
  return (
    <>
      <div className="text-slate-300 grid grid-cols-1 lg:grid-cols-2 mt-6 gap-x-16 gap-y-8">
        <div className="h-92 w-full bg-slate-700">
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h1>Tools & Software</h1>
            <div className="flex gap-6 flex-wrap">
              <div className="rounded-lg w-20 lg:w-16 bg-slate-800 p-2">
                <img src={vim} className="w-full" alt="image" />
              </div>
              <div className="rounded-lg w-20 bg-slate-800 p-2">
                <img src={linux} className="w-full" alt="image" />
              </div>
              <div className="rounded-lg w-20 bg-slate-800 p-2">
                <img src={git} className="w-full" alt="image" />
              </div>
              <div className="rounded-lg w-20 bg-slate-800 p-2">
                <img src={github} className="w-full" alt="image" />
              </div>
              <div className="rounded-lg w-20 bg-slate-800 p-2">
                <img src={figma} className="w-full" alt="image" />
              </div>
              <div className="rounded-lg w-20 bg-slate-800 p-2">
                <img src={nginx} className="w-full" alt="image" />
              </div>
              <div className="rounded-lg w-20 bg-slate-800 p-2">
                <img src={docker} className="w-full" alt="image" />
              </div>
              <div className="rounded-lg w-20 bg-slate-800 p-2">
                <img src={vscode} className="w-full" alt="image" />
              </div>
              <div className="rounded-lg w-20 bg-slate-800 p-2">
                <img src={notion} className="w-full" alt="image" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1>Skills & Expertise</h1>
            <div className="flex gap-4 flex-wrap">
              <div className="hover:bg-red-500 rounded-lg border-2 border-slate-700 px-4 py-2">
                Full-Stack Development
              </div>
              <div className="hover:bg-red-500 rounded-lg border-2 border-slate-700 px-4 py-2">
                Programming
              </div>
              <div className="hover:bg-red-500 rounded-lg border-2 border-slate-700 px-4 py-2">
                Backend
              </div>
              <div className="hover:bg-red-500 rounded-lg border-2 border-slate-700 px-4 py-2">
                API Design & Integration
              </div>
              <div className="hover:bg-red-500 rounded-lg border-2 border-slate-700 px-4 py-2">
                Database Management (SQL/NoSQL)
              </div>
              <div className="hover:bg-red-500 rounded-lg border-2 border-slate-700 px-4 py-2">
                Frontend Frameworks
              </div>
              <div className="hover:bg-red-500 rounded-lg border-2 border-slate-700 px-4 py-2">
                System Architecture
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
