import React, { useState } from 'react';
import { Progress, Button, Table, Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'

//получаем данные из апи



const Home = () => {

  const [audit, setAudit] = React.useState([]);
React.useEffect(() => {
   async function fetchData() {

      const getAuditResponse = await axios.get('http://192.168.77.217/api/audit/'); 
      setAudit(getAuditResponse.data);
      
   }
   fetchData();
}, []);
console.log(audit);
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Создать новую запись</CardTitle>
          
        </CardHeader>
        <CardBody>
        <Link to="/add">
          <Button.Ripple color='relief-success'>Создать</Button.Ripple>
        </Link>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
      
         <CardTitle>Прошлые аудиты</CardTitle>
        </CardHeader>
      </Card>
      {audit.map((obj)=>(    
        
      <Card>
        <CardHeader>
          <CardTitle>Аудит № {obj.number}</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            
            {/* {' '}<CardLink
              href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/development/auth'
              target='_blank'
            >
              JWT Documentation
            </CardLink>{' '} */}
            Ответственный: Росгосcтрах <br/>
            Поле № {obj.place} <br/>
            Координаты {obj.gps_longitude},{obj.gps_latitude}
          </CardText>
          <CardText>
            Дата проверки: {obj.date}
          </CardText>
          <CardText>
           {/* <Link to={location => `Detail/${obj.number}`} >
              
          </Link>*/}
          <Link to={{ 
  pathname: `/Detail${obj.id}`, 
  params: { id:obj.id} 
}}><Button.Ripple color='gradient-primary'>Просмотреть</Button.Ripple></Link>
          </CardText>
        </CardBody>
      </Card>
      ))}

 

    
    </>
  )
}

export default Home
