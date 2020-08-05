import React from 'react'
import { Container, Spacer, Body, Title, Text, Button, Link } from '@core'
import { Logo } from '@components'
import { SHome } from './Home.styled'
import { HomeBackground } from './HomeBackground'

export const HomeView = () => {
  return (
    <SHome>
      <HomeBackground />
      <Container
        s={{ paddingX: 'm', maxWidth: 'auto', justifyContent: 'center' }}
      >
        <Spacer size="xl">
          <Spacer size="l" s={{ alignItems: 'center' }}>
            <Logo />
            <Body s={{ textAlign: 'center' }}>
              <Title level={5}>
                Extremely customizable Component Library
                <br /> and Toolkit for React
              </Title>
              <Text>
                Built with{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://styled-components.com/"
                >
                  Styled Components
                </a>{' '}
                and{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://styled-system.com/"
                >
                  Styled System
                </a>
                .
              </Text>
            </Body>
          </Spacer>
          <Spacer s={{ alignItems: 'center' }}>
            <Title level={6}>Documentation:</Title>
            <Spacer
              s={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Link to="/guides" s={{ textDecoration: 'none' }}>
                <Button>Guides</Button>
              </Link>
              <Link to="/components" s={{ textDecoration: 'none' }}>
                <Button isSecondary>Components</Button>
              </Link>
            </Spacer>
          </Spacer>
        </Spacer>
      </Container>
    </SHome>
  )
}
