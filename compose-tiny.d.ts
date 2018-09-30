declare module 'compose-tiny' {
  function Compose<T1>(fn0: (...args: any[]) => T1): (...arg: any[]) => T1;

  function Compose<T1, T2>(
    fn1: (a: T1) => T2,
    fn0: (...args: any[]) => T1
  ): (...arg: any[]) => T2;

  function Compose<T1, T2, T3>(
    fn2: (a: T2) => T3,
    fn1: (a: T1) => T2,
    fn0: (...args: any[]) => T1
  ): (...arg: any[]) => T3;

  function Compose<T1, T2, T3, T4>(
    fn3: (a: T3) => T4,
    fn2: (a: T2) => T3,
    fn1: (a: T1) => T2,
    fn0: (...args: any[]) => T1
  ): (...arg: any[]) => T4;

  function Compose<T1, T2, T3, T4, T5>(
    fn4: (a: T4) => T5,
    fn3: (a: T3) => T4,
    fn2: (a: T2) => T3,
    fn1: (a: T1) => T2,
    fn0: (...args: any[]) => T1
  ): (...arg: any[]) => T5;

  function Compose<T1, T2, T3, T4, T5, T6>(
    fn5: (a: T5) => T6,
    fn4: (a: T4) => T5,
    fn3: (a: T3) => T4,
    fn2: (a: T2) => T3,
    fn1: (a: T1) => T2,
    fn0: (...args: any[]) => T1
  ): (...arg: any[]) => T6;

  function Compose<T1, T2, T3, T4, T5, T6, T7>(
    fn6: (a: T6) => T7,
    fn5: (a: T5) => T6,
    fn4: (a: T4) => T5,
    fn3: (a: T3) => T4,
    fn2: (a: T2) => T3,
    fn1: (a: T1) => T2,
    fn0: (...args: any[]) => T1
  ): (...arg: any[]) => T7;

  function Compose<T1, T2, T3, T4, T5, T6, T7, T8>(
    fn7: (a: T7) => T8,
    fn6: (a: T6) => T7,
    fn5: (a: T5) => T6,
    fn4: (a: T4) => T5,
    fn3: (a: T3) => T4,
    fn2: (a: T2) => T3,
    fn1: (a: T1) => T2,
    fn0: (...args: any[]) => T1
  ): (...arg: any[]) => T8;

  function Compose<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    fn8: (a: T8) => T9,
    fn7: (a: T7) => T8,
    fn6: (a: T6) => T7,
    fn5: (a: T5) => T6,
    fn4: (a: T4) => T5,
    fn3: (a: T3) => T4,
    fn2: (a: T2) => T3,
    fn1: (a: T1) => T2,
    fn0: (...args: any[]) => T1
  ): (...arg: any[]) => T9;

  function Compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    fn8: (a: T9) => T10,
    fn7: (a: T7) => T8,
    fn6: (a: T6) => T7,
    fn5: (a: T5) => T6,
    fn4: (a: T4) => T5,
    fn3: (a: T3) => T4,
    fn2: (a: T2) => T3,
    fn1: (a: T1) => T2,
    fn0: (...args: any[]) => T1
  ): (...arg: any[]) => T10;

  type Step = (arg: any) => any;
  type FirstStep = (...arg: any[]) => any;

  function Compose(
    ...functions: Array<Step | FirstStep>
  ): (...arg: any[]) => any;

  export = Compose;
}
