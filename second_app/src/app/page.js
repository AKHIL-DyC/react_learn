"use client"
import Image from 'next/image'
import styles from './page.module.css'
import pic from '../../public/bg.avif'
import { useState } from 'react';
export default function Home() {
  const[count,setcount]=useState(0);
  let i=0;
  const Adder=()=>{
    setcount(count+1)
  }
  const Minus=()=>{
    setcount(count-1)
  }
  return (
    <main className={styles.main}>
      <div className={styles.bg}>
        <Image src={pic} className={styles.img} alt='image'></Image>
      </div>
      <div className={styles.navbar}></div>
      <div className={styles.heading}>
      <div className={styles.count}><h1>The number of tree is  {count}</h1></div>
      </div>
      <div className={styles.buttonContainer}>
      <div className={styles.button} onClick={Minus}>Cut</div>
      <div className={styles.button} onClick={Adder}>Plant</div>
      </div>
    </main>
  )
}
