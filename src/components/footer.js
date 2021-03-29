import React from "react"
import styled from "styled-components"
import color from "color"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

import { FontAwesomeIcon as _FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithubAlt,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

config.autoAddCss = false

const FontAwesomeIcon = styled(_FontAwesomeIcon)`
  color: ${props => props.theme.primary};
`
const EgoSection = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0;
  flex-direction: column;
  margin-bottom: 64px;
  h1 {
    font-size: 3em;
    color: ${props => props.theme.text};
  }
  p {
    color: ${props =>
      color(props.theme.text)
        .alpha(0.7)
        .toString()};
  }
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
`

const SocialButton = styled.a`
  background: ${props => props.theme.accent};
  width: 35px;
  height: 35px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  border: 0;
  cursor: pointer;
  box-shadow: 0px 0px 1px
      ${props =>
        color(props.theme.accent)
          .darken(0.1)
          .toString()},
    0px 0px 4px ${props => props.theme.accent};
  &:hover {
    background: ${props =>
      color(props.theme.accent)
        .alpha(0.1)
        .toString()};
  }
`

const BioLinks = () => (
  <>
    <EgoSection>
      <Wrapper>
        <SocialButton
          href="https://github.com/damianbudelewski"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon size="1x" icon={faGithubAlt} />
        </SocialButton>
        <SocialButton
          href="https://twitter.com/budelewski_d"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon size="1x" icon={faTwitter} />
        </SocialButton>
        <SocialButton
          href="https://linkedin.com/in/damianbudelewski"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon size="1x" icon={faLinkedin} />
        </SocialButton>
      </Wrapper>
    </EgoSection>
  </>
)

export default BioLinks