import { Button, Table, Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Input } from 'reactstrap'
import React, { useState } from 'react';
import axios from 'axios'
import themeConfig from '@configs/themeConfig'
import { usePosition } from '@hooks/usePosition'
const Add = () => {
   const watch = true;
  const {
    latitude,
    longitude,
    speed,
    timestamp,
    accuracy,
    heading,
    error,
  } = usePosition(watch);
   const [file, setFile] = useState('')
   const [fileName, setFileName] = useState('Choose File')
   const [selectedFile, setSelectedFile] = useState({
     filePath: '',
     fileName: ''
   })
   //Следим за данными формы
   const [date, setDate] = useState('')
   const [getFlower, getTypeFlower] = useState('1')
   const [blobImage, setBlobImage] = useState() // <= add
   const [fieldNum, setFieldNum] = useState('1');
   const [numberAudit, setnumberAudit] = useState();

   const handleChange = e => {
     
         setFile(e.target.files[0])
         setFileName(e.target.files[0].name)
         setBlobImage(URL.createObjectURL(e.target.files[0])) // <= add
         console.log(e.target);
    }
      
      
   
    const handleUpload = async e => {  
      e.preventDefault()
  
      const data = new FormData()
      data.append('photo', file);  data.append('type_flower',getFlower); 
      data.append('place', fieldNum); 
   
      console.log(data)
  
      const res = await axios.post('http://192.168.77.217/api/flower/', data)

      const dataAudit = new FormData()
      dataAudit.append('number',numberAudit); dataAudit.append('gps_longitude',longitude); dataAudit.append('gps_latitude',latitude);
      dataAudit.append('date',date); dataAudit.append('place', fieldNum);
      await axios.post('http://192.168.77.217/api/audit/',dataAudit)
  
      const { path, originalname } = res.data
  
     setSelectedFile({filePath: path, fileName: originalname})
    } 

//получаем данные из апи
const [typeFlower, setTypeFlower] = React.useState([]);
const [place, setPlace] = React.useState([]);
const [audit, setAudit] = React.useState([]);
React.useEffect(() => {
   async function fetchData() {
      const getTypeFlowerResponse = await axios.get(`http://192.168.77.217/api/typeflower/`);
      const getPlaceResponse = await axios.get('http://192.168.77.217/api/place/');
      
      setTypeFlower(getTypeFlowerResponse.data);
      setPlace(getPlaceResponse.data);
      
      
      
   }
   fetchData();
}, []);
   
   
   //let lastAudit = audit.length + 1;
 return(
    <>
    
     <Card>
        <CardHeader>
          <CardTitle>Новый аудит</CardTitle>
          
        </CardHeader>

      </Card>
    <Card>
        <CardHeader>
          <CardTitle> <img src={themeConfig.app.appLogoImage} alt='logo' width={36} /> SunCalc</CardTitle>
          <CardBody>Ваша геолокация:  <br/>
          Широта: {latitude}<br/>
      Долгота: {longitude}<br/>
      Скорость: {speed}<br/>
      timestamp: {timestamp}<br/>
      Высота: {accuracy && `${accuracy} Метров`}<br/>
      heading: {heading && `${heading} degrees`}<br/>
      error: {error}
          </CardBody>
        </CardHeader>
      </Card>
      <Card>
         
      <CardHeader>
         <CardTitle>Номер аудита</CardTitle>
         </CardHeader>
         <CardBody>
            <label>Дата</label>
            <Input
               type="date"
               name="data"
               value={date}
               onChange={e => setDate(e.target.value)}
            />
            <label>Выберите сорт</label>
            <Input
               type="select"
               name="typeFlower"
               onChange={e => getTypeFlower(e.target.value)}
            >
               {typeFlower.map((obj)=>(
                  <option value={obj.id}>{obj.name}</option>
               ))}
             
												
            </Input>
            <label>Номер поля</label>
            <Input
               type="select"
               name="numberField"
               value={fieldNum}
               onChange={e => setFieldNum(e.target.value)}
            >
               {place.map((obj)=>(
                  <option value={obj.id}>{obj.name} ({obj.square}Га)</option>
               ))}
            </Input>
            <label>Номер аудита</label>
            <Input
               type="text"
               name="numberField"
               required
               value={numberAudit}
               onChange={e => setnumberAudit(e.target.value)}
            />
              
            
         </CardBody>
      </Card>
     
      
      <Card className="text-center">
         <label className='mt-2'>Выбрать или сделать фото</label>
         <div className="custom-file mb-4">
       <input type="file" className="custom-file-input" id="customFile" multiple onChange={handleChange} />
            <label className="custom-file-label" htmlFor="customFile">{fileName}</label>
        </div>

        <button onClick={handleUpload} className='btn btn-primary btn-block mt-2'>Загрузить</button>
      <Card>
      
      
      {selectedFile.filePath !== '' ? (
          <div className='row mt-5'>
            <div className='col-md-6 m-auto'>
               <h2>Фото загружено! Делайте следующий снимок</h2>
              <h3 className='text-center'>{selectedFile.fileName}</h3>
              <img style={{ width: '100%' }} src={blobImage} alt='' /> 
            </div>
          </div>
        ) : null}
      </Card>
      </Card>
    </>
 )
}

export default Add