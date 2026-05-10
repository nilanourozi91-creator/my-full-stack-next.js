export async function GetAllProdect() {
   try {
     const res = await fetch('http://localhost:8000/api/prodect');

     if (!res.ok) throw new Error('Failed to fetch');

     const data = await res.json();

     return data.data || [];
   } catch (error) {
     console.error(error);
     return [];
   }
}


export async function GetSingleProdect(id: number) {


   try {
     const res = await fetch(`http://localhost:8000/api/prodect/${id}`);

     if (!res.ok) throw new Error('Failed to fetch');

     const data = await res.json();

     return data.data || [];
   } catch (error) {
     console.error(error);
     return [];
   }
  }