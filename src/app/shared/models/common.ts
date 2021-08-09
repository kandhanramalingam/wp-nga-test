type fn = (key: string) => any;
export interface Common {
  type: 'html' | 'txt';
  label: string;
  value?: string;
  action?: fn;
}
