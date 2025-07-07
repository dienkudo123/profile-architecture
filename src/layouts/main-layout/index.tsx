import React from 'react';

export const MainLayout = ({ children }: { children: React.ReactNode }) => (
    <div>
        <header>📐 Hồ sơ kiến trúc sư</header>
        <main>{children}</main>
        <footer>© 2025 Nguyễn Văn A</footer>
    </div>
);
