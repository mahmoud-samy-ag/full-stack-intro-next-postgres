"use client";
import styles from "@/app/page.module.css";
import React, { useState } from "react";
import Link from "next/link";

export default function AddPost() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

   
    try{
        fetch('/api/sort-post', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: formData.title,
                content: formData.content,
            }),
        
        })
    } catch(error){
        console.error(error)
    }

    setFormData({
      title: "",
      content: "",
    });
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href={'/'}>Feed</Link>
        <h1>Add Post</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}
