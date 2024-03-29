import styled from 'styled-components'

import Navbar from '../src/components/layout/Navbar'
import Container from '../src/components/layout/Container'
import CreatePost from '../src/components/cards/CreatePost'
import H3 from '../src/components/typography/H3'
import Post from '../src/components/cards/Post'

const Content = styled.div`
  margin: 50px 0;
`
const LastPostText = styled.div`
  padding: 40px 0;
  color: ${props => props.theme.white};
`

const RefreshPosts = styled.button`
background-color: ${props => props.theme.white};
padding: 10px;
border-radius: 10px;
border: 0;
font-weight: bold;
color: ${props => props.theme.primary};
font-size: 14px;
cursor: pointer;
transition: 0.3s;

:hover {
  background-color: ${props => props.theme.black};
}
`

const RefreshPostsContainer = styled.div`
  display: flex;
  justify-content: center;
`

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`

function HomePage () {
  
  return (
    <>
    <Navbar />
      <Content>
        <Container>
          <CreatePost />
          <LastPostText>
            <H3>Últimas postagens:</H3>
          </LastPostText>
          <RefreshPostsContainer>
            <RefreshPosts>Carregar novas postagens</RefreshPosts>
          </RefreshPostsContainer>
          <PostContainer>
            <Post />
            <Post />
            <Post />
          </PostContainer>
        </Container>
      </Content>
    </>
  )
}

export default HomePage