export interface SelectItem<T extends number | string = string>
{
    label: string;
    value: T;
}
