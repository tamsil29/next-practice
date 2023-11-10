'use client'
import React from 'react'
import { CldUploadWidget } from 'next-cloudinary';

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset='fp1cjwze'>
        {({open}) => <button className='btn btn-primary' onClick={()=>open()}>upload</button>}
    </CldUploadWidget>
  )
}

export default UploadPage