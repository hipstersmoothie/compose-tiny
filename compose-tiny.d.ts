declare module 'compose-tiny' {

  const compose: typeof $;

  // Credits to <https://github.com/types/npm-ramda/>
  function $<R1>(fn1: () => R1): () => R1;
  function $<V1, R1>(fn1: (v1: V1) => R1): (v1: V1) => R1;
  function $<V1, V2, R1>(fn1: (v1: V1, v2: V2) => R1): (v1: V1, v2: V2) => R1;
  function $<V1, V2, V3, R1>(fn1: (v1: V1, v2: V2, v3: V3) => R1): (v1: V1, v2: V2, v3: V3) => R1;
  function $<V1, V2, V3, V4, R1>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1): (v1: V1, v2: V2, v3: V3, v4: V4) => R1;
  function $<V1, V2, V3, V4, V5, R1>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1;
  function $<V1, V2, V3, V4, V5, V6, R1>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1;
  function $<R1, R2>(fn2: (v: R1) => R2, fn1: () => R1): () => R2;
  function $<V1, R1, R2>(fn2: (v: R1) => R2, fn1: (v1: V1) => R1): (v1: V1) => R2;
  function $<V1, V2, R1, R2>(fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2) => R1): (v1: V1, v2: V2) => R2;
  function $<V1, V2, V3, R1, R2>(fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3) => R1): (v1: V1, v2: V2, v3: V3) => R2;
  function $<V1, V2, V3, V4, R1, R2>(fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1): (v1: V1, v2: V2, v3: V3, v4: V4) => R2;
  function $<V1, V2, V3, V4, V5, R1, R2>(fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R2;
  function $<V1, V2, V3, V4, V5, V6, R1, R2>(fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R2;
  function $<R1, R2, R3>(fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: () => R1): () => R3;
  function $<V1, R1, R2, R3>(fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1) => R1): (v1: V1) => R3;
  function $<V1, V2, R1, R2, R3>(fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2) => R1): (v1: V1, v2: V2) => R3;
  function $<V1, V2, V3, R1, R2, R3>(fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3) => R1): (v1: V1, v2: V2, v3: V3) => R3;
  function $<V1, V2, V3, V4, R1, R2, R3>(fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1): (v1: V1, v2: V2, v3: V3, v4: V4) => R3;
  function $<V1, V2, V3, V4, V5, R1, R2, R3>(fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R3;
  function $<V1, V2, V3, V4, V5, V6, R1, R2, R3>(fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R3;
  function $<R1, R2, R3, R4>(fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: () => R1): () => R4;
  function $<V1, R1, R2, R3, R4>(fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1) => R1): (v1: V1) => R4;
  function $<V1, V2, R1, R2, R3, R4>(fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2) => R1): (v1: V1, v2: V2) => R4;
  function $<V1, V2, V3, R1, R2, R3, R4>(fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3) => R1): (v1: V1, v2: V2, v3: V3) => R4;
  function $<V1, V2, V3, V4, R1, R2, R3, R4>(fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1): (v1: V1, v2: V2, v3: V3, v4: V4) => R4;
  function $<V1, V2, V3, V4, V5, R1, R2, R3, R4>(fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R4;
  function $<V1, V2, V3, V4, V5, V6, R1, R2, R3, R4>(fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R4;
  function $<R1, R2, R3, R4, R5>(fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: () => R1): () => R5;
  function $<V1, R1, R2, R3, R4, R5>(fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1) => R1): (v1: V1) => R5;
  function $<V1, V2, R1, R2, R3, R4, R5>(fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2) => R1): (v1: V1, v2: V2) => R5;
  function $<V1, V2, V3, R1, R2, R3, R4, R5>(fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3) => R1): (v1: V1, v2: V2, v3: V3) => R5;
  function $<V1, V2, V3, V4, R1, R2, R3, R4, R5>(fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1): (v1: V1, v2: V2, v3: V3, v4: V4) => R5;
  function $<V1, V2, V3, V4, V5, R1, R2, R3, R4, R5>(fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R5;
  function $<V1, V2, V3, V4, V5, V6, R1, R2, R3, R4, R5>(fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R5;
  function $<R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => R6, fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: () => R1): () => R6;
  function $<V1, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => R6, fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1) => R1): (v1: V1) => R6;
  function $<V1, V2, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => R6, fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2) => R1): (v1: V1, v2: V2) => R6;
  function $<V1, V2, V3, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => R6, fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3) => R1): (v1: V1, v2: V2, v3: V3) => R6;
  function $<V1, V2, V3, V4, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => R6, fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => R1): (v1: V1, v2: V2, v3: V3, v4: V4) => R6;
  function $<V1, V2, V3, V4, V5, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => R6, fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => R6;
  function $<V1, V2, V3, V4, V5, V6, R1, R2, R3, R4, R5, R6>(fn6: (v: R5) => R6, fn5: (v: R4) => R5, fn4: (v: R3) => R4, fn3: (v: R2) => R3, fn2: (v: R1) => R2, fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R1): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => R6;

  // Support unlimited arity with any in first function and higher number of composed functions
  function $<T1>(fn0: (...arg: any[]) => T1): (...arg: any[]) => T1;
  function $<T1, T2>(fn1: (a: T1) => T2, fn0: (...arg: any[]) => T1): (...arg: any[]) => T2;
  function $<T1, T2, T3>(fn2: (a: T2) => T3, fn1: (a: T1) => T2, fn0: (...arg: any[]) => T1): (...arg: any[]) => T3;
  function $<T1, T2, T3, T4>(fn3: (a: T3) => T4, fn2: (a: T2) => T3, fn1: (a: T1) => T2, fn0: (...arg: any[]) => T1): (...arg: any[]) => T4;
  function $<T1, T2, T3, T4, T5>(fn4: (a: T4) => T5, fn3: (a: T3) => T4, fn2: (a: T2) => T3, fn1: (a: T1) => T2, fn0: (...arg: any[]) => T1): (...arg: any[]) => T5;
  function $<T1, T2, T3, T4, T5, T6>(fn5: (a: T5) => T6, fn4: (a: T4) => T5, fn3: (a: T3) => T4, fn2: (a: T2) => T3, fn1: (a: T1) => T2, fn0: (...arg: any[]) => T1): (...arg: any[]) => T6;
  function $<T1, T2, T3, T4, T5, T6, T7>(fn6: (a: T6) => T7, fn5: (a: T5) => T6, fn4: (a: T4) => T5, fn3: (a: T3) => T4, fn2: (a: T2) => T3, fn1: (a: T1) => T2, fn0: (...arg: any[]) => T1): (...arg: any[]) => T7;
  function $<T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (a: T7) => T8, fn6: (a: T6) => T7, fn5: (a: T5) => T6, fn4: (a: T4) => T5, fn3: (a: T3) => T4, fn2: (a: T2) => T3, fn1: (a: T1) => T2, fn0: (...arg: any[]) => T1): (...arg: any[]) => T8;
  function $<T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (a: T8) => T9, fn7: (a: T7) => T8, fn6: (a: T6) => T7, fn5: (a: T5) => T6, fn4: (a: T4) => T5, fn3: (a: T3) => T4, fn2: (a: T2) => T3, fn1: (a: T1) => T2, fn0: (...arg: any[]) => T1): (...arg: any[]) => T9;
  function $<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(fn9: (a: T9) => T10, fn8: (a: T8) => T9, fn7: (a: T7) => T8, fn6: (a: T6) => T7, fn5: (a: T5) => T6, fn4: (a: T4) => T5, fn3: (a: T3) => T4, fn2: (a: T2) => T3, fn1: (a: T1) => T2, fn0: (...arg: any[]) => T1): (...arg: any[]) => T10;

  export = compose;
}
