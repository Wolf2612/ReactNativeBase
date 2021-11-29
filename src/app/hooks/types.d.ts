declare type ValueForm = string | undefined;
declare type FormDataType<T> = {[key in keyof T]?: T[key]};
declare type FormDataOptionalType<T> = {[key in keyof T]?: ValueForm};
declare type ReturnTypeValidate<T> = [boolean, FormDataType<T>];
declare type FuncValidate<T> = () => ReturnTypeValidate<T>;
