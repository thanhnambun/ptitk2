type A={
    name:string
}
type B={
   address: string,
   id: number
}
type C=A & B
 let c1 : C={
    name:"name",
    address:"hn",
    id:5
 }