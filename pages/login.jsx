import styled from 'styled-components'

import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/h1"
import H2 from "../src/components/typography/h2"
import H3 from "../src/components/typography/h3"
import H4 from "../src/components/typography/h4"

const FormContainer = styled.div`
  margin-top: 60px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  gap: 20px;
`

const Text = styled.p`
  text-align: center;
`

function LoginPage () {
  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>Tudo que acontece no mundo dev, está aqui!</H4>
      <FormContainer>
        <H2>Entre em sua conta</H2>
        <Form>
          <input placeholder="Email ou Usuário" type="email" />
          <input placeholder="Senha" type="password" />
          <button>Entrar</button>
        </Form>
        <Text>Não possui uma conta? <a href="#">Faça seu cadastro</a></Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default LoginPage