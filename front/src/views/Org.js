import { Progress, Button, Table, Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Список организаций</CardTitle>
          <CardBody>В карточке организации вы можете ознакомится со всеми аудитами по ее полям</CardBody>
        </CardHeader>
     
      </Card>

      <Card>
        <Table>
            <thead>
                <tr>
                  
                    <td>
                        Наименование/ИНН/Рейтинг
                    </td>
                  
                </tr>
            </thead>
            <tbody>
            <Link to="detail/2">
            <tr>
                
                <td> ООО "Рога и Копыт12312а"/2321412/***</td>
                
             
            </tr>

            </Link> 
            <Link to="detail/2">
            <tr>
                
                <td> ООО "Рога и Копыт12312а"/2321412/***</td>
                
             
            </tr>
            
            </Link>
           
                   
            </tbody>
        </Table>
      </Card>

 

    
    </div>
  )
}

export default Home
