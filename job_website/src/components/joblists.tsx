import jobs from '../assets/jobs.json'
import Job from './joblist.tsx'
import { useState } from 'react'

function Jobs(){
    console.log(jobs)
    let [showAll, setShowAll] = useState(false)
    // const recentJobs=jobs.slice(0,3)
    return (
<>
    <section className="bg-blue-50 px-4 py-10">

      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((jobItem,index)=>{
                if (!showAll && index>3) return
                return (
                 <Job key={jobItem.id} job={ jobItem } />
            )})}
        </div>
      </div>
    </section>

    <section className="m-auto max-w-lg my-10 px-6">
    <button onClick={()=>setShowAll(!showAll)}>
    {showAll?"Show Recent Jobs":"Show All Jobs"}
    </button>
    </section>
    </>
    )
}

export default Jobs
