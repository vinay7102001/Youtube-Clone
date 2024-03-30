import React from 'react'
import Skeleton from '@mui/material/Skeleton';

const SkeletonCom = () => {
  return (
    <div style={{ width: '100%' }}>
      <Skeleton sx={{ bgcolor: 'gray' }} animation={false} height={250} width='100%' />
      <div className='d-flex flex-row justify-content-center align-items-center'>
        <Skeleton variant='circular' animation={false} sx={{ bgcolor: 'gray', marginRight: '1rem' }} circle height={60} width={60} />
        <Skeleton sx={{ bgcolor: 'gray' }} animation={false} circle={true} height={100} width='75%' />
      </div>
    </div>
  )
}

export default SkeletonCom
