// Import necessary modules and components
import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Manrope } from 'next/font/google';
import Navbar from '@/components/navbar';
import '../globals.css';
import type { Metadata } from 'next';

// Initialize the Manrope font
const manrope = Manrope({ subsets: ['latin'] });

// Define metadata for the page
export const metadata: Metadata = {
  title: 'IbadanAgent admin-dashboard',
  description: 'Admin section for Ibadan Agent',
};

// Define the RootLayout component
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={manrope.className}>
        {/* Wrap the entire content in a container */}
        <div className="flex flex-col min-h-screen ">
          {/* Include the Navbar component */}
          <Navbar />
          {/* Main content area */}
        <div className='w-full justify-center items-center flex flex-col'>
        <main className="mt-[12rem] lg:w-[85%] w-[95%] ">{children}</main>
        </div>
          {/* Add a footer or any other common elements here if needed */}
        </div>
      </body>
    </html>
  );
}
