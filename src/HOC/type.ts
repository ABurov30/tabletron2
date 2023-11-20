export interface IProps {
  children: React.ReactNode;
}

export interface IState {
  hasError: boolean;
  error: Error | null;
}
