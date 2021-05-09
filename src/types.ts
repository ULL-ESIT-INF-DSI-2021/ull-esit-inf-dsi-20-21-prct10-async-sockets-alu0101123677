export type RequestType = {
  type: 'add' | 'modify' | 'remove' | 'read' | 'list';
  user: string;
  title?: string;
  body?: string;
  color?: string;
}

export type ResponseType = {
  type: 'add' | 'modify' | 'remove' | 'read' | 'list';
  message: string;
}