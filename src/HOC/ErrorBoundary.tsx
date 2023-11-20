import React from 'react';
import { IProps, IState } from './type';
import { RestartButton } from '../ui/RestartButton/RestartButton';
import './ErrorBoundary.css';

export class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error({ Error: error, ErrorInfo: errorInfo });
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className='error-container'>
          <h1>{'Something went wrong:('}</h1>
          <h2>Restart?</h2>
          <RestartButton />
        </div>
      );
    }
    return this.props.children;
  }
}
