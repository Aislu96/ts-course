function sum(a: number, b: number):number {
    return a + b
}
sum(2,3);

//ничего не дает, но завершится
function logo(name: string, userId?:string):void {
  console.log('Hello', name, 'with ID', userId || 'anonym');
}
logo('Aislu', '123');
//ничего не возвращает и не возвращает
function crash():never {
    throw new Error('crash');
}