declare module 'compose-tiny' {
  type Compose = (...functions: Function[]) => (arg: any) => any;

  const compose: Compose;
  export = compose;
}
