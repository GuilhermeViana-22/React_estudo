import React, { useState } from 'react';
import './App.css'

const carros = [
  {
    categoria: "esporte",
    preco: "10.000",
    modelo: "golf gti",

  },
  {
    categoria: "esporte",
    preco: "120.000",
    modelo: "camaro",

  },
  {
    categoria: "SUV",
    preco: "85.000",
    modelo: "savero",

  },
  {
    categoria: "Utilitário",
    preco: "10.000",
    modelo: "ford ranger",

  },
  {
    categoria: "classico",
    preco: "8.000",
    modelo: "versalhes",

  },
  {
    categoria: "esporte",
    preco: "8.000",
    modelo: "versalhes",

  },
    {
    categoria: "Luxo",
    preco: "1.100.000",
    modelo: "Lanborguini",

  }
]

const linhas = (cat) =>{
  
  const li =[]

  carros.forEach((carro)=>{
    if(carro.categoria.toLocaleUpperCase() === cat.toLocaleUpperCase() || cat.toLocaleUpperCase() === ''){
      li.push(
        <tr>
        <th>{carro.categoria}</th>
        <th>{carro.preco}</th>
        <th>{carro.modelo}</th>
      </tr>
      )

    }
  })
  return li
}

const tabelaCarros = (cat) => {
  return (
    <table border='1' style={{ borderCollapse: 'collapse' }}>
      <thead>
         <tr>
           <th>Categoria</th>
           <th>Preço</th>
           <th>Modelo</th>
         </tr>
      </thead>
      
      <tbody>
        {linhas(cat)}
      </tbody>
    </table>
  );
}

const PesquisarCategoria = (cat , scat) => {
  return(
    <div>
      <label className="label">Digite uma categoria</label>
      <br/>
      <br/>
      <input placeholder="digite a categoria que deseja filtrar" type="text" value={cat} onChange={(e)=>scat(
        e.target.value
      )}/>
    </div>
  )
}

export default function App() {
  const [categoria , setCatergoria] = useState('');
  return (
    <>
    <br/>
    {PesquisarCategoria(categoria , setCatergoria)}
    <br/>
      {tabelaCarros(categoria)}
    </>
  );

}
