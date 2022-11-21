export interface InnerLayout {
  h?: number;
  i?: string;
  minH?: number;
  minW?: number;
  moved?: boolean;
  static?: boolean;
  w?: number;
  x?: number;
  y?: number;
}

export interface MiddleLayout {
  lg?: InnerLayout[];
  xs?: InnerLayout[];
}

export interface Layout {
  [layouts: string]: MiddleLayout;
}
