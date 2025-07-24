import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Define an interface for the props that CardRoot expects.
interface CardRootProps {
  children: React.ReactNode; // 'children' can be any valid React child (elements, strings, numbers, etc.)
  title: string;             // 'title' is expected to be a string.
}

// Use React.FC to type the functional component and pass the props interface to it.
const CardRoot: React.FC<CardRootProps> = ({ children, title }) => {
  return (
    <Card sx={{
        backgroundColor: 'transparent',
        marginTop: 2,
        marginRight: 2,
        marginLeft: 2,
    }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
        >
          {title}
        </Typography>
        <Typography>
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardRoot;