import React from 'react'
import { useParams } from 'react-router'

const CourseDetail = () => {
    const params = useParams()

  return (
    <div>
      <h1 style={{textAlign:"center",fontSize:"26px",marginTop:"50px"}}>{params.courseId} Detail Page</h1>
    </div>
  )
}

export default CourseDetail
