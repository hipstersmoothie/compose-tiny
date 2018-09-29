declare module 'compose-tiny' {
  type Step = (arg: any) => any
  type Compose = (...functions: Step[]) => (arg: any) => any;

  const compose: Compose;
  export = compose;
}
