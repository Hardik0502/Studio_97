import React, { useState, useEffect, useRef } from 'react';

// Video component that auto-plays when scrolled into view
const ScrollVideo = ({ src, className = "" }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      className={`w-full h-full object-cover ${className}`}
    />
  );
};

const projectsData = [
  {
    id: 'studio97-romance',
    title: 'The Ring Story',
    type: 'Film & Photography',
    cover: 'https://images.pexels.com/photos/38531667/pexels-photo-38531667.jpeg?auto=compress&cs=tinysrgb&w=800',
    coverType: 'image',
    aspectRatio: 'aspect-[16/10]',
    gallery: [
      { type: 'image', url: 'https://images.pexels.com/photos/38531667/pexels-photo-38531667.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/38531668/pexels-photo-38531668.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'video', url: '/Videos/v1.mp4', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2016703/pexels-photo-2016703.jpeg?auto=compress&cs=tinysrgb&w=1600', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'video', url: '/Videos/v2.mp4', aspect: 'aspect-[9/16]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1814261/pexels-photo-1814261.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/10]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'video', url: '/Videos/v3.mp4', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/10]' }
    ]
  },
  {
    id: 'studio97-fashion',
    title: 'THE REVEAL',
    type: 'Cinematic Reel',
    cover: '/Videos/v1.mp4',
    coverType: 'video',
    aspectRatio: 'aspect-square',
    gallery: [
      { type: 'video', url: '/Videos/v1.mp4', aspect: 'aspect-square' },
      { type: 'image', url: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2016703/pexels-photo-2016703.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600', aspect: 'aspect-[16/9]' },
      { type: 'video', url: '/Videos/v2.mp4', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/38531667/pexels-photo-38531667.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'video', url: '/Videos/v3.mp4', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/38531668/pexels-photo-38531668.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/10]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/9]' },
      { type: 'video', url: '/Videos/v1.mp4', aspect: 'aspect-[9/16]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' }
    ]
  },
  {
    id: 'studio97-portrait',
    title: 'SILENT ELEGANCE',
    type: 'Monochrome Portrait',
    cover: 'https://images.pexels.com/photos/2016703/pexels-photo-2016703.jpeg?auto=compress&cs=tinysrgb&w=800',
    coverType: 'image',
    aspectRatio: 'aspect-[3/4]',
    gallery: [
      { type: 'image', url: 'https://images.pexels.com/photos/2016703/pexels-photo-2016703.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/38531667/pexels-photo-38531667.jpeg?auto=compress&cs=tinysrgb&w=1600', aspect: 'aspect-[16/9]' },
      { type: 'video', url: '/Videos/v3.mp4', aspect: 'aspect-[16/10]' },
      { type: 'image', url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/10]' },
      { type: 'image', url: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'video', url: '/Videos/v2.mp4', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/10]' }
    ]
  },
  {
    id: 'studio97-wedding',
    title: 'ROYAL SYMPHONY',
    type: 'Indian Wedding Film',
    cover: '/Videos/v2.mp4',
    coverType: 'video',
    aspectRatio: 'aspect-[16/9]',
    gallery: [
      { type: 'video', url: '/Videos/v2.mp4', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2016703/pexels-photo-2016703.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/38531667/pexels-photo-38531667.jpeg?auto=compress&cs=tinysrgb&w=1600', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1814261/pexels-photo-1814261.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'video', url: '/Videos/v1.mp4', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'video', url: '/Videos/v3.mp4', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' }
    ]
  },
  {
    id: 'studio97-newborn',
    title: 'PURE INNOCENCE',
    type: 'Baby Shoot',
    cover: 'https://images.pexels.com/photos/4445857/pexels-photo-4445857.jpeg',
    coverType: 'image',
    aspectRatio: 'aspect-[16/10]',
    gallery: [
      { type: 'image', url: 'https://images.pexels.com/photos/4445857/pexels-photo-4445857.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/10]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1814261/pexels-photo-1814261.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600', aspect: 'aspect-[16/9]' },
      { type: 'video', url: '/Videos/v3.mp4', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/38531667/pexels-photo-38531667.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/38531668/pexels-photo-38531668.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'video', url: '/Videos/v1.mp4', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' }
    ]
  },
  {
    id: 'studio97-family',
    title: 'JOYFUL CONNECTIONS',
    type: 'Family Film',
    cover: '/Videos/v3.mp4',
    coverType: 'video',
    aspectRatio: 'aspect-[3/4]',
    gallery: [
      { type: 'video', url: '/Videos/v3.mp4', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1814261/pexels-photo-1814261.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/38531667/pexels-photo-38531667.jpeg?auto=compress&cs=tinysrgb&w=1600', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'video', url: '/Videos/v2.mp4', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/10]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'video', url: '/Videos/v1.mp4', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' }
    ]
  },
  // NEW CARDS ADDED BELOW
  {
    id: 'studio97-editorial',
    title: 'VOGUE PERSPECTIVES',
    type: 'Fashion Editorial',
    cover: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    coverType: 'image',
    aspectRatio: 'aspect-[4/3]',
    gallery: [
      { type: 'image', url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'video', url: '/Videos/v1.mp4', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/10]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'video', url: '/Videos/v2.mp4', aspect: 'aspect-[9/16]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2016703/pexels-photo-2016703.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/38531667/pexels-photo-38531667.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' }
    ]
  },
  {
    id: 'studio97-street',
    title: 'URBAN ECHOES',
    type: 'Street Documentary',
    cover: 'https://res.cloudinary.com/ddhh0a3an/image/upload/v1782999599/samples/woman-on-a-football-field.jpg',
    coverType: 'image',
    aspectRatio: 'aspect-[16/9]',
    gallery: [
      { type: 'image', url: 'https://images.pexels.com/photos/1814261/pexels-photo-1814261.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'video', url: '/Videos/v3.mp4', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/10]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'video', url: '/Videos/v1.mp4', aspect: 'aspect-[16/9]' }
    ]
  },
  {
    id: 'studio97-architecture',
    title: 'CONCRETE REFLECTIONS',
    type: 'Architecture & Design',
    cover: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=800',
    coverType: 'image',
    aspectRatio: 'aspect-[3/4]',
    gallery: [
      { type: 'image', url: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/9]' },
      { type: 'video', url: '/Videos/v2.mp4', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/10]' }
    ]
  },
  {
    id: 'studio97-couture',
    title: 'HAUTE COUTURE',
    type: 'High Fashion Visuals',
    cover: '/Videos/v1.mp4',
    coverType: 'video',
    aspectRatio: 'aspect-[16/10]',
    gallery: [
      { type: 'video', url: '/Videos/v1.mp4', aspect: 'aspect-[16/10]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2016703/pexels-photo-2016703.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/9]' },
      { type: 'video', url: '/Videos/v3.mp4', aspect: 'aspect-[9/16]' }
    ]
  },
  {
    id: 'studio97-destination',
    title: 'THE COASTAL TALE',
    type: 'Pre-Wedding Story',
    cover: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    coverType: 'image',
    aspectRatio: 'aspect-[4/3]',
    gallery: [
      { type: 'image', url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'image', url: 'https://images.pexels.com/photos/38531668/pexels-photo-38531668.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'video', url: '/Videos/v2.mp4', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/10]' }
    ]
  },
  {
    id: 'studio97-aerial',
    title: 'SKYLINE HORIZONS',
    type: 'Drone Cinematography',
    cover: '/Videos/v3.mp4',
    coverType: 'video',
    aspectRatio: 'aspect-[16/9]',
    gallery: [
      { type: 'video', url: '/Videos/v3.mp4', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/10]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'video', url: '/Videos/v1.mp4', aspect: 'aspect-[4/3]' }
    ]
  },
  {
    id: 'studio97-wildlife',
    title: 'UNTAMED WHISPERS',
    type: 'Nature & Wildlife',
    cover: 'https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg?auto=compress&cs=tinysrgb&w=800',
    coverType: 'image',
    aspectRatio: 'aspect-[3/4]',
    gallery: [
      { type: 'image', url: 'https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1814261/pexels-photo-1814261.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'video', url: '/Videos/v2.mp4', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' }
    ]
  },
  {
    id: 'studio97-commercial',
    title: 'THE BRAND VISION',
    type: 'Commercial Showcase',
    cover: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800',
    coverType: 'image',
    aspectRatio: 'aspect-[16/10]',
    gallery: [
      { type: 'image', url: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/10]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'video', url: '/Videos/v1.mp4', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' }
    ]
  },
  {
    id: 'studio97-night',
    title: 'NOCTURNAL SOUL',
    type: 'Night Photography',
    cover: '/Videos/v2.mp4',
    coverType: 'video',
    aspectRatio: 'aspect-square',
    gallery: [
      { type: 'video', url: '/Videos/v2.mp4', aspect: 'aspect-square' },
      { type: 'image', url: 'https://images.pexels.com/photos/2016703/pexels-photo-2016703.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[16/9]' },
      { type: 'video', url: '/Videos/v3.mp4', aspect: 'aspect-[3/4]' }
    ]
  },
  {
    id: 'studio97-fineart',
    title: 'POETIC MOTION',
    type: 'Fine Art Project',
    cover: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800',
    coverType: 'image',
    aspectRatio: 'aspect-[3/4]',
    gallery: [
      { type: 'image', url: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' },
      { type: 'image', url: 'https://images.pexels.com/photos/38531667/pexels-photo-38531667.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[4/3]' },
      { type: 'video', url: '/Videos/v1.mp4', aspect: 'aspect-[16/9]' },
      { type: 'image', url: 'https://images.pexels.com/photos/1814261/pexels-photo-1814261.jpeg?auto=compress&cs=tinysrgb&w=1200', aspect: 'aspect-[3/4]' }
    ]
  }
];

const Section2 = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [highlightedId, setHighlightedId] = useState(null);
  const [scrollPos, setScrollPos] = useState(0);

  // Manage body scroll locking when lightbox opens/closes
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Sync with browser back button
  useEffect(() => {
    const handlePopState = (e) => {
      if (!e.state || !e.state.projectOpen) {
        setSelectedProject(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Restore main page scroll position on close
  useEffect(() => {
    if (!selectedProject) {
      window.scrollTo(0, scrollPos);
    }
  }, [selectedProject]);

  const handleOpenProject = (project) => {
    setScrollPos(window.scrollY);
    setHighlightedId(project.id);
    setSelectedProject(project);

    window.history.pushState({ projectOpen: true, id: project.id }, '', `#${project.id}`);
  };

  const handleCloseProject = () => {
    if (window.history.state && window.history.state.projectOpen) {
      window.history.back();
    } else {
      setSelectedProject(null);
    }
  };

  // Divide all projects evenly into columns
  const col1 = projectsData.filter((_, idx) => idx % 3 === 0);
  const col2 = projectsData.filter((_, idx) => idx % 3 === 1);
  const col3 = projectsData.filter((_, idx) => idx % 3 === 2);

  const mobileCol1 = projectsData.filter((_, idx) => idx % 2 === 0);
  const mobileCol2 = projectsData.filter((_, idx) => idx % 2 === 1);

  const renderMediaItem = (item, idx) => {
    return (
      <div key={idx} className={`w-full overflow-hidden bg-neutral-200 ${item.aspect}`}>
        {item.type === 'video' ? (
          <ScrollVideo src={item.url} />
        ) : (
          <img src={item.url} alt="" className="w-full h-full object-cover" />
        )}
      </div>
    );
  };

  const renderProjectCard = (project) => {
    const isHighlighted = highlightedId === project.id;

    return (
      <div
        key={project.id}
        id={`card-${project.id}`}
        onClick={() => handleOpenProject(project)}
        className={`group cursor-pointer mb-8 sm:mb-12 flex flex-col transition-all duration-300 ${
          isHighlighted ? 'ring-2 ring-neutral-900 ring-offset-4 ring-offset-[#f4f4f4] rounded-sm' : ''
        }`}
      >
        <div className={`w-full overflow-hidden bg-neutral-200 ${project.aspectRatio}`}>
          {project.coverType === 'video' ? (
            <ScrollVideo src={project.cover} />
          ) : (
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-full object-cover transition duration-700 ease-out brightness-[0.92] contrast-[0.95] group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-[1.02]"
            />
          )}
        </div>
        <div className="mt-2.5 sm:mt-3 px-1">
          <h3 className="text-base sm:text-2xl font-light tracking-tight text-neutral-900 group-hover:text-black leading-snug">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 font-normal mt-0.5">
            {project.type}
          </p>
        </div>
      </div>
    );
  };

  // Helper function to build dynamic asymmetrical layouts for mobile lightbox
  const renderMobileDynamicGallery = (items) => {
    const rows = [];
    let i = 0;

    while (i < items.length) {
      const pattern = rows.length % 5;

      if (pattern === 0) {
        // 1 Full-width spotlight
        rows.push(
          <div key={`mob-${i}`} className="w-full">
            {renderMediaItem(items[i], i)}
          </div>
        );
        i += 1;
      } else if (pattern === 1 || pattern === 3) {
        // 2-Column Grid with varying aspect items
        const chunk = items.slice(i, i + 2);
        rows.push(
          <div key={`mob-${i}`} className="grid grid-cols-2 gap-3 items-center">
            {chunk.map((item, idx) => renderMediaItem(item, i + idx))}
          </div>
        );
        i += chunk.length;
      } else if (pattern === 2) {
        // 3-Column Mini Grid
        const chunk = items.slice(i, i + 3);
        rows.push(
          <div key={`mob-${i}`} className="grid grid-cols-3 gap-2 items-center">
            {chunk.map((item, idx) => renderMediaItem(item, i + idx))}
          </div>
        );
        i += chunk.length;
      } else {
        // Asymmetrical Big & Small split
        const chunk = items.slice(i, i + 2);
        if (chunk.length === 2) {
          rows.push(
            <div key={`mob-${i}`} className="grid grid-cols-3 gap-3 items-center">
              <div className="col-span-2">{renderMediaItem(chunk[0], i)}</div>
              <div className="col-span-1">{renderMediaItem(chunk[1], i + 1)}</div>
            </div>
          );
        } else {
          rows.push(<div key={`mob-${i}`}>{renderMediaItem(chunk[0], i)}</div>);
        }
        i += chunk.length;
      }
    }

    return rows;
  };

  return (
    <section className="w-full bg-[#f4f4f4] text-neutral-900 min-h-screen px-4 sm:px-10 md:px-16 py-12 sm:py-16 font-sans">
      
      {/* SECTION HEADER & GRID (VISIBLE ONLY WHEN NO PROJECT IS OPEN) */}
      {!selectedProject && (
        <>
          <div className="max-w-3xl mb-12 sm:mb-20 text-base sm:text-xl leading-relaxed text-neutral-800 font-light">
            <p>
              Studio 97 is a premier photography and filmmaking house capturing weddings, fashion, portraits, and timeless visual stories. Discover our portfolio <a href="#about" className="underline underline-offset-4 text-neutral-900 font-medium hover:text-black">here</a>.
            </p>
          </div>

          <h2 className="text-xl sm:text-3xl font-light tracking-tight mb-6 sm:mb-10 text-neutral-900">
            Featured Projects
          </h2>

          {/* DESKTOP MASONRY GRID (3 Columns) */}
          <div className="hidden md:grid grid-cols-3 gap-8 md:gap-12 items-start">
            <div className="flex flex-col">{col1.map(renderProjectCard)}</div>
            <div className="flex flex-col">{col2.map(renderProjectCard)}</div>
            <div className="flex flex-col">{col3.map(renderProjectCard)}</div>
          </div>

          {/* MOBILE & TABLET MASONRY GRID (2 Columns) */}
          <div className="grid md:hidden grid-cols-2 gap-4 items-start">
            <div className="flex flex-col">{mobileCol1.map(renderProjectCard)}</div>
            <div className="flex flex-col">{mobileCol2.map(renderProjectCard)}</div>
          </div>
        </>
      )}

      {/* FULLSCREEN PROJECT LIGHTBOX */}
      {selectedProject && (
        <div className="fixed inset-0 z-100 bg-[#f4f4f4] text-neutral-900 overflow-y-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          
          {/* FIXED TOP HEADER */}
          <header className="sticky top-0 left-0 right-0 z-50 bg-[#f4f4f4]/90 backdrop-blur-md px-4 sm:px-10 md:px-16 py-4 sm:py-6 flex items-center justify-between border-b border-neutral-200">
            <div>
              <h1 className="text-lg sm:text-3xl font-light text-neutral-900 tracking-tight">
                {selectedProject.title}
              </h1>
              <p className="text-xs sm:text-sm text-neutral-500">{selectedProject.type}</p>
            </div>
            
            <button
              onClick={handleCloseProject}
              aria-label="Close Project"
              className="text-xs sm:text-sm uppercase tracking-widest px-4 py-2 bg-neutral-900 text-white rounded hover:bg-neutral-800 transition active:scale-95 cursor-pointer"
            >
              Close ✕
            </button>
          </header>

          {/* GALLERY CONTENT */}
          <main className="pt-8 sm:pt-12 max-w-6xl mx-auto space-y-8 sm:space-y-16 pb-24 px-3 sm:px-0">
            
            {/* DESKTOP GALLERY LAYOUT */}
            <div className="hidden sm:block space-y-12 sm:space-y-16">
              {/* 3-Grid Row */}
              {selectedProject.gallery.slice(0, 3).length > 0 && (
                <div className="grid grid-cols-3 gap-6 items-center">
                  {selectedProject.gallery.slice(0, 3).map((item, idx) => renderMediaItem(item, idx))}
                </div>
              )}

              {/* 1 Big Spotlight Row */}
              {selectedProject.gallery[3] && renderMediaItem(selectedProject.gallery[3], 3)}

              {/* 2-Grid Medium Row */}
              {selectedProject.gallery.slice(4, 6).length > 0 && (
                <div className="grid grid-cols-2 gap-8 items-center">
                  {selectedProject.gallery.slice(4, 6).map((item, idx) => renderMediaItem(item, idx + 4))}
                </div>
              )}

              {/* 3-Grid Mixed Row */}
              {selectedProject.gallery.slice(6, 9).length > 0 && (
                <div className="grid grid-cols-3 gap-6 items-center">
                  {selectedProject.gallery.slice(6, 9).map((item, idx) => renderMediaItem(item, idx + 6))}
                </div>
              )}

              {/* Extended Rows */}
              {selectedProject.gallery.slice(9, 11).length > 0 && (
                <div className="grid grid-cols-2 gap-8 items-center">
                  {selectedProject.gallery.slice(9, 11).map((item, idx) => renderMediaItem(item, idx + 9))}
                </div>
              )}

              {selectedProject.gallery.slice(11).length > 0 && (
                <div className="grid grid-cols-3 gap-6 items-center">
                  {selectedProject.gallery.slice(11).map((item, idx) => renderMediaItem(item, idx + 11))}
                </div>
              )}
            </div>

            {/* DYNAMIC ASYMMETRICAL MOBILE GALLERY */}
            <div className="block sm:hidden space-y-4">
              {renderMobileDynamicGallery(selectedProject.gallery)}
            </div>

          </main>
        </div>
      )}

    </section>
  );
};

export default Section2;