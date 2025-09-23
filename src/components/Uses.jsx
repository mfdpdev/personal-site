import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Uses(){
  return (
    <>
      <div className="mt-12 text-slate-300 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold">Uses</h1>
        <p>The stuff I use on my day-to-day basis.</p>
        <div className="mt-4 gap-4 grid grid-cols-2 grid-rows-3 ">
          <div className="col-span-2">
            <div className="h-full text-start p-4 bg-slate-800 bg-opacity-80 rounded-xl border border-slate-700">
              <div className="flex gap-2 items-center mb-4">
                <FontAwesomeIcon icon={faServer} />
                <h3 className="font-bold text-lg">Hardware</h3>
              </div>
              <div className="space-y-2">
                <p><span className="font-bold">Laptop</span> - Lenovo Ideapad Slim 3i</p>
                <p><span className="font-bold">Monitor</span> - MSI PRO MP223 Series</p>
                <p><span className="font-bold">Speakers</span> - Default Lenovo Ideapad Slim 3i</p>
                <p><span className="font-bold">Mouse</span> - MOFii Mouse Wireless</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 md:row-span-2">
            <div className="h-full text-start p-4 bg-slate-800 bg-opacity-80 rounded-xl border border-slate-700">
              <div className="flex gap-2 items-center mb-4">
                <FontAwesomeIcon icon={faScrewdriverWrench} />
                <h3 className="font-bold text-lg">Dev Tools</h3>
              </div>
              <div className="space-y-2">
                <p><span className="font-bold">IDE</span> - Vim | Visual Studio Code</p>
                <p><span className="font-bold">Terminal</span> - Kitty</p>
                <p><span className="font-bold">Shell</span> - Zsh</p>
                <p><span className="font-bold">Browser</span> - Brave</p>
                <p><span className="font-bold">Design</span> - Figma | Adobe Photoshop | Corel Draw</p>
                <p><span className="font-bold">System Operation</span> - Linux (Arch)</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 md:row-span-2 ">
            <div className="h-full text-start p-4 bg-slate-800 bg-opacity-80 rounded-xl border border-slate-700">
              <div className="flex gap-2 items-center mb-4">
                <FontAwesomeIcon icon={faList} />
                <h3 className="font-bold text-lg">Productivity</h3>
              </div>
              <div className="space-y-2">
                <p><span className="font-bold">Notes / Docs</span> - Notion</p>
                <p><span className="font-bold">Tasks</span> - </p>
                <p><span className="font-bold">Todo</span> - </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
