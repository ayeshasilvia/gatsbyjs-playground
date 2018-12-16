import React from "react"

const Container = ({ children }) => (
    <div css={{ margin: `3rem auto`, maxWidth: 600}}>{children}</div>
)

const User = props => (
    <div
    css={{
        display: `flex`,
        alignItems: `center`,
        margin: `0 auto 12px auto`,
        "&:last-child": {marginBottom: 0},
    }}
    >

    <img
        src={props.avatar}
        css={{flex: `0 0 96px`, width: 96, height: 96, margin: 0}}
        alt = ""
        />

        <div css={{flex: 1, marginLeft: 18, padding:12}}>
        <h2 css={{margin: `0 0 12px 0`, padding: 0}}>{props.username}</h2>
        <p css={{margin: 0}}>{props.excerpt}</p>
        </div>
        </div>
)

export default () => (
  <Container>
    <h1>About Glamor</h1>
    <p>Glamor is cool</p>
    <User
    username="Ayesha M"
    avatar = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
    excerpt = "I am glamorous"
    />

    <User
    username="Anaya A"
    avatar="https://www.instagram.com/p/Bq5ptA0nC41/?utm_source=ig_web_copy_link"
    excerpt="I'm a little tea-pot"/>
  </Container>
)