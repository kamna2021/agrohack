import { Button, Table, Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Input } from 'reactstrap'
import themeConfig from '@configs/themeConfig'
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const Detail = (props) => {
    const { id } = useParams()
    const [audit, setAudit] = React.useState([]);
    React.useEffect(() => {
       async function fetchData() {
    
          const getAuditResponse = await axios.get('http://192.168.77.217/api/audit/'+id); 
          setAudit(getAuditResponse.data);
          
       }
       fetchData();
    }, []);
    
    console.log(id);
    
 return(
    <>
     <Card>
        <CardHeader>
          <CardTitle>-{}</CardTitle>
          
        </CardHeader>

      </Card>
    <Card>
        <CardHeader>
          <CardTitle> <img src={themeConfig.app.appLogoImage} alt='logo' width={36} /> SunCalc</CardTitle>
          <CardBody>Геолокация: 54.60391620984119,53.69766808626094 <a href="">(на карту)</a></CardBody>
        </CardHeader>
      </Card>
      <Card>
      <CardHeader>
         <CardTitle>Номер аудита 43</CardTitle>
         </CardHeader>
         <CardBody>
            <label>Дата</label>
            <Input
               type="date"
            />
            <br/>
            <label>Cорт</label>
            <br/>
            Каспиан <br/><br/>
            <label>Площадь поля</label>
            <Input
               type="text" value="200Га"
            />
         </CardBody>
      </Card>
      <Card>
          <CardHeader>
              <CardTitle>Результаты</CardTitle>
          </CardHeader>
          <CardBody>
         
              <Table>
                  <thead>
                      <tr>
                          <td>Параметр</td>
                          <td>Значение</td>
                      </tr>
                    
                   
                  </thead>
                  <tbody>
                      <tr>
                          <td>Масса целых зерен с корзинки</td>
                          <td>26г</td>
                      </tr>
                      <tr>
                          <td>Масса пустых зерен с корзинки</td>
                          <td>0.9</td>
                      </tr>
                      <tr>
                          <td>Число зерен с корзинки</td>
                          <td>829шт</td>
                      </tr>
                      <tr>
                          <td>Число растений с 1 м2</td>
                          <td>12</td>
                      </tr>
                      <tr>
                          <td>Биологическая урожайность</td>
                          <td>30,3</td>
                      </tr>
                      <tr>
                          <td>Урожайность фактическая</td>
                          <td>20</td>
                      </tr>
                     
                  </tbody>
              </Table>
          </CardBody>
      </Card>
      <Card>

      </Card>
    </>
 )
}

export default Detail