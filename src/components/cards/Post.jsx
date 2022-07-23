import styled from 'styled-components'

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px;
  border-radius: 10px;
  
`

const StyledUsername = styled.p`
  font-weight: bold;
  font-size: 18px;
`

const StyledDate = styled.p`
  margin-top: 10px;
  font-size: 12px;
`

const ConteinerText = styled.div`
  margin-top: 10px;
`

function Post () {
  return (
    <PostContainer>
      <StyledUsername>@username</StyledUsername>
      <StyledDate>23 de Julho de 2022</StyledDate>
      <ConteinerText>Este é um texto de teste.</ConteinerText>
    </PostContainer>
  )
}

export default Post