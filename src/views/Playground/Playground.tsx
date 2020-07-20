import React from 'react'
import {
  List,
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Link,
  Input,
  ListItem,
  Container,
  Spacer,
  Label,
  Title,
  Select,
  Row,
  Col,
  Box,
  Text,
  Wrapper,
  Body,
  TextArea,
  Progress,
  ElementGroup,
} from '@core'
import { Preview } from '../../components'

export const PlaygroundView = () => {
  return (
    <Wrapper>
      <Container style={{ paddingTop: '300px' }}>
        <Spacer>
          <Preview title="Grid (auto)">
            <Row>
              <Col>
                <Box isPreview>Col Auto</Box>
              </Col>
              <Col>
                <Box isPreview>Col Auto</Box>
              </Col>
              <Col>
                <Box isPreview>Col Auto</Box>
              </Col>
              <Col>
                <Box isPreview>Col Auto</Box>
              </Col>
            </Row>
          </Preview>

          <Preview title="Grid (with widths)">
            <Row>
              <Col width={20}>
                <Box isPreview>Col 20%</Box>
              </Col>
              <Col width={40}>
                <Box isPreview>Col 40%</Box>
              </Col>
              <Col width={40}>
                <Box isPreview>Col 40%</Box>
              </Col>
            </Row>
          </Preview>

          <Preview title="Titles">
            <Title level={1}>Title 1</Title>
            <Title level={2}>Title 2</Title>
            <Title level={3}>Title 3</Title>
            <Title level={4}>Title 4</Title>
            <Title level={5}>Title 5</Title>
            <Title level={6}>Title 6</Title>
          </Preview>

          <Preview title="Text">
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              voluptatem, debitis incidunt nesciunt non fuga perferendis
              exercitationem esse fugiat magnam culpa, nemo dolores voluptates
              error, corporis numquam! Vel, assumenda similique.
            </Text>
            <Text type="small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque natus quas tenetur aliquid ullam corrupti cupiditate
              vitae. Nemo eaque voluptatibus officiis dolor incidunt! Dolore ab
              molestiae dolores nam! Doloribus, eum?
            </Text>
          </Preview>

          <Preview title="Body">
            <Body>
              <p>
                Lorem, ipsum dolor <a href="/example">sit amet consectetur</a>{' '}
                adipisicing elit. Sed tenetur rerum nemo quo eligendi quae amet
                quidem facere eos, saepe doloribus. Aperiam, deserunt?
                Distinctio quam vel animi nesciunt atque corporis?
              </p>
              <a href="/example">Repellat pariatur hic quod</a>
              <ul>
                <li>Itaque dignissimos non magnam</li>
                <li>Vitae excepturi ad iste</li>
                <li>Corporis perspiciatis obcaecati</li>
              </ul>
              <Button>Sapiente officiis</Button>
            </Body>
          </Preview>

          <Preview title="Buttons">
            <Button>Button</Button>
            <Button isSecondary>Secondary Button</Button>
            <Button isOutline>Outline Button</Button>
            <Button isDisabled>Disabled Button</Button>
            <Button isBlock>Block Button</Button>
          </Preview>

          <Preview title="Label">
            <Label>Label</Label>
            <Label isSecondary>Secondary Label</Label>
            <Label isOutline>Outline Label</Label>
          </Preview>

          <Preview title="Cards">
            <Card>Card without header</Card>
            <Card header="Card Header">Card with header</Card>
          </Preview>

          <Preview title="Input">
            <Input />
            <Input isPositive value="For when value is correct" />
            <Input isNegative value="For when value is incorrect" />
          </Preview>

          <Preview title="TextArea">
            <TextArea />
          </Preview>

          <Preview title="Checkbox">
            <Checkbox />
            <Checkbox isChecked />
            <Checkbox isChecked isDisabled />
            <Checkbox label="Checkbox with label" />
            <Checkbox isChecked label="Checked Checkbox with label" />
            <Checkbox
              isChecked
              isDisabled
              label="Checked disabled Checkbox with label"
            />
          </Preview>

          <Preview title="CheckboxGroup">
            <CheckboxGroup
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
                { label: 'Option 3', value: 3, isChecked: true },
                { label: 'Option 4', value: 4 },
              ]}
            />
          </Preview>

          <Preview title="Select Field">
            <Select
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
                { label: 'Option 3', value: 3 },
                { label: 'Option 4', value: 4 },
              ]}
            />

            <Select
              multiple
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
                { label: 'Option 3', value: 3 },
                { label: 'Option 4', value: 4 },
              ]}
            />
          </Preview>

          <Preview title="Progress">
            <Progress amount={40} />
          </Preview>

          <Preview title="Links">
            <Link to="/location">Link</Link>
          </Preview>

          <Preview title="Lists">
            <List>
              <ListItem>List Item 1</ListItem>
              <ListItem>List Item 2</ListItem>
              <ListItem>List Item 3</ListItem>
            </List>
          </Preview>

          <Preview title="ElementGroup">
            <ElementGroup>
              <Label>Label 1</Label>
              <Label isSecondary>Label 2</Label>
              <Label isOutline>Label 3</Label>
            </ElementGroup>
            <ElementGroup>
              <Button>Button 1</Button>
              <Button isSecondary>Button 2</Button>
              <Button isOutline>Button 3</Button>
            </ElementGroup>
            <ElementGroup>
              <Label isOutline>Label</Label>
              <Input placeholder="Input" />
              <Button>Button</Button>
            </ElementGroup>
            <ElementGroup style={{ '> *': { borderRadius: 'l' } }}>
              <Label isOutline>Label</Label>
              <Input placeholder="Input" />
              <Button>Button</Button>
            </ElementGroup>
          </Preview>
        </Spacer>
      </Container>
    </Wrapper>
  )
}
