type fn = (key: string) => any;
export interface Key{
  type: 'html' | 'txt';
  label: string;
  value: string;
  action: fn;
}
