import React from 'react'
import "./PendingTasks.css"
import TaskCard from './TaskCard'

const PendingTasks = ({taskData, setTaskData}) => {
  return (
    <div id='pending-tasks-container'>
        <div>
            <h2>Your Pending Task</h2>
            {/* We will be calling all the pending task card */}
            <div>
              {
                taskData.filter((taskInfo)=>taskInfo.status=="pending").map((taskInfo)=>{
                  const {task, id, priority, status} = taskInfo
                  return  <TaskCard setTaskData={setTaskData} data={{task: task, priority: priority, status: status, id: id}}/>
                })
              }
            </div>
        </div>
    </div>
  )
}

export default PendingTasks