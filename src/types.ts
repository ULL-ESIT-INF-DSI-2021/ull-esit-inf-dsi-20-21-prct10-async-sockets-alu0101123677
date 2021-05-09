/**
 * Tipo que representa una petición de solicitud.
 * @param type que representa los tipos de solicitud.
 * @param user que representa el usuario.
 * @param title que representa el titulo de la nota.
 * @param body que representa el cuerpo de la nota.
 * @param color que representa el color de la nota.
 */
export type RequestType = {
  type: 'add' | 'modify' | 'remove' | 'read' | 'list';
  user: string;
  title?: string;
  body?: string;
  color?: string;
}

/**
 * Tipo que representa una respuesta del servidor.
 * @param type que representa los tipos de solicitud.
 * @param message que representa el contenido de la respuesta.
 */
export type ResponseType = {
  type: 'add' | 'modify' | 'remove' | 'read' | 'list';
  message: string;
}