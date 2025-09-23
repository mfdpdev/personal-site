export default function Timeline(){
  const events = [
    { date: "2010", title: "Masuk Sekolah", description: "Pendidikan dasar dimulai." },
    { date: "2015", title: "Lulus SMP", description: "Lulus ujian dan melanjutkan ke SMA." },
    { date: "2020", title: "Lulus Kuliah", description: "Lulus dari universitas." },
    { date: "2025", title: "Mencari Pekerjaan", description: "Mencari pekerjaan pertama." },
    { date: "2030", title: "Karier Maju", description: "Menjadi Senior Developer." },
  ];
  return (
    <>
      <div className="mt-12 flex justify-start flex-wrap gap-6 text-slate-300">
        <div className="sm:flex-3">
          <h1 className="font-bold text-3xl">Test</h1>
          <p className="mt-2"> I'm deep into programming languages like JavaScript, Python, and React, and I enjoy problem-solving like a puzzle master.</p>
          <div>
            Test
          </div>
        </div>
        <div className="hidden lg:block lg:flex-1">
        </div>
        <div className="sm:flex-3">
          <div className="relative -z-1">
            <div className="left-[7px] absolute border-l-1 border-r-1 border-slate-100 h-full">
            </div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-4 h-4 bg-slate-100 relative rounded-full">
                  <div className="w-2 h-2 absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 bg-slate-900 rounded-full">
                  </div>
                </div>
                <div className="ml-6">
                  <div className="text-xl font-semibold">Magang</div>
                  <div className="mt-2 text-gray-600">magang sebagai backend developer</div>
                  <div className="text-sm text-gray-400 mt-1">2025</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-slate-100 relative rounded-full">
                  <div className="w-2 h-2 absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 bg-slate-900 rounded-full">
                  </div>
                </div>
                <div className="ml-6">
                  <div className="text-xl font-semibold">Magang</div>
                  <div className="mt-2 text-gray-600">magang sebagai backend developer</div>
                  <div className="text-sm text-gray-400 mt-1">2025</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-slate-100 relative rounded-full">
                  <div className="w-2 h-2 absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 bg-slate-900 rounded-full">
                  </div>
                </div>
                <div className="ml-6">
                  <div className="text-xl font-semibold">Magang</div>
                  <div className="mt-2 text-gray-600">magang sebagai backend developer</div>
                  <div className="text-sm text-gray-400 mt-1">2025</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-slate-100 relative rounded-full">
                  <div className="w-2 h-2 absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 bg-slate-900 rounded-full">
                  </div>
                </div>
                <div className="ml-6">
                  <div className="text-xl font-semibold">Magang</div>
                  <div className="mt-2 text-gray-600">magang sebagai backend developer</div>
                  <div className="text-sm text-gray-400 mt-1">2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
