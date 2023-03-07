import React from 'react'
import Dashboard from "./dashboard.js"
import './dash.css'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { MyDocument } from './makePDF.js'
import { Button } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
const profile = () => {

  

  return (
    <div  className='profile p-20 userboard h-screen'>
      
    <div>profile</div>



    <Button>
    <PDFDownloadLink document={<MyDocument />} fileName="Acknowledgement.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <div><FileDownloadIcon/> Download Acknowledgement</div>)}
    </PDFDownloadLink>
    </Button>
    
    
<Dashboard />
    </div>
  )
}

export default profile