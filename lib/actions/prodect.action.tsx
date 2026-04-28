export async function getprodect() {
   const data= await fetch('http://localhost:8000/api/prodect');
  const respance= await data.json();
  console.log(respance);
}