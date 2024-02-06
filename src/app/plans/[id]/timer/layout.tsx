import React from 'react';

export default async function TimerLayout({
                                            children,
                                          }: Readonly<{
  children: React.ReactNode;
}>) {

  return (<div>
      {children}
    </div>
  );
}
