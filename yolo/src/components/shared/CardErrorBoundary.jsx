import React from 'react';
import {
  Card, CardContent
} from '@material-ui/core';

export default class CardErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      // logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <Card>
            <CardContent>
              <span>Unable to get data provided.</span>
            </CardContent>
          </Card>
        );
      }
  
      return this.props.children; 
    }
}