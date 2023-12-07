import { useRef, RefObject } from 'react';

interface KeyedRef<T> {
  key: string;
  ref: RefObject<T>;
}

class RefGenerator<T> {
  private refs: KeyedRef<T>[] = [];

  ref(key: string): RefObject<T> {
    const existingRef = this.refs.find((ref) => ref.key === key);

    if (existingRef) {
      return existingRef.ref;
    }

    const newRef: KeyedRef<T> = {
      key,
      ref: useRef<T>(null),
    };

    this.refs.push(newRef);

    return newRef.ref;
  }
}

export function useRefs() {
  return (new RefGenerator<HTMLDivElement>());
}