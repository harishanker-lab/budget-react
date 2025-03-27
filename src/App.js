
import { Button, Container, Form, Grid, GridRow, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return ( 
    <Container>
      <Header as='h1'>Budget</Header>
      <Statistic size='small'>
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
            <Statistic size='tiny'color='green'>
            <Statistic.Label style={{ textAlign: 'left' }}>
                Incoming:
              </Statistic.Label>
              <Statistic.Value>1,045.50</Statistic.Value>
            </Statistic>
           </Grid.Column>
            <Grid.Column>
            <Statistic size='tiny'color='red'>
            <Statistic.Label style={{ textAlign: 'left' }}>
                Expenses:
                </Statistic.Label>
              <Statistic.Value>635.50</Statistic.Value>
            </Statistic>
           </Grid.Column>
           </Grid.Row>
        </Grid>
        </Segment>
        <Header as='h3'>History</Header>
        <Segment color='red'>
          <Grid columns={3} textAlign='right'>
            <GridRow>
              <Grid.Column width={10} textAlign='left'>
                something
              </Grid.Column>
              <Grid.Column width={3} textAlign='right'>
                $10.00
              </Grid.Column>
             <Grid.Column width={3}> 
                <Icon name='edit'bordered/>
                <Icon name='trash'bordered/>
              </Grid.Column>
            </GridRow>
          </Grid>
        </Segment>
        <Segment color='green'>
          <Grid columns={3} textAlign='right'>
            <GridRow>
              <Grid.Column width={10} textAlign='left'>
                something else
              </Grid.Column>
              <Grid.Column width={3} textAlign='right'>
                $100.00
              </Grid.Column>
             <Grid.Column width={3}> 
                <Icon name='edit'bordered/>
                <Icon name='trash'bordered/>
              </Grid.Column>
            </GridRow>
          </Grid>
        </Segment>
        <Segment color='red'>
          <Grid columns={3} textAlign='right'>
            <GridRow>
              <Grid.Column width={10} textAlign='left'>
                something
              </Grid.Column>
              <Grid.Column width={3} textAlign='right'>
                $20.00
              </Grid.Column>
             <Grid.Column width={3}> 
                <Icon name='edit'bordered/>
                <Icon name='trash'bordered/>
              </Grid.Column>
            </GridRow>
          </Grid>
        </Segment>
        <Header as='h3'>Add new transaction</Header>
        <Form unstackable>
          <Form.Group>
            <Form.Input icon='tags' 
            width={12} 
            label="Description" 
            placeholder="New shinny thing"
            />
            <Form.Input 
            width={4} 
            label='value'
            placeholder="100.00" 
            icon='dollar'
            iconPosition='left'
            ></Form.Input>
            </Form.Group>
            <Button.Group style={{marginTop:20}}> 
              <Button>cancel</Button>
              <Button.Or/>
              <Button primary>ok</Button>

            </Button.Group>

        </Form>
    </Container>
  );
  
}

export default App;
