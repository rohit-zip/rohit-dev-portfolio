import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohit Parihar - Java Full Stack Developer",
  description: "Rohit Parihar a Java Full Stack Developer with 2 Years of experience, skilled in backend (Java Spring Boot, Microservices, PostgreSQL, MySQL, Elasticsearch) and frontend (React JS, Next JS, Redux, Axios, React Query) development. Proficient in creating scalable, high-performance systems and responsive user interfaces. Experienced in Agile methodologies and Test-Driven Development (TDD), ensuring high-quality software delivery. Actively contributes to the open-source project \"Bloggios,\" featuring a microservices architecture, Spring Boot backend, Next JS and React JS frontend, and Flutter mobile app components, showcasing commitment to community-driven development and knowledge sharing.",
  keywords: "Rohit, Rohit Parihar, Rohit Software Engineer, Software Engineer, Rohit Software Developer, Rohit SDE-2, Rohit Parihar SDE-2, Rohit Java Developer, Rohit Parihar Java, Rohit Java, Rohit Parihar Java Full Stack Developer, Rohit Java Full Stack Developer, Rohit GlobalLogic, Rohit Parihar GlobalLogic, Rohit Hitachi, Rohit Parihar Hitachi, Passionate Java Full Stack Developer, Java Rohit, Rohit Spring Boot, Rohit Spring, Rohit Parihar Spring, Rohit Parihar Spring Boot Developer, Rohit Parihar Spring Boot Microservices, Rohit Parihar Architect, Rohit Parihar Technical Trainer, Rohit Parihar React Developer, Rohit React, Rohit Parihar React, Rohit React Developer, Rohit Next.js Developer, Rohit Parihar Next.js Developer, Rohit Next.js, Rohit Parihar Next.js, Rohit Flutter, Rohit Flutter Developer, Rohit Parihar Flutter, Rohit Parihar Flutter Developer, Rohit Parihar Python Developer, Rohit Parihar Bloggios, Rohit Bloggios, Bloggios, rohit-zip, beingrohit-exe, Rohit Parihar Linkedin, Rohit Linkedin",
  twitter: {
    card: "summary_large_image",
    images: {
      url: "https://rohit.bloggios.com/opengraph-image.png"
    }
  },
  openGraph: {
    images: {
      url: "https://rohit.bloggios.com/opengraph-image.png",
      href: "https://rohit.bloggios.com/opengraph-image.png"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={'dark'}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
