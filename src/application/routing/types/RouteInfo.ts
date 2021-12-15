export interface RouteInfo {
  path: string;
  label: string;
  main: React.FC;
  exact?: boolean;
}
