declare type App = {
  isFirstTime?: boolean;
};
declare type Status = 'loading' | 'failed' | 'none' | 'success';
declare interface Result<T> {
  status: string;
  results: T;
}
declare interface Navigate<T> {
  route?: Route<T>;
}

declare interface Route<T> {
  key?: string;
  name?: string;
  params?: T;
}
declare enum MethodHttp {
  GET = 'GET',
  POST = 'POST',
}

declare type LoginInput = {
  username: string;
  password: string;
};
type Without<T, K> = Pick<T, Exclude<keyof T, K>>;
type RemoveComponentProps<T> = Without<
  Without<T, 'accessibilityRole'>,
  'accessibilityState'
>;
