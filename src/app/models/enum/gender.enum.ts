export enum GenderEnum {
    Man = 0,
    Women = 1
}
  
export const GenderEnumLabel = new Map<number, string>([
    [GenderEnum.Man, 'Hombre'],
    [GenderEnum.Women, 'Mujer']
]);