import { useSkin } from '@hooks/useSkin'
import { Link, Redirect,Router } from 'react-router-dom'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'
import themeConfig from '@configs/themeConfig'
import { useState } from 'react';
const Login = () => {
  const [skin, setSkin] = useSkin()
  const [login, setLogin] = useState(false)

  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
  source = require(`@src/assets/images/pages/${illustration}`).default

  function auth(){
    setLogin = 'true';
  }
    if (login === 'true'){
      return(
        
         <Redirect from='/login' to="/home" />
       
      )

    }else{

    
  return (
   
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/'>
        <img src={themeConfig.app.appLogoImage} alt='logo' width={36} />
          <h2 className='brand-text text-primary ml-1'>SunCalc</h2>
        </Link>
      
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
               Добро пожаловать! 👋
            </CardTitle>
            <CardText className='mb-2'>Пожалуйста войдите в свой аккаунт или воспользуйтесь демо доступом <b>demo/demo</b></CardText>
            <Form className='auth-login-form mt-2' onSubmit={e => e.preventDefault()}>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  Логин
                </Label>
                <Input type='email' id='login-email' placeholder='john@example.com' autoFocus />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Пароль
                  </Label>
                  <Link to='/'>
                    <small>Забыли пароль?</small>
                  </Link>
                </div>
                <InputPasswordToggle className='input-group-merge' id='login-password' />
              </FormGroup>
              <FormGroup>
                <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Запомнить меня' />
              </FormGroup>
              <Button.Ripple tag={Link} to='/' color='primary' block onclick="auth()">
                Войти
              </Button.Ripple>
            </Form>
         
          </Col>
        </Col>
      </Row>
    </div>
  )
}
}

export default Login
