import styled from 'styled-components'
import Link from 'next/link'

import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/h1"
import H2 from "../src/components/typography/h2"
import H3 from "../src/components/typography/h3"
import H4 from "../src/components/typography/h4"
import Button from '../src/components/inputs/Button'
import Input from '../src/components/inputs/Input'

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
  margin: 10px;
`

function LoginPage () {
  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>Tudo que acontece no mundo dev, está aqui!</H4>
      <FormContainer>
        <H2>Entre em sua conta</H2>
        <Form>
          <Input label="Email ou Usuário" type="email" />
          <Input label="Senha" type="password" />
          <Button>Entrar</Button>
        </Form>
        <Text>Não possui uma conta? <Link href="/signup">Faça seu cadastro!</Link></Text>
        <Text>Esqueceu sua senha? <Link href="#">Clique aqui!</Link></Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default LoginPage