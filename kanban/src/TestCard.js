import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';

// const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const TestCards = () => (
  <Card style={{width: '33%',height:'100%', 'borderStyle': 'solid'}}>
    <CardTitle
      title="TODO"
      subtitle="todo"
    />
    <CardMedia
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <CardTitle
      title="Title goes here"
      subtitle="Subtitle here"
    />
    {/* <CardText>{dummyText}</CardText> */}
    <CardActions /*theme={theme}*/>
      <Button label="Action 1" />
      <Button label="Action 2" />
    </CardActions>
  </Card>
);

export default TestCards;
